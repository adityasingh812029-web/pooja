import Link from "next/link";
import { Flame, Star, Home, Package, CalendarDays } from "lucide-react";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav} aria-label="Mobile Bottom Navigation">
      <Link href="/pujas" className={styles.navItem}>
        <Flame size={20} className={styles.icon} />
        <span>Puja</span>
      </Link>
      <Link href="/daan-seva" className={styles.navItem}>
        <Star size={20} className={styles.icon} />
        <span>Chadhawa</span>
      </Link>
      
      {/* Central Home Button */}
      <div className={styles.navItemHomeWrapper}>
        <Link href="/" className={styles.navItemHome}>
          <Home size={24} className={styles.homeIcon} />
        </Link>
        <span className={styles.homeLabel}>Home</span>
      </div>

      <Link href="/products" className={styles.navItem}>
        <Package size={20} className={styles.icon} />
        <span>Products</span>
      </Link>
      <Link href="/my-bookings" className={styles.navItem}>
        <CalendarDays size={20} className={styles.icon} />
        <span>Bookings</span>
      </Link>
    </nav>
  );
}
