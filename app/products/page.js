"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Shield, Star, ShoppingBag, CheckCircle, Search, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import styles from "../pages.module.css";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState("");

  const categories = [
    { id: "all", label: "All Items" },
    { id: "kavach", label: "Kavach & Talismans" },
    { id: "yantra", label: "Energized Yantras" },
    { id: "protection", label: "Nazar Suraksha" },
    { id: "samagri", label: "Vedic Hawan Samagri" },
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOrderQuick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    setNotification(`✓ Added "${product.title}" with Abhimantrit Sankalp!`);
    setTimeout(() => setNotification(""), 3500);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        {/* Toast Notification */}
        {notification && (
          <div
            style={{
              position: "fixed",
              bottom: "85px",
              right: "24px",
              background: "#1b4332",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 9999,
              fontWeight: 600,
              fontSize: "14px",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <CheckCircle size={18} color="#ffd700" />
            {notification}
          </div>
        )}

        {/* Header */}
        <div className={styles.pageHeader} style={{ textAlign: "center", maxWidth: "800px", marginInline: "auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(128, 0, 32, 0.08)",
              color: "var(--color-primary)",
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "var(--space-md)",
            }}
          >
            <Sparkles size={16} /> Consecrated & Sanctified
          </div>
          <h1 className={styles.pageTitle} style={{ color: "var(--color-primary)" }}>
            Abhimantrit Spiritual Products & Pooja Samagri
          </h1>
          <p className={styles.pageSubtext} style={{ marginInline: "auto" }}>
            Authentic Kavach, Siddh Yantras, Rudraksha, and 100% pure organic Vedic Hawan Samagri energized with ancient Vedic mantras by verified temple priests.
          </p>
        </div>

        <hr className="gold-separator" style={{ marginBottom: "var(--space-2xl)" }} />

        {/* Search & Categories Bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", marginBottom: "var(--space-2xl)" }}>
          {/* Search bar */}
          <div style={{ position: "relative", maxWidth: "450px", width: "100%", marginInline: "auto" }}>
            <Search
              size={18}
              style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)" }}
            />
            <input
              type="text"
              placeholder="Search Kavach, Yantra, Hawan Samagri..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 44px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-white)",
                fontSize: "14px",
                outline: "none",
                boxShadow: "var(--shadow-xs)",
              }}
            />
          </div>

          {/* Categories pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-sm)", flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`${styles.filterPill} ${activeCategory === c.id ? styles.filterPillActive : ""}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-md)",
            background: "rgba(255, 255, 255, 0.7)",
            padding: "var(--space-md) var(--space-lg)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-light)",
            marginBottom: "var(--space-2xl)",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
            <Shield size={16} color="var(--color-primary)" /> 100% Mantra Abhimantrit
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
            <Star size={16} color="#d4a017" fill="#d4a017" /> 4.9★ Devotee Rated
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
            <CheckCircle size={16} color="#1b4332" /> Sanctification Certificate
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
            <Sparkles size={16} color="var(--color-primary)" /> Free Ganga Jal & Tilak
          </div>
        </div>

        {/* Products Grid */}
        <div className={styles.productGrid}>
          {filteredProducts.map((p) => (
            <div key={p.id} className={styles.productCard}>
              <Link href={`/products/${p.id}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                <div className={styles.productImageWrapper}>
                  <img src={p.image} alt={p.title} className={styles.productImage} />
                  <div className={styles.productBadge}>{p.tag}</div>
                </div>

                <div className={styles.productBody}>
                  <div className={styles.productCategory}>{p.categoryLabel}</div>
                  <h3 className={styles.productTitle}>{p.title}</h3>
                  <p className={styles.productDesc}>{p.description}</p>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "var(--space-md)" }}>
                    <div style={{ display: "flex", color: "#f59e0b" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#f59e0b" />
                      ))}
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text-primary)" }}>{p.rating}</span>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>({p.reviewsCount})</span>
                  </div>

                  <div className={styles.productMeta}>
                    <div className={styles.priceWrapper}>
                      <span className={styles.productPrice}>₹{p.price.toLocaleString("en-IN")}</span>
                      <span className={styles.productOldPrice}>₹{p.originalPrice.toLocaleString("en-IN")}</span>
                    </div>

                    <button
                      onClick={(e) => handleOrderQuick(e, p)}
                      className="btn btn-primary"
                      style={{ padding: "6px 14px", fontSize: "12px" }}
                      title="Add with Vedic Sankalp"
                    >
                      <ShoppingBag size={14} /> Buy Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: "center", padding: "var(--space-4xl) 0" }}>
            <p style={{ fontSize: "var(--fs-lg)", color: "var(--color-text-secondary)" }}>
              No spiritual products found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className="btn btn-secondary">
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
