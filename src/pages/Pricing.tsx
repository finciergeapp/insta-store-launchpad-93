
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const features = [
    "Custom store URL (shopzap.io/yourstore)",
    "Unlimited products and images",
    "Instagram DM automation",
    "Smart checkout forms",
    "Analytics dashboard",
    "Custom themes and design",
    "Mobile-optimized store",
    "Order management",
    "Customer support",
    "Regular feature updates"
  ];

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! You get a 14-day free trial with full access to all features. No credit card required."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription anytime with no questions asked."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit cards, debit cards, and net banking - all popular payment methods in India."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with ShopZap."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your online store for just ₹99/month. 
              No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <Card className="shadow-2xl border-0 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-teal-600"></div>
              
              <CardHeader className="text-center py-8">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  ShopZap Pro
                </CardTitle>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-900">₹99</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">
                  Everything included. No limits. Cancel anytime.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-green-800 font-semibold">
                    🎉 14-day free trial • No credit card required
                  </p>
                </div>

                <Link to="/free-store">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg py-4"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <p className="text-center text-sm text-gray-500">
                  Then ₹99/month. Cancel anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why ShopZap is Worth Every Rupee
              </h2>
              <p className="text-xl text-gray-600">
                Compare what you get vs. building it yourself or using expensive alternatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-600">
                    Building Yourself
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    ₹50,000+
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Developer costs</li>
                    <li>• Design expenses</li>
                    <li>• Hosting & maintenance</li>
                    <li>• 3+ months time</li>
                    <li>• Technical headaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-4 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Best Value
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">
                    ShopZap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    ₹99/month
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ready in 60 seconds</li>
                    <li>• All features included</li>
                    <li>• Automatic updates</li>
                    <li>• 24/7 support</li>
                    <li>• No technical knowledge needed</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-600">
                    Other Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    ₹500+/month
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Multiple subscriptions</li>
                    <li>• Complex setup</li>
                    <li>• Limited customization</li>
                    <li>• Extra fees for features</li>
                    <li>• International platforms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
