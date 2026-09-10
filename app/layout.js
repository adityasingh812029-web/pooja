import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BottomNav from "@/components/BottomNav/BottomNav";
import FloatingGuru from "@/components/FloatingGuru/FloatingGuru";
import { siteConfig } from "@/lib/data";

export const metadata = {
  title: siteConfig.name + " — Sacred Rituals, Delivered with Devotion",
  description: siteConfig.description,
  keywords: "puja booking, hindu rituals, temple puja online, prasad delivery, devotional services",
  openGraph: {
    title: "Aaradhya Seva — Sacred Rituals, Delivered with Devotion",
    description:
      "Book authentic pujas at India's holiest temples. Receive prasad at home.",
    type: "website",
    locale: "en_IN",
    siteName: "Aaradhya Seva",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BottomNav />
        <FloatingGuru />
      </body>
    </html>
  );
}
