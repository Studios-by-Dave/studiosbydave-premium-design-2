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
        title="Studios by Dave - Web Development & Digital Marketing for Local Businesses"
        description="Web Design Shelby, NC - Free Logo Design - Unlimited $100 Referrals"
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
