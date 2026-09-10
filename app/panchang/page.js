import styles from "../pages.module.css";

const today = {
  tithi: "Shukla Tritiya",
  nakshatra: "Rohini",
  yoga: "Shobhana",
  karana: "Baalava",
  sunrise: "6:12 AM",
  sunset: "6:24 PM",
  moonrise: "8:45 PM",
  rahuKaal: "10:30 AM - 12:00 PM",
};

const muhurats = [
  { name: "Abhijit Muhurat", time: "11:48 AM - 12:36 PM", quality: "Auspicious" },
  { name: "Amrit Kaal", time: "2:15 PM - 3:45 PM", quality: "Highly Auspicious" },
  { name: "Brahma Muhurat", time: "4:24 AM - 5:12 AM", quality: "Spiritual" },
];

export const metadata = { title: "Panchang — Aaradhya Seva", description: "Daily Hindu calendar with tithi, nakshatra, muhurat, and auspicious timings." };

export default function PanchangPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>Today&apos;s Panchang</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.infoGrid}>
          {Object.entries(today).map(([key, value]) => (
            <div key={key} className={styles.infoCard}>
              <div className={styles.infoCardLabel}>{key.replace(/([A-Z])/g, " $1").trim()}</div>
              <div className={styles.infoCardValue}>{value}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", textAlign: "center", marginTop: "var(--space-3xl)", marginBottom: "var(--space-xl)" }}>
          Auspicious Muhurats
        </h2>
        <hr className="gold-separator" />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", marginTop: "var(--space-xl)" }}>
          {muhurats.map((m) => (
            <div key={m.name} className={styles.infoCard} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--space-md)" }}>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-lg)" }}>{m.name}</div>
                <div style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-muted)" }}>{m.time}</div>
              </div>
              <span className="badge badge-gold">{m.quality}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
