import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import robotBg from "@/assets/robot-construction-bg.jpg";
import mascotPointing from "@/assets/mascot-pointing.png";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-luxury-bg noise-overlay overflow-hidden">
      {/* Radial Glow Effect */}
      <div className="absolute inset-0 radial-glow" />
      
      {/* Phone Number Display */}
      <div className="absolute top-8 right-8 z-30 hidden md:block">
        <div className="frosted-glass rounded-xl border border-white/6 px-8 py-5 relative">
          <div className="text-center">
            <p className="text-luxury-text-secondary font-medium mb-1 text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <Phone className="text-luxury-lime w-4 h-4" />
              Call Us Text Us
            </p>
            <a href="tel:+17044738188" className="font-display font-bold transition-colors duration-300 text-luxury-lime text-4xl hover:text-white">
              (704) 473-8188
            </a>
            <p className="text-luxury-text-secondary text-sm mt-1">We're here 24/7</p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="space-y-8 z-10 text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-luxury-surface border border-luxury-lime/30 px-4 py-2 rounded-full">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-luxury-lime text-luxury-lime" />)}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-luxury-lime">Trusted by 100+ Local Businesses</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="display-heading text-luxury-text-primary" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                We Don't Just Build You a <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">Website</span> or an <span className="text-luxury-lime">App</span>.
              </h1>
              <p className="font-body text-luxury-text-secondary leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                We build the <span className="text-luxury-lime font-semibold">online engine</span> that gets your business found, trusted, and hired!
              </p>
              <p className="font-body text-luxury-text-secondary/70 text-sm">
                Serving Shelby, Charlotte, Gastonia, Spartanburg, Asheville, and Raleigh
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {["Custom websites that convert visitors into customers", "SEO optimization to dominate local search results", "Quality custom digital assets tailored to your business"].map((benefit, index) => <div key={index} className="flex items-center space-x-3 text-luxury-text-primary">
                  <CheckCircle size={18} className="text-luxury-royal-blue flex-shrink-0" />
                  <span className="font-body text-sm">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact#get-in-touch">
                <Button className="group relative overflow-hidden bg-luxury-lime text-black hover:bg-luxury-lime/90 transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                  <span className="relative z-10">Get Started Today</span>    
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white/20 text-luxury-text-primary hover:bg-white/5 hover:border-luxury-royal-blue hover:text-luxury-royal-blue transition-all duration-300 px-8 py-6 text-sm font-semibold uppercase tracking-wider">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* DaveBot Chat Widget Promotion */}
            <div className="pt-2">
              <p className="text-luxury-text-secondary text-sm font-body">
                💬 Try our DaveBot chat widget! Click the bubble in the bottom-right corner for instant help.
              </p>
            </div>

          </div>

          {/* Right Column - Hero Image */}
          <div className="relative flex justify-center z-10">
            <div className="relative w-full lg:w-[115%] xl:w-[130%]">
              {/* Hero Image */}
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/6 relative">
              <img src="/lovable-uploads/hero-human-inside.png" alt="Human Inside - futuristic UFO-shaped device with robotic arms holding website screens hovering over a sunlit meadow, representing Studios by Dave connecting humanity through technology" className="w-full h-full object-cover object-center" fetchPriority="high" decoding="sync" loading="eager" width="1024" height="1024" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 700px" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/80 via-transparent to-transparent" />
                
                {/* Company Mascot in corner */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 z-20">
                  <img src="/lovable-uploads/8f46217d-91db-4458-96ee-0d61e8302830-optimized.jpg" alt="Studios by Dave AI-powered mascot delivering innovative web design, SEO, and digital marketing solutions for contractors" className="w-full h-full object-contain drop-shadow-lg" loading="lazy" decoding="async" width="112" height="112" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-luxury-royal-blue/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-luxury-purple/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;