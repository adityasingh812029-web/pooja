import { Bell, MessageCircle } from "lucide-react";
import styles from "./ConversionBanner.module.css";

export default function ConversionBanner() {
  return (
    <section className={styles.section} aria-label="Stay connected">
      <div className={styles.sectionInner}>
        <div className={styles.banner}>
          <div className={styles.bannerPattern} aria-hidden="true" />
          <div className={styles.content}>
            <h2 className={styles.title}>Keep Your Spiritual Journey Close</h2>
            <p className={styles.desc}>
              Never miss auspicious tithis, puja reminders, or festival updates.
              Get timely notifications and deepen your daily practice.
            </p>
            <div className={styles.ctas}>
              <button className={styles.ctaPrimary}>
                <Bell size={18} />
                Get WhatsApp Updates
              </button>
              <button className={styles.ctaSecondary}>
                <MessageCircle size={18} />
                Join Community
              </button>
            </div>
          </div>
          <div className={styles.mockup}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneContent}>
                <div className={styles.phoneIcon}>🙏</div>
                <p>Aaradhya Seva</p>
                <p style={{ fontSize: "var(--fs-xs)", marginTop: "var(--space-sm)", opacity: 0.6 }}>
                  Your spiritual companion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
