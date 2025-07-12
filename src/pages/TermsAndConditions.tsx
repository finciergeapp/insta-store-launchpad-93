import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600 mb-6">Website: https://shopzap.io</p>
            
            <section className="mb-8">
              <p className="mb-4 text-lg">
                Welcome to Shopzap.io. By using our platform, you agree to the following terms:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• You must be 18+ or using under parental supervision.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Products, pricing, and descriptions may change without notice.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Orders placed are subject to availability and confirmation.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Unauthorized copying, scraping, or misuse is prohibited.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• All content belongs to Shopzap.io unless stated otherwise.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">• Disputes will be handled under Indian jurisdiction (Mumbai).</p>
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

export default TermsAndConditions;