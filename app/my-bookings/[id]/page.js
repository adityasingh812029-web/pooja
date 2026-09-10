import Link from "next/link";
import { Calendar, MapPin, User, CheckCircle, ArrowLeft } from "lucide-react";
import styles from "../../pages.module.css";

export const metadata = { title: "Booking Details — Aaradhya Seva" };

export default function BookingDetailPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner} style={{ maxWidth: "var(--container-md)" }}>
        <Link href="/my-bookings" className="btn btn-ghost" style={{ marginBottom: "var(--space-lg)" }}>
          <ArrowLeft size={16} /> Back to Bookings
        </Link>
        <div className={styles.formCard}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-xl)", flexWrap: "wrap", gap: "var(--space-md)" }}>
            <div>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", marginBottom: "var(--space-xs)" }}>Rudrabhishek Puja</h1>
              <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-muted)" }}>Booking ID: BK001</p>
            </div>
            <span className={`${styles.bookingStatus} ${styles.statusUpcoming}`}>Upcoming</span>
          </div>

          <div className={styles.detailMeta} style={{ border: "none", margin: 0, padding: 0, marginBottom: "var(--space-xl)" }}>
            <div className={styles.detailMetaRow}><MapPin size={16} /> Mahakaleshwar Temple, Ujjain</div>
            <div className={styles.detailMetaRow}><Calendar size={16} /> Oct 7, 2026</div>
            <div className={styles.detailMetaRow}><User size={16} /> Devotee: Sample Name</div>
          </div>

          <div className={styles.priceSummary}>
            <div className={styles.priceRow}><span>Puja Fee</span><span>₹2,100</span></div>
            <div className={styles.priceRow}><span>Prasad & Delivery</span><span>₹199</span></div>
            <div className={styles.priceRow}><span>Platform Fee</span><span>₹49</span></div>
            <div className={styles.priceTotal}><span>Total Paid</span><span>₹2,348</span></div>
          </div>

          <div style={{ marginTop: "var(--space-xl)", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-lg)" }}>Booking Timeline</h3>
            {[
              { label: "Booking Confirmed", done: true },
              { label: "Puja Scheduled", done: true },
              { label: "Puja Performed", done: false },
              { label: "Video & Photos Shared", done: false },
              { label: "Prasad Dispatched", done: false },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", fontSize: "var(--fs-sm)", color: item.done ? "var(--color-success)" : "var(--color-text-muted)" }}>
                <CheckCircle size={16} style={{ opacity: item.done ? 1 : 0.3 }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
