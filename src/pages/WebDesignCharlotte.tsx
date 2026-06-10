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
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Web Design Charlotte NC | Professional Websites for Local Businesses"
        description="Custom web design services in Charlotte, NC. We build mobile-responsive websites that convert visitors into customers for contractors, retail, restaurants, and professional services. Get your free quote today."
        keywords="web design Charlotte NC, Charlotte web development, Charlotte website design, Charlotte small business websites, Charlotte contractor websites, Charlotte SEO, Charlotte digital marketing"
        structuredData={[breadcrumbs, charlotteWebDesignSchema, charlotteLocalSchema, webDesignFAQSchema, ...webPackageOfferSchema, ...googleReviewsSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center" itemScope itemType="https://schema.org/WebPageElement">
        {/* Charlotte Skyline Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/Charlotte Skyline - Day - 27-2.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Charlotte, NC</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6" itemProp="headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Charlotte{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Web Design
              </span>
              {" "}Services
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10" itemProp="description">
            Professional web design for Charlotte businesses. We create custom websites that turn visitors into paying customers—serving the greater Charlotte metro area.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Get Your Free Quote</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Charlotte Market Focus Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Local Focus</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-12">
            Serving Charlotte's Diverse Business Community
          </h2>
          <p className="font-body text-luxury-text-secondary text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-center">
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
              <div key={index} className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
                <div className="mb-4">
                  <h3 className="display-heading text-luxury-royal-blue text-xl font-bold">{area.title}</h3>
                  <p className="font-body text-luxury-text-secondary text-base mt-2">{area.description}</p>
                </div>
                <ul className="space-y-2">
                  {area.industries.map((industry, idx) => (
                    <li key={idx} className="flex items-center text-luxury-text-secondary">
                      <CheckCircle size={16} className="text-luxury-lime mr-3 flex-shrink-0" />
                      <span className="font-body font-medium">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-luxury-bg" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Features</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-16" itemProp="name">
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
                <div key={index} className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `url(${feature.backdrop})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="relative w-14 h-14 rounded-lg bg-luxury-lime/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                      <IconComponent size={28} className="text-luxury-lime relative z-10" />
                    </div>
                    <h3 className="display-heading text-luxury-text-primary text-2xl font-bold mb-2 group-hover:text-luxury-royal-blue transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-luxury-text-secondary text-base leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-luxury-text-secondary">
                          <CheckCircle size={16} className="text-luxury-lime mr-3 flex-shrink-0" />
                          <span className="font-body font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Pricing</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-4" itemProp="name">
            Web Design Packages for Charlotte Businesses
          </h2>
          <p className="font-body text-luxury-text-secondary text-xl text-center max-w-2xl mx-auto mb-16">
            Choose the perfect package for your Charlotte business needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Web Package */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all duration-300 group relative">
              <div className="text-center pb-4">
                <h3 className="display-heading text-luxury-text-primary text-2xl">Starter Web Package</h3>
                <p className="text-sm font-medium text-luxury-lime mt-1">NEW</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">ONLY $499</div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-luxury-royal-blue text-center italic font-body">Best for startups</p>
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
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className={`font-body text-sm ${index >= 5 ? 'font-bold text-luxury-text-primary' : 'text-luxury-text-secondary'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full border-luxury-royal-blue text-luxury-royal-blue hover:bg-luxury-royal-blue hover:text-white transition-colors" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Web Package */}
            <div className="luxury-card rounded-xl p-6 border-2 border-luxury-lime relative transition-all duration-300 group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-luxury-lime text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="text-center pb-4 pt-8">
                <h3 className="display-heading text-luxury-text-primary text-2xl">Business Web Package</h3>
                <p className="text-sm font-medium text-luxury-lime italic font-body mt-1">Best for established local businesses</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">$998</div>
              </div>
              <div className="space-y-4">
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
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-luxury-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scale Web Package */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all duration-300 group">
              <div className="text-center pb-4">
                <h3 className="display-heading text-luxury-text-primary text-2xl">Scale Web Package</h3>
                <p className="text-sm font-medium text-luxury-lime italic font-body mt-1">Best for lead generation</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">$1,998</div>
              </div>
              <div className="space-y-4">
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
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-luxury-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full border-luxury-royal-blue text-luxury-royal-blue hover:bg-luxury-royal-blue hover:text-white transition-colors" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ultra Premium Web Package */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all duration-300 group">
              <div className="text-center pb-4">
                <h3 className="display-heading text-luxury-text-primary text-2xl">Ultra Premium Web Package</h3>
                <p className="text-sm font-medium text-luxury-lime italic font-body mt-1">Complete digital presence</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">Call for Quote</div>
              </div>
              <div className="space-y-4">
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
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-luxury-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button variant="outline" className="w-full border-luxury-royal-blue text-luxury-royal-blue hover:bg-luxury-royal-blue hover:text-white transition-colors" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Testimonials</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-12">What Our Clients Say</h2>
          <p className="font-body text-luxury-text-secondary text-lg text-center mb-8">Serving businesses throughout the Charlotte metro area</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card p-8 rounded-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
              </div>
              <p className="font-body text-luxury-text-secondary mb-6 italic">"Dave really presented /uncovered opportunities that we wouldn't have ever known otherwise. And now our website is really generating our online business beautifully! Thanks again Dave! 😃"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-luxury-royal-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-luxury-royal-blue font-bold text-lg">PR</span>
                </div>
                <div>
                  <p className="font-semibold text-luxury-text-primary">Paul Richardson</p>
                  <p className="text-sm text-luxury-text-secondary">Local Guide</p>
                </div>
              </div>
            </div>
            <div className="luxury-card p-8 rounded-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
              </div>
              <p className="font-body text-luxury-text-secondary mb-6 italic">"Studios by Dave really knocked it out of the park. Our online presence is not only fully present, its generating our business so many leads now! Thank You!!!"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-luxury-royal-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-luxury-royal-blue font-bold text-lg">RJ</span>
                </div>
                <div>
                  <p className="font-semibold text-luxury-text-primary">Ryan "Kris" Jones</p>
                  <p className="text-sm text-luxury-text-secondary">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow mb-4">✦ Get Started</div>
          <h2 className="display-heading text-luxury-text-primary text-3xl mb-4">Ready to Grow Your Charlotte Business Online?</h2>
          <p className="font-body text-luxury-text-secondary text-lg mb-8">
            Contact us today for a free consultation and discover how we can help your Charlotte business succeed online.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
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
