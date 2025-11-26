import UrgencyBanner from "@/components/UrgencyBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProductsSection from "@/components/ProductsSection";
import SocialProof from "@/components/SocialProof";
import GuaranteesSection from "@/components/GuaranteesSection";
import PricesSection from "@/components/PricesSection";
import DeliverySection from "@/components/DeliverySection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import SubscriptionPopup from "@/components/SubscriptionPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <Header />
      <HeroSection />
      <StatsSection />
      <AdvantagesSection />
      <ProductsSection />
      <GuaranteesSection />
      <SocialProof />
      <PricesSection />
      <DeliverySection />
      <AboutSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
      <FloatingTelegramButton />
      <SubscriptionPopup />
    </div>
  );
};

export default Index;