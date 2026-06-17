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

const WebDesignSpartanburg = () => {
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
    { name: "Web Design Spartanburg", url: "https://www.studiosbydave.com/web-design-spartanburg-sc" }
  ]);

  const spartanburgWebDesignSchema = serviceSchema(
    "Professional Web Design Spartanburg SC",
    "Custom responsive websites designed specifically for Spartanburg businesses including contractors, manufacturing, retail, and professional services with mobile-first design and SEO optimization.",
    "https://www.studiosbydave.com/web-design-spartanburg-sc"
  );

  const spartanburgLocalSchema = localServiceSchema(
    "Web Design Services Spartanburg SC",
    "Local web design services in Spartanburg, SC. We create custom websites for Spartanburg businesses including contractors, manufacturing, retail, and professional services.",
    "https://www.studiosbydave.com/web-design-spartanburg-sc"
  );

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Web Design Spartanburg SC | Professional Websites for Local Businesses"
        description="Custom web design services in Spartanburg, SC. We build mobile-responsive websites that convert visitors into customers for contractors, manufacturing, retail, and professional services. Get your free quote today."
        keywords="web design Spartanburg SC, Spartanburg web development, Spartanburg website design, Spartanburg small business websites, Spartanburg contractor websites, Spartanburg SEO, Spartanburg digital marketing"
        structuredData={[breadcrumbs, spartanburgWebDesignSchema, spartanburgLocalSchema, webDesignFAQSchema, ...webPackageOfferSchema, ...googleReviewsSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center" itemScope itemType="https://schema.org/WebPageElement">
        {/* Spartanburg Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/Spartanburg-Featured2.png.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Spartanburg, SC</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6" itemProp="headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Spartanburg{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Web Design
              </span>
              {" "}Services
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10" itemProp="description">
            Professional web design for Spartanburg businesses. We create custom websites that turn visitors into paying customers—serving Spartanburg and the Upstate South Carolina region.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Get Your Free Quote</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Spartanburg Market Focus Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Local Focus</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-12">
            Serving Spartanburg's Thriving Business Community
          </h2>
          <p className="font-body text-luxury-text-secondary text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-center">
            Spartanburg is the economic hub of the Upstate South Carolina region, known for manufacturing, healthcare, and a growing tech scene. From the downtown business district to the industrial parks, we understand the unique challenges Spartanburg businesses face. Our web design services are tailored to help Spartanburg businesses compete in the digital marketplace.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing & Industrial",
                description: "Professional websites for manufacturing companies, industrial services, and logistics businesses in Spartanburg's industrial sector.",
                industries: ["Manufacturing", "Industrial Services", "Logistics", "Distribution"]
              },
              {
                title: "Healthcare & Medical",
                description: "Compliant web solutions for healthcare providers, medical practices, and health services throughout Spartanburg County.",
                industries: ["Healthcare Providers", "Medical Practices", "Health Services", "Wellness Centers"]
              },
              {
                title: "Downtown & Retail",
                description: "Creative web solutions for retail shops, restaurants, and local businesses in downtown Spartanburg and shopping districts.",
                industries: ["Retail Stores", "Restaurants", "Local Shops", "Service Businesses"]
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
            Everything Your Spartanburg Business Website Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Spartanburg customers search on mobile—we ensure your site looks perfect on all devices",
                features: ["Responsive Layout", "Touch-Optimized", "Fast Loading", "Works Everywhere"],
                backdrop: webDesignBackdrop
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed to keep Spartanburg visitors engaged and reduce bounce rates",
                features: ["Optimized Performance", "Fast Load Times", "Better Rankings", "User Retention"],
                backdrop: brandingBackdrop
              },
              {
                icon: Search,
                title: "Spartanburg SEO",
                description: "Local SEO optimized for Spartanburg search results and Google Business Profile",
                features: ["On-Page SEO", "Technical SEO", "Local Spartanburg SEO", "Rankings Boost"],
                backdrop: googleBackdrop
              },
              {
                icon: Globe,
                title: "Lead Generation",
                description: "Contact forms and CTAs designed to convert Spartanburg visitors into customers",
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
          <p className="font-body text-luxury-text-secondary text-lg text-center mb-8">Serving businesses throughout Spartanburg and the Upstate region</p>
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
          <h2 className="display-heading text-luxury-text-primary text-3xl mb-4">Ready to Grow Your Spartanburg Business Online?</h2>
          <p className="font-body text-luxury-text-secondary text-lg mb-8">
            Contact us today for a free consultation and discover how we can help your Spartanburg business succeed online.
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

export default WebDesignSpartanburg;
