import HeroSection from "@/components/HeroSection/HeroSection";
import CampaignCarousel from "@/components/CampaignCarousel/CampaignCarousel";
import PujaSection from "@/components/PujaSection/PujaSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Categories from "@/components/Categories/Categories";
import Testimonials from "@/components/Testimonials/Testimonials";
import Articles from "@/components/Articles/Articles";
import ConversionBanner from "@/components/ConversionBanner/ConversionBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <PujaSection />
      <HowItWorks />
      <Testimonials />
      <Articles />
      <ConversionBanner />
    </>
  );
}
