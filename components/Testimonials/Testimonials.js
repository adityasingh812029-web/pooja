"use client";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Number of visible slides varies by viewport, but we shift by 1
  const total = testimonials.length;
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  return (
    <section className={styles.section} aria-label="Testimonials">
      <div className={styles.sectionInner}>
        <h2 className="section-heading">Voices of Devotion</h2>
        <hr className="gold-separator" />

        <div className={styles.ratingSummary}>
          <span className={styles.ratingBig}>4.9</span>
          <div>
            <div className={styles.ratingStars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} fill="currentColor" />
              ))}
            </div>
            <span className={styles.ratingCount}>Based on 12,000+ reviews</span>
          </div>
        </div>

        <div className={styles.carousel} aria-roledescription="carousel">
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.cardStars}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className={styles.cardReview}>&ldquo;{t.review}&rdquo;</p>
                  <div className={styles.cardAuthor}>
                    <div className={styles.avatar}>
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} className={styles.avatarImg} />
                      ) : (
                        t.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorCity}>{t.city}</div>
                    </div>
                  </div>
                  <p className={styles.sampleNote}>({t.note})</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.arrowBtn} onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>
          <div className={styles.dots}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button className={styles.arrowBtn} onClick={next} aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
