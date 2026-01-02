<template>
  <section class="activities-carousel" data-nav-theme="light">
    <!-- Left Content -->
    <div class="activities-content">
      <h2 class="activities-heading">What to experience?</h2>
      <p class="activities-description">
        From underwater adventures to peaceful sunsets, our carefully curated
        activities invite you to discover the magic of Indonesia's hidden
        treasures. Every moment is designed to awaken your senses and create
        lasting memories.
      </p>
      <button class="activities-cta">Explore activities</button>
    </div>

    <!-- Right Images Slider -->
    <div class="activities-slider">
      <div
        class="activities-track"
        :style="{ transform: `translateX(-${trackOffset}px)` }"
      >
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="activity-slide"
          :class="{ active: index === currentIndex }"
        >
          <img
            :src="activity.image"
            :alt="activity.title"
            class="activity-image"
          />
          <div class="activity-info">
            <h3 class="activity-title">{{ activity.title }}</h3>
            <p class="activity-desc">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Dot Navigation -->
    <div class="activities-dots">
      <button
        v-for="(_, index) in activities"
        :key="index"
        v-show="index <= maxIndex"
        class="activity-dot"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
        :aria-label="`Go to ${activities[index].title}`"
      ></button>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="activities-nav activities-nav-left"
      @click="prev"
      :disabled="currentIndex === 0"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button
      class="activities-nav activities-nav-right"
      @click="next"
      :disabled="currentIndex >= maxIndex"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import activitySnorkeling from "../images/activity-snorkeling.png";
import activityRelaxing from "../images/activity-relaxing.png";
import activityHiking from "../images/activity-hiking.png";
import activityCommunity from "../images/activity-community.png";
import activityWildlife from "../images/activity-wildlife.png";
import activityBeach from "../images/activity-beach.png";
import activityStargazing from "../images/activity-stargazing.png";

const activities = [
  {
    title: "Snorkeling & Diving",
    description: "Explore vibrant coral reefs and marine life",
    image: activitySnorkeling,
  },
  {
    title: "Relaxing & Sunbathing",
    description: "Unwind on pristine decks and secluded beaches",
    image: activityRelaxing,
  },
  {
    title: "Hiking & Viewpoints",
    description: "Trek to breathtaking panoramic vistas",
    image: activityHiking,
  },
  {
    title: "Local Community Immersion",
    description: "Connect with authentic Indonesian culture",
    image: activityCommunity,
  },
  {
    title: "Wildlife Spotting",
    description: "Encounter Komodo dragons in their habitat",
    image: activityWildlife,
  },
  {
    title: "Beach Exploration",
    description: "Discover hidden coves and pristine shores",
    image: activityBeach,
  },
  {
    title: "Stargazing",
    description: "Marvel at the Milky Way from open waters",
    image: activityStargazing,
  },
];

const currentIndex = ref(0);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1200
);

const slideWidth = computed(() => {
  if (windowWidth.value <= 768) {
    // Mobile: Full width for single image display
    return windowWidth.value;
  }
  return windowWidth.value * 0.35; // Each slide is 35% of viewport on desktop
});

const trackOffset = computed(() => {
  return currentIndex.value * slideWidth.value;
});

const maxIndex = computed(() => {
  if (windowWidth.value <= 768) return activities.length - 1;
  // On desktop, we want to stop before the empty space appears
  // Container is 65vw, Slide is 35vw + 1rem gap
  // Total width needed = length * slideWidth
  // Max Offset = TotalWidth - ContainerWidth

  // Simplified: Stop 1 slide early because 2 fit on screen
  return activities.length - 2;
});

function next() {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function goTo(index) {
  currentIndex.value = Math.min(index, maxIndex.value);
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
.activities-carousel {
  position: relative;
  height: 100vh;
  min-height: 650px;
  display: flex;
  background: #1e3a5f;
  overflow: hidden;
}

.activities-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  background: #1e3a5f;
  z-index: 10;
}

.activities-heading {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  color: #fff;
  margin: 0 0 1.5rem;
  line-height: 1.2;
}

.activities-description {
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2.5rem;
  max-width: 380px;
}

.activities-cta {
  display: inline-block;
  width: fit-content;
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none;
  letter-spacing: 0.02em;
}

.activities-cta:hover {
  background: #fff;
  color: #1e3a5f;
}

/* Right Slider */
.activities-slider {
  position: absolute;
  right: 0;
  top: 0;
  width: 65%;
  height: 100%;
  overflow: hidden;
  padding: 15vh 2rem; /* Further increased top/bottom padding to reduce image height */
  display: flex;
  flex-direction: column;
}

.activities-track {
  display: flex;
  height: 100%;
  gap: 1rem;
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.activity-slide {
  flex-shrink: 0;
  width: 53.85%; /* 35% of the page / 0.65 = 53.85% of slider */
  height: 100%;
  position: relative;
  overflow: hidden;
}

.activity-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.activity-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.activity-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  margin: 0 0 0.5rem;
}

.activity-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Dot Navigation */
.activities-dots {
  position: absolute;
  bottom: 1.5rem;
  left: 35%;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  z-index: 20;
  padding-bottom: 20px;
}

.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.activity-dot.active {
  background: #fff;
  transform: scale(1.3);
}

.activity-dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

/* Navigation Arrows */
.activities-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 20;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  color: #1e3a5f;
}

.activities-nav:hover:not(:disabled) {
  background: #fff;
  transform: translateY(-50%) scale(1.1);
}

.activities-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.activities-nav-left {
  left: 37%;
}

.activities-nav-right {
  right: 2rem;
}

/* Mobile */
@media (max-width: 768px) {
  .activities-carousel {
    flex-direction: column;
    height: 100vh;
  }

  .activities-content {
    position: relative;
    width: 100%;
    height: auto;
    padding: 2rem 2rem 1.5rem;
    text-align: center;
    background: #1e3a5f;
  }

  .activities-heading {
    font-size: 2rem;
  }

  .activities-description {
    font-size: 0.95rem;
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  .activities-cta {
    margin: 0 auto;
  }

  .activities-slider {
    position: relative;
    width: 100%;
    height: auto;
    flex: 1;
    padding: 1rem 0 2.5rem 0 !important;
    overflow: hidden;
  }

  .activities-track {
    padding-left: 0;
    height: auto; /* Let content define height */
    display: flex;
    align-items: flex-start;
    gap: 0; /* Remove gap for pixel-perfect sliding */
  }

  .activity-slide {
    width: 100vw;
    margin-right: 0;
    height: auto;
    flex-shrink: 0;
    padding: 0 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .activity-slide .activity-image {
    border-radius: 0;
    height: 50vh;
    width: 100%;
    object-fit: cover;
  }

  .activity-info {
    position: static;
    background: transparent;
    padding: 1rem 0.5rem 0; /* Gap between image and text */
    text-align: center;
    width: 100%;
  }

  .activity-title {
    font-size: 1.15rem;
  }

  .activity-desc {
    font-size: 0.85rem;
  }

  .activities-dots {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
  }

  .activities-nav {
    width: 36px;
    height: 36px;
    top: 50%; /* Center relative to the container, not track */
    transform: translateY(-50%);
    margin-top: -1rem; /* Adjust for padding/dots */
    z-index: 30; /* Ensure on top */
  }

  /* Position buttons exactly at the vertical center of the 50vh image */
  /* Top padding (1rem) + Half image height (25vh) */
  .activities-nav {
    top: calc(1rem + 25vh);
    bottom: auto;
    transform: translateY(-50%);
    margin: 0;
  }

  .activities-nav-left {
    left: 2rem;
  }

  .activities-nav-right {
    right: 2rem;
  }

  .activities-nav svg {
    width: 16px;
    height: 16px;
  }
}
</style>
