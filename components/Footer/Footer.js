"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Hash, Link as LinkIcon, Share2, Globe } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerGrid}>
        {/* Brand */}
        <div className={styles.brandSection}>
          <div className={styles.brandLogo}>
            <div className={styles.brandIcon} aria-hidden="true">॥</div>
            <span className={styles.brandName}>{siteConfig.name}</span>
          </div>
          <p className={styles.brandDesc}>{siteConfig.description}</p>
          <div className={styles.contactItem}>
            <Mail size={14} aria-hidden="true" />
            <span>{siteConfig.email}</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={14} aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={14} aria-hidden="true" />
            <span>{siteConfig.address}</span>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <Hash size={18} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <Share2 size={18} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <Globe size={18} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <LinkIcon size={18} />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div className={styles.linkColumn}>
          <h3 className={styles.linkHeading}>Services</h3>
          <nav className={styles.linkList} aria-label="Service links">
            {footerLinks.product.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Helpful Links */}
        <div className={styles.linkColumn}>
          <h3 className={styles.linkHeading}>Helpful Links</h3>
          <nav className={styles.linkList} aria-label="Helpful links">
            {footerLinks.helpful.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className={styles.linkColumn}>
          <h3 className={styles.linkHeading}>Stay Connected</h3>
          <p className={styles.brandDesc} style={{ marginBottom: "var(--space-md)" }}>
            Get puja reminders, festival updates, and devotional insights.
          </p>
          <div className={styles.newsletter}>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.newsletterInput}
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.newsletterBtn}>
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Made with devotion in India.
        </p>
        <div className={styles.legalLinks}>
          {footerLinks.legal.map((link) => (
            <Link key={link.href} href={link.href} className={styles.legalLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
