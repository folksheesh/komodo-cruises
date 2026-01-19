<template>
  <footer class="home-footer">
    <div class="home-footer-inner container">
      <!-- Top row: Brand + Links -->
      <div class="hf-top">
        <div class="hf-brand">
          <div class="hf-logo">KOMODO CRUISES</div>
          <div class="hf-copy">Rare journeys across the Komodo Islands.</div>
        </div>
        <nav class="hf-links">
          <a href="#" @click.prevent="$emit('open-plan')">Plan your trip</a>
          <router-link to="/plan">Experiences</router-link>
          <router-link to="/policies#privacy">Terms and Conditions</router-link>
          <a href="mailto:hello@komodocruises.com">Contact</a>
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
</template>

<script setup>
defineEmits(["open-plan"]);
</script>

<style scoped>
/* ---- Home footer ---- */
.home-footer {
  background: var(--ocean-900);
  color: #fff;
  margin-top: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.home-footer-inner {
  display: flex;
  flex-direction: column;
  padding: 3rem var(--edge-pad) 2rem;
}

/* Top row with 3-column grid */
.hf-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr;
  gap: 3rem;
  align-items: start;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.hf-logo {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  margin-bottom: 0.5rem;
}

.hf-copy {
  color: #c5d4e8;
  opacity: 0.9;
  line-height: 1.6;
  font-size: 0.95rem;
}

.hf-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.hf-links a {
  color: #e8eef6;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.5;
  transition: opacity 0.2s;
}

.hf-links a:hover {
  opacity: 0.75;
  text-decoration: underline;
}

.hf-contact {
  color: #e8eef6;
}

.hf-contact-title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}

.hf-contact-phone,
.hf-contact-address {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.hf-contact-phone svg,
.hf-contact-address svg {
  flex-shrink: 0;
  margin-top: 3px;
  opacity: 0.8;
}

.hf-contact-phone a {
  color: #e8eef6;
  text-decoration: none;
  font-weight: 500;
}

.hf-contact-phone a:hover {
  text-decoration: underline;
}

.hf-contact-address span {
  font-size: 0.9rem;
  line-height: 1.55;
  color: #c5d4e8;
}

/* Bottom row */
.hf-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  font-size: 0.85rem;
  color: #a8bdd4;
}

.hf-copyright {
  font-weight: 500;
}

.hf-disclaimer {
  opacity: 0.8;
}

@media (max-width: 900px) {
  .hf-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* ===== FOOTER MOBILE POLISH ===== */
@media (max-width: 640px) {
  .home-footer-inner {
    padding: 2.5rem 1.25rem 2rem;
  }

  .hf-top {
    gap: 2rem;
    padding-bottom: 2rem;
    padding: 1rem;
  }

  .hf-brand {
    text-align: left;
    margin-bottom: 1rem;
  }

  .hf-logo {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .hf-copy {
    font-size: 0.95rem;
  }

  /* Links: clean vertical list (desktop-like) but 3 columns */
  .hf-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0.25rem;
    padding-left: 0;
  }

  .hf-links a {
    font-size: 0.9rem;
    padding: 0;
    margin: 0;
    background: none !important;
    border-radius: 0;
    min-height: auto;
    display: inline-block;
    color: #e8eef6;
  }

  .hf-links a::before {
    content: "- ";
    opacity: 0.7;
    margin-right: 2px;
  }

  .hf-links a:hover {
    background: none;
    text-decoration: underline;
    opacity: 0.8;
  }

  /* Contact Section - Card style on mobile */
  .hf-contact {
    padding: 0;
    border-radius: 12px;
  }

  .hf-contact-title {
    font-size: 1.1rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  .hf-contact-phone {
    justify-content: flex-start;
    margin-bottom: 0.75rem;
  }

  .hf-contact-phone a {
    font-size: 1.05rem;
  }

  .hf-contact-address {
    justify-content: flex-start;
  }

  .hf-contact-address span {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .hf-bottom {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 0.5rem;
    padding-top: 1.5rem;
    font-size: 0.8rem;
  }

  .hf-copyright {
    font-size: 0.85rem;
  }
}
</style>
