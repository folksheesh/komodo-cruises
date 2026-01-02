<template>
  <Transition name="fade">
    <div v-if="isOpen" class="search-modal-fixed">
      <!-- Top Bar (Consistent with MenuModal) -->
      <div class="modal-top">
        <div class="modal-logo">Komodo Cruises</div>
        <div class="modal-controls">
          <button class="close-btn" @click="$emit('close')">
            <span class="btn-text">Close Search</span> <span class="close-icon">✕</span>
          </button>
        </div>
      </div>

      <div class="search-modal-inner">

        <!-- Search Input -->
        <div class="search-container">
          <div class="input-wrapper">
            <input type="text" placeholder="Search..." class="search-input" ref="searchInput" />
            <button class="search-submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Categories -->
        <div class="categories-container">
          <p class="categories-label">Refine your search</p>
          <div class="categories-list" :class="{ 'has-selection': selectedCategory }">
            <a href="#" class="category-link" :class="{ 'is-selected': selectedCategory === 'Destinations' }"
              @click.prevent="toggleCategory('Destinations')">Destinations</a>
            <span class="separator">•</span>

            <a href="#" class="category-link" :class="{ 'is-selected': selectedCategory === 'Ships' }"
              @click.prevent="toggleCategory('Ships')">Ships</a>
            <span class="separator">•</span>

            <a href="#" class="category-link" :class="{ 'is-selected': selectedCategory === 'Cabins' }"
              @click.prevent="toggleCategory('Cabins')">Cabins</a>
            <span class="separator">•</span>

            <a href="#" class="category-link" :class="{ 'is-selected': selectedCategory === 'Blog' }"
              @click.prevent="toggleCategory('Blog')">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const searchInput = ref(null)
const selectedCategory = ref(null)

const toggleCategory = (cat) => {
  if (selectedCategory.value === cat) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = cat
  }
}

// Focus input when opened
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      searchInput.value?.focus()
    })
  } else {
    document.body.style.overflow = ''
    selectedCategory.value = null // reset on close
  }
})

// Close functionality
const closeOnEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.search-modal-fixed {
  position: fixed;
  inset: 0;
  background-color: var(--ocean-900);
  /* Blue theme */
  z-index: 9999;
  display: flex;
  flex-direction: column;
  padding: 0;
  color: #fff;
}

/* Header (Match MenuModal) */
.modal-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Top Right Bottom Left */
  padding: 1.5rem 3.5rem 1.5rem var(--edge-pad);
  width: 100%;
}

.modal-logo {
  font-family: var(--font-sans);
  font-size: large;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0;
}

.search-modal-inner {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
}

.close-btn {
  background: none;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s;
}

.close-btn:hover {
  opacity: 1;
}

.close-btn:hover .btn-text {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.close-icon {
  font-size: 1.2rem;
}

/* ... */

/* Mobile adjustments */
@media (max-width: 768px) {
  .modal-logo {
    top: 1rem;
    /* Tablet nav padding */
  }

  .close-btn {
    top: 1rem;
  }
}

@media (max-width: 480px) {
  .modal-logo {
    top: 0.875rem;
    /* Mobile nav padding */
  }

  .close-btn {
    top: 0.875rem;
    font-size: 0.9rem;
  }
}

.search-container {
  width: 100%;
  max-width: 800px;
  margin-bottom: 3rem;
}

.input-wrapper {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  transition: border-color 0.3s;
}

.input-wrapper:focus-within {
  border-color: #fff;
}

.search-input {
  width: 100%;
  background: transparent;
  border: none;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: #fff;
  outline: none;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-submit {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  opacity: 0.8;
  transition: transform 0.2s;
}

.search-submit:hover {
  transform: scale(1.1);
  opacity: 1;
}

.categories-container {
  text-align: center;
  animation: slideUp 0.5s ease-out;
}

.categories-label {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.categories-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

/* 
 LOGIC:
 1. If list is hovered -> dim all children (except hovered one).
 2. If list has selection -> dim all children (except selected one).
 3. Selected one always stays bright.
*/

/* Default state: Bright */
.category-link {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  color: #fff;
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-weight: 300;
  cursor: pointer;
}

/* Hovering the list dims everything */
.categories-list:hover .category-link,
.categories-list:hover .separator {
  opacity: 0.3;
  filter: blur(0.5px);
}

/* But if I select something, list behaves as if "focused" on selection */
.categories-list.has-selection .category-link,
.categories-list.has-selection .separator {
  opacity: 0.3;
  filter: blur(0.5px);
}

/* EXCEPTION: The hovered item stays bright */
.categories-list .category-link:hover {
  opacity: 1 !important;
  filter: blur(0) !important;
  transform: scale(1.05);
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

/* EXCEPTION: The selected item stays bright */
.category-link.is-selected {
  opacity: 1 !important;
  filter: blur(0) !important;
  color: #fff !important;
  text-decoration: none;
  transform: scale(1.05);
}

.separator {
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.5rem;
  transition: opacity 0.3s;
}

/* Animations and mobile adjustments */
/* ... same as before ... */
@media (max-width: 640px) {
  .modal-logo {
    font-size: 1.5rem;
    left: 1.5rem;
    top: 1.5rem;
  }
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Base styles fallback */
:root {
  --font-serif: "Times New Roman", Times, serif;
  /* Fallback */
  --font-sans: Arial, sans-serif;
}
</style>
