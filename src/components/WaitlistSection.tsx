
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const { toast } = useToast();

  const features = [
    'Cash on Delivery (COD) payments',
    'Discount coupon codes',
    'Upsell and cross-sell offers',
    'Bulk order management',
    'Advanced analytics',
    'WhatsApp integration',
    'Inventory management',
    'Multi-language support'
  ];

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "You're on the waitlist! 🎉",
      description: "We'll notify you when these features are ready.",
    });

    setEmail('');
    setSelectedFeatures([]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Help Us Build What You Need
            </h2>
            <p className="text-xl text-gray-600">
              Join our feature waitlist and tell us what you want to see next in ShopZap
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">
                Join the Feature Waitlist
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What features do you want us to build next?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={() => handleFeatureToggle(feature)}
                        />
                        <label
                          htmlFor={feature}
                          className="text-gray-700 cursor-pointer"
                        >
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg py-4"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="text-center text-sm text-gray-500">
                <p>
                  🚀 Early waitlist members get 50% off when these features launch
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
