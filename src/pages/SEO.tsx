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
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            {/* Pixie Dust Effect */}
            <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-dust-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 4 === 0 
                      ? 'hsl(var(--trophy-gold))' 
                      : i % 4 === 1 
                      ? 'hsl(var(--accent) / 0.6)'
                      : 'hsl(0, 0%, 30%)',
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    filter: 'blur(0.5px)',
                    boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                  }}
                />
              ))}
            </div>
            <h1 className="text-5xl lg:text-5xl font-bold text-white mb-6">
              Complete{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                SEO Services
              </span>
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive search engine optimization services that cover every aspect of SEO. 
            From technical optimization to content strategy, we help contractors dominate search results.
          </p>
          <Link to="/contact#get-in-touch">
            <Button variant="hero" size="lg">
              Start Ranking Higher
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Components with Visual */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Complete SEO Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach covers all aspects of SEO to ensure maximum visibility and results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <img 
                src="/lovable-uploads/9df74cdb-0377-4984-bf94-7c061782a05a.png" 
                alt="SEO components diagram showing on-page SEO, local SEO, technical SEO, image SEO, video SEO, and off-page SEO interconnected" 
                className="w-full h-auto rounded-2xl shadow-elegant"
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
              ].map((service, index) => (
                <Card key={index} className="border border-border/50 shadow-card hover:border-accent/30 transition-all duration-300 relative overflow-hidden group">
                  {/* Green Check Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <CheckCircle size={24} className="text-green-500 drop-shadow-lg" />
                  </div>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-gradient-primary-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Upgrade Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 w-fit mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Exclusive Add-On · SEO Upgrade by Studios by Dave
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Don't Just Deploy Your Site.<br />
              <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                We Make Sure Google Can Actually Read It.
              </span>
            </h2>

            {/* Intro */}
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              When a developer deploys your website, they're doing exactly that — deploying it. Your site goes live, it looks great, but 
              <strong>Google may not be able to read a single word of it.</strong> That's because modern websites built on JavaScript frameworks 
              deliver an empty shell to search engine crawlers — your content only appears after code executes in a browser, which Google's bot 
              often never waits for.
            </p>

            {/* Upgrade Callout */}
            <div className="bg-primary/5 border border-primary/20 border-l-4 border-l-primary rounded-lg p-6 mb-8">
              <p className="text-muted-foreground">
                <strong className="text-foreground">The Studios by Dave SEO Upgrade</strong> solves this at the foundation level. 
                We run your entire website through a professional <strong className="text-foreground">pre-rendering and static generation pipeline</strong> — 
                converting every page into fully-resolved, content-rich HTML that Google can crawl, index, and rank the moment it visits your site. 
                This isn't a setting you flip on. It's a deliberate, technical process we perform for clients who are serious about being found online.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-12">
              <div className="flex gap-4">
                <div className="w-7 h-7 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-semibold text-primary">1</span>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Audit your site's crawlability.</strong> We analyze how Google currently sees your pages — 
                  identifying which routes return empty content, missing metadata, or unresolved JavaScript that blocks indexing.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-7 h-7 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-semibold text-primary">2</span>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Run the pre-rendering pipeline.</strong> Every page — services, locations, blog posts, landing pages — 
                  is processed through our build system and rendered into static HTML, complete with titles, descriptions, headings, and structured content.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-7 h-7 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-semibold text-primary">3</span>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Submit to Google and verify.</strong> We submit your updated sitemap to Google Search Console and 
                  monitor the indexing rollout — so you can watch your pages go from invisible to ranked in real time.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12"></div>

            {/* Code Comparison */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What Google actually sees — without vs. with the SEO Upgrade
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Without Upgrade */}
                <div>
                  <div className="bg-muted rounded-lg overflow-hidden border border-border/50">
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border/50">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-500/20 text-red-400 rounded">Without Upgrade</span>
                    </div>
                    <div className="p-4 font-mono text-sm bg-dark text-muted-foreground">
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
                  <p className="text-xs text-muted-foreground text-center mt-2 italic">
                    Standard JS deploy — crawler finds an empty shell
                  </p>
                </div>

                {/* With Upgrade */}
                <div>
                  <div className="bg-muted rounded-lg overflow-hidden border border-border/50">
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border/50">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded">With SEO Upgrade</span>
                    </div>
                    <div className="p-4 font-mono text-sm bg-dark text-muted-foreground">
                      <div className="text-primary/60 bg-primary/10 px-2 py-1 rounded border-l-2 border-primary">
                        &lt;title&gt;Roofing Shelby NC | ABC Roofing&lt;/title&gt;
                      </div>
                      <div className="text-primary/60 bg-primary/10 px-2 py-1 rounded border-l-2 border-primary">
                        &lt;meta name="description"<br/>
                        content="Top-rated roofer in Shelby..."/&gt;
                      </div>
                      <div>&lt;body&gt;</div>
                      <div className="text-primary/60 bg-primary/10 px-2 py-1 rounded border-l-2 border-primary">
                        &lt;h1&gt;Shelby's Most Trusted Roofer&lt;/h1&gt;
                      </div>
                      <div className="text-primary/60 bg-primary/10 px-2 py-1 rounded border-l-2 border-primary">
                        &lt;p&gt;Serving Shelby, Gastonia &amp; Kings Mtn&lt;/p&gt;
                      </div>
                      <div className="text-primary/60 bg-primary/10 px-2 py-1 rounded border-l-2 border-primary">
                        &lt;section&gt;Free Estimates · Licensed &amp; Insured&lt;/section&gt;
                      </div>
                      <div>&lt;/body&gt;</div>
                      <div className="text-primary/60 italic text-xs mt-2">
                        &lt;!-- Full HTML on first load.<br/>
                        Google reads every word. --&gt;
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2 italic">
                    After SEO Upgrade — every word is indexed instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Google Search Console Comparison */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Google Search Console — indexing before vs. after the SEO Upgrade
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <div>
                  <div className="bg-muted rounded-lg overflow-hidden border border-border/50">
                    <div className="flex items-center gap-3 px-4 py-3 bg-muted/80 border-b border-border/50">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Search Console — Coverage</div>
                        <div className="text-xs text-muted-foreground/60">yourbusiness.com</div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-500/20 text-red-400 rounded">Before</span>
                    </div>
                    <div className="p-6 bg-dark/50">
                      <div className="flex flex-col items-center justify-center h-32 gap-2 text-center">
                        <div className="text-2xl opacity-40">📭</div>
                        <p className="text-xs text-muted-foreground/60">
                          Only 2 pages indexed.<br/>
                          Homepage + Contact only.<br/>
                          All other pages invisible to Google.
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/30">
                        <span className="text-xs text-muted-foreground">Pages indexed by Google</span>
                        <span className="text-lg font-semibold text-red-400">2</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2 italic">
                    Without the SEO Upgrade — nearly invisible
                  </p>
                </div>

                {/* After */}
                <div>
                  <div className="bg-muted rounded-lg overflow-hidden border border-border/50">
                    <div className="flex items-center gap-3 px-4 py-3 bg-muted/80 border-b border-border/50">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Search Console — Coverage</div>
                        <div className="text-xs text-muted-foreground/60">yourbusiness.com</div>
                      </div>
                      <span className="ml-auto text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded">After</span>
                    </div>
                    <div className="p-4 bg-dark/50">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-24 truncate">/services/roofing</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-24 truncate">/services/siding</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary/80 rounded-full" style={{width: '85%'}}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-24 truncate">/locations/shelby</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary/70 rounded-full" style={{width: '78%'}}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-24 truncate">/locations/gastonia</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary/60 rounded-full" style={{width: '72%'}}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">✓</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-24 truncate">/about + /contact</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary/50 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">✓</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/30">
                        <span className="text-xs text-muted-foreground">Pages indexed by Google</span>
                        <span className="text-lg font-semibold text-primary">18</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2 italic">
                    After SEO Upgrade — every page on Google's radar
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Ready to stop being invisible on Google?</strong><br />
                  The SEO Upgrade is available as a standalone service or bundled with any new website build. Let's talk about what it would look like for your business.
                </p>
              </div>
              <Link to="/contact#get-in-touch">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  Inquire About the SEO Upgrade
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
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
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Dominate Search Results?</h3>
              <p className="text-white/90 mb-6">
                Let our SEO experts help you rank higher and get more customers from search engines.
              </p>
              <Link to="/contact#get-in-touch">
                <Button variant="secondary" size="lg">
                  Get SEO Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
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
              <Card key={index} className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{package_item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {package_item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services & Resources Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Maximize Your Online Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SEO works best with a complete digital strategy. Explore our complementary services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Web Design Service */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Web Design</h3>
              <p className="text-muted-foreground mb-4">
                SEO-optimized websites built from the ground up to rank well and convert visitors into customers.
              </p>
              <Link to="/services/web-design" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Get SEO-Friendly Website
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Google Optimization */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Google Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Complete Google Business Profile optimization to dominate local search results.
              </p>
              <Link to="/services/google-optimization" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Optimize Google Presence
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Branding Service */}
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Professional Branding</h3>
              <p className="text-muted-foreground mb-4">
                Strong branding that complements your SEO efforts and builds trust with customers.
              </p>
              <Link to="/services/branding" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                Build Your Brand
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Blog Articles */}
          <div className="bg-gradient-subtle p-8 rounded-xl border border-border/30">
            <h3 className="text-2xl font-bold mb-6 text-center">SEO Learning Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">SEO Fundamentals</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/local-seo-essentials-2026" className="text-primary hover:text-primary/80 underline">
                      Local SEO Essentials for Shelby Businesses in 2026
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/website-mistakes-costing-customers" className="text-primary hover:text-primary/80 underline">
                      5 Common Website Mistakes Costing Local Businesses Customers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Business Strategy</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/does-your-business-need-a-website-2026" className="text-primary hover:text-primary/80 underline">
                      Does Your Business Really Need a Website in 2026?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/why-choose-studios-by-dave" className="text-primary hover:text-primary/80 underline">
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">SEO Resources</h3>
            <p className="text-muted-foreground">Learn more about search engine optimization and digital marketing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Articles */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                SEO Guides
              </h4>
              <div className="space-y-3">
                <Link to="/blog/local-seo-essentials-2026" className="block p-3 rounded-lg border border-border/30 hover:border-accent/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-accent transition-colors">Local SEO Essentials 2026</h5>
                  <p className="text-sm text-muted-foreground mt-1">Shelby SEO strategies for businesses</p>
                </Link>
                <Link to="/blog/website-mistakes-costing-customers" className="block p-3 rounded-lg border border-border/30 hover:border-accent/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-accent transition-colors">5 Common Website Mistakes</h5>
                  <p className="text-sm text-muted-foreground mt-1">SEO errors that hurt rankings</p>
                </Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Related Services
              </h4>
              <div className="space-y-3">
                <Link to="/services/google-optimization" className="block p-3 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-primary transition-colors">Google Optimization</h5>
                  <p className="text-sm text-muted-foreground mt-1">Local search dominance</p>
                </Link>
                <Link to="/services/web-design" className="block p-3 rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                  <h5 className="font-medium text-foreground hover:text-primary transition-colors">SEO-Friendly Web Design</h5>
                  <p className="text-sm text-muted-foreground mt-1">Websites built to rank</p>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-trophy-gold rounded-full"></span>
                Get Started
              </h4>
              <div className="space-y-3">
                <Link to="/contact#get-in-touch" className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20">
                  <h5 className="font-medium text-primary">Free SEO Audit</h5>
                  <p className="text-sm text-muted-foreground mt-1">Analyze your website's SEO</p>
                </Link>
                <Link to="/services/promos" className="block p-3 rounded-lg bg-trophy-gold/10 hover:bg-trophy-gold/20 transition-colors border border-trophy-gold/20">
                  <h5 className="font-medium text-foreground">SEO Special Offers</h5>
                  <p className="text-sm text-muted-foreground mt-1">Current promotions available</p>
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