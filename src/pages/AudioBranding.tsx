import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Music, RadioReceiver, Zap, BrainCircuit, CheckCircle, ArrowRight, Volume2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AudioBranding = () => {
  const benefits = [
    {
      icon: BrainCircuit,
      title: "Instant Brand Recognition",
      description: "Sound triggers memory faster than visuals. A sonic logo ensures your brand is instantly recognizable, even when your audience isn't looking at a screen."
    },
    {
      icon: Zap,
      title: "Emotional Connection",
      description: "Music and sound bypass the logical brain and tap directly into emotion, creating a deeper, more lasting bond with your customers."
    },
    {
      icon: RadioReceiver,
      title: "Multi-Platform Consistency",
      description: "Whether it's a YouTube intro, a podcast sponsor read, a social media ad, or your waiting room loop, your sonic logo provides a unified brand experience."
    }
  ];

  const processSteps = [
    {
      title: "1. Brand Discovery",
      description: "We dive deep into your brand's personality, target demographic, and core values to understand the 'feeling' you need to convey."
    },
    {
      title: "2. Audio Moodboarding",
      description: "We explore different instruments, tempos, and soundscapes, dialing in on the exact sonic palette that represents your business."
    },
    {
      title: "3. Composition & Design",
      description: "Our audio engineers compose original melodies and craft custom sound designs, creating a concise 2-5 second audio signature."
    },
    {
      title: "4. Delivery & Integration",
      description: "You receive high-quality audio files mastered for all platforms (web, broadcast, social), ready to be injected into your marketing."
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Audio Branding & Sonic Logos | Studios by Dave"
        description="Elevate your brand with a custom sonic logo. We create memorable audio identities that drive brand recognition and connect emotionally with your audience."
        keywords="audio branding, sonic logos, audio identity, sound design, custom jingles, studios by dave"
      />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] overflow-hidden bg-luxury-bg noise-overlay flex items-center">
          <div className="absolute inset-0 radial-glow" />

          {/* Dot Matrix Musical Note Background */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 sm:-translate-x-[15%] md:-translate-x-[-10%] pointer-events-none opacity-20 hidden md:block z-0 mix-blend-screen animate-gentle-sway">
            <svg width="600" height="600" viewBox="0 0 600 600">
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="8" cy="8" r="4" fill="currentColor" />
                </pattern>
                <mask id="noteMask">
                  <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="600" fontFamily="sans-serif" fill="white">♫</text>
                </mask>
              </defs>
              <rect width="600" height="600" fill="url(#dotPattern)" mask="url(#noteMask)" className="text-luxury-purple" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
            <h2 
              className="text-6xl md:text-8xl font-black mb-12 animate-bounce-slow"
              style={{
                color: '#ffffff',
                textShadow: '0 1px 0 #e3e3e3, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
              }}
            >
              Coming Soon!...
            </h2>

            <div className="relative inline-block">
              <div className="section-eyebrow mb-4">✦ Audio Branding</div>
              <h1 className="display-heading text-luxury-text-primary text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                The Sound of <br className="md:hidden" />
                <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                  Your Brand
                </span>
              </h1>
            </div>
            <p className="font-body text-luxury-lime text-lg md:text-xl font-medium mb-6">
              Establish a Sonic Logo that makes you unforgettable.
            </p>
            <p className="font-body text-luxury-text-secondary text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              When you hear "Ta-dum", you immediately think of Netflix. When you hear "Ba-da-ba-ba-ba", you crave McDonald's. 
              <strong> That is the power of a Sonic Logo.</strong> We translate your brand's visual identity into a concise, powerful audio signature.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group font-semibold bg-luxury-lime hover:bg-luxury-lime/90 text-black px-8 py-6 text-lg relative overflow-hidden transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Create My Sonic Logo <Volume2 className="w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        </section>

        {/* What is a Sonic Logo? */}
        <section className="py-24 bg-luxury-surface border-y border-white/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-eyebrow mb-4">✦ More Than A Jingle</div>
                <h2 className="display-heading text-luxury-text-primary text-4xl mb-6">
                  What is a Sonic Logo?
                </h2>
                <p className="text-luxury-text-secondary font-body text-lg mb-6 leading-relaxed">
                  A sonic logo (or audio logo) is a short, distinctive melody or sound effect that is used in corporate branding alongside your visual logo. Think of it as the audio equivalent of your company's visual trademark.
                </p>
                <p className="text-luxury-text-secondary font-body text-lg mb-8 leading-relaxed">
                  In today's digital landscape, consumers aren't always looking at their screens. With the rise of podcasts, smart speakers, and background video streaming, your brand needs a way to announce its presence to the ears, not just the eyes.
                </p>
                <div className="space-y-4">
                  {[
                    "Lasts typically between 2 to 5 seconds",
                    "Captures the emotional essence of your business",
                    "Used at the start or end of video/audio content",
                    "Grows brand equity and top-of-mind awareness"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-luxury-lime w-5 h-5 flex-shrink-0" />
                      <span className="text-luxury-text-primary font-body">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-luxury-bg border border-white/10 flex items-center justify-center p-8 relative overflow-hidden luxury-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-purple/20 to-luxury-royal-blue/20 opacity-50"></div>
                  <Music className="w-32 h-32 text-luxury-royal-blue animate-pulse" style={{ animationDuration: '3s' }} />
                  <div className="absolute bottom-8 left-8 right-8 h-16 flex items-center gap-1 opacity-50">
                     {[...Array(20)].map((_, i) => (
                       <div key={i} className="flex-1 bg-luxury-lime rounded-full" style={{ height: `${Math.max(10, Math.random() * 100)}%` }}></div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl font-bold mb-4">Why Invest in Audio Branding?</h2>
              <p className="text-luxury-text-secondary font-body max-w-2xl mx-auto text-lg">
                Your visual identity is only half the picture. Here's why audio completes it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Card key={i} className="luxury-card border border-white/10 shadow-md hover:border-luxury-royal-blue/50 transition-all duration-300 bg-luxury-surface/50 group">
                    <CardHeader className="flex flex-col items-center text-center gap-4 pb-2">
                      <div className="w-16 h-16 bg-luxury-royal-blue/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-luxury-royal-blue" />
                      </div>
                      <h3 className="display-heading text-xl text-luxury-text-primary font-bold">{benefit.title}</h3>
                    </CardHeader>
                    <CardContent className="text-center mt-2">
                      <p className="text-luxury-text-secondary font-body">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-luxury-surface border-y border-white/6 relative overflow-hidden">
          <div className="absolute -right-40 top-20 w-96 h-96 bg-luxury-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="section-eyebrow mb-4 justify-center">✦ How It Works</div>
            <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-16">
              Our Sonic Design Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative text-left bg-luxury-bg/50 p-6 rounded-2xl border border-white/10">
                  <h3 className="display-heading text-xl text-luxury-lime mb-3">{step.title}</h3>
                  <p className="font-body text-luxury-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-luxury-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="display-heading text-luxury-text-primary text-4xl mb-6">Ready to Find Your Sound?</h2>
            <p className="font-body text-luxury-text-secondary text-lg mb-8">
              Stop letting silence define your brand. Let's create an audio identity that makes your audience listen, remember, and engage.
            </p>
            <p className="font-body text-luxury-lime text-xl font-bold mb-6 uppercase tracking-wider">
              Let's Talk Audio
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold bg-luxury-lime hover:bg-luxury-lime/90 text-black px-10 py-6 text-lg uppercase tracking-wider transition-all duration-300">
                Call For Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AudioBranding;
