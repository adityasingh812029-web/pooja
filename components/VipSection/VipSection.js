import Link from "next/link";
import { Crown, Video, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { vipPujas } from "@/lib/data";
import styles from "./VipSection.module.css";

export default function VipSection() {
  const topVip = vipPujas.slice(0, 2);

  return (
    <section className={styles.section} aria-label="Exclusive VIP Pujas">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.badge}>
              <Crown size={15} /> 1-on-1 Dedicated Seva
            </div>
            <h2 className={styles.title}>
              Exclusive <span className={styles.goldText}>VIP Pujas</span> with Live HD Darshan
            </h2>
            <p className={styles.subtitle}>
              Conducted exclusively in your family&apos;s name and gotra with dedicated senior priests, private video stream, and sacred prasad kit.
            </p>
          </div>
          <Link href="/vip-pujas" className={styles.viewAll}>
            Explore VIP Sevas <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {topVip.map((puja) => (
            <div key={puja.id} className={styles.card}>
              <div className={styles.imageCol}>
                <img src={puja.image} alt={puja.title} className={styles.image} />
                <span className={styles.tag}>{puja.badge}</span>
              </div>

              <div className={styles.contentCol}>
                <div className={styles.templeRow}>
                  <span>🏛️</span> {puja.temple}
                </div>
                <h3 className={styles.pujaTitle}>{puja.title}</h3>

                <div className={styles.specRow}>
                  <div className={styles.specItem}>
                    <Clock size={13} color="#ffd700" />
                    <span>{puja.duration}</span>
                  </div>
                  <div className={styles.specItem}>
                    <Users size={13} color="#ffd700" />
                    <span>{puja.priests}</span>
                  </div>
                  <div className={styles.specItem}>
                    <Video size={13} color="#ffd700" />
                    <span>Private 1080p Stream</span>
                  </div>
                </div>

                <div className={styles.benefits}>
                  {puja.benefits.slice(0, 2).map((b, i) => (
                    <div key={i} className={styles.benefitItem}>
                      <CheckCircle2 size={14} color="#ffd700" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <div>
                    <span className={styles.priceLabel}>Dedicated Seva:</span>
                    <div className={styles.price}>₹{puja.price.toLocaleString("en-IN")}</div>
                  </div>
                  <Link href={`/book/${puja.id}`} className={styles.bookBtn}>
                    Book VIP Seva <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
