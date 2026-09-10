import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { articles } from "@/lib/data";
import styles from "./Articles.module.css";

const articleEmoji = {
  "significance-of-rudraksha": "📿",
  "navratri-nine-forms": "🙏",
  "vastu-home-temple": "🏠",
};

export default function Articles() {
  return (
    <section className={styles.section} aria-label="Devotional articles">
      <div className={styles.sectionInner}>
        <div className={styles.headerRow}>
          <div>
            <h2 className="section-heading" style={{ textAlign: "left" }}>
              Explore Devotional Knowledge
            </h2>
            <hr className="gold-separator" style={{ margin: "var(--space-sm) 0" }} />
          </div>
          <Link href="/knowledge" className={styles.viewAll}>
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.card}>
              <div className={styles.cardImage}>
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.cardImg}
                  />
                ) : (
                  <span aria-hidden="true">{articleEmoji[article.id] || "📖"}</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{article.category}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                <div className={styles.cardMeta}>
                  <div className={styles.cardDate}>
                    <Calendar size={13} aria-hidden="true" />
                    {article.date}
                    <span style={{ margin: "0 4px" }}>·</span>
                    <Clock size={13} aria-hidden="true" />
                    {article.readTime}
                  </div>
                  <Link href={`/knowledge/${article.id}`} className={styles.readMore}>
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
