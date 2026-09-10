"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X, Flame, BookOpen, Landmark, Star, Calendar, Sun, Globe } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import styles from "./Header.module.css";

const navIcons = {
  "/pujas": Flame,
  "/daan-seva": Star,
  "/panchang": Calendar,
  "/rashifal": Sun,
  "/knowledge": BookOpen,
  "/temples": Landmark,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Desktop Container */}
        <div className={`${styles.headerInner} ${styles.desktopOnly}`}>
          <div className={styles.leftSection}>
            <button
              className={styles.hamburgerDesktop}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo with Lotus mark */}
            <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} - Home`}>
              <img src="/images/lotus-logo.png" alt="Aaradhya Seva Lotus" className={styles.logoImg} />
              <span className={styles.logoText}>{siteConfig.name}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className={styles.nav}>
              <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}>
                Home
              </Link>
              <Link href="/pujas" className={`${styles.navLink} ${pathname === "/pujas" ? styles.navLinkActive : ""}`}>
                Upcoming Puja
              </Link>
              <Link href="/vip-pujas" className={styles.navLink}>
                VIP Pujas
              </Link>
              <Link href="/daan-seva" className={styles.navLink}>
                Chadhawa
              </Link>
              <Link href="/horoscope" className={styles.navLink}>
                Horoscope
              </Link>
              <Link href="/products" className={styles.navLink}>
                Abhimantrit Products
              </Link>
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className={styles.headerActions}>
            <div className={styles.languageSelectorDesktop}>
              <Globe size={15} />
              <span>English</span>
              <span style={{ fontSize: "10px", marginLeft: "2px" }}>▼</span>
            </div>
            <div className={styles.searchDesktop}>
              <Search size={16} className={styles.searchIconDesktop} />
              <input type="text" placeholder="Search pujas, temples..." className={styles.searchInputDesktop} />
            </div>
          </div>
        </div>

        {/* Mobile Container */}
        <div className={`${styles.headerInner} ${styles.mobileOnly}`}>
          <div className={styles.mobileLeft}>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
            <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} - Home`}>
              <img src="/images/lotus-logo.png" alt="Aaradhya Seva Lotus" className={styles.logoImg} />
              <span className={styles.logoText}>{siteConfig.name}</span>
            </Link>
          </div>
          <div className={styles.mobileRight}>
            <div className={styles.languageSelectorMobile}>
              <Globe size={14} color="#6b7280" />
              <span>English</span>
              <span style={{ fontSize: "9px", marginLeft: "2px", color: "#9ca3af" }}>▼</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <nav
        className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileNavHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <img src="/images/lotus-logo.png" alt="Aaradhya Seva Lotus" className={styles.logoImg} />
            <span className={styles.logoText}>{siteConfig.name}</span>
          </Link>
          <button
            className={styles.iconBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => {
            const Icon = navIcons[link.href] || Flame;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={20} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
