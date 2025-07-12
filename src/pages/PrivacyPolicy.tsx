import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">For Shopzap.io</p>
            
            <section className="mb-8">
              <p className="mb-4 text-lg">
                We value your privacy. Here's how we use your data:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• We collect your name, phone number, address, and order history.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Your data is used strictly for order processing and customer support.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• We never share your personal data with third parties for profit.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• We use cookies to enhance your shopping experience.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Payments are processed securely via Razorpay.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;