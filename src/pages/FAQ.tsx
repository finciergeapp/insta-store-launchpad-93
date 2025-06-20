
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can I set up my store?",
          answer: "You can have your store live in just 60 seconds! Simply enter your store name, email, and you're ready to start adding products. No technical knowledge required."
        },
        {
          question: "Do I need any technical skills?",
          answer: "Not at all! ShopZap is designed for everyone. If you can use Instagram, you can use ShopZap. Everything is point-and-click simple."
        },
        {
          question: "What's included in the free trial?",
          answer: "The 14-day free trial includes everything - unlimited products, Instagram automation, analytics, custom themes, and full customer support. No credit card required."
        }
      ]
    },
    {
      category: "Instagram Automation",
      questions: [
        {
          question: "How does Instagram DM automation work?",
          answer: "When someone comments 'Price?' or sends you a DM with trigger words you set, ShopZap automatically replies with your custom message including product links, prices, and details."
        },
        {
          question: "Is Instagram automation allowed?",
          answer: "Yes! ShopZap uses Instagram's official business API and follows all their guidelines. Your account stays safe and compliant."
        },
        {
          question: "Can I customize the automated responses?",
          answer: "Absolutely! You can create custom responses for different trigger words, include your brand voice, and even set different replies for different products."
        }
      ]
    },
    {
      category: "Store Features",
      questions: [
        {
          question: "How many products can I add?",
          answer: "Unlimited! Add as many products as you want with multiple images, descriptions, prices, and variants (sizes, colors, etc.)."
        },
        {
          question: "Can customers pay through my store?",
          answer: "Yes! Your store includes a smart checkout form where customers can enter quantity, address, and select payment mode (UPI, COD, bank transfer, etc.)."
        },
        {
          question: "Can I customize how my store looks?",
          answer: "Yes! Choose from beautiful themes, customize colors, fonts, and layout to match your brand. Make it uniquely yours."
        },
        {
          question: "Is my store mobile-friendly?",
          answer: "Absolutely! All ShopZap stores are automatically optimized for mobile devices, ensuring your customers have a great experience on any device."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "Why is ShopZap only ₹99/month?",
          answer: "We believe every small business should afford great tools. At ₹99/month, you get everything - no hidden fees, no extra charges for features, no limits on products or orders."
        },
        {
          question: "Are there any setup fees?",
          answer: "No setup fees, no hidden charges, no extra costs. Just ₹99/month for everything, and you can cancel anytime."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major payment methods popular in India - UPI, credit cards, debit cards, net banking, and digital wallets."
        },
        {
          question: "Can I get a refund?",
          answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your money, no questions asked."
        }
      ]
    },
    {
      category: "Support & Security",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We provide email support, WhatsApp help, video tutorials, and detailed guides. Our team is here to help you succeed."
        },
        {
          question: "Is my data safe with ShopZap?",
          answer: "Yes! We use bank-level security, SSL encryption, and follow strict data protection standards. Your business data is completely safe."
        },
        {
          question: "What if I need help setting up?",
          answer: "We're here to help! Contact our support team and we'll guide you through the setup process or even do it for you if needed."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about ShopZap. Can't find what you're looking for? 
              Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h2>
                
                <Card className="shadow-lg border-0">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <AccordionTrigger className="px-6 py-6 text-left hover:no-underline hover:bg-gray-50">
                            <span className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-gradient-to-r from-blue-50 to-teal-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:support@shopzap.io" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Email Support
                  </a>
                  <a 
                    href="https://wa.me/919876543210" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Help
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
