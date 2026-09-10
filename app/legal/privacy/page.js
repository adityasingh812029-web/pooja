import styles from "../../pages.module.css";

export const metadata = { title: "Privacy Policy — Aaradhya Seva" };

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <h1 className={styles.pageTitle}>Privacy Policy</h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--fs-sm)", marginBottom: "var(--space-xl)" }}>Last updated: September 1, 2026</p>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-2xl)" }} />
        <div className={styles.legalContent}>
          <p>Aaradhya Seva (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.</p>
          <h2>Information We Collect</h2>
          <ul>
            <li>Personal details: name, email, phone number, address (for prasad delivery)</li>
            <li>Spiritual information: gotra, sankalp details (provided voluntarily)</li>
            <li>Payment information: processed securely through third-party payment gateways</li>
            <li>Usage data: browsing behaviour, device information, and interaction analytics</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>We use your information to process puja bookings, deliver prasad, send puja-related communications, and improve our services. We do not sell your personal information to third parties.</p>
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. Payment processing is handled by PCI-DSS compliant payment gateways.</p>
          <h2>Contact</h2>
          <p>For privacy-related queries, contact us at namaste@aaradhyaseva.in.</p>
        </div>
      </div>
    </div>
  );
}
