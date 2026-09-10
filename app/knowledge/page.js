import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { articles } from "@/lib/data";
import styles from "../pages.module.css";

export const metadata = { title: "Devotional Knowledge — Aaradhya Seva", description: "Explore spiritual articles, festival guides, and devotional wisdom." };

export default function KnowledgePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Devotional Knowledge</h1>
          <p className={styles.pageSubtext}>
            Deepen your understanding of Hindu traditions, rituals, and spiritual wisdom
          </p>
        </div>
        <hr className="gold-separator" style={{ margin: "0 0 var(--space-xl)" }} />

        <div className={styles.grid2}>
          {articles.map((article) => (
            <Link key={article.id} href={`/knowledge/${article.id}`} style={{ textDecoration: "none" }}>
              <article className="card" style={{ height: "100%" }}>
                <div style={{
                  height: 160,
                  background: "linear-gradient(135deg, var(--color-bg-cream), rgba(21, 101, 192, 0.08))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", opacity: 0.3
                }}>📖</div>
                <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span style={{ fontSize: "var(--fs-xs)", fontWeight: 600, color: "var(--color-saffron-dark)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "var(--space-sm)" }}>
                    {article.category}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-lg)", marginBottom: "var(--space-sm)" }}>{article.title}</h3>
                  <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--lh-relaxed)", flex: 1, marginBottom: "var(--space-md)" }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "var(--space-md)", borderTop: "1px solid var(--color-border-light)", fontSize: "var(--fs-xs)", color: "var(--color-text-muted)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={13} /> {article.date} · <Clock size={13} /> {article.readTime}</span>
                    <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>Read <ArrowRight size={14} /></span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
