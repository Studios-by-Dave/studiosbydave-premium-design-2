import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="6" height="30" rx="2" fill="#8B5E3C" />
        <rect x="22" y="10" width="6" height="30" rx="2" fill="#8B5E3C" />
        <rect x="38" y="10" width="6" height="30" rx="2" fill="#8B5E3C" />
        <rect x="6" y="16" width="38" height="5" rx="1.5" fill="#6B4424" />
        <rect x="6" y="28" width="38" height="5" rx="1.5" fill="#6B4424" />
      </svg>
    ),
    title: "Wood Fencing",
    desc: "Privacy, picket, split-rail, and farm/ranch styles. Natural beauty with lasting strength.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="5" height="30" rx="2" fill="#6B7280" />
        <rect x="22" y="10" width="5" height="30" rx="2" fill="#6B7280" />
        <rect x="37" y="10" width="5" height="30" rx="2" fill="#6B7280" />
        <path d="M6 20 L43 20 M6 30 L43 30" stroke="#9CA3AF" strokeWidth="2.5" />
        <path d="M11 16 L14 24 L17 16" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
        <path d="M25 16 L28 24 L31 16" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Vinyl Fencing",
    desc: "Low-maintenance, weather-resistant fencing. Clean look, lifetime durability.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="5" height="30" rx="1.5" fill="#4B5563" />
        <rect x="37" y="10" width="5" height="30" rx="1.5" fill="#4B5563" />
        <path d="M11 14 L37 22 M11 22 L37 14 M11 22 L37 30 M11 30 L37 22 M11 30 L37 38 M11 38 L37 30" stroke="#6B7280" strokeWidth="1.5" />
      </svg>
    ),
    title: "Chain Link",
    desc: "Residential, commercial, and black vinyl-coated options. Secure and affordable.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="5" height="30" rx="2" fill="#374151" />
        <rect x="37" y="10" width="5" height="30" rx="2" fill="#374151" />
        <rect x="6" y="15" width="36" height="4" rx="1.5" fill="#1F2937" />
        <rect x="6" y="29" width="36" height="4" rx="1.5" fill="#1F2937" />
        <circle cx="18" cy="24" r="3" fill="#FFD100" stroke="#1A1A1A" strokeWidth="1" />
        <circle cx="30" cy="24" r="3" fill="#FFD100" stroke="#1A1A1A" strokeWidth="1" />
      </svg>
    ),
    title: "Metal & Ornamental",
    desc: "Aluminum and wrought iron fencing. Decorative, pool-code compliant, elegant.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="2" y="30" width="44" height="4" rx="1" fill="#6B8E5A" />
        <rect x="6" y="12" width="5" height="22" rx="1.5" fill="#8B5E3C" />
        <rect x="20" y="12" width="5" height="22" rx="1.5" fill="#8B5E3C" />
        <rect x="34" y="12" width="5" height="22" rx="1.5" fill="#8B5E3C" />
        <rect x="6" y="18" width="33" height="3.5" rx="1" fill="#6B4424" />
        <rect x="6" y="26" width="33" height="3.5" rx="1" fill="#6B4424" />
      </svg>
    ),
    title: "Farm & Agricultural",
    desc: "Split-rail, wire mesh, and cattle fencing for NC farms and rural properties.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="28" width="36" height="4" rx="1.5" fill="#8B5E3C" />
        <rect x="6" y="34" width="36" height="4" rx="1.5" fill="#8B5E3C" />
        <rect x="18" y="10" width="12" height="22" rx="2" fill="#8B5E3C" stroke="#6B4424" strokeWidth="1.5" />
        <circle cx="26" cy="21" r="2" fill="#FFD100" />
        <rect x="4" y="38" width="8" height="4" rx="1" fill="#6B4424" />
        <rect x="36" y="38" width="8" height="4" rx="1" fill="#6B4424" />
      </svg>
    ),
    title: "Decks & Gates",
    desc: "Custom deck construction and gate installation. Complete your outdoor living space.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-fence-cream">
      <HamrickNav />

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-fence-black overflow-hidden" style={{ minHeight: "580px" }}>
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 60px,
                rgba(255,209,0,0.4) 60px,
                rgba(255,209,0,0.4) 64px
              ),
              repeating-linear-gradient(
                180deg,
                transparent,
                transparent 30px,
                rgba(255,209,0,0.15) 30px,
                rgba(255,209,0,0.15) 33px
              )`,
            }}
          />
          {/* Green field gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-fence-green-dark/40 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start justify-center" style={{ minHeight: "580px" }}>
            <div className="inline-block sign-banner px-4 py-2 mb-6">
              <span className="sign-text text-sm tracking-widest">13+ Years Serving Cleveland County, NC</span>
            </div>

            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none mb-4">
              Quality Fencing for<br />
              <span className="text-fence-yellow">Boiling Springs</span><br />
              &amp; Shelby, NC
            </h1>
            <p className="font-body text-lg text-fence-cream/80 max-w-xl mt-4 mb-8 leading-relaxed">
              Free estimates. Honest prices. Fences that last. Come by the shop at 407 E College Ave and see the materials for yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-yellow text-base px-8 py-4 text-center">
                Get a Free Estimate
              </Link>
              <Link to="/gallery" className="btn-black text-base px-8 py-4 text-center flex items-center gap-2 justify-center">
                View Our Work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 text-fence-cream/70">
              <a href="tel:7044345011" className="flex items-center gap-2 hover:text-fence-yellow transition-colors">
                <Phone size={16} className="text-fence-yellow" />
                <span className="font-headline text-lg tracking-wide">(704) 434-5011</span>
              </a>
              <span className="hidden sm:inline text-fence-cream/30">|</span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-fence-yellow" />
                <span className="font-body text-sm">Mon–Fri 8AM–5PM</span>
              </span>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-fence-yellow border-y-2 border-fence-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-fence-black">
              {[
                { icon: <Award size={16} />, text: "13+ Years Serving Cleveland County" },
                { icon: <ShieldCheck size={16} />, text: "Licensed & Insured" },
                { icon: <CheckCircle size={16} />, text: "Free Estimates" },
                { icon: <Phone size={16} />, text: "(704) 434-5011" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-fence-black">{item.icon}</span>
                  <span className="font-headline text-sm uppercase tracking-widest">{item.text}</span>
                  {i < 3 && <span className="hidden lg:inline ml-8 text-fence-black/30">|</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-20 bg-fence-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="fence-section-label">What We Do</p>
              <h2 className="font-headline text-4xl lg:text-5xl uppercase tracking-tight text-fence-black">
                Our Fencing Services
              </h2>
              <p className="font-body text-fence-gray max-w-xl mx-auto mt-3">
                From wood privacy fences to farm fencing, we handle it all with quality materials and experienced crews.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div key={svc.title} className="fence-card p-7">
                  <div className="mb-4">{svc.icon}</div>
                  <h3 className="font-headline text-xl uppercase tracking-wide text-fence-black mb-2">{svc.title}</h3>
                  <p className="font-body text-sm text-fence-gray leading-relaxed">{svc.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 mt-4 font-headline text-sm uppercase tracking-wider text-fence-red hover:text-fence-brown transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/services" className="btn-black inline-block px-10 py-4 text-base">
                See All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── REVIEW — Brittany Gunn ── */}
        <section className="py-10 bg-fence-green/10 border-y border-fence-green/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-fence-yellow text-fence-yellow" />)}
            </div>
            <blockquote className="font-body italic text-lg text-fence-black/80 leading-relaxed mb-4">
              "We recently got our backyard fenced in by Hamrick Fence Company and the experience was amazing! Their prices were much lower than anywhere else and they did awesome work. They were quick and clean, and easy to communicate with also. I will be recommending them to everyone I know 🙂"
            </blockquote>
            <cite className="font-headline text-sm uppercase tracking-widest text-fence-red not-italic">Brittany Gunn — Verified Customer</cite>
          </div>
        </section>

        {/* ── ABOUT SNIPPET ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo placeholder */}
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-fence-brown/20">
                <div
                  className="w-full h-full flex items-center justify-center wood-texture"
                  style={{ minHeight: "360px" }}
                >
                  {/* Fence silhouette illustration */}
                  <svg viewBox="0 0 400 240" fill="none" className="w-full h-full opacity-60 px-8">
                    <rect x="0" y="180" width="400" height="60" fill="#6B8E5A" opacity="0.5" />
                    {[20, 70, 120, 170, 220, 270, 320, 370].map((x, i) => (
                      <g key={i}>
                        <rect x={x} y="60" width="20" height="130" rx="3" fill="#5C3D1E" />
                        <polygon points={`${x},60 ${x + 10},44 ${x + 20},60`} fill="#5C3D1E" />
                      </g>
                    ))}
                    <rect x="10" y="100" width="380" height="14" rx="3" fill="#7A5230" />
                    <rect x="10" y="136" width="380" height="14" rx="3" fill="#7A5230" />
                    <text x="200" y="30" textAnchor="middle" fontFamily="Oswald, sans-serif" fontSize="20" fontWeight="700" fill="#FFD100" letterSpacing="2">HAMRICK FENCE CO.</text>
                    <text x="200" y="50" textAnchor="middle" fontFamily="Open Sans, sans-serif" fontSize="12" fill="#FFD100" opacity="0.8">407 E College Ave · Boiling Springs, NC</text>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 sign-banner px-3 py-1">
                  <span className="sign-text text-xs">Boiling Springs, NC</span>
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="fence-section-label">About Hamrick Fence Co.</p>
                <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black mb-5 leading-tight">
                  Your Local Fence Experts for Over 13 Years
                </h2>
                <p className="font-body text-fence-gray leading-relaxed mb-4">
                  We've been building fences in Cleveland County for over 13 years. Family-owned and operated, we know what it takes to build a fence that holds up in North Carolina weather — and we stand behind every job we do.
                </p>
                <p className="font-body text-fence-gray leading-relaxed mb-6">
                  Come by the shop at 407 E College Ave in Boiling Springs and see the materials for yourself. We'll walk you through your options, give you an honest price, and get to work fast.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "13+ years of local experience",
                    "Licensed & insured",
                    "Residential, commercial & farm fencing",
                    "Free estimates — no pressure",
                    "Two convenient locations",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-fence-green flex-shrink-0" />
                      <span className="font-body text-sm text-fence-black/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/about" className="btn-yellow text-sm px-7 py-3 text-center">
                    Our Story
                  </Link>
                  <a href="tel:7044345011" className="btn-black text-sm px-7 py-3 text-center flex items-center gap-2 justify-center">
                    <Phone size={15} /> (704) 434-5011
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 bg-fence-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="fence-section-label">What Customers Say</p>
              <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black">Real Reviews</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Review 1 */}
              <div className="fence-card p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-fence-yellow text-fence-yellow" />)}
                </div>
                <blockquote className="font-body italic text-fence-gray leading-relaxed mb-5">
                  "You seriously cannot go wrong with this company. Our fence is beautiful, it's great for our dogs who love to be outside. We recently had a semi emergency situation and they came out and took care of us super quick."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-fence-yellow flex items-center justify-center flex-shrink-0">
                    <span className="font-headline text-sm text-fence-black font-bold">KS</span>
                  </div>
                  <div>
                    <p className="font-headline text-sm uppercase tracking-wide text-fence-black">Kristina Santiago</p>
                    <p className="font-body text-xs text-fence-gray">Local Guide · Google Review</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="fence-card p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-fence-yellow text-fence-yellow" />)}
                </div>
                <blockquote className="font-body italic text-fence-gray leading-relaxed mb-5">
                  "Little late on the review, but we had a great experience with the install of our black chain link fence. Highly recommend."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-fence-brown flex items-center justify-center flex-shrink-0">
                    <span className="font-headline text-sm text-white font-bold">LM</span>
                  </div>
                  <div>
                    <p className="font-headline text-sm uppercase tracking-wide text-fence-black">Lucas M.</p>
                    <p className="font-body text-xs text-fence-gray">Local Guide · Google Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA BANNER ── */}
        <section className="py-16 bg-fence-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="sign-banner inline-block px-8 py-6 mx-auto w-full max-w-2xl">
              <p className="sign-text text-sm tracking-widest mb-2">Ready to Get Started?</p>
              <h2 className="font-headline text-4xl lg:text-5xl uppercase tracking-tight text-fence-black leading-tight mb-3">
                Call for Your Free Quote
              </h2>
              <a
                href="tel:7044345011"
                className="font-headline text-3xl lg:text-4xl uppercase tracking-wider text-fence-black hover:text-fence-red transition-colors block mb-5"
              >
                (704) 434-5011
              </a>
              <p className="font-body text-sm text-fence-black/70 mb-5">Mon–Fri · 8:00 AM – 5:00 PM · Boiling Springs &amp; Shelby, NC</p>
              <Link to="/contact" className="btn-black inline-block px-8 py-3 text-sm">
                Request a Free Estimate Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HamrickFooter />
    </div>
  );
};

export default Index;
