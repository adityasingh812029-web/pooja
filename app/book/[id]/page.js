"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { pujas } from "@/lib/data";
import styles from "../../pages.module.css";

const steps = ["Devotee Details", "Review", "Payment", "Confirmation"];

export default function BookingPage() {
  const { id } = useParams();
  const puja = pujas.find((p) => p.id === id);
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({ name: "", gotra: "", sankalp: "", phone: "", email: "", address: "" });

  if (!puja) {
    return (
      <div className={styles.page}>
        <div className={styles.pageInner}>
          <div className={styles.confirmBox}>
            <h2 className={styles.confirmTitle}>Puja Not Found</h2>
            <p className={styles.confirmText}>The puja you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/pujas" className="btn btn-primary">Browse Pujas</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <h1 className={styles.pageTitle} style={{ fontSize: "var(--fs-2xl)", marginBottom: "var(--space-lg)" }}>
          Book {puja.title}
        </h1>

        {/* Stepper */}
        <div className={styles.stepper}>
          {steps.map((step, idx) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
              <div className={`${styles.stepperItem} ${idx === currentStep ? styles.stepperItemActive : ""} ${idx < currentStep ? styles.stepperItemDone : ""}`}>
                <div className={`${styles.stepperDot} ${idx === currentStep ? styles.stepperDotActive : ""} ${idx < currentStep ? styles.stepperDotDone : ""}`}>
                  {idx < currentStep ? <CheckCircle size={14} /> : idx + 1}
                </div>
                <span>{step}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`${styles.stepperLine} ${idx < currentStep ? styles.stepperLineActive : ""}`} />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-2xl)" }}>
          {/* Step Content */}
          <div className={styles.formCard}>
            {currentStep === 0 && (
              <>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", marginBottom: "var(--space-xl)" }}>Enter Devotee Details</h2>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="name">Full Name *</label>
                    <input id="name" name="name" className={styles.formInput} value={form.name} onChange={handleChange} placeholder="Enter devotee name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="gotra">Gotra</label>
                    <input id="gotra" name="gotra" className={styles.formInput} value={form.gotra} onChange={handleChange} placeholder="Enter gotra (if known)" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="sankalp">Sankalp / Special Wish</label>
                  <textarea id="sankalp" name="sankalp" className={`${styles.formInput} ${styles.formTextarea}`} value={form.sankalp} onChange={handleChange} placeholder="Enter your sankalp or special wish for this puja" />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="phone">Phone *</label>
                    <input id="phone" name="phone" type="tel" className={styles.formInput} value={form.phone} onChange={handleChange} placeholder="+91" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" className={styles.formInput} value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="address">Prasad Delivery Address *</label>
                  <textarea id="address" name="address" className={`${styles.formInput} ${styles.formTextarea}`} value={form.address} onChange={handleChange} placeholder="Full address for prasad delivery" />
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", marginBottom: "var(--space-xl)" }}>Review Your Booking</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Puja</span>
                    <span style={{ fontWeight: 600 }}>{puja.title}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Temple</span>
                    <span>{puja.temple}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Devotee</span>
                    <span>{form.name || "Not provided"}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--fs-sm)" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Gotra</span>
                    <span>{form.gotra || "Not provided"}</span>
                  </div>
                </div>
                <div className={styles.priceSummary}>
                  <div className={styles.priceRow}><span>Puja Fee</span><span>₹{puja.price.toLocaleString("en-IN")}</span></div>
                  <div className={styles.priceRow}><span>Prasad & Delivery</span><span>₹199</span></div>
                  <div className={styles.priceRow}><span>Platform Fee</span><span>₹49</span></div>
                  <div className={styles.priceTotal}><span>Total</span><span>₹{(puja.price + 199 + 49).toLocaleString("en-IN")}</span></div>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-xl)", marginBottom: "var(--space-xl)" }}>Payment</h2>
                <div style={{ textAlign: "center", padding: "var(--space-2xl)", color: "var(--color-text-muted)" }}>
                  <p style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>💳</p>
                  <p>Payment gateway integration will be available here.</p>
                  <p style={{ fontSize: "var(--fs-sm)", marginTop: "var(--space-sm)" }}>Click &quot;Proceed&quot; to simulate a successful payment.</p>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <div className={styles.confirmBox}>
                <div className={styles.confirmIcon}><CheckCircle size={40} /></div>
                <h2 className={styles.confirmTitle}>Booking Confirmed!</h2>
                <p className={styles.confirmText}>
                  Your {puja.title} at {puja.temple} has been booked successfully. 
                  You will receive a confirmation email shortly.
                </p>
                <div className={styles.confirmId}>Booking ID: AS-{Date.now().toString(36).toUpperCase()}</div>
                <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href="/my-bookings" className="btn btn-primary">View My Bookings</Link>
                  <Link href="/pujas" className="btn btn-secondary">Explore More Pujas</Link>
                </div>
              </div>
            )}

            {/* Navigation */}
            {currentStep < 3 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-xl)", paddingTop: "var(--space-lg)", borderTop: "1px solid var(--color-border-light)" }}>
                {currentStep > 0 ? (
                  <button className="btn btn-ghost" onClick={goBack}>← Back</button>
                ) : <div />}
                <button className="btn btn-primary" onClick={goNext}>
                  {currentStep === 2 ? "Complete Payment" : "Proceed"} <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
