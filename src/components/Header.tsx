
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleStartStore = () => {
    window.open('https://tally.so/r/wkXvxe', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/42b2eee5-ae37-4311-8959-4c507afb81ad.png" 
              alt="ShopZap" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              ShopZap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('free-store')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Free Store
            </button>
            <button onClick={() => scrollToSection('automation')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Automation
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleStartStore}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
            >
              Start Your Store – ₹99
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('free-store')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Free Store
              </button>
              <button onClick={() => scrollToSection('automation')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Automation
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </button>
              <Button 
                onClick={handleStartStore}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                Start Your Store – ₹99
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
