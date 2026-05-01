import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema, serviceSchema, localServiceSchema } from "@/data/structuredData";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import mediaPacksBackdrop from "@/assets/media-packs-backdrop.jpg";
import comptiaLogo from "@/assets/marquee-logos/comptia.png";

const WebDesign = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Web Design", url: "https://www.studiosbydave.com/services/web-design" }
  ]);

  const webDesignSchema = serviceSchema(
    "Professional Web Design for Contractors",
    "Custom responsive websites designed specifically for roofing contractors, landscaping companies, and solar panel installers with mobile-first design and SEO optimization.",
    "https://www.studiosbydave.com/services/web-design"
  );

  const localWebDesignSchema = localServiceSchema(
    "Web Design Services",
    "Local web design services in Shelby, NC. We create custom websites for contractors including roofing, landscaping, and solar installation companies.",
    "https://www.studiosbydave.com/services/web-design"
  );

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Professional Web Design for Contractors - Mobile-Responsive Websites"
        description="Custom web design for roofing contractors, landscaping companies, and solar installers. Mobile-first responsive websites that convert visitors into customers. Get your free quote today."
        keywords="contractor web design, roofing contractor websites, landscaping web design, solar installer websites, mobile responsive design, lead generation websites, professional web development"
        structuredData={[breadcrumbs, webDesignSchema, localWebDesignSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16" itemScope itemType="https://schema.org/WebPageElement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            <PixieDust />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6" itemProp="headline">
              Professional{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Web Design
              </span>
              {" "}with You in Mind
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" itemProp="description">
            Custom websites that turn visitors into paying customers—designed specifically 
            for local small businesses.
          </p>
          <Link to="/contact#get-in-touch">
            <Button variant="hero" size="lg">
              Get Your Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-subtle" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16" itemProp="name">
            Everything Your Business Website Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Responsive designs that work perfectly on all devices",
                features: ["Responsive Layout", "Touch-Optimized", "Fast Loading", "Works Everywhere"],
                backdrop: webDesignBackdrop
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed to keep visitors engaged",
                features: ["Optimized Performance", "Fast Load Times", "Better Rankings", "User Retention"],
                backdrop: brandingBackdrop
              },
              {
                icon: Search,
                title: "SEO Optimized",
                description: "Built-in SEO to help you rank higher in search results",
                features: ["On-Page SEO", "Technical SEO", "Local SEO", "Rankings Boost"],
                backdrop: googleBackdrop
              },
              {
                icon: Globe,
                title: "Lead Generation",
                description: "Contact forms and CTAs designed to convert visitors",
                features: ["Contact Forms", "Call-to-Action", "Conversion Tracking", "Lead Capture"],
                backdrop: mediaPacksBackdrop
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative">
                  <div 
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `url(${feature.backdrop})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <CardHeader className="pb-4 relative z-10">
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-primary-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
                      <IconComponent size={28} className="text-white drop-shadow-md relative z-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-foreground/80">
                          <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services & Resources Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
            {/* Left Certification Image */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/certified-badge.png"
                alt="Certified professional web design services" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Center Text */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Complete Your Digital Presence</h2>
              <p className="text-lg text-muted-foreground">
                A great website is just the beginning. Explore our other services to maximize your online success
              </p>
            </div>
            
            {/* Right Certification Image */}
            <div className="flex justify-center">
              <img 
                src={comptiaLogo}
                alt="CompTIA A+ Certified professional" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Branding Service */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Professional Branding</h3>
              <p className="text-muted-foreground mb-4">
                Complete brand identity packages including logos, color schemes, and brand guidelines that complement your new website.
              </p>
              <Link to="/services/branding" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Explore Branding Services
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* SEO Service */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">SEO Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Get your new website found by local customers with our comprehensive SEO services tailored for contractors.
              </p>
              <Link to="/services/seo" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Boost Your Rankings
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Google Optimization */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Google Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Optimize your Google Business Profile and local search presence to dominate your local market.
              </p>
              <Link to="/services/google-optimization" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Improve Local Search
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Blog Articles */}
          <div className="bg-background/50 p-8 rounded-xl border border-border/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Helpful Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Web Design Insights</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/does-your-business-need-a-website-2026" className="text-primary hover:text-primary/80 underline">
                      Does Your Business Really Need a Website in 2026?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/website-mistakes-costing-customers" className="text-primary hover:text-primary/80 underline">
                      5 Common Website Mistakes Costing Local Businesses Customers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">SEO & Marketing Tips</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/local-seo-essentials-2026" className="text-primary hover:text-primary/80 underline">
                      Local SEO Essentials for Shelby Businesses in 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/why-choose-studios-by-dave" className="text-primary hover:text-primary/80 underline">
                      Why Choose Studios by Dave Over Local Competition?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4" itemProp="name">
            Web Design Packages
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Choose the perfect package for your business needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Launch Package */}
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl trophy-gold-text">Launch Package</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">1-5 Page Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Up to 5 custom-designed pages",
                    "Mobile-responsive design",
                    "Basic SEO setup",
                    "Contact form integration",
                    "Social media links",
                    "1 round of revisions",
                    "Estimated delivery: 4-6 weeks"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full" size="lg">
                    Contact for Free Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="border-2 border-primary relative shadow-elegant">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl trophy-gold-text">Scale Package</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">6-10 Page Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Up to 10 custom-designed pages",
                    "Mobile-responsive design",
                    "Advanced SEO optimization",
                    "Blog/News section",
                    "Google Analytics integration",
                    "Lead capture forms",
                    "Photo gallery",
                    "3 rounds of revisions",
                    "Estimated delivery: 4-6 weeks"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="primary" className="w-full" size="lg">
                    Contact for Free Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Transform Package */}
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl trophy-gold-text">Transform Package</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">15+ Page Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Unlimited pages",
                    "E-commerce or booking system",
                    "Comprehensive SEO strategy",
                    "CMS for easy content updates",
                    "Email marketing integration",
                    "Custom functionality",
                    "Priority support",
                    "Unlimited revisions",
                    "Estimated delivery: 5-8 weeks"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full" size="lg">
                    Contact for Free Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Web Flyers Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="crazy-gradient-text mb-4">Current Web Flyers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our current marketing flyers showcasing our web design and e-commerce solutions for different business needs
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Original Local Business Flyer */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Local Business Web Design</h3>
              <p className="text-muted-foreground mb-4">Professional web design services for local contractors and small businesses</p>
              <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/flyers/Web Flyer.jpg" 
                  alt="Local Business Web Design Flyer - Professional web design services for contractors and small businesses"
                  className="w-full h-auto object-contain max-w-none"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* E-commerce Flyer 1 */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Premium E-commerce Solutions</h3>
              <p className="text-muted-foreground mb-4">Complete online store solutions with custom domains and Shopify integration</p>
              <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/flyers/New Flyer_1.jpg" 
                  alt="Premium E-commerce Solutions Flyer - Shopify stores and custom domains for online businesses"
                  className="w-full h-auto object-contain max-w-none"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* E-commerce Flyer 2 */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Advanced Online Stores</h3>
              <p className="text-muted-foreground mb-4">Professional e-commerce platforms with advanced features for growing businesses</p>
              <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/flyers/New Flyer_2.jpg" 
                  alt="Advanced Online Stores Flyer - Professional e-commerce solutions for businesses"
                  className="w-full h-auto object-contain max-w-none"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in any of these services? Contact us for a free consultation!
            </p>
            <Link to="/contact#get-in-touch">
              <Button variant="hero" size="lg">
                Get Your Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles & Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Related Resources</h3>
            <p className="text-muted-foreground">Learn more about web design and digital marketing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Articles */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Latest Articles
              </h4>
              <div className="space-y-3">
                <Link to="/blog/does-your-business-need-a-website-2026" className="block p-3 rounded-lg border border-border/30 hover:border-accent/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-accent transition-colors">Does Your Business Need a Website in 2026?</h5>
                  <p className="text-sm text-muted-foreground mt-1">Why websites still matter for business growth</p>
                </Link>
                <Link to="/blog/website-mistakes-costing-customers" className="block p-3 rounded-lg border border-border/30 hover:border-accent/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-accent transition-colors">5 Common Website Mistakes</h5>
                  <p className="text-sm text-muted-foreground mt-1">Fix costly errors that hurt your business</p>
                </Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Complementary Services
              </h4>
              <div className="space-y-3">
                <Link to="/services/branding" className="block p-3 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-primary transition-colors">Logo Design & Branding</h5>
                  <p className="text-sm text-muted-foreground mt-1">Complete brand identity solutions</p>
                </Link>
                <Link to="/services/seo" className="block p-3 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-primary transition-colors">SEO Services</h5>
                  <p className="text-sm text-muted-foreground mt-1">Get found by your ideal customers</p>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-trophy-gold rounded-full"></span>
                Next Steps
              </h4>
              <div className="space-y-3">
                <Link to="/services/promos" className="block p-3 rounded-lg bg-trophy-gold/10 hover:bg-trophy-gold/20 transition-colors border border-trophy-gold/20">
                  <h5 className="font-medium text-foreground">Current Promotions</h5>
                  <p className="text-sm text-muted-foreground mt-1">Special offers on web design</p>
                </Link>
                <Link to="/booking" className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20">
                  <h5 className="font-medium text-primary">Book a Consultation</h5>
                  <p className="text-sm text-muted-foreground mt-1">Schedule your free strategy session</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesign;