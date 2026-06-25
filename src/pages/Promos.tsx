import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Gift, Users, Clock, CheckCircle, Star, Search, Settings, MapPin, TrendingUp, Phone, Star as StarIcon, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Promos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleSEO
        title="Current Promotions | Studios by Dave - Free Logo Design & Referral Bonus"
        description="Take advantage of our current promotions: FREE Logo Design with any Web Package purchase and Unlimited $100 Referral Bonuses. Limited time offers for contractors and local businesses."
        keywords="free logo design, referral bonus, web design promotion, contractor website deals, studios by dave promotions"
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
                Current <span className="text-accent">Promotions</span>
              </h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Take advantage of our exclusive offers designed to help your business grow. 
              Quality services with exceptional value.
            </p>
          </div>
        </section>

        {/* Free Logo Design Section */}
        <section className="py-20 bg-background relative">
          {/* Mascot Pointer */}
          <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 animate-bounce-slow">
            <img 
              src="/assets/promos/logo-mascot-pointer.png" 
              alt="Mascot pointing to promotions" 
              className="w-64 h-64 object-contain drop-shadow-lg"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-40">
            <Card className="border-2 border-blue-900/40 shadow-xl overflow-hidden">
              <div className="p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3a5c 85%, #e2e8f0 100%)' }}>
                {/* Moving Reflection */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }} />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <Link to="/promos/free-logo-design" className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-accent transition-colors">
                      FREE Logo Design
                    </h2>
                    <p className="text-white/90">With Any Web Package Purchase</p>
                  </Link>
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
                        <span className="text-foreground">Multiple file formats for web and print use</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Unlimited revisions until satisfaction</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Eligibility Requirements</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        This promotional offer is exclusively available to clients who purchase any qualifying web package service from Studios by Dave.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        The free logo design service will be initiated upon confirmation of web package purchase.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        This offer cannot be combined with other promotional discounts unless otherwise specified.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Unlimited Referral Bonus Section */}
        <section className="py-20 bg-muted/30 relative">
          {/* Mascot Pointer */}
          <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
            <img
              src="/assets/promos/logo-mascot-pointer.png"
              alt="Mascot pointing to referral bonus"
              className="w-64 h-64 object-contain drop-shadow-lg transform scale-x-[-1]"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-40">
            <Card className="border-2 border-accent/20 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-trophy-gold to-trophy-gold/80 p-6 relative overflow-hidden">
                {/* Moving Reflection */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }} />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '3s' }} />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <Link to="/promos/referral-bonus" className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors">
                      Unlimited $100 Referral Bonus
                    </h2>
                    <p className="text-foreground/90">Earn Cash for Every Referral—No Limits!</p>
                  </Link>
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Free SEO Audit Section */}
        <section className="py-20 bg-background relative">
          {/* Mascot Pointer */}
          <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 animate-bounce-slow" style={{ animationDelay: '3s' }}>
            <img
              src="/assets/promos/logo-mascot-pointer.png"
              alt="Mascot pointing to SEO audit promotion"
              className="w-64 h-64 object-contain drop-shadow-lg"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-40">
            <Card className="border-2 border-blue-900/40 shadow-xl overflow-hidden">
              <div className="p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3a5c 85%, #e2e8f0 100%)' }}>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '2s' }} />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '3.5s' }} />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      FREE Website SEO Audit
                    </h2>
                    <p className="text-white/90">First 10 Lucky Callers Only</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What You Get</h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive SEO analysis of your website with actionable insights to improve your search engine rankings.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Complete on-page SEO analysis</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Technical SEO audit and recommendations</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Local SEO optimization review</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Competitor analysis and insights</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Actionable improvement roadmap</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Our Simple Request</h3>
                    <p className="text-muted-foreground mb-4">
                      In exchange for this comprehensive SEO audit (valued at $297), we only ask that you leave us an honest review on our Google My Business page.
                    </p>
                    <div className="bg-trophy-gold/20 border border-trophy-gold/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-trophy-gold font-semibold mb-2">
                        <Clock className="h-5 w-5" />
                        <span>Limited Time Offer</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Available to the first 10 lucky callers only. Act fast!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link to="/promos/free-seo-audit">
                    <Button variant="hero" size="lg" className="group">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="py-12 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-2">Terms & Conditions</h2>
              <p className="text-sm text-muted-foreground">Please review the following terms applicable to our promotional offers.</p>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-4 leading-relaxed">
              <p>
                <strong className="text-foreground">General Terms:</strong> All promotional offers are subject to change or 
                discontinuation at the sole discretion of Studios by Dave without prior notice. Promotions are valid only 
                for new service agreements and cannot be applied retroactively to existing contracts or completed transactions.
              </p>
              
              <p>
                <strong className="text-foreground">Free Logo Design Promotion:</strong> The complimentary logo design offer 
                is exclusively available to clients who execute a binding agreement for any web package service offered by 
                Studios by Dave. The logo design service will commence upon receipt of full payment or execution of an approved 
                payment plan. Studios by Dave reserves the right to determine the scope and deliverables of the complimentary 
                logo design based on standard service offerings.
              </p>
              
              <p>
                <strong className="text-foreground">Referral Bonus Program:</strong> A qualifying referral is defined as a new 
                client who (a) has not previously engaged Studios by Dave for services, (b) explicitly identifies the referring 
                party at the time of initial consultation, and (c) completes a purchase of a Standard Web Package ($998 or higher). 
                Referral bonuses of $100 per qualifying referral are paid via Visa gift card to the referring party and are subject 
                to applicable tax reporting requirements. Studios by Dave reserves the right to verify the legitimacy of all 
                referral claims and may withhold payment pending verification.
              </p>
              
              <p>
                <strong className="text-foreground">Limitation of Liability:</strong> Studios by Dave shall not be held liable 
                for any indirect, incidental, or consequential damages arising from participation in these promotional programs. 
                All services are provided "as is" and subject to the standard terms of service agreement.
              </p>
              
              <p>
                <strong className="text-foreground">Modification and Termination:</strong> Studios by Dave reserves the right to 
                modify, suspend, or terminate any promotional offer at any time without prior notice. In the event of 
                termination, any pending qualified referral bonuses will be honored according to the terms in effect at the 
                time of the qualifying referral.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                For complete terms, please review our{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © {new Date().getFullYear()} Studios by Dave. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default Promos;
