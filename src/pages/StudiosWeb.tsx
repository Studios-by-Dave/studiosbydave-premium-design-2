import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Palette, Search, TrendingUp, Package } from "lucide-react";

const StudiosWeb = () => {
  const services = [
    { title: "Web Design", path: "/studiosweb/webdesign", icon: Globe, description: "Custom websites that convert visitors into customers" },
    { title: "SEO Services", path: "/studiosweb/seo", icon: Search, description: "Rank higher in search results and get found online" },
    { title: "Branding & Logo Design", path: "/studiosweb/branding", icon: Palette, description: "Professional brand identity that stands out" },
    { title: "Google Optimization", path: "/studiosweb/google-optimization", icon: TrendingUp, description: "Dominate local search results" },
    { title: "Custom Media Packs", path: "/studiosweb/media-packs", icon: Package, description: "Ready-to-use digital content and visuals" }
  ];

  return (
    <div className="min-h-screen">
      <SimpleSEO 
        title="StudiosWeb - Digital Services Hub" 
        description="Explore our complete range of digital services including web design, SEO, branding, and media packs for local businesses." 
        keywords="web design, SEO, branding, media packs, digital services, local business"
      />
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Studios<span className="text-primary">Web</span> Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a service below to learn more about how we can help grow your business.
            </p>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index}
                  to={service.path}
                  className="group block bg-white border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Not sure which service you need? Let's talk about your goals.
            </p>
            <Link to="/contact#get-in-touch">
              <Button size="lg">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default StudiosWeb;