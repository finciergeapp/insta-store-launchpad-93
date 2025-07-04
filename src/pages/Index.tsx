
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FreeStoreSection from '@/components/FreeStoreSection';
import CheckoutSection from '@/components/CheckoutSection';
import AutomationSection from '@/components/AutomationSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FreeStoreSection />
        <CheckoutSection />
        <AutomationSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
