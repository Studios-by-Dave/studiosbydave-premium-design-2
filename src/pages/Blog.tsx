import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema } from "@/data/structuredData";

const blogArticles = [
  {
    id: 11,
    slug: "professional-web-design-shelby-nc-leads",
    title: "How Professional Web Design Shelby NC Drives More Local Leads in 2026",
    subtitle: "Turning Clicks into Customers with Conversion-Focused Design and SEO",
    date: "June 2026",
    volume: "Vol #2 Article #11",
    excerpt: "Looking for web design Shelby NC that actually brings in customers? See how Studios by Dave combines beautiful design, strong web development, and local SEO to grow businesses.",
  },
  {
    id: 10,
    slug: "future-of-web-development-shelby-nc",
    title: "The Future of Web Development: Why Shelby Businesses Need Modern Websites Now",
    subtitle: "How 2026 Website Trends are Transforming Local Business results",
    date: "June 2026",
    volume: "Vol #2 Article #10",
    excerpt: "Web development in Shelby NC is evolving fast. Learn what 2026 website trends matter most for local businesses and how Studios by Dave delivers them.",
  },
  {
    id: 9,
    slug: "web-designers-near-me-vs-big-agencies",
    title: "Web Designers Near Me vs Big Agencies: Why Shelby NC Businesses Are Choosing Local in 2026",
    subtitle: "Better Results, Faster Service, and Lower Costs – Why Local Web Design Wins",
    date: "June 2026",
    volume: "Vol #2 Article #9",
    excerpt: "Searching for web designers near me? Discover why local web design Shelby experts at Studios by Dave outperform big agencies with better results, faster service, and lower costs.",
  },
  {
    id: 8,
    slug: "web-development-2026",
    title: "Web Development in 2026: What Local Businesses Need to Know",
    subtitle: "Key Trends and Technologies Shaping the Future of Web Development",
    date: "May 2026",
    volume: "Vol #2 Article #8",
    excerpt: "Discover the key web development trends and technologies shaping 2026. From AI-powered tools to mobile-first design, learn what local businesses need to stay competitive online.",
  },
  {
    id: 7,
    slug: "trucking-industry-challenges-2026",
    title: "The Road Gets Harder: What Today's Trucking Companies Are Up Against — And Why Their Work Has Never Mattered More",
    subtitle: "Featured on Studios by Dave | Spotlighting F&S Expedited LLC",
    date: "May 2026",
    volume: "Vol #1 Article #7",
    excerpt: "An honest look at the trucking industry's challenges and why companies like F&S Expedited LLC deserve your business. Fuel costs, regulations, and market pressures explained.",
  },
  {
    id: 6,
    slug: "ai-development-stack-2026",
    title: "My AI-Powered Web Development Stack (2026): Tools, Workflow, and Setup",
    subtitle: "The Complete Guide to Building Your AI Development Stack for Maximum Productivity",
    date: "April 2026",
    volume: "Vol #1 Article #6",
    excerpt: "If you're trying to figure out the best AI tools for web development in 2026, the real answer isn't a single tool—it's a stack. Discover the exact tools I use, how they fit together, and why each one matters for building better websites faster.",
  },
  {
    id: 5,
    slug: "fs-expedited-llc-spotlight",
    title: "Driving Efficiency Forward: Spotlight on F&S Expedited LLC",
    subtitle: "Reliable, Fast, and Customer-Focused Logistics from Shelby, NC",
    date: "March 2026",
    volume: "Vol #1 Article #5",
    excerpt: "In today's fast-paced logistics landscape, businesses need more than just transportation—they need reliability, speed, and a partner they can trust. Meet F&S Expedited LLC, a Shelby-based interstate freight carrier committed to delivering efficient, dependable solutions.",
  },
  {
    id: 4,
    slug: "local-seo-essentials-2026",
    title: "Local SEO Essentials for Shelby Businesses in 2026: Don't Get Left Behind in AI Search",
    subtitle: "Why Local SEO Is More Important Than Ever – And How to Get It Right",
    date: "February 2026",
    volume: "Vol #1 Article #4",
    excerpt: "Even a beautifully designed, mistake-free website can get buried in search results if local SEO isn't dialed in. With AI Overviews, zero-click searches, and voice assistants dominating, local online visibility has shifted dramatically.",
  },
  {
    id: 3,
    slug: "website-mistakes-costing-customers",
    title: "5 Common Website Mistakes Costing Local Businesses Customers",
    subtitle: "And How to Fix Them Before It's Too Late",
    date: "January 2026",
    volume: "Vol #1 Article #3",
    excerpt: "Your website is often the first impression a potential customer has of your business. But what happens when that first impression is a bad one? Every day, local businesses lose customers—not because of poor service—but because of easily fixable website mistakes.",
  },
  {
    id: 2,
    slug: "does-your-business-need-a-website-2026",
    title: "Does Your Business Really Need a Website in 2026?",
    subtitle: "And What Happens If You Don't",
    date: "January 2026",
    volume: "Vol #1 Article #2",
    excerpt: "For many years, 'You need a website' was treated as unquestionable business advice. But it's 2026 now. Social media platforms have become storefronts. AI assistants answer questions instantly. So does your business really need a website anymore?",
  },
  {
    id: 1,
    slug: "why-choose-studios-by-dave",
    title: "Why Choose Studios by Dave Over the Local Competition?",
    subtitle: "A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC",
    date: "January 2025",
    volume: "Vol #1 Article #1",
    excerpt: "In today's digital-first world, your website and online presence are often the first impression customers have of your business. For local businesses in Shelby, North Carolina and the surrounding areas, choosing the right digital partner can make the difference between being found — or being overlooked.",
  },
];

const Blog = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Blog", url: "https://www.studiosbydave.com/blog" }
  ]);

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="The Studio's Chronicle | Local Business Tips & Insights 2026"
        description="Insights, tips, and stories for local business success — web design, SEO, branding, and digital marketing advice from Studios by Dave in Shelby, NC."
        keywords="contractor blog, web design tips, SEO insights, digital marketing news, branding advice, Shelby NC, contractor marketing, local business blog"
        canonical="https://www.studiosbydave.com/blog"
        structuredData={[breadcrumbs]}
      />
      <Navigation />
      
      <main className="py-12 md:py-20 relative bg-luxury-bg noise-overlay">
        {/* Corner Images */}
        <img
          src="/assets/blog1.jpeg"
          alt="Blog decoration"
          className="absolute top-4 left-4 w-12 h-12 md:w-32 md:h-32 object-cover rounded-lg opacity-20 filter grayscale"
        />
        <img
          src="/assets/blog3.jpeg"
          alt="Blog decoration"
          className="absolute top-4 right-4 w-12 h-12 md:w-32 md:h-32 object-cover rounded-lg opacity-20 filter grayscale"
        />
        <img
          src="/assets/blog2.jpeg"
          alt="Blog decoration"
          className="absolute bottom-4 left-4 w-12 h-12 md:w-32 md:h-32 object-cover rounded-lg opacity-20 filter grayscale"
        />
        <img
          src="/assets/blog4.jpeg"
          alt="Blog decoration"
          className="absolute bottom-4 right-4 w-12 h-12 md:w-32 md:h-32 object-cover rounded-lg opacity-20 filter grayscale"
        />

        <div className="container mx-auto px-4 max-w-5xl">
          {/* Newspaper Masthead */}
          <header className="text-center mb-12 border-b-4 border-double border-white/10 pb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-serif mb-2">
              Est. 2024
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-luxury-lime font-serif tracking-tight border-4 border-white/10 rounded-lg px-4 md:px-6 py-2 md:py-3 inline-block shadow-[0_0_30px_rgba(201,240,77,0.1)] italic [font-style:oblique_4deg]">
              The Studio's Chronicle
            </h1>
            <p className="text-lg text-neutral-400 font-serif italic mt-4">
              Insights, Tips & Stories for Local Business Success
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 mt-4 font-serif">
              <span>Shelby, North Carolina</span>
              <span className="w-1 h-1 bg-neutral-600 rounded-full" />
              <span>Digital Edition</span>
            </div>
          </header>

          {/* Articles Grid */}
          <div className="space-y-8">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block group"
              >
                <article className="bg-luxury-surface border border-white/10 p-6 md:p-8 hover:shadow-[0_0_30px_rgba(201,240,77,0.05)] transition-all duration-300 rounded-xl relative overflow-hidden group">
                  {/* Subtle hover glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-lime/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Article Header */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-serif mb-4 border-b border-white/5 pb-4 relative z-10">
                    <span className="electric-green-red-text">{article.volume}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  {/* Article Title */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-serif mb-2 group-hover:text-luxury-lime transition-colors relative z-10">
                    {article.title}
                  </h2>
                  <p className="text-base md:text-lg text-neutral-400 font-serif italic mb-4 relative z-10">
                    {article.subtitle}
                  </p>
                  
                  {/* Excerpt */}
                  <p className="text-sm md:text-base text-neutral-300 font-serif leading-relaxed mb-6 relative z-10">
                    {article.excerpt}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center gap-2 text-luxury-lime font-semibold font-serif group-hover:gap-3 transition-all relative z-10">
                    <span>Continue Reading</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* More Articles Coming Soon */}
          <div className="mt-12 text-center border-t border-white/10 pt-8">
            <p className="text-neutral-500 font-serif italic">
              More articles coming soon...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
