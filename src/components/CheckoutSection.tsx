
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, MapPin, CreditCard, Package } from 'lucide-react';

const CheckoutSection = () => {
  return (
    <section id="checkout" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/a64cbaff-ce52-4872-bb11-407d54be1435.png" 
                  alt="Smart Checkout Form - Beautiful checkout with quantity, address, and payment mode selection" 
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Smart Checkout Form
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Beautiful checkout with quantity, address, and payment mode selection.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Quantity Selection
                  </h3>
                  <p className="text-gray-600">
                    Easy quantity picker with instant price calculation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Address Collection
                  </h3>
                  <p className="text-gray-600">
                    Complete shipping address forms with validation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Payment Options
                  </h3>
                  <p className="text-gray-600">
                    Credit Card, UPI, and Cash on Delivery options
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Order Management
                  </h3>
                  <p className="text-gray-600">
                    All orders automatically organized in your dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
