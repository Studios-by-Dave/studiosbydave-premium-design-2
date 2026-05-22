import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Users, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReferralBonus = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleSEO
        title="Unlimited $100 Referral Bonus | Studios by Dave"
        description="Earn $100 for every successful referral with our unlimited referral bonus program. No limits on how much you can earn. Perfect for contractors and local businesses."
        keywords="referral bonus, earn money, referral program, $100 referral, studios by dave referral"
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
                Unlimited <span className="text-accent">$100</span> Referral Bonus
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Earn Cash for Every Referral—No Limits!
              </p>
            </div>
          </div>
        </section>

        {/* Referral Bonus Details */}
        <section className="py-20 bg-muted/30 relative">
          {/* Mascot Pointer - Flipped and on left */}
          <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 animate-bounce-slow">
            <img
              src="/assets/promos/logo-mascot-pointer.png"
              alt="Mascot pointing to promotion"
              className="w-64 h-64 object-contain drop-shadow-lg transform -scale-x-100"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-40">
            <Card className="border-2 border-accent/20 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-trophy-gold to-trophy-gold/80 p-6 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }} />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '3s' }} />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Unlimited $100 Referral Bonus
                    </h2>
                    <p className="text-foreground/90">Earn Cash for Every Referral—No Limits!</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">How It Works</h3>
                    <p className="text-muted-foreground mb-6">
                      Earn <strong className="text-foreground">$100 for every successful referral</strong> you send our way. 
                      There are absolutely no limits on how many referrals you can make—keep referring and keep earning!
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground"><strong>$100</strong> for every qualifying referral</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground">Unlimited referrals—no maximum cap</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground">Paid via <strong>Visa gift card</strong> upon successful referral</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground">Referred client must purchase Standard Web Package ($998+)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Payment Timeline
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Upon successful completion of a referred client's purchase of any qualifying service, 
                      the referral bonus shall be processed and disbursed according to the following terms:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        Payment processing may occur as quickly as the same business day in certain circumstances.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        Standard processing time is typically within one to fourteen (1-14) business days.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        Under no circumstances shall the payment period exceed fourteen (14) business days from the date of qualifying purchase confirmation.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bonus Structure Emphasis */}
                <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20 text-center">
                  <h4 className="text-2xl font-bold text-accent mb-2">Unlimited $100 Referral Bonuses</h4>
                  <p className="text-muted-foreground">
                    Earn <strong>$100</strong> for every qualifying referral—paid via Visa gift card. Referred clients must purchase a 
                    Standard Web Package ($998 or higher). There is no ceiling on your referral earnings—your network is your earning potential.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Link to="/contact#get-in-touch">
                    <Button variant="hero" size="lg" className="group">
                      Start Referring Today
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Terms and conditions apply. See full terms for eligibility requirements.
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

export default ReferralBonus;
