import Link from "next/link";
import styles from "./Categories.module.css";

export default function Categories() {
  const offerings = [
    {
      title: "Book Sacred Puja",
      href: "/pujas",
      video: "/images/offerings/puja.mp4",
      poster: "/images/offerings/puja.webp",
      alt: "Book Sacred Puja",
    },
    {
      title: "Offer Chadhawa",
      href: "/daan-seva",
      video: "/images/offerings/chadhawa.mp4",
      poster: "/images/offerings/chadhawa.webp",
      alt: "Offer Chadhawa",
    },
    {
      title: "Abhimantrit Products",
      href: "/products",
      video: "/images/offerings/abhimantrit.mp4",
      poster: "/images/offerings/abhimantrit.webp",
      alt: "Abhimantrit Products",
    },
    {
      title: "Dosh Report",
      href: "/dosh-report",
      video: "/images/offerings/reports_charts.mp4",
      poster: "/images/offerings/reports_charts.webp",
      alt: "Dosh Report",
    },
  ];

  return (
    <section className={styles.section} aria-label="Our Offerings">
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionHeading}>
          Our <span className={styles.accentText}>Offerings</span>
        </h2>

        <div className={styles.offeringsGrid}>
          {offerings.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={styles.offeringCard}
            >
              <div className={styles.iconWrapper}>
                <video
                  poster={item.poster}
                  loop
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  aria-label={item.alt}
                  className={styles.offeringVideo}
                  src={item.video}
                />
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.cardTitle}>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
