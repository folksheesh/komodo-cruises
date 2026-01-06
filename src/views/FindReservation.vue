<script setup>
import { ref } from "vue";

const bookingNumber = ref("");
const email = ref("");

const handleSubmit = () => {
  // Logic for finding reservation would go here
  if (!bookingNumber.value || !email.value) return;
  alert("Feature coming soon: Find reservation " + bookingNumber.value);
};
</script>

<template>
  <div class="find-reservation-wrap">
    <div class="find-reservation-container">
      <h1 class="find-reservation-title">Find Your Reservation</h1>

      <form class="find-reservation-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label class="form-label">Confirmation or Booking Number*</label>
          <input
            type="text"
            v-model="bookingNumber"
            class="form-input"
            placeholder=""
            required
          />
          <div class="form-help-text">
            *Confirmation number format: 12345678-1-ABC
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Email*</label>
          <input
            type="email"
            v-model="email"
            class="form-input"
            placeholder=""
            required
          />
        </div>

        <div class="form-actions">
          <button
            type="submit"
            class="btn-find-reservation"
            :class="{ active: bookingNumber && email }"
          >
            Find Reservation
          </button>
        </div>
      </form>

      <div class="find-reservation-footer">
        <p>Don't know your confirmation number?</p>
        <p>
          This number was included in an email sent at the time of booking.
          Please check your email to recover the number.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="../styles/pages/find-reservation.css"></style>
