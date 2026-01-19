<template>
  <div class="results-wrap">
    <div v-if="loading" class="simple-loader">Loading</div>

    <div v-else class="results-container">
      <!-- Mobile Filter Summary Bar (display-only, mobile only) -->
      <div class="mobile-filter-summary">
        <div class="filter-summary-content">
          <!-- Row 1: Guests & Dates -->
          <div class="filter-summary-row">
            <div class="filter-summary-item">
              <svg
                class="filter-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span
                >{{ cabins.length }} cabin{{ cabins.length !== 1 ? "s" : "" }},
                {{ guestsTotal }} guest{{ guestsTotal !== 1 ? "s" : "" }}</span
              >
            </div>
            <div class="filter-summary-item">
              <svg
                class="filter-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{{ formatFilterDateRange(formDateFrom, formDateTo) }}</span>
            </div>
          </div>
          <!-- Row 2: Destination & Ships -->
          <!-- <div class="filter-summary-row">
            <div class="filter-summary-item">
              <svg
                class="filter-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                >{{ formDestinations.length }} destination{{
                  formDestinations.length !== 1 ? "s" : ""
                }}</span
              >
            </div>
            <div class="filter-summary-item">
              <svg
                class="filter-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M3 15h18l-1.5 6h-15L3 15z" />
                <rect x="5" y="8" width="14" height="7" rx="1" />
                <path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
                <line x1="2" y1="15" x2="22" y2="15" />
              </svg>
              <span
                >{{ formShipIds.length }} ship{{
                  formShipIds.length !== 1 ? "s" : ""
                }}</span
              >
            </div>
          </div> -->
        </div>
        <button
          class="filter-edit-btn"
          @click="showMobileFilterModal = true"
          aria-label="Edit filters"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            ></path>
            <path
              d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="results-layout">
        <div class="results-main">
          <div v-if="error" class="error-state">
            <p class="error-message">{{ error }}</p>
            <button @click="loadResults" class="btn-primary">Try Again</button>
          </div>

          <div v-else>
            <h2 class="results-title">Your Search Results</h2>
            <div class="results-intro">
              <div
                v-if="
                  allStartDateCabins.length &&
                  (needsShipSelection || sortedDisplayItems.length > 0)
                "
                class="success-message"
              >
                <p class="desktop-only">
                  <strong>Your preferred travel dates are available!</strong>
                  We have a team of Komodo Cruises Journey Designers who are
                  ready to plan your trip. Simply select the results that suit
                  your preferences best and submit your enquiry.
                </p>
                <p class="mobile-only">
                  <strong>Your preferred dates are available!</strong>
                  Select results below and submit your enquiry.
                </p>
                <p class="results-note-muted desktop-only">
                  <span class="semibold">Note:</span> These results indicate
                  availability and do not guarantee a booking.
                </p>
              </div>

              <div
                v-else-if="!flexibleAlt && sortedDisplayItems.length > 0"
                class="no-availability"
              >
                <p class="desktop-only">
                  <strong
                    >Your preferred dates are unfortunately not available, but
                    there is availability at other Komodo Cruises lodges or on
                    alternate dates.</strong
                  >
                </p>
                <p class="desktop-only">
                  We have a team of Komodo Cruises Journey Designers who are
                  ready to plan your trip. Simply select the results that suit
                  your preferences best and submit your enquiry.
                </p>
                <p class="mobile-only">
                  <strong>Dates not available.</strong>
                  Check alternatives below and submit enquiry.
                </p>
                <p class="results-note-muted desktop-only">
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
                  {{
                    sortedDisplayItems.length === 1 ? "Cabin" : "Cabins"
                  }}</span
                >
              </div>
            </div>

            <!-- Ship Selection Step (when multiple ships selected) -->
            <div v-show="needsShipSelection" class="ship-selection-container">
              <div class="ship-selection-header">
                <h3 class="ship-selection-title">Select a Ship</h3>
                <p class="ship-selection-subtitle">
                  You selected {{ shipsFromCriteria.length }} ships. Please
                  choose one to view available cabins.
                </p>
              </div>
              <div class="ship-selection-grid">
                <div
                  v-for="ship in availableShipsForSelection"
                  :key="ship.name"
                  class="ship-selection-card"
                  @click="selectShipForView(ship.name)"
                >
                  <div class="ship-img-col">
                    <img
                      :src="ship.image || '/src/images/placeholder-ship.jpg'"
                      :alt="ship.name"
                      class="ship-thumbnail"
                      referrerpolicy="no-referrer"
                      @error="$event.target.src = '/src/images/cabin.jpg'"
                    />
                  </div>
                  <div class="ship-card-content">
                    <h4 class="ship-card-name">{{ ship.name }}</h4>
                    <p class="ship-desc-sm" v-if="ship.description">
                      {{ ship.description }}
                    </p>
                    <div class="ship-card-info" v-if="ship.hasAvailability">
                      <span
                        >{{ ship.cabinsCount }} cabin{{
                          ship.cabinsCount !== 1 ? "s" : ""
                        }}
                        available</span
                      >
                      <span class="ship-card-capacity"
                        >Up to {{ ship.totalCapacity }} guests</span
                      >
                    </div>
                    <div class="ship-card-info" v-else>
                      <span class="no-availability-text"
                        >No availability for selected dates</span
                      >
                    </div>
                  </div>
                  <div class="ship-card-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cabin Results (when single ship or ship already selected) -->
            <div v-show="!needsShipSelection" class="cabin-results-section">
              <!-- Back button when viewing specific ship from multi-ship selection -->
              <div
                v-if="selectedShipForView && shipsFromCriteria.length > 1"
                class="back-to-ships-bar"
              >
                <button class="btn-back-ships" @click="backToShipSelection">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Back to Ships
                </button>
                <span class="viewing-ship-label"
                  >Viewing: <strong>{{ selectedShipForView }}</strong></span
                >
              </div>

              <div
                v-if="sortedDisplayItems.length === 0"
                class="no-availability"
              >
                <div class="desktop-only">
                  <p><strong>No results found.</strong></p>
                  <p>
                    We could not find any availability matching your search.
                    Please try adjusting your filters.
                  </p>
                </div>
                <div class="mobile-only">
                  <p><strong>No results found.</strong></p>
                  <p>Please try adjusting your filters.</p>
                </div>
              </div>

              <div v-if="sortedDisplayItems.length" class="lodge-results">
                <div
                  class="cabin-card"
                  v-for="item in paginatedItems"
                  :key="item.uniqueKey"
                >
                  <!-- Image Section -->
                  <div
                    class="cabin-image"
                    style="position: relative; overflow: hidden"
                  >
                    <transition
                      :name="
                        item.isGallery &&
                        getGalleryDirection(item.id) === 'left'
                          ? 'slide-left'
                          : 'slide-right'
                      "
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
                    <!-- <div class="cabin-header"> -->
                    <div class="cabin-title-group">
                      <h3 class="cabin-name">{{ item.title }}</h3>
                      <span class="cabin-badge active">{{
                        getCabinType(item.originalItem)
                      }}</span>
                      <!-- </div> -->
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
                            item.originalItem,
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
                            item.originalItem,
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
                      CABIN DETAILS
                    </button>

                    <!-- Trip Dates Section (Compact Inline Style) -->
                    <div
                      v-if="item.trips && item.trips.length > 0"
                      class="trips-section-compact"
                    >
                      <!-- Primary Trip Date - Compact Display -->
                      <div class="trip-date-row">
                        <span class="trip-date-text">{{
                          formatTripDateRange(
                            getDisplayTrip(item).date,
                            getDisplayTrip(item).tripDays,
                          )
                        }}</span>
                        <span class="trip-availability-badge"
                          >{{ getDisplayTrip(item).available || 1 }} cabin{{
                            (getDisplayTrip(item).available || 1) > 1 ? "s" : ""
                          }}</span
                        >
                      </div>

                      <!-- Expandable Dates List (Only visible when expanded) -->
                      <div
                        v-if="
                          item.trips.length > 1 && expandedTrips[item.uniqueKey]
                        "
                        class="more-dates-dropdown"
                      >
                        <div
                          v-for="(trip, tIdx) in getOtherTrips(item)"
                          :key="tIdx"
                          :class="[
                            'trip-option-alt',
                            isTripInItinerary(item, trip)
                              ? 'trip-reserved'
                              : '',
                          ]"
                          @click="
                            !isTripInItinerary(item, trip) &&
                            selectTrip(item, trip)
                          "
                        >
                          <div class="trip-alt-info">
                            <span class="trip-alt-date">{{
                              formatTripDateRange(trip.date, trip.tripDays)
                            }}</span>
                            <span class="trip-alt-rooms"
                              >{{ trip.available || 1 }} cabin{{
                                (trip.available || 1) > 1 ? "s" : ""
                              }}</span
                            >
                          </div>
                          <span
                            v-if="isTripInItinerary(item, trip)"
                            class="trip-reserved-label"
                          >
                            <span class="reserved-check-small">✓</span> Reserved
                          </span>
                          <span v-else class="trip-select-action">Select</span>
                        </div>
                        <!-- Less Dates Button -->
                        <button
                          class="less-dates-toggle"
                          @click.stop="toggleMoreDates(item.uniqueKey)"
                        >
                          <span>LESS DATES</span>
                          <span class="toggle-arrow expanded">▲</span>
                        </button>
                      </div>
                    </div>

                    <!-- Info Section with Buttons -->
                    <div class="cabin-info-section">
                      <div class="cabin-info-left">
                        <template
                          v-for="(price, pIdx) in item.prices"
                          :key="pIdx"
                        >
                          <div class="price-display">
                            <p class="price-main">
                              <span class="price-label">From</span>
                              <span class="price-value">{{
                                formatPrice(price.value)
                              }}</span>
                            </p>
                            <p class="price-sub">per person, per night</p>
                          </div>
                        </template>
                      </div>
                      <div class="cabin-info-right cabin-buttons-row">
                        <!-- More Dates Button (Only if more than 1 trip and not expanded) -->
                        <button
                          v-if="item.trips && item.trips.length > 1"
                          class="btn-more-dates"
                          :class="{ active: expandedTrips[item.uniqueKey] }"
                          @click.stop="toggleMoreDates(item.uniqueKey)"
                        >
                          <span>{{
                            expandedTrips[item.uniqueKey]
                              ? "LESS DATES"
                              : "MORE DATES"
                          }}</span>
                          <span
                            class="btn-arrow"
                            :class="{ expanded: expandedTrips[item.uniqueKey] }"
                            >▼</span
                          >
                        </button>
                        <!-- Reserve Button -->
                        <button
                          :class="[
                            'btn-reserve-now',
                            isTripInItinerary(item, getDisplayTrip(item))
                              ? 'btn-reserved'
                              : '',
                          ]"
                          @click="reserveWithSelectedTrip(item)"
                        >
                          <template
                            v-if="isTripInItinerary(item, getDisplayTrip(item))"
                          >
                            <span class="reserved-check">✓</span> RESERVED
                          </template>
                          <template v-else> RESERVE NOW </template>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pagination -->
              <div v-if="totalPages > 1" class="pagination">
                <button
                  class="pagination-btn"
                  @click="prevPage"
                  :disabled="currentPage === 1"
                >
                  ‹ Previous
                </button>

                <div class="pagination-pages">
                  <button
                    v-for="page in totalPages"
                    :key="page"
                    class="pagination-page"
                    :class="{ active: currentPage === page }"
                    @click="goToPage(page)"
                  >
                    {{ page }}
                  </button>
                </div>

                <button
                  class="pagination-btn"
                  @click="nextPage"
                  :disabled="currentPage === totalPages"
                >
                  Next ›
                </button>
              </div>

              <div
                v-if="flexibleAlt && !sortedDisplayItems.length"
                class="no-results"
              >
                <p>No alternative options found for your criteria.</p>
                <button @click="applyFilters" class="btn-primary">
                  Search Again
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Section - Rebuilt with proper sticky architecture -->
        <div class="sidebar-section-wrapper">
          <!-- Check Availability Section (non-sticky) -->
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
                    <div class="list-text result-list-text">{{ d }}</div>
                    <input
                      class="check"
                      type="checkbox"
                      :value="d"
                      v-model="formDestinations"
                      @click.stop
                    />
                  </div>
                  <!-- <div class="dropdown-footer" @click="nextDropdown('regions')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">&rsaquo;</span>
                  </div> -->
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
                      <div class="list-text result-list-text">
                        {{ s.label }}
                      </div>
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
                  <!-- <div class="dropdown-footer" @click="nextDropdown('ships')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">&rsaquo;</span>
                  </div> -->
                </div>
              </div>

              <div class="list dropdown" ref="guestsDropdown">
                <div class="list-heading">Cabins & Guests</div>
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
                  <span v-if="formIsFlexible"
                    >Flexible: {{ formFlexibleGuests }} Guest{{
                      formFlexibleGuests !== 1 ? "s" : ""
                    }}</span
                  >
                  <span v-else
                    >{{ cabins.length }} Cabin{{
                      cabins.length !== 1 ? "s" : ""
                    }}, {{ guestsTotal }} Guest{{
                      guestsTotal !== 1 ? "s" : ""
                    }}</span
                  >
                  <span class="caret">
                    <img
                      :src="openGuests ? upArrowIcon : downArrowIcon"
                      alt=""
                      aria-hidden="true"
                      class="caret-icon"
                    />
                  </span>
                </button>
                <div
                  v-if="openGuests"
                  class="dropdown-panel cabin-dropdown-panel"
                  @click.stop
                >
                  <!-- Sidebar Pill Toggle -->
                  <div class="sidebar-pill-container">
                    <button
                      type="button"
                      class="sidebar-pill-btn"
                      :class="{ active: formIsFlexible }"
                      @click="formIsFlexible = true"
                    >
                      Flexible
                    </button>
                    <button
                      type="button"
                      class="sidebar-pill-btn"
                      :class="{ active: !formIsFlexible }"
                      @click="formIsFlexible = false"
                    >
                      Structured
                    </button>
                  </div>

                  <!-- Flexible Mode Content -->
                  <div v-if="formIsFlexible" class="sidebar-flexible-content">
                    <div class="sidebar-counter-row">
                      <span class="label">Total Guests</span>
                      <div class="ctrls">
                        <button
                          type="button"
                          class="btn-ctrl"
                          :disabled="formFlexibleGuests <= 1"
                          @click="formFlexibleGuests--"
                        >
                          −
                        </button>
                        <span class="val">{{ formFlexibleGuests }}</span>
                        <button
                          type="button"
                          class="btn-ctrl"
                          @click="formFlexibleGuests++"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p class="sidebar-note">
                      We will automatically find the best cabin combination for
                      your group.
                    </p>
                  </div>

                  <div v-else class="cabins-container-sidebar">
                    <div
                      v-for="(cabin, idx) in cabins"
                      :key="cabin.id"
                      class="cabin-accordion-sidebar"
                    >
                      <!-- Cabin Header (static, not clickable) -->
                      <div class="cabin-header-sidebar-static">
                        <div class="cabin-header-left-sidebar">
                          <span class="cabin-title-sidebar"
                            >CABIN {{ idx + 1 }}</span
                          >
                          <span class="cabin-summary-sidebar">
                            {{ cabin.adults + cabin.children }} guest{{
                              cabin.adults + cabin.children !== 1 ? "s" : ""
                            }}
                          </span>
                        </div>
                        <div class="cabin-header-right-sidebar">
                          <button
                            v-if="cabins.length > 1"
                            type="button"
                            class="cabin-remove-btn-sidebar"
                            @click.stop="removeCabin(idx)"
                            title="Remove cabin"
                          >
                            <svg
                              width="14"
                              height="14"
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
                          <button
                            type="button"
                            class="cabin-toggle-btn-sidebar"
                            @click.stop="toggleCabinExpand(idx)"
                          >
                            <svg
                              class="cabin-chevron-sidebar"
                              :class="{ expanded: cabin.expanded }"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <!-- Cabin Body -->
                      <div v-if="cabin.expanded" class="cabin-body-sidebar">
                        <div class="counter-row-sidebar">
                          <span class="counter-label-sidebar">Adults</span>
                          <div class="counter-ctrls-sidebar">
                            <button
                              type="button"
                              class="btn-icon-sm"
                              :disabled="cabin.adults <= 1"
                              @click="decCabinGuest(idx, 'adults')"
                            >
                              −
                            </button>
                            <span class="count-sidebar">{{
                              cabin.adults
                            }}</span>
                            <button
                              type="button"
                              class="btn-icon-sm"
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
                        <div class="counter-row-sidebar">
                          <span class="counter-label-sidebar">Children</span>
                          <div class="counter-ctrls-sidebar">
                            <button
                              type="button"
                              class="btn-icon-sm"
                              :disabled="cabin.children <= 0"
                              @click="decCabinGuest(idx, 'children')"
                            >
                              −
                            </button>
                            <span class="count-sidebar">{{
                              cabin.children
                            }}</span>
                            <button
                              type="button"
                              class="btn-icon-sm"
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
                      </div>
                    </div>

                    <!-- Add Cabin Button -->
                    <button
                      v-if="canAddCabin"
                      type="button"
                      class="btn-add-cabin-sidebar"
                      @click="addCabin"
                    >
                      + Add Another Cabin
                    </button>
                  </div>

                  <!-- <div class="dropdown-footer" @click="nextDropdown('guests')">
                    <span>Next</span>
                    <span style="font-size: 1.1rem">&rsaquo;</span>
                  </div> -->
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
                <div
                  v-if="openDates"
                  class="dropdown-panel date-dropdown-panel"
                  @click.stop
                >
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
                </div>
              </div>

              <!-- Trip Duration Range Filter (Always Open) -->
              <div
                class="list trip-duration-always-open"
                ref="durationDropdown"
              >
                <div class="list-heading">Trip Duration</div>
                <div class="trip-duration-summary-sidebar">
                  {{ displayTripDuration }}
                </div>

                <div class="trip-duration-range-content sidebar-duration">
                  <!-- Min Duration -->
                  <div class="counter-row duration-counter-row">
                    <div class="counter-text">
                      <div class="counter-title">Min</div>
                    </div>
                    <div class="counter-ctrls">
                      <button
                        type="button"
                        class="btn-icon"
                        :disabled="formMinTripDuration <= 1"
                        @click="decrementFormMinDuration"
                      >
                        −
                      </button>
                      <span class="count-display">{{
                        formMinTripDuration
                      }}</span>
                      <button
                        type="button"
                        class="btn-icon"
                        :disabled="formMinTripDuration >= formMaxTripDuration"
                        @click="incrementFormMinDuration"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <!-- Max Duration -->
                  <div class="counter-row duration-counter-row">
                    <div class="counter-text">
                      <div class="counter-title">Max</div>
                    </div>
                    <div class="counter-ctrls">
                      <button
                        type="button"
                        class="btn-icon"
                        :disabled="formMaxTripDuration <= formMinTripDuration"
                        @click="decrementFormMaxDuration"
                      >
                        −
                      </button>
                      <span class="count-display">{{
                        formMaxTripDuration
                      }}</span>
                      <button
                        type="button"
                        class="btn-icon"
                        :disabled="formMaxTripDuration >= MAX_TRIP_DURATION"
                        @click="incrementFormMaxDuration"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <!-- Reset Button -->
                  <div class="duration-reset-row">
                    <button
                      type="button"
                      class="btn-reset-duration"
                      @click="resetTripDuration"
                      :disabled="
                        formMinTripDuration === 1 &&
                        formMaxTripDuration === MAX_TRIP_DURATION
                      "
                    >
                      Reset to Any Duration
                    </button>
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

          <!-- Sidebar Track - Stretches to full height of results-content -->
          <div v-if="!loading" class="sidebar-track">
            <!-- Itinerary Sticky - The ONLY sticky element -->
            <div class="itinerary-sticky">
              <h3 class="itinerary-title">Your Itinerary</h3>
              <p class="itinerary-description">
                This is a summary of the accommodation you have selected. After
                submitting your booking request, a Komodo Cruises Journey
                Designer will make contact to book and confirm your trip.
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
                  <!-- Header: Room Type + Cabin Name + Remove Button -->
                  <div class="itinerary-header">
                    <div>
                      <div class="itinerary-type">CABIN</div>
                      <div class="itinerary-cabin-name">{{ it.cabin }}</div>
                    </div>
                    <button
                      class="itinerary-remove-btn-top"
                      @click="removeItemByIndex(idx)"
                      title="Remove from itinerary"
                    >
                      <svg
                        class="action-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  <!-- Date Row -->
                  <div class="itinerary-info-row">
                    <svg
                      class="itinerary-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span class="itinerary-info-text">
                      <strong>{{ formatDate(it.date) }}</strong> –
                      <strong>{{ formatDate(getEndDate(it.date)) }}</strong>
                    </span>
                  </div>

                  <!-- Ship Name Row -->
                  <div class="itinerary-info-row">
                    <svg
                      class="itinerary-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path d="M3 15h18l-1.5 6h-15L3 15z" />
                      <rect x="5" y="8" width="14" height="7" rx="1" />
                      <path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
                      <line x1="2" y1="15" x2="22" y2="15" />
                    </svg>
                    <span class="itinerary-info-text">{{ it.ship }}</span>
                  </div>

                  <!-- Guests Row -->
                  <div class="itinerary-info-row guest-row-editable">
                    <div class="guest-info-wrap">
                      <svg
                        class="itinerary-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span class="itinerary-info-text">
                        {{ it.guests || 2 }} adult{{
                          (it.guests || 2) > 1 ? "s" : ""
                        }}
                      </span>
                    </div>
                    <button
                      class="btn-edit-item"
                      @click.stop="openEditGuest(it, idx)"
                      title="Edit Guests"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                        ></path>
                        <path
                          d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <!-- Price Row -->
                  <div class="itinerary-price-row">
                    <div class="itinerary-price-left">
                      <svg
                        class="itinerary-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M6 12h.01M18 12h.01" />
                      </svg>
                      <span class="itinerary-price-label">{{ it.cabin }}</span>
                    </div>
                    <span class="itinerary-price-value">{{
                      formatPrice(it.price)
                    }}</span>
                  </div>
                </li>
              </ul>

              <div v-if="itineraryTotals.hasPrice" class="itinerary-total">
                <div class="itinerary-total-row">
                  <span class="itinerary-total-label-simple">EST. TOTAL</span>
                  <div class="itinerary-total-right">
                    <span class="itinerary-total-amount">{{
                      itineraryTotals.formattedTotal
                    }}</span>
                    <span class="itinerary-tax-note">(Tax Included)</span>
                  </div>
                </div>
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

              <a href="#" class="link-speak-with-us">
                Speak with us
                <img src="/src/images/arrows/right-arrow.svg" alt="" />
              </a>
            </div>
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
                      selectedCabin,
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
                      selectedCabin,
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
                      3,
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
                      6,
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
              <div class="guest-counter-label">Guests</div>
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
            <button class="btn-submit-guest" @click="submitGuestSelection">
              {{
                editingItineraryIndex !== null
                  ? "Update Itinerary"
                  : "Add to Itinerary"
              }}
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

    <!-- Results footer (same as home footer) -->
    <footer class="home-footer">
      <div class="home-footer-inner container">
        <!-- Top row: Brand + Links -->
        <div class="hf-top">
          <div class="hf-brand">
            <div class="hf-logo">KOMODO CRUISES</div>
            <div class="hf-copy">Rare journeys across the Komodo Islands.</div>
          </div>
          <nav class="hf-links">
            <a href="#" @click.prevent="openPlanModal">Plan your trip</a>
            <a href="#">Experiences</a>
            <a href="#">Our story</a>
            <a href="#">Contact</a>
          </nav>
          <div class="hf-contact">
            <div class="hf-contact-title">Contact Us</div>
            <div class="hf-contact-phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a href="tel:+6285282296450">+62 852-8229-6450</a>
            </div>
            <div class="hf-contact-address">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                >Graha Permata Pancoran, Jl. KH. Guru Amin Blok A5, Pancoran,
                Jakarta Selatan 12780</span
              >
            </div>
          </div>
        </div>
        <!-- Bottom row: Copyright -->
        <div class="hf-bottom">
          <div class="hf-copyright">
            © {{ new Date().getFullYear() }} Komodo Cruises | PT CANARD MONEY
            INDONESIA
          </div>
          <div class="hf-disclaimer">
            All voyages subject to weather and park regulations.
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- Mobile Filter Modal (fullscreen) -->
  <Teleport to="body">
    <div
      v-if="showMobileFilterModal"
      class="mobile-filter-modal-overlay"
      @click.self="showMobileFilterModal = false"
    >
      <div class="mobile-filter-modal">
        <div class="mobile-filter-modal-header">
          <h3>Check Availability</h3>
          <button
            class="modal-close-btn"
            @click="showMobileFilterModal = false"
          >
            <span>Close</span> ✕
          </button>
        </div>
        <div class="mobile-filter-modal-body">
          <!-- Destinations -->
          <div class="modal-field-group">
            <div class="modal-field-label">Destinations</div>
            <button
              type="button"
              class="modal-field-btn"
              @click="mobileOpenDestinations = !mobileOpenDestinations"
            >
              <span>Destinations: {{ formDestinations.length }}</span>
              <img
                :src="mobileOpenDestinations ? upArrowIcon : downArrowIcon"
                alt=""
                class="caret-icon"
              />
            </button>
            <div v-if="mobileOpenDestinations" class="modal-field-dropdown">
              <div class="dropdown-group-title">{{ REGION_NAME }}</div>
              <div
                class="list-row"
                v-for="d in DESTINATIONS"
                :key="d"
                @click="toggleDestination(d)"
              >
                <div class="list-text result-list-text">{{ d }}</div>
                <input
                  class="check"
                  type="checkbox"
                  :value="d"
                  v-model="formDestinations"
                  @click.stop
                />
              </div>
            </div>
          </div>

          <!-- Ships -->
          <div class="modal-field-group">
            <div class="modal-field-label">Ships</div>
            <button
              type="button"
              class="modal-field-btn"
              @click="mobileOpenShips = !mobileOpenShips"
            >
              <span>Ships: {{ formShipIds.length }}</span>
              <img
                :src="mobileOpenShips ? upArrowIcon : downArrowIcon"
                alt=""
                class="caret-icon"
              />
            </button>
            <div v-if="mobileOpenShips" class="modal-field-dropdown">
              <div class="dropdown-group-title">{{ shipsGroupTitle }}</div>
              <div v-if="shipsLoading" class="muted">Loading ships...</div>
              <template v-else>
                <div
                  class="list-row"
                  v-for="s in shipsList"
                  :key="s.id"
                  @click="toggleShip(s.id)"
                >
                  <div class="list-text result-list-text">{{ s.label }}</div>
                  <input
                    class="check"
                    type="checkbox"
                    :value="s.id"
                    v-model="formShipIds"
                    @click.stop
                  />
                </div>
              </template>
            </div>
          </div>

          <!-- Cabins & Guests -->
          <!-- Cabins & Guests (Mobile - Synced with Desktop Sidebar) -->
          <div class="modal-field-group">
            <div class="modal-field-label">Cabins & Guests</div>
            <button
              type="button"
              class="modal-field-btn"
              @click="mobileOpenGuests = !mobileOpenGuests"
            >
              <span v-if="formIsFlexible"
                >Flexible: {{ formFlexibleGuests }} Guest{{
                  formFlexibleGuests !== 1 ? "s" : ""
                }}</span
              >
              <span v-else
                >{{ cabins.length }} Cabin{{ cabins.length !== 1 ? "s" : "" }},
                {{ guestsTotal }} Guest{{ guestsTotal !== 1 ? "s" : "" }}</span
              >
              <img
                :src="mobileOpenGuests ? upArrowIcon : downArrowIcon"
                alt=""
                class="caret-icon"
              />
            </button>
            <div
              v-if="mobileOpenGuests"
              class="modal-field-dropdown cabin-panel"
              style="padding: 1rem"
            >
              <!-- Reuse Desktop Sidebar Content -->

              <!-- Sidebar Pill Toggle -->
              <div class="sidebar-pill-container">
                <button
                  type="button"
                  class="sidebar-pill-btn"
                  :class="{ active: formIsFlexible }"
                  @click="formIsFlexible = true"
                >
                  Flexible
                </button>
                <button
                  type="button"
                  class="sidebar-pill-btn"
                  :class="{ active: !formIsFlexible }"
                  @click="formIsFlexible = false"
                >
                  Structured
                </button>
              </div>

              <!-- Flexible Mode Content -->
              <div v-if="formIsFlexible" class="sidebar-flexible-content">
                <div class="sidebar-counter-row">
                  <span class="label">Total Guests</span>
                  <div class="ctrls">
                    <button
                      type="button"
                      class="btn-ctrl"
                      :disabled="formFlexibleGuests <= 1"
                      @click="formFlexibleGuests--"
                    >
                      −
                    </button>
                    <span class="val">{{ formFlexibleGuests }}</span>
                    <button
                      type="button"
                      class="btn-ctrl"
                      @click="formFlexibleGuests++"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p class="sidebar-note">
                  We will automatically find the best cabin combination for your
                  group.
                </p>
              </div>

              <!-- Structured Mode (Desktop Accordion Style) -->
              <div v-else class="cabins-container-sidebar">
                <div
                  v-for="(cabin, idx) in cabins"
                  :key="cabin.id"
                  class="cabin-accordion-sidebar"
                >
                  <!-- Cabin Header (static) -->
                  <div class="cabin-header-sidebar-static">
                    <div class="cabin-header-left-sidebar">
                      <span class="cabin-title-sidebar"
                        >CABIN {{ idx + 1 }}</span
                      >
                      <span class="cabin-summary-sidebar">
                        {{ cabin.adults + cabin.children }} guest{{
                          cabin.adults + cabin.children !== 1 ? "s" : ""
                        }}
                      </span>
                    </div>
                    <div class="cabin-header-right-sidebar">
                      <button
                        v-if="cabins.length > 1"
                        type="button"
                        class="cabin-remove-btn-sidebar"
                        @click.stop="removeCabin(idx)"
                        title="Remove cabin"
                      >
                        <svg
                          width="14"
                          height="14"
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
                      <button
                        type="button"
                        class="cabin-toggle-btn-sidebar"
                        @click.stop="toggleCabinExpand(idx)"
                      >
                        <svg
                          class="cabin-chevron-sidebar"
                          :class="{ expanded: cabin.expanded }"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Cabin Body -->
                  <div v-if="cabin.expanded" class="cabin-body-sidebar">
                    <div class="counter-row-sidebar">
                      <span class="counter-label-sidebar">Adults</span>
                      <div class="counter-ctrls-sidebar">
                        <button
                          type="button"
                          class="btn-icon-sm"
                          :disabled="cabin.adults <= 1"
                          @click="decCabinGuest(idx, 'adults')"
                        >
                          −
                        </button>
                        <span class="count-sidebar">{{ cabin.adults }}</span>
                        <button
                          type="button"
                          class="btn-icon-sm"
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
                    <div class="counter-row-sidebar">
                      <span class="counter-label-sidebar">Children</span>
                      <div class="counter-ctrls-sidebar">
                        <button
                          type="button"
                          class="btn-icon-sm"
                          :disabled="cabin.children <= 0"
                          @click="decCabinGuest(idx, 'children')"
                        >
                          −
                        </button>
                        <span class="count-sidebar">{{ cabin.children }}</span>
                        <button
                          type="button"
                          class="btn-icon-sm"
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
                  </div>
                </div>

                <!-- Add Cabin Button -->
                <button
                  v-if="canAddCabin"
                  type="button"
                  class="btn-add-cabin-sidebar"
                  @click="addCabin"
                >
                  + Add Another Cabin
                </button>
              </div>
            </div>
          </div>

          <!-- Dates -->
          <div class="modal-field-group">
            <div class="modal-field-label">Dates</div>
            <button
              type="button"
              class="modal-field-btn"
              @click="mobileOpenDates = !mobileOpenDates"
            >
              <span>{{
                formDateFrom
                  ? `${formDateFrom} → ${formDateTo || "..."}`
                  : "Select dates"
              }}</span>
              <img
                :src="mobileOpenDates ? upArrowIcon : downArrowIcon"
                alt=""
                class="caret-icon"
              />
            </button>
            <div
              v-if="mobileOpenDates"
              class="modal-field-dropdown dates-panel"
            >
              <div
                class="custom-calendar"
                style="max-width: 100%; box-shadow: none; border: none"
              >
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
            </div>
          </div>

          <!-- Trip Duration Range -->
          <div class="modal-field-group">
            <div class="modal-field-label">Trip Duration</div>
            <div class="trip-duration-range-content mobile-duration">
              <!-- Min Duration -->
              <div class="counter-row duration-counter-row">
                <div class="counter-text">
                  <div class="counter-title">Min</div>
                </div>
                <div class="counter-ctrls">
                  <button
                    type="button"
                    class="btn-icon"
                    :disabled="formMinTripDuration <= 1"
                    @click="decrementFormMinDuration"
                  >
                    −
                  </button>
                  <span class="count-display">{{ formMinTripDuration }}</span>
                  <button
                    type="button"
                    class="btn-icon"
                    :disabled="formMinTripDuration >= formMaxTripDuration"
                    @click="incrementFormMinDuration"
                  >
                    +
                  </button>
                </div>
              </div>
              <!-- Max Duration -->
              <div class="counter-row duration-counter-row">
                <div class="counter-text">
                  <div class="counter-title">Max</div>
                </div>
                <div class="counter-ctrls">
                  <button
                    type="button"
                    class="btn-icon"
                    :disabled="formMaxTripDuration <= formMinTripDuration"
                    @click="decrementFormMaxDuration"
                  >
                    −
                  </button>
                  <span class="count-display">{{ formMaxTripDuration }}</span>
                  <button
                    type="button"
                    class="btn-icon"
                    :disabled="formMaxTripDuration >= MAX_TRIP_DURATION"
                    @click="incrementFormMaxDuration"
                  >
                    +
                  </button>
                </div>
              </div>
              <!-- Reset Button -->
              <div class="duration-reset-row">
                <button
                  type="button"
                  class="btn-reset-duration"
                  @click="resetTripDuration"
                  :disabled="
                    formMinTripDuration === 1 &&
                    formMaxTripDuration === MAX_TRIP_DURATION
                  "
                >
                  Reset to Any Duration
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-filter-modal-footer">
          <button class="btn-apply-modal" @click="applyFiltersAndCloseModal">
            Apply
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Plan Modal -->
  <PlanModal
    :isOpen="isPlanModalOpen"
    @close="closePlanModal"
    @navigate-to-results="navigateToResults"
  />
</template>

<script setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";
import { useRouter } from "vue-router";
import downArrowIcon from "../images/arrows/down-arrow.svg";
import upArrowIcon from "../images/arrows/up-arrow.svg";
import PlanModal from "../components/PlanModal.vue";
// DEBUG LOGGING: Uncomment for troubleshooting price/detail mapping
// (Letakkan di bawah semua computed agar tidak ReferenceError)

// --- IMAGE GALLERY STATE ---
const galleryIndexes = ref({}); // { [cabinKey]: index }
const galleryDirections = ref({}); // { [cabinKey]: 'left' | 'right' }

// --- MOBILE FILTER MODAL STATE ---
const showMobileFilterModal = ref(false);
const mobileOpenDestinations = ref(false);
const mobileOpenShips = ref(false);
const mobileOpenGuests = ref(false);
const mobileOpenDates = ref(false);
const mobileOpenDuration = ref(false);

// Lock body scroll when mobile modal is open
watch(showMobileFilterModal, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

function applyFilters() {
  if (!searchCriteria.value) {
    searchCriteria.value = {};
  }

  // Update criteria fields from form state
  searchCriteria.value.destinations = [...formDestinations.value];
  searchCriteria.value.ships = [...formShipIds.value];
  searchCriteria.value.dateFrom = formDateFrom.value;
  searchCriteria.value.dateTo = formDateTo.value;
  searchCriteria.value.totalGuests = guestsTotal.value;

  // Reset pagination
  currentPage.value = 1;

  // Re-trigger availability check
  checkAvailability();
}

function applyFiltersAndCloseModal() {
  // Close all dropdowns first
  mobileOpenDestinations.value = false;
  mobileOpenShips.value = false;
  mobileOpenGuests.value = false;
  mobileOpenDates.value = false;
  mobileOpenDuration.value = false;
  // Close modal
  showMobileFilterModal.value = false;
  // Apply filters (trigger loadResults)
  applyFilters();
}

// Format date range for mobile filter summary bar: "Jan 9 - Jan 22 2026"
function formatFilterDateRange(from, to) {
  if (!from) return "Select dates";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fromDate = new Date(from);
  const fromMonth = months[fromDate.getMonth()];
  const fromDay = fromDate.getDate();

  if (!to) return `${fromMonth} ${fromDay}`;

  const toDate = new Date(to);
  const toMonth = months[toDate.getMonth()];
  const toDay = toDate.getDate();
  const toYear = toDate.getFullYear();

  // If same month, still show: "Jan 9 - Jan 13 2026"
  if (fromMonth === toMonth && fromDate.getFullYear() === toYear) {
    return `${fromMonth} ${fromDay} - ${toMonth} ${toDay} ${toYear}`;
  }

  // Different months: "Dec 31 - Jan 2 2027"
  return `${fromMonth} ${fromDay} - ${toMonth} ${toDay} ${toYear}`;
}

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
    "right",
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

// Helper for price formatting
// Helper for price formatting
const formatPrice = (value) => {
  if (value === null || value === undefined) return "Price on request";
  const num =
    typeof value === "string"
      ? parseFloat(value.replace(/[^0-9.-]+/g, ""))
      : value;
  if (isNaN(num)) return value;
  // Gunakan en-US agar pemisah ribuan adalah koma (,)
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(num)
    .replace("IDR", "Rp");
};

// ...existing code...

// --- DEBUG LOGGING: PASTE INI DI PALING BAWAH FILE ---
// (Aman: watchEffect dijalankan setelah mounted)
onMounted(() => {
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 640 &&
      typeof showMobileFilterModal !== "undefined" &&
      showMobileFilterModal.value
    ) {
      showMobileFilterModal.value = false;
    }
  });

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
  getShipDetails,
} from "../services/komodoApi";
import {
  createXenditInvoice,
  redirectToPayment,
  parsePriceToNumber,
} from "../services/xenditService";
import "../styles/pages/results.css";

const router = useRouter();
const DEFAULT_CURRENCY = "Rp";

const rightArrowIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

const loading = ref(true);
const error = ref("");
const isPlanModalOpen = ref(false);
const searchCriteria = ref(null);
const shipAvailability = ref({});
const availabilityData = ref([]);
const globalStartAvailability = ref(null);
const detailCabinMap = ref(new Map()); // Store detailed cabin info
const shipDetailsMap = ref(new Map()); // Store detailed ship info (images, etc.)

const itineraryItems = ref([]);
const pendingItineraryItem = ref(null);
const editingItineraryIndex = ref(null);
const showCabinModal = ref(false);
const showGuestModal = ref(false);
const showEnquiryModal = ref(false);
const selectedCabin = ref(null);
const cabinQuantity = ref(1);
const modalGuests = ref(2);
const enquirySubmitting = ref(false);
const selectedTripKey = ref(""); // Track selected trip for reservation
const selectedShipForView = ref(null); // Track which ship to show cabins for (null = show ship selection)
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
// Static ship images configuration (from Ship Detail sheet)
// Maps operator/ship name to their main display image URL
// Format: Google Drive URLs converted to lh3.googleusercontent.com for direct display

// Helper to convert Google Drive share URL to direct image URL
function convertGDriveUrl(url) {
  if (!url) return "";
  // Extract file ID from various Google Drive URL formats
  const match = url.match(/[-\w]{25,}/);
  if (match) {
    return `https://lh3.googleusercontent.com/d/${match[0]}`;
  }
  return url;
}

// Ship images from "Ship Detail" sheet - synced with operators list
const SHIP_IMAGES = {
  // Active operators (from ?resource=operators)
  "SEMESTA VOYAGES": convertGDriveUrl(
    "https://drive.google.com/file/d/1semesta_placeholder",
  ),
  "AKASSA CRUISE": convertGDriveUrl(
    "https://drive.google.com/file/d/1akassa_placeholder",
  ),
  "DERYA LIVEABOARD": convertGDriveUrl(
    "https://drive.google.com/file/d/1derya_placeholder",
  ),
  "GIONA LIVEABOARD": convertGDriveUrl(
    "https://drive.google.com/file/d/1giona_placeholder",
  ),

  // Additional ships from Ship Detail sheet (for future use)
  "DURYA LIVEABOARD": convertGDriveUrl(""),
  "BARAKATI LIVEABOARD": convertGDriveUrl(""),
  "ELBARIK CRUISE": convertGDriveUrl(""),
  "ANGELICA LIVEBOARD": convertGDriveUrl(""),
  "NAVILA LIVEBOARD": convertGDriveUrl(""),
  KAMBIOLA: convertGDriveUrl(""),
  "LAMBORAJO 2": convertGDriveUrl(""),
  YUMANA: convertGDriveUrl(""),
  SBVANREL: convertGDriveUrl(""),
  "RAFFLES CRUISE": convertGDriveUrl(""),
  "VINCA VOYAGE": convertGDriveUrl(""),
  "AMORE BOAT": convertGDriveUrl(""),
  "KUMAMBA 02": convertGDriveUrl(""),
  "MAREE GALLERY": convertGDriveUrl(""),
  "SORA GALLERY": convertGDriveUrl(""),
  TARA: convertGDriveUrl(""),
};

// Fallback function to get ship image - tries multiple matching strategies
function getShipImage(shipName) {
  if (!shipName) return "";

  // Coba ambil dari shipDetailsMap terlebih dahulu
  const shipDetail = getShipDetailByName(shipName);
  if (shipDetail && shipDetail.mainImage) {
    return shipDetail.mainImage;
  }

  // Fallback ke static SHIP_IMAGES
  const normalized = shipName.toUpperCase().trim();

  // Check direct match
  if (SHIP_IMAGES[normalized]) return SHIP_IMAGES[normalized];

  // Check partial match (handles variations like "DERYA" vs "DURYA")
  for (const [key, url] of Object.entries(SHIP_IMAGES)) {
    const normKey = key.toUpperCase().trim();
    if (normKey.includes(normalized) || normalized.includes(normKey)) {
      return url;
    }
  }

  return "";
}

// Helper function untuk mencari ship detail berdasarkan nama
function getShipDetailByName(shipName) {
  if (!shipName) return null;

  const normalized = shipName.toUpperCase().trim();
  // Normalize name: remove trailing S for plural handling (VOYAGES -> VOYAGE)
  const normalizedBase = normalized
    .replace(/S$/i, "")
    .replace(/LIVEABOARD/i, "LIVEBOARD")
    .replace(/LIVEBOARD/i, "LIVEABOARD");

  // Cari exact match
  if (shipDetailsMap.value.has(normalized)) {
    return shipDetailsMap.value.get(normalized);
  }

  // Cari partial match dengan fuzzy logic
  for (const [key, detail] of shipDetailsMap.value.entries()) {
    const keyBase = key
      .replace(/S$/i, "")
      .replace(/LIVEABOARD/i, "LIVEBOARD")
      .replace(/LIVEBOARD/i, "LIVEABOARD");

    // Check various match conditions
    if (
      key.includes(normalized) ||
      normalized.includes(key) ||
      keyBase.includes(normalizedBase) ||
      normalizedBase.includes(keyBase) ||
      // Match first word (e.g., "SEMESTA" matches "SEMESTA VOYAGES" and "SEMESTA VOYAGE")
      key.split(" ")[0] === normalized.split(" ")[0]
    ) {
      return detail;
    }
  }

  return null;
}

const SHIPS_CONFIG = [];
const shipsList = ref([]);
const shipsLoading = ref(false);
const formDestinations = ref([]);
const formShipIds = ref([]);
const savedShipPairs = ref([]);
const formDateFrom = ref("");
const formDateTo = ref("");
const formMinTripDuration = ref(1); // Min trip duration
const formMaxTripDuration = ref(30); // Max trip duration

// Trip duration options - only for display filtering, does NOT affect cabin detail integration
const MAX_TRIP_DURATION = 30;

// Multi-cabin guest management
const MAX_CABINS = 4;
const MAX_GUESTS_PER_CABIN = 4;
const cabins = ref([{ id: 1, adults: 2, children: 0, expanded: true }]);

const formIsFlexible = ref(true);
const flexibleAlt = ref(false); // Used in template for no-result state
const formFlexibleGuests = ref(2);

const guestsTotal = computed(() =>
  formIsFlexible.value
    ? formFlexibleGuests.value
    : cabins.value.reduce((sum, c) => sum + c.adults + c.children, 0),
);
const canAddCabin = computed(() => cabins.value.length < MAX_CABINS);

// Trip duration computed - only for display filtering, NOT for cabin detail integration
const maxAllowedDuration = computed(() => {
  if (!formDateFrom.value || !formDateTo.value) {
    return MAX_TRIP_DURATION;
  }
  const fromDate = new Date(formDateFrom.value + "T00:00:00");
  const toDate = new Date(formDateTo.value + "T00:00:00");
  const diffTime = toDate.getTime() - fromDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
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

const displayTripDuration = computed(() => {
  const min = formMinTripDuration.value;
  const max = formMaxTripDuration.value;
  if (min === 1 && max === MAX_TRIP_DURATION) {
    return "Any duration";
  }
  if (min === max) {
    return `${min} ${min === 1 ? "day" : "days"}`;
  }
  return `${min} - ${max} days`;
});

const openRegions = ref(false);
const openShips = ref(false);
const openGuests = ref(false);
const openDates = ref(false);
const openDuration = ref(false);
const hoverShips = ref(false);
const hoverRegions = ref(false);
const hoverGuests = ref(false);
const hoverDates = ref(false);
const hoverDuration = ref(false);

const destDropdown = ref(null);
const shipsDropdown = ref(null);
const guestsDropdown = ref(null);
const datesDropdown = ref(null);
const durationDropdown = ref(null);
const sortDropdownRef = ref(null);

const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

function closeAllDropdowns() {
  openRegions.value = false;
  openShips.value = false;
  openGuests.value = false;
  openDates.value = false;
  openDuration.value = false;
}

function toggleDropdown(which) {
  if (which === "regions") {
    openRegions.value = !openRegions.value;
    openShips.value =
      openGuests.value =
      openDates.value =
      openDuration.value =
        false;
  } else if (which === "ships") {
    openShips.value = !openShips.value;
    openRegions.value =
      openGuests.value =
      openDates.value =
      openDuration.value =
        false;
  } else if (which === "guests") {
    openGuests.value = !openGuests.value;
    openRegions.value =
      openShips.value =
      openDates.value =
      openDuration.value =
        false;
  } else if (which === "dates") {
    openDates.value = !openDates.value;
    openRegions.value =
      openShips.value =
      openGuests.value =
      openDuration.value =
        false;
  } else if (which === "duration") {
    openDuration.value = !openDuration.value;
    openRegions.value =
      openShips.value =
      openGuests.value =
      openDates.value =
        false;
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

// Cabin management functions
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

// Trip Duration increment/decrement functions
function decrementFormMinDuration() {
  if (formMinTripDuration.value > 1) {
    formMinTripDuration.value--;
  }
}

function incrementFormMinDuration() {
  if (formMinTripDuration.value < formMaxTripDuration.value) {
    formMinTripDuration.value++;
  }
}

function decrementFormMaxDuration() {
  if (formMaxTripDuration.value > formMinTripDuration.value) {
    formMaxTripDuration.value--;
  }
}

function incrementFormMaxDuration() {
  if (formMaxTripDuration.value < MAX_TRIP_DURATION) {
    formMaxTripDuration.value++;
  }
}

function resetTripDuration() {
  formMinTripDuration.value = 1;
  formMaxTripDuration.value = MAX_TRIP_DURATION;
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
      sc.totalGuests || (sc.adults || 0) + (sc.children || 0),
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
    sc.totalGuests || (sc.adults || 0) + (sc.children || 0),
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
  })),
);

const minCapacity = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return 1;
  return Math.max(1, sc.totalGuests || (sc.adults || 0) + (sc.children || 0));
});

const selectedCabinDetail = computed(() => {
  const item = selectedCabin.value;
  if (!item) return null;
  // Unwrap display item if using originalItem pattern
  const source = item.originalItem || item;
  if (source.detail) return source.detail;
  const map = detailCabinMap.value || new Map();
  const key = `${normalizeName(
    source.shipName || source.operatorLabel || "",
  )}|${normalizeCabinName(source.cabinName)}`;
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
        .replace(/cruise schedule/gi, ""),
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

// Get list of ships from search criteria
const shipsFromCriteria = computed(() => {
  const sc = searchCriteria.value;
  if (!sc) return [];
  return sc.ships && sc.ships.length ? sc.ships : sc.lodges || [];
});

// Check if we need to show ship selection step
// Only show if multiple ships selected AND at least one ship has availability
const needsShipSelection = computed(() => {
  // First check basic conditions
  if (shipsFromCriteria.value.length <= 1 || selectedShipForView.value) {
    return false;
  }
  // Check if any ships have availability (filter out unavailable ships)
  const availableCount = availableShipsForSelection.value.filter(
    (s) => s.hasAvailability,
  ).length;
  return availableCount > 0;
});

// Get available ships with availability info
const availableShipsForSelection = computed(() => {
  const sc = searchCriteria.value;
  const g = globalStartAvailability.value;
  const minDur = formMinTripDuration.value;
  const maxDur = formMaxTripDuration.value;
  const detailMap = detailCabinMap.value || new Map();

  if (!sc || !g || !Array.isArray(g.operators)) return [];

  const ships = shipsFromCriteria.value;
  const result = [];

  for (const shipName of ships) {
    const matchingOp = g.operators.find((op) => {
      const opName = normalizeName(op.operator || "");
      const targetName = normalizeName(shipName);
      return (
        opName === targetName ||
        opName.includes(targetName) ||
        targetName.includes(opName)
      );
    });

    if (matchingOp) {
      // Filter cabins based on duration and availability
      const validCabins = (matchingOp.cabins || []).filter((cb) => {
        const available = getCabinAvailable(cb);
        if (available != null && available <= 0) return false;

        // Only filter by duration if not using default full range
        if (minDur > 1 || maxDur < MAX_TRIP_DURATION) {
          let d = 0;
          // Strategy 1: Direct properties
          if (cb.trip_days) d = parseInt(cb.trip_days, 10);
          else if (cb.days) d = parseInt(cb.days, 10);
          else if (cb.raw) {
            if (cb.raw.trip_days) d = parseInt(cb.raw.trip_days, 10);
            else if (cb.raw.days) d = parseInt(cb.raw.days, 10);
          }

          // Strategy 2: Extensive Detail Map Lookup matching allStartDateCabins logic
          if (!d) {
            const baseName = getCabinBaseName(cb);
            const cabinKey = normalizeCabinName(baseName);
            const shipNorm = normalizeName(shipName);
            const opNorm = normalizeName(matchingOp.operator || "");

            let detail = detailMap.get(`${shipNorm}|${cabinKey}`);

            if (!detail && opNorm) {
              detail = detailMap.get(`${opNorm}|${cabinKey}`);
            }

            // Fallback: scan by cabin name only
            if (!detail) {
              const suffix = `|${cabinKey}`;
              for (const [dk, dv] of detailMap.entries()) {
                if (dk.endsWith(suffix)) {
                  detail = dv;
                  break;
                }
              }
            }

            // Fallback: canonical
            if (!detail) {
              const canon = canonicalizeCabinLabel(baseName);
              if (canon) {
                detail = detailMap.get(`${shipNorm}|${canon}`);
              }
            }

            if (detail) {
              d = parseInt(detail.trip_days || detail.days || 0, 10);
            }
          }

          // Only filter if duration is KNOWN and outside range
          // If duration is unknown (d=0), include the cabin anyway
          if (d > 0 && (d < minDur || d > maxDur)) return false;
        }
        return true;
      });

      const totalCabins = validCabins.length;

      // Lookup ship details (image, desc) using consistent helper function
      const shipDetail = getShipDetailByName(shipName);

      if (totalCabins > 0) {
        const totalCapacity = validCabins.reduce((sum, cab) => {
          const cap = extractCapacityNumber(cab);
          return sum + (cap || 4);
        }, 0);

        result.push({
          name: shipName,
          operator: matchingOp.operator,
          cabinsCount: totalCabins,
          totalCapacity: totalCapacity,
          hasAvailability: true,
          image: shipDetail?.mainImage || getShipImage(shipName) || "",
          description: shipDetail?.description || "",
        });
      } else {
        result.push({
          name: shipName,
          operator: matchingOp.operator,
          cabinsCount: 0,
          totalCapacity: 0,
          hasAvailability: false,
          image: shipDetail?.mainImage || getShipImage(shipName) || "",
          description: shipDetail?.description || "",
        });
      }
    } else {
      // Lookup ship details even if no operator match
      const shipDetail = getShipDetailByName(shipName);

      result.push({
        name: shipName,
        operator: shipName,
        cabinsCount: 0,
        totalCapacity: 0,
        hasAvailability: false,
        image: shipDetail?.mainImage || getShipImage(shipName) || "",
        description: shipDetail?.description || "",
      });
    }
  }

  // STRICT FILTERING: Only return ships with actual availability
  return result.filter((ship) => ship.hasAvailability);
});

// Function to select a ship for viewing// Function to select a ship for viewing
function selectShipForView(shipName) {
  selectedShipForView.value = shipName;
}

// Function to go back to ship selection
function backToShipSelection() {
  selectedShipForView.value = null;
}

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

      // Filter by selectedShipForView when viewing specific ship from multi-selection
      if (selectedShipForView.value) {
        const viewingShipNorm = normalizeName(selectedShipForView.value);
        const currentShipNorm = normalizeName(shipName);
        if (
          !currentShipNorm.includes(viewingShipNorm) &&
          !viewingShipNorm.includes(currentShipNorm)
        ) {
          continue;
        }
      }

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

      // Try multiple keys to find detail mapping
      const searchKey1 = `${normalizeName(shipName)}|${cabinKey}`;
      const searchKey2 = operatorLabel
        ? `${normalizeName(operatorLabel)}|${cabinKey}`
        : null;

      let detail = detailMap.get(searchKey1);
      if (!detail && searchKey2) {
        detail = detailMap.get(searchKey2);
      }

      // Debug logging for first few cabins
      if (!detail && detailMap.size > 0) {
        const debugIndex = Math.floor(Math.random() * 100);
        if (debugIndex < 5) {
          // Only log 5% of misses to avoid spam
          console.log("Cabin detail NOT found:", {
            shipName,
            operatorLabel,
            cabinKey,
            searchKey1,
            searchKey2,
            availableKeys: Array.from(detailMap.keys())
              .filter((k) => k.includes(cabinKey))
              .slice(0, 3),
          });
        }
      }

      // Fallback: scan by cabin name only (first match)
      if (!detail) {
        for (const [dk, dv] of detailMap.entries()) {
          if (dk.endsWith(`|${cabinKey}`)) {
            detail = dv;
            break;
          }
        }
      }
      // Try canonical label match
      if (!detail) {
        const canonKey = `${normalizeName(shipName)}|${canonicalizeCabinLabel(
          name,
        )}`;
        detail = detailMap.get(canonKey);
      }
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
      (a.cabinName || "").localeCompare(b.cabinName || ""),
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
        userDateTo,
      );
    });
    return filteredItems;
  }

  return items;
});

const displayItems = computed(() => {
  const cabins = allStartDateCabins.value;
  const sc = searchCriteria.value || {};
  const isFlexible = sc.isFlexible;
  const targetGuests = isFlexible
    ? sc.flexibleGuests || 0
    : sc.totalGuests || 0;
  const requestedCabins = sc.cabins || [];

  // 1. Pre-calculate Ship Total Capacity per Date
  // Key: shipName-normalized|date
  const shipDateCapacity = {};

  for (const item of cabins) {
    if (!item.date) continue;
    const sName = normalizeName(item.shipName || item.operatorLabel || "");
    const key = `${sName}|${item.date}`;

    // Estimate capacity: try various fields
    // Default to 2 if unknown (safe fallback or aggressive?)
    let cap = 2;
    if (typeof extractCapacityNumber === "function") {
      cap = extractCapacityNumber(item) || 2;
    } else {
      // Fallback inline logic
      const txt = item.capacityText || "";
      const match = txt.match(/(\d+)/);
      if (match) cap = parseInt(match[1]);
    }

    // Total capacity for this cabin type = cap * available_count
    const avail = typeof item.available === "number" ? item.available : 1;

    shipDateCapacity[key] = (shipDateCapacity[key] || 0) + cap * avail;
  }

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

    // --- FILTERING LOGIC ---

    // 1. Ship Validity Check (Total Capacity)
    const sName = normalizeName(item.shipName || item.operatorLabel || "");
    const capKey = `${sName}|${tripDateStr}`;
    const totalShipCap = shipDateCapacity[capKey] || 0;

    // If ship capacity on this date is less than target, skip current trip/item
    if (targetGuests > 0 && totalShipCap < targetGuests) {
      continue;
    }

    // 2. Cabin Validity Check (Strict Mode Only)
    // "tampilkan hanya kamar yang match dengan permintaan tersebut"
    if (!isFlexible && requestedCabins.length > 0) {
      let cap = 2;
      if (typeof extractCapacityNumber === "function") {
        cap = extractCapacityNumber(item) || 2;
      } else {
        const txt = item.capacityText || "";
        const match = txt.match(/(\d+)/);
        if (match) cap = parseInt(match[1]);
      }

      // Does this cabin fit ANY of the requested room configurations?
      // (Assuming checking individual fit is what's implied by "cocok dengan minimal satu kamar")
      const fitsAny = requestedCabins.some(
        (req) => cap >= (req.total || req.adults + req.children),
      );
      if (!fitsAny) {
        continue;
      }
    }

    // --- END FILTERING ---

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
  return Array.from(groupedMap.values())
    .map((group) => {
      // Sort trips by date
      const sortedTrips = group.trips.sort(
        (a, b) => new Date(a.date) - new Date(b.date),
      );

      // If no trips survived filtering (e.g. ship capacity valid for some dates but not others?)
      // The loop above skips invalid dates. So if sortedTrips is empty, we handle it?
      // Actually map() keeps the group even if trips is empty?
      // No, group initialized with trips=[], we push validation passed trips.
      // If trips is empty, we should filter out the group.

      if (sortedTrips.length === 0) return null;

      return {
        ...group,
        id: group.key,
        uniqueKey: `${group.shipName}|${group.cabinName}`,
        title: getPreferredCabinName(group),
        subtitle: formatShipName(group.operatorLabel),
        image: group.image,
        prices: [{ label: "Start from", value: group.price || "Rp3,650,000" }],
        availabilityCount:
          group.totalAvailable > 1
            ? `${group.totalAvailable} cabins available`
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
    })
    .filter((item) => item !== null);
});

// Sorted display items based on sortBy selection and trip duration filter
// NOTE: This filtering only affects DISPLAY, NOT cabin detail integration
const sortedDisplayItems = computed(() => {
  let items = [...displayItems.value];

  // Filter by trip duration if selected (range is not default)
  // This only filters what is displayed, not the underlying cabin data
  const minDur = formMinTripDuration.value;
  const maxDur = formMaxTripDuration.value;

  if (minDur > 1 || maxDur < MAX_TRIP_DURATION) {
    items = items
      .map((item) => {
        // Filter trips within this cabin to only those matching the duration(s)
        const filteredTrips = (item.trips || []).filter((trip) => {
          const tripDays = Number(trip.tripDays) || 0;
          return tripDays >= minDur && tripDays <= maxDur;
        });

        // If no matching trips, exclude this cabin from display
        if (filteredTrips.length === 0) {
          return null;
        }

        // Return cabin with filtered trips for display
        return {
          ...item,
          trips: filteredTrips,
          tripsCount: filteredTrips.length,
        };
      })
      .filter((item) => item !== null);
  }

  // Apply sorting
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

// --- PAGINATION ---
const currentPage = ref(1);
const isMobile = ref(false);

// Check if mobile on mount and resize
function checkMobile() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});

const itemsPerPage = computed(() => (isMobile.value ? 5 : 10));

const totalPages = computed(() => {
  return Math.ceil(sortedDisplayItems.value.length / itemsPerPage.value);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return sortedDisplayItems.value.slice(start, end);
});

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function nextPage() {
  goToPage(currentPage.value + 1);
}

function prevPage() {
  goToPage(currentPage.value - 1);
}

// Reset page when sortBy changes
watch(sortBy, () => {
  currentPage.value = 1;
});

// Reset page when trip duration filter changes
watch([formMinTripDuration, formMaxTripDuration], () => {
  currentPage.value = 1;
});

// Auto-clamp trip duration if exceeds max allowed
watch(maxAllowedDuration, (newMax) => {
  // Clamp maxTripDuration if it exceeds newMax
  if (formMaxTripDuration.value > newMax) {
    formMaxTripDuration.value = newMax;
  }
  // Clamp minTripDuration if it exceeds maxTripDuration
  if (formMinTripDuration.value > formMaxTripDuration.value) {
    formMinTripDuration.value = formMaxTripDuration.value;
  }
});

const maxGuestsForPendingItem = computed(() => {
  const item = pendingItineraryItem.value || {};

  // Try using the robust extractor first (handles obj properties and strings)
  const extracted = extractCapacityNumber(item);
  if (extracted) return extracted;

  const capacityFromText = getMaxCapacityFromText(item.capacityText);
  if (capacityFromText) return capacityFromText;

  // Fallback defaults
  return 4;
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
      detectedCurrency || DEFAULT_CURRENCY,
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
    formattedTotal: hasPrice ? formatPrice(total) : "",
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
    (trip) => trip.key === selectedTripKey.value,
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
    title: item.title, // Pass the processed title (e.g., from getPreferredCabinName)
    date: selectedTrip.date,
    tripDays: selectedTrip.tripDays,
    available: selectedTrip.available,
    selectedTrip: selectedTrip,
  };

  // Call the existing itinerary toggle function
  toggleItinerary(cabinInfo);
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
          (s) => s.label === pair.label && s.sheet === (pair.sheet || s.sheet),
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
    // Use local API endpoint for cabin details
    const baseUrl = import.meta.env.DEV
      ? "https://i4k08k4w4g40wkg0wcw0w88w.49.13.148.202.sslip.io/"
      : "https://uo044o8swkcgo4s4cgockc08.49.13.148.202.sslip.io";
    const url = `${baseUrl}/?resource=cabindetail`;
    const res = await fetch(url).then((r) => r.json());
    const map = new Map();

    // Track unique ship names from cabin detail API
    const shipNamesFromAPI = new Set();

    if (res && Array.isArray(res.data)) {
      res.data.forEach((cb) => {
        const shipName = cb.operator || cb.shipName || "";
        shipNamesFromAPI.add(shipName); // Track original name from API

        // Create multiple normalized ship name variants for better matching
        const shipVariants = new Set();
        shipVariants.add(normalizeName(shipName)); // e.g., "semesta voyage"
        shipVariants.add(
          normalizeName(
            shipName.replace(/\s+(cruise|liveaboard|voyages?|boat)s?$/i, ""),
          ),
        ); // e.g., "semesta"

        // Also add uppercase variant
        const upperShip = shipName.toUpperCase().trim();
        shipVariants.add(normalizeName(upperShip));
        shipVariants.add(
          normalizeName(
            upperShip.replace(/\s+(CRUISE|LIVEABOARD|VOYAGES?|BOAT)S?$/i, ""),
          ),
        );

        // Key by NAME CABIN (base) -> detail
        const baseName = getCabinBaseName(cb); // prefers cabin_name, falls back api_name
        const cabinKey = normalizeCabinName(baseName);

        // Create keys with all ship variants
        shipVariants.forEach((variant) => {
          if (variant.trim()) {
            const keyBase = `${variant}|${cabinKey}`;
            map.set(keyBase, cb);
          }
        });

        // Also key by NAME CABIN API for robust linking
        const apiName = (cb.api_name || "").toString().trim();
        if (apiName) {
          const apiCabinKey = normalizeCabinName(apiName);
          shipVariants.forEach((variant) => {
            if (variant.trim()) {
              const keyApi = `${variant}|${apiCabinKey}`;
              map.set(keyApi, cb);
            }
          });
        }

        // Canonical keys to match variants (e.g., "Master Padar" ↔ "Padar")
        const canonBase = canonicalizeCabinLabel(baseName);
        if (canonBase) {
          shipVariants.forEach((variant) => {
            const canonKey = `${variant}|${canonBase}`;
            map.set(canonKey, cb);
          });
        }
        if (apiName) {
          const canonApi = canonicalizeCabinLabel(apiName);
          if (canonApi) {
            shipVariants.forEach((variant) => {
              const canonApiKey = `${variant}|${canonApi}`;
              map.set(canonApiKey, cb);
            });
          }
        }
      });
    }
    detailCabinMap.value = map;
    console.log(`Loaded ${map.size} cabin details from API`, {
      sampleKeys: Array.from(map.keys()).slice(0, 10),
      totalEntries: map.size,
      uniqueShipNames: Array.from(shipNamesFromAPI).sort(),
    });
  } catch (e) {
    console.warn("Failed to load cabindetail API", e);
  }
}

// Load ship details from shipdetail API
async function loadShipDetails() {
  try {
    const baseUrl = import.meta.env.DEV
      ? "https://i4k08k4w4g40wkg0wcw0w88w.49.13.148.202.sslip.io/"
      : "https://uo044o8swkcgo4s4cgockc08.49.13.148.202.sslip.io";
    const url = `${baseUrl}/?resource=shipdetail`;
    const res = await fetch(url).then((r) => r.json());

    const map = new Map();
    if (res && res.ok && Array.isArray(res.ships)) {
      res.ships.forEach((ship) => {
        const normalized = (ship.name || "").toUpperCase().trim();
        if (normalized) {
          // Transform image_main to mainImage for consistency
          const transformed = {
            ...ship,
            mainImage: ship.image_main || ship.mainImage || "",
          };
          map.set(normalized, transformed);
        }
      });
    }
    shipDetailsMap.value = map;
    console.log(
      `Loaded ${map.size} ship details from API`,
      Array.from(map.keys()),
    );
  } catch (e) {
    console.warn("Failed to load shipdetail API", e);
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

    // CRITICAL: Load both ship AND cabin details FIRST, in parallel
    // These are needed for proper data enrichment and display
    console.log("[Results] Starting data load with", dates.length, "dates");

    await Promise.all([
      // Load ship details (with fallback if fails)
      (async () => {
        try {
          const shipDetailsData = await getShipDetails();
          if (shipDetailsData && shipDetailsData.ships) {
            const newMap = new Map();
            shipDetailsData.ships.forEach((ship) => {
              const normalized = (ship.name || "").toUpperCase().trim();
              if (normalized) {
                newMap.set(normalized, {
                  ...ship,
                  mainImage: ship.image_main || ship.mainImage || "",
                });
              }
            });
            shipDetailsMap.value = newMap;
            console.log(
              "[Results] Ship details loaded:",
              newMap.size,
              "entries",
            );
          }
        } catch (err) {
          console.warn(
            "[Results] Failed to load ship details, continuing without:",
            err,
          );
        }
      })(),
      // Load cabin details (with fallback if fails)
      (async () => {
        try {
          await loadDetailCabins();
        } catch (err) {
          console.warn(
            "[Results] Failed to load cabin details, continuing without:",
            err,
          );
        }
      })(),
    ]);

    let globalCabinsPromise = null;
    const getGlobalCabinsOnce = () => {
      if (!globalCabinsPromise) {
        globalCabinsPromise = getCabins("Cruise Schedule - Normalized").catch(
          () => null,
        );
      }
      return globalCabinsPromise;
    };

    const allowedBySheet = {};

    // Get allowed cabins for each sheet
    await Promise.all(
      sheets.map(async (sheet, i) => {
        const label = labels[i] || sheet;
        let allowed = [];
        try {
          const cab = await getCabins(sheet);
          if (Array.isArray(cab?.allCabins)) {
            allowed = cab.allCabins.map((c) => String(c).split(" (")[0].trim());
          }
        } catch (err) {
          console.warn(`Failed to get cabins for sheet ${sheet}:`, err);
        }
        if (allowed.length === 0) {
          try {
            const globalCab = await getGlobalCabinsOnce();
            if (globalCab) {
              const target = normalizeName(label);
              const op = (globalCab.operators || []).find(
                (o) => normalizeName(o.operator) === target,
              );
              if (op && Array.isArray(op.cabins)) {
                allowed = op.cabins.map((c) => String(c).split(" (")[0].trim());
              }
            }
          } catch (err) {
            console.warn(`Failed to get global cabins for ${label}:`, err);
          }
        }
        allowedBySheet[sheet] = Array.from(
          new Set(allowed.map(normalizeCabinName)),
        );
      }),
    );

    const perShipEntries = await Promise.all(
      sheets.map(async (sheet, i) => {
        const label = labels[i] || sheet;
        const allowed = allowedBySheet[sheet] || [];

        // Fetch all dates for this sheet with proper error handling
        const primaryPromises = dates.map((date) =>
          getAvailability(date, sheet).catch((err) => {
            console.warn(
              `Failed to get availability for ${date} on ${sheet}:`,
              err,
            );
            return null;
          }),
        );

        const primaryDays = await Promise.all(primaryPromises);

        // Identify which dates failed
        const needFallbackIdx = primaryDays
          .map((day, idx) =>
            !day || !day.operators || day.operators.length === 0 ? idx : -1,
          )
          .filter((idx) => idx >= 0);

        // Fetch fallback data for failed dates
        let fallbackDays = [];
        if (needFallbackIdx.length) {
          const fbPromises = needFallbackIdx.map((idx) =>
            getAvailability(dates[idx], "Cruise Schedule - Normalized").catch(
              (err) => {
                console.warn(
                  `Failed to get fallback availability for ${dates[idx]}:`,
                  err,
                );
                return null;
              },
            ),
          );
          const fbResults = await Promise.all(fbPromises);
          fallbackDays = fbResults.filter((d) => d !== null);
        }

        // Build results with fallback logic
        const perShipResults = [];
        for (let idx = 0; idx < dates.length; idx++) {
          const day =
            primaryDays[idx] &&
            primaryDays[idx].operators &&
            primaryDays[idx].operators.length
              ? primaryDays[idx]
              : needFallbackIdx.includes(idx) && fallbackDays.length > 0
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
      }),
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
          sc.dateTo || sc.dateFrom,
        );
        const allAvailabilityPromises = allDates.map(async (date) => {
          let dayData = null;
          try {
            dayData = await getAvailability(date);
          } catch (err) {
            console.warn(
              `Failed primary availability fetch for ${date}, trying fallback:`,
              err,
            );
          }

          if (
            !dayData ||
            !dayData.operators ||
            dayData.operators.length === 0
          ) {
            try {
              dayData = await getAvailability(
                date,
                "Cruise Schedule - Normalized",
              );
            } catch (err) {
              console.warn(
                `Failed fallback availability fetch for ${date}:`,
                err,
              );
            }
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
            0,
          ),
        };

        globalStartAvailability.value = combinedAvailability;
        console.log(
          "[Results] Loaded global availability:",
          combinedAvailability.total,
          "total cabins",
        );
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
    console.error("[Results] Availability check error:", err);
  } finally {
    loading.value = false;
    console.log("[Results] Availability check complete");
  }
}

const loadResults = () => checkAvailability();

function applySidebarChanges() {
  try {
    const selectedEntries = shipsList.value.filter((s) =>
      formShipIds.value.includes(s.id),
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
      minTripDuration: formMinTripDuration.value, // Save min trip duration
      maxTripDuration: formMaxTripDuration.value, // Save max trip duration
      // Multi-cabin data
      cabins: formIsFlexible.value
        ? []
        : cabins.value.map((c) => ({
            adults: c.adults,
            children: c.children,
            total: c.adults + c.children,
          })),
      totalCabins: formIsFlexible.value ? 0 : cabins.value.length,
      totalGuests: guestsTotal.value,

      // Flexible fields
      isFlexible: formIsFlexible.value,
      flexibleGuests: formIsFlexible.value ? formFlexibleGuests.value : 0,

      // Legacy fields
      adults: formIsFlexible.value
        ? formFlexibleGuests.value
        : cabins.value.reduce((s, c) => s + c.adults, 0),
      children: formIsFlexible.value
        ? 0
        : cabins.value.reduce((s, c) => s + c.children, 0),
      age3_9: 0,
      age0_2: 0,
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

function toggleTripDuration(duration) {
  if (duration === 0) {
    // If selecting "Any", clear specific selections
    formTripDurations.value = [];
  } else {
    const index = formTripDurations.value.indexOf(duration);
    if (index === -1) {
      formTripDurations.value.push(duration);
    } else {
      formTripDurations.value.splice(index, 1);
    }
  }
}

function isClickInsideAny(target) {
  const els = [
    destDropdown.value,
    shipsDropdown.value,
    guestsDropdown.value,
    datesDropdown.value,
    durationDropdown.value,
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
  // Load itinerary from localStorage first
  loadItinerary();

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

      // Load flexible state
      formIsFlexible.value = !!sc.isFlexible;
      formFlexibleGuests.value = sc.flexibleGuests || 2;
      const savedLabels = Array.isArray(sc.ships) ? sc.ships : [];
      const savedSheets = Array.isArray(sc.shipSheets) ? sc.shipSheets : [];
      savedShipPairs.value = savedLabels.map((label, idx) => ({
        label,
        sheet: savedSheets[idx] || "",
      }));
      formDateFrom.value = sc.dateFrom || "";
      formDateTo.value = sc.dateTo || "";

      // Load trip duration filter (min/max range)
      if (sc.minTripDuration !== undefined) {
        formMinTripDuration.value = sc.minTripDuration;
      } else {
        formMinTripDuration.value = 1;
      }
      if (sc.maxTripDuration !== undefined) {
        formMaxTripDuration.value = sc.maxTripDuration;
      } else {
        formMaxTripDuration.value = MAX_TRIP_DURATION;
      }

      // Load cabins from localStorage if available
      if (Array.isArray(sc.cabins) && sc.cabins.length > 0) {
        cabins.value = sc.cabins.map((c, idx) => ({
          id: idx + 1,
          adults: c.adults || 2,
          children: c.children || 0,
          expanded: idx === 0, // Only first cabin expanded by default
        }));
      } else {
        // Fallback: create single cabin from total guests
        cabins.value = [
          {
            id: 1,
            adults: sc.totalGuests || sc.adults || 2,
            children: 0,
            expanded: true,
          },
        ];
      }
      if (formDateFrom.value) {
        const d = new Date(formDateFrom.value);
        currentMonth.value = d.getMonth();
        currentYear.value = d.getFullYear();
      }
    }
    // Start loading detail cabins in background (non-blocking)
    loadDetailCabins().catch((err) =>
      console.warn("Failed to load details background:", err),
    );

    // Start loading ship details in background (non-blocking)
    loadShipDetails().catch((err) =>
      console.warn("Failed to load ship details background:", err),
    );

    // Run critical API calls in parallel
    await Promise.all([
      // loadDetailCabins(), // Moved to background
      loadShipsList(),
      checkAvailability(),
    ]);
  } catch (err) {
    console.error("Failed to load search criteria:", err);
    error.value = "Failed to load search criteria";
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

// Convert a cabin label to a canonical token string for fuzzy matching
function canonicalizeCabinLabel(label) {
  if (!label) return "";
  let s = String(label).toLowerCase();
  // Strip parentheses content
  s = s.replace(/\([^)]*\)/g, " ");
  // Replace separators
  s = s.replace(/[\-–—_/]+/g, " ");
  // Remove common adjectives and non-distinct words
  const stopwords = new Set([
    "master",
    "vip",
    "suite",
    "deluxe",
    "superior",
    "private",
    "ocean",
    "sea",
    "view",
    "balcony",
    "bathtub",
    "room",
    "cabin",
    "deck",
    "upperdeck",
    "maindeck",
    "lowerdeck",
  ]);
  const tokens = s
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t && !stopwords.has(t))
    .map((t) => t.replace(/[^a-z0-9]/g, ""))
    .filter(Boolean);
  if (!tokens.length) return "";
  // Sort for consistency
  return tokens.sort().join(" ");
}

// Prefer human-friendly cabin name from detail API if present
function getPreferredCabinName(item) {
  const d = item && (item.detail || item);
  const name = d?.cabin_name || d?.api_name;
  if (name && String(name).trim()) return String(name).trim();
  return item?.cabinName || "";
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
      "Air conditioning",
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
  const capStr = (
    item.capacity ||
    item.max_guests ||
    item.sleeps ||
    item.capacity_lock ||
    ""
  ).toString();

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
      .join(" "),
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
  editingItineraryIndex.value = null;
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
  if (editingItineraryIndex.value !== null) {
    updateItineraryGuest(editingItineraryIndex.value, modalGuests.value);
    closeGuestModal();
  } else if (pendingItineraryItem.value) {
    addToItinerary(pendingItineraryItem.value, modalGuests.value);
    closeGuestModal();
  }
}

function openEditGuest(item, index) {
  pendingItineraryItem.value = {
    cabinName: item.cabin,
    shipName: item.ship,
    date: item.date,
    capacityText: item.capacity || "4 guests",
    availableText: item.capacity ? `${item.capacity} capacity` : "Available",
  };
  editingItineraryIndex.value = index;
  modalGuests.value = item.guests || 2;
  showGuestModal.value = true;
  lockPageScroll();
}

function updateItineraryGuest(index, guests) {
  try {
    const key = "komodo_itinerary";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    if (current[index]) {
      current[index].guests = guests;
      localStorage.setItem(key, JSON.stringify(current));
      loadItinerary();
    }
  } catch (e) {
    console.error("Failed to update itinerary", e);
  }
}

function isInItinerary(item) {
  return itineraryItems.value.some(
    (it) =>
      it.cabin === (item.title || item.cabinName) &&
      it.ship === item.shipName &&
      it.date === item.date,
  );
}

// Check if a specific trip from a display item is already in the itinerary
function isTripInItinerary(displayItem, trip) {
  if (!displayItem || !trip) return false;
  const originalItem = displayItem.originalItem;
  if (!originalItem) return false;

  const targetName = displayItem.title || originalItem.cabinName;

  return itineraryItems.value.some(
    (it) =>
      it.cabin === targetName &&
      it.ship === originalItem.shipName &&
      it.date === trip.date,
  );
}

function toggleItinerary(item) {
  if (isInItinerary(item)) {
    removeFromItinerary(item);
  } else {
    pendingItineraryItem.value = item;
    const requested = Number(searchCriteria.value?.totalGuests || 2);

    // Try to extract capacity from item directly or its originalItem
    let capNum = extractCapacityNumber(item);
    if (!capNum && item.originalItem) {
      capNum = extractCapacityNumber(item.originalItem);
    }

    // Also try text parsing if numeric extraction failed (matches computed logic)
    if (!capNum && item.capacityText) {
      capNum = getMaxCapacityFromText(item.capacityText);
    }

    const capacity = capNum || 4; // Default to 4 (standard cabin) instead of 10
    modalGuests.value = Math.min(requested, capacity);
    showGuestModal.value = true;
    lockPageScroll();
  }
}

function addToItinerary(item, guests = 2) {
  try {
    const key = "komodo_itinerary";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    const targetName = item.title || item.cabinName;
    const exists = current.some(
      (it) =>
        it.cabin === targetName &&
        it.ship === item.shipName &&
        it.date === item.date,
    );
    if (exists) return;
    const entry = {
      operator: item.operatorLabel,
      ship: item.shipName,
      cabin: targetName,
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
    const targetName = item.title || item.cabinName;
    const filtered = current.filter(
      (it) =>
        !(
          it.cabin === targetName &&
          it.ship === item.shipName &&
          it.date === item.date
        ),
    );
    localStorage.setItem(key, JSON.stringify(filtered));
    loadItinerary();
  } catch (e) {
    console.error("Failed to remove from itinerary", e);
  }
}

function openPlanModal() {
  isPlanModalOpen.value = true;
}

function closePlanModal() {
  isPlanModalOpen.value = false;
}

function navigateToResults() {
  isPlanModalOpen.value = false;
  router.push("/results");
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
      }),
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
  transition:
    transform 0.18s cubic-bezier(0.55, 0, 0.1, 1),
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

/* Sidebar Toggle Styles */
/* Sidebar Pill Toggle Styles */
.sidebar-pill-container {
  display: flex;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
}
.sidebar-pill-btn {
  flex: 1;
  padding: 8px 0;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.sidebar-pill-btn:hover {
  color: #334155;
}
.sidebar-pill-btn.active {
  background: white;
  color: #0f172a;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-weight: 600;
}

.sidebar-flexible-content {
  padding: 0.5rem 0.25rem;
}
.sidebar-counter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.sidebar-counter-row .label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
  font-family: "Outfit", sans-serif;
}
.sidebar-counter-row .ctrls {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 3px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}
.btn-ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: #f8fafc;
  border-radius: 4px;
  color: #334155;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  transition: background 0.2s;
}
.btn-ctrl:hover:not(:disabled) {
  background: #e2e8f0;
}
.btn-ctrl:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.sidebar-counter-row .val {
  font-weight: 600;
  min-width: 24px;
  text-align: center;
  font-size: 0.95rem;
  color: #0f172a;
}
.sidebar-note {
  font-size: 0.8rem;
  color: #64748b;
  text-align: center;
  margin-top: 0.75rem;
  line-height: 1.5;
  border-top: 1px dashed #e2e8f0;
  padding-top: 0.75rem;
}
/* Sidebar Pill Toggle Styles */
.sidebar-pill-container {
  display: flex;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
}
.sidebar-pill-btn {
  flex: 1;
  padding: 8px 0;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.sidebar-pill-btn:hover {
  color: #334155;
}
.sidebar-pill-btn.active {
  background: white;
  color: #0f172a;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-weight: 600;
}

.sidebar-flexible-content {
  padding: 0.5rem 0.25rem;
}
.sidebar-counter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.sidebar-counter-row .label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
  font-family: "Outfit", sans-serif;
}
.sidebar-counter-row .ctrls {
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  padding: 0;
  border: none;
}
.btn-ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 50%;
  color: #334155;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  transition: all 0.2s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.btn-ctrl:hover:not(:disabled) {
  border-color: #cbd5e1;
  color: #0f172a;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.btn-ctrl:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: #f8fafc;
  border-color: #f1f5f9;
  box-shadow: none;
  transform: none;
}
.sidebar-counter-row .val {
  font-weight: 600;
  min-width: 24px;
  text-align: center;
  font-size: 1rem;
  color: #0f172a;
}
.sidebar-note {
  font-size: 0.8rem;
  color: #64748b;
  text-align: center;
  margin-top: 0.75rem;
  line-height: 1.5;
  border-top: 1px dashed #e2e8f0;
  padding-top: 0.75rem;
}
</style>
