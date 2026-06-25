import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Globe, Shield, Clock, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getArticleBySlug } from "@/data/blogArticles";
import { BlogCategoryBadge } from "@/components/BlogCategoryBadge";

const BlogArticle2 = () => {
  const article = getArticleBySlug("does-your-business-need-a-website-2026");
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <SimpleSEO
        title="Does Your Business Really Need a Website in 2026? | Studios by Dave Blog"
        description="Discover why most businesses still need a website in 2026, what role it plays in trust-building and discovery, and what happens if you skip it."
        keywords="do I need a website 2026, business website importance, website vs social media, web presence, Studios by Dave"
        canonical="https://www.studiosbydave.com/blog/does-your-business-need-a-website-2026"
        datePublished="2026-01-29"
        dateModified="2026-01-29"
      />
      
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="text-center mb-12 border-b-4 border-double border-neutral-900 pb-8">
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-serif mb-4">
              {article && <BlogCategoryBadge categorySlug={article.category} theme={article.theme} />}
              <span className="text-accent">Vol #1 Article #2</span>
              <span className="w-1 h-1 bg-neutral-400 rounded-full" />
              <span>January 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(259_84%_30%)] font-serif tracking-tight mb-6 leading-tight">
              Does Your Business Really Need a Website in 2026?
            </h1>
            <p className="text-xl text-neutral-600 font-serif italic leading-relaxed">
              And What Happens If You Don't
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-neutral max-w-none font-serif">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                For many years, "You need a website" was treated as unquestionable business advice—right up there with having a polished logo and a business card. But it's 2026 now. Social media platforms have become storefronts. AI assistants answer customer questions instantly. Marketplaces, apps, and directories promise to "replace" traditional websites altogether.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-semibold">
                So the question is this: Does your business really need a website anymore?
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                The short answer: Most businesses still do—but not for the reasons you might think. The long answer is where things get very interesting.
              </p>
            </section>

            {/* The Big Myth */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">The Big Myth: "Social Media Replaced Websites"</h2>
              
              <div className="bg-card p-6 rounded-lg border border-border/50 mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many businesses today operate entirely on platforms like Instagram, TikTok, WhatsApp, LinkedIn, Etsy, or Google Business Profiles. And to be totally clear—that can sometimes work, especially in the early stages.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                  But here's the uncomfortable truth: <strong>You don't OWN those platforms. You're renting attention.</strong>
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Algorithms change. Reach drops. Accounts get restricted, hacked, or shut down—sometimes without explanation. A business built entirely on a platform it doesn't control is always one policy update away from invisibility. A website is different. It's the only digital space that is fully yours.
                </p>
              </div>
            </section>

            {/* Why You Still Need a Website */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Why You Still Need a Website in 2026</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Your Business's Source of Truth</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      When people hear about your business, the first thing they still do is Google you. Your website answers: Are you legit? What exactly does your business offer? Who are you for? How can I contact or do business with you?
                    </p>
                    <p className="text-muted-foreground mt-2 font-semibold">
                      No website = unanswered questions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Builds Trust Faster Than Any Platform</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A clean, clear website signals professionalism in a way social profiles can't always match. A business with a proper domain feels established. Pricing, policies, and contact details feel safer. Reviews, case studies, or portfolios feel more credible.
                    </p>
                    <p className="text-muted-foreground mt-2 font-semibold">
                      Trust is currency—and your website is your online vault.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-trophy-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-trophy-gold" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">It Works While You Sleep</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Your website doesn't need daily posting, trending sounds, or constant engagement. It can capture leads, book appointments, answer FAQs, sell products, and educate customers.
                    </p>
                    <p className="text-muted-foreground mt-2 font-semibold">
                      That's 24/7 value—without chasing social algorithms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">It Future-Proofs Your Business</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Trends change very fast. Today it's short-form video. Tomorrow it might be AI search, voice assistants, or something entirely new. A website gives you a stable foundation that adapts as technology evolves.
                    </p>
                    <p className="text-muted-foreground mt-2 font-semibold">
                      Many AI search tools and assistants now pull information directly from business websites, not just social media posts. No website = fewer chances to be discovered in the AI-driven web.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* What Happens Without a Website */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">What Happens Without a Website?</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-900 mb-4">The Quiet Limitation</h3>
                <p className="text-red-800 leading-relaxed mb-4">
                  Here's what typically happens over time:
                </p>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>You lose credibility with higher-value clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>You rely more on paid ads or constant posting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>You miss out on search and AI discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>You struggle to clearly explain your overall value</span>
                  </li>
                </ul>
                <p className="text-red-800 leading-relaxed mt-4 font-semibold">
                  Not having a website doesn't kill a business overnight. <strong>It quietly limits its growth.</strong>
                </p>
              </div>
            </section>

            {/* The New Rule for 2026 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">The New Rule for 2026</h2>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">You Don't Need:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>A massive website</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>A complicated build</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500">✗</span>
                        <span>Dozens of pages</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">But You Do Need:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>A clear message</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>One place that explains what you do</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>One place you fully control</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-muted-foreground mt-6 italic">
                  The smartest businesses don't ask, "Do we need a website?" They ask, "What role should our website play?"
                </p>
              </div>
            </section>

            {/* Who Can Skip a Website */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Can Any Business Skip a Website?</h2>
              
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Yes, but only under specific conditions:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>You're testing an idea short-term</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>You rely entirely on referrals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>You operate on a closed platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Your business is a side hustle</span>
                  </li>
                </ul>
                <p className="text-muted-foreground italic">
                  But even then, "survive" is the key word—not scale.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Need a Website That Works?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Contact Studios by Dave for a website that actually brings you customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#get-in-touch">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Get Your Website
                    </Button>
                  </Link>
                  <Link to="/services/web-design">
                    <Button variant="outline" size="lg">
                      View Web Design Services
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </article>

          {/* Back to Blog Link */}
          <div className="mt-12 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle2;
