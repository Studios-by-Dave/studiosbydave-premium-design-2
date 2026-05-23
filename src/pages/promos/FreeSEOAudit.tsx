import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Search, CheckCircle, ArrowRight, Award, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FreeSEOAudit = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleSEO
        title="FREE Website SEO Audit Promotion | Studios by Dave"
        description="Get a comprehensive SEO audit for your website at no cost. Limited to first 10 callers. We only ask for a Google My Business review in exchange. Perfect for local businesses."
        keywords="free SEO audit, website analysis, SEO consultation, local SEO, Google My Business review, studios by dave promotion"
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
                FREE <span className="text-accent">Website SEO Audit</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                First 10 Lucky Callers Only - Limited Time Offer
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
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      FREE Website SEO Audit
                    </h2>
                    <p className="text-white/90">Comprehensive Analysis of Your Online Presence</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">What You Get</h3>
                    <p className="text-muted-foreground mb-6">
                      Our in-depth SEO audit examines your website's current performance and uncovers hidden opportunities to boost your search engine rankings. You'll receive a custom report with practical, business-specific recommendations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Complete on-page SEO analysis</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Technical SEO audit + fix recommendations</span>
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
                        <span className="text-foreground">Clear, prioritized action roadmap</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">How It Works</h3>
                    <p className="text-muted-foreground mb-4">
                      Getting your free SEO audit is quick and easy:
                    </p>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        Call us to claim your spot (limited to the first 10 callers)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        Share your website URL and basic business details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        We perform a thorough SEO analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">4.</span>
                        Receive your detailed audit report
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">5.</span>
                        Leave us an honest review on our Google My Business page
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Exchange Requirement - Emphasized */}
                <div className="mt-8 bg-gradient-to-r from-trophy-gold/30 to-trophy-gold/20 border-2 border-trophy-gold/50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="h-8 w-8 text-trophy-gold" />
                    <h3 className="text-2xl font-bold text-foreground">Our Simple Request</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">
                    In exchange for this comprehensive SEO audit (normally valued at $297), we simply ask for an honest review on our Google My Business page.
                  </p>
                  <div className="bg-trophy-gold/10 border border-trophy-gold/30 rounded-lg p-4">
                    <p className="text-foreground font-semibold text-center">
                      🎁 FREE SEO Audit = One Honest Google Review
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Your feedback helps us grow and allows us to continue helping more local businesses like yours. Thank you in advance!
                  </p>
                </div>

                {/* Limited Time Offer Banner */}
                <div className="mt-6 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">Limited Time Offer</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    This free SEO audit is available to the first 10 callers only. Once the spots are gone, the offer ends.
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Award className="h-5 w-5" />
                    <span>Act fast — availability is extremely limited!</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Link to="/contact#get-in-touch">
                    <Button variant="hero" size="lg" className="group mb-4">
                      Claim Your Free SEO Audit Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <div className="bg-muted/50 rounded-lg p-4 inline-block">
                    <p className="text-foreground font-semibold mb-2">Or Text Us:</p>
                    <a href="sms:7044738188" className="text-2xl font-bold text-accent hover:underline">
                      Text "SEO" to (704) 473-8188
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    *Limited to first 10 callers. Must provide Google My Business review to receive audit.
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

export default FreeSEOAudit;
