import { CheckCircle2, ShieldCheck, Lock, Star } from "lucide-react";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  const tickerItems = [
    { icon: "⭐️", text: "Certified Vedic Pandits" },
    { icon: "🛕", text: "Prasad Delivered Home" },
    { icon: "💰", text: "100% Money-Back Guarantee" },
    { icon: "🌟", text: "5 Lakh+ Happy Devotees" },
    { icon: "🔄", text: "Cancel Anytime Before Puja" },
    { icon: "🛡️", text: "Trusted Indian Brand" },
  ];

  return (
    <div className={styles.barContainer}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {tickerItems.map((item, idx) => (
            <div key={idx} className={styles.itemWrapper}>
              <div className={styles.item}>
                <span className={styles.emojiIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
              <div className={styles.dot} />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless scrolling */}
        <div className={styles.marqueeContent} aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`dup-${idx}`} className={styles.itemWrapper}>
              <div className={styles.item}>
                <span className={styles.emojiIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
              <div className={styles.dot} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
