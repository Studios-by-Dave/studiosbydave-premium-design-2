import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, CheckCircle, Star, Award, ShieldCheck, Users } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-fence-cream">
      <HamrickNav />

      <main>
        {/* Header */}
        <section className="bg-fence-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="fence-section-label text-fence-yellow mb-2">Who We Are</p>
            <h1 className="font-headline text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              About Hamrick Fence Co.
            </h1>
            <p className="font-body text-fence-cream/70 max-w-xl leading-relaxed">
              Family-owned and operated, serving Boiling Springs, Shelby, and Cleveland County for over 13 years.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Shop illustration */}
              <div className="rounded-lg overflow-hidden border-2 border-fence-black/10 shadow-md bg-fence-brown/15" style={{ minHeight: "380px" }}>
                <div className="w-full h-full flex items-end justify-center p-6" style={{ minHeight: "380px" }}>
                  <svg viewBox="0 0 400 260" fill="none" className="w-full">
                    {/* Sky */}
                    <rect width="400" height="260" fill="#87CEEB" opacity="0.3" />
                    {/* Ground */}
                    <rect x="0" y="200" width="400" height="60" fill="#6B8E5A" opacity="0.4" />
                    {/* Building */}
                    <rect x="40" y="80" width="320" height="130" fill="#C4A882" />
                    <polygon points="40,80 200,20 360,80" fill="#8B5E3C" />
                    {/* Door */}
                    <rect x="165" y="140" width="70" height="70" rx="2" fill="#5C3D1E" />
                    <circle cx="225" cy="178" r="4" fill="#FFD100" />
                    {/* Windows */}
                    <rect x="65" y="110" width="60" height="50" rx="2" fill="#87CEEB" opacity="0.8" />
                    <rect x="275" y="110" width="60" height="50" rx="2" fill="#87CEEB" opacity="0.8" />
                    <line x1="95" y1="110" x2="95" y2="160" stroke="#5C3D1E" strokeWidth="2" />
                    <line x1="65" y1="135" x2="125" y2="135" stroke="#5C3D1E" strokeWidth="2" />
                    <line x1="305" y1="110" x2="305" y2="160" stroke="#5C3D1E" strokeWidth="2" />
                    <line x1="275" y1="135" x2="335" y2="135" stroke="#5C3D1E" strokeWidth="2" />
                    {/* Sign */}
                    <rect x="100" y="62" width="200" height="34" rx="4" fill="#FFD100" stroke="#1A1A1A" strokeWidth="2" />
                    <text x="200" y="83" textAnchor="middle" fontFamily="Oswald, sans-serif" fontSize="14" fontWeight="700" fill="#1A1A1A" letterSpacing="1.5">HAMRICK FENCE CO.</text>
                    {/* Fence in foreground */}
                    {[10, 55, 100, 290, 335, 380].map((x) => (
                      <g key={x}>
                        <rect x={x} y="185" width="14" height="35" rx="2" fill="#8B5E3C" />
                        <polygon points={`${x},185 ${x + 7},173 ${x + 14},185`} fill="#8B5E3C" />
                      </g>
                    ))}
                    <rect x="10" y="198" width="110" height="7" rx="1.5" fill="#6B4424" />
                    <rect x="280" y="198" width="110" height="7" rx="1.5" fill="#6B4424" />
                    {/* Address */}
                    <text x="200" y="245" textAnchor="middle" fontFamily="Open Sans, sans-serif" fontSize="11" fill="#1A1A1A" opacity="0.7">407 E College Ave · Boiling Springs, NC</text>
                  </svg>
                </div>
              </div>

              {/* Story text */}
              <div>
                <p className="fence-section-label">Our Story</p>
                <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black mb-5 leading-tight">
                  Built on Hard Work &amp; Local Roots
                </h2>
                <p className="font-body text-fence-gray leading-relaxed mb-4">
                  Hamrick Fence Co. has been building fences in Cleveland County since 2011. What started as a small local operation has grown into one of the most trusted fence companies in the Boiling Springs and Shelby area — because we do the work right, the first time.
                </p>
                <p className="font-body text-fence-gray leading-relaxed mb-4">
                  We're local. We know the neighborhoods, the soil, the weather. We source quality materials and bring the same craftsmanship to every project whether it's a small backyard fence for a homeowner or a large commercial installation.
                </p>
                <p className="font-body text-fence-gray leading-relaxed mb-6">
                  Come by the shop at 407 E College Ave in Boiling Springs or call us at (704) 434-5011. We'll walk you through your options, give you an honest price, and get to work.
                </p>
                <a href="tel:7044345011" className="btn-yellow text-sm px-7 py-3 inline-flex items-center gap-2">
                  <Phone size={15} /> Call (704) 434-5011
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-fence-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="fence-section-label">Why Hamrick</p>
              <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black">Why Choose Us</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award size={32} className="text-fence-yellow" />,
                  title: "13+ Years Experience",
                  desc: "Over a decade of fence installations across Cleveland County and beyond.",
                },
                {
                  icon: <ShieldCheck size={32} className="text-fence-green" />,
                  title: "Licensed & Insured",
                  desc: "Fully licensed and insured for your peace of mind on every project.",
                },
                {
                  icon: <Users size={32} className="text-fence-brown" />,
                  title: "Local & Family-Owned",
                  desc: "We live and work here. We stand behind every fence we build.",
                },
                {
                  icon: <CheckCircle size={32} className="text-fence-red" />,
                  title: "Free Estimates",
                  desc: "No pressure, no obligation. We'll give you an honest price upfront.",
                },
              ].map((item) => (
                <div key={item.title} className="fence-card p-7 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-headline text-lg uppercase tracking-wide text-fence-black mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-fence-gray leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lucas M review */}
        <section className="py-10 bg-fence-green/10 border-y border-fence-green/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-fence-yellow text-fence-yellow" />)}
            </div>
            <blockquote className="font-body italic text-lg text-fence-black/80 leading-relaxed mb-4">
              "Little late on the review, but we had a great experience with the install of our black chain link fence. Highly recommend."
            </blockquote>
            <cite className="font-headline text-sm uppercase tracking-widest text-fence-red not-italic">Lucas M. — Local Guide · Google Review</cite>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="fence-section-label">Find Us</p>
              <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black">Our Locations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  name: "Boiling Springs",
                  address: "407 E College Ave, Boiling Springs, NC 28017",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.12!2d-81.668!3d35.2551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE1JzE4LjQiTiA4McKwNDAnMDQuOCJX!5e0!3m2!1sen!2sus!4v1",
                },
                {
                  name: "Shelby",
                  address: "366 E College Ave, Shelby, NC 28152",
                  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.0!2d-81.539!3d35.2901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE3JzI0LjQiTiA4McKwMzInMjQuNCJX!5e0!3m2!1sen!2sus!4v1",
                },
              ].map((loc) => (
                <div key={loc.name} className="fence-card overflow-hidden">
                  <div className="bg-fence-black py-3 px-5">
                    <h3 className="font-headline text-base uppercase tracking-wider text-fence-yellow">{loc.name} Location</h3>
                  </div>
                  <iframe
                    title={`${loc.name} map`}
                    src={loc.mapSrc}
                    width="100%"
                    height="220"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-5">
                    <div className="flex items-start gap-2.5 mb-2">
                      <MapPin size={16} className="text-fence-red mt-0.5 flex-shrink-0" />
                      <p className="font-body text-sm text-fence-gray">{loc.address}</p>
                    </div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Phone size={16} className="text-fence-red flex-shrink-0" />
                      <a href="tel:7044345011" className="font-body text-sm text-fence-black hover:text-fence-red transition-colors">(704) 434-5011</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock size={16} className="text-fence-red flex-shrink-0" />
                      <p className="font-body text-sm text-fence-gray">Mon–Fri: 8:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-fence-yellow border-y-2 border-fence-black text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black mb-3">
              Free Estimates. Honest Prices. Fences That Last.
            </h2>
            <p className="font-body text-fence-black/70 mb-7">
              Give us a call or stop by the shop in Boiling Springs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7044345011" className="btn-black text-base px-8 py-4 flex items-center gap-2 justify-center">
                <Phone size={17} /> (704) 434-5011
              </a>
              <Link to="/contact" className="btn-red text-base px-8 py-4 text-center">
                Request Estimate Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HamrickFooter />
    </div>
  );
};

export default About;
