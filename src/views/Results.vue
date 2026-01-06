<template>
  <div class="results-wrap">
    <div class="results-container">
      <div class="results-layout">
        <div class="results-main">
          <div v-if="loading" class="loading-state">
            <p class="loading-text">Loading</p>
          </div>

          <div v-else-if="error" class="error-state">
            <p class="error-message">{{ error }}</p>
            <button @click="loadResults" class="btn-primary">Try Again</button>
          </div>

          <div v-else>
            <h2 class="results-title">Your Search Results</h2>
            <div class="results-intro">
              <div v-if="allStartDateCabins.length" class="success-message">
                <p>
                  <strong>Your preferred travel dates are available!</strong>
                  We have a team of Komodo Cruises Journey Designers who are
                  ready to plan your trip. Simply select the results that suit
                  your preferences best and submit your enquiry.
                </p>
                <p class="results-note-muted">
                  <span class="semibold">Note:</span> These results indicate
                  availability and do not guarantee a booking.
                </p>
              </div>

              <div v-else-if="!flexibleAlt" class="no-availability">
                <p>
                  <strong
                    >Your preferred dates are unfortunately not available, but
                    there is availability at other Komodo Cruises lodges or on
                    alternate dates.</strong
                  >
                </p>
                <p>
                  We have a team of Komodo Cruises Journey Designers who are
                  ready to plan your trip. Simply select the results that suit
                  your preferences best and submit your enquiry.
                </p>
                <p class="results-note-muted">
                  <span class="semibold">Note:</span> These results indicate
                  availability and do not guarantee a booking.
                </p>
              </div>
            </div>

            <!-- Results Controls Bar -->
            <div v-if="sortedDisplayItems.length" class="results-controls">
              <div class="results-controls-left">
                <div class="sort-dropdown" ref="sortDropdownRef">
                  <span class="sort-label">SORT BY</span>
                  <button
                    type="button"
                    class="sort-btn"
                    @click="openSortBy = !openSortBy"
                    :aria-expanded="openSortBy"
                  >
                    <span>{{
                      SORT_OPTIONS.find((o) => o.value === sortBy)?.label ||
                      "Recommended"
                    }}</span>
                    <img
                      :src="openSortBy ? upArrowIcon : downArrowIcon"
                      alt=""
                      class="sort-caret"
                    />
                  </button>
                  <div
                    v-if="openSortBy"
                    class="sort-dropdown-panel"
                    @click.stop
                  >
                    <button
                      v-for="option in SORT_OPTIONS"
                      :key="option.value"
                      class="sort-option"
                      :class="{ active: sortBy === option.value }"
                      @click="
                        sortBy = option.value;
                        openSortBy = false;
                      "
                    >
                      {{ option.label }}
                    </button>
                  </div>
                </div>
              </div>

              <div class="results-controls-right">
                <span class="results-count"
                  >{{ sortedDisplayItems.length }}
                  {{ sortedDisplayItems.length === 1 ? "Room" : "Rooms" }}</span
                >
              </div>
            </div>

            <div v-if="sortedDisplayItems.length" class="lodge-results">
              <div
                class="cabin-card"
                v-for="item in sortedDisplayItems"
                :key="item.uniqueKey"
              >
                <!-- Image Section -->
                <div
                  class="cabin-image"
                  style="position: relative; overflow: hidden"
                >
                  <transition
                    :name="
                      item.isGallery && getGalleryDirection(item.id) === 'left'
                        ? 'slide-left'
                        : 'slide-right'
                    "
                    mode="out-in"
                  >
                    <img
                      :src="
                        item.isGallery
                          ? getGalleryImages(item.originalItem)[
                              getGalleryIndex(item.id)
                            ] || '/src/images/cabin.jpg'
                          : item.image || '/src/images/cabin.jpg'
                      "
                      :alt="item.title"
                      referrerpolicy="no-referrer"
                      decoding="async"
                      loading="lazy"
                      @error="onImgError($event, item.image)"
                      :key="item.isGallery ? getGalleryIndex(item.id) : 0"
                    />
                  </transition>
                  <template v-if="item.isGallery">
                    <button
                      class="gallery-nav gallery-prev"
                      @click="prevImage(item.id)"
                      aria-label="Previous image"
                    >
                      &lsaquo;
                    </button>
                    <button
                      class="gallery-nav gallery-next"
                      @click="nextImage(item.id)"
                      aria-label="Next image"
                    >
                      &rsaquo;
                    </button>
                  </template>
                </div>

                <!-- Content Section -->
                <div class="cabin-content">
                  <div class="cabin-header">
                    <div class="cabin-title-group">
                      <h3 class="cabin-name">{{ item.title }}</h3>
                      <span class="cabin-badge active">{{
                        getCabinType(item.originalItem)
                      }}</span>
                    </div>
                  </div>

                  <!-- Specs Row -->
                  <div class="cabin-specs">
                    <span
                      >Sleeps
                      {{ getCabinCapacity(item.originalItem) || 2 }}</span
                    >
                    <span class="specs-divider">|</span>
                    <span>{{
                      getCabinBedType(item.originalItem) || "1 King"
                    }}</span>
                    <span class="specs-divider">|</span>
                    <span>{{
                      getCabinSize(item.originalItem) || "Private cabin"
                    }}</span>
                    <template v-if="getCabinTripDays(item.originalItem)">
                      <span class="specs-divider">|</span>
                      <span
                        >{{ getCabinTripDays(item.originalItem) }} Days</span
                      >
                    </template>
                  </div>

                  <!-- Overview Section (Two Column) -->
                  <div class="cabin-overview">
                    <ul class="overview-list">
                      <li
                        v-for="(feature, fIdx) in getCabinOverview(
                          item.originalItem
                        ).slice(0, 3)"
                        :key="fIdx"
                      >
                        {{ feature }}
                      </li>
                    </ul>
                    <ul
                      class="overview-list"
                      v-if="getCabinOverview(item.originalItem).length > 3"
                    >
                      <li
                        v-for="(feature, fIdx) in getCabinOverview(
                          item.originalItem
                        ).slice(3, 6)"
                        :key="fIdx + 3"
                      >
                        {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <!-- ROOM DETAILS Button -->
                  <button
                    class="cabin-details-btn"
                    @click="
                      item.availabilityType === 'standard' &&
                        viewCabinDetails(item.originalItem)
                    "
                  >
                    ROOM DETAILS
                  </button>

                  <!-- Trip Dates Section (Luxury Dropdown Style) -->
                  <div
                    v-if="item.trips && item.trips.length > 0"
                    class="trips-section"
                  >
                    <!-- Primary Trip - Shows selected trip or first trip -->
                    <div class="trip-primary">
                      <div class="trip-primary-info">
                        <span class="trip-primary-date">{{
                          formatTripDateRange(
                            getDisplayTrip(item).date,
                            getDisplayTrip(item).tripDays
                          )
                        }}</span>
                        <span class="trip-primary-rooms"
                          >{{ getDisplayTrip(item).available || 1 }} room{{
                            (getDisplayTrip(item).available || 1) > 1 ? "s" : ""
                          }}
                          available</span
                        >
                      </div>
                    </div>

                    <!-- More Dates Toggle (Only if more than 1 trip) -->
                    <button
                      v-if="item.trips.length > 1"
                      class="more-dates-toggle"
                      @click.stop="toggleMoreDates(item.uniqueKey)"
                    >
                      <span>MORE DATES</span>
                      <span
                        class="toggle-arrow"
                        :class="{ expanded: expandedTrips[item.uniqueKey] }"
                        >▼</span
                      >
                    </button>

                    <!-- Expandable Dates List -->
                    <div
                      v-if="
                        item.trips.length > 1 && expandedTrips[item.uniqueKey]
                      "
                      class="more-dates-list"
                    >
                      <div
                        v-for="(trip, tIdx) in getOtherTrips(item)"
                        :key="tIdx"
                        class="trip-option-alt"
                        @click="selectTrip(item, trip)"
                      >
                        <div class="trip-alt-info">
                          <span class="trip-alt-date">{{
                            formatTripDateRange(trip.date, trip.tripDays)
                          }}</span>
                          <span class="trip-alt-rooms"
                            >{{ trip.available || 1 }} room{{
                              (trip.available || 1) > 1 ? "s" : ""
                            }}
                            available</span
                          >
                        </div>
                        <span class="trip-select-action">Select</span>
                      </div>
                    </div>
                  </div>

                  <div class="cabin-divider"></div>

                  <!-- Info Section -->
                  <div class="cabin-info-section">
                    <div class="cabin-info-left">
                      <template
                        v-for="(price, pIdx) in item.prices"
                        :key="pIdx"
                      >
                        <div class="price-display">
                          <p class="price-main">
                            <span class="price-label">From</span>
                            <span class="price-value"
                              >IDR {{ price.value }}</span
                            >
                          </p>
                          <p class="price-sub">per person, per night</p>
                        </div>
                      </template>
                    </div>
                    <div class="cabin-info-right">
                      <button
                        class="btn-reserve-now"
                        @click="reserveWithSelectedTrip(item)"
                      >
                        RESERVE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="flexibleAlt" class="no-results">
              <p>No alternative options found for your criteria.</p>
              <button @click="applyFilters" class="btn-primary">
                Search Again
              </button>
            </div>
          </div>
        </div>

        <div class="sidebar-container">
          <div class="sidebar-section check-availability-section">
            <h3 class="section-title-sidebar">Check Availability</h3>

            <template v-if="loading">
              <div class="sidebar-skeleton">
                <div class="skeleton-group">
                  <div class="skeleton-label"></div>
                  <div class="skeleton-input"></div>
                </div>
                <div class="skeleton-group">
                  <div class="skeleton-label"></div>
                  <div class="skeleton-input"></div>
                </div>
                <div class="skeleton-group">
                  <div class="skeleton-label"></div>
                  <div class="skeleton-input"></div>
                </div>
                <div class="skeleton-group">
                  <div class="skeleton-label"></div>
                  <div class="skeleton-input"></div>
                </div>
                <div class="skeleton-toggle">
                  <div class="skeleton-text-lg"></div>
                  <div class="skeleton-circle"></div>
                </div>
                <div class="skeleton-btn"></div>
              </div>
            </template>

            <template v-else>
              <div class="list dropdown" ref="destDropdown">
                <div class="list-heading">Destinations</div>
                <button
                  type="button"
                  :class="[
                    'select-summary',
                    openRegions || hoverRegions ? 'is-filled' : '',
                  ]"
                  @mouseenter="hoverRegions = true"
                  @mouseleave="hoverRegions = false"
                  @click.stop="toggleDropdown('regions')"
                  :aria-expanded="openRegions ? 'true' : 'false'"
                >
                  <span>Destinations: {{ formDestinations.length }}</span>
                  <span class="caret">
                    <img
                      :src="openRegions ? upArrowIcon : downArrowIcon"
                      alt=""
                      aria-hidden="true"
                      class="caret-icon"
                    />
                  </span>
                </button>
                <div v-if="openRegions" class="dropdown-panel" @click.stop>
                  <div class="dropdown-group-title">{{ REGION_NAME }}</div>
                  <div
                    class="list-row"
                    v-for="d in DESTINATIONS"
                    :key="d"
                    @click="toggleDestination(d)"
                  >
                    <div class="list-text">{{ d }}</div>
                    <input
                      class="check"
                      type="checkbox"
                      :value="d"
                      v-model="formDestinations"
                      @click.stop
                    />
                  </div>
                  <div class="dropdown-footer" @click="nextDropdown('regions')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">&rsaquo;</span>
                  </div>
                </div>
              </div>

              <div class="list dropdown" ref="shipsDropdown">
                <div class="list-heading">Ships</div>
                <button
                  type="button"
                  :class="[
                    'select-summary',
                    openShips || hoverShips ? 'is-filled' : '',
                  ]"
                  @mouseenter="hoverShips = true"
                  @mouseleave="hoverShips = false"
                  @click.stop="toggleDropdown('ships')"
                  :aria-expanded="openShips ? 'true' : 'false'"
                >
                  <span>Ships: {{ formShipIds.length }}</span>
                  <span class="caret">
                    <img
                      :src="openShips ? upArrowIcon : downArrowIcon"
                      alt=""
                      aria-hidden="true"
                      class="caret-icon"
                    />
                  </span>
                </button>
                <div v-if="openShips" class="dropdown-panel" @click.stop>
                  <div class="dropdown-group-title">{{ shipsGroupTitle }}</div>
                  <div v-if="shipsLoading" class="muted">Loading ships...</div>
                  <template v-else>
                    <div
                      class="list-row"
                      v-for="s in shipsList"
                      :key="s.id"
                      @click="toggleShip(s.id)"
                    >
                      <div class="list-text">{{ s.label }}</div>
                      <input
                        class="check"
                        type="checkbox"
                        :value="s.id"
                        v-model="formShipIds"
                        @click.stop
                      />
                    </div>
                    <div v-if="shipsList.length === 0" class="muted">
                      No ships found from API.
                    </div>
                  </template>
                  <div class="dropdown-footer" @click="nextDropdown('ships')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">&rsaquo;</span>
                  </div>
                </div>
              </div>

              <div class="list dropdown" ref="guestsDropdown">
                <div class="list-heading">Guests</div>
                <button
                  type="button"
                  :class="[
                    'select-summary',
                    openGuests || hoverGuests ? 'is-filled' : '',
                  ]"
                  @mouseenter="hoverGuests = true"
                  @mouseleave="hoverGuests = false"
                  @click.stop="toggleDropdown('guests')"
                  :aria-expanded="openGuests ? 'true' : 'false'"
                >
                  <span>{{ guestsTotal }} Guests</span>
                  <span class="caret">
                    <img
                      :src="openGuests ? upArrowIcon : downArrowIcon"
                      alt=""
                      aria-hidden="true"
                      class="caret-icon"
                    />
                  </span>
                </button>
                <div v-if="openGuests" class="dropdown-panel" @click.stop>
                  <div class="dropdown-group-title">Guests</div>
                  <div class="simple-guests">
                    <div class="simple-guests-label">Guests</div>
                    <div class="simple-guests-ctrls">
                      <button type="button" class="btn-icon" @click="decGuests">
                        −
                      </button>
                      <span class="count">{{ guestsTotal }}</span>
                      <button type="button" class="btn-icon" @click="incGuests">
                        +
                      </button>
                    </div>
                  </div>
                  <div class="dropdown-footer" @click="nextDropdown('guests')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">&rsaquo;</span>
                  </div>
                </div>
              </div>

              <div class="list dropdown" ref="datesDropdown">
                <div class="list-heading">Dates</div>
                <button
                  type="button"
                  :class="[
                    'select-summary',
                    openDates || hoverDates ? 'is-filled' : '',
                  ]"
                  @mouseenter="hoverDates = true"
                  @mouseleave="hoverDates = false"
                  @click.stop="toggleDropdown('dates')"
                  :aria-expanded="openDates ? 'true' : 'false'"
                >
                  <span>{{
                    formDateFrom
                      ? `${formDateFrom} → ${formDateTo || "..."}`
                      : "Select dates"
                  }}</span>
                  <span class="caret">
                    <img
                      :src="openDates ? upArrowIcon : downArrowIcon"
                      alt=""
                      aria-hidden="true"
                      class="caret-icon"
                    />
                  </span>
                </button>
                <div v-if="openDates" class="dropdown-panel" @click.stop>
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
                          @click="selectDateSidebar(day)"
                          type="button"
                        >
                          {{ day.date }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-footer" @click="nextDropdown('dates')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">›</span>
                  </div>
                </div>
              </div>

              <div class="sidebar-actions">
                <button class="btn-primary" @click="applySidebarChanges">
                  Apply
                </button>
              </div>
            </template>
          </div>

          <div v-if="!loading" class="itinerary-sidebar">
            <h3 class="itinerary-title">Your Itinerary</h3>
            <p class="itinerary-description">
              This is a summary of the accommodation you have selected. After
              submitting your booking request, a Komodo Cruises Journey Designer
              will make contact to book and confirm your trip.
            </p>

            <div class="itinerary-divider"></div>

            <div v-if="itineraryItems.length === 0" class="itinerary-empty">
              You haven't selected any options yet.
            </div>

            <ul v-else class="itinerary-list">
              <li
                v-for="(it, idx) in itineraryItems"
                :key="it.addedAt"
                class="itinerary-item"
              >
                <div class="itinerary-item-header">
                  <h4 class="itinerary-lodge-name">{{ it.ship }}</h4>
                  <button
                    class="itinerary-remove-btn"
                    @click="removeItemByIndex(idx)"
                    aria-label="Remove item"
                  >
                    <span class="remove-icon">✕</span>
                  </button>
                </div>
                <div class="itinerary-cabin-name">{{ it.cabin }}</div>
                <div class="itinerary-guests">
                  {{ it.guests || 2 }} Guest{{
                    (it.guests || 2) > 1 ? "s" : ""
                  }}
                </div>
                <div class="itinerary-price">
                  from {{ it.price || "ZAR 49 205" }} per adult, per night
                </div>
                <div class="itinerary-dates">
                  {{ formatDate(it.date) }} →
                  {{ formatDate(getEndDate(it.date)) }}
                </div>
              </li>
            </ul>

            <div v-if="itineraryTotals.hasPrice" class="itinerary-total">
              <div class="itinerary-total-row">
                <span class="itinerary-total-label"
                  >Estimated total (per night, all guests)</span
                >
                <span class="itinerary-total-amount">{{
                  itineraryTotals.formattedTotal
                }}</span>
              </div>
              <p class="itinerary-total-note">
                Includes {{ itineraryTotals.pricedCount }} of
                {{ itineraryItems.length }} selections. Final amounts are
                confirmed by our Journey Designers.
              </p>
              <p
                v-if="itineraryTotals.missingCount"
                class="itinerary-total-note"
              >
                {{ itineraryTotals.missingCount }} selection{{
                  itineraryTotals.missingCount > 1 ? "s" : ""
                }}
                doesn't have live pricing and is excluded from this estimate.
              </p>
            </div>
            <p v-else-if="itineraryItems.length" class="itinerary-total-note">
              Pricing for the selected cabins will be confirmed by our Journey
              Designers.
            </p>
            <button
              v-if="itineraryItems.length"
              class="btn-send-enquiry"
              @click="openEnquiryModal"
            >
              Send Availability Enquiry
            </button>

            <a href="#" class="link-speak-with-us">Speak with us &rsaquo;</a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showCabinModal && selectedCabin"
      class="modal-overlay"
      @click="closeCabinModal"
    >
      <div class="modal-content modal-content-redesigned" @click.stop>
        <button class="modal-close-details" @click="closeCabinModal">✕</button>

        <div class="modal-body modal-body-redesigned">
          <!-- Info Section (Left) -->
          <div class="modal-info-section modal-info-left">
            <div class="modal-cabin-header">
              <h2 class="modal-cabin-name">
                {{ getCabinType(selectedCabin) }}
              </h2>
              <p class="modal-cabin-subtitle">Room</p>
            </div>

            <div class="modal-cabin-specs">
              Sleeps {{ selectedCabinCapacity || 2 }} |
              {{ getCabinBedType(selectedCabin) }} |
              {{ getCabinSize(selectedCabin) }}
            </div>

            <blockquote class="modal-cabin-quote">
              "{{ selectedCabinDescription }}"
            </blockquote>

            <!-- OVERVIEW Section -->
            <div class="modal-overview-section">
              <h3 class="modal-section-title">OVERVIEW</h3>
              <div class="modal-overview-grid">
                <ul class="modal-overview-list">
                  <li
                    v-for="(feature, idx) in getCabinOverview(
                      selectedCabin
                    ).slice(0, 4)"
                    :key="idx"
                  >
                    {{ feature }}
                  </li>
                </ul>
                <ul
                  class="modal-overview-list"
                  v-if="getCabinOverview(selectedCabin).length > 4"
                >
                  <li
                    v-for="(feature, idx) in getCabinOverview(
                      selectedCabin
                    ).slice(4, 8)"
                    :key="idx + 4"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- AMENITIES & FEATURES Section -->
            <div class="modal-amenities-section">
              <h3 class="modal-section-title">AMENITIES & FEATURES</h3>
              <div class="modal-amenities-grid">
                <ul class="modal-amenities-list">
                  <li
                    v-for="(facility, idx) in selectedCabinFacilities.slice(
                      0,
                      3
                    )"
                    :key="idx"
                  >
                    {{ facility }}
                  </li>
                </ul>
                <ul
                  class="modal-amenities-list"
                  v-if="selectedCabinFacilities.length > 3"
                >
                  <li
                    v-for="(facility, idx) in selectedCabinFacilities.slice(
                      3,
                      6
                    )"
                    :key="idx + 3"
                  >
                    {{ facility }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Image Section (Right) -->
          <div class="modal-image-section modal-image-right">
            <img
              :src="getModalImage()"
              :alt="selectedCabin.cabinName"
              referrerpolicy="no-referrer"
              class="modal-cabin-image"
              :key="modalImageIndex"
              @error="onImgError($event, selectedCabin.image)"
            />
            <button
              class="modal-gallery-nav modal-gallery-prev"
              @click="prevModalImage"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              class="modal-gallery-nav modal-gallery-next"
              @click="nextModalImage"
              aria-label="Next"
            >
              ›
            </button>
            <div class="modal-image-indicator">
              {{ getCabinType(selectedCabin) }}
              <span class="indicator-count"
                >{{ modalImageIndex + 1 }} of
                {{ getModalImages().length || 1 }}</span
              >
            </div>
          </div>
        </div>

        <!-- Bottom Action Section -->
        <div class="modal-bottom-section">
          <div class="modal-rate-info">
            <div class="modal-price-display">
              <span class="price-amount">{{
                selectedCabinPriceText || "Price on request"
              }}</span>
              <span class="price-label" v-if="selectedCabinPriceText"
                >/Night</span
              >
            </div>
            <span class="price-note">Excluding taxes and fees</span>
          </div>
          <button
            class="modal-book-btn"
            @click="
              toggleItinerary(selectedCabin);
              closeCabinModal();
            "
          >
            {{
              isInItinerary(selectedCabin)
                ? "Remove from itinerary"
                : "RESERVE NOW"
            }}
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showGuestModal"
      class="guest-modal-overlay"
      @click="closeGuestModal"
    >
      <div class="guest-modal-content" @click.stop>
        <button class="guest-modal-close" @click="closeGuestModal">✕</button>

        <div class="guest-modal-header">
          <h3 class="guest-modal-title">Number of Guests</h3>
        </div>

        <div class="guest-modal-body">
          <p class="guest-modal-description">
            Please indicate how many guests will be accommodated:
          </p>

          <div class="guest-counter-section">
            <div class="guest-counter-row">
              <div class="guest-counter-label">Number of Cabins</div>
              <div class="guest-counter-controls">
                <button
                  type="button"
                  class="guest-counter-btn"
                  @click="decrementModalGuests"
                  :disabled="modalGuests <= 1"
                >
                  −
                </button>
                <span class="guest-counter-value">{{ modalGuests }}</span>
                <button
                  type="button"
                  class="guest-counter-btn"
                  @click="incrementModalGuests"
                  :disabled="modalGuests >= maxGuestsForPendingItem"
                >
                  +
                </button>
              </div>
            </div>
            <div class="guest-available-note">
              {{ pendingItineraryItem?.availableText || "1 available" }}
              <span v-if="pendingItineraryItem?.capacityText">
                • Max {{ maxGuestsForPendingItem }} guests</span
              >
            </div>
          </div>

          <div class="guest-modal-actions">
            <button class="btn-cancel-guest" @click="closeGuestModal">
              Cancel
            </button>
            <button class="btn-submit-guest" @click="submitGuestSelection">
              Add to Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showEnquiryModal" class="enquiry-modal-overlay">
      <div class="enquiry-modal-content">
        <div class="enquiry-modal-header">
          <h2 class="enquiry-modal-title">Plan your Trip</h2>
          <button class="enquiry-modal-close" @click="closeEnquiryModal">
            Close ✕
          </button>
        </div>

        <div class="enquiry-modal-body">
          <div class="enquiry-form-section">
            <p class="enquiry-intro">
              Please complete the form below and one of our Journey Designers
              will contact you shortly to plan your trip.
            </p>

            <form class="enquiry-form" @submit.prevent="submitEnquiry">
              <div class="form-row">
                <div class="form-group form-group-small">
                  <label class="form-label">Title</label>
                  <select class="form-control" v-model="enquiryForm.title">
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="enquiryForm.firstName"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="enquiryForm.lastName"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Contact Number</label>
                  <div class="phone-input">
                    <select
                      class="phone-country"
                      v-model="enquiryForm.phoneCountry"
                    >
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+60">🇲🇾 +60</option>
                    </select>
                    <input
                      type="tel"
                      class="form-control"
                      v-model="enquiryForm.phoneNumber"
                      placeholder="812345678"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Country</label>
                  <select class="form-control" v-model="enquiryForm.country">
                    <option value="">Select Country</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="enquiryForm.email"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Confirm Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="enquiryForm.confirmEmail"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">I am a:</label>
                <select class="form-control" v-model="enquiryForm.userType">
                  <option value="">Select</option>
                  <option value="guest">Guest</option>
                  <option value="agent">Travel Agent</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label"
                  >Is there anything else you'd like to let us know?</label
                >
                <textarea
                  class="form-control form-textarea"
                  rows="4"
                  v-model="enquiryForm.notes"
                ></textarea>
              </div>

              <div class="form-checkboxes">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="enquiryForm.subscribeNews" />
                  <span
                    >Sign up to receive news and blog posts from Komodo
                    Cruises</span
                  >
                </label>

                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    v-model="enquiryForm.consentData"
                    required
                  />
                  <span
                    >I consent to my submitted data being collected and
                    stored</span
                  >
                </label>
              </div>

              <p class="form-note">
                <strong>PLEASE NOTE:</strong> These results indicate
                availability and do not guarantee a booking. One of our Journey
                Designers will contact you shortly to plan your trip.
              </p>

              <button
                type="submit"
                class="btn-submit-enquiry"
                :disabled="enquirySubmitting"
              >
                {{ enquirySubmitting ? "PROCESSING..." : "PROCEED TO PAYMENT" }}
              </button>

              <p class="form-recaptcha">
                This form is protected by reCAPTCHA Enterprise and the Google
                Privacy Policy and Terms of Service apply.
              </p>
            </form>
          </div>

          <div class="enquiry-summary-section">
            <h3 class="summary-title">Your Itinerary</h3>
            <p class="summary-description">
              This is a summary of the accommodation you've selected. One of our
              Komodo Cruises Journey Designers will contact you shortly to plan
              your trip.
            </p>
            <div class="summary-items">
              <div
                v-for="(item, index) in itineraryItems"
                :key="index"
                class="summary-item"
              >
                <div class="summary-item-header">
                  <h4 class="summary-lodge-name">{{ item.ship }}</h4>
                </div>
                <div class="summary-item-details">
                  <p class="summary-cabin">{{ item.cabin }}</p>
                  <p class="summary-guests">
                    {{ item.guests || 2 }} Guest{{
                      (item.guests || 2) > 1 ? "s" : ""
                    }}
                  </p>
                  <p class="summary-dates">
                    {{ formatDate(item.date) }} →
                    {{ formatDate(getEndDate(item.date)) }}
                  </p>
                </div>
                <div v-if="item.price" class="summary-pricing">
                  <div class="pricing-row">
                    <span class="pricing-label">Price per cabin</span>
                    <span class="pricing-value">{{ item.price }}</span>
                  </div>
                  <div class="pricing-row">
                    <span class="pricing-label"
                      >× {{ item.guests || 2 }} guest{{
                        (item.guests || 2) > 1 ? "s" : ""
                      }}</span
                    >
                    <span class="pricing-value">{{
                      formatItemSubtotal(item)
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="itineraryTotals.hasPrice" class="enquiry-total-section">
              <div class="enquiry-total-divider"></div>
              <div class="enquiry-total">
                <div class="enquiry-total-row">
                  <span class="enquiry-total-label">Total Price</span>
                  <span class="enquiry-total-amount">{{
                    itineraryTotals.formattedTotal
                  }}</span>
                </div>
              </div>
            </div>
            <p v-else-if="itineraryItems.length" class="enquiry-pricing-note">
              Pricing for the selected cabins will be confirmed by our Journey
              Designers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import downArrowIcon from "../images/arrows/down-arrow.svg";
import upArrowIcon from "../images/arrows/up-arrow.svg";
// DEBUG LOGGING: Uncomment for troubleshooting price/detail mapping
// (Letakkan di bawah semua computed agar tidak ReferenceError)

// --- IMAGE GALLERY STATE ---
const galleryIndexes = ref({}); // { [cabinKey]: index }
const galleryDirections = ref({}); // { [cabinKey]: 'left' | 'right' }

function getCabinImages(obj) {
  if (!obj || typeof obj === "string") return [];
  const candidates = [];
  if (obj.image_main) candidates.push(obj.image_main);
  if (Array.isArray(obj.images)) candidates.push(...obj.images);
  for (let i = 1; i <= 10; i++) {
    const key = `image_${i}`;
    if (obj[key]) candidates.push(obj[key]);
  }
  return candidates
    .filter((u) => !!u && String(u).trim().length > 0)
    .map(normalizeDriveUrl);
}

function getGalleryImages(item) {
  // Try detail first, fallback to raw
  const imgs = getCabinImages(item.detail) || [];
  if (imgs.length) return imgs;
  return getCabinImages(item.raw) || [];
}

function getGalleryIndex(key) {
  return galleryIndexes.value[key] || 0;
}

function getGalleryDirection(key) {
  return galleryDirections.value[key] || "right";
}

function setGalleryIndex(key, idx, total, direction) {
  if (total > 0) {
    galleryIndexes.value[key] = (idx + total) % total;
    galleryDirections.value[key] = direction;
  } else {
    galleryIndexes.value[key] = 0;
    galleryDirections.value[key] = "right";
  }
}

function prevImage(cabinKey) {
  const item = allStartDateCabins.value.find((i) => i.key === cabinKey);
  if (!item) return;
  const imgs = getGalleryImages(item);
  setGalleryIndex(cabinKey, getGalleryIndex(cabinKey) - 1, imgs.length, "left");
}

function nextImage(cabinKey) {
  const item = allStartDateCabins.value.find((i) => i.key === cabinKey);
  if (!item) return;
  const imgs = getGalleryImages(item);
  setGalleryIndex(
    cabinKey,
    getGalleryIndex(cabinKey) + 1,
    imgs.length,
    "right"
  );
}

// --- MODAL IMAGE CAROUSEL ---
const modalImageIndex = ref(0);

function getModalImages() {
  if (!selectedCabin.value) return [];
  const imgs = getGalleryImages(selectedCabin.value);
  return imgs.length
    ? imgs
    : [selectedCabin.value.image || "/src/images/cabin.jpg"];
}

function getModalImage() {
  const imgs = getModalImages();
  const idx = modalImageIndex.value % (imgs.length || 1);
  return imgs[idx] || "/src/images/cabin.jpg";
}

function prevModalImage() {
  const imgs = getModalImages();
  const total = imgs.length || 1;
  modalImageIndex.value = (modalImageIndex.value - 1 + total) % total;
}

function nextModalImage() {
  const imgs = getModalImages();
  const total = imgs.length || 1;
  modalImageIndex.value = (modalImageIndex.value + 1) % total;
}

// ...existing code...

// --- DEBUG LOGGING: PASTE INI DI PALING BAWAH FILE ---
// (Aman: watchEffect dijalankan setelah mounted)
onMounted(() => {
  watchEffect(() => {
    try {
      console.log("DEBUG selectedCabinDetail", selectedCabinDetail.value);
      console.log("DEBUG selectedCabinPriceText", selectedCabinPriceText.value);
    } catch (err) {
      console.warn("DEBUG watchEffect error:", err);
    }
  });
});
import {
  getAvailability,
  getCabins,
  getOperators,
} from "../services/komodoApi";
import {
  createXenditInvoice,
  redirectToPayment,
  parsePriceToNumber,
} from "../services/xenditService";
import "../styles/pages/results.css";

const DEFAULT_CURRENCY = "Rp";

const rightArrowIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

const loading = ref(true);
const error = ref("");
const searchCriteria = ref(null);
const shipAvailability = ref({});
const availabilityData = ref([]);
const globalStartAvailability = ref(null);

const itineraryItems = ref([]);
const pendingItineraryItem = ref(null);
const showCabinModal = ref(false);
const showGuestModal = ref(false);
const showEnquiryModal = ref(false);
const selectedCabin = ref(null);
const cabinQuantity = ref(1);
const modalGuests = ref(2);
const enquirySubmitting = ref(false);
const selectedTripKey = ref(""); // Track selected trip for reservation
const selectedRoomQuantities = ref({}); // Track room quantities per trip: { [tripKey]: quantity }
const expandedTrips = ref({}); // Track which cabin's "More Dates" is expanded

// Sort By state
const sortBy = ref("recommended");
const openSortBy = ref(false);
const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price_low", label: "Lowest Price" },
  { value: "price_high", label: "Highest Price" },
];

const REGION_NAME = "Nusa Tenggara Timur";
const DESTINATIONS = ["Komodo National Park", "Labuan Bajo"];
const SHIPS_CONFIG = [];
const shipsList = ref([]);
const shipsLoading = ref(false);
const formDestinations = ref([]);
const formShipIds = ref([]);
const savedShipPairs = ref([]);
const formDateFrom = ref("");
const formDateTo = ref("");
const adults = ref(2);
const children = ref(0);
const age3_9 = ref(0);
const age0_2 = ref(0);
const guestsTotal = ref(2);
const detailCabinMap = ref(new Map());

const openRegions = ref(false);
const openShips = ref(false);
const openGuests = ref(false);
const openDates = ref(false);
const hoverShips = ref(false);
const hoverRegions = ref(false);
const hoverGuests = ref(false);
const hoverDates = ref(false);

const destDropdown = ref(null);
const shipsDropdown = ref(null);
const guestsDropdown = ref(null);
const datesDropdown = ref(null);
const sortDropdownRef = ref(null);

const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

function closeAllDropdowns() {
  openRegions.value = false;
  openShips.value = false;
  openGuests.value = false;
  openDates.value = false;
}

function toggleDropdown(which) {
  if (which === "regions") {
    openRegions.value = !openRegions.value;
    openShips.value = openGuests.value = openDates.value = false;
  } else if (which === "ships") {
    openShips.value = !openShips.value;
    openRegions.value = openGuests.value = openDates.value = false;
  } else if (which === "guests") {
    openGuests.value = !openGuests.value;
    openRegions.value = openShips.value = openDates.value = false;
  } else if (which === "dates") {
    openDates.value = !openDates.value;
    openRegions.value = openShips.value = openGuests.value = false;
  }
}

function nextDropdown(from) {
  if (from === "regions") {
    openRegions.value = false;
    openShips.value = true;
    openGuests.value = openDates.value = false;
  } else if (from === "ships") {
    openShips.value = false;
    openGuests.value = true;
    openRegions.value = openDates.value = false;
  } else if (from === "guests") {
    openGuests.value = false;
    openDates.value = true;
    openRegions.value = openShips.value = false;
  } else if (from === "dates") {
    closeAllDropdowns();
  }
}

function toggleDestination(d) {
  const i = formDestinations.value.indexOf(d);
  if (i >= 0) formDestinations.value.splice(i, 1);
  else formDestinations.value.push(d);
}

function toggleShip(id) {
  const i = formShipIds.value.indexOf(id);
  if (i >= 0) formShipIds.value.splice(i, 1);
  else formShipIds.value.push(id);
}

function incGuests() {
  guestsTotal.value = Math.min(16, (guestsTotal.value || 0) + 1);
}

function decGuests() {
  guestsTotal.value = Math.max(1, (guestsTotal.value || 1) - 1);
}

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
    const dateString = formatDateToString(date);

    // Check if in range
    let isInRange = false;
    let isRangeStart = false;
    let isRangeEnd = false;
    if (formDateFrom.value && formDateTo.value && isCurrentMonth) {
      const fromDate = new Date(formDateFrom.value + "T00:00:00");
      const toDate = new Date(formDateTo.value + "T00:00:00");
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
      isSelected:
        formDateFrom.value === dateString || formDateTo.value === dateString,
      isInRange,
      isRangeStart,
      isRangeEnd,
    });
  }
  return days;
});

function changeMonth(delta) {
  let m = currentMonth.value + delta;
  let y = currentYear.value;
  if (m > 11) {
    m = 0;
    y += 1;
  }
  if (m < 0) {
    m = 11;
    y -= 1;
  }
  currentMonth.value = m;
  currentYear.value = y;
}

function nextMonth() {
  changeMonth(1);
}

function prevMonth() {
  changeMonth(-1);
}

function selectDateSidebar(day) {
  if (!day.isSelectable) return;

  // If no start date, or if both dates are set, start fresh
  if (!formDateFrom.value || (formDateFrom.value && formDateTo.value)) {
    formDateFrom.value = day.fullDate;
    formDateTo.value = "";
  } else {
    // Start date exists, set end date
    const startDate = new Date(formDateFrom.value + "T00:00:00");
    const clickedDate = new Date(day.fullDate + "T00:00:00");

    if (clickedDate < startDate) {
      // If clicked date is before start, swap them
      formDateTo.value = formDateFrom.value;
      formDateFrom.value = day.fullDate;
    } else {
      formDateTo.value = day.fullDate;
    }
  }
}

const shipsGroupTitle = computed(() => {
  if (formDestinations.value.length) return formDestinations.value[0];
  const sc = searchCriteria.value;
  if (Array.isArray(sc?.destinations) && sc.destinations.length)
    return sc.destinations[0];
  return REGION_NAME;
});

const availabilityResults = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return [];
  const labels = sc.ships && sc.ships.length ? sc.ships : sc.lodges || [];
  const results = [];
  for (const label of labels) {
    const perDay = shipAvailability.value[label] || [];
    let totalAvailable = 0;
    let totalSlots = 0;
    for (const day of perDay) {
      const allCabins = day?.operators?.flatMap((op) => op.cabins || []) || [];
      const daySlots = allCabins.reduce((sum, cabin) => {
        const m = String(cabin).match(/\((\d+)\)/);
        return sum + (m ? parseInt(m[1], 10) : 0);
      }, 0);
      totalAvailable += daySlots;
      totalSlots += daySlots;
    }
    const daysCount = perDay.length;
    const avg = daysCount > 0 ? totalAvailable / daysCount : 0;
    const hasAvailability = avg >= (sc.totalGuests || 0);
    const minCap = Math.max(
      1,
      sc.totalGuests || (sc.adults || 0) + (sc.children || 0)
    );
    const startDay = perDay.find((d) => d?.date === sc.dateFrom) || perDay[0];
    const startCabinsAll = startDay?.operators?.[0]?.cabins || [];
    const startCabinsCount = startCabinsAll.reduce((cnt, c) => {
      const m = String(c).match(/\((\d+)\)/);
      const cap = m ? parseInt(m[1], 10) : 0;
      return cnt + (cap >= minCap ? 1 : 0);
    }, 0);
    results.push({
      lodge: label,
      hasAvailability,
      availableSlots: Math.floor(avg),
      totalSlots: daysCount > 0 ? Math.floor(totalSlots / daysCount) : 0,
      image: "/src/images/cabin.jpg",
      availableCabinsCount: startCabinsCount,
      dateFrom: sc.dateFrom,
    });
  }
  return results;
});

const cabinResults = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return [];
  const labels = sc.ships && sc.ships.length ? sc.ships : sc.lodges || [];
  const date = sc.dateFrom;
  const minCap = Math.max(
    1,
    sc.totalGuests || (sc.adults || 0) + (sc.children || 0)
  );
  const items = [];
  const seen = new Set();
  for (const label of labels) {
    const perDay = shipAvailability.value[label] || [];
    const day = perDay.find((d) => d?.date === date) || perDay[0];
    const cabins = (day?.operators || []).flatMap((op) => op.cabins || []);
    for (const c of cabins) {
      const baseName = getCabinBaseName(c);
      const cap = extractCapacityNumber(c);
      const img = typeof c === "string" ? "" : getCabinImage(c);
      if (cap == null || cap >= minCap) {
        const id =
          typeof c !== "string" && c?.id
            ? String(c.id).trim().toLowerCase()
            : null;
        const key =
          id || `${normalizeName(label)}|${normalizeCabinName(baseName)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        items.push({
          ship: label,
          cabinName: baseName,
          capacity: cap,
          date: date,
          image: img,
        });
      }
    }
  }
  return items;
});

const cabinCards = computed(() =>
  cabinResults.value.map((r) => ({
    cabinName: r.cabinName,
    ship: r.ship,
    date: r.date,
    capacity: r.capacity,
    image: r.image || "/src/images/cabin.jpg",
  }))
);

const minCapacity = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return 1;
  return Math.max(1, sc.totalGuests || (sc.adults || 0) + (sc.children || 0));
});

const selectedCabinDetail = computed(() => {
  const item = selectedCabin.value;
  if (!item) return null;
  if (item.detail) return item.detail;
  const map = detailCabinMap.value || new Map();
  const key = `${normalizeName(
    item.shipName || item.operatorLabel || ""
  )}|${normalizeCabinName(item.cabinName)}`;
  return map.get(key) || null;
});

const selectedCabinDescription = computed(() => {
  const d = selectedCabinDetail.value;
  return (
    (d?.description || d?.desc || "").trim() ||
    "If you are desperate for a vacation, bring your friends or family and step away from it all."
  );
});

const selectedCabinPriceText = computed(() => {
  const d = selectedCabinDetail.value;
  const raw =
    (d && (typeof d.price === "number" ? d.price : getCabinPrice(d))) ||
    getCabinPrice(selectedCabin.value);
  if (raw == null) return "";
  const parsed = parsePriceValue(raw, DEFAULT_CURRENCY);
  if (!parsed) return "";
  return formatTotalAmount(parsed.amount, parsed.currency);
});

const selectedCabinCapacity = computed(() => {
  const d = selectedCabinDetail.value;
  if (d?.capacity) return d.capacity;
  const fromText = getMaxCapacityFromText(selectedCabin.value?.capacityText);
  return fromText || selectedCabin.value?.capacity || "";
});

const selectedCabinFacilities = computed(() => {
  const d = selectedCabinDetail.value;
  const flags =
    d && typeof d === "object" && d.facilities ? d.facilities : null;
  const labelMap = {
    wifi: "Wi-Fi",
    starlink: "Starlink",
    jacuzzi: "Jacuzzi",
    indoor_jacuzzi: "Indoor jacuzzi",
    outdoor_jacuzzi: "Outdoor jacuzzi",
    indoor_lounge: "Indoor lounge",
    outdoor_lounge: "Outdoor lounge",
    sundeck: "Sundeck",
    seaview: "Sea view",
    balcony: "Balcony",
    private_bathroom: "Private bathroom",
    shower: "Shower",
    bathtub: "Bathtub",
    outdoor_bathtub: "Outdoor bathtub",
    king_bed: "King bed",
    bar: "Bar",
    hammock: "Hammock",
    smart_tv: "Smart TV",
    ac: "Air conditioning",
  };
  const picked = [];
  if (flags) {
    for (const [key, label] of Object.entries(labelMap)) {
      if (flags[key]) picked.push(label);
    }
  }
  if (picked.length) return picked;

  const textSources = [];
  if (d) {
    if (d.facility_text) textSources.push(d.facility_text);
    if (d.facilities_text) textSources.push(d.facilities_text);
    if (d.api_name) textSources.push(d.api_name);
    if (d.description) textSources.push(d.description);
  }
  if (selectedCabin.value?.capacityText)
    textSources.push(selectedCabin.value.capacityText);
  const parsed = extractFacilitiesFromText(textSources.join(" "));
  return parsed;
});

const displayDestinations = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return "";
  if (Array.isArray(sc.destinations) && sc.destinations.length)
    return sc.destinations.join(", ");
  return sc.destination || "";
});

const selectedShipMatchers = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return [];
  const labels = sc.ships && sc.ships.length ? sc.ships : sc.lodges || [];
  const sheets = sc.shipSheets && sc.shipSheets.length ? sc.shipSheets : [];
  const set = new Set();
  const addVariants = (s) => {
    const n = normalizeName(
      String(s)
        .replace(/normalized/gi, "")
        .replace(/cruise schedule/gi, "")
    );
    if (!n) return;
    set.add(n);
    const first = n.split(" ")[0];
    if (first) set.add(first);
  };
  labels.forEach(addVariants);
  sheets.forEach(addVariants);
  return Array.from(set);
});

const allStartDateCabins = computed(() => {
  const sc = searchCriteria.value;
  const g = globalStartAvailability.value;
  if (!sc || !g || !Array.isArray(g.operators)) return [];
  const selectedMatchers = selectedShipMatchers.value;
  const detailMap = detailCabinMap.value || new Map();
  const map = new Map();
  for (const op of g.operators) {
    const operatorLabel = op.operator;
    const cabins = op.cabins || [];
    for (const cb of cabins) {
      const available = getCabinAvailable(cb);
      if (available != null && available <= 0) continue;
      const name = getCabinBaseName(cb);
      const capacityText = getCabinCapacityText(cb);
      const price = getCabinPrice(cb);
      const shipName = getShipName(cb, operatorLabel);
      if (
        selectedMatchers.length &&
        !matchesSelectedShip(shipName, selectedMatchers)
      )
        continue;
      const id =
        typeof cb !== "string" && cb?.id
          ? String(cb.id).trim().toLowerCase()
          : null;
      const cabinKey = normalizeCabinName(name);

      // Get start_date from cabin data for key uniqueness
      const cabinDate =
        typeof cb !== "string" ? cb.start_date || cb.date || "" : "";

      // Include date in key so same cabin on different dates are treated as separate entries
      const key =
        id ||
        `${normalizeName(shipName)}|${cabinKey}|${cabinDate}` ||
        `${normalizeName(operatorLabel)}|${cabinKey}|${cabinDate}`;
      const detail = detailMap.get(`${normalizeName(shipName)}|${cabinKey}`);
      const mergedPrice = getCabinPrice(detail) || price;
      const mergedCapacity = getCabinCapacityText(detail) || capacityText;
      const detailAvailable = getCabinAvailable(detail);
      const mergedAvailable =
        detailAvailable != null ? detailAvailable : available;
      const mergedImage =
        getCabinImage(detail) || getCabinImage(cb) || "/src/images/cabin.jpg";

      // Extract trip_days from raw API data or detail
      const rawTripDays =
        typeof cb !== "string" ? cb.trip_days || cb.days : null;
      const detailTripDays = detail ? detail.trip_days || detail.days : null;
      const tripDays = rawTripDays || detailTripDays || null;

      // Extract start_date from raw API data (if available) or use user's dateFrom
      const rawStartDate =
        typeof cb !== "string" ? cb.start_date || cb.date : null;
      const cabinStartDate = rawStartDate || sc.dateFrom;

      const existing = map.get(key);
      const value = {
        key,
        operatorLabel,
        shipName,
        cabinName: name,
        available: mergedAvailable,
        availableText:
          mergedAvailable != null
            ? `${mergedAvailable} available`
            : "Available",
        price: mergedPrice,
        capacityText: mergedCapacity,
        date: cabinStartDate,
        tripDays: tripDays,
        image: mergedImage,
        raw: cb,
        detail,
      };
      if (!existing) {
        map.set(key, value);
      } else {
        const merged = { ...existing };
        if (merged.available == null && mergedAvailable != null)
          merged.available = mergedAvailable;
        if (!merged.price && mergedPrice) merged.price = mergedPrice;
        if (!merged.capacityText && mergedCapacity)
          merged.capacityText = mergedCapacity;
        merged.availableText =
          merged.available != null
            ? `${merged.available} available`
            : "Available";
        map.set(key, merged);
      }
    }
  }
  const items = Array.from(map.values());
  items.sort(
    (a, b) =>
      (a.operatorLabel || "").localeCompare(b.operatorLabel || "") ||
      (a.cabinName || "").localeCompare(b.cabinName || "")
  );

  // Filter by date range if user selected both start and end dates
  const userDateFrom = sc.dateFrom;
  const userDateTo = sc.dateTo;

  if (userDateFrom && userDateTo) {
    const filteredItems = items.filter((item) => {
      const tripDays = getCabinTripDays(item);
      if (!tripDays) return true; // Show cabin if no trip_days data
      return tripOverlapsWithRange(
        item.date,
        tripDays,
        userDateFrom,
        userDateTo
      );
    });
    return filteredItems;
  }

  return items;
});

const displayItems = computed(() => {
  const cabins = allStartDateCabins.value;

  // Group cabins by shipName + cabinName (consolidate duplicates)
  const groupedMap = new Map();

  for (const item of cabins) {
    const groupKey = `${item.shipName || item.operatorLabel}|${item.cabinName}`;

    if (!groupedMap.has(groupKey)) {
      // First occurrence - create new group
      groupedMap.set(groupKey, {
        ...item,
        trips: [],
        totalAvailable: 0,
      });
    }

    const group = groupedMap.get(groupKey);

    const tripDateStr = item.date || "";
    const tripDays = Number(item.tripDays || getCabinTripDays(item)) || 3;

    if (!tripDateStr) continue;

    // Check if this date falls within an existing trip's range
    const currentDate = new Date(tripDateStr + "T00:00:00");
    let isWithinExistingTrip = false;

    for (const existingTrip of group.trips) {
      const existingStart = new Date(existingTrip.date + "T00:00:00");
      const existingDays = Number(existingTrip.tripDays) || 3;
      const existingEnd = new Date(existingStart);
      existingEnd.setDate(existingEnd.getDate() + existingDays - 1);

      // Check if current date is within this existing trip's range
      if (currentDate >= existingStart && currentDate <= existingEnd) {
        isWithinExistingTrip = true;
        break;
      }
    }

    if (!isWithinExistingTrip) {
      // Add this trip to the trips array
      const tripInfo = {
        date: item.date,
        tripDays: tripDays,
        available: item.available || 1,
        key: item.key,
        originalItem: item,
      };

      group.trips.push(tripInfo);
      group.totalAvailable += tripInfo.available || 1;

      // Use best price (lowest)
      if (
        item.price &&
        (!group.price ||
          parsePriceToNumber(item.price) < parsePriceToNumber(group.price))
      ) {
        group.price = item.price;
      }
    }
  }

  // Convert grouped map to display items array
  return Array.from(groupedMap.values()).map((group) => {
    // Sort trips by date
    const sortedTrips = group.trips.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    return {
      id: group.key,
      uniqueKey: `${group.shipName}|${group.cabinName}`,
      title: group.cabinName,
      subtitle: formatShipName(group.operatorLabel),
      image: group.image,
      prices: [{ label: "Start from", value: group.price || "Rp3,650,000" }],
      availabilityCount:
        group.totalAvailable > 1
          ? `${group.totalAvailable} rooms available`
          : group.availableText,
      tripsCount: sortedTrips.length,
      trips: sortedTrips,
      date: formatDate(sortedTrips[0]?.date),
      availabilityType: "standard",
      availabilityTitle: "Great news, we have availability!",
      availabilityText:
        "Select the result that best suits you from the list below and it will be added to the itinerary summary on the right.",
      originalItem: group,
      isGallery: true,
    };
  });
});

// Sorted display items based on sortBy selection
const sortedDisplayItems = computed(() => {
  const items = [...displayItems.value];
  if (sortBy.value === "price_low") {
    items.sort((a, b) => {
      const priceA = parsePriceToNumber(a.prices?.[0]?.value || "0");
      const priceB = parsePriceToNumber(b.prices?.[0]?.value || "0");
      return priceA - priceB;
    });
  } else if (sortBy.value === "price_high") {
    items.sort((a, b) => {
      const priceA = parsePriceToNumber(a.prices?.[0]?.value || "0");
      const priceB = parsePriceToNumber(b.prices?.[0]?.value || "0");
      return priceB - priceA;
    });
  }
  // 'recommended' keeps original order
  return items;
});

const maxGuestsForPendingItem = computed(() => {
  const item = pendingItineraryItem.value || {};
  const capacityFromText = getMaxCapacityFromText(item.capacityText);
  if (capacityFromText) return capacityFromText;
  if (item.available && item.available > 0) return item.available * 4;
  return 16;
});

const itineraryTotals = computed(() => {
  const items = itineraryItems.value || [];
  if (!items.length) {
    return {
      hasPrice: false,
      total: 0,
      formattedTotal: "",
      pricedCount: 0,
      missingCount: 0,
    };
  }
  let detectedCurrency = "";
  let total = 0;
  let pricedCount = 0;
  for (const item of items) {
    const parsed = parsePriceValue(
      item?.price,
      detectedCurrency || DEFAULT_CURRENCY
    );
    if (!parsed) {
      continue;
    }
    if (!detectedCurrency) {
      detectedCurrency = parsed.currency;
    }
    if (
      detectedCurrency &&
      parsed.currency &&
      detectedCurrency !== parsed.currency
    ) {
      continue;
    }
    const guests = Number(item?.guests || 2);
    const itemTotal =
      Number(parsed.amount) * (Number.isFinite(guests) ? guests : 2);
    total += itemTotal;
    pricedCount++;
  }
  const hasPrice = pricedCount > 0;
  return {
    hasPrice,
    total,
    formattedTotal: hasPrice
      ? formatTotalAmount(total, detectedCurrency || DEFAULT_CURRENCY)
      : "",
    pricedCount,
    missingCount: items.length - pricedCount,
  };
});

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatTripDateRange(startDate, tripDays) {
  if (!startDate) return "";
  const start = new Date(startDate + "T00:00:00");
  const days = Number(tripDays) || 1;

  if (days <= 1) {
    return formatDate(startDate);
  }

  const end = new Date(start);
  end.setDate(end.getDate() + days - 1);

  const startFormatted = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const endFormatted = end.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `${startFormatted} - ${endFormatted}`;
}

function getEndDate(startDateString) {
  if (!startDateString) return "";
  return addDaysToDateString(startDateString, 2);
}

function formatShipName(shipName) {
  if (!shipName) return "";
  const firstWord = shipName.trim().split(/[\s(]+/)[0];
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
}

function selectTrip(cabinItem, trip) {
  selectedTripKey.value = trip.key;
  // Update the cabin item with selected trip info for reservation
  if (cabinItem.originalItem) {
    cabinItem.originalItem.selectedTrip = trip;
  }
  // Initialize quantity to 1 if not set
  if (!selectedRoomQuantities.value[trip.key]) {
    selectedRoomQuantities.value[trip.key] = 1;
  }
}

function toggleMoreDates(cabinKey) {
  expandedTrips.value[cabinKey] = !expandedTrips.value[cabinKey];
}

// Get the currently selected trip for display (or first trip if none selected)
function getDisplayTrip(item) {
  if (!item.trips || item.trips.length === 0) return null;
  // Find selected trip from this cabin's trips
  const selectedTrip = item.trips.find(
    (trip) => trip.key === selectedTripKey.value
  );
  return selectedTrip || item.trips[0];
}

// Get all trips except the currently displayed one (for MORE DATES dropdown)
function getOtherTrips(item) {
  if (!item.trips || item.trips.length <= 1) return [];
  const displayTrip = getDisplayTrip(item);
  return item.trips.filter((trip) => trip.key !== displayTrip.key);
}

// Reserve with the currently selected trip date
function reserveWithSelectedTrip(item) {
  const selectedTrip = getDisplayTrip(item);
  if (!selectedTrip) {
    console.warn("No trip selected");
    return;
  }

  // Create cabin info with the selected trip's date
  const cabinInfo = {
    ...item.originalItem,
    date: selectedTrip.date,
    tripDays: selectedTrip.tripDays,
    available: selectedTrip.available,
    selectedTrip: selectedTrip,
  };

  // Call the existing itinerary toggle function
  if (typeof toggleItinerary === "function") {
    toggleItinerary(cabinInfo);
  } else {
    // Fallback: add to itinerary directly
    addToItinerary(cabinInfo);
  }
}

function getSelectedQty(trip) {
  return selectedRoomQuantities.value[trip.key] || 1;
}

function increaseRoomQty(trip) {
  const max = trip.available || 1;
  const current = selectedRoomQuantities.value[trip.key] || 1;
  if (current < max) {
    selectedRoomQuantities.value[trip.key] = current + 1;
  }
}

function decreaseRoomQty(trip) {
  const current = selectedRoomQuantities.value[trip.key] || 1;
  if (current > 1) {
    selectedRoomQuantities.value[trip.key] = current - 1;
  }
}

async function loadShipsList() {
  shipsLoading.value = true;
  try {
    const res = await getOperators();
    shipsList.value = (res.operators || [])
      .map((op) => {
        const label = op.operator?.trim() || "";
        const sheet = op.sourceSheet?.trim() || label;
        return { id: `${label}__${sheet}`, label, sheet };
      })
      .filter((s) => s.label && s.sheet);

    if (!formShipIds.value.length && savedShipPairs.value.length) {
      const ids = [];
      for (const pair of savedShipPairs.value) {
        const match = shipsList.value.find(
          (s) => s.label === pair.label && s.sheet === (pair.sheet || s.sheet)
        );
        if (match) ids.push(match.id);
      }
      formShipIds.value = ids;
    }
  } catch (e) {
    console.warn("Failed to load operators:", e);
    shipsList.value = SHIPS_CONFIG.map((s) => ({
      id: s.id || `${s.label || ""}__${s.sheet || ""}`,
      label: s.label,
      sheet: s.sheet || s.label,
    }));
  } finally {
    shipsLoading.value = false;
  }
}

async function loadDetailCabins() {
  try {
    // Fetch from resource=cabindetail (API endpoint khusus detail cabin)
    const url =
      "https://script.google.com/macros/s/AKfycbwvfIHPdbGq7cVlbX6g1IPoBdE2xIqYD9fZJclMlq9AYAFGa--e3eGV15HbYfrj2z4vLw/exec?resource=cabindetail";
    const res = await fetch(url).then((r) => r.json());
    const map = new Map();
    if (res && Array.isArray(res.data)) {
      res.data.forEach((cb) => {
        const baseName = getCabinBaseName(cb);
        const shipName = cb.operator || cb.shipName || "";
        const key = `${normalizeName(shipName)}|${normalizeCabinName(
          baseName
        )}`;
        if (key.trim()) map.set(key, cb);
      });
    }
    detailCabinMap.value = map;
  } catch (e) {
    console.warn("Failed to load cabindetail API", e);
  }
}

async function checkAvailability() {
  if (!searchCriteria.value) return;
  loading.value = true;
  error.value = "";
  shipAvailability.value = {};
  availabilityData.value = [];
  globalStartAvailability.value = null;
  try {
    const sc = searchCriteria.value;
    const dates = generateDateRange(sc.dateFrom, sc.dateTo);
    const labels = sc.ships && sc.ships.length ? sc.ships : sc.lodges || [];
    const sheets =
      sc.shipSheets && sc.shipSheets.length ? sc.shipSheets : labels;

    let globalCabinsPromise = null;
    const getGlobalCabinsOnce = () => {
      if (!globalCabinsPromise) {
        globalCabinsPromise = getCabins("Cruise Schedule - Normalized").catch(
          () => null
        );
      }
      return globalCabinsPromise;
    };

    const allowedBySheet = {};
    await Promise.all(
      sheets.map(async (sheet, i) => {
        const label = labels[i] || sheet;
        let allowed = [];
        try {
          const cab = await getCabins(sheet);
          if (Array.isArray(cab?.allCabins)) {
            allowed = cab.allCabins.map((c) => String(c).split(" (")[0].trim());
          }
        } catch {}
        if (allowed.length === 0) {
          try {
            const globalCab = await getGlobalCabinsOnce();
            if (globalCab) {
              const target = normalizeName(label);
              const op = (globalCab.operators || []).find(
                (o) => normalizeName(o.operator) === target
              );
              if (op && Array.isArray(op.cabins)) {
                allowed = op.cabins.map((c) => String(c).split(" (")[0].trim());
              }
            }
          } catch {}
        }
        allowedBySheet[sheet] = Array.from(
          new Set(allowed.map(normalizeCabinName))
        );
      })
    );

    const perShipEntries = await Promise.all(
      sheets.map(async (sheet, i) => {
        const label = labels[i] || sheet;
        const allowed = allowedBySheet[sheet] || [];
        const primaryPromises = dates.map((date) =>
          getAvailability(date, sheet).catch(() => null)
        );
        const primaryDays = await Promise.all(primaryPromises);
        const needFallbackIdx = primaryDays
          .map((day, idx) =>
            !day || !day.operators || day.operators.length === 0 ? idx : -1
          )
          .filter((idx) => idx >= 0);
        let fallbackDays = [];
        if (needFallbackIdx.length) {
          const fbPromises = needFallbackIdx.map((idx) =>
            getAvailability(dates[idx], "Cruise Schedule - Normalized").catch(
              () => null
            )
          );
          const fbResults = await Promise.all(fbPromises);
          fallbackDays = fbResults;
        }
        const perShipResults = [];
        for (let idx = 0; idx < dates.length; idx++) {
          const day =
            primaryDays[idx] &&
            primaryDays[idx].operators &&
            primaryDays[idx].operators.length
              ? primaryDays[idx]
              : needFallbackIdx.includes(idx)
              ? fallbackDays[needFallbackIdx.indexOf(idx)]
              : null;
          if (day) {
            const allCabins =
              day.operators?.flatMap((op) => op.cabins || []) || [];
            const filtered = allowed.length
              ? allCabins.filter((c) => allowed.includes(normalizeCabinName(c)))
              : allCabins;
            perShipResults.push({
              ...day,
              operators: [
                { operator: label, total: filtered.length, cabins: filtered },
              ],
            });
          }
        }
        return [label, perShipResults];
      })
    );

    const perShip = {};
    for (const [label, results] of perShipEntries) {
      perShip[label] = results;
    }
    shipAvailability.value = perShip;
    availabilityData.value = Object.values(perShip).flat();

    // Fetch availability for ALL dates in range and combine
    if (sc?.dateFrom) {
      try {
        const allDates = generateDateRange(
          sc.dateFrom,
          sc.dateTo || sc.dateFrom
        );
        const allAvailabilityPromises = allDates.map(async (date) => {
          let dayData = await getAvailability(date).catch(() => null);
          if (
            !dayData ||
            !dayData.operators ||
            dayData.operators.length === 0
          ) {
            dayData = await getAvailability(
              date,
              "Cruise Schedule - Normalized"
            ).catch(() => null);
          }
          return { date, data: dayData };
        });

        const allResults = await Promise.all(allAvailabilityPromises);

        // Combine all operators and cabins from all dates
        const combinedOperatorsMap = new Map();
        for (const { date, data } of allResults) {
          if (!data || !data.operators) continue;
          for (const op of data.operators) {
            const opKey = op.operator;
            if (!combinedOperatorsMap.has(opKey)) {
              combinedOperatorsMap.set(opKey, { operator: opKey, cabins: [] });
            }
            const existing = combinedOperatorsMap.get(opKey);
            // Add cabins with their actual date
            for (const cabin of op.cabins || []) {
              // Add date info to cabin if it's an object
              const cabinWithDate =
                typeof cabin === "string"
                  ? { name: cabin, start_date: date }
                  : { ...cabin, start_date: cabin.start_date || date };
              existing.cabins.push(cabinWithDate);
            }
          }
        }

        // Create combined availability object
        const combinedAvailability = {
          ok: true,
          operators: Array.from(combinedOperatorsMap.values()),
          total: Array.from(combinedOperatorsMap.values()).reduce(
            (sum, op) => sum + op.cabins.length,
            0
          ),
        };

        globalStartAvailability.value = combinedAvailability;
      } catch (e) {
        console.debug("[Results] global availability error", e);
      }
    }

    if (availabilityData.value.length === 0) {
      error.value =
        "No availability data found for the selected dates and ships.";
    }
  } catch (err) {
    error.value = `Failed to check availability: ${err.message}`;
    console.error("Availability check error:", err);
  } finally {
    loading.value = false;
  }
}

const applyFilters = () => checkAvailability();
const loadResults = () => checkAvailability();

function applySidebarChanges() {
  try {
    const selectedEntries = shipsList.value.filter((s) =>
      formShipIds.value.includes(s.id)
    );
    const labels = selectedEntries.map((s) => s.label);
    const sheets = selectedEntries.map((s) => s.sheet);
    const sc = {
      region: REGION_NAME,
      destination: formDestinations.value[0] || "",
      destinations: formDestinations.value.slice(),
      ships: labels,
      shipSheets: sheets,
      ship: labels[0] || "",
      lodges: labels.slice(),
      dateFrom: formDateFrom.value,
      dateTo: formDateTo.value || formDateFrom.value,
      adults: guestsTotal.value,
      children: 0,
      age3_9: 0,
      age0_2: 0,
      totalGuests: guestsTotal.value,
      timestamp: Date.now(),
    };
    savedShipPairs.value = selectedEntries.map((s) => ({
      label: s.label,
      sheet: s.sheet,
    }));
    localStorage.setItem("komodo_search_criteria", JSON.stringify(sc));
    searchCriteria.value = sc;
    if (formDateFrom.value) {
      const d = new Date(formDateFrom.value);
      currentMonth.value = d.getMonth();
      currentYear.value = d.getFullYear();
    }
    checkAvailability();
  } catch (e) {
    console.error("Failed to apply sidebar changes", e);
    alert("Failed to apply changes");
  }
}

function isClickInsideAny(target) {
  const els = [
    destDropdown.value,
    shipsDropdown.value,
    guestsDropdown.value,
    datesDropdown.value,
  ];
  return els.some((el) => el && (el === target || el.contains(target)));
}

function handleOutsideClick(e) {
  if (!isClickInsideAny(e.target)) closeAllDropdowns();
}

document.addEventListener("click", handleOutsideClick);
onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});

onMounted(async () => {
  try {
    const saved = localStorage.getItem("komodo_search_criteria");
    if (saved) {
      searchCriteria.value = JSON.parse(saved);
      const sc = searchCriteria.value || {};
      formDestinations.value = Array.isArray(sc.destinations)
        ? sc.destinations.slice()
        : sc.destination
        ? [sc.destination]
        : [];
      const savedLabels = Array.isArray(sc.ships) ? sc.ships : [];
      const savedSheets = Array.isArray(sc.shipSheets) ? sc.shipSheets : [];
      savedShipPairs.value = savedLabels.map((label, idx) => ({
        label,
        sheet: savedSheets[idx] || "",
      }));
      formDateFrom.value = sc.dateFrom || "";
      formDateTo.value = sc.dateTo || "";
      adults.value = sc.adults ?? adults.value;
      children.value = sc.children ?? children.value;
      age3_9.value = sc.age3_9 ?? age3_9.value;
      age0_2.value = sc.age0_2 ?? age0_2.value;
      guestsTotal.value =
        sc.totalGuests ??
        adults.value + children.value + age3_9.value + age0_2.value;
      if (formDateFrom.value) {
        const d = new Date(formDateFrom.value);
        currentMonth.value = d.getMonth();
        currentYear.value = d.getFullYear();
      }
    }
    // Run API calls in parallel for faster loading
    await Promise.all([
      loadDetailCabins(),
      loadShipsList(),
      checkAvailability(),
    ]);
  } catch (err) {
    console.error("Failed to load search criteria:", err);
    error.value = "Failed to load search criteria";
  }

  // DEBUG: log semua key di detailCabinMap
  setTimeout(() => {
    console.log(
      "DEBUG all detailCabinMap keys:",
      Array.from(detailCabinMap.value.keys())
    );
  }, 2000);
});
// DEBUG: log key yang dicari setiap kali selectedCabin berubah
watchEffect(() => {
  if (selectedCabin.value) {
    const key = `${normalizeName(
      selectedCabin.value.shipName || selectedCabin.value.operatorLabel || ""
    )}|${normalizeCabinName(selectedCabin.value.cabinName)}`;
    console.log("DEBUG selectedCabin key:", key);
  }
});

function getCabinBaseName(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj.split(" (")[0].trim();
  const raw = (
    obj.name ||
    obj["cabin name"] ||
    obj.cabin_name ||
    obj.api_name ||
    ""
  ).toString();
  if (!raw) return "";
  return raw.split("(")[0].trim();
}

function getCabinAvailable(obj) {
  if (!obj) return null;
  if (typeof obj === "string") return null;
  if (typeof obj.available === "number") return obj.available;
  return null;
}

function getCabinCapacityText(obj) {
  if (!obj) return "";
  if (typeof obj === "string") {
    const m = obj.match(/\(([^)]+)\)$/);
    return m ? m[1] : "";
  }
  if (typeof obj.capacity === "number") return `${obj.capacity} pax`;
  if (obj.capacity) return obj.capacity;
  return obj.capacity_lock || "";
}

function getCabinPrice(obj) {
  if (!obj || typeof obj === "string") return "";
  return obj.price_lock || obj.price || "";
}

function getShipName(obj, operatorLabel) {
  if (obj && typeof obj !== "string" && obj.shipname) return obj.shipname;
  const s = (operatorLabel || "").replace(/\([^)]*\)/g, "").trim();
  return s;
}

// Helper functions for cabin card display
function getCabinType(item) {
  if (!item) return "CABIN";
  const detail = item.detail || item;
  if (detail.cabin_type || detail.type)
    return (detail.cabin_type || detail.type).toUpperCase();
  // Try to extract from cabin name
  const name = item.cabinName || item.name || "";
  if (name.toLowerCase().includes("deluxe")) return "DELUXE";
  if (name.toLowerCase().includes("suite")) return "SUITE";
  if (name.toLowerCase().includes("master")) return "MASTER";
  if (name.toLowerCase().includes("vip")) return "VIP";
  return "CABIN";
}

function getCabinCapacity(item) {
  if (!item) return 2;
  const detail = item.detail || item;
  if (typeof detail.capacity === "number") return detail.capacity;
  const text = detail.capacityText || item.capacityText || "";
  const match = text.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 2;
}

function getCabinBedType(item) {
  if (!item) return "1 King";
  const detail = item.detail || item;
  if (detail.bed_type) return detail.bed_type;
  // Try to extract from facilities
  const facilities = detail.facilities || {};
  if (facilities.king_bed) return "1 King";
  if (facilities.twin_bed) return "2 Twins";
  return "1 King or 2 Twins";
}

function getCabinSize(item) {
  if (!item) return "Private cabin";
  const detail = item.detail || item;
  if (detail.size) return detail.size;
  if (detail.area) return detail.area;
  return "Private cabin";
}

function getCabinTripDays(item) {
  if (!item) return "";
  // First check if tripDays is directly on the item (from allStartDateCabins)
  if (item.tripDays) return item.tripDays;
  const detail = item.detail || item;
  // Check for trip_days or similar fields
  if (detail.trip_days) return detail.trip_days;
  if (detail.days) return detail.days;
  // Also check raw data if available
  if (item.raw && typeof item.raw !== "string") {
    if (item.raw.trip_days) return item.raw.trip_days;
    if (item.raw.days) return item.raw.days;
  }
  return "";
}

function calculateTripEndDate(startDate, tripDays) {
  if (!startDate || !tripDays) return null;
  const start = new Date(startDate + "T00:00:00");
  const end = new Date(start);
  end.setDate(end.getDate() + (Number(tripDays) - 1));
  return end;
}

function tripOverlapsWithRange(tripStart, tripDays, rangeStart, rangeEnd) {
  if (!tripStart || !tripDays || !rangeStart || !rangeEnd) return true;
  const tripStartDate = new Date(tripStart + "T00:00:00");
  const tripEndDate = calculateTripEndDate(tripStart, tripDays);
  const rangeStartDate = new Date(rangeStart + "T00:00:00");
  const rangeEndDate = new Date(rangeEnd + "T00:00:00");

  // Check overlap: trip overlaps if tripStart <= rangeEnd AND tripEnd >= rangeStart
  return tripStartDate <= rangeEndDate && tripEndDate >= rangeStartDate;
}

function getCabinOverview(item) {
  if (!item)
    return [
      "Private bathroom",
      "Air conditioning",
      "Sea view",
      "Daily housekeeping",
      "Private bathroom",
      "Air conditioning",
    ];
  const detail = item.detail || item;
  const features = [];

  // Extract from facilities object
  const facilities = detail.facilities || {};
  const facilityLabels = {
    wifi: "Complimentary Wi-Fi",
    starlink: "Starlink Internet",
    ac: "Air conditioning",
    private_bathroom: "Private bathroom",
    shower: "Walk-in shower",
    bathtub: "Bathtub",
    seaview: "Sea view",
    balcony: "Private balcony",
    sundeck: "Sundeck access",
    jacuzzi: "Jacuzzi",
    indoor_jacuzzi: "Indoor jacuzzi",
    outdoor_jacuzzi: "Outdoor jacuzzi",
    bar: "Mini bar",
    smart_tv: "Smart TV",
    king_bed: "King-size bed",
  };

  for (const [key, label] of Object.entries(facilityLabels)) {
    if (facilities[key]) features.push(label);
    if (features.length >= 8) break;
  }

  // If no facilities found, provide defaults
  if (features.length === 0) {
    features.push(
      "All cabins are non-smoking",
      "Private bathroom",
      "Air conditioning",
      "Daily housekeeping",
      "Private bathroom",
      "Air conditioning"
    );
  }

  return features;
}

function normalizeDriveUrl(url) {
  if (!url) return "";
  try {
    const u = String(url);
    const id = extractDriveId(u);
    if (id) return `https://lh3.googleusercontent.com/d/${id}=w1600`;
    return u;
  } catch {
    return url;
  }
}

function extractDriveId(u) {
  if (!u) return "";
  const m1 = String(u).match(/\/d\/([^/?#]+)/);
  const m2 = String(u).match(/[?&]id=([^&]+)/);
  return (m1 && m1[1]) || (m2 && m2[1]) || "";
}

function buildDriveCandidates(original) {
  const out = [];
  const u = String(original || "");
  const id = extractDriveId(u);
  if (u) out.push(u);
  if (id) {
    out.push(`https://lh3.googleusercontent.com/d/${id}=w1600`);
    out.push(`https://drive.google.com/uc?export=view&id=${id}`);
    out.push(`https://drive.google.com/uc?export=download&id=${id}`);
    out.push(`https://drive.google.com/thumbnail?id=${id}&sz=w1600`);
  }
  return Array.from(new Set(out));
}

function onImgError(evt, original) {
  const img = evt?.target;
  if (!img) return;
  const tried = parseInt(img.getAttribute("data-try") || "0", 10);
  const candidates = buildDriveCandidates(original);
  if (tried < candidates.length - 1) {
    img.setAttribute("data-try", String(tried + 1));
    img.src = candidates[tried + 1];
  } else {
    img.src = "/src/images/cabin.jpg";
  }
}

function getCabinImage(obj) {
  if (!obj || typeof obj === "string") return "";
  const candidates = [];
  if (obj.image_main) candidates.push(obj.image_main);
  if (Array.isArray(obj.images)) candidates.push(...obj.images);
  for (let i = 1; i <= 10; i++) {
    const key = `image_${i}`;
    if (obj[key]) candidates.push(obj[key]);
  }
  const first =
    candidates.find((u) => !!u && String(u).trim().length > 0) || "";
  return first ? normalizeDriveUrl(first) : "";
}

function extractCapacityNumber(item) {
  if (typeof item === "string") {
    const m = item.match(/\(([^)]+)\)$/);
    if (m && m[1]) {
      const nums = (m[1].match(/\d+/g) || []).map((n) => parseInt(n, 10));
      if (nums.length) return Math.max(...nums);
    }
    return null;
  }
  const capStr = (item.capacity || item.capacity_lock || "").toString();

  if (capStr) {
    const nums = (capStr.match(/\d+/g) || []).map((n) => parseInt(n, 10));
    if (nums.length) return Math.max(...nums);
  }
  return null;
}

function normalizeName(name) {
  if (!name) return "";
  const withoutParen = String(name).replace(/\([^)]*\)/g, " ");
  return withoutParen
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeCabinName(name) {
  if (!name) return "";
  let s = String(name);
  s = s.replace(/\([^)]*\)$/, "").trim();
  const parts = s.split(/[-–—]/);
  s = parts[parts.length - 1];
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function matchesSelectedShip(shipName, matchers) {
  const key = normalizeName(shipName);
  return matchers.some((tok) => key.includes(tok) || tok.includes(key));
}

function extractFacilitiesFromText(text) {
  if (!text) return [];
  const sections = [];
  const parenMatches = text.match(/\(([^)]+)\)/g);
  if (parenMatches) {
    parenMatches.forEach((m) => sections.push(m.replace(/[()]/g, " ")));
  }
  sections.push(text);

  const rawParts = sections
    .join(" | ")
    .split(/[+|,\/]/)
    .map((s) => s.replace(/\b(pax|guests?)\b/gi, "").trim())
    .filter(Boolean)
    .filter((s) => !/^\d+(\s*-\s*\d+)?$/.test(s));

  const cleaned = rawParts.map((part) =>
    part
      .split(" ")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
      .filter(Boolean)
      .join(" ")
  );

  const unique = [];
  for (const c of cleaned) {
    const key = c.toLowerCase();
    if (!unique.some((u) => u.toLowerCase() === key)) unique.push(c);
  }
  return unique;
}

function getMaxCapacityFromText(capacityText) {
  if (!capacityText) return null;
  const text = String(capacityText);
  const matches = text.match(/\d+/g);
  if (!matches || matches.length === 0) return null;
  const numbers = matches.map((n) => parseInt(n, 10));
  return Math.max(...numbers);
}

function parsePriceValue(raw, fallbackCurrency = DEFAULT_CURRENCY) {
  if (raw == null) return null;
  if (typeof raw === "number" && !Number.isNaN(raw)) {
    return { amount: raw, currency: fallbackCurrency };
  }
  const text = String(raw).trim();
  if (!text) return null;
  const match = text.match(/([^\d]*)([\d.,\s]+)/);
  if (!match) return null;
  let currency = match[1]?.replace(/from/gi, "").trim() || fallbackCurrency;
  let numeric = match[2]?.trim();
  if (!numeric) return null;
  numeric = numeric.replace(/[\s,]/g, "");
  const dotCount = (numeric.match(/\./g) || []).length;
  if (dotCount > 1) {
    numeric = numeric.replace(/\./g, "");
  }
  const amount = parseFloat(numeric);
  if (Number.isNaN(amount)) return null;
  return { amount, currency };
}

function formatTotalAmount(amount, currency = DEFAULT_CURRENCY) {
  if (!Number.isFinite(amount)) return "";
  const label = currency || DEFAULT_CURRENCY;
  return `${label} ${Math.round(amount).toLocaleString("en-US")}`;
}

function formatItemSubtotal(item) {
  if (!item?.price) return "";
  const parsed = parsePriceValue(item.price, DEFAULT_CURRENCY);
  if (!parsed) return "";
  const guests = Number(item?.guests || 2);
  const subtotal = parsed.amount * (Number.isFinite(guests) ? guests : 2);
  return formatTotalAmount(subtotal, parsed.currency);
}

function viewCabinDetails(item) {
  selectedCabin.value = item;
  showCabinModal.value = true;
  lockPageScroll();
}

function closeCabinModal() {
  showCabinModal.value = false;
  selectedCabin.value = null;
  cabinQuantity.value = 1;
  restorePageScroll();
}

function incrementCabinQuantity() {
  const maxAvailable = selectedCabin.value?.available || 1;
  if (cabinQuantity.value < maxAvailable) {
    cabinQuantity.value++;
  }
}

function decrementCabinQuantity() {
  if (cabinQuantity.value > 1) {
    cabinQuantity.value--;
  }
}

function openEnquiryModal() {
  showEnquiryModal.value = true;
  lockPageScroll();
}

function closeEnquiryModal() {
  showEnquiryModal.value = false;
  restorePageScroll();
}

function closeGuestModal() {
  showGuestModal.value = false;
  pendingItineraryItem.value = null;
  modalGuests.value = 2;
  restorePageScroll();
}

function incrementModalGuests() {
  const maxCapacity = maxGuestsForPendingItem.value;
  modalGuests.value = Math.min(maxCapacity, modalGuests.value + 1);
}

function decrementModalGuests() {
  modalGuests.value = Math.max(1, modalGuests.value - 1);
}

function submitGuestSelection() {
  if (pendingItineraryItem.value) {
    addToItinerary(pendingItineraryItem.value, modalGuests.value);
    closeGuestModal();
  }
}

function isInItinerary(item) {
  return itineraryItems.value.some(
    (it) =>
      it.cabin === item.cabinName &&
      it.ship === item.shipName &&
      it.date === item.date
  );
}

function toggleItinerary(item) {
  if (isInItinerary(item)) {
    removeFromItinerary(item);
  } else {
    pendingItineraryItem.value = item;
    modalGuests.value = searchCriteria.value?.totalGuests || 2;
    showGuestModal.value = true;
    lockPageScroll();
  }
}

function addToItinerary(item, guests = 2) {
  try {
    const key = "komodo_itinerary";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    const exists = current.some(
      (it) =>
        it.cabin === item.cabinName &&
        it.ship === item.shipName &&
        it.date === item.date
    );
    if (exists) return;
    const entry = {
      operator: item.operatorLabel,
      ship: item.shipName,
      cabin: item.cabinName,
      date: item.date,
      price: item.price || null,
      capacity: item.capacityText || null,
      guests: guests,
      qty: 1,
      addedAt: Date.now(),
    };
    current.push(entry);
    localStorage.setItem(key, JSON.stringify(current));
    loadItinerary();
  } catch (e) {
    console.error("Failed to add to itinerary", e);
  }
}

function removeFromItinerary(item) {
  try {
    const key = "komodo_itinerary";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    const filtered = current.filter(
      (it) =>
        !(
          it.cabin === item.cabinName &&
          it.ship === item.shipName &&
          it.date === item.date
        )
    );
    localStorage.setItem(key, JSON.stringify(filtered));
    loadItinerary();
  } catch (e) {
    console.error("Failed to remove from itinerary", e);
  }
}

function loadItinerary() {
  try {
    const key = "komodo_itinerary";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    itineraryItems.value = Array.isArray(current) ? current : [];
  } catch {
    itineraryItems.value = [];
  }
}

function removeItemByIndex(index) {
  try {
    const key = "komodo_itinerary";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    current.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(current));
    loadItinerary();
  } catch (e) {
    console.error("Failed to remove item", e);
  }
}

const scrollLockState = {
  count: 0,
  bodyOverflow: "",
  htmlOverflow: "",
  bodyPadding: "",
  htmlPadding: "",
};

function lockPageScroll() {
  const body = document.body;
  const html = document.documentElement;
  if (!body || !html) return;
  if (scrollLockState.count === 0) {
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    scrollLockState.bodyOverflow = body.style.overflow;
    scrollLockState.htmlOverflow = html.style.overflow;
    scrollLockState.bodyPadding = body.style.paddingRight;
    scrollLockState.htmlPadding = html.style.paddingRight;
    if (scrollBarWidth > 0) {
      const pad = `${scrollBarWidth}px`;
      body.style.paddingRight = pad;
      html.style.paddingRight = pad;
    }
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
  }
  scrollLockState.count++;
}

function restorePageScroll() {
  const body = document.body;
  const html = document.documentElement;
  if (!body || !html) return;
  if (scrollLockState.count === 0) return;
  scrollLockState.count--;
  if (scrollLockState.count > 0) return;
  body.style.overflow = scrollLockState.bodyOverflow;
  html.style.overflow = scrollLockState.htmlOverflow;
  body.style.paddingRight = scrollLockState.bodyPadding;
  html.style.paddingRight = scrollLockState.htmlPadding;
}

const enquiryForm = ref({
  title: "",
  firstName: "",
  lastName: "",
  phoneCountry: "+62",
  phoneNumber: "",
  country: "",
  email: "",
  confirmEmail: "",
  userType: "",
  notes: "",
  subscribeNews: false,
  consentData: false,
});

async function submitEnquiry() {
  if (!enquiryForm.value.firstName || !enquiryForm.value.lastName) {
    alert("Please enter your first and last name");
    return;
  }
  if (
    !enquiryForm.value.email ||
    enquiryForm.value.email !== enquiryForm.value.confirmEmail
  ) {
    alert("Please ensure email addresses match");
    return;
  }
  if (!enquiryForm.value.consentData) {
    alert("Please consent to data collection to proceed");
    return;
  }
  if (!itineraryItems.value.length) {
    alert("Please add at least one cabin to your itinerary");
    return;
  }

  let totalAmount = 0;
  const items = [];
  for (const item of itineraryItems.value) {
    const priceNum = parsePriceToNumber(item.price);
    const guests = Number(item.guests || 2);
    const itemTotal = priceNum * guests;
    totalAmount += itemTotal;
    items.push({
      name: `${item.ship} - ${item.cabin}`,
      quantity: guests,
      price: priceNum,
      category: "Cruise Cabin",
    });
  }

  if (totalAmount <= 0) {
    totalAmount = 1000000;
    items.push({
      name: "Komodo Cruise Booking",
      quantity: 1,
      price: totalAmount,
      category: "Cruise Booking",
    });
  }

  enquirySubmitting.value = true;
  try {
    const cabinNames = itineraryItems.value
      .map((it) => `${it.ship} - ${it.cabin}`)
      .join(", ");
    const description = `Komodo Cruise Booking: ${cabinNames}`;
    const invoiceResponse = await createXenditInvoice({
      amount: totalAmount,
      payerEmail: enquiryForm.value.email,
      description,
      customerName: `${
        enquiryForm.value.title ? enquiryForm.value.title + " " : ""
      }${enquiryForm.value.firstName} ${enquiryForm.value.lastName}`,
      customerPhone:
        enquiryForm.value.phoneCountry + enquiryForm.value.phoneNumber,
      items,
    });

    localStorage.setItem(
      "komodo_last_enquiry",
      JSON.stringify({
        form: enquiryForm.value,
        itinerary: itineraryItems.value,
        invoiceId: invoiceResponse.invoiceId,
        invoiceUrl: invoiceResponse.invoiceUrl,
        amount: totalAmount,
        createdAt: new Date().toISOString(),
      })
    );

    if (invoiceResponse.invoiceUrl) {
      redirectToPayment(invoiceResponse.invoiceUrl);
    } else {
      throw new Error("No invoice URL received");
    }
  } catch (err) {
    console.error("Failed to create payment:", err);
    alert(`Failed to process payment: ${err.message}. Please try again.`);
  } finally {
    enquirySubmitting.value = false;
  }
}

function generateDateRange(from, to) {
  if (!from || !to) return from ? [from] : [];
  const start = new Date(from);
  const end = new Date(to);
  const dates = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    dates.push(formatDateToString(d));
  }
  return dates;
}

function addDaysToDateString(dateString, days) {
  const d = new Date(dateString);
  d.setDate(d.getDate() + days);
  return formatDateToString(d);
}

function formatDateToString(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getTodayString() {
  return formatDateToString(new Date());
}

loadItinerary();
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.18s cubic-bezier(0.55, 0, 0.1, 1),
    opacity 0.18s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
