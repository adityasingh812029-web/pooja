import HeroSection from "@/components/HeroSection/HeroSection";
import CampaignCarousel from "@/components/CampaignCarousel/CampaignCarousel";
import Categories from "@/components/Categories/Categories";
import PujaSection from "@/components/PujaSection/PujaSection";
import VipSection from "@/components/VipSection/VipSection";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import TempleShowcase from "@/components/TempleShowcase/TempleShowcase";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";
import Articles from "@/components/Articles/Articles";
import ConversionBanner from "@/components/ConversionBanner/ConversionBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CampaignCarousel />
      <Categories />
      <PujaSection />
      <VipSection />
      <ProductShowcase />
      <TempleShowcase />
      <HowItWorks />
      <Testimonials />
      <Articles />
      <ConversionBanner />
    </>
  );
}
