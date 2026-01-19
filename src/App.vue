<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import SearchModal from "./components/SearchModal.vue";
import MenuModal from "./components/MenuModal.vue";
import PlanModal from "./components/PlanModal.vue";
import Footer from "./components/Footer.vue";

const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);
const searchOpen = ref(false);
const menuOpen = ref(false);
const planOpen = ref(false);
const inDarkSection = ref(false);

const currentLang = ref("EN");
const langOpen = ref(false);
const languages = [
  { code: "EN", label: "English" },
  { code: "ID", label: "Indonesia" },
  { code: "ZH", label: "Chinese" },
  { code: "ES", label: "Spanish" },
  { code: "FR", label: "French" },
];

const toggleLang = () => {
  langOpen.value = !langOpen.value;
};

const selectLang = (lang) => {
  currentLang.value = lang.code;
  langOpen.value = false;
};

const handleScroll = () => {
  // Check if scrolled past hero (approx 80vh or 600px)
  isScrolled.value = window.scrollY > window.innerHeight * 0.8;

  // Check if nav is over a dark section (like ActivitiesCarousel)
  const darkSections = document.querySelectorAll('[data-nav-theme="light"]');
  let isOverDark = false;

  darkSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // Nav is about 80px tall, check if it's overlapping
    if (rect.top <= 80 && rect.bottom >= 80) {
      isOverDark = true;
    }
  });

  inDarkSection.value = isOverDark;
};

const openSearchFromMenu = () => {
  menuOpen.value = false;
  setTimeout(() => {
    searchOpen.value = true;
  }, 300); // Small delay for fade out
};

const openPlanModal = () => {
  if (route.path === "/results") {
    router.push("/find-reservation");
  } else {
    planOpen.value = true;
  }
};

const handlePlanNavigate = () => {
  planOpen.value = false;
  router.push("/results");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <SearchModal :isOpen="searchOpen" @close="searchOpen = false" />
    <PlanModal
      :isOpen="planOpen"
      @close="planOpen = false"
      @navigate-to-results="handlePlanNavigate"
    />
    <MenuModal
      :isOpen="menuOpen"
      @close="menuOpen = false"
      @open-search="openSearchFromMenu"
    />

    <header
      :class="[
        'nav-container',
        {
          'nav-overlay': $route.path === '/',
          'home-nav': $route.path === '/',
          scrolled: isScrolled,
          'nav-light-theme': inDarkSection,
          'navbar-result':
            $route.path === '/results' || $route.path === '/find-reservation',
        },
      ]"
    >
      <nav class="nav-inner plan-mode" v-if="$route.meta.planHeader">
        <div
          style="
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--ocean-900);
          "
        >
          <div class="brand">
            <span class="desktop-only">Plan your trip</span>
            <span class="mobile-only">Plan trip</span>
          </div>
        </div>
        <router-link class="link-close close-btn-style" to="/">
          <span class="btn-text">Close</span>
          <span class="close-icon">âœ•</span>
        </router-link>
      </nav>

      <nav class="nav-inner" v-else>
        <!-- LEFT: Menu Trigger & Language -->
        <div class="nav-left">
          <span class="nav-menu" @click="menuOpen = true" title="Menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </span>
          <div
            class="nav-lang-wrapper"
            @click="toggleLang"
            title="Select Language"
          >
            <span class="nav-lang">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                style="margin-right: 6px"
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
              {{ currentLang }}
            </span>
            <div v-if="langOpen" class="lang-dropdown">
              <div
                v-for="lang in languages"
                :key="lang.code"
                class="lang-option"
                @click.stop="selectLang(lang)"
              >
                {{ lang.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER: Brand Logo -->
        <div class="nav-center">
          <router-link to="/" class="brand-link">
            <span class="brand-chip">KOMODO CRUISES</span>
          </router-link>
        </div>

        <!-- RIGHT: Login, Search, Book -->
        <div class="nav-right">
          <button
            class="nav-text-item nav-plan-item"
            @click="openPlanModal"
            style="white-space: nowrap"
          >
            <template v-if="$route.path === '/results'">
              FIND RESERVATION
            </template>
            <template v-else>
              <span class="desktop-only">PLAN YOUR TRIP</span>
              <span class="mobile-only">PLAN TRIP</span>
            </template>
          </button>
          <span class="nav-text-item">LOGIN</span>

          <span class="nav-search" @click="searchOpen = true" title="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>

          <router-link
            v-if="
              $route.path !== '/' &&
              $route.path !== '/results' &&
              $route.path !== '/find-reservation'
            "
            to="/plan"
            class="btn-book-pill"
          >
            BOOK NOW
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              style="margin-left: 8px"
            >
              <path d="M2 20h20M12 4v12m0 0l-4-4m4 4l4-4" />
              <!-- Replaced icon with a simple arrow or bell as placeholder, standard book icon often calendar or arrow -->
            </svg>
          </router-link>
        </div>
      </nav>
    </header>
    <router-view />
    <Footer v-if="!$route.meta.planHeader" @open-plan="openPlanModal" />
  </div>
</template>
