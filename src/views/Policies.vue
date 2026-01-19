<template>
  <main class="policy-page">
    <section class="policy-hero container">
      <p class="eyebrow">Compliance and guest trust</p>
      <h1>Privacy, Terms, and Refund Policy</h1>
      <p class="lead">
        We protect every reservation, guest profile, and payment record with the
        same care we give to our voyages. This page outlines how we collect and
        use data, the terms that govern each booking, and how refunds are
        handled.
      </p>
      <div class="meta-row">
        <span>Last updated: 19 January 2026</span>
        <span
          >Applies to all Komodo Cruises digital channels and services.</span
        >
      </div>
      <div class="policy-anchors">
        <a href="#privacy">Privacy & Data Protection</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#refund">Refund Policy</a>
      </div>
    </section>

    <section id="privacy" class="policy-section">
      <div class="container policy-card">
        <p class="eyebrow">Privacy & Policies</p>
        <h2>Privacy & Data Protection</h2>
        <p>
          We only collect data necessary to plan trips, process payments, and
          provide secure guest services. All data is processed in accordance
          with applicable data protection laws in Indonesia and relevant
          international standards.
        </p>
        <ul>
          <li>
            Collected data: contact identity, travel preferences, tokenized
            payment details, and guest service communication history.
          </li>
          <li>
            Usage: booking verification, onboard experience personalization,
            safety compliance, billing, and post-trip support.
          </li>
          <li>
            Storage & retention: data is stored on audited infrastructure;
            payment information is not stored in full; retention follows
            operational needs and legal obligations.
          </li>
          <li>
            Security: encryption in transit and at rest, role-based access
            control, audit logs, and continuous security monitoring.
          </li>
          <li>
            Data subject rights: You may request access, correction, or deletion
            of certain data, except for data required to be gathered for
            compliance.
          </li>
          <li>
            Data sharing: only with operational partners supporting the trip
            (e.g., ports, insurance, payment providers) under strict
            confidentiality agreements.
          </li>
        </ul>
        <p>
          For privacy inquiries, contact privacy@komodocruises.com. We respond
          to valid requests within a reasonable timeframe as per regulations.
        </p>
      </div>
    </section>

    <section id="terms" class="policy-section">
      <div class="container policy-card">
        <p class="eyebrow">Terms & Conditions</p>
        <h2>Terms and Conditions</h2>
        <p>
          The following terms apply to all bookings, payments, and use of Komodo
          Cruises services. By proceeding with a booking, you agree to these
          terms.
        </p>
        <ul>
          <li>
            Booking: confirmation is valid upon receipt of deposit payment;
            balance payment follows the officially sent invoice schedule.
          </li>
          <li>
            Prices and taxes: all prices are subject to change prior to
            confirmation; rates may include national park fees, boat services,
            and taxes applicable on the sailing date.
          </li>
          <li>
            Schedule changes: date or route changes depend on availability, port
            regulations, weather conditions, or safety factors.
          </li>
          <li>
            Guest obligations: guests are required to follow safety briefings,
            environmental regulations, and crew instructions during the cruise.
          </li>
          <li>
            Force majeure: scheduling may be adjusted due to weather conditions,
            authority policies, or emergencies; we will provide reasonable
            rescheduling options.
          </li>
          <li>
            Liability details: travel insurance protection is highly
            recommended; Komodo Cruises is not responsible for loss of personal
            items beyond proven negligence.
          </li>
        </ul>
      </div>
    </section>

    <section id="refund" class="policy-section">
      <div class="container policy-card">
        <p class="eyebrow">Refund Policy</p>
        <h2>Refund and Cancellation Policy</h2>
        <p>
          We strive for transparency in handling cancellations and refunds. This
          policy follows cancellation time categories from the departure date.
        </p>
        <ul>
          <li>
            Cancellation >60 days before departure: deposit refund minus bank
            administration and processing fees.
          </li>
          <li>
            Cancellation 30-60 days: refund up to 50% of total payment received,
            after deducting incurred costs.
          </li>
          <li>
            Cancellation &lt;30 days or no-show: payment is non-refundable as
            trip slots and crew have been fully prepared.
          </li>
          <li>
            Rescheduling: can be done once subject to availability and price
            difference if applicable.
          </li>
          <li>
            Refund to original account: all refunds are sent to the original
            payment method to comply with compliance and anti-fraud standards.
          </li>
          <li>
            Processing time: approved refund requests will be processed 7-14
            business days after complete documentation is received.
          </li>
        </ul>
        <p>
          For refund support, contact billing@komodocruises.com with booking
          number and payment proof details.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.policy-page {
  background: var(--bg-primary);
  color: var(--ocean-900);
  padding-bottom: 3rem;
}

.policy-hero {
  padding: 4.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  color: #4c6a92;
  font-weight: 700;
}

.policy-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin: 0.2rem 0;
  font-weight: 400;
}

.lead {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 58rem;
  color: #2f3f55;
  margin: 0.35rem 0 0.75rem;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #4a5d78;
}

.policy-anchors {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.policy-anchors a {
  color: #223f62;
  text-decoration: none;
  border: 1px solid rgba(34, 63, 98, 0.25);
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.policy-anchors a:hover {
  background: #223f62;
  color: #fff;
  border-color: #223f62;
}

.policy-section {
  padding: 0 1.5rem 1.5rem;
}

.policy-card {
  background: #fff;
  border-radius: 18px;
  padding: 2rem 2.5rem;
  box-shadow: 0 16px 46px rgba(18, 38, 68, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.policy-card h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  margin: 0.1rem 0 0.2rem;
  font-weight: 400;
}

.policy-card p {
  margin: 0;
  line-height: 1.7;
  color: #30425a;
  font-weight: 500;
}

.policy-card ul {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.65rem;
}

.policy-card li {
  line-height: 1.7;
  color: #26374f;
  font-weight: 500;
}

@media (max-width: 768px) {
  .policy-card {
    padding: 1.5rem 1.25rem;
  }

  .policy-hero {
    padding-top: 3.5rem;
  }

  .meta-row {
    flex-direction: column;
    gap: 0.35rem;
  }
}
</style>
