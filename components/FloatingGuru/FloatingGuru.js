import styles from "./FloatingGuru.module.css";

export default function FloatingGuru() {
  return (
    <div className={styles.floatingGuru} aria-label="Chat with Pandit Ji">
      <div className={styles.guruIcon}>
        <img
          src="/images/pandit-guru.png"
          alt="Pandit Ji"
          className={styles.guruImg}
        />
      </div>
      <div className={styles.glowEffect} />
    </div>
  );
}
