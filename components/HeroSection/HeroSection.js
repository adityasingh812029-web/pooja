import Link from "next/link";
import { CheckCircle2, Search } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Book a Vedic Puja">
      <div className={styles.heroInner}>
        {/* Desktop Left / Mobile Hidden Content */}
        <div className={styles.heroContentDesktop}>
          <h1 className={styles.heroTitle}>
            Book a Vedic Puja at India&#39;s <span className={styles.heroTitleAccent}>most powerful temples</span>
          </h1>
          
          <ul className={styles.benefitsList}>
            <li>
              <CheckCircle2 size={18} className={styles.checkIcon} fill="var(--color-primary)" color="white" />
              Performed in your name and gotra by certified Vedic pandits.
            </li>
            <li>
              <CheckCircle2 size={18} className={styles.checkIcon} fill="var(--color-primary)" color="white" />
              Rituals conducted on real temple premises, not a studio.
            </li>
            <li>
              <CheckCircle2 size={18} className={styles.checkIcon} fill="var(--color-primary)" color="white" />
              Complete HD puja video with mandir darshan within 72 hours.
            </li>
            <li>
              <CheckCircle2 size={18} className={styles.checkIcon} fill="var(--color-primary)" color="white" />
              Blessed prasad delivered to your home.
            </li>
          </ul>

          <div className={styles.heroCtas}>
            <Link href="/pujas" className="btn btn-primary">
              Browse Pujas
            </Link>
            <Link href="/daan-seva" className="btn btn-secondary">
              Offer Chadhawa
            </Link>
          </div>
        </div>

        {/* Desktop Right Banners / Mobile Top Banners */}
        <div className={styles.heroBanners}>
          <div className={styles.bannerContainer}>
            {/* Banner 1 */}
            <Link href="/pujas" className={styles.bannerImageLink}>
              <img
                src="/images/devpunya/1788786396380_8affafc8a5c7feaf.webp"
                alt="Ashta Vinayak Havan and Atharvshish Path - Tri Mukhi Ganesh Mandir, Kashi"
                className={styles.bannerImg}
              />
            </Link>
            
            {/* Banner 2 */}
            <Link href="/pujas" className={styles.bannerImageLink}>
              <img
                src="/images/devpunya/1788785664192_98245091ed6ee850.webp"
                alt="Varaha-Varahi Mahayagya evam tantrokta havan - Varahi Devi Shaktipeeth, Devidhura"
                className={styles.bannerImg}
              />
            </Link>

            {/* Banner 3 (Mobile Carousel Slide) */}
            <Link href="/pujas" className={`${styles.bannerImageLink} ${styles.mobileOnlyBanner}`}>
              <img
                src="/images/devpunya/1788785745944_4b1f47aa76eca38c.webp"
                alt="Pitru Paksha Tarpan - Holy Tirtha Rituals"
                className={styles.bannerImg}
              />
            </Link>
          </div>
          
          {/* Mobile Carousel Dots */}
          <div className={styles.carouselDots}>
            <div className={`${styles.dot} ${styles.activeDot}`} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={styles.mobileSearchContainer}>
        <div className={styles.mobileSearchBar}>
          <Search size={18} className={styles.mobileSearchIcon} />
          <input type="text" placeholder="Search for kar..." className={styles.mobileSearchInput} />
        </div>
      </div>
    </section>
  );
}
