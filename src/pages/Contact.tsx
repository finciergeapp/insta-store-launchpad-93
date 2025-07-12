import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Details</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Business Address</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium mb-2">
                      Khamu Jamdar Nagar Shegaon<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+91-7798997439</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Contact Form</h4>
                      <a href="https://shopzap.io/contact" className="text-primary hover:underline">
                        https://shopzap.io/contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you grow your business with ShopZap. 
                Reach out to us for any questions, support, or business inquiries.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary">Quick Support Links</h3>
                <div className="space-y-3">
                  <div>
                    <a href="/terms-and-conditions" className="text-primary hover:underline block">
                      Terms & Conditions
                    </a>
                  </div>
                  <div>
                    <a href="/privacy-policy" className="text-primary hover:underline block">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="/refund-policy" className="text-primary hover:underline block">
                      Return/Refund Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;