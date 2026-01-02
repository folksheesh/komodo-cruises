<template>
    <Transition name="fade">
        <div v-if="isOpen" class="menu-modal-fixed">
            <!-- Top Bar -->
            <div class="modal-top">
                <div class="modal-logo">Komodo Cruises</div>
                <div class="modal-controls">
                    <!-- Re-use Search Trigger logic if needed or just text -->
                    <button class="control-btn" @click="$emit('open-search')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" class="icon">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <span class="btn-text">Search</span>
                    </button>
                    <button class="control-btn" @click="$emit('close')">
                        <span class="btn-text">Close</span> <span class="close-icon">✕</span>
                    </button>
                </div>
            </div>

            <div class="menu-content-container">
                <!-- Left Column: Main Nav + Socials -->
                <div class="col-left">
                    <nav class="main-nav">
                        <a href="#" class="main-link">Our Collection</a>
                        <a href="#" class="main-link">Villa Collection</a>
                        <a href="#" class="main-link">Conservation</a>
                        <a href="#" class="main-link">Wildlife</a>
                        <a href="#" class="main-link">About Komodo</a>
                    </nav>

                    <div class="social-icons">
                        <a href="#" class="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg></a> <!-- Instagram -->
                        <a href="#" class="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg></a> <!-- Facebook -->
                        <a href="#" class="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                </path>
                            </svg></a> <!-- Twitter/X -->
                        <a href="#" class="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg></a> <!-- LinkedIn -->
                        <a href="#" class="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                                </path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg></a> <!-- YouTube -->
                    </div>
                </div>

                <!-- Right Column: Secondary Nav + Contact -->
                <div class="col-right">
                    <div class="secondary-nav-grid">
                        <div class="sec-col">
                            <a href="#" class="sec-link">Photos & Videos</a>
                            <a href="#" class="sec-link">Blog</a>
                            <a href="#" class="sec-link">Indonesia Is...</a>
                            <a href="#" class="sec-link">Magazine</a>
                            <a href="#" class="sec-link">Rates</a>
                            <a href="#" class="sec-link">Exclusive Offers</a>
                            <a href="#" class="sec-link">Press Room</a>
                            <a href="#" class="sec-link">Careers</a>
                        </div>
                        <div class="sec-col">
                            <a href="#" class="sec-link icon-link">
                                <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                                Resource Library
                            </a>
                            <a href="#" class="sec-link icon-link">
                                <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                    <polyline points="10 17 15 12 10 7"></polyline>
                                    <line x1="15" y1="12" x2="3" y2="12"></line>
                                </svg>
                                Trade Login & Rates
                            </a>
                            <a href="#" class="sec-link icon-link">
                                <svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                                Suppliers
                            </a>
                        </div>
                    </div>

                    <div class="contact-info">
                        <p class="contact-email">E. enquiries@komodocruises.com</p>
                        <p class="contact-phone">T. +62 (0) 21 683 3424</p>
                        <a href="#" class="view-contact">View all contact information ›</a>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close', 'open-search'])

// Prevent body scroll when open
watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
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
.menu-modal-fixed {
    position: fixed;
    inset: 0;
    background-color: var(--ocean-900);
    /* Blue theme */
    z-index: 9999;
    color: #fff;
    display: flex;
    flex-direction: column;
}

/* Header */
.modal-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.modal-controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.control-btn {
    background: none;
    border: none;
    color: #fff;
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: opacity 0.2s;
}

.control-btn:hover {
    opacity: 1;
}

.control-btn:hover .btn-text {
    text-decoration: underline;
    text-underline-offset: 4px;
}

.icon {
    width: 18px;
    height: 18px;
}

/* Layout */
.menu-content-container {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 5% 4rem 15%;
    /* Asymmetric padding roughly matching reference */
    align-items: center;
}

/* Left Col */
.col-left {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
}

.main-nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: auto;
    /* Push socials down if needed, or center */
    margin-top: auto;
}

.main-link {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 4vw, 4rem);
    text-decoration: none;
    color: #fff;
    line-height: 1.1;
    font-weight: 400;
    transition: opacity 0.2s;
}

.main-link:hover {
    opacity: 0.8;
}

.social-icons {
    display: flex;
    gap: 1.5rem;
    margin-top: 4rem;
}

.social-link {
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.social-link:hover {
    opacity: 1;
}

/* Right Col */
.col-right {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-left: 5vw;
}

.secondary-nav-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 5rem;
}

.sec-col {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sec-link {
    font-family: var(--font-sans);
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
}

.sec-link:hover {
    opacity: 0.7;
    /* Slightly dimmer on hover */
}

.icon-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-icon {
    opacity: 0.8;
}

/* Contact */
.contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: var(--font-serif);
}

.contact-email,
.contact-phone {
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
}

.view-contact {
    margin-top: 0.5rem;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.view-contact:hover {
    text-decoration: underline;
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
    .menu-content-container {
        padding: 2rem 5%;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .col-right {
        padding-left: 0;
        justify-content: flex-start;
    }

    .main-link {
        font-size: 2.5rem;
    }

    .secondary-nav-grid {
        margin-bottom: 2rem;
    }
}
</style>
