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
    }, {
      name: "Case Studies",
      href: "/services/case-studies"
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
  return <footer className="bg-luxury-footer text-luxury-text-primary">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <video src="/studios-logo-video.mp4" autoPlay loop muted playsInline className="h-20 w-auto" width="80" height="80" />
            </div>
            <h3 className="display-heading text-3xl text-luxury-text-primary">Studios by Dave</h3>
            <p className="font-body text-luxury-text-secondary leading-relaxed text-sm">
              We don't just build you a website. We build something GREAT together!
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <img src="/assets/aplus_1.png" alt="CompTIA A+" title="CompTIA A+ Certified" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-luxury-text-secondary text-sm">
                <Phone size={16} className="text-luxury-royal-blue" />
                <span>(704) 473-8188</span>
              </div>
              <div className="flex items-center space-x-3 text-luxury-text-secondary text-sm">
                <Mail size={16} className="text-luxury-royal-blue" />
                <span>david.richardson@studiosbydave.com</span>
              </div>
              <div className="flex items-center space-x-3 text-luxury-text-secondary text-sm">
                <MapPin size={16} className="text-luxury-royal-blue" />
                <span>Shelby, NC 28152</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-section text-xs uppercase tracking-wider text-luxury-royal-blue mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="font-body text-luxury-text-secondary text-sm hover:text-luxury-royal-blue transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-section text-xs uppercase tracking-wider text-luxury-royal-blue mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="font-body text-luxury-text-secondary text-sm hover:text-luxury-royal-blue transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="font-section text-xs uppercase tracking-wider text-luxury-royal-blue mb-6">Ready to Get Started?</h3>
            <p className="font-body text-luxury-text-secondary text-sm mb-6 leading-relaxed">
              Let's discuss how we can help grow your business online.
            </p>
            <Link to="/contact#get-in-touch">
              <Button className="w-full mb-6 bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs">
                Contact Us
              </Button>
            </Link>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/studiosbydave" target="_blank" rel="noopener noreferrer" aria-label="Follow Studios by Dave on Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-text-secondary hover:text-luxury-royal-blue hover:border-luxury-royal-blue transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/studiosbydave" target="_blank" rel="noopener noreferrer" aria-label="Follow Studios by Dave on Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-text-secondary hover:text-luxury-royal-blue hover:border-luxury-royal-blue transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/studiosbydave" target="_blank" rel="noopener noreferrer" aria-label="Connect with Studios by Dave on LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-text-secondary hover:text-luxury-royal-blue hover:border-luxury-royal-blue transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://www.studiosbydave.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Studios by Dave website" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-text-secondary hover:text-luxury-royal-blue hover:border-luxury-royal-blue transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-luxury-text-secondary text-xs">
              © {currentYear} Studios by Dave. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 font-body text-xs text-luxury-text-secondary">
              <Link to="/privacy" className="hover:text-luxury-lime transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-luxury-lime transition-colors">
                Terms of Service
              </Link>
              <span className="accent-text text-luxury-lime">Built with ❤️ for local businesses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;