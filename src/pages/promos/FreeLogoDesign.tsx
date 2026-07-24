import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import PixieDust from "@/components/PixieDust";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// First 4 items also appear in the ticket card summary; rest are detail-only
const ticketItems = [
  "Custom logo concept",
  "Color & typography system",
  "Web-ready & print-ready files",
  "One revision round included",
];

const includedItems = [
  "One original logo concept built around your business and industry",
  "A matching color palette and font pairing for your brand",
  "Delivered in web (PNG/SVG) and print-ready formats",
  "One round of revisions to refine the concept",
  "Logo integrated directly into your new website",
  "Optional: extend into a full Brand Identity Package later",
];

const steps = [
  {
    num: "1",
    title: "Choose a web package",
    desc: "Sign on for any Web Design package — no minimum tier required.",
  },
  {
    num: "2",
    title: "Share your brand direction",
    desc: "Tell us your industry, style preferences, and any existing brand colors.",
  },
  {
    num: "3",
    title: "Review & launch",
    desc: "We deliver your logo alongside your site build, ready to use everywhere.",
  },
];

const faqs = [
  {
    q: "Does this work with any web package, even the smallest one?",
    a: "Yes — the free logo design is included with every Web Design package we offer, regardless of size or budget.",
  },
  {
    q: "What if I already have a logo?",
    a: "No problem. We can refresh your existing mark instead, or skip this offer and apply the savings toward a Brand Identity Package.",
  },
  {
    q: "How many revisions do I get?",
    a: "One revision round is included with the free offer. Additional rounds can be added if you'd like more exploration.",
  },
  {
    q: "Can I get a full brand package instead of just a logo?",
    a: "Absolutely — ask us about upgrading to a complete Brand Identity Package with business cards and social assets.",
  },
];

const FreeLogoDesign = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="FREE Logo Design Promotion | Studios by Dave"
        description="Every web design package includes a custom logo at no extra cost — not a template, a real brand mark. Limited time offer for contractors and local businesses in Shelby, NC."
        keywords="free logo design, logo promotion, web package deal, custom logo offer, studios by dave promotion"
      />
      <Navigation />

      <main>
        {/* Hero — split layout */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-luxury-bg noise-overlay" />
          <div className="absolute inset-0 radial-glow opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-royal-blue/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-20">
            {/* Breadcrumb */}
            <p className="text-sm text-luxury-text-secondary mb-8">
              <Link to="/promos" className="hover:text-luxury-royal-blue transition-colors">Promos</Link>
              <span className="mx-2 opacity-40">/</span>
              Free Logo Design
            </p>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              {/* Copy */}
              <div>
                <div className="section-eyebrow mb-5 inline-flex items-center gap-2">
                  🎨 Offer 01 · Branding
                </div>
                <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl text-luxury-text-primary mb-6 leading-tight">
                  A free logo,{" "}
                  <span className="text-luxury-royal-blue">every time</span>{" "}
                  you build with us.
                </h1>
                <p className="font-body text-lg text-luxury-text-secondary mb-8 max-w-lg leading-relaxed">
                  Every web design package includes a full custom logo — not a placeholder, not a template. A real brand mark designed alongside your new site so everything matches from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact#get-in-touch">
                    <Button size="lg" className="bg-luxury-royal-blue text-white hover:bg-luxury-royal-blue/90 font-bold uppercase tracking-widest px-8">
                      Claim With Any Package
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/promos">
                    <Button size="lg" variant="outline" className="border-white/20 text-luxury-text-primary hover:border-luxury-royal-blue/60 hover:bg-luxury-surface font-semibold">
                      See Other Offers
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Ticket card */}
              <div className="relative mx-4">
                {/* punch-hole notches */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-luxury-bg z-10" />
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-luxury-bg z-10" />

                <div className="luxury-card rounded-2xl p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-royal-blue/5 rounded-full blur-2xl -mr-8 -mt-8" />
                  <p className="text-xs font-section uppercase tracking-widest text-luxury-text-secondary mb-3">Offer Value</p>
                  <p className="font-section font-extrabold text-5xl text-luxury-royal-blue mb-2">$0</p>
                  <p className="font-body text-sm text-luxury-text-secondary mb-6 leading-relaxed">
                    Logo design normally billed separately — free when bundled with any Web Design package.
                  </p>
                  <div className="border-t border-dashed border-white/10 mb-6" />
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3 m-0 p-0 list-none">
                    {ticketItems.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-luxury-text-secondary font-body">
                        <span className="text-luxury-royal-blue font-bold mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <PixieDust />
        </section>

        {/* What's Included */}
        <section className="py-16 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-2xl p-8 md:p-10">
              <h2 className="display-heading text-2xl md:text-3xl text-luxury-text-primary mb-8">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 m-0 p-0 list-none">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-luxury-text-secondary text-[15px] leading-relaxed">
                    <span className="text-luxury-royal-blue font-bold mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How To Claim It */}
        <section className="py-4 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-2xl p-8 md:p-10">
              <h2 className="display-heading text-2xl md:text-3xl text-luxury-text-primary mb-8">How To Claim It</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-luxury-royal-blue/14 border border-luxury-royal-blue/20 flex items-center justify-center text-luxury-royal-blue font-bold text-sm">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-section text-luxury-text-primary text-[15px] font-semibold mb-1">{step.title}</h4>
                      <p className="font-body text-luxury-text-secondary text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-2xl p-8 md:p-10">
              <h2 className="display-heading text-2xl md:text-3xl text-luxury-text-primary mb-6">Frequently Asked Questions</h2>
              <div className="divide-y divide-white/10">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center text-left gap-4 group"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-section font-semibold text-[15px] text-luxury-text-primary group-hover:text-luxury-royal-blue transition-colors">
                        {faq.q}
                      </span>
                      {openFaq === i
                        ? <ChevronUp className="h-5 w-5 text-luxury-royal-blue shrink-0" />
                        : <ChevronDown className="h-5 w-5 text-luxury-text-secondary shrink-0" />
                      }
                    </button>
                    {openFaq === i && (
                      <p className="font-body text-luxury-text-secondary text-sm leading-relaxed mt-3 pr-8">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways To Save */}
        <section className="py-4 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="luxury-card rounded-2xl p-8 md:p-10">
              <h2 className="display-heading text-2xl md:text-3xl text-luxury-text-primary mb-6">Other Ways To Save</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/promos/referral-bonus"
                  className="flex items-center gap-4 border border-white/10 hover:border-luxury-royal-blue/50 rounded-xl p-5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/16 flex items-center justify-center text-xl shrink-0">🤝</div>
                  <div className="min-w-0">
                    <h4 className="font-section text-[14.5px] text-luxury-text-primary font-semibold">$100 Referral Bonus</h4>
                    <p className="font-body text-xs text-luxury-text-secondary">Earn for every business you send our way</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-luxury-text-secondary group-hover:text-luxury-royal-blue ml-auto shrink-0 transition-colors" />
                </Link>
                <Link
                  to="/promos/free-seo-audit"
                  className="flex items-center gap-4 border border-white/10 hover:border-luxury-royal-blue/50 rounded-xl p-5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-luxury-lime/14 flex items-center justify-center text-xl shrink-0">📈</div>
                  <div className="min-w-0">
                    <h4 className="font-section text-[14.5px] text-luxury-text-primary font-semibold">Free SEO Audit</h4>
                    <p className="font-body text-xs text-luxury-text-secondary">For select local NC businesses</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-luxury-text-secondary group-hover:text-luxury-royal-blue ml-auto shrink-0 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-luxury-bg text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="display-heading text-3xl md:text-4xl text-luxury-text-primary mb-4">
              Ready For A Website — And A Logo To Match?
            </h2>
            <p className="font-body text-luxury-text-secondary text-lg mb-8">
              Book a free strategy call and we'll scope your project, logo included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#get-in-touch">
                <Button size="lg" className="bg-luxury-royal-blue text-white hover:bg-luxury-royal-blue/90 font-bold uppercase tracking-widest px-8">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+17044738188">
                <Button size="lg" variant="outline" className="border-white/20 text-luxury-text-primary hover:border-luxury-royal-blue/60 hover:bg-luxury-surface font-semibold">
                  Call (704) 473-8188
                </Button>
              </a>
            </div>
            <div className="mt-10">
              <Link to="/promos" className="group text-luxury-text-secondary hover:text-luxury-text-primary transition-colors flex items-center justify-center gap-2 text-sm">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to All Promotions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeLogoDesign;
