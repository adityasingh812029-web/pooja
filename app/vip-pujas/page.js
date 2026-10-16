import Link from "next/link";
import { Crown, Sparkles, Video, ShieldCheck, Clock, Users, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { vipPujas } from "@/lib/data";
import styles from "../pages.module.css";

export const metadata = {
  title: "Exclusive VIP Pujas — Aaradhya Seva",
  description: "Book private 1-on-1 personalized VIP Pujas with dedicated Vedic Acharyas, live private HD video stream, and sacred prasad delivered worldwide.",
};

export default function VipPujasPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        {/* Header */}
        <div className={styles.pageHeader} style={{ textAlign: "center", maxWidth: "800px", marginInline: "auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(212, 160, 23, 0.15)", color: "var(--color-gold-dark, #8b6508)", padding: "6px 18px", borderRadius: "var(--radius-full)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "var(--space-md)" }}>
            <Crown size={16} /> Exclusive Divine Experience
          </div>
          <h1 className={styles.pageTitle} style={{ color: "var(--color-primary)" }}>
            Private VIP Pujas & Dedicated Sankalp
          </h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Experience the sanctity of personal Vedic rituals performed solely in your family&apos;s name and gotra with live private streaming and blessed sanctified prasad kit.
          </p>
        </div>

        <hr className="gold-separator" style={{ marginBottom: "var(--space-2xl)" }} />

        {/* VIP Value Props Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-md)", marginBottom: "var(--space-3xl)" }}>
          <div style={{ background: "var(--color-bg-white)", padding: "var(--space-lg)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-light)", display: "flex", gap: "var(--space-md)", alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(128, 0, 32, 0.1)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Video size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "var(--fs-sm)", fontWeight: 700, margin: 0, color: "var(--color-text-primary)" }}>Private 1080p Stream</h4>
              <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-secondary)", margin: 0 }}>Private video link for family worldwide</p>
            </div>
          </div>

          <div style={{ background: "var(--color-bg-white)", padding: "var(--space-lg)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-light)", display: "flex", gap: "var(--space-md)", alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(212, 160, 23, 0.15)", color: "var(--color-gold-dark, #8b6508)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "var(--fs-sm)", fontWeight: 700, margin: 0, color: "var(--color-text-primary)" }}>Dedicated Pandits</h4>
              <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-secondary)", margin: 0 }}>Only your family&apos;s gotra & sankalp recited</p>
            </div>
          </div>

          <div style={{ background: "var(--color-bg-white)", padding: "var(--space-lg)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-light)", display: "flex", gap: "var(--space-md)", alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(27, 67, 50, 0.1)", color: "#1b4332", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "var(--fs-sm)", fontWeight: 700, margin: 0, color: "var(--color-text-primary)" }}>Authentic Prasad Box</h4>
              <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-secondary)", margin: 0 }}>With silver energized talisman & Ganga Jal</p>
            </div>
          </div>
        </div>

        {/* VIP Cards Grid */}
        <div className={styles.vipGrid}>
          {vipPujas.map((puja) => (
            <div key={puja.id} className={styles.vipCard}>
              <div className={styles.vipCardHero}>
                <img src={puja.image} alt={puja.title} />
                <div className={styles.vipOverlay} />
                <div className={styles.vipBadge}>{puja.badge}</div>
              </div>

              <div className={styles.vipBody}>
                <div className={styles.vipTemple}>
                  <span>🏛️</span> {puja.temple}
                </div>
                <h3 className={styles.vipTitle}>{puja.title}</h3>

                <div className={styles.vipSpecs}>
                  <div className={styles.vipSpecItem}>
                    <Clock size={14} color="#ffd700" />
                    <span>{puja.duration}</span>
                  </div>
                  <div className={styles.vipSpecItem}>
                    <Users size={14} color="#ffd700" />
                    <span>{puja.priests}</span>
                  </div>
                </div>

                <div style={{ marginBottom: "var(--space-md)" }}>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#f6c860", fontWeight: 700, marginBottom: "8px" }}>
                    Exclusive VIP Inclusions:
                  </div>
                  <ul className={styles.vipBenefitList}>
                    {puja.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className={styles.vipBenefitItem}>
                        <CheckCircle2 size={16} color="#ffd700" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.vipFooter}>
                  <div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>Dakshina & Seva</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontSize: "var(--fs-2xl)", fontWeight: 800, color: "#ffd700", fontFamily: "var(--font-heading)" }}>
                        ₹{puja.price.toLocaleString("en-IN")}
                      </span>
                      <span style={{ fontSize: "var(--fs-xs)", color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>
                        ₹{puja.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <Link href={`/book/${puja.id}`} className="btn" style={{ background: "linear-gradient(135deg, #ffd700 0%, #d4af37 100%)", color: "#3b2003", fontWeight: 700, border: "none", boxShadow: "0 4px 16px rgba(212,175,55,0.4)" }}>
                    Book VIP Seva <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Custom Consultation Callout */}
        <div style={{ marginTop: "var(--space-4xl)", background: "linear-gradient(135deg, #fdf8ed 0%, #faebd7 100%)", padding: "var(--space-2xl)", borderRadius: "var(--radius-2xl)", border: "1px solid rgba(212, 160, 23, 0.3)", display: "flex", flexDirection: "column", mdDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "var(--space-xl)", textAlign: "center" }}>
          <div style={{ maxWidth: 650 }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", color: "var(--color-primary)", marginBottom: "var(--space-xs)" }}>
              Need a Custom Yajna or High-Profile Confidential Seva?
            </h3>
            <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", margin: 0 }}>
              Our senior acharyas arrange custom Ayush Havan, Chandi Path, and Rajopachara Abhishek at ancient shrines across India with private priest coordination.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary" style={{ padding: "12px 28px", whiteSpace: "nowrap" }}>
            <PhoneCall size={16} /> Consult Senior Pandit
          </Link>
        </div>
      </div>
    </div>
  );
}
