import { Link } from "react-router-dom";

interface InternalLink {
  text: string;
  url: string;
  description: string;
}

const footerLinks: InternalLink[] = [
  { text: "Web Design Services", url: "/services/web-design", description: "Custom contractor websites" },
  { text: "SEO Optimization", url: "/services/seo", description: "Rank higher in search results" },
  { text: "Branding & Logo Design", url: "/services/branding", description: "Professional brand identity" },
  
  { text: "Google Optimization", url: "/services/google-optimization", description: "Local search dominance" },
  
];

const InternalLinksFooter = () => {
  return (
    <nav className="py-8 bg-muted/30" aria-label="Internal site navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="block p-4 rounded-lg hover:bg-muted/50 transition-colors"
              title={link.description}
            >
              <span className="font-semibold text-foreground hover:text-primary">
                {link.text}
              </span>
              <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default InternalLinksFooter;
