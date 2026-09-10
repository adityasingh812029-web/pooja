import styles from "../../pages.module.css";

export const metadata = { title: "Terms & Conditions — Aaradhya Seva" };

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <h1 className={styles.pageTitle}>Terms & Conditions</h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--fs-sm)", marginBottom: "var(--space-xl)" }}>Last updated: September 1, 2026</p>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-2xl)" }} />
        <div className={styles.legalContent}>
          <p>By using Aaradhya Seva, you agree to these Terms & Conditions. Please read them carefully before using our services.</p>
          <h2>Services</h2>
          <p>Aaradhya Seva facilitates the booking of Hindu religious rituals (pujas) at various temples across India. We act as an intermediary between devotees and temple priests.</p>
          <h2>Booking & Payments</h2>
          <ul>
            <li>All bookings are subject to availability and confirmation</li>
            <li>Prices are inclusive of puja fees, prasad, and delivery charges unless stated otherwise</li>
            <li>Payments are processed securely through authorized payment gateways</li>
          </ul>
          <h2>Puja Performance</h2>
          <p>Pujas are performed by qualified and verified temple priests following traditional Vedic vidhi-vidhan. We strive to provide photo/video documentation of all pujas performed.</p>
          <h2>User Responsibilities</h2>
          <p>Users must provide accurate devotee details, delivery addresses, and contact information for proper puja performance and prasad delivery.</p>
        </div>
      </div>
    </div>
  );
}
