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

const WebDesignRaleigh = () => {
  const reviews = [
    {
      text: "Dave really presented /uncovered opportunities that we wouldn't have ever known otherwise. And now our website is really generating our online business beautifully! Thanks again Dave! 😃",
      initials: "PR",
      name: "Paul Richardson",
      role: "Local Guide"
    },
    {
      text: "Studios by Dave really knocked it out of the park. Our online presence is not only fully present, its generating our business so many leads now! Thank You!!!",
      initials: "RJ",
      name: "Ryan \"Kris\" Jones",
      role: "Verified Customer"
    },
    {
      text: "The BEST experience!!",
      initials: "MB",
      name: "Michelle Bryant",
      role: "Google Reviews"
    }
  ];
  const selectedReview = reviews[Math.floor(Math.random() * reviews.length)];

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Web Design Raleigh", url: "https://www.studiosbydave.com/web-design-raleigh-nc" }
  ]);

  const raleighWebDesignSchema = serviceSchema(
    "Professional Web Design Raleigh NC",
    "Custom responsive websites designed specifically for Raleigh businesses including government, tech, healthcare, and professional services with mobile-first design and SEO optimization.",
    "https://www.studiosbydave.com/web-design-raleigh-nc"
  );

  const raleighLocalSchema = localServiceSchema(
    "Web Design Services Raleigh NC",
    "Local web design services in Raleigh, NC. We create custom websites for Raleigh businesses including government, tech, healthcare, and professional services.",
    "https://www.studiosbydave.com/web-design-raleigh-nc"
  );

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Web Design Raleigh NC | Professional Websites for Local Businesses"
        description="Custom web design services in Raleigh, NC. We build mobile-responsive websites that convert visitors into customers for government, tech, healthcare, and professional services. Get your free quote today."
        keywords="web design Raleigh NC, Raleigh web development, Raleigh website design, Raleigh small business websites, Raleigh tech websites, Raleigh SEO, Raleigh digital marketing"
        structuredData={[breadcrumbs, raleighWebDesignSchema, raleighLocalSchema, webDesignFAQSchema, ...webPackageOfferSchema, ...googleReviewsSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center" itemScope itemType="https://schema.org/WebPageElement">
        {/* Raleigh Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/raleigh1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Raleigh, NC</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6" itemProp="headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Raleigh{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Web Design
              </span>
              {" "}Services
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10" itemProp="description">
            Professional web design for Raleigh businesses. We create custom websites that turn visitors into paying customers—serving Raleigh and the Research Triangle area.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Get Your Free Quote</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Raleigh Market Focus Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Local Focus</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-12">
            Serving Raleigh's Capital City Business Community
          </h2>
          <p className="font-body text-luxury-text-secondary text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-center">
            Raleigh is North Carolina's capital city and a major hub for government, technology, healthcare, and education. As part of the Research Triangle, Raleigh businesses compete in a sophisticated market. Our web design services are tailored to help Raleigh businesses stand out in this dynamic environment.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Government & Public Sector",
                description: "Professional websites for government agencies, public services, and civic organizations throughout the Raleigh area.",
                industries: ["Government Agencies", "Public Services", "Civic Organizations", "Non-Profits"]
              },
              {
                title: "Tech & Innovation",
                description: "Modern web solutions for tech startups, software companies, and innovative businesses in the Research Triangle.",
                industries: ["Tech Startups", "Software Companies", "Innovation Hubs", "Tech Services"]
              },
              {
                title: "Healthcare & Professional",
                description: "Comprehensive web design for healthcare providers, legal firms, financial services, and professional consultants.",
                industries: ["Healthcare Providers", "Legal Firms", "Financial Services", "Professional Consultants"]
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
            Everything Your Raleigh Business Website Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Raleigh professionals search on mobile—we ensure your site looks perfect on all devices",
                features: ["Responsive Layout", "Touch-Optimized", "Fast Loading", "Works Everywhere"],
                backdrop: webDesignBackdrop
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed to keep Raleigh visitors engaged and reduce bounce rates",
                features: ["Optimized Performance", "Fast Load Times", "Better Rankings", "User Retention"],
                backdrop: brandingBackdrop
              },
              {
                icon: Search,
                title: "Raleigh SEO",
                description: "Local SEO optimized for Raleigh search results and Google Business Profile",
                features: ["On-Page SEO", "Technical SEO", "Local Raleigh SEO", "Rankings Boost"],
                backdrop: googleBackdrop
              },
              {
                icon: Globe,
                title: "Lead Generation",
                description: "Contact forms and CTAs designed to convert Raleigh visitors into customers",
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

      {/* Testimonials Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Testimonials</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-12">What Our Clients Say</h2>
          <p className="font-body text-luxury-text-secondary text-lg text-center mb-8">Serving businesses throughout Raleigh and the Research Triangle</p>
          <div className="flex justify-center">
            <div className="luxury-card p-8 rounded-lg w-full max-w-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
              </div>
              <p className="font-body text-luxury-text-secondary mb-6 italic">"{ selectedReview.text }"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-luxury-royal-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-luxury-royal-blue font-bold text-lg">{ selectedReview.initials }</span>
                </div>
                <div>
                  <p className="font-semibold text-luxury-text-primary">{ selectedReview.name }</p>
                  <p className="text-sm text-luxury-text-secondary">{ selectedReview.role }</p>
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
          <h2 className="display-heading text-luxury-text-primary text-3xl mb-4">Ready to Grow Your Raleigh Business Online?</h2>
          <p className="font-body text-luxury-text-secondary text-lg mb-8">
            Contact us today for a free consultation and discover how we can help your Raleigh business succeed online.
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

export default WebDesignRaleigh;
