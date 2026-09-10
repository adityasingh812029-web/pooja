import { ClipboardList, Flame, Camera, Package, Sparkles } from "lucide-react";
import { howItWorksSteps } from "@/lib/data";
import styles from "./HowItWorks.module.css";

const iconMap = {
  clipboard: ClipboardList,
  flame: Flame,
  camera: Camera,
  package: Package,
};

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-label="How it works">
      <div className={styles.sectionInner}>
        <div className={styles.headerArea}>
          <div className={styles.subtitleTag}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>DEVOTIONAL JOURNEY</span>
          </div>
          <h2 className="section-heading">How It Works</h2>
          <hr className="gold-separator" />
          <p className="section-subtext">
            A sacred and seamless ritual experience delivered in four transparent steps
          </p>
        </div>

        <div className={styles.steps}>
          {howItWorksSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Flame;
            return (
              <div
                key={step.step}
                className={styles.stepCard}
                style={{ "--step-delay": `${idx * 0.4}s` }}
              >
                <div className={styles.stepIndicator}>
                  <div className={styles.stepNumberWrapper}>
                    <div className={styles.pulseRing} />
                    <div className={styles.stepNumber} aria-hidden="true">
                      0{step.step}
                    </div>
                  </div>
                  {idx < howItWorksSteps.length - 1 && (
                    <div className={styles.stepLine} aria-hidden="true" />
                  )}
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.iconCircle}>
                    <Icon size={26} className={styles.stepSvg} />
                  </div>
                  <span className={styles.stepBadge}>Step 0{step.step}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
