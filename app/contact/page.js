"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";
import styles from "../pages.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <div className={styles.pageHeader} style={{ textAlign: "center" }}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            We&apos;re here to help with your spiritual journey. Reach out to us anytime.
          </p>
        </div>
        <hr className="gold-separator" />

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            {[
              { icon: <Mail size={20} />, title: "Email", text: siteConfig.email },
              { icon: <Phone size={20} />, title: "Phone", text: siteConfig.phone },
              { icon: <MapPin size={20} />, title: "Address", text: siteConfig.address },
              { icon: <Clock size={20} />, title: "Support Hours", text: "Mon–Sat: 9 AM – 7 PM IST" },
            ].map((item) => (
              <div key={item.title} className={styles.contactItem}>
                <div className={styles.contactItemIcon}>{item.icon}</div>
                <div>
                  <div className={styles.contactItemTitle}>{item.title}</div>
                  <div className={styles.contactItemText}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.formCard}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", marginBottom: "var(--space-xl)" }}>Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-name">Name</label>
                  <input id="contact-name" className={styles.formInput} placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" className={styles.formInput} placeholder="your@email.com" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" className={styles.formInput} placeholder="How can we help?" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-message">Message</label>
                <textarea id="contact-message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder="Your message..." />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
