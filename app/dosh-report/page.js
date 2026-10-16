"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, FileText, PhoneCall } from "lucide-react";
import { doshList } from "@/lib/data";
import styles from "../pages.module.css";

export default function DoshReportPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
    concern: "general",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        {/* Header */}
        <div className={styles.pageHeader} style={{ textAlign: "center", maxWidth: "800px", marginInline: "auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(185, 28, 28, 0.1)",
              color: "#b91c1c",
              padding: "6px 18px",
              borderRadius: "var(--radius-full)",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "var(--space-md)",
            }}
          >
            <ShieldAlert size={16} /> Vedic Kundli Diagnosis
          </div>
          <h1 className={styles.pageTitle} style={{ color: "var(--color-primary)" }}>
            Kundli Dosh Analysis & Shanti Remedies
          </h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Uncover planetary afflictions such as Kaal Sarp, Manglik, and Pitra Dosh that hinder peace, prosperity, and marriage. Get genuine Vedic Shanti rituals performed at authentic shrines.
          </p>
        </div>

        <hr className="gold-separator" style={{ marginBottom: "var(--space-2xl)" }} />

        {/* Free Kundli Check Form Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #fffaf5 0%, #faebd7 100%)",
            borderRadius: "var(--radius-2xl)",
            padding: "var(--space-2xl)",
            border: "1px solid rgba(212, 160, 23, 0.35)",
            boxShadow: "var(--shadow-md)",
            maxWidth: "750px",
            marginInline: "auto",
            marginBottom: "var(--space-4xl)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", color: "var(--color-primary)", margin: "0 0 6px 0" }}>
              Check Your Kundli Dosh Free
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", margin: 0 }}>
              Enter your birth details for an astrological assessment prepared by our temple Jyotish Acharyas.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "var(--space-xl) var(--space-md)" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#dcfce7", color: "#166534", display: "flex", alignItems: "center", justifyContent: "center", marginInline: "auto", marginBottom: "var(--space-md)" }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "#166534", marginBottom: "var(--space-xs)" }}>
                Analysis Generated Successfully!
              </h3>
              <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", maxWidth: 500, marginInline: "auto", marginBottom: "var(--space-lg)" }}>
                Namaste <strong>{formData.name || "Devotee"}</strong>. Our senior Vedic astrologer is examining your planetary transits. Review the primary doshas below and recommended remedies.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                Analyze Another Birth Chart
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr", smTemplateColumns: "1fr 1fr", gap: "var(--space-md)" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>
                  Full Name (नाम) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "#fff", fontSize: "14px" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>
                  Date of Birth (जन्म तिथि) *
                </label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "#fff", fontSize: "14px" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>
                  Birth Time (जन्म समय)
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "#fff", fontSize: "14px" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>
                  Birth Place / City (जन्म स्थान) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Varanasi, Delhi, Jaipur"
                  value={formData.place}
                  onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "#fff", fontSize: "14px" }}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>
                  Primary Area of Concern
                </label>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "#fff", fontSize: "14px" }}
                >
                  <option value="general">General Planetary Balance & Peace</option>
                  <option value="marriage">Delay or Conflict in Marriage (विवाह बाधा)</option>
                  <option value="career">Job Obstacles & Financial Losses (व्यापार / नौकरी बाधा)</option>
                  <option value="health">Chronic Health Ailments (स्वास्थ्य विकार)</option>
                  <option value="child">Child Progeny & Family Growth (संतान बाधा)</option>
                </select>
              </div>

              <div style={{ gridColumn: "1 / -1", marginTop: "var(--space-sm)" }}>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "12px", fontSize: "15px" }}>
                  <FileText size={16} /> Check Dosh & Remedies Now
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Major Kundli Doshas Grid */}
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", color: "var(--color-primary)", marginBottom: "var(--space-lg)" }}>
          Major Vedic Doshas & Proven Tirth Remedies
        </h2>

        <div className={styles.doshGrid}>
          {doshList.map((dosh) => (
            <div key={dosh.id} className={styles.doshCard}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-sm)" }}>
                <div>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-gold-dark, #8b6508)", fontWeight: 700 }}>
                    {dosh.hindi}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "var(--color-text-primary)", margin: 0 }}>
                    {dosh.name}
                  </h3>
                </div>
                <span className={dosh.severity === "High" ? styles.doshBadgeHigh : styles.doshBadgeMed}>
                  {dosh.severity} Impact
                </span>
              </div>

              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "var(--space-md)" }}>
                {dosh.description}
              </p>

              <div style={{ marginBottom: "var(--space-md)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#b91c1c", display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                  <AlertTriangle size={13} /> Common Indicators & Symptoms:
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {dosh.symptoms.map((s, idx) => (
                    <li key={idx} style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "flex", alignItems: "flex-start", gap: 6 }}>
                      <span style={{ color: "var(--color-primary)", fontWeight: "bold" }}>•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "auto", background: "var(--color-bg-warm)", padding: "var(--space-md)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-light)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-gold-dark, #8b6508)", textTransform: "uppercase", marginBottom: 2 }}>
                  Authentic Vedic Remedy:
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-primary)", margin: "0 0 10px 0" }}>
                  {dosh.remedy}
                </p>
                <Link href={dosh.pujaLink} className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", padding: "8px" }}>
                  View Shanti Seva <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div style={{ marginTop: "var(--space-4xl)", background: "linear-gradient(135deg, #2a0808 0%, #400c14 100%)", color: "#fff", padding: "var(--space-2xl)", borderRadius: "var(--radius-2xl)", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", color: "#ffd700", marginBottom: "var(--space-xs)" }}>
            Need 1-on-1 Astrological Consultation?
          </h3>
          <p style={{ fontSize: "var(--fs-sm)", color: "rgba(255,255,255,0.85)", maxWidth: 600, marginInline: "auto", marginBottom: "var(--space-lg)" }}>
            Talk directly to our senior Kashi & Ujjain Jyotish Acharyas over call to get manual chart verification and customized mantra sadhana.
          </p>
          <Link href="/contact" className="btn" style={{ background: "linear-gradient(135deg, #ffd700 0%, #d4af37 100%)", color: "#3b2003", fontWeight: 700, padding: "12px 28px" }}>
            <PhoneCall size={16} /> Book Pandit Call
          </Link>
        </div>
      </div>
    </div>
  );
}
