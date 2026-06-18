import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Award, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema, faqSchema } from "@/data/structuredData";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import aiBackdrop from "@/assets/ai-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";
import daveMascotHappier from "@/assets/dave-mascot-happier.png";
import daveMascotPlanting from "@/assets/dave-mascot-planting.png";
import contractorInnovation from "@/assets/contractor-innovation.jpg";

const About = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://www.studiosbydave.com" },
    { name: "About Us", url: "https://www.studiosbydave.com/about" }
  ]);

  return (
    <div className="min-h-screen bg-luxury-bg lg:scale-[0.95] lg:origin-top transition-transform duration-500">
      <SimpleSEO
        title="About Studios by Dave - Web Design & Digital Marketing Experts"
        description="Learn about Studios by Dave, your trusted partner for web design, SEO, AI automations, and branding. Specialized in helping roofing contractors, landscaping companies, and solar installers grow their business online."
        keywords="about studiosbydave, web design company, digital marketing experts, contractor specialists, north carolina web design, local business marketing"
        structuredData={[breadcrumbs, faqSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-luxury-bg noise-overlay flex items-center overflow-hidden">
        {/* Tie Dye Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20 contrast-125 brightness-75 scale-110 blur-[2px]"
          style={{
            backgroundImage: 'url("/assets/tie dye_3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ About Us</div>
            <h1 className="display-heading text-luxury-text-primary text-5xl lg:text-6xl mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              About{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Us
              </span>
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto mb-10">
            Helping local business owners like YOU turn online visitors into loyal customers through strategic digital marketing and web development.
          </p>
          <Link to="/contact#get-in-touch">
            <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <span className="relative z-10">Start Building Together</span>
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Our Mission</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl mb-6">Our Mission</h2>
            <p className="font-body text-luxury-text-secondary text-xl max-w-4xl mx-auto">
              At Studios by Dave, we specialize in empowering local businesses with cutting-edge digital solutions.
              We focus on roofing contractors, landscaping companies, and solar panel installers, helping them 
              reach their full potential through professional web design, powerful SEO, memorable branding, 
              and innovative AI automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Local Focus",
                description: "We understand local businesses and their unique challenges",
                backdrop: webDesignBackdrop
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of helping businesses grow their online presence",
                backdrop: brandingBackdrop
              },
              {
                icon: Target,
                title: "Targeted Solutions",
                description: "Customized strategies for contractors and service businesses",
                backdrop: googleBackdrop
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Cutting-edge AI and technology to give you the competitive edge",
                backdrop: aiBackdrop
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="luxury-card rounded-xl p-6 hover:border-luxury-royal-blue/50 transition-all relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `url(${value.backdrop})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 bg-luxury-lime/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                      <IconComponent size={32} className="text-luxury-lime relative z-10" />
                    </div>
                    <h3 className="display-heading text-luxury-text-primary text-xl font-bold group-hover:text-luxury-royal-blue transition-colors">{value.title}</h3>
                    <p className="font-body text-luxury-text-secondary text-base mt-2">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Dave Section */}
      <section className="py-32 relative bg-luxury-bg">
        {/* Layered Embossed Backgrounds */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${webDesignBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${brandingBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${aiBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${googleBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="section-eyebrow mb-4">✦ Meet Dave</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl mb-12">Meet Dave</h2>
            <div className="max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/d08deff8-3748-4ab1-be7c-1f0aa5062b8b.png" 
                alt="David Richardson - Founder and Lead Developer at Studios by Dave, web design expert and digital marketing specialist for contractors"
                className="w-80 h-auto mx-auto mb-4 shadow-lg rounded-lg"
                loading="lazy"
                decoding="async"
                width="320"
                height="400"
              />
              <p className="display-heading text-luxury-text-primary text-2xl font-semibold mb-6">"Dave" David Richardson</p>
              <p className="font-body text-luxury-text-secondary text-xl italic max-w-4xl mx-auto leading-relaxed">
                "Dave" David Richardson is a seasoned-long veteran in the various fields of Technology. He attended The University of North Carolina at Charlotte in 1997 and transferred to ECPI College of Technology in 2001 where he earned President of the National Vocational Technical Honor Society along with his College Degree. He then ventured into various service positions, one being Broadband Specialist/Installer with Shelby's own Computer Connections Inc. "Hey Eddie! Hi Lynne!" 😄 And then eventually proceeded to become Network Engineer at several private IT Firms. Local firms all the way to the deserts of Las Vegas, NV. David is also a life long musician that started playing music at the age of 8. He took to the love of recording music starting back at the turn of 1999-2000 and continued this craft on the side of work for nearly over 3 decades. Eventually coined his own status of Audio Mastering Engineer. "Dave" has always had a love for building websites and learning code and has taken this road full on as a Web Designer/Developer. Here at Studios by Dave we wanna see you succeed. Because when our clients are happy, Everybody is Happy! 😁
              </p>
              <div className="mt-8">
                <img
                  src="/assets/sbd yard sign1.png"
                  alt="Studios by Dave yard sign showcasing local business branding"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={daveMascotHappier}
                alt="Dave and the Studios by Dave mascot asking how to make clients happier today"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
                width="512"
                height="384"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="section-eyebrow mb-4">✦ Our Philosophy</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl mb-8">
                Our Philosophy
              </h2>
              <p className="font-body text-luxury-text-secondary text-xl mb-6">
                Every day, we wake up asking ourselves one simple question: "How can we make our clients more money today?"
              </p>
              <p className="font-body text-luxury-text-secondary text-lg">
                This isn't just a catchy phrase - Your success is our success,
                and we're committed to delivering results that directly impact your bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Innovation Image */}
      <section className="py-12 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              <img
                src={contractorInnovation}
                alt="Contractor innovation and digital transformation"
                className="w-full rounded-full shadow-lg"
                loading="lazy"
                decoding="async"
                width="1200"
                height="600"
                style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow mb-4">✦ What We Do</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl mb-8">
                What We Do
              </h2>
              <div className="space-y-6">
                {[
                  "Professional web design that converts visitors into customers",
                  "Search engine optimization to dominate local search results",
                  "Logo design and complete branding packages",
                  "Google My Business and review optimization",
                  "Cutting-edge AI automations to streamline your business",
                  "Custom solutions tailored to contractor businesses"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-luxury-lime w-6 h-6 flex-shrink-0" />
                    <p className="font-body text-luxury-text-secondary text-lg">{service}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <img 
                  src={daveMascotPlanting}
                  alt="Dave and the Studios by Dave mascot planting a tree together"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <p className="text-center text-sm text-luxury-text-secondary mt-3 italic font-body">
                  Dave has taken an actual love for landscaping itself!
                </p>
              </div>

            </div>
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-luxury-lime to-luxury-royal-blue rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="/assets/dave_1.jpg" 
                  alt="Dave working on site" 
                  className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              
              <div className="luxury-card rounded-2xl p-8 text-center">
                <h3 className="display-heading text-luxury-text-primary text-2xl font-bold mb-4">Ready to Build Something GREAT?</h3>
                <p className="font-body text-luxury-text-secondary mb-6">
                  Let's work together to unlock your business's full potential and create something amazing.
                </p>
                <Link to="/contact#get-in-touch" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                    Let's Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Mascot Section */}
      <section className="py-20 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block animate-bounce-slow">
            <img 
              src="/assets/promos/logo-mascot-about.png" 
              alt="Studios by Dave mascot and Dave high five" 
              className="w-80 h-80 object-contain drop-shadow-lg"
            />
          </div>
          <p className="font-body text-luxury-text-secondary text-xl mt-8 max-w-2xl mx-auto">
            Together, we're building something great for your business!
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-32 bg-luxury-surface border-y border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow mb-4">✦ Core Values</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl mb-6">Our Core Values</h2>
            <p className="font-body text-luxury-text-secondary text-xl max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Studios by Dave.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Value",
                description: "We deliver exceptional results that exceed your investment, ensuring every dollar spent generates meaningful returns for your business.",
                backdrop: webDesignBackdrop
              },
              {
                title: "Integrity",
                description: "We operate with complete honesty and transparency, building trust through consistent actions and reliable communication.",
                backdrop: brandingBackdrop
              },
              {
                title: "Trust",
                description: "We earn your confidence through proven expertise, dependable service, and a commitment to your long-term success.",
                backdrop: googleBackdrop
              }
            ].map((value, index) => (
              <div key={index} className="luxury-card rounded-xl p-6 text-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `url(${value.backdrop})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
                    mixBlendMode: 'multiply'
                  }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-luxury-lime/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-luxury-lime" />
                  </div>
                  <h3 className="display-heading text-luxury-text-primary text-2xl font-bold">{value.title}</h3>
                  <p className="font-body text-luxury-text-secondary text-base leading-relaxed mt-2">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Steeple Image */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-purple to-luxury-royal-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/assets/steeple_1.jpg" 
                alt="Local landmark steeple representing our community values" 
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow mb-4">✦ Why Us</div>
          <h2 className="display-heading text-luxury-text-primary text-4xl mb-16">
            Why Choose Studios by Dave?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "We specialize in contractors and understand your business inside and out. From roofing to landscaping to solar, we know what works.",
                features: ["Contractor-focused design", "Industry best practices", "Proven conversion strategies"]
              },
              {
                title: "Complete Solutions",
                description: "Everything you need under one roof. No need to work with multiple agencies - we handle it all from web design to AI automation.",
                features: ["Web design & development", "SEO & Google optimization", "Branding & AI solutions"]
              },
              {
                title: "Results-Driven",
                description: "We're not just building websites - we're building your business. Every solution is designed to generate leads and increase revenue.",
                features: ["Lead generation focus", "ROI-driven strategies", "Measurable results"]
              }
            ].map((reason, index) => (
              <div key={index} className="luxury-card rounded-xl p-6 text-left">
                <div className="mb-4">
                  <h3 className="display-heading text-luxury-royal-blue text-3xl font-bold">{reason.title}</h3>
                  <p className="font-body text-luxury-text-secondary text-lg mt-2">{reason.description}</p>
                </div>
                <ul className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                      <span className="font-body text-luxury-text-secondary text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;