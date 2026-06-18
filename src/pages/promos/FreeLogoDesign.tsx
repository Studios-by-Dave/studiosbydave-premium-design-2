import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import PixieDust from "@/components/PixieDust";
import { Link } from "react-router-dom";
import { Gift, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeLogoDesign = () => {
  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="FREE Logo Design Promotion | Studios by Dave"
        description="Get a professionally designed custom logo at no additional cost when you purchase any of our comprehensive web package services. Limited time offer for contractors and local businesses."
        keywords="free logo design, logo promotion, web package deal, custom logo offer, studios by dave promotion"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-luxury-bg noise-overlay" />
          <div className="absolute inset-0 radial-glow opacity-60" />
          
          {/* Decorative background logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-royal-blue/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20">
            <div className="relative inline-block mb-4">
              <div className="section-eyebrow animate-fade-in mx-auto">✦ Limited Time Offer</div>
            </div>
            
            <h1 className="display-heading text-4xl md:text-6xl lg:text-7xl text-luxury-text-primary mb-8 leading-tight">
              elevate your brand with<br />
              <span className="text-luxury-royal-blue">FREE</span> <span className="text-luxury-lime">logo design</span>
            </h1>
            
            <p className="font-body text-xl text-luxury-text-secondary max-w-2xl mx-auto mb-12">
              Get a custom, premium brand identity included with any professional web package. Start your journey with a logo that commands respect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact#get-in-touch">
                <Button size="lg" className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-bold uppercase tracking-widest px-8">
                  Claim Your Logo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio" className="text-luxury-text-primary hover:text-luxury-lime transition-colors font-semibold flex items-center gap-2">
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <PixieDust />
        </section>

        {/* Promotion Details */}
        <section className="py-32 bg-luxury-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-luxury-royal-blue/10 rounded-full blur-3xl" />
                <div className="section-eyebrow mb-6">✦ The Creative Edge</div>
                <h2 className="display-heading text-3xl md:text-5xl text-luxury-text-primary mb-8">Professional Identity, No Extra Cost</h2>
                
                <div className="space-y-8 mt-12">
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <Sparkles className="h-6 w-6 text-luxury-lime" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Custom Tailored Design</h3>
                      <p className="font-body text-luxury-text-secondary">Every logo is crafted from scratch to reflect your business values and target audience. No templates, ever.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-6 w-6 text-luxury-royal-blue" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Full Source Files</h3>
                      <p className="font-body text-luxury-text-secondary">You get complete ownership with all formats needed: AI, EPS, SVG, PNG, and JPG for web and print.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-xl bg-luxury-surface border border-white/6 flex items-center justify-center shrink-0">
                      <Gift className="h-6 w-6 text-luxury-lime" />
                    </div>
                    <div>
                      <h3 className="font-section text-xl text-luxury-text-primary mb-2 uppercase tracking-wide">Branding Kit Included</h3>
                      <p className="font-body text-luxury-text-secondary">We provide a specific color palette and typography guide to ensure your brand remains consistent everywhere.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="luxury-card rounded-2xl p-10 relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-lime/5 rounded-full blur-2xl -mr-10 -mt-10" />
                  
                  <h3 className="font-section text-2xl text-luxury-text-primary mb-8 uppercase tracking-widest text-center">Process Roadmap</h3>
                  
                  <div className="space-y-8">
                    {[
                      { step: "01", title: "Web Package Purchase", desc: "Select any of our comprehensive web design or development packages." },
                      { step: "02", title: "Creative Brief", desc: "Share your vision, color preferences, and business goals with our Team." },
                      { step: "03", title: "Initial Concepts", desc: "Review 3 unique design directions within 5 business days." },
                      { step: "04", title: "Refinement", desc: "Unlimited revisions to ensure your new logo is absolutely perfect." },
                      { step: "05", title: "Final Launch", desc: "Receive your high-resolution files and start dominating your market." }
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
                    <Link to="/contact#get-in-touch">
                      <Button className="w-full bg-luxury-royal-blue text-white hover:bg-luxury-royal-blue/90 font-bold uppercase tracking-widest">
                        Start Your Brand
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Floating Mascot Image - subtle touch */}
                <img 
                  src="/assets/promos/logo-mascot-pointer.png" 
                  alt="" 
                  className="absolute -bottom-20 -right-20 w-64 h-64 grayscale opacity-20 pointer-events-none z-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-luxury-surface/50 border-y border-white/6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
            </div>
            <p className="font-display italic text-2xl md:text-3xl text-luxury-text-primary mb-8">
              "The free logo we received with our website package was better than what we paid thousands for in the past. Dave truly understands brand identity."
            </p>
            <p className="font-section text-sm uppercase tracking-widest text-luxury-royal-blue">
              — Mark Sullivan, Sullivan Hardscapes
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

export default FreeLogoDesign;
