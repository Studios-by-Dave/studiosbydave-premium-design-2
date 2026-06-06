import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

import Blog from "./pages/Blog";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import BlogArticle4 from "./pages/BlogArticle4";
import BlogArticle5 from "./pages/BlogArticle5";
import BlogArticle6 from "./pages/BlogArticle6";
import BlogArticle7 from "./pages/BlogArticle7";
import BlogArticle8 from "./pages/BlogArticle8";

import WebDesign from "./pages/WebDesign";
import Branding from "./pages/Branding";
import WebDesignCharlotte from "./pages/WebDesignCharlotte";
import WebDesignGastonia from "./pages/WebDesignGastonia";
import WebDesignSpartanburg from "./pages/WebDesignSpartanburg";
import WebDesignAsheville from "./pages/WebDesignAsheville";
import WebDesignRaleigh from "./pages/WebDesignRaleigh";

import GoogleOptimization from "./pages/GoogleOptimization";
import SEOPage from "./pages/SEO";
import Promos from "./pages/Promos";
import MediaPacks from "./pages/MediaPacks";
import FreeLogoDesign from "./pages/promos/FreeLogoDesign";
import ReferralBonus from "./pages/promos/ReferralBonus";
import FreeSEOAudit from "./pages/promos/FreeSEOAudit";


import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Watermark from "./components/Watermark";
import ElfsightChatbot from "./components/ElfsightChatbot";
import ElfsightPopup from "./components/ElfsightPopup";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <Watermark />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Redirects for old StudiosWeb paths */}
          <Route path="/studiosweb" element={<Navigate to="/services" replace />} />
          <Route path="/studiosweb/webdesign" element={<Navigate to="/services/web-design" replace />} />
          <Route path="/studiosweb/branding" element={<Navigate to="/services/branding" replace />} />
          <Route path="/studiosweb/google-optimization" element={<Navigate to="/services/google-optimization" replace />} />
          <Route path="/studiosweb/seo" element={<Navigate to="/services/seo" replace />} />
          <Route path="/studiosweb/promos" element={<Navigate to="/services/promos" replace />} />
          <Route path="/studiosweb/media-packs" element={<Navigate to="/services/media-packs" replace />} />
          <Route path="/studiosweb/portfolio" element={<Navigate to="/services/portfolio" replace />} />
          <Route path="/studiosweb/ai-automations" element={<Navigate to="/services" replace />} />

          {/* Redirect for cleaner promos URL structure */}
          <Route path="/services/promos" element={<Navigate to="/promos" replace />} />
          
          {/* Redirects for old StudiosInk paths */}
          <Route path="/studiosink" element={<Navigate to="/" replace />} />
          <Route path="/studiosink/sacred-arsenal" element={<Navigate to="/" replace />} />
          
          {/* Redirects for old StudiosGear paths */}
          <Route path="/studiosgear" element={<Navigate to="/" replace />} />
          <Route path="/studiosgear/lead-parrot" element={<Navigate to="/" replace />} />
          
          {/* New service routes */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/branding" element={<Branding />} />
          
          {/* City-specific web design pages */}
          <Route path="/web-design-charlotte-nc" element={<WebDesignCharlotte />} />
          <Route path="/web-design-gastonia-nc" element={<WebDesignGastonia />} />
          <Route path="/web-design-spartanburg-sc" element={<WebDesignSpartanburg />} />
          <Route path="/web-design-asheville-nc" element={<WebDesignAsheville />} />
          <Route path="/web-design-raleigh-nc" element={<WebDesignRaleigh />} />
          
          <Route path="/services/google-optimization" element={<GoogleOptimization />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/promos" element={<Navigate to="/promos" replace />} />
          <Route path="/services/media-packs" element={<MediaPacks />} />
          
          {/* Promos main page */}
          <Route path="/promos" element={<Promos />} />
          
          {/* Individual promo pages */}
          <Route path="/promos/free-logo-design" element={<FreeLogoDesign />} />
          <Route path="/promos/referral-bonus" element={<ReferralBonus />} />
          <Route path="/promos/free-seo-audit" element={<FreeSEOAudit />} />
          

          <Route path="/services/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/why-choose-studios-by-dave" element={<BlogArticle1 />} />
          <Route path="/blog/does-your-business-need-a-website-2026" element={<BlogArticle2 />} />
          <Route path="/blog/website-mistakes-costing-customers" element={<BlogArticle3 />} />
          <Route path="/blog/local-seo-essentials-2026" element={<BlogArticle4 />} />
          <Route path="/blog/fs-expedited-llc-spotlight" element={<BlogArticle5 />} />
          <Route path="/blog/ai-development-stack-2026" element={<BlogArticle6 />} />
          <Route path="/blog/trucking-industry-challenges-2026" element={<BlogArticle7 />} />
          <Route path="/blog/web-development-2026" element={<BlogArticle8 />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          <ElfsightChatbot />
          <ElfsightPopup />
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
