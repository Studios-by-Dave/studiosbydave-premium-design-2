import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import studiosBrainLogo from "@/assets/studios-brain-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [promosOpen, setPromosOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const services = [{
    name: "Web Design",
    path: "/services/web-design",
    description: "Professional responsive websites"
  }, {
    name: "Logo Design & Branding",
    path: "/services/branding",
    description: "Complete brand identity solutions"
  }, {
    name: "SEO Services",
    path: "/services/seo",
    description: "Get found by your ideal customers"
  }, {
    name: "Google Optimization",
    path: "/services/google-optimization",
    description: "Dominate local search results"
  }, {
    name: "Media Packs",
    path: "/services/media-packs",
    description: "Custom digital content packages"
  }, {
    name: "Case Studies",
    path: "/services/case-studies",
    description: "Real results for real clients"
  }, {
    name: "Portfolio",
    path: "/services/portfolio",
    description: "View our work"
  }];
  const promos = [{
    name: "Free Logo Design",
    path: "/promos/free-logo-design",
    description: "FREE logo with web package purchase"
  }, {
    name: "Referral Bonus",
    path: "/promos/referral-bonus",
    description: "Earn $100 per referral"
  }, {
    name: "Free SEO Audit",
    path: "/promos/free-seo-audit",
    description: "First 10 callers only"
  }];
  const serviceAreas = [{
    name: "Shelby, NC",
    path: "/web-design-shelby-nc",
    description: "Web design for Shelby businesses"
  }, {
    name: "Charlotte, NC",
    path: "/web-design-charlotte-nc",
    description: "Web design for Charlotte businesses"
  }, {
    name: "Gastonia, NC",
    path: "/web-design-gastonia-nc",
    description: "Web design for Gastonia businesses"
  }, {
    name: "Spartanburg, SC",
    path: "/web-design-spartanburg-sc",
    description: "Web design for Spartanburg businesses"
  }, {
    name: "Asheville, NC",
    path: "/web-design-asheville-nc",
    description: "Web design for Asheville businesses"
  }, {
    name: "Raleigh, NC",
    path: "/web-design-raleigh-nc",
    description: "Web design for Raleigh businesses"
  }];
  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith('/services');
  return <>
    <nav className="frosted-glass border-b border-white/6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src={studiosBrainLogo} alt="Studios by Dave Logo" className="h-16 w-auto" width="64" height="64" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-body text-xs uppercase tracking-wider transition-all duration-300 hover:text-luxury-royal-blue relative ${isActive('/') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
              Home
              <span className={`absolute bottom-0 left-0 h-px bg-luxury-royal-blue transition-all duration-300 ${isActive('/') ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
            
            {/* Services Collapsible */}
            <div className="relative group">
              <button onClick={() => setServicesOpen(!servicesOpen)} className={`font-body text-xs uppercase tracking-wider transition-all duration-300 hover:text-luxury-royal-blue relative flex items-center space-x-1 ${isServicesActive() ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                <span>Services</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Fan-out dropdown underneath */}
              <div className={`absolute top-full left-0 mt-2 bg-luxury-surface rounded-lg shadow-lg border border-white/6 z-50 overflow-hidden transition-all duration-300 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-2 flex flex-col">
                  {services.map((service, index) => (
                    <Link 
                      key={service.name} 
                      to={service.path} 
                      onClick={() => setServicesOpen(false)} 
                      className={`font-body text-base whitespace-nowrap px-4 py-2 rounded-md transition-all duration-300 hover:bg-white/5 hover:text-luxury-royal-blue ${service.name === 'Portfolio' ? 'font-semibold' : 'font-medium'} ${isActive(service.path) ? "text-luxury-royal-blue bg-white/5" : "text-white/70"} ${servicesOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{ transitionDelay: servicesOpen ? `${index * 60}ms` : '0ms' }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className={`font-body text-xs uppercase tracking-wider transition-all duration-300 hover:text-luxury-royal-blue relative ${isActive('/about') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
              About Us
              <span className={`absolute bottom-0 left-0 h-px bg-luxury-royal-blue transition-all duration-300 ${isActive('/about') ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>

            {/* Service Areas Collapsible */}
            <div className="relative group">
              <button onClick={() => setServiceAreasOpen(!serviceAreasOpen)} className={`font-body text-xs uppercase tracking-wider transition-all duration-300 hover:text-luxury-royal-blue relative flex items-center space-x-1 ${location.pathname.startsWith('/web-design-') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                <span>Service Areas</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${serviceAreasOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Fan-out dropdown underneath */}
              <div className={`absolute top-full left-0 mt-2 bg-luxury-surface rounded-lg shadow-lg border border-white/6 z-50 overflow-hidden transition-all duration-300 ${serviceAreasOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-2 flex flex-col">
                  {serviceAreas.map((area, index) => (
                    <Link 
                      key={area.name} 
                      to={area.path} 
                      onClick={() => setServiceAreasOpen(false)} 
                      className={`font-body text-xs whitespace-nowrap px-4 py-2 rounded-md transition-all duration-300 hover:bg-white/5 hover:text-luxury-royal-blue font-medium ${isActive(area.path) ? "text-luxury-royal-blue bg-white/5" : "text-white/70"} ${serviceAreasOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{ transitionDelay: serviceAreasOpen ? `${index * 60}ms` : '0ms' }}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Promos Collapsible */}
            <div className="relative group">
              <button onClick={() => setPromosOpen(!promosOpen)} className={`font-body text-xs uppercase tracking-wider transition-all duration-300 hover:text-luxury-royal-blue relative flex items-center space-x-1 ${location.pathname.startsWith('/promos') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                <span>Promos</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${promosOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Fan-out dropdown underneath */}
              <div className={`absolute top-full left-0 mt-2 bg-luxury-surface rounded-lg shadow-lg border border-white/6 z-50 overflow-hidden transition-all duration-300 ${promosOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-2 flex flex-col">
                  {promos.map((promo, index) => (
                    <Link 
                      key={promo.name} 
                      to={promo.path} 
                      onClick={() => setPromosOpen(false)} 
                      className={`font-body text-xs whitespace-nowrap px-4 py-2 rounded-md transition-all duration-300 hover:bg-white/5 hover:text-luxury-royal-blue font-medium ${isActive(promo.path) ? "text-luxury-royal-blue bg-white/5" : "text-white/70"} ${promosOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{ transitionDelay: promosOpen ? `${index * 60}ms` : '0ms' }}
                    >
                      {promo.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="font-body text-xs uppercase tracking-wider transition-all duration-300 hover:text-luxury-royal-blue relative text-luxury-royal-blue">
              Contact
              <span className={`absolute bottom-0 left-0 h-px bg-luxury-royal-blue transition-all duration-300 w-full`}></span>
            </Link>

            {/* Blog */}
            <Link to="/blog" className={`font-body text-xs uppercase tracking-wider transition-all duration-300 relative poofy-blog text-white`}> 
              Blog
              <span className={`absolute bottom-0 left-0 h-px bg-luxury-lime transition-all duration-300 w-full`}></span>
            </Link>
            
            <Link to="/contact#get-in-touch">
              <Button size="sm" className="ml-4 text-xs font-semibold uppercase tracking-wider bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-luxury-text-primary hover:text-luxury-lime p-2">
              {isOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
            </Button>
          </div>
        </div>

      </div>
    </nav>

    {/* Mobile Navigation - Rendered outside nav to avoid backdrop-filter creating a containing block for fixed positioning */}
    {isOpen && <div className="lg:hidden fixed inset-0 z-[60]">
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
        <div className="absolute right-0 top-0 h-full w-80 bg-luxury-surface border-l border-white/6 p-6 overflow-y-auto">
          <div className="flex justify-end mb-8">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-luxury-text-primary hover:text-luxury-lime p-2">
              <X size={28} strokeWidth={2} />
            </Button>
          </div>
              
              <div className="space-y-6">
                <Link to="/" onClick={() => setIsOpen(false)} className={`block font-body text-sm uppercase tracking-wider transition-colors hover:text-luxury-royal-blue ${isActive('/') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                  Home
                </Link>
                
                {/* Mobile Services Section */}
                <div className="border-t border-white/6 pt-6">
                  <div className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-luxury-royal-blue mb-4 ${isServicesActive() ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                    Services
                  </div>
                    <div className="ml-4 space-y-3">
                    {services.map(service => (
                      <Link 
                        key={service.name} 
                        to={service.path} 
                        onClick={() => setIsOpen(false)} 
                        className={`block font-body text-base hover:text-luxury-royal-blue transition-colors ${service.name === 'Portfolio' ? 'font-semibold' : ''} ${isActive(service.path) ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/about" onClick={() => setIsOpen(false)} className={`block font-body text-sm uppercase tracking-wider transition-colors hover:text-luxury-royal-blue ${isActive('/about') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                  About Us
                </Link>

                {/* Mobile Service Areas Section */}
                <div className="border-t border-white/6 pt-6">
                  <div className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-luxury-royal-blue mb-4 ${location.pathname.startsWith('/web-design-') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                    Service Areas
                  </div>
                  <div className="ml-4 space-y-3">
                    {serviceAreas.map(area => (
                      <Link 
                        key={area.name} 
                        to={area.path} 
                        onClick={() => setIsOpen(false)} 
                        className={`block font-body text-sm hover:text-luxury-royal-blue transition-colors ${isActive(area.path) ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Promos Section */}
                <div className="border-t border-white/6 pt-6">
                  <div className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-luxury-royal-blue mb-4 ${location.pathname.startsWith('/promos') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                    Promos
                  </div>
                  <div className="ml-4 space-y-3">
                    {promos.map(promo => (
                      <Link 
                        key={promo.name} 
                        to={promo.path} 
                        onClick={() => setIsOpen(false)} 
                        className={`block font-body text-sm hover:text-luxury-royal-blue transition-colors ${isActive(promo.path) ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}
                      >
                        {promo.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/contact" onClick={() => setIsOpen(false)} className={`block font-body text-sm uppercase tracking-wider transition-colors hover:text-luxury-royal-blue ${isActive('/contact') ? "text-luxury-royal-blue" : "text-luxury-text-primary"}`}>
                  Contact
                </Link>

                {/* Mobile Blog */}
                <div className="border-t border-white/6 pt-6">
                  <Link to="/blog" onClick={() => setIsOpen(false)} className={`block font-body text-sm uppercase tracking-wider transition-all poofy-blog text-white`}>
                    Blog
                  </Link>
                </div>
                
                <Link to="/contact#get-in-touch" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs">
                    Get Started
                  </Button>
                </Link>
              </div>
        </div>
      </div>}
  </>;
};
export default Navigation;