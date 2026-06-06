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
  title: "Google Optimization",
  description: "Complete Google ecosystem optimization to dominate local search results and attract more customers.",
  features: ["Local SEO", "Google My Business", "Review Optimization", "Google Ads Management"],
  link: "/services/google-optimization",
  linkText: "Learn About Google Optimization",
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
  return <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <img 
              src="/lovable-uploads/ab2f14a1-bdab-4f01-a4a4-ea21998e031d-optimized.jpg" 
              alt="Successful contractor team celebrating digital marketing success - web design, SEO, and branding services for roofing, landscaping, and solar businesses" 
              className="w-96 h-auto object-contain" 
              width="384" 
              height="384" 
              loading="lazy" 
              decoding="async" 
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Web Design{" "}
              <span className="gradient-text">Keeping You In Mind</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We're your local specialized web development and marketing &quot;took-kit!&quot;  Our tailored approach to your business needs ensures maximum ROI for your industry.  At Studios by Dave, our focus is YOU!                  </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative">
                {/* Check Badge */}
                <div className="absolute top-4 right-4 z-20 group-hover:block hidden">
                  <div className="check-badge-animate">
                    <CheckCircle size={32} className="text-green-500 drop-shadow-lg" />
                  </div>
                </div>
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
                <CardHeader className="pb-4 relative z-10">
                  <div className="relative w-14 h-14 rounded-lg bg-gradient-primary-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                    {/* Shimmer reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
                    <IconComponent size={28} className="text-white drop-shadow-md relative z-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-foreground/80">
                        <Target size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>)}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="group/btn w-full">
                      {service.linkText}
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Industry Focus */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Specialized for Your Industry
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We understand the unique challenges and opportunities within local business. Our solutions are built specifically for you to further in success.</p>
          </div>

          <div className="border-2 border-gray-300 rounded-2xl p-6 bg-gray-100/50">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[{
            icon: "🏠",
            title: "Roofing Contractors",
            description: "Lead generation systems, emergency service pages, and showcase galleries that convert homeowners."
          }, {
            icon: "🌱",
            title: "Landscaping Companies",
            description: "Seasonal service promotions, project portfolios, and maintenance scheduling systems."
          }, {
            icon: "☀️",
            title: "Solar Panel Installers",
            description: "ROI calculators, financing options, and educational content that drives solar adoption."
          }, {
            icon: "🌳",
            title: "Tree Specialists",
            description: "Emergency tree services, project galleries, and seasonal care programs that attract homeowners."
          }, {
            icon: "🚚",
            title: "Expedited Trucking",
            description: "Real-time tracking systems, freight quote calculators, and logistics management platforms that streamline shipping operations."
          }, {
            icon: "🔨",
            title: "Home Remodelers",
            description: "Before/after galleries, project timelines, and consultation booking systems that showcase craftsmanship."
          }, {
            icon: "🔧",
            title: "Plumbers",
            description: "Emergency service dispatch, service area maps, and customer testimonial systems that build trust and drive calls."
          }, {
            icon: "🎨",
            title: "Painters",
            description: "Color selection tools, project galleries, and scheduling systems that help homeowners visualize and book painting services."
          }].map((industry, index) => <div key={index} className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{industry.title}</h4>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>)}
            </div>
          </div>

          {/* Backyard Fire Video */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-slate-950/95 p-5 shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.98))] pointer-events-none" />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900">
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