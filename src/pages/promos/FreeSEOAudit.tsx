import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import PixieDust from "@/components/PixieDust";
import { Link } from "react-router-dom";
import { Search, CheckCircle, ArrowRight, Award, Clock, Target, Gift, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeSEOAudit = () => {
  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="FREE Website SEO Audit Promotion | Studios by Dave"
        description="Get a comprehensive SEO audit for your website at no cost. Limited to first 10 callers. We only ask for a Google My Business review in exchange. Perfect for local businesses."
        keywords="free SEO audit, website analysis, SEO consultation, local SEO, Google My Business review, studios by dave promotion"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-luxury-bg noise-overlay" />
          <div className="absolute inset-0 radial-glow opacity-60" />
          
          {/* Decorative aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-purple/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20">
            <div className="relative inline-block mb-4">
              <div className="section-eyebrow animate-fade-in mx-auto px-6 py-2 bg-luxury-purple/10 border border-luxury-purple/20 text-luxury-purple rounded-full">
                ✦ Limited: First 10 Business Owners Only
              </div>
            </div>
            
            <h1 className="display-heading text-4xl md:text-6xl lg:text-7xl text-luxury-text-primary mb-8 leading-tight">
              unlock your growth with a<br />
              <span className="text-luxury-royal-blue">FREE</span> <span className="text-luxury-lime">SEO audit</span>
            </h1>
            
            <p className="font-body text-xl text-luxury-text-secondary max-w-2xl mx-auto mb-12">
              Uncover the hidden obstacles holding your website back from Page 1. Get a comprehensive, expert analysis normally valued at $297—at zero cost.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact#get-in-touch">
                <Button size="lg" className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-bold uppercase tracking-widest px-8">
                  Claim Your Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="sms:7044738188" className="text-luxury-text-primary hover:text-luxury-lime transition-colors font-semibold flex items-center gap-2 group">
                Text <span className="text-luxury-lime group-hover:underline">"SEO"</span> to (704) 473-8188
              </a>
            </div>
          </div>

          <PixieDust />
        </section>

        {/* Audit Details */}
        <section className="py-32 bg-luxury-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="section-eyebrow mb-6">✦ Intelligence Driven</div>
                <h2 className="display-heading text-3xl md:text-5xl text-luxury-text-primary mb-8">What Your Report Includes</h2>
                
                <div className="space-y-8 mt-12">
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <Target className="h-6 w-6 text-luxury-lime" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Market Visibility Score</h3>
                      <p className="font-body text-luxury-text-secondary">See exactly where you stand against your top 3 competitors in local search results.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-6 w-6 text-luxury-royal-blue" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Technical Health Check</h3>
                      <p className="font-body text-luxury-text-secondary">Identify site speed issues, broken links, and metadata gaps that are killing your conversions.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <Sparkles className="h-6 w-6 text-luxury-lime" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Actionable Roadmap</h3>
                      <p className="font-body text-luxury-text-secondary">We don't just find problems—we give you a prioritized task list to start fixing them immediately.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="luxury-card rounded-2xl p-10 relative z-10 overflow-hidden border-luxury-purple/20 shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-purple/10 rounded-full blur-2xl -mr-10 -mt-10" />
                  
                  <h3 className="font-section text-2xl text-luxury-text-primary mb-8 uppercase tracking-widest text-center">Audit Roadmap</h3>
                  
                  <div className="space-y-8">
                    {[
                      { step: "01", title: "Claim Your Slot", desc: "Spots are limited to the first 10 callers to ensure deep-dive quality." },
                      { step: "02", title: "Domain Analysis", desc: "Provide your URL and we'll run it through our premium enterprise SEO tools." },
                      { step: "03", title: "Manual Review", desc: "Dave personally reviews the data to find insights tools often miss." },
                      { step: "04", title: "Strategy Session", desc: "Receive your report and a high-level overview of our top recommendations." },
                      { step: "05", title: "The Exchange", desc: "Simply leave us an honest Google Review to pay it forward." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <span className="font-display text-4xl text-luxury-purple/30 group-hover:text-luxury-purple/60 transition-colors">{item.step}</span>
                        <div>
                          <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                          <p className="font-body text-luxury-text-secondary text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/6 text-center">
                    <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-xs font-body text-luxury-text-secondary italic">
                        In exchange for our $297 Audit, we simply request an honest review on our Google Business Profile.
                      </p>
                    </div>
                    <Link to="/contact#get-in-touch">
                      <Button className="w-full bg-luxury-royal-blue text-white hover:bg-luxury-royal-blue/90 font-bold uppercase tracking-widest">
                        Apply for Audit
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-20 bg-luxury-surface/50 border-y border-white/6 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <Clock className="absolute top-0 left-0 h-32 w-32 text-white/5 -translate-x-12 -translate-y-12" />
            <h3 className="font-section text-2xl text-luxury-text-primary mb-6 uppercase tracking-widest flex items-center justify-center gap-3">
              <Award className="h-6 w-6 text-luxury-lime" />
              Availability is extremely limited
            </h3>
            <p className="font-display text-xl md:text-2xl text-luxury-text-secondary mb-8">
              Once the 10 monthly slots are filled, the offer expires. Secure your competitive advantage today before your competitors do.
            </p>
          </div>
        </section>

        {/* Back to All Promos */}
        <section className="py-24 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/promos" className="group text-luxury-text-secondary hover:text-luxury-text-primary transition-colors flex items-center justify-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to All Promotions
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeSEOAudit;
