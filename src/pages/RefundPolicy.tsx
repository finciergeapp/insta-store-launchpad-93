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
          <h1 className="text-4xl font-bold mb-8">Return, Refund & Cancellation Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. General Policy</h2>
              <p className="mb-4">
                At ShopZap, we strive to provide excellent service to all our customers. This policy outlines the terms 
                and conditions for returns, refunds, and cancellations of our digital services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Subscription Cancellation</h2>
              <p className="mb-4">You may cancel your subscription at any time by:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Logging into your account and accessing subscription settings</li>
                <li>Contacting our customer support team</li>
                <li>Sending a cancellation request to support@shopzap.io</li>
              </ul>
              <p className="mb-4">
                Cancellations will be effective at the end of your current billing period. 
                You will continue to have access to paid features until that time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Refund Eligibility</h2>
              <p className="mb-4">We offer refunds in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Technical Issues:</strong> If our platform experiences significant downtime (more than 48 hours in a billing period)</li>
                <li><strong>Service Unavailability:</strong> If we cannot provide the promised features due to technical limitations</li>
                <li><strong>Billing Errors:</strong> If you were charged incorrectly due to our error</li>
                <li><strong>30-Day Money Back:</strong> For annual subscriptions, if you're not satisfied within 30 days of initial purchase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Non-Refundable Items</h2>
              <p className="mb-4">The following are generally not eligible for refunds:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Monthly subscription fees after the service period has started</li>
                <li>Setup fees and one-time charges</li>
                <li>Services that have been fully utilized</li>
                <li>Requests made after 30 days of service activation</li>
                <li>Cancellations due to user error or misunderstanding of features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Refund Process</h2>
              <p className="mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Contact our customer support at support@shopzap.io</li>
                <li>Provide your account details and reason for refund request</li>
                <li>Our team will review your request within 3-5 business days</li>
                <li>If approved, refunds will be processed within 7-10 business days</li>
                <li>Refunds will be credited to the original payment method</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Data and Content Policy</h2>
              <p className="mb-4">
                Upon cancellation or refund, you have 30 days to export your data from the platform. 
                After this period, your data may be permanently deleted from our servers. 
                We recommend downloading all necessary information before cancelling your subscription.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Payment Gateway Charges</h2>
              <p className="mb-4">
                Please note that payment gateway charges (typically 2-3% of transaction amount) are non-refundable 
                and may be deducted from your refund amount as per the payment processor's policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact for Refunds</h2>
              <p className="mb-4">
                For any refund-related queries or to initiate a refund request, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>ShopZap Technologies Pvt. Ltd.</strong></p>
                <p>Email: support@shopzap.io</p>
                <p>Phone: +91-22-4567-8900</p>
                <p>Address: 123 Business Tower, Andheri East, Mumbai, Maharashtra 400069, India</p>
                <p>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM IST</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
              <p className="mb-4">
                If you're not satisfied with our refund decision, you may escalate the matter to our management team. 
                All disputes will be resolved in accordance with Indian consumer protection laws and are subject to 
                the jurisdiction of Mumbai courts.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;