import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, Star } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

const serviceDetails = [
  {
    id: "wood",
    title: "Wood Fencing",
    subtitle: "Privacy · Picket · Split-Rail · Farm",
    description:
      "Nothing beats the natural warmth and character of real wood fencing. We install privacy fences, classic picket styles, split-rail for rural properties, and heavy-duty farm/ranch fencing across Cleveland County.",
    features: [
      "6-foot privacy fence for full yard enclosure",
      "Picket fencing for curb appeal",
      "Split-rail for pastures and property lines",
      "Pressure-treated lumber for longevity",
      "Custom heights and styles available",
    ],
    accent: "#8B5E3C",
  },
  {
    id: "vinyl",
    title: "Vinyl Fencing",
    subtitle: "Low Maintenance · Lifetime Durability",
    description:
      "Vinyl fencing gives you the clean look of painted wood without the upkeep. No painting, no staining, no rotting. It's the perfect choice for busy homeowners who want a great-looking fence that stays looking great.",
    features: [
      "Never needs painting or staining",
      "Resistant to rot, rust, and insects",
      "Available in white, tan, and wood-grain styles",
      "Privacy, semi-privacy, and picket profiles",
      "Lifetime warranty on many products",
    ],
    accent: "#6B7280",
  },
  {
    id: "chain-link",
    title: "Chain Link Fencing",
    subtitle: "Residential · Commercial · Vinyl-Coated",
    description:
      "Chain link is the go-to for security, pet containment, and affordable boundary fencing. We install galvanized and black vinyl-coated chain link for homes, businesses, and commercial properties.",
    features: [
      "Galvanized or black vinyl-coated options",
      "Residential yard and pet containment",
      "Commercial security perimeter fencing",
      "Various heights: 3ft to 12ft+",
      "Top rails and tension wire included",
    ],
    accent: "#4B5563",
  },
  {
    id: "metal",
    title: "Metal & Ornamental Fencing",
    subtitle: "Aluminum · Wrought Iron · Decorative",
    description:
      "Ornamental aluminum and wrought iron fencing adds elegance to any property while providing serious security. These styles are popular for pools, front yards, and commercial properties.",
    features: [
      "Powder-coated aluminum — rust-proof",
      "Pool code-compliant designs",
      "Decorative finials and styles",
      "Wrought iron for heavy-duty applications",
      "Custom gate packages available",
    ],
    accent: "#374151",
  },
  {
    id: "farm",
    title: "Farm & Agricultural Fencing",
    subtitle: "Cattle · Horse · High-Tensile · Split-Rail",
    description:
      "We understand what NC farmers and rural property owners need. From cattle wire to horse-safe board fencing, we build farm fences that hold up in the field and on the property line.",
    features: [
      "Barbed wire and woven wire options",
      "Horse board and rail fencing",
      "High-tensile electric fence systems",
      "Split-rail for property borders",
      "Large acreage quotes available",
    ],
    accent: "#6B8E5A",
  },
  {
    id: "decks-gates",
    title: "Decks & Gates",
    subtitle: "Custom Decks · Driveway Gates · Walk Gates",
    description:
      "Hamrick Fence also builds custom wood decks and installs gates of all types. Whether you need a new deck for entertaining or a driveway gate for security, we've got you covered.",
    features: [
      "Pressure-treated wood deck construction",
      "Driveway gates — manual and automatic-ready",
      "Walk gates for fence entrances",
      "Double gates for vehicle access",
      "Gate hardware and latches included",
    ],
    accent: "#B8321A",
  },
  {
    id: "repair",
    title: "Fence Repair",
    subtitle: "Storm Damage · Posts · Panels · Gates",
    description:
      "Got a fence that's seen better days? We handle repairs for all fence types — from replacing broken pickets and rotted posts to fixing gates and storm-damaged sections. Fast turnaround.",
    features: [
      "Storm and wind damage repairs",
      "Post replacement and re-setting",
      "Picket and panel replacement",
      "Gate realignment and hardware",
      "Same-week service available",
    ],
    accent: "#F4C430",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-fence-cream">
      <HamrickNav />

      <main>
        {/* Page Header */}
        <section className="bg-fence-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="fence-section-label text-fence-yellow mb-2">What We Offer</p>
            <h1 className="font-headline text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Fencing Services
            </h1>
            <p className="font-body text-fence-cream/70 max-w-xl leading-relaxed">
              From wood privacy fences to farm and agricultural fencing, we install and repair every type of fence in Cleveland County, NC.
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {serviceDetails.map((svc, idx) => (
              <div
                key={svc.id}
                id={svc.id}
                className={`rounded-lg overflow-hidden border-2 border-fence-black/10 bg-white flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Color accent block */}
                <div
                  className="lg:w-2 flex-shrink-0"
                  style={{ backgroundColor: svc.accent }}
                />
                <div className="flex-1 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <h2 className="font-headline text-3xl uppercase tracking-tight text-fence-black mb-1">{svc.title}</h2>
                      <p className="font-body text-sm text-fence-red uppercase tracking-widest mb-4">{svc.subtitle}</p>
                      <p className="font-body text-fence-gray leading-relaxed mb-5">{svc.description}</p>
                      <Link to="/contact" className="btn-yellow text-sm px-6 py-3 inline-flex items-center gap-2">
                        Get a Free Quote <ArrowRight size={15} />
                      </Link>
                    </div>
                    <div className="lg:w-72 flex-shrink-0">
                      <h3 className="font-headline text-base uppercase tracking-wider text-fence-black mb-3">Includes:</h3>
                      <ul className="space-y-2.5">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: svc.accent }} />
                            <span className="font-body text-sm text-fence-gray">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review — Kristina Santiago */}
        <section className="py-12 bg-fence-yellow border-y-2 border-fence-black">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-fence-black text-fence-black" />)}
            </div>
            <blockquote className="font-body italic text-lg text-fence-black/80 leading-relaxed mb-3">
              "You seriously cannot go wrong with this company. Our fence is beautiful, it's great for our dogs who love to be outside. We recently had a semi emergency situation and they came out and took care of us super quick."
            </blockquote>
            <cite className="font-headline text-sm uppercase tracking-widest text-fence-black not-italic">Kristina Santiago — Local Guide</cite>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-fence-cream text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-headline text-4xl uppercase tracking-tight text-fence-black mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-body text-fence-gray mb-8">
              Call us or submit your project details online. We'll get back to you fast with a free, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7044345011" className="btn-yellow text-base px-8 py-4 flex items-center gap-2 justify-center">
                <Phone size={17} /> (704) 434-5011
              </a>
              <Link to="/contact" className="btn-black text-base px-8 py-4 text-center">
                Free Estimate Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HamrickFooter />
    </div>
  );
};

export default Services;
