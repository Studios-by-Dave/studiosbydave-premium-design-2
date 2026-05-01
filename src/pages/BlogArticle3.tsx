import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Zap, Phone, Smartphone, MapPin, Palette } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogArticle3 = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <SimpleSEO
        title="5 Common Website Mistakes Costing Local Businesses Customers | Studios by Dave Blog"
        description="Discover the top website mistakes hurting local businesses and learn how to fix them. From slow loading speeds to poor mobile design, get expert tips from Studios by Dave."
        keywords="website mistakes, local business website, mobile responsive, local SEO, website speed, Shelby NC web design"
        canonical="https://www.studiosbydave.com/blog/website-mistakes-costing-customers"
        datePublished="2026-01-29"
        dateModified="2026-01-29"
      />
      
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="text-center mb-12 border-b-4 border-double border-neutral-900 pb-8">
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-serif mb-4">
              <span className="text-trophy-gold">Vol #1 Article #3</span>
              <span className="w-1 h-1 bg-neutral-400 rounded-full" />
              <span>January 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(259_84%_30%)] font-serif tracking-tight mb-6 leading-tight">
              5 Common Website Mistakes Costing Local Businesses Customers
            </h1>
            <p className="text-xl text-neutral-600 font-serif italic leading-relaxed">
              And How to Fix Them Before It's Too Late
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-neutral max-w-none font-serif">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Your website is often the first impression a potential customer has of your business. But what happens when that first impression is a bad one? Every day, local businesses lose customers—not because of poor service or high prices—but because of easily fixable website mistakes.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                After working with dozens of local businesses in Shelby and Cleveland County, we've identified the five most common website problems that drive customers away—and the good news is, every single one of them can be fixed.
              </p>
            </section>

            {/* Website Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">The 5 Costly Website Mistakes</h2>
              
              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">1. Slow Loading Speeds</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In 2026, patience is in short supply. Studies show that 53% of mobile users abandon a site that takes longer than 3 seconds to load. If your website is sluggish, customers aren't waiting—they're clicking over to your competitor.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        <strong>The Fix:</strong> Optimize images, use modern hosting, and eliminate bloated code. A fast website isn't a luxury—it's a necessity.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">2. Missing Contact Information</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You'd be surprised how many websites make it nearly impossible to find a phone number or email address. If a customer has to hunt for your contact info, they'll give up and call someone else.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        <strong>The Fix:</strong> Put your phone number and email in the header. Add a clear "Contact Us" button that's visible on every page.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">3. Not Mobile-Responsive</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Over 60% of web traffic now comes from mobile devices. If your website looks broken, cramped, or impossible to navigate on a phone, you're losing the majority of your potential customers before they even see what you offer.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        <strong>The Fix:</strong> Your website must look and function beautifully on screens of all sizes. Period.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">4. Ignoring Local SEO</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If your website doesn't mention your city, service areas, or local keywords, Google doesn't know where to show your business. And if you haven't claimed or optimized your Google Business Profile, you're invisible on Maps.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        <strong>The Fix:</strong> Add location-specific content, claim your Google Business Profile, and build local citations. Show up where your customers are searching.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Palette className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">5. Outdated Design</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Design trends evolve, and customers notice. An outdated website with clunky layouts, tiny fonts, or early-2000s clip art signals that your business might be behind the times—even if your services are top-notch.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        <strong>The Fix:</strong> A modern, clean design builds trust instantly. It tells customers you care about quality in everything you do.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* By The Numbers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">By The Numbers</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">53%</div>
                    <p className="text-muted-foreground">of users leave slow sites</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="text-center p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">60%+</div>
                    <p className="text-muted-foreground">of traffic is mobile</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="text-center p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">3 sec</div>
                    <p className="text-muted-foreground">max acceptable load time</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Quick Website Checklist</h2>
              
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">Site loads in under 3 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">Phone/email visible on all pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">Works perfectly on mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">Google Business Profile claimed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">Design updated in last 3 years</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* The Bottom Line */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">The Bottom Line</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <p className="text-red-800 leading-relaxed mb-4">
                  These mistakes aren't just inconveniences—they're actively costing you money. Every slow page load, every hidden phone number, every pinch-to-zoom moment on mobile is a customer walking out the door.
                </p>
                <p className="text-red-800 leading-relaxed">
                  The good news? These problems are all solvable. And fixing them doesn't just stop the bleeding—it turns your website into a 24/7 sales tool that works as hard as you do.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">FREE Website Audit</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Not sure if your website is making these mistakes? Let us take a look—no strings attached.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#get-in-touch">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Your Audit
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

export default BlogArticle3;
