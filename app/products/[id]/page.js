import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star, Shield, CheckCircle2, Truck, RefreshCw, Sparkles, Heart } from "lucide-react";
import { products } from "@/lib/data";
import styles from "../../pages.module.css";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Product Not Found — Aaradhya Seva" };
  return {
    title: `${product.title} — Abhimantrit Spiritual Products | Aaradhya Seva`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        {/* Back Link */}
        <Link href="/products" className="btn btn-ghost" style={{ marginBottom: "var(--space-lg)" }}>
          <ArrowLeft size={16} /> All Spiritual Products
        </Link>

        {/* Product Main Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", lgTemplateColumns: "1fr 1fr", gap: "var(--space-3xl)", marginBottom: "var(--space-4xl)" }}>
          {/* Left Column: Image */}
          <div>
            <div
              style={{
                borderRadius: "var(--radius-2xl)",
                overflow: "hidden",
                border: "1px solid var(--color-border-light)",
                background: "radial-gradient(circle, #fffaf2 0%, #f7ecd7 100%)",
                boxShadow: "var(--shadow-md)",
                position: "relative",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "auto", maxHeight: "480px", objectFit: "contain", display: "block", margin: "auto" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                {product.tag}
              </span>
            </div>

            {/* Guarantees Box */}
            <div
              style={{
                marginTop: "var(--space-lg)",
                background: "var(--color-bg-white)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-lg)",
                border: "1px solid var(--color-border-light)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--space-sm)",
                textAlign: "center",
              }}
            >
              <div>
                <Shield size={20} color="var(--color-primary)" style={{ marginInline: "auto", marginBottom: 4 }} />
                <div style={{ fontSize: "11px", fontWeight: 700 }}>100% Siddh</div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>Vedic Sanctified</div>
              </div>
              <div>
                <Truck size={20} color="#1b4332" style={{ marginInline: "auto", marginBottom: 4 }} />
                <div style={{ fontSize: "11px", fontWeight: 700 }}>Express Delivery</div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>Safe packaging</div>
              </div>
              <div>
                <RefreshCw size={20} color="#d4a017" style={{ marginInline: "auto", marginBottom: 4 }} />
                <div style={{ fontSize: "11px", fontWeight: 700 }}>Free Ganga Jal</div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>With Holy Tilak</div>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Action */}
          <div>
            <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-gold-dark, #8b6508)", fontWeight: 700, marginBottom: "4px" }}>
              {product.categoryLabel}
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-3xl)", color: "var(--color-primary)", marginBottom: "var(--space-sm)", lineHeight: 1.25 }}>
              {product.title}
            </h1>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "var(--space-lg)" }}>
              <div style={{ display: "flex", color: "#f59e0b" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" />
                ))}
              </div>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>{product.rating}</span>
              <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>({product.reviewsCount} verified devotees)</span>
            </div>

            {/* Price Box */}
            <div style={{ background: "rgba(128, 0, 32, 0.04)", padding: "var(--space-lg)", borderRadius: "var(--radius-xl)", border: "1px solid rgba(128, 0, 32, 0.12)", marginBottom: "var(--space-xl)", display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-3xl)", fontWeight: 800, color: "var(--color-primary)" }}>
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span style={{ fontSize: "var(--fs-md)", color: "var(--color-text-muted)", textDecoration: "line-through" }}>
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span style={{ background: "#dcfce7", color: "#166534", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "var(--radius-full)" }}>
                Save {discountPercent}%
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "var(--space-xl)" }}>
              {product.description}
            </p>

            {/* Features */}
            <div style={{ marginBottom: "var(--space-2xl)" }}>
              <h3 style={{ fontSize: "var(--fs-sm)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-primary)", marginBottom: "var(--space-sm)" }}>
                Consecration & Features:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {product.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Sankalp & Order Card */}
            <div style={{ background: "var(--color-bg-white)", padding: "var(--space-xl)", borderRadius: "var(--radius-2xl)", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "var(--space-md)", color: "var(--color-primary)", fontWeight: 700 }}>
                <Sparkles size={18} />
                <span>Energized on Devotee&apos;s Name & Gotra</span>
              </div>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "var(--space-md)" }}>
                Before dispatch, temple priests recite a dedicated sankalp invoking your birth star, gotra, and wishes to activate this holy article.
              </p>

              <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg"
                  style={{ flex: 1, justifyContent: "center", minWidth: 200 }}
                >
                  Order with Personal Sankalp
                </Link>
                <Link
                  href="/products"
                  className="btn btn-secondary btn-lg"
                  style={{ flex: 1, justifyContent: "center", minWidth: 160 }}
                >
                  Browse More Items
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: "var(--space-4xl)" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-2xl)", color: "var(--color-primary)", marginBottom: "var(--space-lg)" }}>
              Devotees Also Acquired
            </h2>
            <div className={styles.productGrid}>
              {relatedProducts.map((p) => (
                <div key={p.id} className={styles.productCard}>
                  <Link href={`/products/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.productImageWrapper}>
                      <img src={p.image} alt={p.title} className={styles.productImage} />
                    </div>
                    <div className={styles.productBody}>
                      <h4 className={styles.productTitle}>{p.title}</h4>
                      <div className={styles.productMeta}>
                        <span className={styles.productPrice}>₹{p.price.toLocaleString("en-IN")}</span>
                        <span style={{ fontSize: "12px", color: "var(--color-primary)", fontWeight: 600 }}>View Details →</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
