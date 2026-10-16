"use client";
import { useState } from "react";
import Link from "next/link";
import { Compass, Sparkles, Sun, Moon, Flame, CheckCircle, ArrowRight } from "lucide-react";
import { horoscopes } from "@/lib/data";
import styles from "../pages.module.css";

export default function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState(horoscopes[0]);

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
              background: "rgba(212, 160, 23, 0.15)",
              color: "var(--color-gold-dark, #8b6508)",
              padding: "6px 18px",
              borderRadius: "var(--radius-full)",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "var(--space-md)",
            }}
          >
            <Compass size={16} /> Vedic Astrology & Gochar
          </div>
          <h1 className={styles.pageTitle} style={{ color: "var(--color-primary)" }}>
            Daily Vedic Horoscope & Rashifal
          </h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Select your Moon Sign (Rashi) to unveil planetary alignments, auspicious muhurats, daily predictions, and sacred remedies prescribed by Vedic scholars.
          </p>
        </div>

        <hr className="gold-separator" style={{ marginBottom: "var(--space-2xl)" }} />

        {/* 12 Rashi Grid Selector */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <h3 style={{ textAlign: "center", fontSize: "var(--fs-sm)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-secondary)", marginBottom: "var(--space-md)" }}>
            Select Your Zodiac Sign (राशि चुनें)
          </h3>
          <div className={styles.rashiGrid}>
            {horoscopes.map((h) => {
              const isSelected = selectedSign.sign === h.sign;
              return (
                <div
                  key={h.sign}
                  onClick={() => setSelectedSign(h)}
                  className={styles.rashiCard}
                  style={{
                    borderColor: isSelected ? "var(--color-primary)" : undefined,
                    background: isSelected ? "linear-gradient(135deg, #fffaf5 0%, #faebd7 100%)" : undefined,
                    boxShadow: isSelected ? "0 4px 16px rgba(128,0,32,0.18)" : undefined,
                  }}
                >
                  <div className={styles.rashiIcon}>{h.icon}</div>
                  <div className={styles.rashiName}>{h.sign}</div>
                  <div className={styles.rashiNameHi}>{h.hindi}</div>
                  <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "4px" }}>{h.dates}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Sign Detailed Report Card */}
        <div
          style={{
            background: "var(--color-bg-white)",
            borderRadius: "var(--radius-2xl)",
            border: "1px solid var(--color-border-light)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
            marginBottom: "var(--space-4xl)",
          }}
        >
          {/* Card Top Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #3d0910 0%, #57101a 100%)",
              color: "#fff",
              padding: "var(--space-xl)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "var(--space-md)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.12)",
                  fontSize: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(212, 160, 23, 0.5)",
                }}
              >
                {selectedSign.icon}
              </div>
              <div>
                <div style={{ color: "#ffd700", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                  Today&apos;s Forecast ({selectedSign.hindi} राशि)
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", margin: 0, color: "#fff" }}>
                  {selectedSign.sign} Horoscope
                </h2>
              </div>
            </div>

            <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(255, 255, 255, 0.1)", padding: "4px 12px", borderRadius: "var(--radius-full)", fontSize: "12px" }}>
                Ruler: <strong>{selectedSign.ruler}</strong>
              </span>
              <span style={{ background: "rgba(255, 255, 255, 0.1)", padding: "4px 12px", borderRadius: "var(--radius-full)", fontSize: "12px" }}>
                Element: <strong>{selectedSign.element}</strong>
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div style={{ padding: "var(--space-2xl)" }}>
            {/* Highlights Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "var(--space-md)",
                marginBottom: "var(--space-xl)",
              }}
            >
              <div style={{ background: "var(--color-bg-warm)", padding: "var(--space-md)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-light)" }}>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Lucky Number</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", color: "var(--color-primary)", fontWeight: 800 }}>
                  {selectedSign.luckyNumber}
                </div>
              </div>

              <div style={{ background: "var(--color-bg-warm)", padding: "var(--space-md)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-light)" }}>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Lucky Color</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-base)", color: "var(--color-text-primary)", fontWeight: 700 }}>
                  {selectedSign.luckyColor}
                </div>
              </div>

              <div style={{ background: "var(--color-bg-warm)", padding: "var(--space-md)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-light)" }}>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Shubh Muhurat</div>
                <div style={{ fontSize: "13px", color: "var(--color-text-primary)", fontWeight: 700 }}>
                  {selectedSign.luckyTime}
                </div>
              </div>
            </div>

            {/* Prediction */}
            <div style={{ marginBottom: "var(--space-xl)" }}>
              <h3 style={{ fontSize: "var(--fs-lg)", fontFamily: "var(--font-heading)", color: "var(--color-text-primary)", marginBottom: "var(--space-xs)" }}>
                Planetary Impact & Prediction
              </h3>
              <p style={{ fontSize: "var(--fs-base)", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                {selectedSign.prediction}
              </p>
            </div>

            {/* Sacred Remedy & Puja */}
            <div
              style={{
                background: "linear-gradient(135deg, #fffaf2 0%, #fef3e2 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-xl)",
                border: "1px solid rgba(212, 160, 23, 0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-gold-dark, #8b6508)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  <Sparkles size={16} /> Prescribed Vedic Upay (दैनिक उपाय)
                </div>
                <p style={{ fontSize: "14px", color: "var(--color-text-primary)", margin: 0, fontWeight: 500 }}>
                  {selectedSign.remedy}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-md)", paddingTop: "var(--space-sm)", borderTop: "1px dashed rgba(212, 160, 23, 0.4)" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>Recommended Astro Puja:</div>
                  <div style={{ fontWeight: 700, color: "var(--color-primary)", fontSize: "15px" }}>
                    {selectedSign.pujaRecommended}
                  </div>
                </div>

                <Link href="/pujas" className="btn btn-primary">
                  Book Vedic Shanti Puja <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dosh & Kundli Cross-Link Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #2a0808 0%, #400c14 100%)",
            color: "#fff",
            padding: "var(--space-2xl)",
            borderRadius: "var(--radius-2xl)",
            border: "1px solid rgba(212, 160, 23, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-xl)",
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <div style={{ color: "#ffd700", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "6px" }}>
              Comprehensive Kundli Diagnosis
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", margin: "0 0 8px 0" }}>
              Worried About Kaal Sarp, Manglik or Pitra Dosh?
            </h3>
            <p style={{ fontSize: "var(--fs-sm)", color: "rgba(255, 255, 255, 0.8)", margin: 0 }}>
              Discover exact astrological doshas in your birth chart and get genuine temple remedies performed at consecrated tirthas.
            </p>
          </div>

          <Link
            href="/dosh-report"
            className="btn"
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #d4af37 100%)",
              color: "#3b2003",
              fontWeight: 700,
              padding: "12px 28px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            Check Kundli Dosh Report →
          </Link>
        </div>
      </div>
    </div>
  );
}
