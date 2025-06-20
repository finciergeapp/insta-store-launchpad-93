
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Help Us Build What You Need
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our feature waitlist and tell us what you want to see next in ShopZap
            </p>
            
            <Link to="/feature-waitlist">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
              >
                Join the Feature Waitlist
              </Button>
            </Link>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">
                Request New Features
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <iframe
                data-tally-src="https://tally.so/r/wkXvxe"
                loading="lazy"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="ShopZap Feature Waitlist"
                className="rounded-lg"
              />

              <div className="text-center text-sm text-gray-500 mt-6">
                <p>
                  🚀 Early waitlist members get priority access to new features
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
