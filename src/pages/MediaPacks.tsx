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
    <div className="min-h-screen bg-background">
      <SimpleSEO
        title="Media Packs - Custom Digital Content | Studios by Dave"
        description="Get high-quality, custom-made visuals, mockups, and digital assets tailored to your business. Starter, Growth, and Premium packs available. Ready to use, ready to convert."
        keywords="media packs, custom digital content, branded images, mockups, visual assets, studios by dave, digital marketing assets"
      />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-20" style={{ background: 'linear-gradient(135deg, hsl(218 49% 15%) 0%, hsl(218 49% 22%) 50%, hsl(218 49% 18%) 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            {/* Pixie Dust Effect */}
            <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-dust-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 4 === 0 
                      ? 'hsl(var(--trophy-gold))' 
                      : i % 4 === 1 
                      ? 'hsl(var(--accent) / 0.6)'
                      : 'hsl(0, 0%, 30%)',
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    filter: 'blur(0.5px)',
                    boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                  }}
                />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Media <span className="text-accent">Packs</span>
            </h1>
          </div>
            <p className="text-lg md:text-xl text-white/70 font-medium mb-4">
              Custom Digital Content — Ready to Use, Ready to Convert
            </p>
            <p className="text-base text-white/60 max-w-3xl mx-auto leading-relaxed">
              Get high-quality, custom-made visuals, mockups, and digital assets tailored to your business. Delivered fast and ready to plug into your website, social media, or marketing campaigns.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

              {/* Starter Pack */}
              <Card className="relative border border-border/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-visible">
                <FannedCards 
                  colors={["linear-gradient(135deg, #FF6B6B, #FF8E53)", "linear-gradient(135deg, #4ECDC4, #44B09E)", "linear-gradient(135deg, #A855F7, #6366F1)"]}
                  labels={["Your Business Brand", "Your Business Brand", "Your Business Brand"]}
                />
                <CardHeader className="text-center pb-2 pt-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Image className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Starter Pack</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">$149</span>
                    <span className="text-muted-foreground ml-1 text-sm">(one-time)</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-6">
                  <ul className="space-y-3.5 flex-1">
                    {starterFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <feature.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/80">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact#get-in-touch" className="mt-8 block">
                    <Button variant="outline" size="lg" className="w-full font-semibold">
                      Order Your Pack
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Growth Pack — Highlighted */}
              <Card className="relative border-2 border-primary shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col scale-[1.03] md:scale-105 overflow-visible">
                <FannedCards
                  colors={["linear-gradient(135deg, #F59E0B, #EF4444)", "linear-gradient(135deg, #6366F1, #8B5CF6)", "linear-gradient(135deg, #EC4899, #F43F5E)", "linear-gradient(135deg, #10B981, #14B8A6)"]}
                  labels={[null, null, null, "Your Website Mockup"]}
                />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-bold shadow-lg">
                    <Star className="h-3.5 w-3.5 mr-1.5" />
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-2 pt-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Growth Pack</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">$249</span>
                    <span className="text-muted-foreground ml-1 text-sm">(one-time)</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-6">
                  <ul className="space-y-3.5 flex-1">
                    {growthFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <feature.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/80">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact#get-in-touch" className="mt-8 block">
                    <Button variant="shimmer" size="lg" className="w-full font-semibold">
                      Order Your Pack
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium Pack */}
              <Card className="relative border border-border/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-visible">
                <FannedCards
                  colors={["linear-gradient(135deg, #8B5CF6, #D946EF)", "linear-gradient(135deg, #F97316, #FBBF24)", "linear-gradient(135deg, #06B6D4, #3B82F6)", "linear-gradient(135deg, #EC4899, #A855F7)", "linear-gradient(135deg, #10B981, #6366F1)"]}
                  labels={[null, null, null, null, "Your Custom App Prototype"]}
                />
                <CardHeader className="text-center pb-2 pt-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Premium Pack</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">$399</span>
                    <span className="text-muted-foreground ml-1 text-sm">(one-time)</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-6">
                  <ul className="space-y-3.5 flex-1">
                    {premiumFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <feature.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/80">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact#get-in-touch" className="mt-8 block">
                    <Button variant="outline" size="lg" className="w-full font-semibold">
                      Order Your Pack
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Note */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
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
