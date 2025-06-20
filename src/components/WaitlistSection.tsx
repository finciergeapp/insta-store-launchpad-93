
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Help Us Build What You Need
            </h2>
            <p className="text-xl text-gray-600">
              Join our feature waitlist and tell us what you want to see next in ShopZap
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">
                Join the Feature Waitlist
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
                title="ShopZap Early Access Waitlist"
                className="rounded-lg"
              />

              <div className="text-center text-sm text-gray-500 mt-6">
                <p>
                  🚀 Early waitlist members get 50% off when these features launch
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
