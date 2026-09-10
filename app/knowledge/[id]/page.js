import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articles } from "@/lib/data";
import styles from "../../pages.module.css";

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) return { title: "Article Not Found" };
  return { title: `${article.title} — Aaradhya Seva`, description: article.excerpt };
}

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) notFound();

  return (
    <div className={styles.page}>
      <div className={styles.pageInner} style={{ maxWidth: "var(--container-md)" }}>
        <Link href="/knowledge" className="btn btn-ghost" style={{ marginBottom: "var(--space-lg)" }}>
          <ArrowLeft size={16} /> Back to Articles
        </Link>

        <span className="badge badge-saffron" style={{ marginBottom: "var(--space-md)" }}>{article.category}</span>
        <h1 className={styles.pageTitle}>{article.title}</h1>
        <div style={{ display: "flex", gap: "var(--space-lg)", fontSize: "var(--fs-sm)", color: "var(--color-text-muted)", marginTop: "var(--space-md)", marginBottom: "var(--space-2xl)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={14} /> {article.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> {article.readTime}</span>
        </div>

        <hr className="gold-separator" style={{ margin: "0 0 var(--space-2xl)" }} />

        <div className={styles.legalContent}>
          <p>{article.excerpt}</p>
          <p>
            This is a placeholder for the full article content. In a production environment, this would be 
            fetched from a CMS or database and rendered with rich formatting, images, and embedded media.
          </p>
          <h2>The Deeper Meaning</h2>
          <p>
            Hindu traditions carry profound spiritual significance that goes beyond ritual observance. 
            Each practice is designed to align the devotee with cosmic rhythms and divine energies, 
            fostering inner peace, spiritual growth, and a deeper connection with the divine.
          </p>
          <h2>Practical Application</h2>
          <p>
            Understanding the spiritual principles behind our traditions helps us practice them with 
            greater intention and reverence. Whether you are a lifelong practitioner or new to these 
            traditions, approaching them with an open heart and curious mind enriches the experience immeasurably.
          </p>
        </div>
      </div>
    </div>
  );
}
