<template>
  <section class="hero-section">
    <div>
      <h1 class="hero-title">Shores of Wonder</h1>
      <p class="hero-sub">Embark on an exclusive voyage through the Komodo Islands.</p>
      <button class="hero-cta" @click="openPlanModal">Plan your trip</button>
    </div>
  </section>

  <!-- Story block revealed on scroll -->
  <section class="story-section">
    <div class="story-grid container">
      <div class="story-media reveal">
        <img src="/src/images/komodo.jpg" alt="Komodo landscape" loading="lazy" />
      </div>
      <div class="story-copy reveal">
        <p class="eyebrow">A story unfolds</p>
        <h2 class="story-title">Journeys shaped by the Komodo Islands</h2>
        <p class="story-text">From quiet sunrises over pink shores to manta-filled seas, our voyages are crafted to reveal the soul of this archipelago with care and purpose.</p>
        <button class="story-cta" @click="openPlanModal">Our story</button>
      </div>
    </div>
  </section>

  <!-- Experience block (reversed layout) -->
  <section class="story-section alt">
    <div class="story-grid reverse container">
      <div class="story-media reveal">
        <img src="/src/images/komodo.jpg" alt="Dive with mantas" loading="lazy" />
      </div>
      <div class="story-copy reveal">
        <p class="eyebrow">Crafted voyages</p>
        <h2 class="story-title">Sail, dive, and wander across wild horizons</h2>
        <p class="story-text">Every itinerary balances unhurried exploration with effortless comfort—private landings, expert guides, and moments designed to feel both rare and personal.</p>
        <button class="story-cta" @click="openPlanModal">View experiences</button>
      </div>
    </div>
  </section>

  <!-- Stewardship block -->
  <section class="story-section">
    <div class="story-grid container">
      <div class="story-media reveal">
        <img src="/src/images/komodo.jpg" alt="Conservation in Komodo" loading="lazy" />
      </div>
      <div class="story-copy reveal">
        <p class="eyebrow">Stewardship</p>
        <h2 class="story-title">Travel that protects what makes this place extraordinary</h2>
        <p class="story-text">We partner with local communities and conservation programs so your journey supports education, marine research, and livelihoods across the islands.</p>
        <button class="story-cta" @click="openPlanModal">Our commitment</button>
      </div>
    </div>
  </section>

  <!-- Home footer (visible on /) -->
  <footer class="home-footer">
    <div class="home-footer-inner container">
      <!-- Top row: Brand + Links -->
      <div class="hf-top">
        <div class="hf-brand">
          <div class="hf-logo">Komodo Cruises</div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+6285282296450">+62 852-8229-6450</a>
          </div>
          <div class="hf-contact-address">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Graha Permata Pancoran, Jl. KH. Guru Amin Blok A5, Pancoran, Jakarta Selatan 12780</span>
          </div>
        </div>
      </div>
      <!-- Bottom row: Copyright -->
      <div class="hf-bottom">
        <div class="hf-copyright">© {{ new Date().getFullYear() }} Komodo Cruises | PT CANARD MONEY INDONESIA</div>
        <div class="hf-disclaimer">All voyages subject to weather and park regulations.</div>
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
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import PlanModal from '../components/PlanModal.vue'
import '../styles/pages/home.css'

const router = useRouter()
const isPlanModalOpen = ref(false)
let observer

function openPlanModal() {
  isPlanModalOpen.value = true
}

function closePlanModal() {
  isPlanModalOpen.value = false
}

function navigateToResults() {
  isPlanModalOpen.value = false
  router.push('/results')
}

// Reveal on scroll using IntersectionObserver
onMounted(async () => {
  await nextTick()
  const elements = Array.from(document.querySelectorAll('.reveal'))
  if (!elements.length) return

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  elements.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
