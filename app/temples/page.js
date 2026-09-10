import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { temples } from "@/lib/data";
import styles from "../pages.module.css";

export const metadata = { title: "Temples of India — Aaradhya Seva", description: "Discover sacred temples, their history, and book pujas at India's holiest shrines." };

export default function TemplesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>Temples of India</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Discover the sacred temples where our priests perform authentic rituals
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.grid2}>
          {temples.map((temple) => (
            <Link key={temple.id} href={`/temples/${temple.id}`} style={{ textDecoration: "none" }}>
              <div className={styles.templeCard}>
                <div className={styles.templeCardImage}>🛕</div>
                <div className={styles.templeCardBody}>
                  <h3 className={styles.templeCardName}>{temple.name}</h3>
                  <div className={styles.templeCardLocation}><MapPin size={14} /> {temple.location}</div>
                  <div className={styles.templeCardDeity}>{temple.deity}</div>
                  <p className={styles.templeCardDesc}>{temple.description}</p>
                  <div className={styles.templeCardFooter}>
                    <span>{temple.pujaCount} pujas available</span>
                    <span style={{ color: "var(--color-primary)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
