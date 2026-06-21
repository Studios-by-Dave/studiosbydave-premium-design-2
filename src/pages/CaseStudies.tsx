import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, BarChart3, Search, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const caseStudies: CaseStudy[] = [
  {
    id: "pre-rendering-seo",
    title: "Why Google's Not Indexing Your Website (And How Pre-Rendering Can Solve It)",
    client: "New Web Design Client",
    category: "Technical SEO",
    summary: "How we fixed severe indexing issues on a brand-new AI-generated website so it could finally be found by search engines.",
    icon: <Search className="w-8 h-8 text-luxury-royal-blue" />,
    content: (
      <div className="space-y-6 text-luxury-text-primary">
        <section>
          <h3 className="text-xl font-bold text-white mb-3">The Problem</h3>
          <p className="mb-4">We launched a brand-new website built with a modern AI-powered website builder for a new client. The design was impressive. Pages loaded quickly, navigation worked flawlessly, and the site was fully accessible to visitors.</p>
          <p className="mb-4">A few weeks after launch, however, a major issue surfaced. Despite the website being live and publicly accessible, Google was not indexing most of the pages.</p>
          <p className="mb-4">The client searched for their business online and found little to no visibility. Google Search Console showed URLs being discovered but not properly indexed, and important content wasn't appearing in search results.</p>
          <p>The website existed—but from Google's perspective, much of it was essentially invisible.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">Understanding Google Indexing</h3>
          <p className="mb-4">Google indexing is the process of discovering, rendering, analyzing, and storing webpages within Google's search database. When a page is indexed, it becomes eligible to appear in search results.</p>
          <p className="mb-4">Many modern AI builders and JavaScript frameworks generate content dynamically in the browser. While users see a complete page, search engine crawlers may receive only a minimal HTML shell that relies on JavaScript execution before content becomes visible.</p>
          <p className="mb-2">Although Google's crawler can execute JavaScript, rendering is not always immediate and can consume additional crawl resources. This often leads to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-luxury-text-secondary">
            <li>Delayed indexing</li>
            <li>Missing page content</li>
            <li>Reduced crawl efficiency</li>
            <li>Poor SEO performance</li>
            <li>Important pages being excluded from search results</li>
          </ul>
          <p>For businesses relying on organic traffic, this becomes a significant problem.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">The Investigation</h3>
          <p className="mb-2">A technical audit revealed several warning signs:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-luxury-text-secondary">
            <li>Page source contained very little content.</li>
            <li>Most content was injected after page load through JavaScript.</li>
            <li>Google Search Console showed indexing inconsistencies.</li>
            <li>Some URLs were crawled but not indexed.</li>
            <li>Critical content was unavailable without executing JavaScript.</li>
          </ul>
          <p>The website looked great to visitors, but search engines were receiving an incomplete version of the page.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">The Solution: A Pre-Rendering Plugin</h3>
          <p className="mb-4">To solve the issue, we implemented a pre-rendering strategy. Pre-rendering generates a fully rendered HTML version of a page before it reaches search engine crawlers.</p>
          <p className="mb-2">Instead of asking Google to execute large amounts of JavaScript to understand the content, the server delivers a complete HTML document containing:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-luxury-text-secondary">
            <li>Headings</li>
            <li>Body content</li>
            <li>Metadata</li>
            <li>Internal links</li>
            <li>Structured content</li>
          </ul>
          <p>This gives search engines immediate access to the information they need to crawl and index the page effectively. Think of it as handing Google a finished book instead of giving it loose pages and asking it to assemble the story itself.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">The Results</h3>
          <p className="mb-2">After implementing pre-rendering:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-luxury-text-secondary">
            <li>Google was able to crawl content more efficiently.</li>
            <li>Indexed page counts increased.</li>
            <li>Search Console warnings decreased.</li>
            <li>New pages appeared in search results faster.</li>
            <li>Organic visibility improved.</li>
          </ul>
          <p>Most importantly, the website's content became visible to both users and search engines.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">Key Takeaways</h3>
          <p className="mb-4">Modern AI website builders can dramatically accelerate website creation and design. However, launching a beautiful website is only half the battle.</p>
          <p className="mb-4">If search engines cannot reliably discover and process your content, your website may struggle to generate organic traffic regardless of how impressive it looks.</p>
          <p className="mb-4">Pre-rendering bridges the gap between modern web technologies and search engine requirements by ensuring that every page is delivered in a format Google can easily understand and index.</p>
          <p className="mb-4">Before launching any AI-generated or JavaScript-heavy website, it's important to verify that Google can see the same content your visitors can.</p>
          <p className="font-bold text-white">A website that isn't indexed is effectively invisible. The best websites aren't just beautifully designed—they're built to be discovered.</p>
        </section>
      </div>
    )
  },
  {
    id: "service-area-seo",
    title: "How Service Area Pages Multiplied Organic Reach for a Local Web Design Agency",
    client: "Studios by Dave",
    category: "Local SEO & Growth",
    summary: "Creating city-specific service area pages increased organic impressions by 214% and inbound leads by 138% in just 4 months.",
    icon: <BarChart3 className="w-8 h-8 text-luxury-lime" />,
    content: (
      <div className="space-y-6 text-luxury-text-primary">
        <div className="bg-luxury-surface/50 p-4 rounded-lg border border-white/6 mb-6">
          <p className="text-sm"><strong>Client:</strong> Studios by Dave | Shelby, NC</p>
          <p className="text-sm"><strong>Services Covered:</strong> Web Design • SEO • Branding • Google Optimization • Media Packs</p>
        </div>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">Executive Summary</h3>
          <p className="mb-4">Studios by Dave is a web design and digital marketing agency based in Shelby, NC. Initially relying on a single homepage and a handful of core service pages, the agency saw a modest stream of inbound inquiries but left enormous geographic reach untapped.</p>
          <p className="mb-4">This case study documents the strategy, implementation, and measured outcomes of adding dedicated Service Area pages — one for each of the six primary markets served — alongside the existing service-specific pages.</p>
          <p className="font-semibold text-luxury-lime mb-4">The results were significant: organic search impressions increased by 214%, inbound lead volume rose by 138%, and the agency established a first-page Google presence in five of its six target cities within four months of launch — without a single dollar of additional paid advertising.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">The Challenge: Great Services, Invisible Geography</h3>
          <p className="mb-4">Before the expansion, the website had solid service pages but no geographic context. When a business owner in Charlotte searches for "web design Charlotte NC," they want an agency serving Charlotte. A generic "Web Design" page almost never ranks for local queries.</p>
          <div className="bg-white/5 p-4 rounded border-l-4 border-luxury-royal-blue mb-4">
            <h4 className="font-bold text-white mb-2">The Core Gap at a Glance</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-luxury-text-secondary">
              <li>5 active geographic markets served — 0 dedicated landing pages for those markets</li>
              <li>Organic visibility limited almost entirely to "Shelby NC" branded searches</li>
              <li>No structured internal linking between services and service areas</li>
              <li>Competitors occupying valuable Google positions that were completely accessible</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">The Strategy: Pairing Services with Places</h3>
          <p className="mb-4">The solution was straightforward in concept but required deliberate execution: create a dedicated, keyword-optimized landing page for every city actively serviced, natively connected to the existing service pages.</p>
          
          <div className="space-y-4">
            <h4 className="font-bold text-white">Anatomy of an Effective Service Area Page:</h4>
            <ul className="space-y-2 text-luxury-text-secondary list-disc pl-5">
              <li><strong className="text-white">Localized Meta Data:</strong> Unique title tags ("Web Design & Development [City, State] | Studios by Dave") and city-specific meta descriptions.</li>
              <li><strong className="text-white">City-Specific Content:</strong> Genuinely localized content—no duplicated boilerplate—referencing local business environments.</li>
              <li><strong className="text-white">Strategic Cross-Linking:</strong> Bidirectional links between Service pages and Area pages to form a "hub and spoke" architecture that boosts topical authority.</li>
              <li><strong className="text-white">Navigation Integration:</strong> A dedicated dropdown section in the primary menu for immediate crawlability.</li>
              <li><strong className="text-white">Local Schema Markup:</strong> LocalBusiness schema to define service area radius and trigger Local Pack eligibility.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">Before vs. After: By the Numbers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-luxury-surface p-4 rounded-lg border border-white/6 text-center">
              <div className="text-2xl font-bold text-luxury-lime mb-1">+214%</div>
              <div className="text-xs uppercase tracking-wider">Organic Impressions</div>
            </div>
            <div className="bg-luxury-surface p-4 rounded-lg border border-white/6 text-center">
              <div className="text-2xl font-bold text-luxury-lime mb-1">+138%</div>
              <div className="text-xs uppercase tracking-wider">Inbound Leads</div>
            </div>
            <div className="bg-luxury-surface p-4 rounded-lg border border-white/6 text-center">
              <div className="text-2xl font-bold text-luxury-lime mb-1">5 of 6</div>
              <div className="text-xs uppercase tracking-wider">Cities Ranking P1</div>
            </div>
            <div className="bg-luxury-surface p-4 rounded-lg border border-white/6 text-center">
              <div className="text-2xl font-bold text-luxury-lime mb-1">+310%</div>
              <div className="text-xs uppercase tracking-wider">Indexed Pages</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-white">
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4">Before (Monthly)</th>
                  <th className="py-3 px-4">After (Monthly)</th>
                </tr>
              </thead>
              <tbody className="text-luxury-text-secondary">
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4 font-medium text-white">Organic Impressions</td>
                  <td className="py-2 px-4">~1,400</td>
                  <td className="py-2 px-4 text-luxury-lime">~4,400 (+214%)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4 font-medium text-white">Organic Clicks</td>
                  <td className="py-2 px-4">~110</td>
                  <td className="py-2 px-4 text-luxury-lime">~290 (+164%)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4 font-medium text-white">Average Session Duration</td>
                  <td className="py-2 px-4">1 min 12 sec</td>
                  <td className="py-2 px-4 text-luxury-lime">2 min 04 sec (+71%)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4 font-medium text-white">Bounce Rate</td>
                  <td className="py-2 px-4">74%</td>
                  <td className="py-2 px-4 text-luxury-lime">58% (-16 pts)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-white mb-3">Why This Strategy Works</h3>
          <p className="mb-4">Search engines reward specificity. A page about web design in Gastonia, NC competes with a much smaller pool of locally relevant results — and Google strongly favors local intent signals.</p>
          <p className="mb-4">Each new page is a potential first touchpoint. Six new pages gave the agency six additional front doors. The internal "hub and spoke" linking structure systematically improved the entire site's rankings.</p>
          <p>Unlike paid ads, which stop delivering the moment the budget is paused, each Service Area page is a permanent asset that continues generating organic traffic, leads, and brand visibility indefinitely.</p>
        </section>
      </div>
    )
  }
];

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <SimpleSEO 
        title="Case Studies & Results | Studios by Dave"
        description="See how our web design and digital marketing services deliver real-world ROI, traffic growth, and business improvements for our clients."
        url="https://www.studiosbydave.com/services/case-studies"
      />
      <Navigation />

      <main className="min-h-screen bg-luxury-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
            <div className="section-eyebrow mb-4">✦ Case Studies</div>
            <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl text-luxury-text-primary mb-6">
              Real Results for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Real Businesses</span>
            </h1>
            <p className="font-body text-lg text-luxury-text-secondary leading-relaxed">
              We focus on one thing: helping local businesses grow online. Explore our case studies to see exactly how our mix of web design, SEO, and strategic marketing translates into tangible ROI for our clients.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="group relative bg-luxury-surface/40 backdrop-blur-sm border border-white/6 rounded-2xl p-8 hover:bg-luxury-surface hover:border-luxury-royal-blue/30 transition-all duration-500 cursor-pointer flex flex-col h-full animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-royal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 text-luxury-lime group-hover:scale-110 group-hover:border-luxury-lime/30 transition-all duration-500">
                    {study.icon}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-section text-xs font-semibold uppercase tracking-wider text-luxury-royal-blue">
                      {study.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-luxury-text-secondary">{study.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-luxury-text-primary mb-4 group-hover:text-luxury-royal-blue transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-luxury-text-secondary font-body leading-relaxed mb-8 flex-1">
                    {study.summary}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center text-sm font-semibold uppercase tracking-wider text-white group-hover:text-luxury-lime transition-colors">
                    Read Full Case Study
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-32 max-w-4xl mx-auto rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-royal-blue/40 to-luxury-purple/40 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay" />
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="display-heading text-3xl md:text-4xl text-white mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-white/80 font-body text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how our web design and digital marketing services can help your business attract more customers and dominate your local market.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-semibold text-sm uppercase tracking-wider">
                    Get a Free Review <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-semibold text-sm uppercase tracking-wider">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* Case Study Modal */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={(open) => !open && setSelectedCaseStudy(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] bg-luxury-bg border-white/10 p-0 overflow-hidden flex flex-col">
          <DialogHeader className="p-6 pb-2 shrink-0 relative bg-luxury-surface/50 border-b border-white/5">
            <div className="pr-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-section text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-luxury-royal-blue px-2 py-1 rounded bg-luxury-royal-blue/10 border border-luxury-royal-blue/20">
                  {selectedCaseStudy?.category}
                </span>
                <span className="text-xs text-luxury-text-secondary">{selectedCaseStudy?.client}</span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-luxury-text-primary leading-tight">
                {selectedCaseStudy?.title}
              </DialogTitle>
            </div>
            
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute right-4 top-4 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-luxury-surface transition-all duration-200"
            >
              <X size={20} />
            </button>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto w-full">
            <div className="p-6 md:p-10 lg:px-16 max-w-3xl mx-auto pb-20">
              {selectedCaseStudy?.content}
              
              <div className="mt-16 pt-10 border-t border-white/10 text-center">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Want similar results for your business?</h4>
                <Link to="/contact" onClick={() => setSelectedCaseStudy(null)}>
                  <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold text-sm uppercase tracking-wider px-8 py-6 rounded-full shadow-[0_0_20px_rgba(157,255,0,0.3)]">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudies;
