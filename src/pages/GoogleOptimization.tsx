import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Search, MapPin, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema } from "@/data/structuredData";

const GoogleOptimization = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Google Optimization", url: "https://www.studiosbydave.com/google-optimization" }
  ]);

  const googleOptimizationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Optimization Services for Contractors",
    "description": "Complete Google ecosystem optimization including local SEO, Google My Business, review management, and Google Ads for contractor businesses.",
    "provider": {
      "@type": "Organization",
      "name": "Studios by Dave"
    },
    "serviceType": "Google Optimization and Local SEO",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive Google optimization including local SEO, Google My Business optimization, review management, and Google Ads management."
    }
  };

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Google Optimization for Contractors - Local SEO & Google My Business"
        description="Dominate local search results with our Google optimization services. Local SEO, Google My Business optimization, review management, and Google Ads for contractors. Get more customers online."
        keywords="Google optimization contractors, local SEO contractors, Google My Business optimization, contractor SEO, Google Ads contractors, local search optimization, review management"
        structuredData={[breadcrumbs, googleOptimizationSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center">
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Google Ecosystem</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-6xl mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Google{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Optimization Services
              </span>
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Dominate local search results and get more customers. Our Google optimization 
            services help contractors rank higher, get more reviews, and maximize their online visibility.
          </p>
          <Link to="/contact">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Boost Your Rankings</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Google My Business Showcase */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow mb-4">✦ Google My Business</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-8">
            Get Found on Google My Business
          </h2>
          <p className="font-body text-luxury-text-secondary text-xl mb-12 max-w-3xl mx-auto">
            Your Google My Business profile is often the first thing customers see. We optimize it to get you more calls, reviews, and customers.
          </p>
          <div className="max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/b56502ca-7d57-469f-a63b-c87e8173c7c4.png" 
              alt="Google My Business profile optimization featuring 5-star reviews, local search visibility, and enhanced business listing for contractors" 
              className="w-full h-auto rounded-2xl luxury-card"
              loading="lazy"
              decoding="async"
              width="672"
              height="448"
            />
          </div>
        </div>
      </section>

      {/* Google Optimization Features with Visual */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/1e32a73d-031e-4dfc-becf-0bd28772b676.png" 
                alt="Comprehensive SEO optimization dashboard displaying keyword rankings, content strategy, traffic analytics, backlink profile, and search performance metrics" 
                className="w-full h-auto rounded-2xl luxury-card"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </div>
            
            <div>
              <div className="section-eyebrow mb-4">✦ Our Services</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-8">
                Complete Google Optimization Suite
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: Search,
                    title: "SEO Optimization",
                    description: "Rank higher in Google search results for your target keywords"
                  },
                  {
                    icon: MapPin,
                    title: "Google My Business",
                    description: "Optimize your business profile for maximum local visibility"
                  },
                  {
                    icon: Star,
                    title: "Review Management",
                    description: "Get more 5-star reviews and manage your online reputation"
                  },
                  {
                    icon: TrendingUp,
                    title: "Local SEO",
                    description: "Dominate local search results in your service area"
                  }
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-luxury-lime/10 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-luxury-lime/20 transition-colors">
                          <IconComponent size={24} className="text-luxury-lime" />
                        </div>
                        <div>
                          <h3 className="display-heading text-luxury-text-primary text-xl mb-2 group-hover:text-luxury-lime transition-colors">{service.title}</h3>
                          <p className="font-body text-luxury-text-secondary">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-4">✦ Results</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-8">
                Proven Google Optimization Results
              </h2>
              <div className="space-y-6">
                {[
                  "Average 300% increase in Google visibility within 90 days",
                  "75% more phone calls from local customers",
                  "Rank on page 1 for your most profitable keywords",
                  "Increase in qualified leads from Google searches",
                  "Higher conversion rates from optimized listings",
                  "Improved online reputation with more positive reviews"
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-6 h-6 flex-shrink-0" />
                    <p className="font-body text-luxury-text-secondary text-lg">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-luxury-purple to-luxury-royal-blue rounded-2xl p-8 text-center luxury-card">
              <h3 className="display-heading text-white text-2xl mb-4">Ready to Dominate Google?</h3>
              <p className="text-white/90 mb-6 font-body">
                Start getting more customers from Google with our proven optimization strategies.
              </p>
              <Link to="/contact">
                <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                  Get More Customers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow mb-4">✦ What's Included</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-16">
            What's Included in Our Google Optimization
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Google My Business Setup",
                features: ["Profile optimization", "Photo management", "Post scheduling", "Review monitoring"]
              },
              {
                title: "SEO Optimization",
                features: ["Keyword research", "On-page optimization", "Content creation", "Technical SEO"]
              },
              {
                title: "Review Management",
                features: ["Review generation system", "Response management", "Reputation monitoring", "Review widgets"]
              }
            ].map((package_item, index) => (
              <div key={index} className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
                <div className="mb-6">
                  <h3 className="display-heading text-luxury-text-primary text-2xl mb-2">{package_item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {package_item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                      <span className="font-body text-luxury-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default GoogleOptimization;