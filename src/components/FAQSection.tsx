
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can I set up my store?",
      answer: "Your store is ready in under 60 seconds! Just sign up, add your products, and your custom URL (shopzap.io/yourname) is live immediately."
    },
    {
      question: "Do I need technical knowledge to use ShopZap?",
      answer: "Not at all! ShopZap is designed for non-technical users. Everything is point-and-click, with no coding required."
    },
    {
      question: "How does Instagram DM automation work?",
      answer: "Our automation detects when customers ask about prices in your DMs and automatically responds with your product links and details. Setup takes just one call with our team."
    },
    {
      question: "Can I customize my store design?",
      answer: "Yes! Choose from beautiful themes, upload your logo, customize colors, and make your store match your brand perfectly."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support UPI, Cash on Delivery (COD), bank transfers, and other popular Indian payment methods to make it easy for your customers."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with no setup fees. You can test all features before committing to a plan."
    },
    {
      question: "Can I track my sales and analytics?",
      answer: "Absolutely! Your dashboard shows detailed analytics including views, orders, revenue, top products, and customer insights."
    },
    {
      question: "What if I need help setting up automation?",
      answer: "Our Automation plan includes a personal setup call where we configure everything for you. We also provide ongoing support to ensure everything works perfectly."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ShopZap
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@shopzap.io" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@shopzap.io
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a 
              href="https://whatsapp.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
