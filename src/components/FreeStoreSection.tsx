
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Globe, Palette } from 'lucide-react';

const FreeStoreSection = () => {
  return (
    <section id="free-store" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Store in 60 Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No technical skills needed. Just add your products and start selling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Instant Store Creation
                  </h3>
                  <p className="text-gray-600">
                    Get your custom store URL (shopzap.io/yourstore) immediately after signup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mobile-First Design
                  </h3>
                  <p className="text-gray-600">
                    Your store looks perfect on all devices, especially mobile where your customers shop.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Branding
                  </h3>
                  <p className="text-gray-600">
                    Choose from beautiful themes, add your logo, and customize colors to match your brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Store – ₹99
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/7f45b93f-1fc0-4681-a7cb-110b07cc857f.png" 
                  alt="ShopZap Store Builder Interface" 
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeStoreSection;
