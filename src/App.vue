<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SearchModal from './components/SearchModal.vue'
import MenuModal from './components/MenuModal.vue'

const isScrolled = ref(false)
const searchOpen = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  // Check if scrolled past hero (approx 80vh or 600px)
  isScrolled.value = window.scrollY > window.innerHeight * 0.8
}

const openSearchFromMenu = () => {
  menuOpen.value = false
  setTimeout(() => {
    searchOpen.value = true
  }, 300) // Small delay for fade out
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <SearchModal :isOpen="searchOpen" @close="searchOpen = false" />
    <MenuModal :isOpen="menuOpen" @close="menuOpen = false" @open-search="openSearchFromMenu" />

    <header
      :class="['nav-container', { 'nav-overlay': $route.path === '/', 'home-nav': $route.path === '/', 'scrolled': isScrolled }]">
      <nav class="nav-inner plan-mode" v-if="$route.meta.planHeader">
        <div style="display:flex; align-items:center; gap:.75rem; color: var(--ocean-900)">
          <div class="brand">Plan your trip</div>
        </div>
        <router-link class="link-close close-btn-style" to="/">
          <span class="btn-text">Close</span> <span class="close-icon">✕</span>
        </router-link>
      </nav>
      <nav class="nav-inner" v-else-if="$route.path === '/results'">
        <div class="nav-left">
          <span class="brand-text">Komodo Cruises</span>
        </div>
        <div class="nav-right">
          <router-link to="/" class="home-link">
            Back to Home
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="logout-icon" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </router-link>
        </div>
      </nav>
      <nav class="nav-inner" v-else>
        <div class="nav-left">
          <span class="brand-chip">Komodo Cruises</span>
        </div>
        <div class="nav-right">
          <router-link v-if="$route.path !== '/'" to="/plan" class="btn-plan">Plan your trip</router-link>

          <!-- Search Trigger -->
          <span class="nav-search" @click="searchOpen = true" style="cursor: pointer;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="vertical-align:middle;margin-right:4px">
              <circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="2" />
              <line x1="15.2" y1="15.2" x2="19" y2="19" stroke="currentColor" stroke-width="2" />
            </svg>
            <span class="nav-label">Search</span>
          </span>

          <!-- Menu Trigger -->
          <span class="nav-menu" @click="menuOpen = true" style="cursor: pointer;">
            <span class="nav-label">Menu</span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor"
              style="vertical-align:middle;margin-left:6px">
              <rect y="6" width="28" height="3" rx="1.5" />
              <rect y="13" width="28" height="3" rx="1.5" />
              <rect y="20" width="28" height="3" rx="1.5" />
            </svg>
          </span>
        </div>
      </nav>
    </header>
    <router-view />
    <footer v-if="!$route.meta.planHeader && $route.path !== '/'" class="site-footer mt-16">
      <div class="footer-inner container text-sm">© {{ new Date().getFullYear() }} Komodo Cruises</div>
    </footer>
  </div>

</template>
