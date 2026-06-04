import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedLogosMarquee from "@/components/TrustedLogosMarquee";
import ServicesSection from "@/components/ServicesSection";
import NonExclusiveSection from "@/components/NonExclusiveSection";
import PromotionMarquee from "@/components/PromotionMarquee";

import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { organizationSchema, servicesSchema, localBusinessSchema, websiteSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [organizationSchema, servicesSchema, localBusinessSchema, websiteSchema];
  
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
