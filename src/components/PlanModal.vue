<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay">
        <div class="modal-container">
          <!-- Modal Header with Close -->
          <div class="modal-header">
            <div class="modal-header-content">
              <h2 class="modal-title">Plan your trip</h2>
              <button class="modal-close" @click="closeModal">
                Close <span class="close-x">✕</span>
              </button>
            </div>
          </div>

          <!-- Plan Content (same as Plan.vue) -->
          <div class="modal-body">
            <section class="plan-wrap plan-page">
              <div class="plan-content">
                <!-- Wizard Progress Bar -->
                <div class="wizard-progress">
                  <!-- Step 1 -->
                  <div
                    class="wizard-step"
                    :class="{ completed: step > 1, active: step === 1 }"
                    @click="go(1)"
                  >
                    <div class="wizard-circle">
                      <svg
                        v-if="step > 1"
                        class="wizard-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span v-else>1</span>
                    </div>
                    <span class="wizard-label">Destinations</span>
                  </div>
                  <div
                    class="wizard-line"
                    :class="{ completed: step > 1 }"
                  ></div>

                  <!-- Step 2 -->
                  <div
                    class="wizard-step"
                    :class="{
                      completed: step > 2,
                      active: step === 2,
                      disabled: !canGoStep2,
                    }"
                    @click="canGoStep2 && go(2)"
                  >
                    <div class="wizard-circle">
                      <svg
                        v-if="step > 2"
                        class="wizard-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span v-else>2</span>
                    </div>
                    <span class="wizard-label">Ships</span>
                  </div>
                  <div
                    class="wizard-line"
                    :class="{ completed: step > 2 }"
                  ></div>

                  <!-- Step 3 -->
                  <div
                    class="wizard-step"
                    :class="{
                      completed: step > 3,
                      active: step === 3,
                      disabled: !canGoStep3,
                    }"
                    @click="canGoStep3 && go(3)"
                  >
                    <div class="wizard-circle">
                      <svg
                        v-if="step > 3"
                        class="wizard-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span v-else>3</span>
                    </div>
                    <span class="wizard-label">Dates</span>
                  </div>
                  <div
                    class="wizard-line"
                    :class="{ completed: step > 3 }"
                  ></div>

                  <!-- Step 4 -->
                  <div
                    class="wizard-step"
                    :class="{
                      completed: step > 4,
                      active: step === 4,
                      disabled: !canGoStep4,
                    }"
                    @click="canGoStep4 && go(4)"
                  >
                    <div class="wizard-circle">
                      <svg
                        v-if="step > 4"
                        class="wizard-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span v-else>4</span>
                    </div>
                    <span class="wizard-label">Guests</span>
                  </div>
                  <div
                    class="wizard-line"
                    :class="{ completed: step > 4 }"
                  ></div>

                  <!-- Step 5 -->
                  <div
                    class="wizard-step"
                    :class="{
                      completed: step === 5,
                      active: step === 5,
                      disabled: !canGoStep4,
                    }"
                    @click="canGoStep4 && go(5)"
                  >
                    <div class="wizard-circle">
                      <svg
                        v-if="step === 5"
                        class="wizard-check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span v-else>5</span>
                    </div>
                    <span class="wizard-label">Submit</span>
                  </div>
                </div>

                <!-- Step 1: Regions (multi select) -->
                <div v-if="step === 1">
                  <h3 class="step-title">Destinations</h3>
                  <p class="results-note">
                    Select the destinations you're interested in:
                  </p>

                  <div class="list">
                    <div class="list-heading">Nusa Tenggara Timur</div>

                    <div class="list-row" v-for="d in DESTINATIONS" :key="d">
                      <div class="list-text">{{ d }}</div>
                      <input
                        class="check"
                        type="checkbox"
                        :value="d"
                        v-model="selectedDestinations"
                        :aria-label="`Destination ${d}`"
                      />
                    </div>
                  </div>
                </div>

                <!-- Step 2: Ships -->
                <div v-else-if="step === 2">
                  <h3 class="step-title">Ships</h3>
                  <p class="results-note">Please select one or more ships:</p>

                  <div class="list">
                    <!-- <div class="list-heading">Available Ships</div> -->

                    <div v-if="shipsLoading" class="muted">
                      Loading ships...
                    </div>
                    <template v-else>
                      <div
                        class="list-row"
                        v-for="s in shipsList"
                        :key="s.id"
                        :class="{ 'has-details': !!s.image }"
                      >
                        <div class="ship-info">
                          <!-- <img
                            v-if="s.image"
                            :src="s.image"
                            :alt="s.label"
                            class="ship-thumbnail"
                          /> -->
                          <div class="ship-details-text">
                            <div class="list-text">{{ s.label }}</div>
                          </div>
                        </div>
                        <input
                          class="check"
                          type="checkbox"
                          :value="s.id"
                          v-model="selectedShipIds"
                          :aria-label="`Ship ${s.label}`"
                        />
                      </div>
                      <div v-if="shipsList.length === 0" class="muted">
                        No ships found from API.
                      </div>
                    </template>
                  </div>
                </div>

                <!-- Step 3: Dates -->
                <div v-else-if="step === 3">
                  <h3 class="step-title">Dates</h3>

                  <!-- Grid Layout: 2 columns, 4 rows -->
                  <div class="dates-grid">
                    <!-- ROW 1: Labels -->
                    <p class="results-note dates-grid-label">
                      Select your travel dates:
                    </p>
                    <p class="results-note dates-grid-label">Trip Duration:</p>

                    <!-- ROW 2: Date Range Display | Trip Duration Summary -->
                    <div class="date-range-display">
                      <span class="date-value">{{
                        dateFrom || "Start date"
                      }}</span>
                      <span class="date-arrow">→</span>
                      <span class="date-value">{{ dateTo || "End date" }}</span>
                    </div>
                    <div class="trip-duration-summary">
                      {{ displayTripDuration }}
                    </div>

                    <!-- ROW 3: Instruction text -->
                    <p class="results-note text-sm calendar-instruction">
                      Click to select start date, then click again to select end
                      date.
                    </p>
                    <p class="results-note text-sm duration-instruction">
                      Adjust min and max trip duration.
                    </p>

                    <!-- ROW 4: Calendar | Trip Duration Controls -->
                    <div class="custom-calendar">
                      <div class="calendar-header">
                        <h4 class="calendar-title">{{ currentMonthYear }}</h4>
                        <div class="calendar-nav-group">
                          <button
                            class="calendar-nav"
                            @click="prevMonth"
                            type="button"
                          >
                            ‹
                          </button>
                          <button
                            class="calendar-nav"
                            @click="nextMonth"
                            type="button"
                          >
                            ›
                          </button>
                        </div>
                      </div>

                      <div class="calendar-grid">
                        <div class="calendar-weekdays">
                          <div class="weekday">Su</div>
                          <div class="weekday">Mo</div>
                          <div class="weekday">Tu</div>
                          <div class="weekday">We</div>
                          <div class="weekday">Th</div>
                          <div class="weekday">Fr</div>
                          <div class="weekday">Sa</div>
                        </div>

                        <div class="calendar-days">
                          <button
                            v-for="day in calendarDays"
                            :key="day.key"
                            class="calendar-day"
                            :class="{
                              'other-month': !day.isCurrentMonth,
                              selected: day.isSelected,
                              disabled: !day.isSelectable,
                              past: day.isPast,
                              'in-range': day.isInRange,
                              'range-start': day.isRangeStart,
                              'range-end': day.isRangeEnd,
                            }"
                            :disabled="!day.isSelectable"
                            @click="selectDate(day)"
                            type="button"
                          >
                            {{ day.date }}
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Trip Duration Controls -->
                    <div class="trip-duration-controls-grid">
                      <!-- Min Duration Row -->
                      <div class="counter-row duration-counter-row">
                        <div class="counter-text">
                          <div class="counter-title">Min</div>
                        </div>
                        <div class="counter-ctrls">
                          <button
                            type="button"
                            class="btn-icon"
                            :disabled="minTripDuration <= 1"
                            @click="decrementMinDuration"
                          >
                            −
                          </button>
                          <span class="count-display">{{
                            minTripDuration
                          }}</span>
                          <button
                            type="button"
                            class="btn-icon"
                            :disabled="minTripDuration >= maxTripDuration"
                            @click="incrementMinDuration"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <!-- Max Duration Row -->
                      <div class="counter-row duration-counter-row">
                        <div class="counter-text">
                          <div class="counter-title">Max</div>
                        </div>
                        <div class="counter-ctrls">
                          <button
                            type="button"
                            class="btn-icon"
                            :disabled="maxTripDuration <= minTripDuration"
                            @click="decrementMaxDuration"
                          >
                            −
                          </button>
                          <span class="count-display">{{
                            maxTripDuration
                          }}</span>
                          <button
                            type="button"
                            class="btn-icon"
                            :disabled="maxTripDuration >= MAX_TRIP_DURATION"
                            @click="incrementMaxDuration"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <!-- Reset Button -->
                      <div
                        class="trip-duration-reset"
                        v-if="
                          minTripDuration > 1 ||
                          maxTripDuration < MAX_TRIP_DURATION
                        "
                      >
                        <button
                          type="button"
                          class="btn-text-reset"
                          @click="resetTripDuration"
                        >
                          Reset to any duration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Step 4: Guests (Multi-Cabin) -->
                <div v-else-if="step === 4">
                  <h3 class="step-title">Cabins & Guests</h3>

                  <!-- Booking Mode Segmented Toggle -->
                  <div class="mode-toggle-container">
                    <div class="mode-toggle">
                      <button
                        type="button"
                        class="mode-btn"
                        :class="{ active: isFlexibleBooking }"
                        @click="isFlexibleBooking = true"
                      >
                        Flexible
                      </button>
                      <button
                        type="button"
                        class="mode-btn"
                        :class="{ active: !isFlexibleBooking }"
                        @click="isFlexibleBooking = false"
                      >
                        Room Allocation
                      </button>
                    </div>
                  </div>

                  <div class="text-center mb-6">
                    <p class="results-note" v-if="!isFlexibleBooking">
                      Configure guests for each cabin individually.
                    </p>
                    <p class="results-note" v-else>
                      Set total guests only. You can choose specific rooms
                      later.
                    </p>
                  </div>

                  <!-- Flexible Mode -->
                  <div v-if="isFlexibleBooking" class="flexible-guest-card">
                    <div class="counter-row">
                      <div class="counter-text">
                        <div class="counter-title">Total Guests</div>
                        <div class="counter-subtitle">
                          We will find the best cabin combination for you
                        </div>
                      </div>
                      <div class="counter-ctrls">
                        <button
                          type="button"
                          class="btn-icon"
                          :disabled="flexibleGuests <= 1"
                          @click="flexibleGuests--"
                        >
                          −
                        </button>
                        <span class="count-display">{{ flexibleGuests }}</span>
                        <button
                          type="button"
                          class="btn-icon"
                          @click="flexibleGuests++"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Structured Mode (Existing) -->
                  <div v-else class="cabins-container">
                    <!-- Cabin Accordion Items -->
                    <div
                      v-for="(cabin, idx) in cabins"
                      :key="cabin.id"
                      class="cabin-accordion"
                    >
                      <!-- Cabin Header -->
                      <div class="cabin-header" @click="toggleCabinExpand(idx)">
                        <div class="cabin-header-left">
                          <span class="cabin-title">CABIN {{ idx + 1 }}</span>
                        </div>
                        <div class="cabin-header-right">
                          <span class="cabin-summary">
                            {{ cabin.adults + cabin.children }} guest{{
                              cabin.adults + cabin.children !== 1 ? "s" : ""
                            }}
                          </span>
                          <button
                            v-if="cabins.length > 1"
                            type="button"
                            class="cabin-remove-btn"
                            @click.stop="removeCabin(idx)"
                            title="Remove cabin"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"
                              />
                            </svg>
                          </button>
                          <svg
                            class="cabin-chevron"
                            :class="{ expanded: cabin.expanded }"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>

                      <!-- Cabin Body (Collapsible) -->
                      <transition name="accordion">
                        <div v-if="cabin.expanded" class="cabin-body">
                          <!-- Adults Counter -->
                          <div class="counter-row">
                            <div class="counter-text">
                              <div class="semibold">Adults</div>
                              <div class="muted text-sm">Ages 17+</div>
                            </div>
                            <div class="counter-ctrls">
                              <button
                                type="button"
                                class="btn-icon"
                                :disabled="cabin.adults <= 1"
                                @click="decCabinGuest(idx, 'adults')"
                              >
                                −
                              </button>
                              <span class="count">{{ cabin.adults }}</span>
                              <button
                                type="button"
                                class="btn-icon"
                                :disabled="
                                  cabin.adults + cabin.children >=
                                  MAX_GUESTS_PER_CABIN
                                "
                                @click="incCabinGuest(idx, 'adults')"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <!-- Children Counter -->
                          <div class="counter-row">
                            <div class="counter-text">
                              <div class="semibold">Children</div>
                              <div class="muted text-sm">Ages 3 - 16</div>
                            </div>
                            <div class="counter-ctrls">
                              <button
                                type="button"
                                class="btn-icon"
                                :disabled="cabin.children <= 0"
                                @click="decCabinGuest(idx, 'children')"
                              >
                                −
                              </button>
                              <span class="count">{{ cabin.children }}</span>
                              <button
                                type="button"
                                class="btn-icon"
                                :disabled="
                                  cabin.adults + cabin.children >=
                                  MAX_GUESTS_PER_CABIN
                                "
                                @click="incCabinGuest(idx, 'children')"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div class="cabin-note">
                            Max {{ MAX_GUESTS_PER_CABIN }} guests per cabin
                          </div>
                        </div>
                      </transition>
                    </div>

                    <!-- Add Cabin Button -->
                    <button
                      v-if="canAddCabin"
                      type="button"
                      class="btn-add-cabin"
                      @click="addCabin"
                    >
                      + Add Another Cabin
                    </button>

                    <!-- Total Summary -->
                    <div class="cabins-total">
                      <span>Total:</span>
                      <span class="total-value">
                        {{ cabins.length }} cabin{{
                          cabins.length !== 1 ? "s" : ""
                        }}, {{ totalGuests }} guest{{
                          totalGuests !== 1 ? "s" : ""
                        }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Step 5: Actions -->
                <div v-else>
                  <h3 class="step-title">Check Availability</h3>
                  <p class="results-note">
                    To see if we have availability for your preferred criteria,
                    please click the button below.
                  </p>
                  <div class="mt-4">
                    <button class="btn-primary" @click="checkAvailability">
                      Check now
                    </button>
                  </div>

                  <div class="section-divider" style="margin: 1.5rem 0"></div>

                  <h4 class="section-title">
                    Speak with a Komodo Cruises Travel Advisor
                  </h4>
                  <p class="results-note">
                    Need some help to plan your trip? Enquire below to contact
                    one of our Komodo Cruises Travel Advisors.
                  </p>
                  <div class="mt-4">
                    <button class="btn-primary" @click="enquireNow">
                      Enquire now
                    </button>
                  </div>
                </div>

                <!-- Bottom bar navigation -->
                <div class="bottom-bar">
                  <div class="nav-inner-footer">
                    <button
                      class="link-muted text-icon-btn"
                      v-if="step > 1"
                      @click="prev"
                    >
                      <img :src="LeftArrow" alt="Previous" class="nav-arrow" />
                      {{ prevLabel }}
                    </button>
                    <!-- <span v-else></span> removed spacer -->
                    <button class="btn-primary text-icon-btn" @click="next">
                      {{ nextLabel }}
                      <img
                        :src="RightArrow"
                        alt="Next"
                        class="nav-arrow white-filter"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </transition>

    <!-- Toast Notification -->
    <transition name="toast-slide">
      <div v-if="toastVisible" class="toast-notification">
        <span class="toast-icon">⚠️</span>
        <span class="toast-message">{{ toastMessage }}</span>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  defineProps,
  defineEmits,
  nextTick,
} from "vue";
import { getOperators, getShipDetails } from "../services/komodoApi";
import {
  formatDateToString,
  addDaysToDateString,
  getTodayString,
  parseDateString,
} from "../utils/dateUtils";
import LeftArrow from "../images/arrows/left-arrow.svg";
import RightArrow from "../images/arrows/right-arrow.svg";
import downArrowIcon from "../images/arrows/down-arrow.svg";
import upArrowIcon from "../images/arrows/up-arrow.svg";
import "../styles/pages/plan.css";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close", "navigate-to-results"]);

/** ===== State ===== */
const step = ref(1);
// Fixed region label and static options
const REGION_NAME = "Nusa Tenggara Timur";
const DESTINATIONS = ["Komodo National Park", "Labuan Bajo"];
// Configured ships: display label + sheet name used by API
const SHIPS_CONFIG = []; // Data kapal diambil dari API, bukan hardcoded

// Ships loaded from API sheets (validated list of {label, sheet})
const shipsList = ref([]);
const shipsLoading = ref(false);

// Multiple destinations selection
const selectedDestinations = ref([]);
// Selected ship sheets (array of sheet names)
const selectedShipIds = ref([]);

const dateFrom = ref("");
const dateTo = ref(""); // Keep for compatibility but not used in UI

// Trip duration (min/max range)
const MAX_TRIP_DURATION = 30; // Maximum days for a trip
const minTripDuration = ref(1); // Minimum trip duration
const maxTripDuration = ref(30); // Maximum trip duration

// Increment/decrement functions for trip duration
function decrementMinDuration() {
  if (minTripDuration.value > 1) {
    minTripDuration.value--;
  }
}

function incrementMinDuration() {
  if (minTripDuration.value < maxTripDuration.value) {
    minTripDuration.value++;
  }
}

function decrementMaxDuration() {
  if (maxTripDuration.value > minTripDuration.value) {
    maxTripDuration.value--;
  }
}

function incrementMaxDuration() {
  if (maxTripDuration.value < MAX_TRIP_DURATION) {
    maxTripDuration.value++;
  }
}

// Duration dropdown state
const showDurationDropdown = ref(false);

// Duration options (1 to MAX_TRIP_DURATION)
const durationOptions = computed(() => {
  const options = [];
  for (let i = 1; i <= MAX_TRIP_DURATION; i++) {
    options.push(i);
  }
  return options;
});

// Display text for selected duration
const displayTripDuration = computed(() => {
  if (
    minTripDuration.value === 1 &&
    maxTripDuration.value === MAX_TRIP_DURATION
  ) {
    return "Any duration";
  }
  if (minTripDuration.value === maxTripDuration.value) {
    return `${minTripDuration.value} ${
      minTripDuration.value === 1 ? "day" : "days"
    }`;
  }
  return `${minTripDuration.value} - ${maxTripDuration.value} days`;
});

// Function to select a duration option
function selectDurationOption(option) {
  if (option === "any") {
    minTripDuration.value = 1;
    maxTripDuration.value = MAX_TRIP_DURATION;
  } else {
    minTripDuration.value = option;
    maxTripDuration.value = option;
  }
  showDurationDropdown.value = false;
}

function resetTripDuration() {
  minTripDuration.value = 1;
  maxTripDuration.value = MAX_TRIP_DURATION;
}

// Cabin-based guest management
const MAX_CABINS = 4;
const MAX_GUESTS_PER_CABIN = 4;

const isFlexibleBooking = ref(true); // Default Flexible
const flexibleGuests = ref(2);

const cabins = ref([{ id: 1, adults: 2, children: 0, expanded: true }]);

// Computed: total guests across all cabins
const totalGuests = computed(() =>
  cabins.value.reduce((sum, c) => sum + c.adults + c.children, 0)
);

const canAddCabin = computed(() => cabins.value.length < MAX_CABINS);

// Toast state
const toastVisible = ref(false);
const toastMessage = ref("");
let toastTimeout = null;

// Calendar state
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

// ... (skipping some parts) ...

function goResults() {
  // Save search criteria to localStorage for Results page
  // Map selected sheets back to labels for display
  const selectedEntries = shipsList.value.filter((s) =>
    selectedShipIds.value.includes(s.id)
  );
  const selectedLabels = selectedEntries.map((s) => s.label);
  const selectedSheets = selectedEntries.map((s) => s.sheet);

  const searchCriteria = {
    region: REGION_NAME,
    destination: selectedDestinations.value[0] || "", // backward-compat single
    destinations: selectedDestinations.value.slice(),
    ships: selectedLabels, // display labels
    shipSheets: selectedSheets,
    // backward-compat
    ship: selectedLabels[0] || "",
    lodges: selectedLabels.slice(),
    dateFrom: dateFrom.value,
    dateTo: dateTo.value,
    minTripDuration: minTripDuration.value, // Min days for trip
    maxTripDuration: maxTripDuration.value, // Max days for trip

    // Flexible Booking
    isFlexible: isFlexibleBooking.value,
    flexibleGuests: isFlexibleBooking.value ? flexibleGuests.value : 0,

    // Multi-cabin data
    cabins: isFlexibleBooking.value
      ? [] // No specific cabin structure in flexible mode
      : cabins.value.map((c) => ({
          adults: c.adults,
          children: c.children,
          total: c.adults + c.children,
        })),
    totalCabins: isFlexibleBooking.value ? 0 : cabins.value.length,
    totalGuests: isFlexibleBooking.value
      ? flexibleGuests.value
      : totalGuests.value,
    // Legacy fields for backward compatibility
    adults: isFlexibleBooking.value
      ? flexibleGuests.value
      : cabins.value.reduce((s, c) => s + c.adults, 0),
    children: isFlexibleBooking.value
      ? 0
      : cabins.value.reduce((s, c) => s + c.children, 0),
    age3_9: 0,
    age0_2: 0,
    timestamp: Date.now(),
  };

  localStorage.setItem(
    "komodo_search_criteria",
    JSON.stringify(searchCriteria)
  );
  emit("navigate-to-results");
}

const labels = ["Destinations", "Ships", "Dates", "Guests", "Submit"];
const prevLabel = computed(() => labels[step.value - 2] || "");
const nextLabel = computed(() =>
  step.value < 5 ? labels[step.value - 1] : "Submit"
);

/** Calendar computed properties */
const minDate = computed(() => getTodayString());

const currentMonthYear = computed(() => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${monthNames[currentMonth.value]} ${currentYear.value}`;
});

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1);
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);
  const startDate = new Date(firstDay);
  const today = new Date();

  // Start from Sunday of the week containing the 1st
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const days = [];
  const endDate = new Date(lastDay);
  endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dayOfWeek = date.getDay();
    const isCurrentMonth = date.getMonth() === currentMonth.value;

    // Normalize date for comparison to ignore time
    const dDate = new Date(date);
    dDate.setHours(0, 0, 0, 0);
    const dToday = new Date(today);
    dToday.setHours(0, 0, 0, 0);

    const isPast = dDate < dToday;
    const isSelectable = isCurrentMonth && !isPast; // All future dates are selectable

    // Use utility function for consistent date formatting
    const dateString = formatDateToString(date);

    // Check if in range
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;
    if (dateFrom.value && dateTo.value && isCurrentMonth) {
      const fromDate = parseDateString(dateFrom.value);
      const toDate = parseDateString(dateTo.value);
      if (dDate >= fromDate && dDate <= toDate) {
        isInRange = true;
        if (dDate.getTime() === fromDate.getTime()) isRangeStart = true;
        if (dDate.getTime() === toDate.getTime()) isRangeEnd = true;
      }
    }

    days.push({
      key: date.getTime(),
      date: date.getDate(),
      fullDate: dateString,
      isCurrentMonth,
      isSelectable,
      isPast,
      isSelected: dateFrom.value === dateString || dateTo.value === dateString,
      isInRange,
      isRangeStart,
      isRangeEnd,
    });
  }

  return days;
});

/** Trip duration - dibatasi oleh rentang tanggal yang dipilih */
const maxAllowedDuration = computed(() => {
  // Jika belum ada dateTo, gunakan MAX_TRIP_DURATION
  if (!dateFrom.value || !dateTo.value) {
    return MAX_TRIP_DURATION;
  }

  const fromDate = parseDateString(dateFrom.value);
  const toDate = parseDateString(dateTo.value);
  const diffTime = toDate.getTime() - fromDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 karena inklusif

  // Batasi maksimal sesuai rentang tanggal, tapi tidak lebih dari MAX_TRIP_DURATION
  return Math.min(diffDays, MAX_TRIP_DURATION);
});

const availableDurations = computed(() => {
  const max = maxAllowedDuration.value;
  const durations = [];
  for (let i = 1; i <= max; i++) {
    durations.push(i);
  }
  return durations;
});

/** Guards untuk step navigation */
const canGoStep2 = computed(() => selectedDestinations.value.length > 0);
const canGoStep3 = computed(
  () =>
    selectedDestinations.value.length > 0 && selectedShipIds.value.length > 0
);
const canGoStep4 = computed(
  () =>
    selectedDestinations.value.length > 0 &&
    selectedShipIds.value.length > 0 &&
    !!dateFrom.value
);

/** ===== Effects ===== */
watch(selectedDestinations, () => {
  // reset ship saat ganti destinasi
  selectedShipIds.value = [];
});

// Auto-clamp trip duration if it exceeds max allowed
watch(maxAllowedDuration, (newMax) => {
  // Use nextTick to avoid interference with date selection rendering cycle
  nextTick(() => {
    // Clamp maxTripDuration if it exceeds newMax
    if (maxTripDuration.value > newMax) {
      maxTripDuration.value = newMax;
    }
    // Clamp minTripDuration if it exceeds maxTripDuration
    if (minTripDuration.value > maxTripDuration.value) {
      minTripDuration.value = maxTripDuration.value;
    }
  });
});

// Watch modal open/close untuk handle body scrollbar
const originalScrollStyles = {
  bodyOverflow: "",
  htmlOverflow: "",
  bodyPadding: "",
  htmlPadding: "",
};

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      lockPageScroll();
    } else {
      restorePageScroll();
    }
  },
  { immediate: true }
);

onMounted(() => {
  loadShips();
  // Fixed: removed closeDropdown listener
});

// Cleanup: pastikan scrollbar kembali saat component unmount
onUnmounted(() => {
  restorePageScroll();
});

/** ===== Actions ===== */
function closeModal() {
  emit("close");
}

function go(n) {
  step.value = n;
}

function next() {
  // guard ringan biar UX jelas
  if (step.value === 1 && selectedDestinations.value.length === 0)
    return toast("Please select at least one destination first.");
  if (step.value === 2 && selectedShipIds.value.length === 0)
    return toast("Please select at least one ship first.");
  if (step.value === 3 && !dateFrom.value)
    return toast("Please select a start date first.");
  if (step.value < 5) step.value++;
  else goResults();
}

function prev() {
  if (step.value > 1) step.value--;
}

function checkAvailability() {
  goResults();
}

function enquireNow() {
  goResults();
}

async function loadShips() {
  shipsLoading.value = true;
  try {
    // Try to get operators and ship details
    // If details fail (quota exceeded), we still want operators
    let opsRes, detailsRes;

    try {
      [opsRes, detailsRes] = await Promise.all([
        getOperators(),
        getShipDetails().catch((e) => {
          console.warn(
            "Failed to load ship details (likely quota exceeded):",
            e
          );
          return null; // Return null so Promise.all continues
        }),
      ]);
    } catch (e) {
      console.warn("Critical failure loading operators:", e);
      // Fallback if even operators fail
      shipsList.value = normalizeConfigShips(SHIPS_CONFIG);
      return;
    }

    // Create map of details for easy lookup
    const detailsMap = {};
    if (detailsRes?.ships) {
      detailsRes.ships.forEach((s) => {
        // Normalize name for matching: removing extra spaces and case-insensitive
        const key = s.name ? s.name.toLowerCase().trim() : "";
        if (key) detailsMap[key] = s;
      });
    }

    const normalized = (opsRes?.operators || [])
      .map((op) => {
        const label = op.operator?.trim() || "";
        const sheet = op.sourceSheet?.trim() || label;

        // Match with details
        const key = label.toLowerCase().trim();
        const detail = detailsMap[key];

        return {
          id: `${label}__${sheet}`,
          label,
          sheet,
          // Add details if found
          image: detail?.mainImage || "",
          description: detail?.description || "",
          specs: detail?.specs || {},
        };
      })
      .filter((s) => s.label && s.sheet);

    shipsList.value = normalized.length
      ? normalized
      : normalizeConfigShips(SHIPS_CONFIG);
  } catch (e) {
    console.warn("Failed to load operators/details:", e);
    shipsList.value = normalizeConfigShips(SHIPS_CONFIG);
  } finally {
    shipsLoading.value = false;
  }
}

function lockPageScroll() {
  const body = document.body;
  const html = document.documentElement;
  if (!body || !html) return;

  const scrollBarWidth = window.innerWidth - html.clientWidth;
  originalScrollStyles.bodyOverflow = body.style.overflow;
  originalScrollStyles.htmlOverflow = html.style.overflow;
  originalScrollStyles.bodyPadding = body.style.paddingRight;
  originalScrollStyles.htmlPadding = html.style.paddingRight;

  if (scrollBarWidth > 0) {
    const pad = `${scrollBarWidth}px`;
    body.style.paddingRight = pad;
    html.style.paddingRight = pad;
  }
  body.style.overflow = "hidden";
  html.style.overflow = "hidden";
}

function restorePageScroll() {
  const body = document.body;
  const html = document.documentElement;
  if (!body || !html) return;

  body.style.overflow = originalScrollStyles.bodyOverflow;
  html.style.overflow = originalScrollStyles.htmlOverflow;
  body.style.paddingRight = originalScrollStyles.bodyPadding;
  html.style.paddingRight = originalScrollStyles.htmlPadding;
}

function normalizeConfigShips(list) {
  return Array.isArray(list)
    ? list
        .map((s) => {
          const label = s.label?.trim() || "";
          const sheet = s.sheet?.trim() || label;
          return {
            id: s.id || `${label}__${sheet}`,
            label,
            sheet,
          };
        })
        .filter((s) => s.label && s.sheet)
    : [];
}

function addCabin() {
  if (canAddCabin.value) {
    cabins.value.push({
      id: Date.now(),
      adults: 2,
      children: 0,
      expanded: true,
    });
  }
}

function removeCabin(index) {
  if (cabins.value.length > 1) {
    cabins.value.splice(index, 1);
  }
}

function toggleCabinExpand(index) {
  cabins.value[index].expanded = !cabins.value[index].expanded;
}

function incCabinGuest(index, type) {
  const cabin = cabins.value[index];
  const total = cabin.adults + cabin.children;
  if (total < MAX_GUESTS_PER_CABIN) {
    cabin[type]++;
  }
}

function decCabinGuest(index, type) {
  const cabin = cabins.value[index];
  if (type === "adults" && cabin.adults > 1) cabin.adults--;
  if (type === "children" && cabin.children > 0) cabin.children--;
}

function toast(msg) {
  toastMessage.value = msg;
  toastVisible.value = true;
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastVisible.value = false;
  }, 3000);
}

/** Calendar methods */
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}

function selectDate(day) {
  if (!day.isSelectable) return;

  // If no start date, or if both dates are set, start fresh
  if (!dateFrom.value || (dateFrom.value && dateTo.value)) {
    dateFrom.value = day.fullDate;
    dateTo.value = "";
  } else {
    // Start date exists, set end date
    const startDate = parseDateString(dateFrom.value);
    const clickedDate = parseDateString(day.fullDate);

    if (clickedDate < startDate) {
      // If clicked date is before start, swap them
      dateTo.value = dateFrom.value;
      dateFrom.value = day.fullDate;
    } else {
      dateTo.value = day.fullDate;
    }
  }
}

/** ===== API call ===== */
// Ships are loaded on mount via getCabins()
</script>

<style scoped>
/* Modal overlay - fullscreen */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1000;
}

/* Modal container - fullscreen */
.modal-container {
  background: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

/* ===== WIZARD PROGRESS BAR ===== */
.wizard-progress {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  width: 100%;
}

.wizard-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 70px;
}

.wizard-step.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.wizard-step:hover:not(.disabled) .wizard-circle {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(34, 63, 98, 0.3);
}

.wizard-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e7eb;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.wizard-step.active .wizard-circle {
  background: var(--ocean-900, #223f62);
  border-color: var(--ocean-900, #223f62);
  color: white;
  box-shadow: 0 0 0 4px rgba(34, 63, 98, 0.2);
  animation: pulse-ring 1.5s ease-out infinite;
}

.wizard-step.completed .wizard-circle {
  background: var(--ocean-900, #223f62);
  border-color: var(--ocean-900, #223f62);
  color: white;
}

.wizard-check {
  width: 18px;
  height: 18px;
  stroke: white;
  animation: check-appear 0.3s ease-out forwards;
}

@keyframes check-appear {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 63, 98, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(34, 63, 98, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 63, 98, 0);
  }
}

.wizard-label {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
  text-align: center;
  transition: color 0.3s ease;
}

.wizard-step.active .wizard-label,
.wizard-step.completed .wizard-label {
  color: var(--ocean-900, #223f62);
  font-weight: 600;
}

.wizard-line {
  flex: 1;
  height: 3px;
  background: #e5e7eb;
  margin-top: 16px;
  min-width: 20px;
  transition: background 0.5s ease;
  position: relative;
}

.wizard-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: var(--ocean-900, #223f62);
  transition: width 0.5s ease;
}

.wizard-line.completed::after {
  width: 100%;
}

/* Mobile responsive wizard */
@media (max-width: 640px) {
  .wizard-progress {
    padding: 1rem 0.5rem;
  }

  .wizard-step {
    min-width: 50px;
  }

  .wizard-circle {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }

  .wizard-check {
    width: 14px;
    height: 14px;
  }

  .wizard-label {
    font-size: 0.65rem;
    margin-top: 0.4rem;
  }

  .wizard-line {
    margin-top: 12px;
    min-width: 10px;
    height: 2px;
  }
}

/* ===== MODAL HEADER/NAV - Independent ===== */
:root {
  /* Satu variabel buat padding horizontal halaman */
  --page-pad: clamp(16px, 5vw, 40px);
}

/* Header */
.modal-header {
  background: #fff;
  border-bottom: 1px solid rgba(34, 63, 98, 0.15);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  padding: 0.75rem 2rem !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Konten header dengan padding yang proper */
.modal-header-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  /* Responsive padding: min 1rem, preferred 5vw, max 6rem */
  padding-left: clamp(1rem, 5vw, 6rem);
  padding-right: clamp(1rem, 5vw, 6rem);
}

/* Title fleksibel (biar nggak nabrak tombol) */
.modal-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ocean-900, #223f62);
  font-family: var(--font-serif, serif);
  font-weight: 200;

  flex: 1;
  /* ambil ruang sisa */
  min-width: 0;
  /* aktifkan ellipsis */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.close-x {
  font-size: 1.1rem;
  align-items: center;
}

/* Tombol Close tetap di kanan, tanpa trik ms-auto */
.modal-close {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--ocean-900, #223f62);
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-decoration: none;
  text-underline-offset: 3px;
  transition: color 0.18s ease, opacity 0.18s ease;
  opacity: 0.96;
  /* subtle base for smoother fade in/out */
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.modal-close:hover {
  background: transparent;
  color: black;
  opacity: 0.84;
  /* stronger but still subtle */
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ===== MODAL BODY - Independent ===== */
.modal-body {
  background: white;
  overflow-y: auto;
  padding-bottom: 0;
}

/* Plan content wrapper */
.modal-body .plan-wrap {
  background: white;
  min-height: 100%;
}

.modal-body .plan-content {
  background: white;
  max-width: 620px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  padding-bottom: 4rem;
}

/* ===== MODAL FOOTER/BOTTOM BAR - Independent & Separated ===== */
.modal-body .bottom-bar {
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-top: 1px solid rgba(34, 63, 98, 0.08);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  z-index: 20;
  backdrop-filter: blur(6px);
  padding: 1.25rem 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.modal-body .bottom-bar .nav-inner-footer {
  background: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  width: 100%;
}

.modal-body .bottom-bar .btn-primary {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  /* border-radius: 7px; */
}

.modal-body .bottom-bar .link-muted {
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 0;
}

/* Override plan.css backgrounds for modal */
.modal-body .plan-wrap,
.modal-body .plan-content {
  background: white !important;
}

/* Remove margin-top from bottom-bar in modal */
.modal-body .bottom-bar {
  margin-top: 0 !important;
}

/* ===== MOBILE RESPONSIVE ===== */
@media (max-width: 768px) {
  .modal-header {
    padding: 0.5rem 1rem;
  }

  .modal-header-content {
    margin-left: 0;
    margin-right: 0;
  }

  .modal-title {
    font-size: 1.1rem;
  }

  .modal-close {
    padding: 0.4rem 0.5rem;
    margin-right: 0;
    font-size: 0.95rem;
  }
}

@media (max-width: 640px) {
  .modal-header {
    padding: 0.5rem 0.75rem;
  }

  .modal-title {
    font-size: 1rem;
  }

  .modal-close {
    padding: 0.35rem 0.4rem;
    font-size: 0.9rem;
  }

  .modal-body .plan-content {
    padding: 1.5rem 1rem;
    padding-bottom: 5rem;
  }

  .modal-body .bottom-bar {
    padding: 0.75rem 1rem;
  }

  .modal-body .bottom-bar .nav-inner {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

.nav-arrow {
  height: 0.8em;
  width: auto;
  display: inline-block;
  margin-top: -1px;
}

.text-icon-btn {
  display: flex !important;
  align-items: center;
  gap: 8px;
}

.white-filter {
  filter: brightness(0) invert(1);
}

/* Toast Notification Styles - Premium Look */
.toast-notification {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #2d4059;
  /* Brand Navy */
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 50px;
  /* Rounded pill shape for softer look */
  box-shadow: 0 8px 24px rgba(45, 64, 89, 0.25);
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: sans-serif;
  /* Clean sans-serif */
  font-size: 1rem;
  font-weight: 500;
  max-width: 90%;
  min-width: unset;
  /* Remove min-width to fit content nicely */
  justify-content: center;
  border-bottom: none;
  /* Remove border for cleaner look */
}

.toast-icon {
  font-size: 1.25rem;
  line-height: 1;
}

.toast-message {
  line-height: 1.4;
  letter-spacing: 0.02em;
}

/* Toast animation - Smooth Slide Down */
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  /* Elegant easing */
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  opacity: 0;
  transform: translateX(-50%) translateY(-40px);
}

/* ===== Aesthetic Refinements for "Messy" Layout ===== */
.cabin-accordion {
  border-radius: 8px;
  overflow: hidden; /* Ensure children don't overflow rounded corners */
  border: 1px solid var(--ocean-15a); /* Ensure border is visible */
}

.cabin-header {
  background-color: #f8fafc; /* Subtle gray background to distinguish header */
}

.cabin-summary {
  margin-right: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.btn-add-cabin {
  width: 100%;
  border-radius: 8px;
  border-style: dashed;
}

/* Better vertical rhythm inside modal */
.modal-body .plan-content {
  display: flex;
  flex-direction: column;
}

/* ===== TRIP DURATION DROPDOWN (CUSTOM) ===== */
.trip-duration-selector {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Spread label and caret */
  cursor: pointer;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  transition: all 0.2s;
  /* Match date-range-display minimal aesthetic */
}

/* ===== BOOKING MODE TOGGLE (PILL) ===== */
.mode-toggle-container {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.mode-toggle {
  display: flex;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 99px;
  border: 1px solid #e2e8f0;
}
.mode-btn {
  padding: 8px 24px;
  border-radius: 99px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #64748b;
  transition: all 0.2s ease;
  min-width: 130px;
}
.mode-btn:hover {
  color: #1e293b;
}
.mode-btn.active {
  background: white;
  color: #0f172a;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

/* Flexible Guest Card (Luxury Card Style) */
.flexible-guest-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  max-width: 450px;
  margin: 0 auto;
}
.flexible-guest-card .counter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.counter-title {
  font-size: 0.95rem;
  font-weight: 200;
  color: #1e293b;
  font-family: var(--font-sans);
}
.counter-subtitle {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 2px;
}
.count-display {
  font-size: 1.25rem;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
  color: #1e293b;
}
.text-center {
  text-align: center;
}
.mb-6 {
  margin-bottom: 1.5rem;
}

.trip-duration-selector:hover {
  background-color: #f3f4f6;
  border-color: #d1d5db;
}

.custom-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-top: 4px;
  max-height: 250px;
  overflow-y: auto;
  z-index: 50;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dropdown-item {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.15s;
  color: #374151;
  font-size: 0.95rem;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}

.dropdown-item.active {
  background-color: #e5e7eb;
  font-weight: 600;
  color: #111827;
}

.trip-duration-selector .caret {
  font-size: 0.7rem;
  color: #6b7280;
}
</style>
