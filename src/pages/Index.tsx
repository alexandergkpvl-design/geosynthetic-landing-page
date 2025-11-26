import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ProductsSection from "@/components/ProductsSection";
import SocialProof from "@/components/SocialProof";

import PricesSection from "@/components/PricesSection";
import DeliverySection from "@/components/DeliverySection";
import AboutSection from "@/components/AboutSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import SubscriptionPopup from "@/components/SubscriptionPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <ProductsSection />
      <SocialProof />
      <PricesSection />
      <DeliverySection />
      <AboutSection />
      <ContactsSection />
      <Footer />
      <FloatingTelegramButton />
      <FloatingOrderButton />
      <SubscriptionPopup />
    </div>
  );
};

export default Index;