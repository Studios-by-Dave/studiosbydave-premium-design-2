import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import HamrickLogo from "./HamrickLogo";

const HamrickFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-fence-black text-fence-cream">
      {/* Yellow top strip */}
      <div className="h-1.5 bg-fence-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <HamrickLogo className="h-14 w-auto mb-5" variant="stacked" />
            <p className="font-body text-sm text-fence-cream/70 leading-relaxed mb-4">
              Built Strong. Built Local. Built to Last.
            </p>
            <p className="font-body text-sm text-fence-cream/70 leading-relaxed">
              13+ years serving Cleveland County, NC with quality fencing solutions for homes, farms, and businesses.
            </p>
            <div className="mt-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fence-yellow hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
                <span className="font-body text-sm">Follow us on Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-base uppercase tracking-wider text-fence-yellow mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Gallery / Our Work", path: "/gallery" },
                { name: "Service Area", path: "/service-area" },
                { name: "About Us", path: "/about" },
                { name: "Free Estimate", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-fence-cream/70 hover:text-fence-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline text-base uppercase tracking-wider text-fence-yellow mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                "Wood Fencing",
                "Vinyl Fencing",
                "Chain Link",
                "Ornamental Metal",
                "Farm & Ranch Fencing",
                "Deck Construction",
                "Gate Installation",
                "Fence Repair",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-sm text-fence-cream/70 hover:text-fence-yellow transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-base uppercase tracking-wider text-fence-yellow mb-5">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:7044345011"
                className="flex items-start gap-3 text-fence-cream/70 hover:text-fence-yellow transition-colors group"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-fence-yellow" />
                <div>
                  <p className="font-headline text-base tracking-wide text-fence-yellow">(704) 434-5011</p>
                  <p className="font-body text-xs">Click to call</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-fence-cream/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-fence-yellow" />
                <div className="space-y-2">
                  <div>
                    <p className="font-body text-sm font-semibold text-fence-cream/90">Boiling Springs Location</p>
                    <p className="font-body text-xs">407 E College Ave</p>
                    <p className="font-body text-xs">Boiling Springs, NC 28017</p>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-fence-cream/90">Shelby Location</p>
                    <p className="font-body text-xs">366 E College Ave</p>
                    <p className="font-body text-xs">Shelby, NC 28152</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-fence-cream/70">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-fence-yellow" />
                <div>
                  <p className="font-body text-sm font-semibold text-fence-cream/90">Hours</p>
                  <p className="font-body text-xs">Monday–Friday: 8:00 AM – 5:00 PM</p>
                  <p className="font-body text-xs">Saturday–Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-fence-cream/40">
            © {year} Hamrick Fence Co. All rights reserved.
          </p>
          <p className="font-body text-xs text-fence-cream/40">
            Serving Boiling Springs, Shelby &amp; Cleveland County, NC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HamrickFooter;
