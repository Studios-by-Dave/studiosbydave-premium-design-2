import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema, serviceSchema, localServiceSchema, webDesignFAQSchema, webPackageOfferSchema, googleReviewsSchema } from "@/data/structuredData";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import mediaPacksBackdrop from "@/assets/media-packs-backdrop.jpg";

const WebDesignShelby = () => {
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
    { name: "Web Design Shelby", url: "https://www.studiosbydave.com/web-design-shelby-nc" }
  ]);

  const shelbyWebDesignSchema = serviceSchema(
    "Professional Web Design Shelby NC",
    "Custom responsive websites designed specifically for Shelby businesses including contractors, retail, restaurants, and professional services with mobile-first design and SEO optimization.",
    "https://www.studiosbydave.com/web-design-shelby-nc"
  );

  const shelbyLocalSchema = localServiceSchema(
    "Web Design Services Shelby NC",
    "Local web design services in Shelby, NC. We create custom websites for Shelby businesses including contractors, retail, restaurants, and professional services.",
    "https://www.studiosbydave.com/web-design-shelby-nc"
  );

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Web Design Shelby NC | Professional Websites for Local Businesses"
        description="Custom web design services in Shelby, NC. We build mobile-responsive websites that convert visitors into customers for contractors, retail, restaurants, and professional services. Get your free quote today."
        keywords="web design Shelby NC, Shelby web development, Shelby website design, Shelby small business websites, Shelby contractor websites, Shelby SEO, Shelby digital marketing"
        structuredData={[breadcrumbs, shelbyWebDesignSchema, shelbyLocalSchema, webDesignFAQSchema, ...webPackageOfferSchema, ...googleReviewsSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center" itemScope itemType="https://schema.org/WebPageElement">
        {/* Shelby Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/Shelby-intro-1751301212.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Shelby, NC</div>
            <div className="relative inline-block">
              <PixieDust />
              <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6" itemProp="headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Shelby{" "}
                <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                  Web Design
                </span>
                {" "}Services
              </h1>
            </div>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10" itemProp="description">
            Professional web design for Shelby businesses. We create custom websites that turn visitors into paying customers—serving Cleveland County and surrounding areas.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Get Your Free Quote</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Shelby Market Focus Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Local Focus</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-12">
            Serving Shelby's Diverse Business Community
          </h2>
          <p className="font-body text-luxury-text-secondary text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-center">
            Shelby is the heart of Cleveland County, known for its historic downtown, manufacturing heritage, and growing small business community. From uptown businesses to industrial areas, we understand the unique challenges Shelby businesses face. Our web design services are tailored to help Shelby businesses thrive in this close-knit local market.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Contractors & Trades",
                description: "Professional websites for roofing, landscaping, electrical, plumbing, and other trade businesses throughout Shelby and Cleveland County.",
                industries: ["Roofing Contractors", "Landscaping", "Electrical Services", "Plumbing"]
              },
              {
                title: "Retail & Restaurants",
                description: "Modern web solutions for local shops, restaurants, cafes, and retail businesses serving the Shelby community.",
                industries: ["Local Shops", "Restaurants", "Cafes", "Retail Stores"]
              },
              {
                title: "Professional Services",
                description: "Comprehensive web design for healthcare, legal, financial, and professional services in the Shelby area.",
                industries: ["Healthcare Providers", "Legal Services", "Financial Services", "Consultants"]
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

      {/* Shelby Cafe Image Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="section-eyebrow mb-4">✦ Community</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl">
                Supporting Shelby's Local Business Scene
              </h2>
              <p className="font-body text-luxury-text-secondary text-lg leading-relaxed">
                From charming local cafes to established businesses, Shelby's entrepreneurial spirit drives our community forward. We understand the unique character of Shelby's business landscape and create websites that reflect the authentic, hometown feel that makes our city special.
              </p>
              <div className="space-y-4">
                {[
                  "Local business partnerships",
                  "Community-focused design",
                  "Shelby market expertise",
                  "Personalized service"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 text-luxury-text-primary">
                    <CheckCircle size={20} className="text-luxury-lime flex-shrink-0" />
                    <span className="font-body font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact#get-in-touch" className="inline-block mt-4">
                <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                  Connect With Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/assets/shelby-cafe-768x938.jpg" 
                  alt="Shelby local cafe scene showcasing the vibrant downtown business community" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/80 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-luxury-purple/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-luxury-royal-blue/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow mb-4 text-center">✦ Features</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-16" itemProp="name">
            Everything Your Shelby Business Website Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Shelby customers search on mobile—we ensure your site looks perfect on all devices",
                features: ["Responsive Layout", "Touch-Optimized", "Fast Loading", "Works Everywhere"],
                backdrop: webDesignBackdrop
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed to keep Shelby visitors engaged and reduce bounce rates",
                features: ["Optimized Performance", "Fast Load Times", "Better Rankings", "User Retention"],
                backdrop: brandingBackdrop
              },
              {
                icon: Search,
                title: "Shelby SEO",
                description: "Local SEO optimized for Shelby search results and Google Business Profile",
                features: ["On-Page SEO", "Technical SEO", "Local Shelby SEO", "Rankings Boost"],
                backdrop: googleBackdrop
              },
              {
                icon: Globe,
                title: "Lead Generation",
                description: "Contact forms and CTAs designed to convert Shelby visitors into customers",
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
                    <div className="w-12 h-12 rounded-lg bg-luxury-lime/10 flex items-center justify-center mb-6 group-hover:bg-luxury-lime/20 transition-colors">
                      <IconComponent size={24} className="text-luxury-lime" />
                    </div>
                    <h3 className="display-heading text-luxury-text-primary text-2xl mb-4 group-hover:text-luxury-lime transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-luxury-text-secondary text-base leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-luxury-text-primary/80 text-sm">
                          <CheckCircle size={16} className="text-luxury-lime mr-3 flex-shrink-0" />
                          <span className="font-body">{item}</span>
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
          <div className="section-eyebrow mb-4 text-center">✦ Reviews</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl text-center mb-16">What Our Clients Say</h2>
          
          <div className="flex justify-center">
            <div className="luxury-card rounded-2xl p-12 max-w-3xl w-full border-t-2 border-t-luxury-royal-blue relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Star size={120} className="text-luxury-lime" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-luxury-lime text-luxury-lime" />)}
                </div>
                <p className="font-body text-luxury-text-primary text-2xl mb-10 italic leading-relaxed">"{ selectedReview.text }"</p>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-gradient-to-r from-luxury-purple to-luxury-royal-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{ selectedReview.initials }</span>
                  </div>
                  <div>
                    <p className="display-heading text-luxury-text-primary text-xl">{ selectedReview.name }</p>
                    <p className="font-body text-luxury-text-secondary">{ selectedReview.role }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-luxury-surface relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="display-heading text-luxury-text-primary text-4xl mb-6">Ready to Grow Your Shelby Business Online?</h2>
          <p className="font-body text-luxury-text-secondary text-xl mb-10">
            Contact us today for a free consultation and discover how we can help your Shelby business succeed online.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 px-10 py-8 text-base font-bold uppercase tracking-widest shadow-xl transition-all hover:scale-105">
              Get Your Free Quote
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesignShelby;
