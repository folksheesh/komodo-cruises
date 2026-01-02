<template>
    <section class="destination-carousel">
        <h2 class="carousel-heading">Destinations. Our passion, our purpose.</h2>

        <div class="carousel-container">
            <!-- Navigation Left -->
            <button class="carousel-nav carousel-nav-left" @click="prev" aria-label="Previous destination">
                <img src="/src/images/arrows/left-arrow.svg" alt="Previous" />
            </button>

            <!-- Slides Track -->
            <div class="carousel-viewport">
                <div class="carousel-track"
                    :style="{ transform: `translateX(-${trackOffset}px)`, paddingLeft: trackPadding }">
                    <div v-for="(dest, index) in destinations" :key="index" class="carousel-slide"
                        :class="{ 'active-slide': index === currentIndex }"
                        :style="{ width: `${slideWidth}px`, marginRight: `${slideGap}px` }">
                        <img :src="dest.image" :alt="dest.title" class="slide-image" />
                        <div class="slide-overlay">
                            <h3 class="slide-title">{{ dest.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Right -->
            <button class="carousel-nav carousel-nav-right" @click="next" aria-label="Next destination">
                <img src="/src/images/arrows/right-arrow.svg" alt="Next" />
            </button>
        </div>

        <!-- Bottom Info -->
        <p class="carousel-info">
            <span class="carousel-counter">{{ currentIndex + 1 }}/{{ destinations.length }} • </span>{{
                destinations[currentIndex].description }}
        </p>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import komodoImg from '../images/dest-komodo.png'
import labuanBajoImg from '../images/dest-labuan-bajo.png'
import togeanImg from '../images/dest-togean.png'

const destinations = [
    {
        title: 'Komodo National Park',
        image: komodoImg,
        description: 'Home to the legendary Komodo dragons and pristine marine life.'
    },
    {
        title: 'Labuan Bajo',
        image: labuanBajoImg,
        description: 'Gateway to the Komodo Islands with stunning sunsets and vibrant culture.'
    },
    {
        title: 'Togean',
        image: togeanImg,
        description: 'Remote paradise with crystal-clear waters and untouched coral reefs.'
    }
]

const currentIndex = ref(0)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

// Responsive slide dimensions
const slideWidth = computed(() => {
    if (windowWidth.value <= 480) return windowWidth.value * 0.65 // ~65% to show more adjacent slides
    if (windowWidth.value <= 768) return windowWidth.value * 0.75 // ~75% on tablet
    return 1000 // Fixed 1000px on desktop
})

const slideGap = computed(() => {
    if (windowWidth.value <= 768) return 0
    return 10
})

const trackOffset = computed(() => {
    return currentIndex.value * (slideWidth.value + slideGap.value)
})

const trackPadding = computed(() => {
    // Center the first slide: 50% of viewport - half of slide width
    return `calc(50% - ${slideWidth.value / 2}px)`
})

function next() {
    currentIndex.value = (currentIndex.value + 1) % destinations.length
}

function prev() {
    currentIndex.value = (currentIndex.value - 1 + destinations.length) % destinations.length
}

function handleResize() {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
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
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    letter-spacing: 0.01em;
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
    transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: max-content;
}

.carousel-slide {
    /* Width and margin-right set dynamically via inline styles */
    height: 500px;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    opacity: 0.5;
    transform: scale(0.9);
    transition: opacity 1.5s ease, transform 1.5s ease;
}

/* Active slide styling */
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
}

.slide-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3rem;
    padding-top: 10%;
    /* Vertically position in upper area */
}

.slide-title {
    font-family: var(--font-serif);
    font-size: clamp(1.4rem, 4vw, 3rem);
    font-weight: 300;
    color: white;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

/* Navigation Buttons */
.carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel-nav:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.1);
}

.carousel-nav img {
    width: 20px;
    height: 20px;
    opacity: 0.7;
}

.carousel-nav-left {
    left: 2rem;
}

.carousel-nav-right {
    right: 2rem;
}

/* Bottom Info */
.carousel-info {
    margin-top: 1rem;
    font-size: 0.95rem;
    color: #555;
    padding: 0 1.5rem;
    text-align: left;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

/* Tablet */
@media (max-width: 768px) {
    .destination-carousel {
        padding: 4vh 0 6vh;
    }

    .carousel-heading {
        font-size: clamp(1.3rem, 5vw, 2rem);
        margin-bottom: 1rem;
        padding: 0 1rem;
    }

    .carousel-slide {
        height: 350px;
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

    .slide-overlay {
        padding: 1.5rem;
    }

    .carousel-info {
        font-size: 0.85rem;
        padding: 0 1rem;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .destination-carousel {
        padding: 2rem 0;
        text-align: left;
    }

    .carousel-heading {
        font-size: 1.7rem;
        margin-bottom: 0.75rem;
        padding: 0 1.5rem;
    }

    .carousel-slide {
        height: 200px;
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

    .slide-overlay {
        padding: 1rem;
    }

    .slide-title {
        font-size: 1.2rem;
    }

    .carousel-info {
        font-size: 0.8rem;
        margin-top: 0.75rem;
    }

    .carousel-counter {
        display: none !important;
    }
}
</style>
