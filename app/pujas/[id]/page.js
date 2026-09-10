import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { pujas } from "@/lib/data";
import styles from "../../pages.module.css";

export function generateStaticParams() {
  return pujas.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const puja = pujas.find((p) => p.id === id);
  if (!puja) return { title: "Puja Not Found" };
  return { title: `${puja.title} — Aaradhya Seva`, description: puja.purpose };
}

export default async function PujaDetailPage({ params }) {
  const { id } = await params;
  const puja = pujas.find((p) => p.id === id);
  if (!puja) notFound();

  const benefits = [
    "Performed by verified temple priests",
    "Video and photo documentation shared",
    "Sacred prasad delivered to your home",
    "Sankalp taken in your name and gotra",
  ];

  return (
    <>
      <div className={styles.detailHero}>
        <div className={styles.pageInner}>
          <div className={styles.detailGrid}>
            <div>
              <span className="badge badge-saffron" style={{ marginBottom: "var(--space-md)" }}>{puja.category}</span>
              <h1 className={styles.pageTitle}>{puja.title}</h1>
              <p className={styles.pageSubtext} style={{ marginBottom: "var(--space-xl)" }}>{puja.purpose}</p>
              <div className={styles.detailImage} aria-label={`${puja.title} illustration`}>🪔</div>
            </div>
            <div className={styles.detailSidebar}>
              <div className={styles.detailPrice}>
                ₹{puja.price.toLocaleString("en-IN")}
                <span className={styles.detailPriceUnit}> / puja</span>
              </div>
              <div className={styles.detailMeta}>
                <div className={styles.detailMetaRow}><MapPin size={16} /> {puja.temple}</div>
                <div className={styles.detailMetaRow}><Calendar size={16} /> {puja.date}</div>
                <div className={styles.detailMetaRow}><Users size={16} /> {puja.devotees.toLocaleString("en-IN")} devotees booked</div>
                <div className={styles.detailMetaRow}><Clock size={16} /> 2-3 hours duration</div>
              </div>
              <Link href={`/book/${puja.id}`} className="btn btn-primary btn-lg" style={{ width: "100%", marginBottom: "var(--space-sm)" }}>
                Book This Puja
              </Link>
              <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)", textAlign: "center" }}>
                Free cancellation up to 24 hours before
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailContent}>
        <div className={styles.detailContentInner}>
          <div className={styles.detailSection}>
            <h2 className={styles.detailSectionTitle}>About This Puja</h2>
            <p className={styles.detailText}>
              {puja.title} is a sacred ritual rooted in ancient Vedic traditions. This puja is specifically performed to {puja.purpose.toLowerCase()}. 
              Our temple priests follow the complete vidhi-vidhan as prescribed in the shastras, ensuring every mantra and offering is performed with 
              utmost devotion and authenticity.
            </p>
          </div>
          <div className={styles.detailSection}>
            <h2 className={styles.detailSectionTitle}>What You Receive</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              {benefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)" }}>
                  <CheckCircle size={18} style={{ color: "var(--color-success)", flexShrink: 0 }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom CTA */}
      <div className={styles.mobileBottomCta}>
        <div className={styles.mobileCtaInner}>
          <div>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "var(--color-primary)" }}>
              ₹{puja.price.toLocaleString("en-IN")}
            </span>
          </div>
          <Link href={`/book/${puja.id}`} className="btn btn-primary">Book Now</Link>
        </div>
      </div>
    </>
  );
}
