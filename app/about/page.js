import { CheckCircle } from "lucide-react";
import styles from "../pages.module.css";

export const metadata = { title: "About Us — Aaradhya Seva" };

const values = [
  { icon: "🙏", title: "Authenticity", desc: "Every ritual follows traditional Vedic vidhi-vidhan performed by verified temple priests." },
  { icon: "📹", title: "Transparency", desc: "Complete photo and video documentation of every puja shared with devotees." },
  { icon: "🚚", title: "Prasad Delivery", desc: "Sacred prasad from the temple carefully packed and delivered to your doorstep." },
  { icon: "🛡️", title: "Trust", desc: "Serving over 2,50,000 devotees with a 4.9-star rating and 100% authenticity guarantee." },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner} style={{ maxWidth: "var(--container-md)" }}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>About Aaradhya Seva</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Bridging the gap between devotees and sacred temples across India
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.legalContent}>
          <p>
            Aaradhya Seva was founded with a simple yet profound mission: to make authentic Hindu rituals 
            accessible to every devotee, regardless of their physical location. We believe that devotion 
            knows no boundaries, and that every soul deserves the blessings that come from sacred temple pujas.
          </p>
          <p>
            Our platform connects you directly with verified temple priests at India&apos;s most revered shrines — 
            from Kashi Vishwanath in Varanasi to Tirupati Balaji in Andhra Pradesh. Every puja is performed 
            with complete adherence to traditional Vedic vidhi-vidhan, documented on video, and followed 
            by sacred prasad delivery to your home.
          </p>

          <h2 style={{ textAlign: "center" }}>Our Values</h2>
        </div>

        <div className={styles.grid4} style={{ marginTop: "var(--space-xl)" }}>
          {values.map((v) => (
            <div key={v.title} className={styles.daanCard}>
              <div className={styles.daanIcon}>{v.icon}</div>
              <h3 className={styles.daanTitle}>{v.title}</h3>
              <p className={styles.daanDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
