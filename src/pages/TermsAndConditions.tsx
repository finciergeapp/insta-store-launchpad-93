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
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using ShopZap services, you accept and agree to be bound by the terms and provision of this agreement. 
                These Terms and Conditions govern your use of our platform, including our website, mobile applications, and all related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="mb-4">
                ShopZap provides an e-commerce platform that enables users to create online stores, automate Instagram DMs, 
                and manage their digital business presence. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Free store creation and hosting</li>
                <li>Instagram automation tools</li>
                <li>Payment processing integration</li>
                <li>Analytics and reporting</li>
                <li>Customer support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As a user of ShopZap, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any illegal or unauthorized purposes</li>
                <li>Respect intellectual property rights of others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment for our services is processed securely through our integrated payment partners. 
                All prices are listed in Indian Rupees (INR) and include applicable taxes. 
                Subscription fees are billed in advance and are non-refundable except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                ShopZap retains all rights to its platform, technology, and services. Users retain rights to their content 
                but grant ShopZap a license to use, store, and display such content as necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                ShopZap shall not be liable for any indirect, incidental, special, or consequential damages arising out of 
                or in connection with your use of our services. Our total liability shall not exceed the amount paid by you 
                for our services in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p className="mb-4">
                These Terms and Conditions are governed by the laws of India. Any disputes arising under these terms shall be 
                subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>ShopZap Technologies Pvt. Ltd.</strong></p>
                <p>Email: legal@shopzap.io</p>
                <p>Phone: +91-22-4567-8900</p>
                <p>Address: 123 Business Tower, Andheri East, Mumbai, Maharashtra 400069, India</p>
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