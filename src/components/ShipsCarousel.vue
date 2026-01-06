<template>
  <section class="ships-carousel">
    <div class="ships-container">
      <div class="ships-header">
        <h2 class="ships-heading">Explore our fleet collection</h2>
        <p class="ships-description">
          Our fleet of luxury vessels are designed for intimate journeys through
          Indonesia's most spectacular waters. Each ship offers unique
          experiences, from traditional phinisi craftsmanship to modern
          expedition yachts, ensuring unforgettable adventures across the
          archipelago.
        </p>
      </div>

      <!-- Location Filter Buttons -->
      <div class="ships-filters">
        <button
          v-for="dest in destinations"
          :key="dest.id"
          class="filter-btn"
          :class="{ active: activeFilter === dest.id }"
          @click="setFilter(dest.id)"
        >
          {{ dest.name }}
        </button>
      </div>
    </div>

    <!-- Ships Carousel -->
    <div class="ships-slider-wrapper">
      <div class="ships-slider-container">
        <!-- Navigation Left -->
        <button
          v-if="canNavigate"
          class="ships-nav ships-nav-left"
          @click="prevSlide"
          :disabled="currentIndex === 0"
          aria-label="Previous ships"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Slides Track -->
        <div class="ships-viewport">
          <Transition name="slide-up" mode="out-in">
            <div class="ships-track-wrapper" :key="activeFilter">
              <div
                class="ships-track"
                :style="{ transform: `translateX(-${trackOffset}px)` }"
              >
                <div
                  v-for="ship in filteredShips"
                  :key="ship.id"
                  class="ship-card"
                  :style="{
                    width: `${slideWidth}px`,
                    marginRight: `${slideGap}px`,
                  }"
                >
                  <div class="ship-image-wrapper">
                    <img
                      :src="ship.image"
                      :alt="ship.name"
                      class="ship-image"
                    />
                  </div>
                  <div class="ship-info">
                    <span class="ship-location">{{ ship.locationName }}</span>
                    <h3 class="ship-name">{{ ship.name }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Navigation Right -->
        <button
          v-if="canNavigate"
          class="ships-nav ships-nav-right"
          @click="nextSlide"
          :disabled="currentIndex >= maxIndex"
          aria-label="Next ships"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import shipPhinisiVoyager from "../images/ship-phinisi-voyager.png";
import shipOceanExplorer from "../images/ship-ocean-explorer.png";
import shipCoralQueen from "../images/ship-coral-queen.png";
import shipSunsetCruiser from "../images/ship-sunset-cruiser.png";
import shipIslandHopper from "../images/ship-island-hopper.png";
import shipReefDancer from "../images/ship-reef-dancer.png";

const destinations = [
  { id: "all", name: "All" },
  { id: "komodo", name: "Komodo" },
  { id: "labuan-bajo", name: "Labuan Bajo" },
  { id: "togean", name: "Togean" },
];

const ships = [
  {
    id: 1,
    name: "Phinisi Voyager",
    destination: "komodo",
    locationName: "Komodo National Park",
    image: shipPhinisiVoyager,
  },
  {
    id: 2,
    name: "Ocean Explorer",
    destination: "komodo",
    locationName: "Komodo National Park",
    image: shipOceanExplorer,
  },
  {
    id: 3,
    name: "Coral Queen",
    destination: "labuan-bajo",
    locationName: "Labuan Bajo",
    image: shipCoralQueen,
  },
  {
    id: 4,
    name: "Sunset Cruiser",
    destination: "labuan-bajo",
    locationName: "Labuan Bajo",
    image: shipSunsetCruiser,
  },
  {
    id: 5,
    name: "Island Hopper",
    destination: "togean",
    locationName: "Togean Islands",
    image: shipIslandHopper,
  },
  {
    id: 6,
    name: "Reef Dancer",
    destination: "togean",
    locationName: "Togean Islands",
    image: shipReefDancer,
  },
];

const activeFilter = ref("all");
const currentIndex = ref(0);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1200
);

const filteredShips = computed(() => {
  if (activeFilter.value === "all") {
    return ships;
  }
  return ships.filter((ship) => ship.destination === activeFilter.value);
});

// Slide dimensions - calculated to fit exactly 3 on screen
const slideWidth = computed(() => {
  if (windowWidth.value <= 640) return windowWidth.value * 0.75;
  if (windowWidth.value <= 900) return 300;
  // Calculate to fit exactly 3 slides with gaps
  const containerWidth = Math.min(windowWidth.value - 80, 1400); // 40px padding each side
  const totalGap = 32 * 2; // 2 gaps between 3 slides
  return (containerWidth - totalGap) / 3;
});

const slideGap = computed(() => {
  if (windowWidth.value <= 640) return 16;
  return 32;
});

const trackOffset = computed(() => {
  return currentIndex.value * (slideWidth.value + slideGap.value);
});

const itemsPerView = computed(() => {
  if (windowWidth.value <= 640) return 1;
  if (windowWidth.value <= 900) return 2;
  return 3;
});

const canNavigate = computed(() => {
  return filteredShips.value.length > itemsPerView.value;
});

const maxIndex = computed(() => {
  return Math.max(0, filteredShips.value.length - itemsPerView.value);
});

function setFilter(destId) {
  activeFilter.value = destId;
  currentIndex.value = 0;
}

function nextSlide() {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function handleResize() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.ships-carousel {
  background: #fbfaf5;
  padding: 8vh 0;
  overflow: hidden;
}

.ships-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

.ships-header {
  max-width: 550px;
  margin-bottom: 2.5rem;
}

.ships-heading {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}

.ships-description {
  font-size: 1rem;
  line-height: 1.75;
  color: #555;
  margin: 0;
}

/* Filter Buttons */
.ships-filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #888;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-right: 1rem;
  transition: color 0.3s ease;
  font-weight: 600;
  position: relative;
}

.filter-btn::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #1a1a1a;
  transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.filter-btn:hover {
  color: #1a1a1a;
}

.filter-btn.active {
  color: #1a1a1a;
  font-weight: 500;
}

.filter-btn.active::after {
  width: 100%;
}

/* Ships Slider */
.ships-slider-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

.ships-slider-container {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.ships-viewport {
  flex: 1;
  overflow: hidden;
  min-height: 480px;
}

.ships-track-wrapper {
  width: 100%;
}

.ships-track {
  display: flex;
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: max-content;
}

.ship-card {
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.ship-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 420px;
}

.ship-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.ship-card:hover .ship-image {
  transform: scale(1.05);
}

.ship-info {
  padding: 1rem 0;
}

.ship-location {
  display: block;
  font-size: 0.7rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.5rem;
}

.ship-name {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
}

/* Navigation Buttons */
.ships-nav {
  position: absolute;
  top: 190px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  color: #333;
}

.ships-nav:hover:not(:disabled) {
  background: #fff;
  transform: scale(1.08);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.ships-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.ships-nav-left {
  left: -22px;
}

.ships-nav-right {
  right: -22px;
}

/* Slide-up Animation (for filter change only) */
.slide-up-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Tablet */
@media (max-width: 900px) {
  .ships-container,
  .ships-slider-wrapper {
    padding: 0 3rem;
  }

  .ships-viewport {
    min-height: 400px;
  }

  .ship-image-wrapper {
    height: 320px;
  }

  .ships-nav {
    top: 160px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .ships-carousel {
    padding: 5vh 0;
  }

  .ships-container,
  .ships-slider-wrapper {
    padding: 0 2rem;
  }

  .ships-header {
    margin-bottom: 2rem;
  }

  .ships-heading {
    font-size: 1.6rem;
  }

  .ships-description {
    font-size: 0.9rem;
  }

  .ships-filters {
    margin-bottom: 1.5rem;
    gap: 0.25rem;
  }

  .filter-btn {
    font-size: 1rem;
    margin-right: 0.75rem;
  }

  .ships-viewport {
    min-height: 350px;
  }

  .ship-image-wrapper {
    height: 260px;
  }

  .ship-info {
    padding: 0.75rem 0;
  }

  .ship-name {
    font-size: 1rem;
  }

  .ships-nav {
    width: 36px;
    height: 36px;
    top: 130px;
  }

  .ships-nav-left {
    left: -10px;
  }

  .ships-nav-right {
    right: -10px;
  }

  .ships-nav svg {
    width: 16px;
    height: 16px;
  }
}
</style>
