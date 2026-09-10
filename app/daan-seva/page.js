import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import styles from "../pages.module.css";

const causes = [
  { icon: "🙏", title: "Anna Daan", desc: "Feed the hungry. Sponsor meals at temples and community kitchens across India.", amount: "₹501" },
  { icon: "📚", title: "Vidya Daan", desc: "Support education for underprivileged children near temple communities.", amount: "₹1,100" },
  { icon: "🐄", title: "Gau Seva", desc: "Contribute to the care and shelter of cows at dedicated gaushalas.", amount: "₹251" },
  { icon: "🏥", title: "Aushadh Daan", desc: "Help provide medical aid and medicines to those in need near holy sites.", amount: "₹751" },
  { icon: "🛕", title: "Temple Restoration", desc: "Support the restoration and maintenance of ancient temples across India.", amount: "₹2,100" },
  { icon: "🪔", title: "Deepa Daan", desc: "Sponsor diyas and oil for temple aarti and lighting ceremonies.", amount: "₹101" },
];

export const metadata = { title: "Daan Seva — Aaradhya Seva", description: "Make charitable donations to support temple communities, education, and welfare." };

export default function DaanSevaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>Daan Seva</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            The act of giving is the highest form of devotion. Support sacred causes and earn divine blessings.
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.grid2}>
          {causes.map((c) => (
            <div key={c.title} className={styles.daanCard}>
              <div className={styles.daanIcon}>{c.icon}</div>
              <h3 className={styles.daanTitle}>{c.title}</h3>
              <p className={styles.daanDesc}>{c.desc}</p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "var(--color-primary)", marginBottom: "var(--space-md)" }}>
                From {c.amount}
              </p>
              <button className="btn btn-primary" style={{ width: "100%" }}>
                <Heart size={16} /> Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
