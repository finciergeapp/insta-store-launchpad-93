
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureWaitlist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join the Feature Waitlist
              </h1>
              <p className="text-xl text-gray-600">
                Help us build what you need most for your ShopZap store
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-gray-900">
                  Request Features & Get Priority Access
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <iframe
                  data-tally-src="https://tally.so/r/wkXvxe"
                  loading="lazy"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="ShopZap Feature Waitlist"
                  className="rounded-lg"
                />

                <div className="text-center text-sm text-gray-500 mt-6">
                  <p>
                    🚀 Early waitlist members get exclusive access to new features
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeatureWaitlist;
