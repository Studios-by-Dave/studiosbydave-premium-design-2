import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Search, FileText, Link2, BarChart3, MapPin, Image } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema } from "@/data/structuredData";

const SEOPage = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "SEO Services", url: "https://www.studiosbydave.com/seo" }
  ]);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services for Contractors",
    "description": "Complete SEO services including on-page, off-page, local SEO, technical SEO, and image optimization for contractor businesses.",
    "provider": {
      "@type": "Organization",
      "name": "Studios by Dave"
    },
    "serviceType": "Search Engine Optimization",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive SEO services covering all aspects of search engine optimization including technical SEO, content optimization, and local search."
    }
  };

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="SEO Services for Contractors - Complete Search Engine Optimization"
        description="Professional SEO services for contractors including on-page SEO, local SEO, technical SEO, and content optimization. Rank higher in search results and get more customers online."
        keywords="SEO services contractors, contractor SEO, on-page SEO, local SEO, technical SEO, search engine optimization, image SEO, video SEO, off-page SEO"
        structuredData={[breadcrumbs, seoSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center">
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Search Engine Optimization</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-6xl mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Complete{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Comprehensive search engine optimization services that cover every aspect of SEO. 
            From technical optimization to content strategy, we help contractors dominate search results.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Start Ranking Higher</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Components with Visual */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-eyebrow mb-4">✦ Our Approach</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-8">
              Complete SEO Strategy
            </h2>
            <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto">
              Our comprehensive approach covers all aspects of SEO to ensure maximum visibility and results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <img 
                src="/lovable-uploads/9df74cdb-0377-4984-bf94-7c061782a05a.png" 
                alt="SEO components diagram showing on-page SEO, local SEO, technical SEO, image SEO, video SEO, and off-page SEO interconnected" 
                className="w-full h-auto rounded-2xl luxury-card"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  icon: FileText,
                  title: "On-Page SEO",
                  description: "Content optimization, keywords, meta data, internal linking, and URL structure"
                },
                {
                  icon: MapPin,
                  title: "Local SEO",
                  description: "Google My Business, local listings, reviews, and location-based optimization"
                },
                {
                  icon: Search,
                  title: "Technical SEO",
                  description: "Site speed, mobile optimization, indexation, accessibility, and schema markup"
                },
                {
                  icon: Image,
                  title: "Image & Video SEO",
                  description: "Image optimization, alt tags, video SEO, and multimedia content strategy"
                },
                {
                  icon: Link2,
                  title: "Off-Page SEO",
                  description: "Link building, guest posting, social signals, and domain authority building"
                },
                {
                  icon: BarChart3,
                  title: "SEO Analytics",
                  description: "Performance tracking, keyword monitoring, and detailed SEO reporting"
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="luxury-card rounded-xl p-6 relative overflow-hidden group hover:border-luxury-royal-blue/50 transition-all">
                    {/* Green Check Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <CheckCircle size={24} className="text-luxury-lime drop-shadow-lg" />
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-lime/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-luxury-lime/20 transition-colors">
                        <IconComponent size={24} className="text-luxury-lime" />
                      </div>
                      <div>
                        <h3 className="display-heading text-luxury-text-primary text-xl mb-2 group-hover:text-luxury-lime transition-colors">{service.title}</h3>
                        <p className="font-body text-luxury-text-secondary">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Upgrade Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxury-card rounded-2xl p-8 md:p-12 border border-white/10">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-luxury-lime/10 border border-luxury-lime/30 rounded-full px-4 py-2 w-fit mb-6">
              <div className="w-2 h-2 bg-luxury-lime rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-luxury-lime uppercase tracking-wider">
                Exclusive Add-On · SEO Upgrade by Studios by Dave
              </span>
            </div>

            {/* Headline */}
            <h2 className="display-heading text-luxury-text-primary text-4xl md:text-5xl mb-6">
              We Don't Just Deploy Your Site.<br />
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                We Make Sure Google Can Actually Read It.
              </span>
            </h2>

            {/* Intro */}
            <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mb-8">
              When a developer deploys your website, they're doing exactly that — deploying it. Your site goes live, it looks great, but 
              <strong className="text-luxury-text-primary">Google may not be able to read a single word of it.</strong> That's because modern websites built on JavaScript frameworks 
              deliver an empty shell to search engine crawlers — your content only appears after code executes in a browser, which Google's bot 
              often never waits for.
            </p>

            {/* Upgrade Callout */}
            <div className="bg-luxury-royal-blue/5 border border-luxury-royal-blue/20 border-l-4 border-l-luxury-royal-blue rounded-lg p-6 mb-8">
              <p className="font-body text-luxury-text-secondary text-lg">
                <strong className="text-luxury-text-primary">The Studios by Dave SEO Upgrade</strong> solves this at the foundation level. 
                We run your entire website through a professional <strong className="text-luxury-text-primary">pre-rendering and static generation pipeline</strong> — 
                converting every page into fully-resolved, content-rich HTML that Google can crawl, index, and rank the moment it visits your site. 
                This isn't a setting you flip on. It's a deliberate, technical process we perform for clients who are serious about being found online.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-luxury-royal-blue/20 border border-luxury-royal-blue/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-luxury-royal-blue">1</span>
                </div>
                <p className="font-body text-luxury-text-secondary text-lg">
                  <strong className="text-luxury-text-primary">Audit your site's crawlability.</strong> We analyze how Google currently sees your pages — 
                  identifying which routes return empty content, missing metadata, or unresolved JavaScript that blocks indexing.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-luxury-royal-blue/20 border border-luxury-royal-blue/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-luxury-royal-blue">2</span>
                </div>
                <p className="font-body text-luxury-text-secondary text-lg">
                  <strong className="text-luxury-text-primary">Run the pre-rendering pipeline.</strong> Every page — services, locations, blog posts, landing pages — 
                  is processed through our build system and rendered into static HTML, complete with titles, descriptions, headings, and structured content.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-luxury-royal-blue/20 border border-luxury-royal-blue/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-luxury-royal-blue">3</span>
                </div>
                <p className="font-body text-luxury-text-secondary text-lg">
                  <strong className="text-luxury-text-primary">Submit to Google and verify.</strong> We submit your updated sitemap to Google Search Console and 
                  monitor the indexing rollout — so you can watch your pages go from invisible to ranked in real time.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-luxury-royal-blue/30 to-transparent mb-12"></div>

            {/* Code Comparison */}
            <div className="mb-12">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-6">
                What Google actually sees — without vs. with the SEO Upgrade
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Without Upgrade */}
                <div>
                  <div className="bg-luxury-bg rounded-lg overflow-hidden border border-white/10">
                    <div className="flex items-center gap-2 px-4 py-3 bg-luxury-surface border-b border-white/6">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-500/20 text-red-400 rounded">Without Upgrade</span>
                    </div>
                    <div className="p-4 font-mono text-sm bg-luxury-bg text-luxury-text-secondary">
                      <div className="text-red-400/60 italic mb-2">&lt;!-- Googlebot sees this --&gt;</div>
                      <div>&lt;body&gt;</div>
                      <div className="text-red-400/60">  &lt;div id="root"&gt;&lt;/div&gt;</div>
                      <div className="text-red-400/60 italic text-xs">
                        &lt;!-- empty — content loads<br/>
                        only via JavaScript --&gt;
                      </div>
                      <div>  &lt;script src="/bundle.js"&gt;&lt;/script&gt;</div>
                      <div>&lt;/body&gt;</div>
                      <div className="text-red-400/60 italic text-xs mt-2">
                        &lt;!-- No title. No headings.<br/>
                        No readable content.<br/>
                        Google indexes nothing. --&gt;
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-luxury-text-secondary text-center mt-2 italic">
                    Standard JS deploy — crawler finds an empty shell
                  </p>
                </div>

                {/* With Upgrade */}
                <div>
                  <div className="bg-luxury-bg rounded-lg overflow-hidden border border-white/10">
                    <div className="flex items-center gap-2 px-4 py-3 bg-luxury-surface border-b border-white/6">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-luxury-royal-blue/20 text-luxury-royal-blue rounded">With SEO Upgrade</span>
                    </div>
                    <div className="p-4 font-mono text-sm bg-luxury-bg text-luxury-text-secondary">
                      <div className="text-luxury-royal-blue/60 bg-luxury-royal-blue/10 px-2 py-1 rounded border-l-2 border-luxury-royal-blue">
                        &lt;title&gt;Roofing Shelby NC | ABC Roofing&lt;/title&gt;
                      </div>
                      <div className="text-luxury-royal-blue/60 bg-luxury-royal-blue/10 px-2 py-1 rounded border-l-2 border-luxury-royal-blue">
                        &lt;meta name="description"<br/>
                        content="Top-rated roofer in Shelby..."/&gt;
                      </div>
                      <div>&lt;body&gt;</div>
                      <div className="text-luxury-royal-blue/60 bg-luxury-royal-blue/10 px-2 py-1 rounded border-l-2 border-luxury-royal-blue">
                        &lt;h1&gt;Shelby's Most Trusted Roofer&lt;/h1&gt;
                      </div>
                      <div className="text-luxury-royal-blue/60 bg-luxury-royal-blue/10 px-2 py-1 rounded border-l-2 border-luxury-royal-blue">
                        &lt;p&gt;Serving Shelby, Gastonia &amp; Kings Mtn&lt;/p&gt;
                      </div>
                      <div className="text-luxury-royal-blue/60 bg-luxury-royal-blue/10 px-2 py-1 rounded border-l-2 border-luxury-royal-blue">
                        &lt;section&gt;Free Estimates · Licensed &amp; Insured&lt;/section&gt;
                      </div>
                      <div>&lt;/body&gt;</div>
                      <div className="text-luxury-royal-blue/60 italic text-xs mt-2">
                        &lt;!-- Full HTML on first load.<br/>
                        Google reads every word. --&gt;
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-luxury-text-secondary text-center mt-2 italic">
                    After SEO Upgrade — every word is indexed instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Google Search Console Comparison */}
            <div className="mb-12">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-6">
                Google Search Console — indexing before vs. after the SEO Upgrade
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div>
                  <div className="bg-luxury-bg rounded-lg overflow-hidden border border-white/10">
                    <div className="flex items-center gap-3 px-4 py-3 bg-luxury-surface border-b border-white/6">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <div className="text-xs text-luxury-text-secondary">Search Console — Coverage</div>
                        <div className="text-xs text-luxury-text-secondary/60">yourbusiness.com</div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-500/20 text-red-400 rounded">Before</span>
                    </div>
                    <div className="p-6 bg-luxury-surface/50">
                      <div className="flex flex-col items-center justify-center h-32 gap-2 text-center">
                        <div className="text-2xl opacity-40">📭</div>
                        <p className="text-xs text-luxury-text-secondary/60">
                          Only 2 pages indexed.<br/>
                          Homepage + Contact only.<br/>
                          All other pages invisible to Google.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/6">
                        <span className="text-xs text-luxury-text-secondary">Pages indexed by Google</span>
                        <span className="text-lg font-semibold text-red-400">2</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-luxury-text-secondary text-center mt-2 italic">
                    Without the SEO Upgrade — nearly invisible
                  </p>
                </div>

                {/* After */}
                <div>
                  <div className="bg-luxury-bg rounded-lg overflow-hidden border border-white/10">
                    <div className="flex items-center gap-3 px-4 py-3 bg-luxury-surface border-b border-white/6">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <div className="text-xs text-luxury-text-secondary">Search Console — Coverage</div>
                        <div className="text-xs text-luxury-text-secondary/60">yourbusiness.com</div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-luxury-royal-blue/20 text-luxury-royal-blue rounded">After</span>
                    </div>
                    <div className="p-4 bg-luxury-surface/50">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-luxury-text-secondary w-24 truncate">/services/roofing</span>
                          <div className="flex-1 h-2 bg-luxury-surface rounded-full overflow-hidden">
                            <div className="h-full bg-luxury-royal-blue rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-xs text-luxury-text-secondary">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-luxury-text-secondary w-24 truncate">/services/siding</span>
                          <div className="flex-1 h-2 bg-luxury-surface rounded-full overflow-hidden">
                            <div className="h-full bg-luxury-royal-blue/80 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-xs text-luxury-text-secondary">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-luxury-text-secondary w-24 truncate">/locations/shelby</span>
                          <div className="flex-1 h-2 bg-luxury-surface rounded-full overflow-hidden">
                            <div className="h-full bg-luxury-royal-blue/70 rounded-full" style={{width: '78%'}}></div>
                          </div>
                          <span className="text-xs text-luxury-text-secondary">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-luxury-text-secondary w-24 truncate">/locations/gastonia</span>
                          <div className="flex-1 h-2 bg-luxury-surface rounded-full overflow-hidden">
                            <div className="h-full bg-luxury-royal-blue/60 rounded-full" style={{width: '72%'}}></div>
                          </div>
                          <span className="text-xs text-luxury-text-secondary">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-luxury-text-secondary w-24 truncate">/about + /contact</span>
                          <div className="flex-1 h-2 bg-luxury-surface rounded-full overflow-hidden">
                            <div className="h-full bg-luxury-royal-blue/50 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <span className="text-xs text-luxury-text-secondary">✓</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/6">
                        <span className="text-xs text-luxury-text-secondary">Pages indexed by Google</span>
                        <span className="text-lg font-semibold text-luxury-royal-blue">18</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-luxury-text-secondary text-center mt-2 italic">
                    After SEO Upgrade — every page on Google's radar
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-luxury-royal-blue/10 to-luxury-purple/5 border border-luxury-royal-blue/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-body text-luxury-text-secondary">
                  <strong className="text-luxury-text-primary">Ready to stop being invisible on Google?</strong><br />
                  The SEO Upgrade is available as a standalone service or bundled with any new website build. Let's talk about what it would look like for your business.
                </p>
              </div>
              <Link to="/contact#get-in-touch">
                <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                  Inquire About the SEO Upgrade
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-4">✦ Results</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-8">
                SEO Results That Drive Business Growth
              </h2>
              <div className="space-y-6">
                {[
                  "Average 400% increase in organic search traffic within 6 months",
                  "Rank on page 1 for high-converting contractor keywords",
                  "Improved local search visibility and Google My Business performance",
                  "Higher quality leads from targeted SEO strategies",
                  "Measurable ROI with detailed analytics and reporting",
                  "Long-term sustainable growth in search rankings"
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-6 h-6 flex-shrink-0" />
                    <p className="font-body text-luxury-text-secondary text-lg">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-luxury-purple to-luxury-royal-blue rounded-2xl p-8 text-center luxury-card">
              <h3 className="display-heading text-white text-2xl mb-4">Ready to Dominate Search Results?</h3>
              <p className="text-white/90 mb-6 font-body">
                Let our SEO experts help you rank higher and get more customers from search engines.
              </p>
              <Link to="/contact#get-in-touch">
                <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                  Get SEO Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow mb-4">✦ Solutions</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-16">
            Comprehensive SEO Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical SEO Foundation",
                features: ["Site speed optimization", "Mobile optimization", "Schema markup", "Crawl error fixes"]
              },
              {
                title: "Content & On-Page SEO",
                features: ["Keyword research & strategy", "Content optimization", "Meta tag optimization", "Internal linking"]
              },
              {
                title: "Local & Off-Page SEO",
                features: ["Local business optimization", "Link building campaigns", "Citation building", "Review management"]
              }
            ].map((package_item, index) => (
              <div key={index} className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
                <div className="mb-6">
                  <h3 className="display-heading text-luxury-text-primary text-2xl mb-2">{package_item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {package_item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                      <span className="font-body text-luxury-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Resources Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Complete Your Strategy</div>
            <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-4">Maximize Your Online Impact</h2>
            <p className="font-body text-luxury-text-secondary text-lg max-w-2xl mx-auto">
              SEO works best with a complete digital strategy. Explore our complementary services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Web Design Service */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Web Design</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                SEO-optimized websites built from the ground up to rank well and convert visitors into customers.
              </p>
              <Link to="/services/web-design" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Get SEO-Friendly Website
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Google Optimization */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Google Optimization</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Complete Google Business Profile optimization to dominate local search results.
              </p>
              <Link to="/services/google-optimization" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Optimize Google Presence
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Branding Service */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Professional Branding</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Strong branding that complements your SEO efforts and builds trust with customers.
              </p>
              <Link to="/services/branding" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Build Your Brand
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Blog Articles */}
          <div className="bg-luxury-surface p-8 rounded-xl border border-white/6">
            <h3 className="display-heading text-luxury-text-primary text-2xl mb-6 text-center">SEO Learning Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-3">SEO Fundamentals</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/local-seo-essentials-2026" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Local SEO Essentials for Shelby Businesses in 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/website-mistakes-costing-customers" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      5 Common Website Mistakes Costing Local Businesses Customers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-3">Business Strategy</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/does-your-business-need-a-website-2026" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Does Your Business Really Need a Website in 2026?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/why-choose-studios-by-dave" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Why Choose Studios by Dave Over Local Competition?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles & Services */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Learn More</div>
            <h3 className="display-heading text-luxury-text-primary text-2xl md:text-3xl mb-4">SEO Resources</h3>
            <p className="font-body text-luxury-text-secondary">Learn more about search engine optimization and digital marketing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Articles */}
            <div className="space-y-4">
              <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-luxury-lime rounded-full"></span>
                SEO Guides
              </h4>
              <div className="space-y-3">
                <Link to="/blog/local-seo-essentials-2026" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-bg/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">Local SEO Essentials 2026</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Shelby SEO strategies for businesses</p>
                </Link>
                <Link to="/blog/website-mistakes-costing-customers" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-bg/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">5 Common Website Mistakes</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">SEO errors that hurt rankings</p>
                </Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="space-y-4">
              <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-luxury-royal-blue rounded-full"></span>
                Related Services
              </h4>
              <div className="space-y-3">
                <Link to="/services/google-optimization" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-bg/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">Google Optimization</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Local search dominance</p>
                </Link>
                <Link to="/services/web-design" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-bg/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">SEO-Friendly Web Design</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Websites built to rank</p>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-luxury-lime rounded-full"></span>
                Get Started
              </h4>
              <div className="space-y-3">
                <Link to="/contact#get-in-touch" className="block p-4 rounded-lg border border-luxury-royal-blue/20 hover:bg-luxury-royal-blue/10 transition-colors bg-luxury-bg/50">
                  <h5 className="font-body text-luxury-royal-blue font-medium">Free SEO Audit</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Analyze your website's SEO</p>
                </Link>
                <Link to="/services/promos" className="block p-4 rounded-lg border border-luxury-lime/20 hover:bg-luxury-lime/10 transition-colors bg-luxury-bg/50">
                  <h5 className="font-body text-luxury-lime font-medium">SEO Special Offers</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Current promotions available</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOPage;