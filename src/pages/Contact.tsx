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
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you grow your business with ShopZap. 
                Reach out to us for any questions, support, or business inquiries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Registered Office</h3>
                    <p className="text-gray-600">
                      ShopZap Technologies Pvt. Ltd.<br />
                      123 Business Tower, 5th Floor<br />
                      Andheri East, Mumbai<br />
                      Maharashtra 400069, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Operational Address</h3>
                    <p className="text-gray-600">
                      ShopZap Innovation Hub<br />
                      Plot No. 456, Sector 18<br />
                      Cyber City, Gurugram<br />
                      Haryana 122015, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91-22-4567-8900</p>
                    <p className="text-gray-600">+91-124-4567-8901</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@shopzap.io</p>
                    <p className="text-gray-600">business@shopzap.io</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 4:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Legal Name</h3>
                  <p className="text-gray-600">ShopZap Technologies Private Limited</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">CIN</h3>
                  <p className="text-gray-600">U72900MH2023PTC394567</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">GSTIN</h3>
                  <p className="text-gray-600">27AABCS1234F1Z5</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">PAN</h3>
                  <p className="text-gray-600">AABCS1234F</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Bank Details</h3>
                  <p className="text-gray-600">
                    HDFC Bank Ltd.<br />
                    Account: 50200012345678<br />
                    IFSC: HDFC0000123<br />
                    Branch: Andheri East, Mumbai
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Quick Support</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Technical Issues</span>
                    <a href="mailto:tech@shopzap.io" className="text-primary hover:underline">
                      tech@shopzap.io
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span>Billing Queries</span>
                    <a href="mailto:billing@shopzap.io" className="text-primary hover:underline">
                      billing@shopzap.io
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span>Partnership</span>
                    <a href="mailto:partners@shopzap.io" className="text-primary hover:underline">
                      partners@shopzap.io
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span>Media Inquiries</span>
                    <a href="mailto:media@shopzap.io" className="text-primary hover:underline">
                      media@shopzap.io
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