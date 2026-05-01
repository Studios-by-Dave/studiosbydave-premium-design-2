import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Users, Award, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, articleSchema } from "@/data/structuredData";

const BlogArticle1 = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Blog", url: "https://www.studiosbydave.com/blog" },
    { name: "Why Choose Studios by Dave", url: "https://www.studiosbydave.com/blog/why-choose-studios-by-dave" }
  ]);

  const articleStructuredData = articleSchema(
    "Why Choose Studios by Dave Over the Local Competition?",
    "A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC. Learn what makes Studios by Dave different from other local options.",
    "https://www.studiosbydave.com/blog/why-choose-studios-by-dave",
    "2025-01-15",
    "2025-01-15",
    "Studios by Dave"
  );

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <SimpleSEO
        title="Why Choose Studios by Dave Over the Local Competition? | Studios by Dave Blog"
        description="A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC. Learn what makes Studios by Dave different from other local options."
        keywords="Shelby NC web design, local web designer, branding Shelby NC, SEO Cleveland County, Studios by Dave"
        canonical="https://www.studiosbydave.com/blog/why-choose-studios-by-dave"
        structuredData={[breadcrumbs, articleStructuredData]}
      />
      
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="text-center mb-12 border-b-4 border-double border-neutral-900 pb-8">
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-serif mb-4">
              <span className="text-primary">Vol #1 Article #1</span>
              <span className="w-1 h-1 bg-neutral-400 rounded-full" />
              <span>January 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(259_84%_30%)] font-serif tracking-tight mb-6 leading-tight">
              Why Choose Studios by Dave Over the Local Competition?
            </h1>
            <p className="text-xl text-neutral-600 font-serif italic leading-relaxed">
              A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-neutral max-w-none font-serif">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Building Strong Local Businesses Starts with a Strong Online Presence. In today's digital-first world, your website and online presence are often the first impression customers have of your business.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                For local businesses in Shelby, North Carolina and the surrounding areas, choosing the right digital partner can make the difference between being found — or being overlooked.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                At Studios by Dave, we don't just build websites. We help local businesses stand out, compete, and grow in an increasingly crowded online marketplace.
              </p>
            </section>

            {/* What Makes Studios by Dave Different */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">What Makes Studios by Dave Different?</h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Here's what sets us apart from other local web designers and agencies:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Local Focus</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We're not just serving Shelby — we're part of the community. We understand local businesses, local customers, and what works in our area.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Personal Service</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You work directly with me, Dave. No account managers, no outsourcing. Just straight talk and real solutions for your business.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-trophy-gold/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-trophy-gold" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Proven Results</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our clients rank higher, get more customers, and grow their businesses. We have the track record to prove it.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Complete Solutions</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Web design, SEO, branding, and ongoing support — all in one place. No juggling multiple vendors or dealing with finger-pointing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Differentiators */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Key Differentiators</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. We're Local — and That Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike large agencies or out-of-town freelancers, Studios by Dave understands the Shelby market. We know how customers search for local services, what local competitors are doing online, and how to optimize for Shelby, Cleveland County, and surrounding areas. Being local means better communication, faster support, and strategies that actually make sense for your community.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Custom Web Design — Not Templates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your business is unique. Your website should be too. Studios by Dave specializes in custom-designed websites tailored to your brand, mobile-friendly layouts that look great on any device, and clean, modern designs built for speed and usability. We don't rely on cookie-cutter templates that make your business blend in. Instead, we create websites designed to convert visitors into customers.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Branding & Logos That Build Trust</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    First impressions matter — especially online. Whether you're starting a new business or refreshing an existing brand, we help with professional logo design, brand consistency across your website and online platforms, and visual identity that builds credibility. A strong brand helps customers feel confident choosing you over competitors.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. We Care About Long-Term Success</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your website isn't a "set it and forget it" project. We work with local businesses to improve and update their site over time, adjust SEO strategies as competition changes, and grow alongside their business goals. When your business succeeds, our reputation grows with it — and that's how we like it.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Our Complete Service Suite</h2>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Professional web design that converts visitors into customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Search engine optimization to dominate local search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Logo design and complete branding packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Google My Business and review optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700">Cutting-edge AI automations to streamline your business</span>
                </li>
              </ul>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Grow Your Local Business?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's talk about how we can help your Shelby business stand out online and attract more local customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#get-in-touch">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Get Free Consultation
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg">
                      View All Services
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

export default BlogArticle1;
