"use client";
import { useState } from "react";
import styles from "../pages.module.css";

const rashis = [
  { name: "Aries", hi: "मेष", icon: "♈", prediction: "A favourable day for new beginnings. Professional opportunities may arise. Stay focused on your goals and avoid unnecessary conflicts." },
  { name: "Taurus", hi: "वृषभ", icon: "♉", prediction: "Financial stability improves. Family relationships strengthen today. Consider investing in long-term plans." },
  { name: "Gemini", hi: "मिथुन", icon: "♊", prediction: "Communication skills shine today. Good for networking and social activities. Creative pursuits bring satisfaction." },
  { name: "Cancer", hi: "कर्क", icon: "♋", prediction: "Emotional well-being is highlighted. Home-related matters receive positive energy. Take time for self-care." },
  { name: "Leo", hi: "सिंह", icon: "♌", prediction: "Leadership qualities are enhanced. Recognition at work is possible. Express your creativity with confidence." },
  { name: "Virgo", hi: "कन्या", icon: "♍", prediction: "Attention to detail pays off. Health improvements are indicated. Organize your priorities for maximum productivity." },
  { name: "Libra", hi: "तुला", icon: "♎", prediction: "Partnerships and relationships are harmonious. Legal matters may find resolution. Balance work and personal life." },
  { name: "Scorpio", hi: "वृश्चिक", icon: "♏", prediction: "Transformation and renewal are themes today. Hidden talents surface. Trust your intuition in decision-making." },
  { name: "Sagittarius", hi: "धनु", icon: "♐", prediction: "Adventure and learning are favoured. Travel plans may materialize. Expand your horizons through new experiences." },
  { name: "Capricorn", hi: "मकर", icon: "♑", prediction: "Career advancement is possible. Discipline and hard work bear fruit. Set practical goals for the week ahead." },
  { name: "Aquarius", hi: "कुम्भ", icon: "♒", prediction: "Innovation and originality are your strengths today. Social causes attract your attention. Community involvement brings joy." },
  { name: "Pisces", hi: "मीन", icon: "♓", prediction: "Spiritual awareness deepens. Artistic and creative endeavours flourish. Practice meditation for inner peace." },
];

export default function RashifalPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>Daily Rashifal</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Select your zodiac sign to view today&apos;s horoscope prediction
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.rashiGrid}>
          {rashis.map((r) => (
            <button
              key={r.name}
              className={styles.rashiCard}
              onClick={() => setSelected(selected === r.name ? null : r.name)}
              style={selected === r.name ? { borderColor: "var(--color-primary)", background: "var(--color-primary-subtle)" } : {}}
              aria-pressed={selected === r.name}
            >
              <div className={styles.rashiIcon}>{r.icon}</div>
              <div className={styles.rashiName}>{r.name}</div>
              <div className={styles.rashiNameHi}>{r.hi}</div>
            </button>
          ))}
        </div>

        {selected && (
          <div className={styles.formCard} style={{ marginTop: "var(--space-2xl)", maxWidth: "var(--container-md)", marginInline: "auto" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", marginBottom: "var(--space-md)" }}>
              {rashis.find((r) => r.name === selected)?.icon} {selected} — Today&apos;s Prediction
            </h2>
            <p style={{ fontSize: "var(--fs-md)", color: "var(--color-text-secondary)", lineHeight: "var(--lh-relaxed)" }}>
              {rashis.find((r) => r.name === selected)?.prediction}
            </p>
            <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)", marginTop: "var(--space-lg)", fontStyle: "italic" }}>
              Predictions are for entertainment and spiritual reflection purposes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
