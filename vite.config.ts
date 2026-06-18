import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
      additionalPrerenderRoutes: [
        '/services/web-design',
        '/services/branding',
        '/services/seo',
        '/services/google-optimization',
        '/services/promos',
        '/services/media-packs',
        '/services/portfolio',
        '/blog',
        '/blog/why-choose-studios-by-dave',
        '/blog/does-your-business-need-a-website-2026',
        '/blog/website-mistakes-costing-customers',
        '/blog/local-seo-essentials-2026',
        '/blog/fs-expedited-llc-spotlight',
        '/blog/ai-development-stack-2026',
        '/blog/trucking-industry-challenges-2026',
        '/blog/web-development-2026',
        '/blog/web-designers-near-me-vs-big-agencies',
        '/blog/future-of-web-development-shelby-nc',
        '/blog/professional-web-design-shelby-nc-leads',
        '/about',
        '/contact',
        '/booking',
        '/privacy',
        '/terms',
        '/404'
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
