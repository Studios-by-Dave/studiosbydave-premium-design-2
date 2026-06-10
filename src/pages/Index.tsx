import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedLogosMarquee from "@/components/TrustedLogosMarquee";
import ServicesSection from "@/components/ServicesSection";
import NonExclusiveSection from "@/components/NonExclusiveSection";
import PromotionMarquee from "@/components/PromotionMarquee";
import { Star } from "lucide-react";

import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { organizationSchema, servicesSchema, localBusinessSchema, websiteSchema, googleReviewsSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [organizationSchema, servicesSchema, localBusinessSchema, websiteSchema, ...googleReviewsSchema];
  
  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Your Local Shelby NC Web Designer & App Developer"
        description="Your Local Shelby, NC web design, app development & digital marketing studio. Building modern websites and custom web apps that drive real growth for local businesses. Free logo design included + $100 referral rewards."
        keywords="web design contractors, roofing contractor websites, landscaping web design, solar panel installer marketing, SEO for contractors, AI automation business, North Carolina web design"
        structuredData={structuredData}
      />
      <h1 className="sr-only">Studios by Dave - Web Design and Digital Marketing Services in Shelby, NC</h1>
      <Navigation />
      <PromotionMarquee />
      <main>
        <HeroSection />
        <TrustedLogosMarquee />
        <ServicesSection />
        
        <NonExclusiveSection />
        
        {/* Testimonials Section */}
        <section className="py-32 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-eyebrow text-center mb-4">✦ Client Results</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl text-center mb-16">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="luxury-card rounded-xl p-8 relative">
                <div className="absolute top-4 right-4 text-6xl font-display text-luxury-royal-blue/20">"</div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
                </div>
                <p className="accent-text text-luxury-text-secondary text-lg mb-6 leading-relaxed">"Dave really presented /uncovered opportunities that we wouldn't have ever known otherwise. And now our website is really generating our online business beautifully! Thanks again Dave! 😃"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-luxury-royal-blue/10 flex items-center justify-center">
                    <span className="text-luxury-royal-blue font-bold text-lg">PR</span>
                  </div>
                  <div>
                    <p className="font-section text-luxury-text-primary text-sm uppercase tracking-wider">Paul Richardson</p>
                    <p className="font-body text-luxury-text-secondary text-xs">Local Guide</p>
                  </div>
                </div>
              </div>
              <div className="luxury-card rounded-xl p-8 relative">
                <div className="absolute top-4 right-4 text-6xl font-display text-luxury-royal-blue/20">"</div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
                </div>
                <p className="accent-text text-luxury-text-secondary text-lg mb-6 leading-relaxed">"Studios by Dave really knocked it out of the park. Our online presence is not only fully present, its generating our business so many leads now! Thank You!!!"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-luxury-royal-blue/10 flex items-center justify-center">
                    <span className="text-luxury-royal-blue font-bold text-lg">RJ</span>
                  </div>
                  <div>
                    <p className="font-section text-luxury-text-primary text-sm uppercase tracking-wider">Ryan "Kris" Jones</p>
                    <p className="font-body text-luxury-text-secondary text-xs">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
