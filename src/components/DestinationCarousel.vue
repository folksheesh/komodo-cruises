<template>
  <section class="destination-carousel">
    <h2 class="carousel-heading">
      Destinations. Where our passion meets your purpose.
    </h2>
    <p class="carousel-subheading">
      <a href="#">WHERE NEXT: VIEW ALL DESTINATIONS <span>→</span></a>
    </p>

    <div class="carousel-container">
      <!-- Navigation Left -->
      <button
        class="carousel-nav carousel-nav-left"
        @click="prev"
        aria-label="Previous destination"
      >
        <img src="/src/images/arrows/left-arrow.svg" alt="Previous" />
      </button>

      <!-- Slides Track - Infinite Loop -->
      <div
        class="carousel-viewport"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          class="carousel-track"
          :style="{
            transform: `translateX(-${trackOffset}px)`,
          }"
        >
          <div
            v-for="(slide, index) in extendedSlides"
            :key="slide.virtualKey"
            class="carousel-slide"
            :class="{
              'active-slide': isActiveSlide(index),
              'side-slide': isSideSlide(index),
            }"
            :style="{ width: `${slideWidth}px`, marginRight: `${slideGap}px` }"
          >
            <img :src="slide.image" :alt="slide.title" class="slide-image" />
          </div>
        </div>
      </div>

      <!-- Navigation Right -->
      <button
        class="carousel-nav carousel-nav-right"
        @click="next"
        aria-label="Next destination"
      >
        <img src="/src/images/arrows/right-arrow.svg" alt="Next" />
      </button>
    </div>

    <!-- Content BELOW image -->
    <div class="carousel-content">
      <div class="carousel-content-left">
        <span class="carousel-location">{{ currentDestination.location }}</span>
        <h3 class="carousel-title">{{ currentDestination.title }}</h3>
      </div>
      <div class="carousel-content-right">
        <p class="carousel-description">{{ currentDestination.description }}</p>
        <a :href="currentDestination.ctaLink" class="carousel-cta"
          >{{ currentDestination.ctaText }} <span>→</span></a
        >
      </div>
    </div>

    <!-- Dot indicators (mobile only) -->
    <div class="carousel-dots">
      <button
        v-for="(_, i) in originalDestinations"
        :key="i"
        class="carousel-dot"
        :class="{ active: i === realIndex }"
        @click="goTo(i)"
        :aria-label="`Go to slide ${i + 1}`"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import komodoImg from "../images/dest-komodo.png";
import labuanBajoImg from "../images/dest-labuan-bajo.png";
import togeanImg from "../images/dest-togean.png";

const originalDestinations = [
  {
    location: "INDONESIA",
    title: "Komodo National Park",
    description:
      "Home to the legendary Komodo dragons and pristine marine life. Discover ancient wilderness and untouched natural beauty.",
    ctaText: "EXPLORE THE PARK",
    ctaLink: "#",
    image: komodoImg,
  },
  {
    location: "INDONESIA",
    title: "Labuan Bajo",
    description:
      "Gateway to the Komodo Islands with stunning sunsets and vibrant culture. Experience the perfect blend of adventure and relaxation.",
    ctaText: "DISCOVER LABUAN BAJO",
    ctaLink: "#",
    image: labuanBajoImg,
  },
  {
    location: "INDONESIA",
    title: "Togean Islands",
    description:
      "Remote paradise with crystal-clear waters and untouched coral reefs. A hidden gem for those seeking true escape.",
    ctaText: "VISIT TOGEAN",
    ctaLink: "#",
    image: togeanImg,
  },
];

const totalOriginal = originalDestinations.length; // 3

// Create an EXTREMELY large buffer - 101 sets = 303 slides
// User can click 100+ times in either direction without ever reaching the edge
// This eliminates the need for any "jump" logic entirely
const NUM_SETS = 101;
const extendedSlides = computed(() => {
  const slides = [];
  for (let set = 0; set < NUM_SETS; set++) {
    originalDestinations.forEach((dest, idx) => {
      slides.push({
        ...dest,
        virtualKey: `set${set}-${idx}`,
        originalIndex: idx,
      });
    });
  }
  return slides;
});

// Start in the middle of our extended slides
const centerPosition = Math.floor(NUM_SETS / 2) * totalOriginal; // Position 150 (middle of 303)
const currentPosition = ref(centerPosition);

const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1200
);

// Get the real index (0, 1, or 2) for display purposes
const realIndex = computed(() => {
  return (
    ((currentPosition.value % totalOriginal) + totalOriginal) % totalOriginal
  );
});

const currentDestination = computed(
  () => originalDestinations[realIndex.value]
);

// Responsive slide dimensions
const slideWidth = computed(() => {
  if (windowWidth.value <= 480) return windowWidth.value * 0.765;
  if (windowWidth.value <= 768) return windowWidth.value * 0.675;
  return Math.min(windowWidth.value * 0.5, 750);
});

const slideGap = computed(() => {
  if (windowWidth.value <= 768) return 10;
  return 20;
});

// Calculate the offset to center the active slide
const trackOffset = computed(() => {
  const slideFullWidth = slideWidth.value + slideGap.value;
  const viewportCenter = windowWidth.value / 2;
  const slideCenter = slideWidth.value / 2;
  const activeSlideStart = currentPosition.value * slideFullWidth;
  return activeSlideStart - viewportCenter + slideCenter;
});

// Check if slide at given position is active
function isActiveSlide(index) {
  return index === currentPosition.value;
}

// Check if slide at given position is a side slide
function isSideSlide(index) {
  return (
    index === currentPosition.value - 1 || index === currentPosition.value + 1
  );
}

// Simple navigation - no reset needed with such a large buffer
function next() {
  currentPosition.value++;
}

function prev() {
  currentPosition.value--;
}

function goTo(index) {
  const currentReal = realIndex.value;
  const diff = index - currentReal;
  if (diff !== 0) {
    currentPosition.value += diff;
  }
}

function handleResize() {
  windowWidth.value = window.innerWidth;
}

// Touch/Swipe handling for mobile
const touchStartX = ref(0);
const touchEndX = ref(0);
const MIN_SWIPE_DISTANCE = 50;

function handleTouchStart(e) {
  touchStartX.value = e.changedTouches[0].screenX;
}

function handleTouchMove(e) {
  touchEndX.value = e.changedTouches[0].screenX;
}

function handleTouchEnd() {
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

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.destination-carousel {
  background: #fbfaf5;
  padding: 6vh 0 8vh;
  text-align: center;
  overflow: hidden;
}

.carousel-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  letter-spacing: 0.01em;
}

.carousel-subheading {
  margin-bottom: 2.5rem;
}

.carousel-subheading a {
  font-size: 0.85rem;
  color: #8b4513;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  transition: opacity 0.2s;
}

.carousel-subheading a:hover {
  opacity: 0.7;
}

.carousel-subheading a span {
  margin-left: 0.25rem;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

.carousel-viewport {
  width: 100%;
  overflow: visible;
}

.carousel-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  width: max-content;
}

.carousel-slide {
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  opacity: 0.4;
  transform: scale(0.95);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.carousel-slide.active-slide {
  opacity: 1;
  transform: scale(1);
  z-index: 5;
}

/* Side slides - slides next to active one */
.carousel-slide.side-slide {
  opacity: 0.5;
  transform: scale(0.9);
  z-index: 3;
}

/* Disable transition when jumping back to center */
.carousel-track.no-transition {
  transition: none !important;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 16 / 10;
}

/* Navigation Buttons - Outside image */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.carousel-nav:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.08);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.carousel-nav img {
  width: 18px;
  height: 18px;
  opacity: 0.6;
}

.carousel-nav-left {
  left: 1.5rem;
}

.carousel-nav-right {
  right: 1.5rem;
}

/* Content Below Image */
.carousel-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 900px;
  margin: 2.5rem auto 0;
  padding: 0 2rem;
  padding: 0 2rem;
  text-align: left;
}

.carousel-location {
  display: block;
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
}

.carousel-title {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
}

.carousel-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #555;
  margin: 0 0 1.5rem;
}

.carousel-cta {
  font-size: 0.8rem;
  color: #8b4513;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  transition: opacity 0.2s;
}

.carousel-cta:hover {
  opacity: 0.7;
}

.carousel-cta span {
  margin-left: 0.25rem;
}

/* Dot Indicators - Hidden on desktop */
.carousel-dots {
  display: none;
}

/* Tablet */
@media (max-width: 768px) {
  .destination-carousel {
    padding: 4vh 0 5vh;
  }

  .carousel-heading {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }

  .carousel-subheading {
    margin-bottom: 1.5rem;
  }

  .carousel-subheading a {
    font-size: 0.75rem;
  }

  .carousel-nav {
    width: 40px;
    height: 40px;
  }

  .carousel-nav-left {
    left: 0.5rem;
  }

  .carousel-nav-right {
    right: 0.5rem;
  }

  .carousel-nav img {
    width: 16px;
    height: 16px;
  }

  .carousel-content {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
  }

  .carousel-title {
    font-size: 1.4rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .destination-carousel {
    padding: 2.5rem 0;
    text-align: left;
  }

  .carousel-heading {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    padding: 0 1.5rem;
    text-align: left;
  }

  .carousel-subheading {
    margin-bottom: 1.25rem;
    text-align: left;
    padding: 0 1.5rem;
  }

  .carousel-subheading {
    margin-bottom: 1.25rem;
  }

  .carousel-subheading a {
    font-size: 0.7rem;
  }

  .carousel-nav {
    width: 36px;
    height: 36px;
  }

  .carousel-nav-left {
    left: 0.25rem;
  }

  .carousel-nav-right {
    right: 0.25rem;
  }

  .carousel-nav img {
    width: 14px;
    height: 14px;
  }

  .carousel-content {
    text-align: left;
    gap: 1.5rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
  }

  .carousel-content-left,
  .carousel-content-right {
    text-align: left;
  }

  .carousel-location {
    font-size: 0.7rem;
    margin-bottom: 0.75rem;
  }

  .carousel-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .carousel-description {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }

  .carousel-cta {
    font-size: 0.75rem;
  }

  /* Show dot indicators on mobile */
  .carousel-dots {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-top: 1.5rem;
    padding-left: 1.5rem;
  }

  .carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: #ccc;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    padding: 0;
  }

  .carousel-dot.active {
    background: #1a1a1a;
    transform: scale(1.2);
  }

  .carousel-dot:hover {
    background: #888;
  }
}
</style>
