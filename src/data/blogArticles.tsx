export type BlogCategory = {
  slug: string;
  label: string;
  description: string;
};

export type BlogArticle = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  volume: string;
  excerpt: string;
  category: string;
  theme: "dark" | "light";
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "studios-by-dave-official",
    label: "Studios by Dave Official",
    description: "Insights, tips, and updates directly from the Studios by Dave team.",
  },
  {
    slug: "community-spotlight",
    label: "Community Spotlight",
    description: "Non-business features and stories highlighting people, places, and causes in our community.",
  },
  {
    slug: "guest-posts",
    label: "Guest Posts",
    description: "Articles and perspectives from outside writers and contributors.",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: 11,
    slug: "professional-web-design-shelby-nc-leads",
    title: "How Professional Web Design Shelby NC Drives More Local Leads in 2026",
    subtitle: "Turning Clicks into Customers with Conversion-Focused Design and SEO",
    date: "June 2026",
    volume: "Vol #2 Article #11",
    excerpt: "Looking for web design Shelby NC that actually brings in customers? See how Studios by Dave combines beautiful design, strong web development, and local SEO to grow businesses.",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 10,
    slug: "future-of-web-development-shelby-nc",
    title: "The Future of Web Development: Why Shelby Businesses Need Modern Websites Now",
    subtitle: "How 2026 Website Trends are Transforming Local Business results",
    date: "June 2026",
    volume: "Vol #2 Article #10",
    excerpt: "Web development in Shelby NC is evolving fast. Learn what 2026 website trends matter most for local businesses and how Studios by Dave delivers them.",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 9,
    slug: "web-designers-near-me-vs-big-agencies",
    title: "Web Designers Near Me vs Big Agencies: Why Shelby NC Businesses Are Choosing Local in 2026",
    subtitle: "Better Results, Faster Service, and Lower Costs – Why Local Web Design Wins",
    date: "June 2026",
    volume: "Vol #2 Article #9",
    excerpt: "Searching for web designers near me? Discover why local web design Shelby experts at Studios by Dave outperform big agencies with better results, faster service, and lower costs.",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 8,
    slug: "web-development-2026",
    title: "Web Development in 2026: What Local Businesses Need to Know",
    subtitle: "Key Trends and Technologies Shaping the Future of Web Development",
    date: "May 2026",
    volume: "Vol #2 Article #8",
    excerpt: "Discover the key web development trends and technologies shaping 2026. From AI-powered tools to mobile-first design, learn what local businesses need to stay competitive online.",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 7,
    slug: "trucking-industry-challenges-2026",
    title: "The Road Gets Harder: What Today's Trucking Companies Are Up Against — And Why Their Work Has Never Mattered More",
    subtitle: "Featured on Studios by Dave | Spotlighting F&S Expedited LLC",
    date: "May 2026",
    volume: "Vol #1 Article #7",
    excerpt: "An honest look at the trucking industry's challenges and why companies like F&S Expedited LLC deserve your business. Fuel costs, regulations, and market pressures explained.",
    category: "community-spotlight",
    theme: "light",
  },
  {
    id: 6,
    slug: "ai-development-stack-2026",
    title: "My AI-Powered Web Development Stack (2026): Tools, Workflow, and Setup",
    subtitle: "The Complete Guide to Building Your AI Development Stack for Maximum Productivity",
    date: "April 2026",
    volume: "Vol #1 Article #6",
    excerpt: "If you're trying to figure out the best AI tools for web development in 2026, the real answer isn't a single tool—it's a stack. Discover the exact tools I use, how they fit together, and why each one matters for building better websites faster.",
    category: "studios-by-dave-official",
    theme: "dark",
  },
  {
    id: 5,
    slug: "fs-expedited-llc-spotlight",
    title: "Driving Efficiency Forward: Spotlight on F&S Expedited LLC",
    subtitle: "Reliable, Fast, and Customer-Focused Logistics from Shelby, NC",
    date: "March 2026",
    volume: "Vol #1 Article #5",
    excerpt: "In today's fast-paced logistics landscape, businesses need more than just transportation—they need reliability, speed, and a partner they can trust. Meet F&S Expedited LLC, a Shelby-based interstate freight carrier committed to delivering efficient, dependable solutions.",
    category: "community-spotlight",
    theme: "light",
  },
  {
    id: 4,
    slug: "local-seo-essentials-2026",
    title: "Local SEO Essentials for Shelby Businesses in 2026: Don't Get Left Behind in AI Search",
    subtitle: "Why Local SEO Is More Important Than Ever – And How to Get It Right",
    date: "February 2026",
    volume: "Vol #1 Article #4",
    excerpt: "Even a beautifully designed, mistake-free website can get buried in search results if local SEO isn't dialed in. With AI Overviews, zero-click searches, and voice assistants dominating, local online visibility has shifted dramatically.",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 3,
    slug: "website-mistakes-costing-customers",
    title: "5 Common Website Mistakes Costing Local Businesses Customers",
    subtitle: "And How to Fix Them Before It's Too Late",
    date: "January 2026",
    volume: "Vol #1 Article #3",
    excerpt: "Your website is often the first impression a potential customer has of your business. But what happens when that first impression is a bad one? Every day, local businesses lose customers—not because of poor service—but because of easily fixable website mistakes.",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 2,
    slug: "does-your-business-need-a-website-2026",
    title: "Does Your Business Really Need a Website in 2026?",
    subtitle: "And What Happens If You Don't",
    date: "January 2026",
    volume: "Vol #1 Article #2",
    excerpt: "For many years, 'You need a website' was treated as unquestionable business advice. But it's 2026 now. Social media platforms have become storefronts. AI assistants answer questions instantly. So does your business really need a website anymore?",
    category: "studios-by-dave-official",
    theme: "light",
  },
  {
    id: 1,
    slug: "why-choose-studios-by-dave",
    title: "Why Choose Studios by Dave Over the Local Competition?",
    subtitle: "A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC",
    date: "January 2025",
    volume: "Vol #1 Article #1",
    excerpt: "In today's digital-first world, your website and online presence are often the first impression customers have of your business. For local businesses in Shelby, North Carolina and the surrounding areas, choosing the right digital partner can make the difference between being found — or being overlooked.",
    category: "studios-by-dave-official",
    theme: "dark",
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find((article) => article.slug === slug);

export const getCategoryBySlug = (slug: string): BlogCategory | undefined =>
  blogCategories.find((category) => category.slug === slug);

export const getArticlesByCategory = (categorySlug: string): BlogArticle[] =>
  blogArticles.filter((article) => article.category === categorySlug);
