import Link from "next/link";
import { Calendar, MapPin, Eye } from "lucide-react";
import styles from "../pages.module.css";

const bookings = [
  { id: "BK001", puja: "Rudrabhishek Puja", temple: "Mahakaleshwar Temple, Ujjain", date: "Oct 7, 2026", status: "upcoming", price: 2100 },
  { id: "BK002", puja: "Satyanarayan Katha", temple: "Kashi Vishwanath Temple", date: "Sep 15, 2026", status: "completed", price: 1100 },
  { id: "BK003", puja: "Lakshmi Puja", temple: "Mahalaxmi Temple, Kolhapur", date: "Sep 20, 2026", status: "processing", price: 1500 },
];

const statusLabels = { completed: "Completed", upcoming: "Upcoming", processing: "Processing" };
const statusClass = { completed: styles.statusCompleted, upcoming: styles.statusUpcoming, processing: styles.statusProcessing };

export const metadata = { title: "My Bookings — Aaradhya Seva" };

export default function MyBookingsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>My Bookings</h1>
          <p className={styles.pageSubtext}>Track and manage your puja bookings</p>
        </div>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-xl)" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {bookings.map((booking) => (
            <div key={booking.id} className={styles.bookingCard}>
              <div className={styles.bookingHeader}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-lg)" }}>{booking.puja}</h3>
                  <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)" }}>ID: {booking.id}</p>
                </div>
                <span className={`${styles.bookingStatus} ${statusClass[booking.status]}`}>
                  {statusLabels[booking.status]}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)", fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={14} /> {booking.temple}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={14} /> {booking.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "var(--space-md)", borderTop: "1px solid var(--color-border-light)" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-lg)", color: "var(--color-primary)" }}>₹{booking.price.toLocaleString("en-IN")}</span>
                <Link href={`/my-bookings/${booking.id}`} className="btn btn-sm btn-ghost">
                  <Eye size={16} /> View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
