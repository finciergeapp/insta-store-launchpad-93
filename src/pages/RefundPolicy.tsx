import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Return / Refund / Cancellation Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">For Shopzap.io</p>
            
            <section className="mb-8">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Orders can be cancelled within 2 hours of placing them.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Returns accepted within 7 days for damaged or incorrect products.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Refunds are processed within 5–7 business days to the original payment method.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Digital downloads (if any) are non-refundable.</p>
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

export default RefundPolicy;