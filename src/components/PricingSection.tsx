
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap } from 'lucide-react';

const PricingSection = () => {
  const features = [
    'Unlimited products & images',
    'Custom store URL (shopzap.io/yourname)',
    'Mobile-optimized checkout',
    'Order management dashboard',
    'Analytics & insights',
    'Custom themes & branding',
    'WhatsApp integration',
    '24/7 customer support'
  ];

  const automationFeatures = [
    'Everything in Store Plan',
    'Instagram DM automation',
    'Auto-reply to price inquiries',
    'Smart product recognition',
    'Advanced analytics',
    'Priority support',
    'Custom automation rules'
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your Instagram business, at a price you can afford.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Store Plan */}
          <Card className="shadow-xl border-2 border-blue-200 hover:border-blue-300 transition-colors">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-gray-900 mb-2">
                Store Plan
              </CardTitle>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ₹99
                <span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for getting started</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="https://tally.so/r/wkXvxe" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg py-4"
                >
                  Start Your Store – ₹99
                </Button>
              </a>

              <p className="text-sm text-center text-gray-500">
                14-day free trial • No setup fees
              </p>
            </CardContent>
          </Card>

          {/* Automation Plan */}
          <Card className="shadow-xl border-2 border-orange-200 hover:border-orange-300 transition-colors relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Zap className="h-4 w-4" />
                <span>Most Popular</span>
              </div>
            </div>
            
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl text-gray-900 mb-2">
                Store + Automation
              </CardTitle>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                ₹499
                <span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">For serious Instagram sellers</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="https://tally.so/r/wkXvxe" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg py-4"
                >
                  Request Automation Setup – ₹499/month
                </Button>
              </a>

              <p className="text-sm text-center text-gray-500">
                Personal setup call included • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We can help with bulk orders, enterprise features, and more.
          </p>
          <a href="/feature-waitlist">
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
