<template>
  <!-- Hero Section -->
  <section class="hero-section" ref="heroSectionRef">
    <video
      class="hero-bg-video"
      autoplay
      :muted="isMuted"
      loop
      playsinline
      ref="heroVideo"
    >
      <source src="/src/videos/Komodo.mp4" type="video/mp4" />
    </video>
    <div>
      <h1 class="hero-title">Shores of Wonder</h1>
      <p class="hero-sub">
        Embark on an exclusive voyage through the Komodo Islands.
      </p>
      <!-- <button class="hero-cta" @click="openPlanModal">Plan your trip</button> -->
    </div>

    <!-- Sound Control -->
    <button
      class="hero-sound-control"
      @click="toggleSound"
      :aria-label="isMuted ? 'Unmute' : 'Mute'"
    >
      <svg
        v-if="isMuted"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    </button>
  </section>

  <!-- Destinations Carousel -->
  <DestinationCarousel />

  <!-- Komodo Cruises Section 1: Text Left, Image Right with Video Play Button -->
  <section class="komodo-section">
    <div class="komodo-content">
      <div class="komodo-text">
        <h2 class="komodo-heading">
          From calm waters to soulful treks with ancient Komodo dragons, a
          golden thread throughout every Komodo Cruises experience is a deep
          reverence for the wild and its power to heal.
        </h2>
        <p class="komodo-paragraph">
          Our phinisi vessels and curated voyages across the Komodo Islands have
          been intentionally designed to offer guests the freedom to reflect and
          feel their senses awaken, inviting in wonder and a wholeness that
          comes from truly leaning into nature.
        </p>
      </div>
      <div class="komodo-media" ref="mediaRef1">
        <img
          :src="homeLandscapeImg"
          alt="Komodo landscape"
          loading="lazy"
          ref="imgRef1"
        />
        <button class="play-button" aria-label="Play video">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Komodo Cruises Section 2: Image Left, Text Right -->
  <section class="komodo-section section-alt">
    <div class="komodo-content reverse">
      <div class="komodo-text">
        <h2 class="komodo-heading">
          Dedicated to environmentally conscious hospitality, sustainable
          conservation, and collaborating with local communities since 2015.
        </h2>
        <p class="komodo-paragraph">
          The Komodo Cruises experience is an invitation to share in our love
          and care for the natural world, to be part of something meaningful,
          far-reaching, and much bigger than ourselves.
        </p>
      </div>
      <div class="komodo-media" ref="mediaRef2">
        <img
          :src="homeConservationImg"
          alt="Conservation efforts"
          loading="lazy"
          ref="imgRef2"
        />
      </div>
    </div>
  </section>

  <!-- Komodo Cruises Section 3: Text Left, Image Right -->
  <section class="komodo-section">
    <div class="komodo-content">
      <div class="komodo-text">
        <h2 class="komodo-heading">Telling Komodo's stories.</h2>
        <p class="komodo-subheading">
          Komodo Cruises means "Place of Dragons" in local lore.
        </p>
        <p class="komodo-paragraph">
          Our people are an integral of the Komodo Cruises experience, sharing
          their passion for Indonesia's natural spaces and rich cultures through
          stories and experiences designed to bring you closer to both. In doing
          so, we hope to show you the incredible diversity and inspiration that
          can be found here, and remind you that you always have a home to come
          back to in Komodo.
        </p>
        <p class="komodo-paragraph">
          When the world's wildest places are yours to explore, meaningful bonds
          and memorable moments come naturally. Discover such a bond in this
          episode of the
          <a href="#" class="komodo-link">Voyage Conversations Podcast</a>
          – where local photographers and marine biologists recount their
          experience at Komodo National Park.
        </p>
      </div>
      <div class="komodo-media" ref="mediaRef3">
        <img
          :src="homeCultureImg"
          alt="Komodo stories"
          loading="lazy"
          ref="imgRef3"
        />
      </div>
    </div>
  </section>

  <!-- Komodo Cruises Section 4: Image Left, Text Right (Legacy) -->
  <section class="komodo-section section-alt">
    <div class="komodo-content reverse">
      <div class="komodo-text">
        <p class="komodo-subheading">A legacy unfolds</p>
        <h2 class="komodo-heading">
          Komodo Cruises started in 2015 with a simple wooden boat and a deep
          passion for the ocean.
        </h2>
        <p class="komodo-paragraph">
          This was the start of a legacy that has unfolded over decades – and
          the origin of a brand inspired by family values and an abiding sense
          of purpose that offers guests profound wildlife encounters in
          Indonesia.
        </p>
        <div style="margin-top: 1.5rem">
          <button
            class="hero-cta"
            style="
              color: #333;
              border: 1px solid rgba(0, 0, 0, 0.2);
              background: transparent;
              padding: 0.8rem 2rem;
              font-size: 0.95rem;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            "
          >
            Our Story
          </button>
        </div>
      </div>
      <div class="komodo-media" ref="mediaRef4">
        <img
          :src="homeLegacyImg"
          alt="Our story"
          loading="lazy"
          ref="imgRef4"
        />
      </div>
    </div>
  </section>

  <!-- Activities Carousel -->
  <ActivitiesCarousel />

  <!-- Ships Carousel -->
  <ShipsCarousel />

  <!-- Home footer (visible on /) -->
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

  <!-- Plan Modal -->
  <PlanModal
    :isOpen="isPlanModalOpen"
    @close="closePlanModal"
    @navigate-to-results="navigateToResults"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import PlanModal from "../components/PlanModal.vue";
import DestinationCarousel from "../components/DestinationCarousel.vue";
import ShipsCarousel from "../components/ShipsCarousel.vue";
import ActivitiesCarousel from "../components/ActivitiesCarousel.vue";
import "../styles/pages/home.css";

import homeLandscapeImg from "../images/home-landscape.png";
import homeConservationImg from "../images/home-conservation.png";
import homeCultureImg from "../images/home-culture.png";
import homeLegacyImg from "../images/home-legacy.png";

const router = useRouter();
const isPlanModalOpen = ref(false);
const isMuted = ref(true);
const heroVideo = ref(null);
const heroSectionRef = ref(null);

// Parallax refs
const mediaRef1 = ref(null);
const imgRef1 = ref(null);
const mediaRef2 = ref(null);
const imgRef2 = ref(null);
const mediaRef3 = ref(null);
const imgRef3 = ref(null);
const mediaRef4 = ref(null);
const imgRef4 = ref(null);

let observer = null;

// Parallax logic
function handleScroll() {
  const parallaxItems = [
    { container: mediaRef1.value, img: imgRef1.value },
    { container: mediaRef2.value, img: imgRef2.value },
    { container: mediaRef3.value, img: imgRef3.value },
    { container: mediaRef4.value, img: imgRef4.value },
  ];

  parallaxItems.forEach((item) => {
    if (!item.container || !item.img) return;

    const rect = item.container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate overlap with viewport
    // If rect.top < windowHeight && rect.bottom > 0, it's visible
    if (rect.top < windowHeight && rect.bottom > 0) {
      // Calculate progress: 0 when top enters bottom of viewport, 1 when bottom leaves top
      // Or simpler: offset from center
      const centerOffset = windowHeight / 2 - (rect.top + rect.height / 2);
      // Speed factor
      const speed = 0.15;

      // Move image oppposite to scroll direction
      item.img.style.transform = `translateY(${centerOffset * speed}px)`;
    }
  });
}

let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
}

function toggleSound() {
  isMuted.value = !isMuted.value;
  if (!isMuted.value && heroVideo.value) {
    heroVideo.value.play().catch(() => {});
  }
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    // If hero section is not intersecting (out of view), mute the video
    if (!entry.isIntersecting && !isMuted.value) {
      isMuted.value = true;
    }
  });
}

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Trigger when 10% is visible/invisible to catch "leaving" area
  });

  if (heroSectionRef.value) {
    observer.observe(heroSectionRef.value);
  }

  window.addEventListener("scroll", onScroll);
  handleScroll(); // Initial calculation
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (observer) {
    observer.disconnect();
  }
});

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
</script>
