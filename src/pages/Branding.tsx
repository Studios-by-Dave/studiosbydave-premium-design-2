import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Palette, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema } from "@/data/structuredData";
import brandKitShowcase from "@/assets/brand-kit-showcase.png";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import mediaPacksBackdrop from "@/assets/media-packs-backdrop.jpg";

const Branding = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Logo Design & Branding", url: "https://www.studiosbydave.com/branding" }
  ]);

  const brandingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Logo Design and Branding Services",
    "description": "Professional logo design and complete branding packages for contractors and local businesses. Create memorable brands that build trust and credibility.",
    "provider": {
      "@type": "Organization", 
      "name": "Studios by Dave"
    },
    "serviceType": "Logo Design and Brand Identity",
    "offers": {
      "@type": "Offer",
      "description": "Complete branding solutions including logo design, brand identity packages, business cards, and marketing materials."
    }
  };

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Professional Logo Design & Branding for Contractors - Brand Identity"
        description="Professional logo design and branding services for contractors and local businesses. Create memorable brand identity that builds trust with customers. Custom logos and complete branding packages."
        keywords="logo design contractors, branding for contractors, professional logo design, brand identity design, business logo design, contractor branding, marketing materials design"
        structuredData={[breadcrumbs, brandingSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center">
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Brand Identity</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-6xl mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Logo Design &{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Branding Solutions
              </span>
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional branding that makes your business stand out. From logos to complete 
            brand identity packages, we create memorable brands for contractors and local businesses.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Start Your Brand Design</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-eyebrow mb-4">✦ What We Offer</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-4">
              Logo Design & Branding
            </h2>
            <p className="font-body text-luxury-text-secondary text-2xl font-semibold">
              Complete Branding Solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Logo Design",
                description: "Custom logos crafted to capture your business essence and create lasting first impressions with professional, memorable designs.",
                backdrop: webDesignBackdrop
              },
              {
                icon: Users,
                title: "Brand Identity",
                description: "Comprehensive visual identity systems including color palettes, typography, and brand guidelines for consistent messaging.",
                backdrop: brandingBackdrop
              },
              {
                icon: Target,
                title: "Marketing Materials",
                description: "Complete suite of print and digital materials from business cards to vehicle wraps that amplify your brand presence.",
                backdrop: googleBackdrop
              },
              {
                icon: Award,
                title: "Brand Strategy",
                description: "Strategic positioning and messaging that differentiates your business and resonates with your target market.",
                backdrop: mediaPacksBackdrop
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="luxury-card rounded-xl p-8 relative overflow-hidden group text-center">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-luxury-lime/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-lime/20 transition-colors">
                      <IconComponent size={32} className="text-luxury-lime" />
                    </div>
                    <h3 className="display-heading text-luxury-text-primary text-xl mb-4 group-hover:text-luxury-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-luxury-text-secondary text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo Portfolio Marquee */}
      <LogoMarquee />

      {/* Branding Packages Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-eyebrow mb-4">✦ Packages</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6">
              Choose Your Branding Package
            </h2>
            <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto">
              From essential brand basics to comprehensive marketing systems, we have the perfect package to establish and grow your business identity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="luxury-card rounded-xl p-6 transition-all duration-300 group relative hover:border-luxury-royal-blue/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-luxury-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-royal-blue/20 transition-colors">
                  <Palette size={32} className="text-luxury-royal-blue" />
                </div>
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-2">Starter Brand Package</h3>
                <p className="font-body text-luxury-royal-blue text-lg italic">Perfect for new businesses getting started</p>
              </div>
              <div className="space-y-3">
                {[
                  "Custom Logo Design (3 concepts)",
                  "Basic Brand Guidelines",
                  "Business Card Design",
                  "Letterhead Template",
                  "Email Signature Design",
                  "Social Media Profile Package",
                  "Basic Brand Color Palette"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-luxury-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Package */}
            <div className="luxury-card rounded-xl p-6 relative transition-all duration-300 group hover:border-luxury-lime/50 border border-luxury-lime/30">
              <div className="absolute top-0 right-0 bg-luxury-lime text-black px-4 py-1 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="text-center mb-6 pt-4">
                <div className="w-16 h-16 bg-luxury-lime/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-lime/20 transition-colors">
                  <Users size={32} className="text-luxury-lime" />
                </div>
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-2">Professional Brand Package</h3>
                <p className="font-body text-luxury-lime text-lg italic">Complete branding solution for established businesses</p>
              </div>
              <div className="space-y-3">
                {[
                  "Premium Logo Design (5 concepts + revisions)",
                  "Comprehensive Brand Guidelines",
                  "Business Cards & Stationery Suite",
                  "Brochure & Flyer Templates",
                  "Vehicle Decal/Wrap Design",
                  "Yard Sign & Banners",
                  "Website Header Graphics",
                  "Social Media Brand Kit",
                  "Invoice & Estimate Templates",
                  "Extended Brand Color System"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-luxury-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="luxury-card rounded-xl p-6 transition-all duration-300 group relative hover:border-luxury-purple/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-luxury-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-purple/20 transition-colors">
                  <Award size={32} className="text-luxury-purple" />
                </div>
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-2">Enterprise Brand Package</h3>
                <p className="font-body text-luxury-purple text-lg italic">Complete marketing system for growing companies</p>
              </div>
              <div className="space-y-3">
                {[
                  "Premium Logo Suite (Multiple variations)",
                  "Complete Brand Manual & Guidelines",
                  "Full Stationery & Business Materials",
                  "Marketing Collateral Suite",
                  "Full Vehicle Wrap Design",
                  "Large Format Signage Package",
                  "Trade Show & Event Materials",
                  "Uniform & Apparel Designs",
                  "Complete Digital Brand Package",
                  "Brand Photography Guidelines",
                  "Ongoing Brand Consultation (3 months)",
                  "Brand Implementation Support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                    <span className="font-body text-luxury-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact#get-in-touch">
              <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                <span className="relative z-10">Get Started with Your Brand Package</span>
                <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Showcase Section */}
      <section className="py-32 bg-luxury-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Portfolio</div>
            <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="relative">
            <div className="flex animate-scroll space-x-16 items-center">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-16 items-center">
                  <div className="flex-shrink-0 h-16 w-32 bg-luxury-surface border border-white/6 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-text-secondary">BuildCorp</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-luxury-surface border border-white/6 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-text-secondary">SolarMax</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-luxury-surface border border-white/6 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-text-secondary">GreenScape</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-luxury-surface border border-white/6 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-text-secondary">RoofPro</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-luxury-surface border border-white/6 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-text-secondary">EliteWork</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-luxury-surface border border-white/6 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-luxury-text-secondary">PowerGen</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-4">✦ Benefits</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-8">
                Why Professional Branding Matters
              </h2>
              <div className="space-y-6">
                {[
                  "Builds trust and credibility with potential customers",
                  "Differentiates you from competitors in your market",
                  "Creates memorable first impressions",
                  "Increases perceived value of your services",
                  "Provides consistency across all marketing materials"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-6 h-6 flex-shrink-0" />
                    <p className="font-body text-luxury-text-secondary text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          <div className="relative">
            <img 
              src={brandKitShowcase} 
              alt="Studios by Dave brand kit showcase featuring logo variations and brand identity designs" 
              className="w-full h-auto rounded-2xl luxury-card"
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Complete Your Brand</div>
            <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-4">Complete Your Brand Experience</h2>
            <p className="font-body text-luxury-text-secondary text-lg max-w-2xl mx-auto">
              Your brand deserves a complete digital presence. Explore our services that complement your new brand identity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Web Design Service */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Web Design</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Websites that perfectly reflect your brand identity and convert visitors into loyal customers.
              </p>
              <Link to="/services/web-design" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Get Branded Website
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* SEO Service */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">SEO Optimization</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Get your branded business found online with SEO strategies that build on your brand recognition.
              </p>
              <Link to="/services/seo" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Boost Brand Visibility
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Media Packs */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Media Packs</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Launch your brand across platforms with comprehensive digital asset packages.
              </p>
              <Link to="/services/media-packs" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Explore Media Packs
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Blog Articles */}
          <div className="bg-luxury-surface p-8 rounded-xl border border-white/6">
            <h3 className="display-heading text-luxury-text-primary text-2xl mb-6 text-center">Branding & Marketing Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-3">Branding Strategy</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/why-choose-studios-by-dave" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Why Choose Studios by Dave Over Local Competition?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/does-your-business-need-a-website-2026" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Does Your Business Really Need a Website in 2026?
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-3">Business Growth</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/local-seo-essentials-2026" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Local SEO Essentials for Shelby Businesses in 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/website-mistakes-costing-customers" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      5 Common Website Mistakes Costing Local Businesses Customers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;