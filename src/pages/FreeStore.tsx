
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FreeStore = () => {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to create your store.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate store creation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Store created successfully! 🎉",
      description: `Your store is now live at shopzap.io/${storeName.toLowerCase().replace(/\s+/g, '-')}`,
    });

    setIsLoading(false);
  };

  const features = [
    "Custom store URL (shopzap.io/yourstore)",
    "Add unlimited products and images",
    "Beautiful mobile-optimized design",
    "Instagram DM automation setup",
    "Basic analytics dashboard",
    "14-day free trial, no credit card required"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Create Your Free Store in 
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> 60 Seconds</span>
              </h1>
              <p className="text-xl text-gray-600">
                No technical knowledge required. Get your beautiful online store up and running instantly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-900">
                    Start Your Free Store
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Store Name
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g., MyBeautifulSarees"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        className="h-12"
                      />
                      {storeName && (
                        <p className="mt-2 text-sm text-gray-600">
                          Your store will be available at: <br />
                          <span className="font-medium text-blue-600">
                            shopzap.io/{storeName.toLowerCase().replace(/\s+/g, '-')}
                          </span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg py-4"
                    >
                      {isLoading ? 'Creating Your Store...' : 'Create My Free Store'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  What you get with your free store:
                </h3>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Perfect for:
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Saree and jewelry sellers</li>
                    <li>• Handmade product creators</li>
                    <li>• Instagram business owners</li>
                    <li>• Anyone wanting to sell online quickly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeStore;
