import { Link } from "react-router-dom";
import { Phone, MapPin, CheckCircle } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

const serviceAreaTowns = [
  { name: "Boiling Springs", county: "Cleveland County", primary: true },
  { name: "Shelby", county: "Cleveland County", primary: true },
  { name: "Kings Mountain", county: "Cleveland County", primary: false },
  { name: "Fallston", county: "Cleveland County", primary: false },
  { name: "Lawndale", county: "Cleveland County", primary: false },
  { name: "Mooresboro", county: "Cleveland County", primary: false },
  { name: "Polkville", county: "Cleveland County", primary: false },
  { name: "Earl", county: "Cleveland County", primary: false },
  { name: "Gastonia", county: "Gaston County", primary: false },
  { name: "Bessemer City", county: "Gaston County", primary: false },
  { name: "Cherryville", county: "Gaston County", primary: false },
  { name: "Gaffney", county: "Cherokee County, SC", primary: false },
];

const ServiceArea = () => {
  return (
    <div className="min-h-screen bg-fence-cream">
      <HamrickNav />

      <main>
        {/* Header */}
        <section className="bg-fence-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="fence-section-label text-fence-yellow mb-2">Where We Work</p>
            <h1 className="font-headline text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Service Area
            </h1>
            <p className="font-body text-fence-cream/70 max-w-xl leading-relaxed">
              Hamrick Fence Co. serves Boiling Springs, Shelby, and the surrounding Cleveland County communities. We also travel to Gaston County and parts of South Carolina.
            </p>
          </div>
        </section>

        {/* Map + Towns */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Map embed */}
              <div className="rounded-lg overflow-hidden border-2 border-fence-black/10 shadow-md">
                <div className="bg-fence-black py-3 px-4">
                  <p className="font-headline text-sm uppercase tracking-wider text-fence-yellow flex items-center gap-2">
                    <MapPin size={15} /> Our Locations
                  </p>
                </div>
                <iframe
                  title="Hamrick Fence Co. Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105083.17937895498!2d-81.7378!3d35.2551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885856b2c9e2ab13%3A0x6ceb0c4d15af5d9!2sBoiling+Springs%2C+NC!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Towns List */}
              <div>
                <h2 className="font-headline text-3xl uppercase tracking-tight text-fence-black mb-6">
                  Towns We Serve
                </h2>

                <div className="mb-6">
                  <h3 className="font-headline text-base uppercase tracking-wider text-fence-red mb-3">Primary Service Area</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreaTowns
                      .filter((t) => t.primary)
                      .map((town) => (
                        <div key={town.name} className="flex items-center gap-2 bg-fence-yellow/20 border border-fence-yellow/50 rounded px-3 py-2">
                          <MapPin size={14} className="text-fence-red flex-shrink-0" />
                          <div>
                            <p className="font-headline text-sm uppercase tracking-wide text-fence-black">{town.name}</p>
                            <p className="font-body text-xs text-fence-gray">{town.county}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-headline text-base uppercase tracking-wider text-fence-red mb-3">Additional Areas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreaTowns
                      .filter((t) => !t.primary)
                      .map((town) => (
                        <div key={town.name} className="flex items-center gap-2 bg-white border border-fence-black/10 rounded px-3 py-2">
                          <CheckCircle size={14} className="text-fence-green flex-shrink-0" />
                          <div>
                            <p className="font-body text-sm font-medium text-fence-black">{town.name}</p>
                            <p className="font-body text-xs text-fence-gray">{town.county}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="fence-card p-5 border-l-4 border-l-fence-yellow">
                  <p className="font-headline text-base uppercase tracking-wide text-fence-black mb-2">Not sure if we cover your area?</p>
                  <p className="font-body text-sm text-fence-gray mb-4">
                    Give us a call — we'll let you know if we can make it out and provide a free estimate.
                  </p>
                  <a href="tel:7044345011" className="btn-yellow text-sm px-5 py-2.5 flex items-center gap-2 w-fit">
                    <Phone size={15} /> (704) 434-5011
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl uppercase tracking-tight text-fence-black text-center mb-10">
              Our Locations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Boiling Springs Location",
                  address: "407 E College Ave",
                  city: "Boiling Springs, NC 28017",
                  mapUrl: "https://maps.google.com/?q=407+E+College+Ave+Boiling+Springs+NC",
                  primary: true,
                },
                {
                  name: "Shelby Location",
                  address: "366 E College Ave",
                  city: "Shelby, NC 28152",
                  mapUrl: "https://maps.google.com/?q=366+E+College+Ave+Shelby+NC",
                  primary: false,
                },
              ].map((loc) => (
                <div key={loc.name} className="fence-card p-7">
                  {loc.primary && (
                    <span className="sign-banner inline-block px-2 py-0.5 text-xs sign-text mb-3">Main Location</span>
                  )}
                  <h3 className="font-headline text-xl uppercase tracking-wide text-fence-black mb-3">{loc.name}</h3>
                  <div className="flex items-start gap-3 mb-4 text-fence-gray">
                    <MapPin size={18} className="mt-0.5 flex-shrink-0 text-fence-red" />
                    <div>
                      <p className="font-body text-sm">{loc.address}</p>
                      <p className="font-body text-sm">{loc.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-5 text-fence-gray">
                    <Phone size={18} className="mt-0.5 flex-shrink-0 text-fence-red" />
                    <a href="tel:7044345011" className="font-headline text-base tracking-wide text-fence-black hover:text-fence-red transition-colors">
                      (704) 434-5011
                    </a>
                  </div>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yellow text-sm px-5 py-2.5 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-fence-cream text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-headline text-3xl uppercase tracking-tight text-fence-black mb-4">
              Serving Cleveland County Since 2011
            </h2>
            <p className="font-body text-fence-gray mb-8">
              We've been building fences in this community for over 13 years. Call us for a free, no-pressure estimate.
            </p>
            <Link to="/contact" className="btn-red text-base px-10 py-4 inline-block">
              Request a Free Estimate
            </Link>
          </div>
        </section>
      </main>

      <HamrickFooter />
    </div>
  );
};

export default ServiceArea;
