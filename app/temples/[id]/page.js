import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, Clock, Users } from "lucide-react";
import { temples, pujas } from "@/lib/data";
import styles from "../../pages.module.css";

export function generateStaticParams() {
  return temples.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const temple = temples.find((t) => t.id === id);
  if (!temple) return { title: "Temple Not Found" };
  return { title: `${temple.name} — Aaradhya Seva`, description: temple.description };
}

export default async function TempleDetailPage({ params }) {
  const { id } = await params;
  const temple = temples.find((t) => t.id === id);
  if (!temple) notFound();

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <Link href="/temples" className="btn btn-ghost" style={{ marginBottom: "var(--space-lg)" }}>
          <ArrowLeft size={16} /> All Temples
        </Link>

        <div className={styles.detailGrid}>
          <div>
            <div className={styles.detailImage} aria-label={`${temple.name} illustration`}>🛕</div>
          </div>
          <div>
            <h1 className={styles.pageTitle}>{temple.name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", fontSize: "var(--fs-md)", color: "var(--color-text-muted)", marginBottom: "var(--space-sm)" }}>
              <MapPin size={18} /> {temple.location}
            </div>
            <span className="badge badge-saffron" style={{ marginBottom: "var(--space-lg)" }}>{temple.deity}</span>
            <p style={{ fontSize: "var(--fs-md)", color: "var(--color-text-secondary)", lineHeight: "var(--lh-relaxed)", marginTop: "var(--space-lg)", marginBottom: "var(--space-xl)" }}>
              {temple.description}
            </p>
            <div style={{ display: "flex", gap: "var(--space-lg)", flexWrap: "wrap", marginBottom: "var(--space-xl)" }}>
              <div className={styles.infoCard} style={{ flex: 1, minWidth: 140 }}>
                <div className={styles.infoCardLabel}>Pujas Available</div>
                <div className={styles.infoCardValue}>{temple.pujaCount}</div>
              </div>
              <div className={styles.infoCard} style={{ flex: 1, minWidth: 140 }}>
                <div className={styles.infoCardLabel}>Darshan Timing</div>
                <div className={styles.infoCardValue}>5 AM - 9 PM</div>
              </div>
            </div>
            <Link href="/pujas" className="btn btn-primary btn-lg">
              View Available Pujas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
