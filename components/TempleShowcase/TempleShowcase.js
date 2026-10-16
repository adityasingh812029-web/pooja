import Link from "next/link";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { temples } from "@/lib/data";
import styles from "./TempleShowcase.module.css";

export default function TempleShowcase() {
  const featuredTemples = temples.slice(0, 3);

  return (
    <section className={styles.section} aria-label="Sacred Temples & Tirthas">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.badge}>
              <Sparkles size={15} /> Divine Shrines of India
            </div>
            <h2 className={styles.title}>
              Sacred Temples & <span className={styles.accent}>Holy Tirth Kshetras</span>
            </h2>
            <p className={styles.subtitle}>
              Our verified hereditary priests perform authentic Vedic rituals directly inside the sanctum sanctorum of India&apos;s most revered shrines.
            </p>
          </div>
          <Link href="/temples" className={styles.viewAll}>
            View All Temples <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredTemples.map((temple) => (
            <div key={temple.id} className={styles.card}>
              <Link href={`/temples/${temple.id}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={temple.image} alt={temple.name} className={styles.image} />
                  <span className={styles.deityTag}>{temple.deity}</span>
                </div>

                <div className={styles.body}>
                  <div className={styles.location}>
                    <MapPin size={14} color="var(--color-primary)" /> {temple.location}
                  </div>
                  <h3 className={styles.templeName}>{temple.name}</h3>
                  <p className={styles.desc}>{temple.description}</p>

                  <div className={styles.footer}>
                    <span className={styles.pujaCount}>{temple.pujaCount} Pujas Available</span>
                    <span className={styles.exploreLink}>
                      Explore Temple <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
