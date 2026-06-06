import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema, serviceSchema, localServiceSchema, webDesignFAQSchema, webPackageOfferSchema, googleReviewsSchema } from "@/data/structuredData";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import mediaPacksBackdrop from "@/assets/media-packs-backdrop.jpg";

const WebDesignCharlotte = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Web Design Charlotte", url: "https://www.studiosbydave.com/web-design-charlotte-nc" }
  ]);

  const charlotteWebDesignSchema = serviceSchema(
    "Professional Web Design Charlotte NC",
    "Custom responsive websites designed specifically for Charlotte businesses including contractors, retail, restaurants, and professional services with mobile-first design and SEO optimization.",
    "https://www.studiosbydave.com/web-design-charlotte-nc"
  );

  const charlotteLocalSchema = localServiceSchema(
    "Web Design Services Charlotte NC",
    "Local web design services in Charlotte, NC. We create custom websites for Charlotte businesses including contractors, retail, restaurants, and professional services.",
    "https://www.studiosbydave.com/web-design-charlotte-nc"
  );

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Web Design Charlotte NC | Professional Websites for Local Businesses"
        description="Custom web design services in Charlotte, NC. We build mobile-responsive websites that convert visitors into customers for contractors, retail, restaurants, and professional services. Get your free quote today."
        keywords="web design Charlotte NC, Charlotte web development, Charlotte website design, Charlotte small business websites, Charlotte contractor websites, Charlotte SEO, Charlotte digital marketing"
        structuredData={[breadcrumbs, charlotteWebDesignSchema, charlotteLocalSchema, webDesignFAQSchema, ...webPackageOfferSchema, ...googleReviewsSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 relative" itemScope itemType="https://schema.org/WebPageElement">
        {/* Charlotte Skyline Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/Charlotte Skyline - Day - 27-2.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4) contrast(1.1)'
          }}
        />
        
        {/* Crown Molding Top */}
        <div
          className="absolute top-0 left-0 w-full h-8 z-10"
          style={{
            backgroundImage: 'url("/assets/crown molding cherry wood.png")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'contain',
            backgroundPosition: 'top'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-8 pb-8">
          <div className="relative inline-block">
            <PixieDust />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6" itemProp="headline">
              Charlotte{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Web Design
              </span>
              {" "}Services
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" itemProp="description">
            Professional web design for Charlotte businesses. We create custom websites that turn visitors into paying customers—serving the greater Charlotte metro area.
          </p>
          <Link to="/contact#get-in-touch">
            <Button variant="hero" size="lg">
              Get Your Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>

        {/* Crown Molding Bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-8 z-10 transform rotate-180"
          style={{
            backgroundImage: 'url("/assets/crown molding cherry wood.png")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'contain',
            backgroundPosition: 'top'
          }}
        />
      </section>

      {/* Charlotte Market Focus Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Serving Charlotte's Diverse Business Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed text-center">
            Charlotte is North Carolina's largest city and a major business hub. From Uptown's financial district to the thriving restaurant scene in South End, we understand the unique challenges Charlotte businesses face in the digital landscape. Our web design services are tailored to help Charlotte businesses stand out in this competitive market.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Uptown & Financial District",
                description: "Professional websites for financial services, law firms, and corporate offices in Charlotte's business center.",
                industries: ["Financial Services", "Law Firms", "Corporate Offices", "Consulting"]
              },
              {
                title: "South End & NoDa",
                description: "Creative web solutions for restaurants, breweries, retail shops, and creative businesses in Charlotte's trendiest neighborhoods.",
                industries: ["Restaurants", "Breweries", "Retail", "Creative Services"]
              },
              {
                title: "Suburbs & Metro Area",
                description: "Comprehensive web design for contractors, home services, and local businesses throughout the Charlotte metro area.",
                industries: ["Contractors", "Home Services", "Local Retail", "Professional Services"]
              }
            ].map((area, index) => (
              <Card key={index} className="border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">{area.title}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.industries.map((industry, idx) => (
                      <li key={idx} className="flex items-center text-foreground/80">
                        <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{industry}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16" itemProp="name">
            Everything Your Charlotte Business Website Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Charlotte customers search on mobile—we ensure your site looks perfect on all devices",
                features: ["Responsive Layout", "Touch-Optimized", "Fast Loading", "Works Everywhere"],
                backdrop: webDesignBackdrop
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed to keep Charlotte visitors engaged and reduce bounce rates",
                features: ["Optimized Performance", "Fast Load Times", "Better Rankings", "User Retention"],
                backdrop: brandingBackdrop
              },
              {
                icon: Search,
                title: "Charlotte SEO",
                description: "Local SEO optimized for Charlotte search results and Google Business Profile",
                features: ["On-Page SEO", "Technical SEO", "Local Charlotte SEO", "Rankings Boost"],
                backdrop: googleBackdrop
              },
              {
                icon: Globe,
                title: "Lead Generation",
                description: "Contact forms and CTAs designed to convert Charlotte visitors into customers",
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
                          <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
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

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-subtle" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4" itemProp="name">
            Web Design Packages for Charlotte Businesses
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Choose the perfect package for your Charlotte business needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Web Package */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 group relative bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_12px_-1px_rgba(0,0,0,0.15),0_4px_6px_-1px_rgba(0,0,0,0.1),0_16px_32px_-4px_rgba(0,0,0,0.25)] hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl green-yellow-outline-text group-hover:animate-bounce-hover">Starter Web Package</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">NEW</CardDescription>
                <div className="text-3xl font-bold trophy-gold-text mt-2 group-hover:animate-throb group-hover:animate-red-yellow-flash">ONLY $499</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-primary text-center italic">Best for startups</p>
                <ul className="space-y-2">
                  {[
                    "1-3 pages",
                    "Mobile responsive",
                    "Contact form",
                    "Basic SEO setup",
                    "7-day turnaround",
                    "Domain and hosting purchased separately",
                    "No maintenance included, 1 revision round"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${index >= 5 ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Web Package */}
            <Card className="border-2 border-primary relative transition-all duration-300 group bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_12px_-1px_rgba(0,0,0,0.15),0_4px_6px_-1px_rgba(0,0,0,0.1),0_16px_32px_-4px_rgba(0,0,0,0.25)] hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-yellow-500/50">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl green-yellow-outline-text group-hover:animate-bounce-hover">Business Web Package</CardTitle>
                <CardDescription className="text-sm font-medium text-primary italic">Best for established local businesses</CardDescription>
                <div className="text-3xl font-bold trophy-gold-text mt-2">$998</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Up to 5 pages",
                    "Custom branding",
                    "Lead capture forms",
                    "Google Business Profile integration",
                    "Basic on-page SEO",
                    "2 revision rounds",
                    "Optional care plan"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="primary" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Scale Web Package */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 group bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_12px_-1px_rgba(0,0,0,0.15),0_4px_6px_-1px_rgba(0,0,0,0.1),0_16px_32px_-4px_rgba(0,0,0,0.25)] hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl green-yellow-outline-text group-hover:animate-bounce-hover">Scale Web Package</CardTitle>
                <CardDescription className="text-sm font-medium text-primary italic">Best for lead generation</CardDescription>
                <div className="text-3xl font-bold trophy-gold-text mt-2">$1,998</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Up to 10 pages",
                    "Conversion-focused design",
                    "Advanced forms",
                    "CRM integration",
                    "Local SEO setup",
                    "Analytics dashboard",
                    "Priority support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ultra Premium Web Package */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 group bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_12px_-1px_rgba(0,0,0,0.15),0_4px_6px_-1px_rgba(0,0,0,0.1),0_16px_32px_-4px_rgba(0,0,0,0.25)] hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl green-yellow-outline-text group-hover:animate-bounce-hover">Ultra Premium Web Package</CardTitle>
                <CardDescription className="text-sm font-medium text-primary italic">Complete digital presence</CardDescription>
                <div className="text-3xl font-bold trophy-gold-text mt-2">Call for Quote</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Fully custom design",
                    "Advanced integrations",
                    "Memberships, booking, or custom functionality",
                    "Multi-location support",
                    "Conversion optimization",
                    "Strategy consultation",
                    "30 days post-launch support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">Serving businesses throughout the Charlotte metro area</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Grow Your Charlotte Business Online?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a free consultation and discover how we can help your Charlotte business succeed online.
          </p>
          <Link to="/contact#get-in-touch">
            <Button variant="hero" size="lg">
              Get Your Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesignCharlotte;
