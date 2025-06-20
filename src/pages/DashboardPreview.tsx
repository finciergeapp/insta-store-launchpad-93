
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3, ShoppingBag, MessageSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPreview = () => {
  const stats = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-600" />,
      title: "Total Orders",
      value: "147",
      change: "+12% from last month",
      color: "text-blue-600"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Store Views",
      value: "2,340",
      change: "+23% from last week",
      color: "text-green-600"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Auto DM Replies",
      value: "89",
      change: "This week",
      color: "text-purple-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Revenue",
      value: "₹45,250",
      change: "+18% from last month",
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    { id: "#ORD-001", product: "Red Silk Saree", customer: "Priya Sharma", amount: "₹2,500", status: "Completed" },
    { id: "#ORD-002", product: "Gold Jewelry Set", customer: "Anjali Patel", amount: "₹8,900", status: "Processing" },
    { id: "#ORD-003", product: "Cotton Kurta", customer: "Meera Singh", amount: "₹1,200", status: "Shipped" },
    { id: "#ORD-004", product: "Silver Earrings", customer: "Kavya Reddy", amount: "₹3,400", status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your ShopZap Dashboard Preview
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how easy it is to manage your online store, track sales, and monitor Instagram automation - all from one beautiful dashboard.
            </p>
          </div>

          <div className="mb-8">
            <img 
              src="/images/566da87a-9e15-424f-9153-3a63a8d0aae8.png" 
              alt="ShopZap Dashboard" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="text-center">
            <Link to="/free-store">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
              >
                Create Your Own Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Track Everything That Matters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-50 rounded-xl">
                        {stat.icon}
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">
                      {stat.title}
                    </h3>
                    <p className={`text-2xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Orders Table */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 text-gray-900 font-medium">{order.id}</td>
                          <td className="py-4 px-4 text-gray-700">{order.product}</td>
                          <td className="py-4 px-4 text-gray-700">{order.customer}</td>
                          <td className="py-4 px-4 text-gray-900 font-semibold">{order.amount}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Automation Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Instagram Automation in Action
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/images/7f45b93f-1fc0-4681-a7cb-110b07cc857f.png" 
                  alt="Instagram Automation Dashboard" 
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Automate Your Instagram Sales
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Auto-reply to DMs:</strong> When someone asks "Price?", instantly send product details and purchase links
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Track conversations:</strong> See all automated replies and their conversion rates
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">
                      <strong>Custom responses:</strong> Set up different replies for different products and keywords
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Your Own Dashboard?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial and see how ShopZap can transform your Instagram business.
            </p>
            <Link to="/free-store">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Start Your Free Store
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

export default DashboardPreview;
