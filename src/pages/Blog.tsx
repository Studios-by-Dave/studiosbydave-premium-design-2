import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema } from "@/data/structuredData";
import { blogArticles, blogCategories, getCategoryBySlug } from "@/data/blogArticles";
import { BlogCategoryBadge } from "@/components/BlogCategoryBadge";

const Blog = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const activeCategory = categorySlug
    ? getCategoryBySlug(categorySlug)
    : undefined;

  const filteredArticles = activeCategory
    ? blogArticles.filter((article) => article.category === activeCategory.slug)
    : blogArticles;

  const pageTitle = activeCategory
    ? `${activeCategory.label} | The Studio's Chronicle | Studios by Dave Blog`
    : "The Studio's Chronicle | Local Business Tips & Insights 2026";

  const pageDescription = activeCategory
    ? activeCategory.description
    : "Insights, tips, and stories for local business success — web design, SEO, branding, and digital marketing advice from Studios by Dave in Shelby, NC.";

  const canonicalUrl = activeCategory
    ? `https://www.studiosbydave.com/blog/category/${activeCategory.slug}`
    : "https://www.studiosbydave.com/blog";

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Blog", url: "https://www.studiosbydave.com/blog" },
    ...(activeCategory
      ? [
          {
            name: activeCategory.label,
            url: `https://www.studiosbydave.com/blog/category/${activeCategory.slug}`,
          },
        ]
      : []),
  ]);

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title={pageTitle}
        description={pageDescription}
        keywords="contractor blog, web design tips, SEO insights, digital marketing news, branding advice, Shelby NC, contractor marketing, local business blog"
        canonical={canonicalUrl}
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
          <header className="text-center mb-8 border-b-4 border-double border-white/10 pb-8">
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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif border transition-all duration-300 ${
                !activeCategory
                  ? "bg-luxury-lime text-black border-luxury-lime font-semibold"
                  : "text-neutral-400 border-white/10 hover:border-luxury-lime/50 hover:text-luxury-lime"
              }`}
            >
              All
            </Link>
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog/category/${category.slug}`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif border transition-all duration-300 ${
                  activeCategory?.slug === category.slug
                    ? "bg-luxury-lime text-black border-luxury-lime font-semibold"
                    : "text-neutral-400 border-white/10 hover:border-luxury-lime/50 hover:text-luxury-lime"
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>

          {/* Active Category Description */}
          {activeCategory && (
            <div className="text-center mb-10">
              <p className="text-neutral-400 font-serif italic max-w-2xl mx-auto">
                {activeCategory.description}
              </p>
            </div>
          )}

          {/* Articles Grid */}
          <div className="space-y-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block group"
              >
                <article className="bg-luxury-surface border border-white/10 p-6 md:p-8 hover:shadow-[0_0_30px_rgba(201,240,77,0.05)] transition-all duration-300 rounded-xl relative overflow-hidden group">
                  {/* Subtle hover glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-lime/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Article Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400 font-serif mb-4 border-b border-white/5 pb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <BlogCategoryBadge
                        categorySlug={article.category}
                        theme="dark"
                      />
                      <span className="electric-green-red-text">
                        {article.volume}
                      </span>
                    </div>
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

          {/* Empty State for Guest Posts */}
          {filteredArticles.length === 0 && activeCategory && (
            <div className="text-center py-16 border-t border-white/10 mt-8">
              <p className="text-neutral-400 font-serif italic text-lg mb-2">
                No articles yet in {activeCategory.label}.
              </p>
              <p className="text-neutral-500 font-serif text-sm">
                Check back soon for new contributions.
              </p>
            </div>
          )}

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
