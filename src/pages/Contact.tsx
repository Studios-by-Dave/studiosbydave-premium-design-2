import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle, Mail, Star } from "lucide-react";
import HamrickNav from "@/components/hamrick/HamrickNav";
import HamrickFooter from "@/components/hamrick/HamrickFooter";

type FormData = {
  name: string;
  phone: string;
  email: string;
  fenceType: string;
  address: string;
  details: string;
};

const fenceTypes = [
  "Wood Fencing",
  "Vinyl Fencing",
  "Chain Link",
  "Metal / Ornamental",
  "Farm & Agricultural",
  "Deck Construction",
  "Gate Installation",
  "Fence Repair",
  "Other / Not Sure",
];

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    fenceType: "",
    address: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission — replace with real backend/Supabase call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-fence-cream">
      <HamrickNav />

      <main>
        {/* Header */}
        <section className="bg-fence-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="fence-section-label text-fence-yellow mb-2">Get In Touch</p>
            <h1 className="font-headline text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
              Free Estimate
            </h1>
            <p className="font-body text-fence-cream/70 max-w-xl leading-relaxed">
              Call us at <a href="tel:7044345011" className="text-fence-yellow hover:underline">(704) 434-5011</a> or fill out the form below. We'll get back to you quickly with a free, no-obligation quote.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16" id="get-in-touch">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact Form */}
              <div>
                <h2 className="font-headline text-3xl uppercase tracking-tight text-fence-black mb-7">
                  Request a Free Estimate
                </h2>

                {submitted ? (
                  <div className="fence-card p-10 text-center border-2 border-fence-green">
                    <CheckCircle size={48} className="text-fence-green mx-auto mb-4" />
                    <h3 className="font-headline text-2xl uppercase tracking-wide text-fence-black mb-3">
                      Request Received!
                    </h3>
                    <p className="font-body text-fence-gray leading-relaxed mb-5">
                      Thank you — we'll be in touch shortly to schedule your free estimate. If you need immediate assistance, call us at (704) 434-5011.
                    </p>
                    <a href="tel:7044345011" className="btn-yellow text-sm px-6 py-3 inline-flex items-center gap-2">
                      <Phone size={15} /> Call Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block font-headline text-sm uppercase tracking-wider text-fence-black mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border-2 border-fence-black/20 rounded px-4 py-3 font-body text-sm text-fence-black bg-white focus:outline-none focus:border-fence-yellow transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-headline text-sm uppercase tracking-wider text-fence-black mb-1.5">
                          Phone *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border-2 border-fence-black/20 rounded px-4 py-3 font-body text-sm text-fence-black bg-white focus:outline-none focus:border-fence-yellow transition-colors"
                          placeholder="(704) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-headline text-sm uppercase tracking-wider text-fence-black mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border-2 border-fence-black/20 rounded px-4 py-3 font-body text-sm text-fence-black bg-white focus:outline-none focus:border-fence-yellow transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="fenceType" className="block font-headline text-sm uppercase tracking-wider text-fence-black mb-1.5">
                        Fence Type *
                      </label>
                      <select
                        id="fenceType"
                        name="fenceType"
                        required
                        value={form.fenceType}
                        onChange={handleChange}
                        className="w-full border-2 border-fence-black/20 rounded px-4 py-3 font-body text-sm text-fence-black bg-white focus:outline-none focus:border-fence-yellow transition-colors"
                      >
                        <option value="">Select fence type...</option>
                        {fenceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="address" className="block font-headline text-sm uppercase tracking-wider text-fence-black mb-1.5">
                        Project Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full border-2 border-fence-black/20 rounded px-4 py-3 font-body text-sm text-fence-black bg-white focus:outline-none focus:border-fence-yellow transition-colors"
                        placeholder="Street address, city, NC"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="block font-headline text-sm uppercase tracking-wider text-fence-black mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={5}
                        value={form.details}
                        onChange={handleChange}
                        className="w-full border-2 border-fence-black/20 rounded px-4 py-3 font-body text-sm text-fence-black bg-white focus:outline-none focus:border-fence-yellow transition-colors resize-none"
                        placeholder="Tell us about your project — approximate fence length, height, style preferences, repair needed, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-yellow w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Submit Free Estimate Request"}
                    </button>
                    <p className="font-body text-xs text-fence-gray text-center">
                      No spam. We'll only contact you about your project.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Click to call */}
                <div className="sign-banner p-7 text-center">
                  <p className="sign-text text-sm tracking-widest mb-2">Fastest Response</p>
                  <a
                    href="tel:7044345011"
                    className="font-headline text-4xl lg:text-5xl uppercase tracking-wider text-fence-black hover:text-fence-red transition-colors block mb-2"
                  >
                    (704) 434-5011
                  </a>
                  <p className="font-body text-sm text-fence-black/70">Monday–Friday · 8:00 AM – 5:00 PM</p>
                </div>

                {/* Locations */}
                <div className="space-y-4">
                  {[
                    { name: "Boiling Springs", addr: "407 E College Ave", city: "Boiling Springs, NC 28017" },
                    { name: "Shelby", addr: "366 E College Ave", city: "Shelby, NC 28152" },
                  ].map((loc) => (
                    <div key={loc.name} className="fence-card p-5">
                      <h3 className="font-headline text-base uppercase tracking-wide text-fence-black mb-3">{loc.name} Location</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2.5 text-fence-gray">
                          <MapPin size={15} className="mt-0.5 flex-shrink-0 text-fence-red" />
                          <div>
                            <p className="font-body text-sm">{loc.addr}</p>
                            <p className="font-body text-sm">{loc.city}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 text-fence-gray">
                          <Clock size={15} className="flex-shrink-0 text-fence-red" />
                          <p className="font-body text-sm">Mon–Fri: 8:00 AM – 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mail */}
                <div className="flex items-center gap-3 text-fence-gray">
                  <Mail size={16} className="text-fence-red flex-shrink-0" />
                  <p className="font-body text-sm">We respond to online requests within 1 business day.</p>
                </div>

                {/* Review */}
                <div className="fence-card p-6 bg-fence-cream/60">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-fence-yellow text-fence-yellow" />)}
                  </div>
                  <blockquote className="font-body italic text-sm text-fence-gray leading-relaxed mb-3">
                    "Their prices were much lower than anywhere else and they did awesome work. They were quick and clean, and easy to communicate with."
                  </blockquote>
                  <cite className="font-headline text-xs uppercase tracking-widest text-fence-red not-italic">Brittany Gunn — Verified Customer</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-4 bg-fence-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <iframe
              title="Hamrick Fence Co. — Boiling Springs"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361.97!2d-81.668!3d35.255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885856b2c9e2ab13%3A0x6ceb0c4d15af5d9!2sBoiling+Springs%2C+NC!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="340"
              style={{ border: 0, display: "block", borderRadius: "0.5rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-2 border-fence-black/10"
            />
          </div>
        </section>
      </main>

      <HamrickFooter />
    </div>
  );
};

export default Contact;
