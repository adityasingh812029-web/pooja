import Link from "next/link";
import styles from "./pages.module.css";

export const metadata = { title: "Page Not Found — Aaradhya Seva" };

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundCode}>404</div>
      <h1 className={styles.notFoundTitle}>Page Not Found</h1>
      <p className={styles.notFoundText}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let us guide you back to your spiritual journey.
      </p>
      <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn btn-primary">Return Home</Link>
        <Link href="/pujas" className="btn btn-secondary">Browse Pujas</Link>
      </div>
    </div>
  );
}
