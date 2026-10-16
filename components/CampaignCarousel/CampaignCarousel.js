"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, ArrowRight } from "lucide-react";
import { campaigns } from "@/lib/data";
import styles from "./CampaignCarousel.module.css";

export default function CampaignCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const trackRef = useRef(null);
  const total = campaigns.length;

  const goTo = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Keyboard
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [prev, next]);

  // Swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  return (
    <section
      className={styles.carousel}
      aria-label="Featured campaigns"
      role="region"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.carouselInner}>
        <div
          className={styles.viewport}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
            aria-live="polite"
          >
            {campaigns.map((campaign, idx) => (
              <div
                key={campaign.id}
                className={styles.slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`Campaign ${idx + 1} of ${total}: ${campaign.title}`}
              >
                <div
                  className={styles.banner}
                  style={{ background: campaign.color }}
                >
                  <div className={styles.bannerBg} aria-hidden="true">
                    {campaign.image && (
                      <img src={campaign.image} alt="" className={styles.bannerImageBg} />
                    )}
                    <div className={styles.bannerOverlay} />
                  </div>
                  <div className={styles.bannerContent}>
                    <h3 className={styles.bannerTitle}>{campaign.title}</h3>
                    <p className={styles.bannerDesc}>{campaign.description}</p>
                    <div className={styles.bannerMeta}>
                      <span className={styles.bannerMetaItem}>
                        <MapPin size={13} aria-hidden="true" />
                        {campaign.temple}
                      </span>
                      <span className={styles.bannerMetaItem}>
                        <Calendar size={13} aria-hidden="true" />
                        {campaign.date}
                      </span>
                    </div>
                    <a href="/pujas" className={styles.bannerCta}>
                      {campaign.cta}
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.arrowBtn}
            onClick={prev}
            aria-label="Previous campaign"
          >
            <ChevronLeft size={20} />
          </button>
          <div className={styles.dots} role="tablist" aria-label="Campaign slides">
            {campaigns.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === current ? styles.dotActive : ""}`}
                onClick={() => goTo(idx)}
                role="tab"
                aria-selected={idx === current}
                aria-label={`Go to campaign ${idx + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.arrowBtn}
            onClick={next}
            aria-label="Next campaign"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
