
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Clock, Zap, BarChart3 } from 'lucide-react';

const AutomationSection = () => {
  return (
    <section id="automation" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Instagram DM Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Send automated messages on Instagram and manage customers effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Auto-Reply to "Price?" Messages
                  </h3>
                  <p className="text-gray-600">
                    Instantly send product links and pricing when customers ask about your products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    24/7 Response Time
                  </h3>
                  <p className="text-gray-600">
                    Your customers get instant responses even when you're sleeping or busy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Smart Product Recognition
                  </h3>
                  <p className="text-gray-600">
                    Automatically detects which product customers are asking about from your posts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Track Every Interaction
                  </h3>
                  <p className="text-gray-600">
                    See how many people clicked your links and converted to customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="https://tally.so/r/wkXvxe" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-4"
                >
                  Request Automation Setup – ₹499/month
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/5c9f1137-5c86-4e66-9a22-8ba443be991a.png" 
                  alt="Instagram DM Automation - Send automated messages and manage customers effortlessly" 
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

export default AutomationSection;
