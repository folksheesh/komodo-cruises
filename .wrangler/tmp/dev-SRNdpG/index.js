var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-3eyUZR/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// index.js
var GOOGLE_API_KEY = "AIzaSyCaBu5hbQiZQbt8wl10bJzM08jFVuGeSuI";
var SPREADSHEET_ID = "1FqMYrf_uVoL_lU2WuoFj_59rXPHttuAqDI_mxnVN42I";
var SHEET_NAME = "2026 OT (Normalized)";
var CABIN_DETAIL_SHEET = "Cabin Detail";
var OT2026 = [
  "SEMESTA VOYAGES",
  "AKASSA CRUISE",
  "DERYA LIVEABOARD",
  "GIONA LIVEABOARD"
];
var index_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    const resource = (url.searchParams.get("resource") || "").toLowerCase();
    const date = url.searchParams.get("date");
    const cabinName = url.searchParams.get("name");
    const guests = parseInt(url.searchParams.get("guests") || "1", 10);
    try {
      if (resource === "cabindetail") {
        const details = await loadCabinDetailCached(env);
        if (cabinName) {
          const found = details.find(
            (c) => c.cabin_name?.toUpperCase() === cabinName.toUpperCase()
          );
          if (!found) return jsonErr(`Cabin '${cabinName}' not found`);
          return jsonOk({ data: found });
        }
        return jsonOk({ total: details.length, data: details });
      }
      if (resource === "operators") {
        return jsonOk({
          total: OT2026.length,
          operators: OT2026.map((x) => ({
            operator: x,
            sourceSheet: `${x} (Normalized)`
          }))
        });
      }
      const sheetData = await loadSheetDataCached(SHEET_NAME, env);
      if (resource === "cabins") {
        const allCabins = listCabinsAll(sheetData);
        return jsonOk({ cabins: allCabins });
      }
      if (!date) return jsonErr("Missing ?date=YYYY-MM-DD");
      const res = summarizeOT2026ByDate(sheetData, date);
      if (resource === "availability") {
        return jsonOk({ date, ...res });
      }
      if (resource === "search") {
        if (!cabinName) return jsonErr("Missing ?name=cabinName");
        const cabinNorm = normalizeCabinName(cabinName);
        const matches = [];
        res.operators.forEach((op) => {
          const found = op.cabins.find(
            (c) => c.name.toUpperCase() === cabinNorm.toUpperCase()
          );
          if (found && found.available >= guests) {
            matches.push({ operator: op.operator, available: found.available });
          }
        });
        return jsonOk({ date, cabin: cabinNorm, guests, matches });
      }
      return jsonErr("Unknown resource");
    } catch (err) {
      return jsonErr(err.message);
    }
  }
};
async function loadSheetDataCached(sheetName, env) {
  const cacheKey = `sheet-data-${sheetName}`;
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?includeGridData=true&ranges=${encodeURIComponent(
    sheetName
  )}&fields=sheets(data(rowData(values(formattedValue,userEnteredFormat(backgroundColor)))))&key=${GOOGLE_API_KEY}`;
  const resp = await fetch(apiUrl);
  if (!resp.ok) {
    const errorText = await resp.text();
    throw new Error(
      `Gagal fetch Google Sheets API (${resp.status}): ${errorText}`
    );
  }
  const json = await resp.json();
  if (!json.sheets || !json.sheets[0]) throw new Error("Sheet not found");
  const rows = json.sheets[0].data[0].rowData || [];
  const values = [];
  const backgrounds = [];
  rows.forEach((row) => {
    const valRow = [];
    const bgRow = [];
    if (row.values) {
      row.values.forEach((cell) => {
        valRow.push(cell.formattedValue || "");
        const color = cell.userEnteredFormat?.backgroundColor || {};
        const isWhite = !color.red && !color.green && !color.blue || // Kosong = putih default
        color.red === 1 && color.green === 1 && color.blue === 1;
        bgRow.push(isWhite ? "#ffffff" : "#colored");
      });
    }
    values.push(valRow);
    backgrounds.push(bgRow);
  });
  return { values, backgrounds };
}
__name(loadSheetDataCached, "loadSheetDataCached");
async function loadCabinDetailCached(env) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
    CABIN_DETAIL_SHEET
  )}?key=${GOOGLE_API_KEY}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    const errorText = await resp.text();
    throw new Error(`Gagal fetch Cabin Detail (${resp.status}): ${errorText}`);
  }
  const json = await resp.json();
  const rows = json.values;
  if (!rows || rows.length < 2) return [];
  const headers = rows[0].map((h) => (h || "").toLowerCase().trim());
  const idxOf = /* @__PURE__ */ __name((name) => headers.indexOf(name), "idxOf");
  const list = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i] || [];
    const obj = {};
    headers.forEach((h, idx) => {
      const v = (row[idx] || "").toString().trim();
      if (h && v !== "") obj[h] = v;
    });
    if (!obj["name cabin"]) continue;
    const api_name = (obj["name cabin api"] || "").toUpperCase().trim();
    const cabin_name = obj["name cabin"].trim();
    const operator = obj["name boat"] || "Unknown";
    const description = obj["description"] || "";
    const baseCap = Number(obj["base capacity"] || 0);
    const extraCap = Number(obj["extra pax capacity"] || 0);
    let capacity = baseCap + extraCap;
    if (!capacity)
      capacity = Number(obj["total capacity"] || obj["capacity"] || 0);
    const priceRaw = obj["price"] || obj["komodo cruises-pricing"] || "";
    const price = Number((priceRaw || "").toString().replace(/[^\d]/g, "")) || 0;
    const trip_days = Number(obj["trip (days)"] || obj["days"] || 0);
    const images = [];
    Object.values(obj).forEach((v) => {
      if (typeof v === "string" && /^https?:\/\//i.test(v)) images.push(v);
    });
    const image_main = images[0] || "";
    list.push({
      api_name,
      cabin_name,
      operator,
      description,
      capacity,
      price,
      trip_days,
      images,
      image_main
    });
  }
  return list;
}
__name(loadCabinDetailCached, "loadCabinDetailCached");
function listCabinsAll(sheetData) {
  const out = /* @__PURE__ */ new Set();
  sheetData.values.forEach((row) => {
    const name = normalizeCabinName(row[0]) || normalizeCabinName(row[1]);
    if (name) out.add(name);
  });
  return [...out].sort();
}
__name(listCabinsAll, "listCabinsAll");
function summarizeOT2026ByDate(sheetData, date) {
  const { values, backgrounds } = sheetData;
  const y = +date.slice(0, 4);
  const m = +date.slice(5, 7);
  const d = +date.slice(8, 10);
  const rows = values.length;
  const cols = rows > 0 ? values[0].length : 0;
  const shipByRow = Array(rows).fill(null);
  let currentShip = null;
  for (let r = 0; r < rows; r++) {
    const cellA = (values[r][0] || "").trim().toUpperCase();
    const cellB = (values[r][1] || "").trim().toUpperCase();
    const found = OT2026.find((s) => cellA === s || cellB === s);
    if (found) currentShip = found;
    shipByRow[r] = currentShip;
  }
  const perShip = {};
  OT2026.forEach((s) => perShip[s] = {});
  for (let r = 0; r < rows - 1; r++) {
    if (!values[r] || !values[r + 1]) continue;
    const vR0 = (values[r][0] || "").toUpperCase();
    const vR1 = (values[r][1] || "").toUpperCase();
    const vNext0 = (values[r + 1][0] || "").toUpperCase();
    const vNext1 = (values[r + 1][1] || "").toUpperCase();
    if (vR0 !== "NO." || vR1 !== "TYPE OF CABIN") continue;
    if (vNext0 !== "NO." || vNext1 !== "TYPE OF CABIN") continue;
    const monthRow = r;
    const spanRow = r + 1;
    const shipName = shipByRow[r];
    if (!shipName) continue;
    let endRow = spanRow + 1;
    while (endRow < rows && values[endRow] && values[endRow][1]) endRow++;
    for (let c = 2; c < cols; c++) {
      const spanTxt = values[spanRow][c];
      const span = parseDaySpan(spanTxt);
      if (!span) continue;
      let month = detectMonthFromText(values[monthRow][c]) || m;
      if (month !== m) continue;
      const match = span.end < span.start ? d === span.start : d >= span.start && d <= span.end;
      if (!match) continue;
      for (let rr = spanRow + 1; rr < endRow; rr++) {
        if (!values[rr]) continue;
        const raw = values[rr][1];
        const name = normalizeCabinName(raw);
        if (!name) continue;
        const txt = (values[rr][c] || "").trim();
        const bgClr = backgrounds[rr] && backgrounds[rr][c] ? backgrounds[rr][c] : "#ffffff";
        const empty = txt === "";
        const white = bgClr === "#ffffff";
        if (empty && white) {
          perShip[shipName][name] = (perShip[shipName][name] || 0) + 1;
        }
      }
    }
  }
  const operators = [];
  let total = 0;
  OT2026.forEach((op) => {
    const map = perShip[op] || {};
    const cabins = Object.keys(map).sort().map((raw) => ({
      name: raw,
      // Bisa ditambah logic mapping nama di sini
      available: map[raw]
    }));
    const t = cabins.reduce((s, c) => s + c.available, 0);
    total += t;
    operators.push({ operator: op, total: t, cabins });
  });
  return { total, operators };
}
__name(summarizeOT2026ByDate, "summarizeOT2026ByDate");
function parseDaySpan(txt) {
  if (!txt) return null;
  const str = txt.toString();
  const m = str.match(/^(\d{1,2})\s*-\s*(\d{1,2})$/);
  if (m) return { start: +m[1], end: +m[2] };
  const n = str.match(/^(\d{1,2})$/);
  if (n) return { start: +n[1], end: +n[1] };
  return null;
}
__name(parseDaySpan, "parseDaySpan");
function detectMonthFromText(txt) {
  if (!txt) return null;
  const t = txt.toString().toUpperCase();
  if (t.includes("FEB")) return 2;
  if (t.includes("MAR")) return 3;
  if (t.includes("APR")) return 4;
  if (t.includes("MEI") || t.includes("MAY")) return 5;
  if (t.includes("JUN")) return 6;
  if (t.includes("JUL")) return 7;
  if (t.includes("AUG") || t.includes("AGU")) return 8;
  if (t.includes("SEP")) return 9;
  if (t.includes("OCT") || t.includes("OKT")) return 10;
  if (t.includes("NOV")) return 11;
  if (t.includes("DEC") || t.includes("DES")) return 12;
  return null;
}
__name(detectMonthFromText, "detectMonthFromText");
function normalizeCabinName(txt) {
  if (!txt) return null;
  const clean = txt.toString().replace(/^\d+[\.\-\)]*/, "").trim();
  if (!clean) return null;
  return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
}
__name(normalizeCabinName, "normalizeCabinName");
function jsonOk(obj) {
  return new Response(JSON.stringify({ ok: true, ...obj }, null, 2), {
    headers: corsHeaders()
  });
}
__name(jsonOk, "jsonOk");
function jsonErr(error) {
  return new Response(JSON.stringify({ ok: false, error }, null, 2), {
    headers: corsHeaders()
  });
}
__name(jsonErr, "jsonErr");
function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}
__name(corsHeaders, "corsHeaders");

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-3eyUZR/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = index_default;

// ../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-3eyUZR/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
