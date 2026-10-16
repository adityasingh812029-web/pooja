import Link from "next/link";
import { Sparkles, Shield, Star, ShoppingBag, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import styles from "./ProductShowcase.module.css";

export default function ProductShowcase() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className={styles.section} aria-label="Abhimantrit Products & Pooja Samagri">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.subtitle}>
              <Sparkles size={16} /> 100% Siddh & Mantra Consecrated
            </div>
            <h2 className={styles.title}>
              Abhimantrit Products & <span className={styles.accent}>Pooja Samagri</span>
            </h2>
          </div>
          <Link href="/products" className={styles.viewAll}>
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((p) => (
            <div key={p.id} className={styles.card}>
              <Link href={`/products/${p.id}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={p.image} alt={p.title} className={styles.image} />
                  <span className={styles.badge}>{p.tag}</span>
                </div>

                <div className={styles.body}>
                  <span className={styles.category}>{p.categoryLabel}</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>

                  <div className={styles.ratingRow}>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className={styles.rating}>{p.rating}</span>
                    <span className={styles.reviews}>({p.reviewsCount})</span>
                  </div>

                  <div className={styles.footer}>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>₹{p.price.toLocaleString("en-IN")}</span>
                      <span className={styles.oldPrice}>₹{p.originalPrice.toLocaleString("en-IN")}</span>
                    </div>
                    <span className={styles.buyBtn}>
                      <ShoppingBag size={14} /> Buy
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
