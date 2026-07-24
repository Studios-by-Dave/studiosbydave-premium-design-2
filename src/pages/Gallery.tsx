import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Camera } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

type FilterKey = "all" | "wood" | "vinyl" | "chain-link" | "metal" | "farm" | "deck";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "wood", label: "Wood" },
  { key: "vinyl", label: "Vinyl" },
  { key: "chain-link", label: "Chain Link" },
  { key: "metal", label: "Metal / Ornamental" },
  { key: "farm", label: "Farm / Ranch" },
  { key: "deck", label: "Decks & Gates" },
];

// Placeholder gallery items — replace with real photos when client provides them
const galleryItems = [
  { id: 1, type: "wood" as FilterKey, title: "6ft Privacy Fence", location: "Boiling Springs, NC", bg: "#8B5E3C", secondary: "#6B4424" },
  { id: 2, type: "chain-link" as FilterKey, title: "Black Vinyl Chain Link", location: "Shelby, NC", bg: "#374151", secondary: "#1F2937" },
  { id: 3, type: "vinyl" as FilterKey, title: "White Privacy Vinyl", location: "Kings Mountain, NC", bg: "#D1D5DB", secondary: "#9CA3AF" },
  { id: 4, type: "farm" as FilterKey, title: "Cattle Wire Fence", location: "Cleveland County, NC", bg: "#6B8E5A", secondary: "#4A6B3A" },
  { id: 5, type: "wood" as FilterKey, title: "Picket Fence", location: "Boiling Springs, NC", bg: "#A07855", secondary: "#8B5E3C" },
  { id: 6, type: "metal" as FilterKey, title: "Ornamental Aluminum Pool Fence", location: "Shelby, NC", bg: "#374151", secondary: "#111827" },
  { id: 7, type: "deck" as FilterKey, title: "Pressure-Treated Wood Deck", location: "Boiling Springs, NC", bg: "#8B5E3C", secondary: "#5C3D1E" },
  { id: 8, type: "wood" as FilterKey, title: "Split-Rail Fence", location: "Cleveland County, NC", bg: "#92673D", secondary: "#6B4424" },
  { id: 9, type: "vinyl" as FilterKey, title: "Privacy Vinyl — Tan", location: "Gastonia, NC", bg: "#C4A882", secondary: "#A08060" },
  { id: 10, type: "chain-link" as FilterKey, title: "Commercial Chain Link", location: "Shelby, NC", bg: "#4B5563", secondary: "#374151" },
  { id: 11, type: "farm" as FilterKey, title: "Horse Board Rail Fence", location: "Cleveland County, NC", bg: "#7A5230", secondary: "#5C3D1E" },
  { id: 12, type: "deck" as FilterKey, title: "Driveway Gate", location: "Boiling Springs, NC", bg: "#374151", secondary: "#1F2937" },
];

// SVG fence illustration for placeholder
const FencePlaceholder = ({ bg, secondary, type }: { bg: string; secondary: string; type: FilterKey }) => (
  <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
    {/* Sky / background */}
    <rect width="300" height="200" fill={bg} />
    {/* Ground */}
    <rect x="0" y="150" width="300" height="50" fill={secondary} opacity="0.6" />

    {/* Fence elements based on type */}
    {(type === "wood" || type === "vinyl") && (
      <>
        {[20, 60, 100, 140, 180, 220, 260].map((x) => (
          <g key={x}>
            <rect x={x} y="60" width="16" height="100" rx="2" fill={secondary} opacity="0.9" />
            <polygon points={`${x},60 ${x + 8},46 ${x + 16},60`} fill={secondary} opacity="0.9" />
          </g>
        ))}
        <rect x="10" y="88" width="280" height="10" rx="2" fill={secondary} opacity="0.7" />
        <rect x="10" y="118" width="280" height="10" rx="2" fill={secondary} opacity="0.7" />
      </>
    )}
    {type === "chain-link" && (
      <>
        {[10, 150, 290].map((x) => (
          <rect key={x} x={x - 4} y="50" width="8" height="100" rx="2" fill={secondary} opacity="0.9" />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <g key={i}>
            <path
              d={`M ${i * 22} 80 L ${i * 22 + 11} 100 L ${i * 22} 120`}
              stroke={secondary} strokeWidth="2" fill="none" opacity="0.6"
            />
            <path
              d={`M ${i * 22 + 11} 60 L ${i * 22 + 22} 80 L ${i * 22 + 11} 100`}
              stroke={secondary} strokeWidth="2" fill="none" opacity="0.6"
            />
          </g>
        ))}
        <rect x="0" y="54" width="300" height="6" rx="2" fill={secondary} opacity="0.8" />
      </>
    )}
    {(type === "metal") && (
      <>
        {[20, 65, 110, 155, 200, 245].map((x) => (
          <g key={x}>
            <rect x={x} y="55" width="8" height="100" rx="2" fill={secondary} opacity="0.9" />
            <circle cx={x + 4} cy="52" r="5" fill={secondary} opacity="0.9" />
          </g>
        ))}
        <rect x="10" y="80" width="280" height="7" rx="2" fill={secondary} opacity="0.7" />
        <rect x="10" y="110" width="280" height="7" rx="2" fill={secondary} opacity="0.7" />
      </>
    )}
    {type === "farm" && (
      <>
        {[15, 110, 200, 285].map((x) => (
          <rect key={x} x={x - 5} y="55" width="10" height="110" rx="2" fill={secondary} opacity="0.9" />
        ))}
        {[75, 100, 120, 140].map((y) => (
          <rect key={y} x="10" y={y} width="280" height="5" rx="1.5" fill={secondary} opacity="0.7" />
        ))}
      </>
    )}
    {type === "deck" && (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={i * 30} y="80" width="26" height="80" rx="1" fill={secondary} opacity="0.7" />
        ))}
        <rect x="0" y="78" width="300" height="8" rx="2" fill={secondary} opacity="0.9" />
      </>
    )}

    {/* Label overlay */}
    <rect x="0" y="160" width="300" height="40" fill="rgba(0,0,0,0.45)" />
  </svg>
);

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-fence-cream">
      <HamrickNav />

      <main>
        {/* Header */}
        <section className="bg-fence-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="fence-section-label text-fence-yellow mb-2">Our Work</p>
            <h1 className="font-headline text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Project Gallery
            </h1>
            <p className="font-body text-fence-cream/70 max-w-xl leading-relaxed">
              Browse completed fence installations across Boiling Springs, Shelby, and Cleveland County.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b border-fence-black/10 sticky top-20 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex-shrink-0 font-headline text-sm uppercase tracking-wider px-4 py-2 rounded transition-all duration-200 border-2 ${
                    activeFilter === f.key
                      ? "bg-fence-yellow border-fence-black text-fence-black"
                      : "bg-white border-fence-black/20 text-fence-gray hover:border-fence-black/50 hover:text-fence-black"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <p className="text-center text-fence-gray py-20 font-body">No projects in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((item) => (
                  <div key={item.id} className="fence-card overflow-hidden group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <FencePlaceholder bg={item.bg} secondary={item.secondary} type={item.type} />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <Camera size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline text-base uppercase tracking-wide text-fence-black">{item.title}</h3>
                      <p className="font-body text-xs text-fence-gray mt-1">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Photo submission note */}
            <div className="mt-12 fence-card p-8 text-center border-2 border-dashed border-fence-yellow">
              <Camera size={32} className="mx-auto text-fence-yellow mb-3" />
              <h3 className="font-headline text-xl uppercase tracking-wide text-fence-black mb-2">More Photos Coming Soon</h3>
              <p className="font-body text-sm text-fence-gray max-w-md mx-auto">
                We're adding real project photos regularly. Have a Hamrick Fence installation? Share your photos with us!
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-fence-black text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-headline text-4xl uppercase tracking-tight text-white mb-4">
              Like What You See?
            </h2>
            <p className="font-body text-fence-cream/70 mb-8">
              Call us today for a free estimate on your fencing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7044345011" className="btn-yellow text-base px-8 py-4 flex items-center gap-2 justify-center">
                <Phone size={17} /> (704) 434-5011
              </a>
              <Link to="/contact" className="btn-red text-base px-8 py-4 text-center">
                Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HamrickFooter />
    </div>
  );
};

export default Gallery;
