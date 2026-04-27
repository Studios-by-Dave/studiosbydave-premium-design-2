import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogArticle5 = () => {
  return (
    <div className="min-h-screen bg-stone-200">
      <SimpleSEO
        title="Driving Efficiency Forward: Spotlight on F&S Expedited LLC | Studios by Dave Blog"
        description="Meet F&S Expedited LLC — a Shelby NC-based interstate freight carrier delivering reliable, expedited logistics solutions for businesses across the United States."
        keywords="F&S Expedited LLC, expedited freight Shelby NC, logistics partner North Carolina, interstate freight carrier, trucking services Shelby"
        canonical="https://www.studiosbydave.com/blog/fs-expedited-llc-spotlight"
      />
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-8 font-serif transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Newspaper Article Container */}
          <article 
            className="relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, #f5f0e8 0%, #ebe5da 30%, #e8e2d6 70%, #e0d9cc 100%)`,
              boxShadow: `0 2px 20px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(0, 0, 0, 0.1)`,
            }}
          >
            {/* Paper texture overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Top Date Bar */}
            <div className="relative z-10 bg-stone-800 text-stone-100 py-1.5 px-4 md:px-8">
              <div className="flex justify-between items-center text-[10px] md:text-xs font-serif tracking-wide">
                <span>MARCH 2026</span>
                <span className="hidden md:block">SHELBY, NORTH CAROLINA</span>
                <span>PRICE: FREE</span>
              </div>
            </div>

            {/* Masthead */}
            <div className="relative z-10 border-b-2 border-stone-800 px-4 md:px-8 py-4">
              <h2 
                className="text-center font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-stone-900"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                THE STUDIOS CHRONICLE
              </h2>
              <div className="flex justify-center items-center gap-4 mt-2 text-[10px] md:text-xs text-stone-600 font-serif">
                <span>VOL. I</span>
                <span className="text-stone-400">•</span>
                <span>No. 5</span>
                <span className="text-stone-400">•</span>
                <span>ESTABLISHED 2024</span>
              </div>
            </div>

            {/* Section Headers Row */}
            <div className="relative z-10 grid grid-cols-3 border-b border-stone-400 text-center text-[10px] md:text-xs font-serif font-bold tracking-widest text-stone-700 bg-stone-100/50">
              <div className="py-2 border-r border-stone-400">LOGISTICS</div>
              <div className="py-2 border-r border-stone-400">LOCAL BUSINESS</div>
              <div className="py-2">PARTNER SPOTLIGHT</div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 p-4 md:p-8">
              {/* Main Headline */}
              <header className="border-b-4 border-double border-stone-800 pb-4 mb-6">
                <div className="text-center">
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-stone-500 font-serif mb-2">
                    — CLIENT SPOTLIGHT —
                  </p>
                  <h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-black text-stone-900 leading-tight mb-3"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    Driving Efficiency Forward:<br className="hidden md:block" /> Spotlight on F&S Expedited LLC
                  </h1>
                  <p className="text-sm md:text-lg text-stone-700 font-serif max-w-3xl mx-auto [font-style:oblique_4deg]">
                    Reliable, Fast, and Customer-Focused Logistics from Shelby, NC
                  </p>
                </div>
              </header>

              {/* Article Body - Multi Column */}
              <div className="md:grid md:grid-cols-12 md:gap-6">
                {/* Main Article - 8 columns */}
                <div className="md:col-span-8 border-r-0 md:border-r border-stone-300 md:pr-6">
                  {/* Drop Cap Lead */}
                  <p 
                    className="text-base md:text-lg leading-relaxed text-stone-800 mb-4 text-justify italic"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    <span className="float-left text-6xl md:text-7xl font-bold leading-none mr-2 mt-1 text-stone-900" style={{ fontFamily: "Georgia, serif" }}>I</span>
                    n today's fast-paced logistics landscape, businesses need more than just transportation—they need reliability, speed, and a partner they can trust. That's exactly what F&S Expedited LLC brings to the table.
                  </p>

                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-6 text-justify"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    As a growing name in the freight and logistics industry, F&S Expedited LLC is committed to delivering efficient, dependable, and customer-focused transportation solutions. Whether it's urgent shipments or routine freight needs, their team is equipped to handle it all with professionalism and precision.
                  </p>

                  {/* Who Is Section */}
                  <div className="border-t-2 border-b-2 border-stone-400 py-4 mb-6">
                    <h3 className="font-black text-xl md:text-2xl text-stone-900 mb-0 uppercase tracking-wide text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Who Is F&S Expedited LLC?
                    </h3>
                  </div>

                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-6 text-justify"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    F&S Expedited LLC is an active interstate freight carrier based in Shelby, North Carolina, providing transportation services across the United States. Their operation focuses on timely deliveries and maintaining high service standards, making them a reliable partner for businesses that depend on efficient supply chain movement.
                  </p>

                  {/* Services Section */}
                  <div className="border-t-2 border-b-2 border-stone-400 py-4 mb-6">
                    <h3 className="font-black text-xl md:text-2xl text-stone-900 mb-0 uppercase tracking-wide text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Services That Keep Your Business Moving
                    </h3>
                  </div>

                  <p 
                    className="text-base md:text-lg leading-relaxed text-stone-800 mb-4 text-justify italic"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    F&S Expedited LLC offers a range of logistics and transportation services designed to meet modern business demands. Their solutions are tailored to ensure flexibility, speed, and reliability.
                  </p>

                  {/* Services Grid */}
                  <div className="md:columns-2 md:gap-6 text-base md:text-lg leading-relaxed text-stone-800 italic" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    <div className="break-inside-avoid mb-4">
                      <h4 className="font-black text-base text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        🚛 Expedited Freight Services
                      </h4>
                      <p className="text-justify">
                        When time is critical, F&S Expedited LLC specializes in expedited shipping solutions that prioritize urgent deliveries. Businesses can rely on fast transit times without sacrificing safety or efficiency.
                      </p>
                    </div>

                    <div className="break-inside-avoid mb-4">
                      <h4 className="font-black text-base text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        📦 Trucking & Transportation
                      </h4>
                      <p className="text-justify">
                        From general freight to specialized loads, their trucking services are designed to move goods securely across regional and interstate routes. Their streamlined operations help ensure that shipments arrive on time and intact.
                      </p>
                    </div>

                    <div className="break-inside-avoid mb-4">
                      <h4 className="font-black text-base text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        🔄 Logistics Support
                      </h4>
                      <p className="text-justify">
                        Beyond transportation, F&S Expedited LLC supports businesses with logistics coordination, helping optimize delivery routes and improve overall supply chain efficiency.
                      </p>
                    </div>

                    <div className="break-inside-avoid mb-4">
                      <h4 className="font-black text-base text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        ⏱ Time-Sensitive Deliveries
                      </h4>
                      <p className="text-justify">
                        In industries where delays can be costly, their ability to handle time-sensitive shipments makes them a valuable partner for companies needing dependable turnaround times.
                      </p>
                    </div>
                  </div>

                  {/* Why Businesses Choose Section */}
                  <div className="border-t-2 border-b-2 border-stone-400 py-4 my-6">
                    <h3 className="font-black text-xl md:text-2xl text-stone-900 mb-0 uppercase tracking-wide text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Why Businesses Choose F&S Expedited LLC
                    </h3>
                  </div>

                  <p 
                    className="text-base md:text-lg leading-relaxed text-stone-800 mb-4 text-justify italic"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    What sets F&S Expedited LLC apart is their dedication to service quality and operational reliability. Their approach is built around:
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: "Consistency", desc: "Delivering on time, every time" },
                      { label: "Efficiency", desc: "Streamlined operations that reduce delays" },
                      { label: "Customer Focus", desc: "Tailored solutions based on client needs" },
                      { label: "Reliability", desc: "A dependable partner for long-term logistics support" },
                    ].map((item) => (
                      <div key={item.label} className="border border-stone-400 p-3 bg-stone-100/60">
                        <p className="font-black text-sm text-stone-900 uppercase tracking-wide" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{item.label}</p>
                        <p className="text-xs text-stone-700 mt-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p 
                    className="text-base md:text-lg leading-relaxed text-stone-800 mb-4 text-justify italic"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    In an industry where trust is everything, F&S Expedited LLC continues to build strong relationships by delivering results.
                  </p>

                  {/* Final Thoughts */}
                  <div className="border-t-2 border-b-2 border-stone-400 py-4 my-6">
                    <h3 className="font-black text-xl md:text-2xl text-stone-900 mb-0 uppercase tracking-wide text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Final Thoughts
                    </h3>
                  </div>

                  <p 
                    className="text-base md:text-lg leading-relaxed text-stone-800 mb-4 text-justify italic"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    As supply chains continue to evolve, companies like F&S Expedited LLC are playing a crucial role in keeping businesses running smoothly. Their commitment to timely delivery and customer satisfaction positions them as a strong contender in the expedited freight industry.
                  </p>

                  <p 
                    className="text-base md:text-lg leading-relaxed text-stone-800 mb-4 text-justify italic"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    For businesses seeking a dependable logistics partner, F&S Expedited LLC represents a smart, forward-moving choice.
                  </p>
                </div>

                {/* Sidebar - 4 columns */}
                <div className="md:col-span-4 mt-6 md:mt-0">
                  {/* Company Profile Box */}
                  <div className="border-2 border-stone-800 bg-stone-100/80 mb-4">
                    <div className="bg-stone-800 text-stone-100 py-1 px-3 text-center">
                      <span className="text-xs font-bold tracking-widest uppercase">Company Profile</span>
                    </div>
                    <div className="p-3">
                      <ul className="text-xs text-stone-700 leading-relaxed space-y-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        <li className="flex items-start gap-2">
                          <span className="text-stone-900 font-bold">📍</span>
                          <span><strong>Location:</strong> Shelby, North Carolina</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-stone-900 font-bold">🚛</span>
                          <span><strong>Type:</strong> Interstate Freight Carrier</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-stone-900 font-bold">🌎</span>
                          <span><strong>Coverage:</strong> United States</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-stone-900 font-bold">👤</span>
                          <span><strong>Owner:</strong> Joe Aldrich</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Core Values Box */}
                  <div className="border border-stone-400 bg-stone-50/50 mb-4">
                    <div className="border-b border-stone-400 py-1 px-3 text-center bg-stone-200/50">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">Core Values</span>
                    </div>
                    <div className="p-3 text-center space-y-2">
                      {["Reliability", "Speed", "Professionalism", "Customer Focus"].map((value) => (
                        <p key={value} className="text-sm font-bold text-stone-900" style={{ fontFamily: "Georgia, serif" }}>{value}</p>
                      ))}
                    </div>
                  </div>

                  {/* Editor's Note */}
                  <div className="border border-stone-400 bg-stone-50/50 mb-4">
                    <div className="border-b border-stone-400 py-1 px-3 text-center bg-stone-200/50">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">Editor's Note</span>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-stone-700 italic leading-relaxed text-justify" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        "We're proud to partner with Joe Aldrich and F&S Expedited LLC. Their dedication to quality logistics mirrors our own commitment to excellence for local businesses in Shelby and beyond."
                      </p>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="border-4 border-double border-stone-800 p-4 bg-stone-100/90 text-center">
                    <h4 className="font-black text-lg text-stone-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      VISIT F&S EXPEDITED LLC
                    </h4>
                    <p className="text-xs text-stone-700 mb-3" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Looking for a reliable logistics partner? Learn more about their services.
                    </p>
                    <a 
                      href="https://www.fs-expeditedllc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-stone-800 text-stone-100 px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-stone-700 transition-colors mb-3"
                    >
                      Visit Their Website
                    </a>
                    <div className="border-t border-stone-300 pt-3 mt-1">
                      <p className="text-[10px] text-stone-500 uppercase tracking-wide mb-2">Need a website like this?</p>
                      <Link 
                        to="/contact#get-in-touch"
                        className="inline-block border-2 border-stone-800 text-stone-900 px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-stone-800 hover:text-stone-100 transition-colors"
                      >
                        Contact Studios by Dave
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t-2 border-stone-700 mt-8 pt-4 text-center">
                <p className="text-stone-600 italic font-serif text-xs mb-1">
                  Proudly serving Shelby, NC and surrounding communities
                </p>
                <p className="text-stone-900 font-semibold font-serif text-xs">
                  🌐 Visit: <a href="https://www.studiosbydave.com" className="underline hover:text-stone-600 transition-colors">www.studiosbydave.com</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle5;
