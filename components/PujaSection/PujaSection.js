"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { pujas } from "@/lib/data";
import styles from "./PujaSection.module.css";

const filters = [
  { key: "all", label: "All Pujas", icon: "🕉️" },
  { key: "prosperity", label: "Prosperity", icon: "🪔" },
  { key: "health", label: "Health & Protection", icon: "🙏" },
  { key: "devotion", label: "Devotion", icon: "📿" },
  { key: "astrology", label: "Astrology", icon: "✨" },
];

export default function PujaSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? pujas
    : pujas.filter((p) => p.category === activeFilter);

  return (
    <section className={styles.section} aria-label="Upcoming Pujas">
      <div className={styles.sectionInner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <div>
              <h2 className="section-heading" style={{ textAlign: "left" }}>Upcoming Pujas</h2>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-sm)" }}>
                Book authentic rituals at India&apos;s most revered temples
              </p>
            </div>
            <Link href="/pujas" className={styles.viewAll}>
              View All Pujas <ArrowRight size={16} />
            </Link>
          </div>
          <hr className="gold-separator" style={{ margin: "var(--space-md) 0" }} />
        </div>

        {/* Filter Bar */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter pujas by purpose">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f.key)}
              role="tab"
              aria-selected={activeFilter === f.key}
            >
              <span className={styles.filterIcon} aria-hidden="true">{f.icon}</span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🕉️</div>
            <h3 className={styles.emptyTitle}>No pujas found</h3>
            <p>Try selecting a different filter or check back soon.</p>
          </div>
        ) : (
          <div className={styles.pujaGrid} role="list">
            {filtered.map((puja) => (
              <article key={puja.id} className={styles.pujaCard} role="listitem">
                <div className={styles.pujaCardImage}>
                  {puja.image ? (
                    <img
                      src={puja.image}
                      alt={puja.title}
                      className={styles.pujaCardImg}
                    />
                  ) : (
                    <span className={styles.pujaCardImagePlaceholder} aria-hidden="true">
                      🪔
                    </span>
                  )}
                </div>
                <div className={styles.pujaCardBody}>
                  <h3 className={styles.pujaCardTitle}>{puja.title}</h3>
                  <p className={styles.pujaCardPurpose}>{puja.purpose}</p>
                  <div className={styles.pujaCardMeta}>
                    <span className={styles.pujaCardMetaItem}>
                      <MapPin size={13} aria-hidden="true" /> {puja.temple}
                    </span>
                    <span className={styles.pujaCardMetaItem}>
                      <Calendar size={13} aria-hidden="true" /> {puja.date}
                    </span>
                    <span className={styles.pujaCardMetaItem}>
                      <Users size={13} aria-hidden="true" /> {puja.devotees.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className={styles.pujaCardFooter}>
                    <div>
                      <span className={styles.pujaCardPrice}>₹{puja.price.toLocaleString("en-IN")}</span>
                      <span className={styles.pujaCardPriceUnit}> / puja</span>
                    </div>
                    <Link href={`/pujas/${puja.id}`} className={styles.bookBtn}>
                      Book Puja
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
