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
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            <PixieDust />
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Logo Design &{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Branding Solutions
              </span>
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Professional branding that makes your business stand out. From logos to complete 
            brand identity packages, we create memorable brands for contractors and local businesses.
          </p>
          <Link to="/contact#get-in-touch">
            <Button variant="hero" size="lg">
              Start Your Brand Design
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Logo Design & Branding
            </h2>
            <p className="text-2xl text-muted-foreground font-semibold">
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
            ].map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-card relative overflow-hidden bg-white/80 backdrop-blur-sm">
                <div 
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `url(${service.backdrop})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
                    mixBlendMode: 'multiply'
                  }}
                />
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Portfolio Marquee */}
      <LogoMarquee />

      {/* Branding Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Choose Your Branding Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From essential brand basics to comprehensive marketing systems, we have the perfect package to establish and grow your business identity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Starter Brand Package</CardTitle>
                  <CardDescription className="text-lg mt-2 italic">Perfect for new businesses getting started</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="border-2 border-primary shadow-elegant relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Professional Brand Package</CardTitle>
                  <CardDescription className="text-lg mt-2 italic">Complete branding solution for established businesses</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-platinum rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Award size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Enterprise Brand Package</CardTitle>
                  <CardDescription className="text-lg mt-2 italic">Complete marketing system for growing companies</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact#get-in-touch">
              <Button variant="hero" size="lg">
                Get Started with Your Brand Package
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Showcase Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="relative">
            <div className="flex animate-scroll space-x-16 items-center">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-16 items-center">
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">BuildCorp</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">SolarMax</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">GreenScape</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">RoofPro</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">EliteWork</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">PowerGen</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
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
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          <div className="relative">
            <img 
              src={brandKitShowcase} 
              alt="Studios by Dave brand kit showcase featuring logo variations and brand identity designs" 
              className="w-full h-auto rounded-2xl shadow-elegant"
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
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Your Brand Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your brand deserves a complete digital presence. Explore our services that complement your new brand identity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Web Design Service */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Web Design</h3>
              <p className="text-muted-foreground mb-4">
                Websites that perfectly reflect your brand identity and convert visitors into loyal customers.
              </p>
              <Link to="/services/web-design" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Get Branded Website
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* SEO Service */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">SEO Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Get your branded business found online with SEO strategies that build on your brand recognition.
              </p>
              <Link to="/services/seo" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Boost Brand Visibility
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Google Optimization */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Google Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Ensure your brand appears consistently across Google Search, Maps, and Business Profile.
              </p>
              <Link to="/services/google-optimization" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Optimize Brand Presence
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Blog Articles */}
          <div className="bg-background/50 p-8 rounded-xl border border-border/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Branding & Marketing Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Branding Strategy</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/why-choose-studios-by-dave" className="text-primary hover:text-primary/80 underline">
                      Why Choose Studios by Dave Over Local Competition?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/does-your-business-need-a-website-2026" className="text-primary hover:text-primary/80 underline">
                      Does Your Business Really Need a Website in 2026?
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Business Growth</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/local-seo-essentials-2026" className="text-primary hover:text-primary/80 underline">
                      Local SEO Essentials for Shelby Businesses in 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/website-mistakes-costing-customers" className="text-primary hover:text-primary/80 underline">
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