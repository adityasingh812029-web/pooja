import styles from "../../pages.module.css";

export const metadata = { title: "Refund & Cancellation Policy — Aaradhya Seva" };

export default function RefundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <h1 className={styles.pageTitle}>Refund & Cancellation Policy</h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--fs-sm)", marginBottom: "var(--space-xl)" }}>Last updated: September 1, 2026</p>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-2xl)" }} />
        <div className={styles.legalContent}>
          <h2>Cancellation</h2>
          <ul>
            <li>Free cancellation is available up to 24 hours before the scheduled puja</li>
            <li>Cancellations within 24 hours of the puja may attract a 25% cancellation fee</li>
            <li>No cancellation is possible after the puja has been performed</li>
          </ul>
          <h2>Refunds</h2>
          <ul>
            <li>Approved refunds are processed within 7-10 business days</li>
            <li>Refunds are credited to the original payment method</li>
            <li>If the puja could not be performed due to temple closure or unforeseen circumstances, a full refund will be initiated automatically</li>
          </ul>
          <h2>Prasad Delivery Issues</h2>
          <p>If prasad is not delivered or arrives damaged, please contact our support team within 48 hours of the expected delivery date. We will arrange a replacement or refund as appropriate.</p>
        </div>
      </div>
    </div>
  );
}
