import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Palette, Bot, Search, Target, Users, Package, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import aiBackdrop from "@/assets/ai-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import mediaPacksBackdrop from "@/assets/media-packs-backdrop.jpg";
const services = [{
  icon: Globe,
  title: "Web Design & Development",
  description: "Custom, responsive websites that convert visitors into customers. Optimized for local contractors and service businesses.",
  features: ["Mobile-First Design", "Lightning Fast Loading", "Lead Generation Forms", "Local SEO Built-In"],
  link: "/services/web-design",
  linkText: "Learn About Web Design",
  gradient: "from-primary to-accent",
  backdrop: webDesignBackdrop
}, {
  icon: Palette,
  title: "Logo Design & Branding",
  description: "Professional branding packages that make your business stand out from competitors and build trust with customers.",
  features: ["Custom Logo Design", "Brand Identity Package", "Business Card Design", "Social Media Assets"],
  link: "/services/branding",
  linkText: "Learn About Branding",
  gradient: "from-accent to-secondary",
  backdrop: brandingBackdrop
}, {
  icon: Search,
  title: "SEO Services",
  description: "Complete search engine optimization to help your business dominate search results and attract more customers.",
  features: ["Technical SEO", "On-Page Optimization", "Local Search Dominance", "Google Business Profile"],
  link: "/services/seo",
  linkText: "Learn About SEO Services",
  gradient: "from-primary to-accent",
  backdrop: googleBackdrop
}, {
  icon: Package,
  title: "Custom Media Packs",
  description: "Custom Digital Content — Ready to Use, Ready to Convert. Get high-quality, custom-made visuals, mockups, and digital assets tailored to your business.",
  features: ["Custom Visuals & Graphics", "Website & Social Media Ready", "Fast Turnaround Delivery", "Conversion-Focused Design"],
  link: "/services/media-packs",
  linkText: "Learn About Media Packs",
  gradient: "from-accent to-primary",
  backdrop: mediaPacksBackdrop
}];
const ServicesSection = () => {
  return <section className="py-32 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="section-eyebrow">✦ What We Do</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6">
            Professional Web Design{" "}
            <span className="text-luxury-lime">Keeping You In Mind</span>
          </h2>
          <p className="font-body text-luxury-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            We're your local specialized web development and marketing toolkit. Our tailored approach to your business needs ensures maximum ROI for your industry. At Studios by Dave, our focus is YOU!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <div key={index} className="luxury-card rounded-xl p-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-luxury-lime/10 flex items-center justify-center mb-6 group-hover:bg-luxury-lime/20 transition-colors">
                    <IconComponent size={24} className="text-luxury-lime" />
                  </div>
                  <h3 className="display-heading text-luxury-text-primary text-2xl mb-4 group-hover:text-luxury-lime transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-luxury-text-secondary text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-luxury-text-primary/80 text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-lime mr-3 flex-shrink-0" />
                        <span className="font-body">{feature}</span>
                      </li>)}
                  </ul>
                  <Link to={service.link} className="inline-flex items-center text-luxury-royal-blue font-body text-sm font-semibold uppercase tracking-wider hover:text-luxury-purple transition-colors">
                    {service.linkText}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>;
        })}
        </div>

        {/* Industry Focus - Bento Grid */}
        <div className="bg-luxury-surface rounded-2xl p-8 md:p-12 border border-white/6">
          <div className="text-center mb-12">
            <div className="section-eyebrow">✦ Industries We Serve</div>
            <h3 className="display-heading text-luxury-text-primary text-3xl mb-4">
              Specialized for Your Industry
            </h3>
            <p className="font-body text-luxury-text-secondary text-lg max-w-2xl mx-auto">
              We understand the unique challenges and opportunities within local business. Our solutions are built specifically for your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[{
            icon: Globe,
            title: "Roofing Contractors",
            description: "Lead generation systems that convert homeowners.",
            color: "#FBBF24"
          }, {
            icon: Package,
            title: "Landscaping Companies",
            description: "Seasonal promotions and project portfolios.",
            color: "#34D399"
          }, {
            icon: Target,
            title: "Solar Panel Installers",
            description: "ROI calculators and educational content.",
            color: "#FACC15"
          }, {
            icon: Users,
            title: "Tree Specialists",
            description: "Emergency services and seasonal care programs.",
            color: "#4ADE80"
          }, {
            icon: Bot,
            title: "Expedited Trucking",
            description: "Real-time tracking and logistics platforms.",
            color: "#FB7185"
          }, {
            icon: Palette,
            title: "Home Remodelers",
            description: "Before/after galleries and booking systems.",
            color: "#FB923C"
          }, {
            icon: Search,
            title: "Plumbers",
            description: "Emergency dispatch and testimonial systems.",
            color: "#22D3EE"
          }, {
            icon: Globe,
            title: "Painters",
            description: "Color tools and scheduling systems.",
            color: "#F472B6"
          }].map((industry, index) => {
            const IconComponent = industry.icon;
            return <div key={index} className="luxury-card rounded-xl p-8 text-center group hover:border-luxury-royal-blue/50 transition-all">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors" style={{ backgroundColor: industry.color + '1A' }}>
                  <IconComponent size={28} style={{ color: industry.color }} />
                </div>
                <h4 className="font-section text-luxury-text-primary text-base uppercase tracking-wider mb-3">{industry.title}</h4>
                <p className="font-body text-luxury-text-secondary text-sm leading-relaxed">{industry.description}</p>
              </div>;
          })}
          </div>

          {/* Backyard Fire Video */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-luxury-surface border border-white/6 p-5">
              <div className="relative overflow-hidden rounded-xl bg-luxury-bg">
                <div className="relative aspect-[16/9]">
                  <video
                    src="/lovable-uploads/backyard-fire.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;