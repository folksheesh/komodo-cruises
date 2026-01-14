// Use local API during development, switch to production URL when deployed
const BASE_URL = import.meta.env.DEV 
  ? "http://127.0.0.1:8787" 
  : "http://127.0.0.1:8787";

// Types
export type CabinItem =
  | string
  | {
      name: string;
      available?: number;
      id?: string;
      shipname?: string;
      /** Some sheets use "cabin name" as a key */
      [key: string]: any;
    };
export type CabinOperator = { operator: string; cabins: CabinItem[] };
export type CabinsResponse = { ok: true; resource: 'cabins'; operators: CabinOperator[]; allCabins: string[] };
export type AvailabilityOperator = { operator: string; total: number; cabins: CabinItem[] };
export type AvailabilityResponse = { ok: true; date: string; total: number; operators: AvailabilityOperator[] };
export type OperatorItem = { operator: string; sourceSheet: string };
export type OperatorsResponse = { ok: true; resource: 'operators'; total: number; operators: OperatorItem[] };

export type ShipDetail = {
  id: string; // From ID column
  name: string; // From NAME BOAT
  description: string; // From DESCRIPTION
  mainImage: string; // From MAIN DISPLAY
  images: string[]; // From PICTURE_1, PICTURE_2, etc. (normalized)
  specs: Record<string, string>; // Dynamic columns like WIFI, STARLINK, etc.
};
export type ShipDetailsResponse = { ok: true; resource: 'shipdetail'; ships: ShipDetail[] };

// Utility functions
function buildUrl(params: Record<string, string | undefined>): string {
  const url = new URL(BASE_URL);
  const searchParams = new URLSearchParams();
  
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      searchParams.set(key, value);
    }
  }
  
  url.search = searchParams.toString();
  return url.toString();
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  if (data?.ok === false) {
    throw new Error(data.error || 'API error');
  }
  
  return data as T;
}

// In-memory cache for getCabins
const cabinsCache = new Map<string, CabinsResponse>();
// In-memory cache and in-flight map for getAvailability
const availabilityCache = new Map<string, AvailabilityResponse>();
const availabilityInflight = new Map<string, Promise<AvailabilityResponse>>();
// In-memory cache for operators
let operatorsCache: OperatorsResponse | null = null;
const shipDetailsCache = new Map<string, ShipDetailsResponse>();

// API functions
export async function getOperators(): Promise<OperatorsResponse> {
  if (operatorsCache) return operatorsCache;

  const url = buildUrl({ resource: 'operators' });
  const response = await fetch(url);
  const data = await handleResponse<OperatorsResponse>(response);
  operatorsCache = data;
  return data;
}

export async function getCabins(sheet?: string): Promise<CabinsResponse> {
  const cacheKey = `cabins|${sheet || ''}`;
  
  if (cabinsCache.has(cacheKey)) {
    return cabinsCache.get(cacheKey)!;
  }
  
  const url = buildUrl({ resource: 'cabins', sheet });
  const response = await fetch(url);
  const data = await handleResponse<CabinsResponse>(response);
  
  cabinsCache.set(cacheKey, data);
  return data;
}

// Helper to get direct GDrive link
function getDirectGDriveLink(url: string): string {
  if (!url) return '';
  // Try to extract ID
  const idMatch = url.match(/[-\w]{25,}/);
  if (idMatch) {
      return `https://lh3.googleusercontent.com/d/${idMatch[0]}`;
  }
  return url;
}



export async function getShipDetails(sheet: string = "Ship Detail"): Promise<ShipDetailsResponse> {
  // Check memory cache first
  const cacheKey = `shipdetail|${sheet}`;
  if (shipDetailsCache.has(cacheKey)) {
    return shipDetailsCache.get(cacheKey)!;
  }

  // Check localStorage cache (persistent across refreshes)
  const CACHE_duration = 60 * 60 * 1000; // 1 hour
  const stored = localStorage.getItem(cacheKey);
  if (stored) {
    try {
      const { timestamp, data } = JSON.parse(stored);
      if (Date.now() - timestamp < CACHE_duration) {
        shipDetailsCache.set(cacheKey, data); // Hydrate memory cache
        return data;
      }
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }

  // Use 'cabins' resource as a generic sheet reader
  const url = buildUrl({ resource: 'cabins', sheet });
  const response = await fetch(url);
  
  // We expect a CabinsResponse structure but we'll map it to ShipDetails
  const data = await handleResponse<CabinsResponse>(response);

  const ships: ShipDetail[] = [];
  
  if (data.operators) {
      const safeGetValue = (row: any, key: string): string => {
          // Try exact match
          if (row[key]) return row[key];
          // Try lowercase/formatted match
          const normalizedKey = key.toLowerCase().replace(/\s+/g, '');
          const foundKey = Object.keys(row).find(k => k.toLowerCase().replace(/\s+/g, '') === normalizedKey);
          return foundKey ? row[foundKey] : '';
      };

      data.operators.forEach(op => {
          op.cabins.forEach(row => {
               if (typeof row === 'object') {
                   // Map row columns to ShipDetail using robust lookup
                   const name = safeGetValue(row, 'NAME BOAT') || row.name || '';
                   if (!name) return; // Skip invalid rows

                   const id = safeGetValue(row, 'ID') || name.replace(/\s+/g, '_').toUpperCase();
                   
                   // Collect images
                   const images: string[] = [];
                   // Check for PICTURE_1 to PICTURE_20
                   for (let i = 1; i <= 20; i++) {
                       const val = safeGetValue(row, `PICTURE_${i}`);
                       if (val) images.push(getDirectGDriveLink(val));
                   }

                   // Map specs (dynamic)
                   const specs: Record<string, string> = {};
                   const knownKeys = ['ID', 'NAME BOAT', 'DESCRIPTION', 'MAIN DISPLAY'];
                   // We want to avoid polluting specs with normalized keys if possible, 
                   // but for now let's just grab what isn't a known structural key.
                   // Actually, safer to just iterate keys present in row.
                   Object.keys(row).forEach(k => {
                        const val = row[k];
                        // normalization check
                        const normK = k.toUpperCase();
                        if (!knownKeys.includes(normK) && !normK.startsWith('PICTURE')) {
                            specs[k] = val;
                        }
                   });

                   const mainDisplayVal = safeGetValue(row, 'MAIN DISPLAY');
                   const mainImage = mainDisplayVal ? getDirectGDriveLink(mainDisplayVal) : (images.length ? images[0] : '');

                   ships.push({
                       id,
                       name,
                       description: safeGetValue(row, 'DESCRIPTION'),
                       mainImage,
                       images,
                       specs
                   });
               }
          });
      });
  }

  const result: ShipDetailsResponse = { ok: true, resource: 'shipdetail', ships };
  
  // Save to memory cache
  shipDetailsCache.set(cacheKey, result);
  
  // Save to localStorage cache
  try {
    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data: result
    }));
  } catch (e) {
    console.warn("Quota exceeded or storage disabled", e); 
  }
  
  return result;
}

export async function getAvailability(date: string, sheet?: string): Promise<AvailabilityResponse> {
  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error('Date must be in YYYY-MM-DD format');
  }

  const cacheKey = `${date}|${sheet || ''}`;
  if (availabilityCache.has(cacheKey)) {
    return availabilityCache.get(cacheKey)!;
  }
  if (availabilityInflight.has(cacheKey)) {
    return availabilityInflight.get(cacheKey)!;
  }

  const url = buildUrl({ resource: 'availability', date });
  const promise = fetch(url)
    .then(resp => handleResponse<AvailabilityResponse>(resp))
    .then(data => {
      availabilityCache.set(cacheKey, data);
      availabilityInflight.delete(cacheKey);
      return data;
    })
    .catch(err => {
      availabilityInflight.delete(cacheKey);
      throw err;
    });
  availabilityInflight.set(cacheKey, promise);
  return promise;
}

// Helper function for Results page (optional)
export async function getAvailabilityRange(params: {
  from: string;
  to: string;
  region: string;
  cabins: string[];
}) {
  const { from, to, region, cabins } = params;
  
  // Generate date range
  const startDate = new Date(from);
  const endDate = new Date(to);
  const dates: string[] = [];
  
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    dates.push(d.toISOString().split('T')[0]);
  }
  
  const sheet = `${region} (Normalized)`;
  const perDate: Array<{ date: string; total: number; cabins: string[] }> = [];
  let totalSum = 0;
  
  for (const date of dates) {
    try {
      const availability = await getAvailability(date, sheet);

      // Normalize cabin items to base name strings for filtering
      const cabinBaseNames: string[] = (availability.operators[0]?.cabins || []).map((c: CabinItem) => {
        if (typeof c === 'string') {
          return c.split(' (')[0];
        }
        const raw = (c.name || c['cabin name'] || '').toString();
        return raw.split(' (')[0];
      });

      // Filter cabins to only include those in our selection
      const filteredCabins = cabinBaseNames.filter((baseName) => cabins.includes(baseName));
      
      const dayTotal = filteredCabins.length;
      totalSum += dayTotal;
      
      perDate.push({
        date,
        total: dayTotal,
        cabins: filteredCabins
      });
    } catch (error) {
      console.warn(`Failed to get availability for ${date}:`, error);
      perDate.push({
        date,
        total: 0,
        cabins: []
      });
    }
  }
  
  return {
    dateRange: { from, to },
    operator: region,
    totals: totalSum,
    perDate
  };
}

// Example usage (for testing):
// const cabins = await getCabins();
// console.log(cabins.operators.map(o => o.operator));
// const availability = await getAvailability('2025-10-12');
// console.log(availability.total, availability.operators);
