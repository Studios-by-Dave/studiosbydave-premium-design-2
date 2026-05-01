import { Link } from "react-router-dom";

interface InternalLink {
  text: string;
  url: string;
  description: string;
  category: string;
}

const serviceLinks: InternalLink[] = [
  { text: "Web Design Services", url: "/services/web-design", description: "Custom contractor websites", category: "services" },
  { text: "SEO Optimization", url: "/services/seo", description: "Rank higher in search results", category: "services" },
  { text: "Branding & Logo Design", url: "/services/branding", description: "Professional brand identity", category: "services" },
  { text: "Google Optimization", url: "/services/google-optimization", description: "Local search dominance", category: "services" },
  { text: "Current Promotions", url: "/services/promos", description: "Special offers & deals", category: "services" },
  { text: "Media Packs", url: "/services/media-packs", description: "Custom digital content", category: "services" },
];

const blogLinks: InternalLink[] = [
  { text: "Why Choose Studios by Dave", url: "/blog/why-choose-studios-by-dave", description: "Local partner for web design", category: "blog" },
  { text: "Does Your Business Need a Website?", url: "/blog/does-your-business-need-a-website-2026", description: "Website importance in 2026", category: "blog" },
  { text: "5 Common Website Mistakes", url: "/blog/website-mistakes-costing-customers", description: "Fix costly website errors", category: "blog" },
  { text: "Local SEO Essentials 2026", url: "/blog/local-seo-essentials-2026", description: "Shelby SEO strategies", category: "blog" },
  { text: "F&S Expedited LLC Spotlight", url: "/blog/fs-expedited-llc-spotlight", description: "Client success story", category: "blog" },
  { text: "AI Development Stack 2026", url: "/blog/ai-development-stack-2026", description: "Modern web development tools", category: "blog" },
];

const companyLinks: InternalLink[] = [
  { text: "About Us", url: "/about", description: "Meet our team", category: "company" },
  { text: "Portfolio", url: "/services/portfolio", description: "View our work", category: "company" },
  { text: "Contact Us", url: "/contact", description: "Get in touch", category: "company" },
  { text: "Book a Consultation", url: "/booking", description: "Schedule a meeting", category: "company" },
];

const InternalLinksFooter = () => {
  return (
    <nav className="py-12 bg-muted/20" aria-label="Internal site navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Explore Our Services</h2>
          <p className="text-muted-foreground">Discover everything we offer to help your business grow</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Services
            </h3>
            <div className="space-y-3">
              {serviceLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  title={link.description}
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.text}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Blog Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Latest Articles
            </h3>
            <div className="space-y-3">
              {blogLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  title={link.description}
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {link.text}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-trophy-gold rounded-full"></span>
              Company
            </h3>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  title={link.description}
                >
                  <span className="font-medium text-foreground group-hover:text-trophy-gold transition-colors">
                    {link.text}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Get Started
            </h3>
            <div className="space-y-3">
              <Link
                to="/contact#get-in-touch"
                className="block p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group border border-primary/20"
              >
                <span className="font-medium text-primary group-hover:text-primary/90">
                  Start Your Project
                </span>
                <p className="text-sm text-muted-foreground mt-1">Free consultation</p>
              </Link>
              <Link
                to="/services/promos"
                className="block p-4 rounded-lg bg-trophy-gold/10 hover:bg-trophy-gold/20 transition-colors group border border-trophy-gold/20"
              >
                <span className="font-medium text-foreground group-hover:text-foreground/90">
                  Current Promotions
                </span>
                <p className="text-sm text-muted-foreground mt-1">Special offers available</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog Home
            </Link>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              All Services
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InternalLinksFooter;
