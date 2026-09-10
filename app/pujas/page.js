"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { pujas } from "@/lib/data";
import styles from "../pages.module.css";

const filters = [
  { key: "all", label: "All" },
  { key: "prosperity", label: "Prosperity" },
  { key: "health", label: "Health & Protection" },
  { key: "devotion", label: "Devotion" },
  { key: "astrology", label: "Astrology" },
];

const categoryIcons = { prosperity: "🪔", health: "🙏", devotion: "📿", astrology: "✨" };

export default function PujasPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? pujas : pujas.filter((p) => p.category === filter);

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>All Pujas</h1>
          <p className={styles.pageSubtext}>
            Explore and book authentic rituals at India&apos;s most revered temples
          </p>
        </div>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-xl)" }} />

        <div className={styles.filterRow} role="tablist" aria-label="Filter pujas">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterPill} ${filter === f.key ? styles.filterPillActive : ""}`}
              onClick={() => setFilter(f.key)}
              role="tab"
              aria-selected={filter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "var(--space-3xl)", color: "var(--color-text-muted)" }}>
            <p style={{ fontSize: "3rem", marginBottom: "var(--space-md)" }}>🕉️</p>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", marginBottom: "var(--space-sm)" }}>No pujas found</h3>
            <p>Try a different filter or check back soon.</p>
          </div>
        ) : (
          <div className={styles.grid2} role="list">
            {filtered.map((puja) => (
              <Link key={puja.id} href={`/pujas/${puja.id}`} style={{ textDecoration: "none" }} role="listitem">
                <article className="card" style={{ height: "100%" }}>
                  <div style={{
                    height: 180,
                    background: "linear-gradient(135deg, var(--color-bg-cream), var(--color-gold-subtle))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "2.5rem", opacity: 0.25, position: "relative"
                  }}>
                    {categoryIcons[puja.category] || "🪔"}
                    <span className="badge badge-saffron" style={{ position: "absolute", top: 8, left: 8 }}>
                      {puja.category}
                    </span>
                  </div>
                  <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-lg)", marginBottom: "var(--space-xs)" }}>{puja.title}</h3>
                    <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>{puja.purpose}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-md)", fontSize: "var(--fs-xs)", color: "var(--color-text-muted)", marginBottom: "var(--space-md)", paddingBottom: "var(--space-md)", borderBottom: "1px solid var(--color-border-light)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={13} /> {puja.temple}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={13} /> {puja.date}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={13} /> {puja.devotees.toLocaleString("en-IN")}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "var(--color-primary)" }}>₹{puja.price.toLocaleString("en-IN")}</span>
                      <span className="btn btn-sm btn-primary">Book Puja</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
