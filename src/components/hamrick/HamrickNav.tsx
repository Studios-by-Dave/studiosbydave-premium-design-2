import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import HamrickLogo from "./HamrickLogo";

const HamrickNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Service Area", path: "/service-area" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="frosted-glass border-b-2 border-fence-black/10 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" aria-label="Hamrick Fence Co. Home">
              <HamrickLogo className="h-12 w-auto" variant="full" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-headline text-sm uppercase tracking-wider transition-all duration-200 hover:text-fence-red relative pb-0.5 ${
                    isActive(link.path)
                      ? "text-fence-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fence-red"
                      : "text-fence-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:7044345011"
                className="btn-yellow flex items-center gap-2 text-sm ml-2"
              >
                <Phone size={15} strokeWidth={2.5} />
                (704) 434-5011
              </a>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:7044345011"
                className="btn-red flex items-center gap-1.5 text-xs px-3 py-2"
                aria-label="Call us"
              >
                <Phone size={14} strokeWidth={2.5} />
                Call Now
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-fence-black hover:text-fence-red transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-fence-cream border-l-2 border-fence-black/10 p-6 overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <HamrickLogo className="h-9 w-auto" variant="stacked" />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-fence-black hover:text-fence-red transition-colors"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            <div className="space-y-1 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-headline text-base uppercase tracking-wider py-3 px-2 border-b border-fence-black/10 transition-colors hover:text-fence-red ${
                    isActive(link.path) ? "text-fence-red" : "text-fence-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <a
              href="tel:7044345011"
              onClick={() => setIsOpen(false)}
              className="btn-yellow flex items-center justify-center gap-2 w-full text-base"
            >
              <Phone size={16} strokeWidth={2.5} />
              (704) 434-5011
            </a>
            <p className="text-center text-xs text-fence-gray mt-2 font-body">Mon–Fri 8AM–5PM</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HamrickNav;
