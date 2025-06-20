
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FreeStoreSection from '@/components/FreeStoreSection';
import CheckoutSection from '@/components/CheckoutSection';
import AutomationSection from '@/components/AutomationSection';
import PricingSection from '@/components/PricingSection';
import WaitlistSection from '@/components/WaitlistSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FreeStoreSection />
      <CheckoutSection />
      <AutomationSection />
      <PricingSection />
      <WaitlistSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
