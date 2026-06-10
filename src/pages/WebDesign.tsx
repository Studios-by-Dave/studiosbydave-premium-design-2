import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema, serviceSchema, localServiceSchema, webDesignFAQSchema, webPackageOfferSchema, googleReviewsSchema } from "@/data/structuredData";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import mediaPacksBackdrop from "@/assets/media-packs-backdrop.jpg";
import comptiaLogo from "@/assets/marquee-logos/comptia.png";

const WebDesign = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "Web Design", url: "https://www.studiosbydave.com/services/web-design" }
  ]);

  const calculateROI = (investment: number, avgCustomerValue: number) => {
    const paybackPeriodEl = document.getElementById('paybackPeriod') as HTMLElement;
    const roiPercentageEl = document.getElementById('roiPercentage') as HTMLElement;
    const roiAmountEl = document.getElementById('roiAmount') as HTMLElement;

    if (investment <= 0 || avgCustomerValue <= 0) {
      if (paybackPeriodEl) paybackPeriodEl.textContent = 'Enter values to calculate';
      if (roiPercentageEl) roiPercentageEl.textContent = 'Enter values to calculate';
      if (roiAmountEl) roiAmountEl.textContent = 'Enter values to calculate';
      return;
    }

    // Simple calculation assuming website generates 5 new customers per year
    const customersPerYear = 5;
    const annualRevenue = avgCustomerValue * customersPerYear;
    const roiAmount = annualRevenue - investment;
    const roiPercentage = (roiAmount / investment) * 100;
    const paybackPeriod = investment / (annualRevenue / 12);

    if (paybackPeriodEl) {
      if (paybackPeriod <= 0) {
        paybackPeriodEl.textContent = 'Immediate';
      } else if (paybackPeriod < 1) {
        paybackPeriodEl.textContent = `${Math.round(paybackPeriod * 30)} days`;
      } else {
        paybackPeriodEl.textContent = `${Math.round(paybackPeriod)} months`;
      }
    }

    if (roiPercentageEl) {
      roiPercentageEl.textContent = `${roiPercentage.toFixed(1)}%`;
    }

    if (roiAmountEl) {
      roiAmountEl.textContent = `$${roiAmount.toLocaleString()}`;
    }
  };

  const webDesignSchema = serviceSchema(
    "Professional Web Design for Contractors",
    "Custom responsive websites designed specifically for roofing contractors, landscaping companies, and solar panel installers with mobile-first design and SEO optimization.",
    "https://www.studiosbydave.com/services/web-design"
  );

  const localWebDesignSchema = localServiceSchema(
    "Web Design Services",
    "Local web design services in Shelby, NC. We create custom websites for contractors including roofing, landscaping, and solar installation companies.",
    "https://www.studiosbydave.com/services/web-design"
  );

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Professional Web Design for Contractors - Mobile-Responsive Websites"
        description="Custom web design for roofing contractors, landscaping companies, and solar installers. Mobile-first responsive websites that convert visitors into customers. Get your free quote today."
        keywords="contractor web design, roofing contractor websites, landscaping web design, solar installer websites, mobile responsive design, lead generation websites, professional web development"
        structuredData={[breadcrumbs, webDesignSchema, localWebDesignSchema, webDesignFAQSchema, ...webPackageOfferSchema, ...googleReviewsSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center" itemScope itemType="https://schema.org/WebPageElement">
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />

        {/* Shelby Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/assets/Shelby-intro-1751301212.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-luxury-bg/70 z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Web Design Services</div>
            <h1 className="display-heading text-luxury-text-primary text-4xl lg:text-6xl mb-6" itemProp="headline" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Professional{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Web Design
              </span>
              {" "}with You in Mind
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10 leading-relaxed" itemProp="description">
            Custom websites that turn visitors into paying customers—designed specifically
            for local small businesses. Serving Shelby, Charlotte, Gastonia, Spartanburg, Asheville, and Raleigh.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Get Your Free Quote</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-luxury-bg" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-eyebrow mb-4">✦ What You Get</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6" itemProp="name">
              Everything Your Business Website Needs
            </h2>
            <p className="font-body text-luxury-text-secondary text-lg max-w-4xl mx-auto leading-relaxed">
              At Studios by Dave, we understand that building a website for your business can feel like an overwhelming task. 
              We're with you every step of the way. Because we don't just sell you a website, and we don't just build one. 
              Our real job is to fulfill the purpose behind your online presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Responsive designs that work perfectly on all devices",
                features: ["Responsive Layout", "Touch-Optimized", "Fast Loading", "Works Everywhere"],
                backdrop: webDesignBackdrop
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed to keep visitors engaged",
                features: ["Optimized Performance", "Fast Load Times", "Better Rankings", "User Retention"],
                backdrop: brandingBackdrop
              },
              {
                icon: Search,
                title: "SEO Optimized",
                description: "Built-in SEO to help you rank higher in search results",
                features: ["On-Page SEO", "Technical SEO", "Local SEO", "Rankings Boost"],
                backdrop: googleBackdrop
              },
              {
                icon: Globe,
                title: "Lead Generation",
                description: "Contact forms and CTAs designed to convert visitors",
                features: ["Contact Forms", "Call-to-Action", "Conversion Tracking", "Lead Capture"],
                backdrop: mediaPacksBackdrop
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="luxury-card rounded-xl p-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-luxury-lime/10 flex items-center justify-center mb-6 group-hover:bg-luxury-lime/20 transition-colors">
                      <IconComponent size={24} className="text-luxury-lime" />
                    </div>
                    <h3 className="display-heading text-luxury-text-primary text-2xl mb-4 group-hover:text-luxury-lime transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body text-luxury-text-secondary text-base leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-luxury-text-primary/80 text-sm">
                          <CheckCircle size={16} className="text-luxury-lime mr-3 flex-shrink-0" />
                          <span className="font-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-eyebrow mb-4">✦ Pricing</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-4" itemProp="name">
              Web Design Packages
            </h2>
            <p className="font-body text-luxury-text-secondary text-lg text-center max-w-2xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Web Package */}
            <div className="luxury-card rounded-xl p-6 transition-all duration-300 group relative hover:border-luxury-royal-blue/50">
              <div className="text-center pb-4">
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-1">Starter Web Package</h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-luxury-lime mb-2">NEW</span>
                <div className="text-3xl font-bold text-luxury-lime mt-2">ONLY $499</div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-luxury-lime text-center italic font-body">Best for startups</p>
                <ul className="space-y-2">
                  {[
                    "1-3 pages",
                    "Mobile responsive",
                    "Contact form",
                    "Basic SEO setup",
                    "7-day turnaround",
                    "Domain and hosting purchased separately",
                    "No maintenance included, 1 revision round"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className={`text-sm font-body ${index >= 5 ? 'font-bold text-luxury-text-primary' : 'text-luxury-text-secondary'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Web Package */}
            <div className="luxury-card rounded-xl p-6 relative transition-all duration-300 group hover:border-luxury-lime/50 border border-luxury-lime/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-luxury-lime text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center pb-4 pt-8">
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-1">Business Web Package</h3>
                <p className="text-sm font-medium text-luxury-lime italic font-body">Best for established local businesses</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">$998</div>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Up to 5 pages",
                    "Custom branding",
                    "Lead capture forms",
                    "Google Business Profile integration",
                    "Basic on-page SEO",
                    "2 revision rounds",
                    "Optional care plan"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-luxury-text-secondary font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scale Web Package */}
            <div className="luxury-card rounded-xl p-6 transition-all duration-300 group relative hover:border-luxury-royal-blue/50">
              <div className="text-center pb-4">
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-1">Scale Web Package</h3>
                <p className="text-sm font-medium text-luxury-royal-blue italic font-body">Best for lead generation</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">$1,998</div>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Up to 10 pages",
                    "Conversion-focused design",
                    "Advanced forms",
                    "CRM integration",
                    "Local SEO setup",
                    "Analytics dashboard",
                    "Priority support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-luxury-text-secondary font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ultra Premium Web Package */}
            <div className="luxury-card rounded-xl p-6 transition-all duration-300 group relative hover:border-luxury-purple/50">
              <div className="text-center pb-4">
                <h3 className="display-heading text-luxury-text-primary text-2xl mb-1">Ultra Premium Web Package</h3>
                <p className="text-sm font-medium text-luxury-purple italic font-body">Complete digital presence</p>
                <div className="text-3xl font-bold text-luxury-lime mt-2">Call for Quote</div>
              </div>
              <div className="space-y-4">
                <ul className="space-y-2">
                  {[
                    "Fully custom design",
                    "Advanced integrations",
                    "Memberships, booking, or custom functionality",
                    "Multi-location support",
                    "Conversion optimization",
                    "Strategy consultation",
                    "30 days post-launch support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-luxury-lime mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-luxury-text-secondary font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6">
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Client Results</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 text-6xl font-display text-luxury-royal-blue/20">"</div>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
              </div>
              <p className="accent-text text-luxury-text-secondary text-lg mb-6 leading-relaxed">"Dave really presented /uncovered opportunities that we wouldn't have ever known otherwise. And now our website is really generating our online business beautifully! Thanks again Dave! 😃"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-luxury-royal-blue/10 flex items-center justify-center">
                  <span className="text-luxury-royal-blue font-bold text-lg">PR</span>
                </div>
                <div>
                  <p className="font-section text-luxury-text-primary text-sm uppercase tracking-wider">Paul Richardson</p>
                  <p className="font-body text-luxury-text-secondary text-xs">Local Guide</p>
                </div>
              </div>
            </div>
            <div className="luxury-card rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 text-6xl font-display text-luxury-royal-blue/20">"</div>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-luxury-lime text-luxury-lime" />)}
              </div>
              <p className="accent-text text-luxury-text-secondary text-lg mb-6 leading-relaxed">"Studios by Dave really knocked it out of the park. Our online presence is not only fully present, its generating our business so many leads now! Thank You!!!"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-luxury-royal-blue/10 flex items-center justify-center">
                  <span className="text-luxury-royal-blue font-bold text-lg">RJ</span>
                </div>
                <div>
                  <p className="font-section text-luxury-text-primary text-sm uppercase tracking-wider">Ryan "Kris" Jones</p>
                  <p className="font-body text-luxury-text-secondary text-xs">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
            {/* Left Certification Image */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/certified-badge.png"
                alt="Certified professional web design services" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Center Text */}
            <div className="text-center">
              <h2 className="display-heading text-luxury-text-primary text-3xl mb-4">Complete Your Digital Presence</h2>
              <p className="font-body text-luxury-text-secondary text-lg">
                A great website is just the beginning. Explore our other services to maximize your online success
              </p>
            </div>
            
            {/* Right Certification Image */}
            <div className="flex justify-center">
              <img 
                src={comptiaLogo}
                alt="CompTIA A+ Certified professional" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Branding Service */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Professional Branding</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Complete brand identity packages including logos, color schemes, and brand guidelines that complement your new website.
              </p>
              <Link to="/services/branding" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Explore Branding Services
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* SEO Service */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">SEO Optimization</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Get your new website found by local customers with our comprehensive SEO services tailored for contractors.
              </p>
              <Link to="/services/seo" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Boost Your Rankings
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Google Optimization */}
            <div className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-3">Google Optimization</h3>
              <p className="font-body text-luxury-text-secondary mb-4">
                Optimize your Google Business Profile and local search presence to dominate your local market.
              </p>
              <Link to="/services/google-optimization" className="text-luxury-royal-blue hover:text-luxury-purple font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors">
                Improve Local Search
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* IDE Charts Section */}
          <div className="mb-16">
            <div className="luxury-card p-6 rounded-xl max-w-4xl mx-auto">
              <img
                src="/assets/sbd ide chart1.png"
                alt="IDE Chart 1"
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: '1200px' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Related Blog Articles */}
          <div className="bg-luxury-bg p-8 rounded-xl border border-white/6">
            <h3 className="display-heading text-luxury-text-primary text-2xl mb-6 text-center">Helpful Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-3">Web Design Insights</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/does-your-business-need-a-website-2026" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Does Your Business Really Need a Website in 2026?
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
                <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider mb-3">SEO & Marketing Tips</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/local-seo-essentials-2026" className="text-luxury-royal-blue hover:text-luxury-purple transition-colors font-body text-sm">
                      Local SEO Essentials for Shelby Businesses in 2026
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

      {/* ROI Calculator Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Estimate Your ROI</div>
            <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-4">ROI Calculator</h2>
            <p className="font-body text-luxury-text-secondary text-lg">
              Estimate your return on investment with a new website
            </p>
          </div>

          <div className="luxury-card rounded-xl p-6 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-luxury-lime mb-2 font-body uppercase tracking-wider">
                    Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    id="investment"
                    className="w-full px-4 py-3 bg-luxury-surface border border-white/10 rounded-lg focus:outline-none focus:border-luxury-royal-blue transition-colors text-luxury-text-primary placeholder:text-luxury-text-secondary/50"
                    placeholder="Enter investment amount"
                    min="0"
                    step="100"
                    onChange={(e) => {
                      const investment = parseFloat(e.target.value) || 0;
                      const avgCustomer = parseFloat((document.getElementById('avgCustomer') as HTMLInputElement).value) || 0;
                      calculateROI(investment, avgCustomer);
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-lime mb-2 font-body uppercase tracking-wider">
                    Average Customer Value ($)
                  </label>
                  <input
                    type="number"
                    id="avgCustomer"
                    className="w-full px-4 py-3 bg-luxury-surface border border-white/10 rounded-lg focus:outline-none focus:border-luxury-royal-blue transition-colors text-luxury-text-primary placeholder:text-luxury-text-secondary/50"
                    placeholder="Enter average customer value"
                    min="0"
                    step="10"
                    onChange={(e) => {
                      const avgCustomer = parseFloat(e.target.value) || 0;
                      const investment = parseFloat((document.getElementById('investment') as HTMLInputElement).value) || 0;
                      calculateROI(investment, avgCustomer);
                    }}
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="space-y-6 bg-luxury-surface rounded-lg p-6 border border-white/6">
                <div>
                  <label className="block text-sm font-medium text-luxury-text-secondary mb-2 font-body uppercase tracking-wider">
                    Payback Period
                  </label>
                  <div id="paybackPeriod" className="text-2xl font-bold text-luxury-lime">
                    Enter values to calculate
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-text-secondary mb-2 font-body uppercase tracking-wider">
                    ROI Percentage
                  </label>
                  <div id="roiPercentage" className="text-2xl font-bold text-luxury-lime">
                    Enter values to calculate
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-text-secondary mb-2 font-body uppercase tracking-wider">
                    ROI Approximate Amount
                  </label>
                  <div id="roiAmount" className="text-2xl font-bold text-luxury-lime">
                    Enter values to calculate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Web Flyers Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Marketing Materials</div>
            <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-4">Current Web Flyers</h2>
            <p className="font-body text-luxury-text-secondary text-lg max-w-2xl mx-auto">
              Explore our current marketing flyers showcasing our web design and e-commerce solutions
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Original Local Business Flyer */}
            <div className="luxury-card rounded-xl p-6">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-2">Local Business Web Design</h3>
              <p className="font-body text-luxury-text-secondary mb-4">Professional web design services for local contractors and small businesses</p>
              <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/flyers/Web%20Flyer.jpg" 
                  alt="Local Business Web Design Flyer - Professional web design services for contractors and small businesses"
                  className="w-full h-auto object-contain max-w-2xl mx-auto"
                  style={{ imageRendering: 'crisp-edges', maxHeight: '800px' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* E-commerce Flyer 1 */}
            <div className="luxury-card rounded-xl p-6">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-2">Premium E-commerce Solutions</h3>
              <p className="font-body text-luxury-text-secondary mb-4">Complete online store solutions with custom domains and Shopify integration</p>
              <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/flyers/New%20Flyer_1.jpg" 
                  alt="Premium E-commerce Solutions Flyer - Shopify stores and custom domains for online businesses"
                  className="w-full h-auto object-contain max-w-2xl mx-auto"
                  style={{ imageRendering: 'crisp-edges', maxHeight: '800px' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* E-commerce Flyer 2 */}
            <div className="luxury-card rounded-xl p-6">
              <h3 className="display-heading text-luxury-text-primary text-xl mb-2">Advanced Online Stores</h3>
              <p className="font-body text-luxury-text-secondary mb-4">Professional e-commerce platforms with advanced features for growing businesses</p>
              <div className="bg-gray-100 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/flyers/New%20Flyer_2.jpg" 
                  alt="Advanced Online Stores Flyer - Professional e-commerce solutions for businesses"
                  className="w-full h-auto object-contain max-w-2xl mx-auto"
                  style={{ imageRendering: 'crisp-edges', maxHeight: '800px' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-luxury-text-secondary mb-6">
              Interested in any of these services? Contact us for a free consultation!
            </p>
            <Link to="/contact#get-in-touch">
              <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                <span className="relative z-10">Get Your Free Quote</span>
                <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles & Services */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Learn More</div>
            <h3 className="display-heading text-luxury-text-primary text-2xl md:text-3xl mb-4">Related Resources</h3>
            <p className="font-body text-luxury-text-secondary">Learn more about web design and digital marketing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Articles */}
            <div className="space-y-4">
              <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-luxury-lime rounded-full"></span>
                Latest Articles
              </h4>
              <div className="space-y-3">
                <Link to="/blog/does-your-business-need-a-website-2026" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-surface/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">Does Your Business Need a Website in 2026?</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Why websites still matter for business growth</p>
                </Link>
                <Link to="/blog/website-mistakes-costing-customers" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-surface/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">5 Common Website Mistakes</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Fix costly errors that hurt your business</p>
                </Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="space-y-4">
              <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-luxury-royal-blue rounded-full"></span>
                Complementary Services
              </h4>
              <div className="space-y-3">
                <Link to="/services/branding" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-surface/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">Logo Design & Branding</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Complete brand identity solutions</p>
                </Link>
                <Link to="/services/seo" className="block p-4 rounded-lg border border-white/6 hover:border-luxury-royal-blue/50 transition-colors bg-luxury-surface/50">
                  <h5 className="font-body text-luxury-text-primary hover:text-luxury-royal-blue transition-colors font-medium">SEO Services</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Get found by your ideal customers</p>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-section text-luxury-text-primary text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-luxury-lime rounded-full"></span>
                Next Steps
              </h4>
              <div className="space-y-3">
                <Link to="/services/promos" className="block p-4 rounded-lg border border-luxury-lime/20 hover:bg-luxury-lime/10 transition-colors bg-luxury-surface/50">
                  <h5 className="font-body text-luxury-lime font-medium">Current Promotions</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Special offers on web design</p>
                </Link>
                <Link to="/booking" className="block p-4 rounded-lg border border-luxury-royal-blue/20 hover:bg-luxury-royal-blue/10 transition-colors bg-luxury-surface/50">
                  <h5 className="font-body text-luxury-royal-blue font-medium">Book a Consultation</h5>
                  <p className="text-sm text-luxury-text-secondary mt-1">Schedule your free strategy session</p>
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

export default WebDesign;