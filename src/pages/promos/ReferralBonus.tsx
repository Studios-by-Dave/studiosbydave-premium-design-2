import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import PixieDust from "@/components/PixieDust";
import { Link } from "react-router-dom";
import { Users, CheckCircle, ArrowRight, Clock, Banknote, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReferralBonus = () => {
  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Unlimited $100 Referral Bonus | Studios by Dave"
        description="Earn $100 for every successful referral with our unlimited referral bonus program. No limits on how much you can earn. Perfect for contractors and local businesses."
        keywords="referral bonus, earn money, referral program, $100 referral, studios by dave referral"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-luxury-bg noise-overlay" />
          <div className="absolute inset-0 radial-glow opacity-60" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20">
            <div className="relative inline-block mb-4">
              <div className="section-eyebrow animate-fade-in mx-auto">✦ Unlimited Rewards</div>
            </div>
            
            <h1 className="display-heading text-4xl md:text-6xl lg:text-7xl text-luxury-text-primary mb-8 leading-tight">
              Earn <span className="text-luxury-royal-blue">$100</span> for Every<br />
              <span className="text-luxury-lime">Successful Referral</span>
            </h1>
            
            <p className="font-body text-xl text-luxury-text-secondary max-w-2xl mx-auto mb-12">
              Share the quality. Reap the rewards. There are zero limits on how much you can earn by connecting us with businesses that need a digital edge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact#get-in-touch">
                <Button size="lg" className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-bold uppercase tracking-widest px-8">
                  Start Referring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <PixieDust />
        </section>

        {/* Benefits & Details */}
        <section className="py-32 bg-luxury-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="section-eyebrow mb-6">✦ Why Participate</div>
                <h2 className="display-heading text-3xl md:text-5xl text-luxury-text-primary mb-8">Your Network is Your Net Worth</h2>
                
                <div className="space-y-8 mt-12">
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <Banknote className="h-6 w-6 text-luxury-lime" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">$100 Cash Reward</h3>
                      <p className="font-body text-luxury-text-secondary">Earn a flat $100 referral fee for every qualifying new client you bring to Studios by Dave.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-6 w-6 text-luxury-royal-blue" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">No Earning Cap</h3>
                      <p className="font-body text-luxury-text-secondary">Refer 10 people, earn $1,000. Refer 100 people, earn $10,000. We value your connections.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-luxury-lime" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Rapid Payouts</h3>
                      <p className="font-body text-luxury-text-secondary">Bonuses are typically processed within 1-14 business days of the qualifying purchase confirmation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="luxury-card rounded-2xl p-10 relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-royal-blue/5 rounded-full blur-2xl -mr-10 -mt-10" />
                  
                  <h3 className="font-section text-2xl text-luxury-text-primary mb-8 uppercase tracking-widest text-center">Reward Roadmap</h3>
                  
                  <div className="space-y-8">
                    {[
                      { step: "01", title: "Spread the Word", desc: "Share our web design services with your network of business owners and contractors." },
                      { step: "02", title: "Intro Connection", desc: "Have the referred client mention your name when they contact us for a quote." },
                      { step: "03", title: "Qualifying Purchase", desc: "The client purchases any Standard Web Package ($998 or higher)." },
                      { step: "04", title: "Verification", desc: "We verify the order and your referral status immediately." },
                      { step: "05", title: "Get Paid", desc: "Receive your $100 Visa gift card as a thank you for your support." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <span className="font-display text-4xl text-luxury-royal-blue/30 group-hover:text-luxury-royal-blue/60 transition-colors">{item.step}</span>
                        <div>
                          <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                          <p className="font-body text-luxury-text-secondary text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/6 text-center">
                    <p className="text-xs text-luxury-text-secondary mb-6 font-body italic">
                      *Terms and conditions apply. Referral must mention your name at time of booking to qualify for the bonus.
                    </p>
                    <Link to="/contact#get-in-touch">
                      <Button className="w-full bg-luxury-royal-blue text-white hover:bg-luxury-royal-blue/90 font-bold uppercase tracking-widest">
                        Submit a Lead
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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

export default ReferralBonus;
