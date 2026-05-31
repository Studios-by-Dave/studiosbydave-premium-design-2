import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [{
      name: "Web Design",
      href: "/services/web-design"
    }, {
      name: "Logo Design & Branding",
      href: "/services/branding"
    }, {
      name: "SEO Services",
      href: "/services/seo"
    }, {
      name: "Google Optimization",
      href: "/services/google-optimization"
    }, {
      name: "Media Packs",
      href: "/services/media-packs"
    }],
    company: [{
      name: "About Us",
      href: "/about"
    }, {
      name: "Contact",
      href: "/contact"
    }, {
      name: "Privacy Policy",
      href: "/privacy"
    }, {
      name: "Terms of Service",
      href: "/terms"
    }],
    industries: [{
      name: "Roofing Contractors",
      href: "/services/web-design"
    }, {
      name: "Landscaping Companies",
      href: "/services/web-design"
    }, {
      name: "Solar Panel Installers",
      href: "/services/web-design"
    }]
  };
  return <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <video src="/studios-logo-video.mp4" autoPlay loop muted playsInline className="h-24 w-auto" width="96" height="96" />
            </div>
            <p className="text-white/80 leading-relaxed">
              We don't just build you a website. We build something GREAT together!
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={18} className="text-accent" />
                <span>(704) 473-8188</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail size={18} className="text-accent" />
                <span>david.richardson@studiosbydave.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} className="text-accent" />
                <span>Shelby, NC 28152</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-white/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-white/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6">
              Let's discuss how we can help grow your business online.
            </p>
            <Link to="/contact#get-in-touch">
              <Button variant="hero" className="w-full mb-6">
                ​Contact Us   
              </Button>
            </Link>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/studiosbydave" target="_blank" rel="noopener noreferrer" aria-label="Follow Studios by Dave on Facebook" className="text-white/60 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/studiosbydave" target="_blank" rel="noopener noreferrer" aria-label="Follow Studios by Dave on Instagram" className="text-white/60 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/studiosbydave" target="_blank" rel="noopener noreferrer" aria-label="Connect with Studios by Dave on LinkedIn" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.studiosbydave.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Studios by Dave website" className="text-white/60 hover:text-accent transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Studios by Dave. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span>Built with ❤️ for local businesses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;