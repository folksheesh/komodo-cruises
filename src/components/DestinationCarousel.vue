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

      <!-- Slides Track -->
      <div class="carousel-viewport">
        <div
          class="carousel-track"
          :style="{
            transform: `translateX(-${trackOffset}px)`,
            paddingLeft: trackPadding,
          }"
        >
          <div
            v-for="(dest, index) in destinations"
            :key="index"
            class="carousel-slide"
            :class="{ 'active-slide': index === currentIndex }"
            :style="{ width: `${slideWidth}px`, marginRight: `${slideGap}px` }"
          >
            <img :src="dest.image" :alt="dest.title" class="slide-image" />
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
        v-for="(_, i) in destinations"
        :key="i"
        class="carousel-dot"
        :class="{ active: i === currentIndex }"
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

const destinations = [
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

const currentIndex = ref(0);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1200
);

const currentDestination = computed(() => destinations[currentIndex.value]);

// Responsive slide dimensions
const slideWidth = computed(() => {
  if (windowWidth.value <= 480) return windowWidth.value * 0.765;
  if (windowWidth.value <= 768) return windowWidth.value * 0.675;
  return Math.min(windowWidth.value * 0.62, 950); // Larger on desktop
});

const slideGap = computed(() => {
  if (windowWidth.value <= 768) return 10;
  return 20;
});

const trackOffset = computed(() => {
  return currentIndex.value * (slideWidth.value + slideGap.value);
});

const trackPadding = computed(() => {
  // On mobile, align to left with small padding; on desktop, center the first slide
  if (windowWidth.value <= 480) {
    return "1.5rem";
  }
  return `calc(50% - ${slideWidth.value / 2}px)`;
});

function next() {
  currentIndex.value = (currentIndex.value + 1) % destinations.length;
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + destinations.length) % destinations.length;
}

function goTo(index) {
  currentIndex.value = index;
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
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: max-content;
}

.carousel-slide {
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  opacity: 0.4;
  transform: scale(0.95);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.carousel-slide.active-slide {
  opacity: 1;
  transform: scale(1);
  z-index: 5;
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
