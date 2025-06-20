
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleStartStore = () => {
    window.open('https://tally.so/r/wkXvxe', '_blank', 'noopener,noreferrer');
  };

  const handleViewDemo = () => {
    window.location.href = '/dashboard-preview';
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Your Instagram Store with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                ShopZap
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Build a beautiful store, share product links, and automate your DMs. 
              Only ₹99. No coding needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleStartStore}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4 w-full sm:w-auto"
              >
                Start Your Store – ₹99
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={handleViewDemo}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-blue-200 hover:border-blue-300 w-full sm:w-auto"
              >
                View Demo Store
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                No technical knowledge needed
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Free 14-day trial
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/511c666f-11fe-405d-9095-4dcf6b053bf1.png" 
                alt="ShopZap Dashboard - Create Your Instagram Store in 60 Seconds" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
