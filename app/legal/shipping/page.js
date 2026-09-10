import styles from "../../pages.module.css";

export const metadata = { title: "Shipping Policy — Aaradhya Seva" };

export default function ShippingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <h1 className={styles.pageTitle}>Shipping Policy</h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--fs-sm)", marginBottom: "var(--space-xl)" }}>Last updated: September 1, 2026</p>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-2xl)" }} />
        <div className={styles.legalContent}>
          <h2>Prasad Delivery</h2>
          <p>Sacred prasad from your puja is carefully packed in hygienic, tamper-proof packaging and shipped via our trusted delivery partners.</p>
          <h2>Delivery Timeline</h2>
          <ul>
            <li>Metro cities: 3-5 business days after puja completion</li>
            <li>Tier 2/3 cities: 5-7 business days after puja completion</li>
            <li>Remote areas: 7-10 business days after puja completion</li>
          </ul>
          <h2>Delivery Charges</h2>
          <p>A flat delivery fee of ₹199 is charged per puja booking, which covers packaging and shipping to any address within India.</p>
          <h2>Tracking</h2>
          <p>Once prasad is dispatched, you will receive a tracking link via email and WhatsApp to monitor your delivery in real-time.</p>
          <h2>International Shipping</h2>
          <p>International prasad delivery is currently available to select countries. Additional shipping charges may apply. Contact support for details.</p>
        </div>
      </div>
    </div>
  );
}
