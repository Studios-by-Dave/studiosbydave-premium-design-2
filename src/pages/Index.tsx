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
    <div className="min-h-screen">
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
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-border/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">"Dave really presented /uncovered opportunities that we wouldn't have ever known otherwise. And now our website is really generating our online business beautifully! Thanks again Dave! 😃"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">PR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Paul Richardson</p>
                    <p className="text-sm text-muted-foreground">Local Guide</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-border/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">"Studios by Dave really knocked it out of the park. Our online presence is not only fully present, its generating our business so many leads now! Thank You!!!"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">RJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ryan "Kris" Jones</p>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
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
