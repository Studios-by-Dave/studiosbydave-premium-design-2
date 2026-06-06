import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import robotBg from "@/assets/robot-construction-bg.jpg";
import mascotPointing from "@/assets/mascot-pointing.png";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Embossed Robot Background */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{
      backgroundImage: `url(${robotBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'grayscale(100%) contrast(1.2)'
    }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-50" />
      
      {/* Phone Number Display */}
      <div className="absolute top-8 right-8 z-30">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 px-6 py-4 shadow-glow relative">
          {/* Pixie Dust Effect */}
          <div className="absolute -top-6 -right-6 w-28 h-28 pointer-events-none">
            {[...Array(10)].map((_, i) => <div key={i} className="absolute w-1 h-1 rounded-full animate-dust-float-right" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 ? 'hsl(var(--trophy-gold))' : i % 4 === 1 ? 'hsl(var(--accent) / 0.6)' : 'hsl(0, 0%, 30%)',
            animationDelay: `${i * 0.25}s`,
            animationDuration: `${2.5 + Math.random() * 1.5}s`,
            filter: 'blur(0.5px)',
            boxShadow: i % 4 === 0 ? '0 0 4px hsl(var(--trophy-gold))' : 'none'
          }} />)}
          </div>
          <div className="text-center">
            <p className="text-white/80 font-medium mb-1 text-base flex items-center justify-center gap-2">
              <Phone className="text-green-500 w-4 h-4" />
              CALL US - TEXT US!
            </p>
            <a href="tel:+17044738188" className="font-bold transition-colors duration-300 text-amber-200 text-3xl relative">
              <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-[length:200%_auto] animate-text-shine bg-clip-text text-transparent">
                (704) 473-8188
              </span>
            </a>
          </div>
        </div>
        {/* Mascot pointing to phone number */}
        <img src={mascotPointing} alt="Studios by Dave mascot pointing to phone number" loading="lazy" decoding="async" width="96" height="96" className="absolute -bottom-20 -left-16 w-24 h-24 drop-shadow-lg border-4 opacity-60 border-solid object-cover" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-amber-300 opacity-30">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-300 text-amber-300" />)}
              </div>
              <span className="text-sm font-medium">Trusted by 100+ Local Businesses</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <div className="relative">
                {/* Pixie Dust Effect */}
                <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
                  {[...Array(18)].map((_, i) => <div key={i} className="absolute w-1.5 h-1.5 rounded-full animate-dust-float" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 4 === 0 ? 'hsl(var(--trophy-gold))' : i % 4 === 1 ? 'hsl(var(--accent) / 0.6)' : 'hsl(0, 0%, 30%)',
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                }} />)}
                </div>
                <h1 className="font-bold chrome-text leading-tight drop-shadow-lg" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                  We Don't Just Build Your <span className="cobalt-glow-text text-sidebar-ring">Website</span> or <span className="cobalt-glow-text">App</span>.
                </h1>
                <p className="leading-tight font-medium mt-3 text-[#dfe2f6]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                  We build the online engine that gets your business found, trusted, and hired!
                </p>
                <p className="text-white/70 text-sm mt-2 font-medium">
                  Serving Shelby, Charlotte, Gastonia, Spartanburg, Asheville, and Raleigh
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {["Custom websites that convert visitors into customers", "SEO optimization to dominate local search results", "Quality custom digital assets tailored to your business"].map((benefit, index) => <div key={index} className="flex items-center space-x-3 text-white/90">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact#get-in-touch">
                <Button variant="hero" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">​Get Started Today</span>    
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out delay-75"></div>
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary-outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* DaveBot Chat Widget Promotion */}
            <div className="pt-2">
              <p className="text-[hsl(var(--trophy-gold))] text-lg lg:text-xl text-center animate-pulse font-medium">
                💬 Try our DaveBot chat widget! Click the blue bubble in the bottom-right corner to get instant help!
              </p>
            </div>

          </div>

          {/* Right Column - Hero Image (Centered with maintained size) */}
          <div className="relative flex justify-center">
            <div className="relative w-full lg:w-[110%] xl:w-[120%]">
              {/* Hero Image - Centered wider container */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-glow border border-white/20 relative">
              <img src="/lovable-uploads/hero-human-inside.png" alt="Human Inside - futuristic UFO-shaped device with robotic arms holding website screens hovering over a sunlit meadow, representing Studios by Dave connecting humanity through technology" className="w-full h-full object-cover object-center" fetchPriority="high" decoding="sync" loading="eager" width="1024" height="1024" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 700px" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
                
                {/* Company Mascot in corner */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 animate-bounce z-20">
                  <img src="/lovable-uploads/8f46217d-91db-4458-96ee-0d61e8302830-optimized.jpg" alt="Studios by Dave AI-powered mascot delivering innovative web design, SEO, and digital marketing solutions for contractors" className="w-full h-full object-contain drop-shadow-lg" loading="lazy" decoding="async" width="112" height="112" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;