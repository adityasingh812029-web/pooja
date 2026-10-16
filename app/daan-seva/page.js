import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import styles from "../pages.module.css";

const causes = [
  {
    title: "Anna Daan",
    desc: "Feed the hungry. Sponsor meals at temples and community kitchens across holy Varanasi & Ayodhya.",
    amount: "₹501",
    image: "/images/devpunya/chadhawa-1-default.webp",
  },
  {
    title: "Vidya Daan",
    desc: "Support education, books, and Gurukul upbringing for underprivileged children near temple communities.",
    amount: "₹1,100",
    image: "/images/devpunya/chadhawa-14-default.webp",
  },
  {
    title: "Gau Seva",
    desc: "Contribute to the daily fodder, veterinary care, and shelter of sacred desi cows at certified gaushalas.",
    amount: "₹251",
    image: "/images/devpunya/chadhawa-11-default.webp",
  },
  {
    title: "Aushadh Daan",
    desc: "Help provide medical aid, medicines, and elderly care to destitute pilgrims near holy shrines.",
    amount: "₹751",
    image: "/images/devpunya/chadhawa-15-default.webp",
  },
  {
    title: "Temple Restoration",
    desc: "Support the heritage preservation, sanctum cleaning, and maintenance of ancient neglected shrines.",
    amount: "₹2,100",
    image: "/images/devpunya/chadhawa-46-default.webp",
  },
  {
    title: "Deepa Daan",
    desc: "Sponsor brass diyas and pure sesame/ghee oil for evening Ganga Aarti and temple lighting ceremonies.",
    amount: "₹101",
    image: "/images/devpunya/1786396092353_ca24cc1680fbab73.png",
  },
];

export const metadata = { title: "Daan Seva — Aaradhya Seva", description: "Make charitable donations to support temple communities, education, and welfare." };

export default function DaanSevaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>Daan Seva & Chadhawa</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            The act of giving is the highest form of devotion (दानं परमो धर्मः). Support sacred causes and earn divine blessings.
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.grid2}>
          {causes.map((c) => (
            <div key={c.title} className={styles.daanCard}>
              <div className={styles.daanCardImage}>
                <img src={c.image} alt={c.title} />
              </div>
              <div className={styles.daanCardBody}>
                <h3 className={styles.daanTitle}>{c.title}</h3>
                <p className={styles.daanDesc}>{c.desc}</p>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "var(--color-primary)", marginBottom: "var(--space-md)" }}>
                  From {c.amount}
                </p>
                <button className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }}>
                  <Heart size={16} /> Donate with Sankalp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
