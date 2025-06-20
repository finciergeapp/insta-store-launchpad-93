
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/42b2eee5-ae37-4311-8959-4c507afb81ad.png" 
                alt="ShopZap" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">ShopZap</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The fastest way to create your online store and automate Instagram DMs. 
              Built for Indian sellers who want to grow their business effortlessly.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 ShopZap. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2 text-gray-400">
              <Link to="/free-store" className="block hover:text-white transition-colors">
                Free Store
              </Link>
              <Link to="/automation" className="block hover:text-white transition-colors">
                Automation
              </Link>
              <Link to="/pricing" className="block hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/dashboard-preview" className="block hover:text-white transition-colors">
                Dashboard Preview
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-gray-400">
              <Link to="/faq" className="block hover:text-white transition-colors">
                FAQ
              </Link>
              <a href="mailto:support@shopzap.io" className="block hover:text-white transition-colors">
                Contact Support
              </a>
              <a href="https://whatsapp.com" className="block hover:text-white transition-colors">
                WhatsApp Help
              </a>
              <a href="https://www.instagram.com/shopzap.io?utm_source=qr&igsh=bGRnN3UyNXFqZ2hw" className="flex items-center hover:text-white transition-colors">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
