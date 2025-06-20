
import { ArrowRight, Zap, MessageSquare, BarChart3, Palette, ShoppingCart, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "One-click Store Creation",
      description: "Get your custom store at shopzap.io/yourstore instantly. No coding, no hassle.",
      image: "/images/7f45b93f-1fc0-4681-a7cb-110b07cc857f.png"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-teal-600" />,
      title: "Instagram DM Automation",
      description: "Automatically reply to 'Price?' messages with product links and details.",
      image: "/images/88d6d8e2-db5e-452d-ae84-0696cb6de86c.png"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-purple-600" />,
      title: "Smart Checkout Form",
      description: "Beautiful checkout with quantity, address, and payment mode selection.",
      image: "/images/566da87a-9e15-424f-9153-3a63a8d0aae8.png"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Analytics Dashboard",
      description: "Track views, orders, and revenue with detailed insights.",
      image: "/images/566da87a-9e15-424f-9153-3a63a8d0aae8.png"
    },
    {
      icon: <Palette className="h-8 w-8 text-orange-600" />,
      title: "Custom Themes & Design",
      description: "Beautiful themes, custom fonts, and colors that match your brand.",
      image: "/images/7f45b93f-1fc0-4681-a7cb-110b07cc857f.png"
    },
    {
      icon: <IndianRupee className="h-8 w-8 text-red-600" />,
      title: "₹99/month - Everything Included",
      description: "Unlimited products, automation, analytics - all in one affordable price.",
      image: "/images/566da87a-9e15-424f-9153-3a63a8d0aae8.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Grow Your Instagram Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From store creation to order management, ShopZap handles it all so you can focus on what matters most - your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/free-store">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
            >
              Start Building Your Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
