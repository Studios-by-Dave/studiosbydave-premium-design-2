import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle1 = lazy(() => import("./pages/BlogArticle1"));
const BlogArticle2 = lazy(() => import("./pages/BlogArticle2"));
const BlogArticle3 = lazy(() => import("./pages/BlogArticle3"));
const BlogArticle4 = lazy(() => import("./pages/BlogArticle4"));
const BlogArticle5 = lazy(() => import("./pages/BlogArticle5"));
const BlogArticle6 = lazy(() => import("./pages/BlogArticle6"));
const BlogArticle7 = lazy(() => import("./pages/BlogArticle7"));
const BlogArticle8 = lazy(() => import("./pages/BlogArticle8"));
const BlogArticle9 = lazy(() => import("./pages/BlogArticle9"));
const BlogArticle10 = lazy(() => import("./pages/BlogArticle10"));
const BlogArticle11 = lazy(() => import("./pages/BlogArticle11"));

const WebDesign = lazy(() => import("./pages/WebDesign"));
const Branding = lazy(() => import("./pages/Branding"));
const WebDesignCharlotte = lazy(() => import("./pages/WebDesignCharlotte"));
const WebDesignGastonia = lazy(() => import("./pages/WebDesignGastonia"));
const WebDesignSpartanburg = lazy(() => import("./pages/WebDesignSpartanburg"));
const WebDesignAsheville = lazy(() => import("./pages/WebDesignAsheville"));
const WebDesignRaleigh = lazy(() => import("./pages/WebDesignRaleigh"));
const WebDesignShelby = lazy(() => import("./pages/WebDesignShelby"));

const GoogleOptimization = lazy(() => import("./pages/GoogleOptimization"));
const SEOPage = lazy(() => import("./pages/SEO"));
const Promos = lazy(() => import("./pages/Promos"));
const MediaPacks = lazy(() => import("./pages/MediaPacks"));
const FreeLogoDesign = lazy(() => import("./pages/promos/FreeLogoDesign"));
const ReferralBonus = lazy(() => import("./pages/promos/ReferralBonus"));
const FreeSEOAudit = lazy(() => import("./pages/promos/FreeSEOAudit"));

const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

import Watermark from "./components/Watermark";
const ElfsightChatbot = lazy(() => import("./components/ElfsightChatbot"));
const ElfsightPopup = lazy(() => import("./components/ElfsightPopup"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          <Watermark />
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
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
            <Route path="/web-design-shelby-nc" element={<WebDesignShelby />} />
            
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
            <Route path="/blog/web-designers-near-me-vs-big-agencies" element={<BlogArticle9 />} />
            <Route path="/blog/future-of-web-development-shelby-nc" element={<BlogArticle10 />} />
            <Route path="/blog/professional-web-design-shelby-nc-leads" element={<BlogArticle11 />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <ElfsightChatbot />
          <ElfsightPopup />
        </Suspense>
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
