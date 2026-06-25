import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Truck, Package, Clock, Users, MapPin, Globe, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getArticleBySlug } from "@/data/blogArticles";
import { BlogCategoryBadge } from "@/components/BlogCategoryBadge";

const BlogArticle5 = () => {
  const article = getArticleBySlug("fs-expedited-llc-spotlight");
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <SimpleSEO
        title="Driving Efficiency Forward: Spotlight on F&S Expedited LLC | Studios by Dave Blog"
        description="Meet F&S Expedited LLC — a Shelby NC-based interstate freight carrier delivering reliable, expedited logistics solutions for businesses across the United States."
        keywords="F&S Expedited LLC, expedited freight Shelby NC, logistics partner North Carolina, interstate freight carrier, trucking services Shelby"
        canonical="https://www.studiosbydave.com/blog/fs-expedited-llc-spotlight"
        datePublished="2026-03-01"
        dateModified="2026-03-01"
      />
      
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="text-center mb-12 border-b-4 border-double border-neutral-900 pb-8">
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 font-serif mb-4">
              {article && <BlogCategoryBadge categorySlug={article.category} theme={article.theme} />}
              <span className="text-accent">Vol #1 Article #5</span>
              <span className="w-1 h-1 bg-neutral-400 rounded-full" />
              <span>March 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(259_84%_30%)] font-serif tracking-tight mb-6 leading-tight">
              Driving Efficiency Forward
            </h1>
            <p className="text-xl text-neutral-600 font-serif italic leading-relaxed">
              Spotlight on F&S Expedited LLC
            </p>
            <p className="text-lg text-neutral-600 font-serif leading-relaxed mt-2">
              Reliable, Fast, and Customer-Focused Logistics from Shelby, NC
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-neutral max-w-none font-serif">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                In today's fast-paced logistics landscape, businesses need more than just transportation—they need reliability, speed, and a partner they can trust. That's exactly what F&S Expedited LLC brings to the table.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                As a growing name in the freight and logistics industry, F&S Expedited LLC is committed to delivering efficient, dependable, and customer-focused transportation solutions. Whether it's urgent shipments or routine freight needs, their team is equipped to handle it all with professionalism and precision.
              </p>
            </section>

            {/* Company Profile */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Who Is F&S Expedited LLC?</h2>
              
              <div className="bg-card p-6 rounded-lg border border-border/50 mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  F&S Expedited LLC is an active interstate freight carrier based in Shelby, North Carolina, providing transportation services across the United States. Their operation focuses on timely deliveries and maintaining high service standards, making them a reliable partner for businesses that depend on efficient supply chain movement.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Shelby, North Carolina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Type</p>
                      <p className="text-muted-foreground">Interstate Freight Carrier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-trophy-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Coverage</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Owner</p>
                      <p className="text-muted-foreground">Joe Aldrich</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Services That Keep Your Business Moving</h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                F&S Expedited LLC offers a range of logistics and transportation services designed to meet modern business demands. Their solutions are tailored to ensure flexibility, speed, and reliability.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                        <Truck className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Expedited Freight Services</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      When time is critical, F&S Expedited LLC specializes in expedited shipping solutions that prioritize urgent deliveries. Businesses can rely on fast transit times without sacrificing safety or efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Trucking & Transportation</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      From general freight to specialized loads, their trucking services are designed to move goods securely across regional and interstate routes. Their streamlined operations help ensure that shipments arrive on time and intact.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Time-Sensitive Deliveries</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In industries where delays can be costly, their ability to handle time-sensitive shipments makes them a valuable partner for companies needing dependable turnaround times.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Logistics Support</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Beyond transportation, F&S Expedited LLC supports businesses with logistics coordination, helping optimize delivery routes and improve overall supply chain efficiency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Why Choose Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Why Businesses Choose F&S Expedited LLC</h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                What sets F&S Expedited LLC apart is their dedication to service quality and operational reliability. Their approach is built around:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Consistency</h3>
                    <p className="text-muted-foreground">Delivering on time, every time</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Efficiency</h3>
                    <p className="text-muted-foreground">Streamlined operations that reduce delays</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-trophy-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-trophy-gold" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Customer Focus</h3>
                    <p className="text-muted-foreground">Tailored solutions based on client needs</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="text-center p-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Reliability</h3>
                    <p className="text-muted-foreground">A dependable partner for long-term logistics support</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <p className="text-muted-foreground text-center">
                  In an industry where trust is everything, F&S Expedited LLC continues to build strong relationships by delivering results.
                </p>
              </div>
            </section>

            {/* Core Values */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Core Values</h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Reliability</h3>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Speed</h3>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-trophy-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-5 h-5 text-trophy-gold" />
                    </div>
                    <h3 className="font-semibold text-foreground">Professionalism</h3>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-foreground">Customer Focus</h3>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Final Thoughts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 font-serif mb-6">Final Thoughts</h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  As supply chains continue to evolve, companies like F&S Expedited LLC are playing a crucial role in keeping businesses running smoothly. Their commitment to timely delivery and customer satisfaction positions them as a strong contender in the expedited freight industry.
                </p>
                
                <p className="text-lg text-neutral-700 leading-relaxed">
                  For businesses seeking a dependable logistics partner, F&S Expedited LLC represents a smart, forward-moving choice.
                </p>
              </div>
            </section>

            {/* Editor's Note */}
            <section className="mb-12">
              <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-foreground mb-3">Editor's Note</h3>
                <p className="text-muted-foreground italic">
                  "We're proud to partner with Joe Aldrich and F&S Expedited LLC. Their dedication to quality logistics mirrors our own commitment to excellence for local businesses in Shelby and beyond."
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Visit F&S Expedited LLC</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Looking for a reliable logistics partner? Learn more about their services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a 
                    href="https://www.fs-expeditedllc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Visit Their Website
                    </Button>
                  </a>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-4">Need a website like this?</p>
                  <Link to="/contact#get-in-touch">
                    <Button variant="outline" size="lg">
                      Contact Studios by Dave
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

export default BlogArticle5;
