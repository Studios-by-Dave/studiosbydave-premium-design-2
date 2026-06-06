import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Gift, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FreeLogoDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleSEO
        title="FREE Logo Design Promotion | Studios by Dave"
        description="Get a professionally designed custom logo at no additional cost when you purchase any of our comprehensive web package services. Limited time offer for contractors and local businesses."
        keywords="free logo design, logo promotion, web package deal, custom logo offer, studios by dave promotion"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20" style={{ background: 'linear-gradient(135deg, hsl(218 49% 15%) 0%, hsl(218 49% 22%) 50%, hsl(218 49% 18%) 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block">
              {/* Pixie Dust Effect */}
              <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full animate-dust-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: i % 4 === 0 
                        ? 'hsl(var(--trophy-gold))' 
                        : i % 4 === 1 
                        ? 'hsl(var(--accent) / 0.6)'
                        : 'hsl(0, 0%, 30%)',
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                      filter: 'blur(0.5px)',
                      boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                    }}
                  />
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
                FREE <span className="text-accent">Logo Design</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                With Any Web Package Purchase
              </p>
            </div>
          </div>
        </section>

        {/* Promotion Details */}
        <section className="py-20 bg-background relative">
          {/* Mascot Pointer */}
          <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 animate-bounce-slow">
            <img
              src="/assets/promos/logo-mascot-pointer.png"
              alt="Mascot pointing to promotion"
              className="w-64 h-64 object-contain drop-shadow-lg"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-40">
            <Card className="border-2 border-blue-900/40 shadow-xl overflow-hidden">
              <div className="p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3a5c 85%, #e2e8f0 100%)' }}>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }} />
                </div>
                <div className="flex items-center justify-center relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Promotion Details</h3>
                    <p className="text-muted-foreground mb-6">
                      Receive a professionally designed custom logo at no additional cost when you purchase 
                      any of our comprehensive web package services. This offer is designed to provide you 
                      with a complete brand identity solution.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Custom logo design tailored to your business</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Multiple design concepts to choose from</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Unlimited revisions until you're satisfied</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">All source files included (AI, EPS, PNG, JPG)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Brand color palette and typography recommendations</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">How to Claim</h3>
                    <p className="text-muted-foreground mb-4">
                      Getting your FREE logo design is easy! Simply follow these steps:
                    </p>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        Purchase any of our Web Package services
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        Contact us with your order confirmation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        Provide your business details and preferences
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">4.</span>
                        Receive your custom logo concepts within 3-5 business days
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">5.</span>
                        Review, request revisions, and finalize your logo
                      </li>
                    </ol>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Link to="/contact#get-in-touch">
                    <Button variant="hero" size="lg" className="group">
                      Claim Your Free Logo
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Offer valid with any Web Package purchase. Terms and conditions apply.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Back to All Promos */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/promos">
              <Button variant="outline">
                ← View All Promotions
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeLogoDesign;
