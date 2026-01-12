<template>
  <section class="activities-carousel" data-nav-theme="light">
    <!-- Left Content -->
    <div class="activities-content">
      <h2 class="activities-heading">What to experience?</h2>
      <p class="activities-description">
        From underwater adventures to peaceful sunsets, our carefully curated
        activities invite you to discover the magic of Indonesia's hidden
        treasures.
      </p>
      <button class="activities-cta">Explore activities</button>
    </div>

    <!-- Right Images Slider -->
    <div class="activities-slider">
      <div
        class="activities-track"
        ref="trackRef"
        @scroll="onScroll"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
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
        class="activity-dot"
        :class="{ active: index === currentIndex }"
        @click="scrollToSlide(index)"
        :aria-label="`Go to ${activities[index].title}`"
      ></button>
    </div>

    <!-- Mobile-only CTA -->
    <button class="activities-cta mobile-only">Explore activities</button>

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
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

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
const trackRef = ref(null);

const slideWidth = computed(() => {
  if (windowWidth.value <= 768) {
    return windowWidth.value;
  }
  return windowWidth.value * 0.35; // Each slide is 35% of viewport on desktop
});

const trackOffset = computed(() => {
  // Disable JS transform on mobile to allow native scroll
  if (windowWidth.value <= 768) return 0;
  return currentIndex.value * slideWidth.value;
});

const maxIndex = computed(() => {
  if (windowWidth.value <= 768) return activities.length - 1;
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

function scrollToSlide(index) {
  if (windowWidth.value <= 768 && trackRef.value) {
    const w = windowWidth.value;
    trackRef.value.scrollTo({ left: index * w, behavior: "smooth" });
  } else {
    goTo(index);
  }
}

function handleResize() {
  windowWidth.value = window.innerWidth;
}

// Touch/Swipe handling for desktop (mobile already uses native scroll)
const touchStartX = ref(0);
const touchEndX = ref(0);
const MIN_SWIPE_DISTANCE = 50;

function handleTouchStart(e) {
  // Only handle on desktop
  if (windowWidth.value > 768) {
    touchStartX.value = e.changedTouches[0].screenX;
  }
}

function handleTouchMove(e) {
  if (windowWidth.value > 768) {
    touchEndX.value = e.changedTouches[0].screenX;
  }
}

function handleTouchEnd() {
  // Only handle on desktop
  if (windowWidth.value > 768) {
    const distance = touchStartX.value - touchEndX.value;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    // Reset
    touchStartX.value = 0;
    touchEndX.value = 0;
  }
}

function onScroll(e) {
  if (windowWidth.value <= 768) {
    const scrollLeft = e.target.scrollLeft;
    const w = windowWidth.value;
    // Calculate index based on scroll position
    const idx = Math.round(scrollLeft / w);
    currentIndex.value = idx;
  }
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

.mobile-only {
  display: none;
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
  margin-bottom: 30px;
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

.activities-nav svg {
  width: 20px;
  height: 20px;
}

/* Mobile */
@media (max-width: 768px) {
  .activities-carousel {
    flex-direction: column;
    height: auto;
    min-height: auto;
  }

  .activities-content {
    position: relative;
    width: 100%;
    height: auto;
    padding: 2rem 2rem 1rem;
    text-align: center;
    background: #1e3a5f;
    z-index: 30;
  }

  .activities-heading {
    font-size: 2rem;
  }

  .activities-description {
    font-size: 0.95rem;
    max-width: 100%;
    margin-bottom: 0;
    margin-bottom: 1.5rem !important;
  }

  /* Hide original CTA on mobile */
  .activities-content .activities-cta {
    display: none;
  }

  .mobile-only {
    display: inline-block;
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    margin-top: 0;
    font-size: 0.8rem;
    padding: 0.8rem 1.5rem;
    white-space: nowrap;
  }

  .activities-slider {
    position: relative;
    width: 100%;
    height: auto;
    flex: 1;
    padding: 0 0 9rem 0 !important;
    overflow: hidden;
  }

  .activities-track {
    padding-left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    /* Hide scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .activities-track::-webkit-scrollbar {
    display: none;
  }

  .activity-slide {
    width: 100vw;
    margin-right: 0;
    height: auto; /* Let image decide height */
    flex-shrink: 0;
    padding: 0 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
    position: relative;
  }

  .activity-slide .activity-image {
    border-radius: 0;
    height: 45vh; /* Reduced height */
    width: 100%;
    object-fit: cover;
  }

  .activity-info {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    padding: 1.5rem 1rem;
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
    bottom: 7.5rem;
    margin-bottom: 0;
    padding-bottom: 0px;
    width: 100%;
  }

  .activities-nav {
    display: none !important;
  }
}
</style>
