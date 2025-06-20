
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Zap, Clock, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Automation = () => {
  const automationFeatures = [
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      title: "Instant DM Replies",
      description: "Automatically respond to common questions like 'Price?', 'Available?', 'Size?' with personalized messages and product links.",
      example: "Customer: 'Price?' → Auto reply: 'Hi! This beautiful saree is ₹2,500. Check it out: shopzap.io/yourstore/saree-1'"
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-600" />,
      title: "Smart Product Links",
      description: "Every automated response includes direct links to your products with images, prices, and checkout forms.",
      example: "Sends direct product page with images, price, size options, and one-click order form"
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: "24/7 Customer Service",
      description: "Never miss a potential sale. Your automation works round the clock, even when you're sleeping.",
      example: "Responds to customer inquiries at 2 AM while you sleep, converting night-time browsers into buyers"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-green-600" />,
      title: "Conversion Tracking",
      description: "Track which automated messages lead to the most sales and optimize your responses for better conversions.",
      example: "See that 'Check our latest collection' gets 40% more clicks than 'Here's the link'"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Connect Your Instagram",
      description: "Link your Instagram business account to ShopZap in one click"
    },
    {
      step: "2",
      title: "Set Up Keywords",
      description: "Choose trigger words like 'price', 'available', 'buy', 'order'"
    },
    {
      step: "3",
      title: "Customize Responses",
      description: "Create personalized auto-replies with product links and your brand voice"
    },
    {
      step: "4",
      title: "Go Live",
      description: "Your automation starts working immediately, 24/7"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Never Miss a Sale with 
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Instagram Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automatically respond to Instagram DMs, send product links, and convert followers into customers - even while you sleep.
            </p>
            
            <div className="mb-12">
              <img 
                src="/images/88d6d8e2-db5e-452d-ae84-0696cb6de86c.png" 
                alt="Instagram DM Automation Demo" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <Link to="/free-store">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
              >
                Start Free Automation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Instagram Automation Boosts Your Sales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn every Instagram interaction into a sales opportunity with smart automation that feels personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <Card key={index} className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl mr-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      Example: {feature.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Set Up Automation in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Get your Instagram automation running in less than 5 minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/free-store">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;
