import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Crown, Image, Layout, Palette, Monitor, RefreshCw, Clock, FileDown, FolderOpen, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FannedCards = ({ colors, labels }: { colors: string[]; labels: (string | null)[] }) => (
  <div className="absolute -top-3 -right-3 z-20 w-24 h-20 pointer-events-none">
    {colors.map((color, i) => (
      <div
        key={i}
        className="absolute w-14 h-20 rounded-lg shadow-lg border border-white/30 flex items-center justify-center"
        style={{
          background: color,
          transform: `rotate(${(i - 1) * 15}deg) translateX(${i * 4}px)`,
          transformOrigin: 'bottom center',
          right: `${i * 2}px`,
          top: `${i * 2}px`,
          zIndex: 20 - i,
        }}
      >
        {labels[i] && (
          <span className="text-[6px] font-bold text-white text-center leading-tight px-1 drop-shadow-md">
            {labels[i]}
          </span>
        )}
      </div>
    ))}
  </div>
);

const MediaPacks = () => {
  const starterFeatures = [
    { icon: Image, text: "5 Custom Branded Images" },
    { icon: Layout, text: "1 Website or Social Media Mockup" },
    { icon: Palette, text: "Basic Visual Styling (colors + logo integration)" },
    { icon: FileDown, text: "Delivered as High-Resolution Files" },
    { icon: Clock, text: "2–3 Day Turnaround" },
    { icon: FileDown, text: "Delivered via PDF + Download" },
  ];

  const growthFeatures = [
    { icon: Image, text: "10 Custom Branded Images" },
    { icon: Layout, text: "2 Premium Mockups or Visual Concepts" },
    { icon: Layers, text: "Light Prototype or Layout Preview" },
    { icon: Monitor, text: "Platform-Optimized Sizes (Instagram, Website, etc.)" },
    { icon: Palette, text: "Enhanced Branding & Styling" },
    { icon: RefreshCw, text: "2 Revisions Included" },
    { icon: Zap, text: "Priority 48-Hour Delivery" },
    { icon: FolderOpen, text: "Delivered via PDF + Organized Asset Folder" },
  ];

  const premiumFeatures = [
    { icon: Image, text: "20 Fully Custom Visual Assets" },
    { icon: Layout, text: "3–5 Advanced Mockups or Concepts" },
    { icon: Layers, text: "Interactive or App/Web Prototype Preview" },
    { icon: Palette, text: "Full Brand Styling + Creative Direction" },
    { icon: Monitor, text: "Multi-Platform Content (Web + Social + Ads)" },
    { icon: RefreshCw, text: "3 Revisions Included" },
    { icon: Zap, text: "24–48 Hour Priority Delivery" },
    { icon: FolderOpen, text: "Delivered via PDF + Structured Asset Library" },
    { icon: Sparkles, text: "Bonus: 1 Custom Hero Section Design" },
  ];

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Media Packs - Custom Digital Content | Studios by Dave"
        description="Get high-quality, custom-made visuals, mockups, and digital assets tailored to your business. Starter, Growth, and Premium packs available. Ready to use, ready to convert."
        keywords="media packs, custom digital content, branded images, mockups, visual assets, studios by dave, digital marketing assets"
      />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-luxury-bg noise-overlay flex items-center">
          {/* Radial Glow */}
          <div className="absolute inset-0 radial-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-24">
            <div className="relative inline-block">
              <div className="section-eyebrow mb-4">✦ Digital Assets</div>
              <h1 className="display-heading text-luxury-text-primary text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Media <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">Packs</span>
              </h1>
            </div>
            <p className="font-body text-luxury-lime text-lg md:text-xl font-medium mb-4">
              Custom Digital Content — Ready to Use, Ready to Convert
            </p>
            <p className="font-body text-luxury-text-secondary text-base max-w-3xl mx-auto leading-relaxed">
              Get high-quality, custom-made visuals, mockups, and digital assets tailored to your business. Delivered fast and ready to plug into your website, social media, or marketing campaigns.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-32 bg-luxury-surface border-y border-white/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Starter Pack */}
              <div className="luxury-card relative border border-white/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-visible">
                <FannedCards 
                  colors={["linear-gradient(135deg, #FF6B6B, #FF8E53)", "linear-gradient(135deg, #4ECDC4, #44B09E)", "linear-gradient(135deg, #A855F7, #6366F1)"]}
                  labels={["Your Business Brand", "Your Business Brand", "Your Business Brand"]}
                />
                <div className="text-center pb-2 pt-8">
                  <div className="w-14 h-14 bg-luxury-royal-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Image className="h-7 w-7 text-luxury-royal-blue" />
                  </div>
                  <h3 className="display-heading text-luxury-text-primary text-2xl font-bold">Starter Pack</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-luxury-royal-blue">$149</span>
                    <span className="text-luxury-text-secondary ml-1 text-sm">(one-time)</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 pt-6 px-6">
                  <ul className="space-y-3.5 flex-1">
                    {starterFeatures.map((feature, i) => {
                      const IconComponent = feature.icon;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <IconComponent className="h-4 w-4 text-luxury-lime mt-0.5 shrink-0" />
                          <span className="font-body text-luxury-text-secondary text-sm">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link to="/contact#get-in-touch" className="mt-8 block">
                    <Button variant="outline" size="lg" className="w-full font-semibold border-luxury-royal-blue text-luxury-royal-blue hover:bg-luxury-royal-blue hover:text-white transition-colors">
                      Order Your Pack
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Growth Pack — Highlighted */}
              <div className="luxury-card relative border-2 border-luxury-lime shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col scale-[1.03] md:scale-105 overflow-visible">
                <FannedCards
                  colors={["linear-gradient(135deg, #F59E0B, #EF4444)", "linear-gradient(135deg, #6366F1, #8B5CF6)", "linear-gradient(135deg, #EC4899, #F43F5E)", "linear-gradient(135deg, #10B981, #14B8A6)"]}
                  labels={[null, null, null, "Your Website Mockup"]}
                />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-luxury-lime text-black px-4 py-1.5 text-sm font-bold shadow-lg">
                    <Star className="h-3.5 w-3.5 mr-1.5" />
                    Most Popular
                  </Badge>
                </div>
                <div className="text-center pb-2 pt-10">
                  <div className="w-14 h-14 bg-luxury-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-7 w-7 text-luxury-lime" />
                  </div>
                  <h3 className="display-heading text-luxury-text-primary text-2xl font-bold">Growth Pack</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-luxury-lime">$249</span>
                    <span className="text-luxury-text-secondary ml-1 text-sm">(one-time)</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 pt-6 px-6">
                  <ul className="space-y-3.5 flex-1">
                    {growthFeatures.map((feature, i) => {
                      const IconComponent = feature.icon;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <IconComponent className="h-4 w-4 text-luxury-lime mt-0.5 shrink-0" />
                          <span className="font-body text-luxury-text-secondary text-sm">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link to="/contact#get-in-touch" className="mt-8 block">
                    <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                      Order Your Pack
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Premium Pack */}
              <div className="luxury-card relative border border-white/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-visible">
                <FannedCards
                  colors={["linear-gradient(135deg, #8B5CF6, #D946EF)", "linear-gradient(135deg, #F97316, #FBBF24)", "linear-gradient(135deg, #06B6D4, #3B82F6)", "linear-gradient(135deg, #EC4899, #A855F7)", "linear-gradient(135deg, #10B981, #6366F1)"]}
                  labels={[null, null, null, null, "Your Custom App Prototype"]}
                />
                <div className="text-center pb-2 pt-8">
                  <div className="w-14 h-14 bg-luxury-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-7 w-7 text-luxury-purple" />
                  </div>
                  <h3 className="display-heading text-luxury-text-primary text-2xl font-bold">Premium Pack</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-luxury-purple">$399</span>
                    <span className="text-luxury-text-secondary ml-1 text-sm">(one-time)</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 pt-6 px-6">
                  <ul className="space-y-3.5 flex-1">
                    {premiumFeatures.map((feature, i) => {
                      const IconComponent = feature.icon;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <IconComponent className="h-4 w-4 text-luxury-lime mt-0.5 shrink-0" />
                          <span className="font-body text-luxury-text-secondary text-sm">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link to="/contact#get-in-touch" className="mt-8 block">
                    <Button variant="outline" size="lg" className="w-full font-semibold border-luxury-purple text-luxury-purple hover:bg-luxury-purple hover:text-white transition-colors">
                      Order Your Pack
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-16 text-center">
              <p className="font-body text-luxury-text-secondary text-sm max-w-2xl mx-auto leading-relaxed">
                All Media Packs are custom-made based on your business needs. After purchase, you'll receive a quick intake form to tell us exactly what you want.
              </p>
            </div>
          </div>
        </section>
      </main>

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default MediaPacks;
