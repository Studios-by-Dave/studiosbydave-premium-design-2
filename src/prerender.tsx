import { renderToString } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";

// Mock browser globals for Node.js environment during pre-rendering
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  (global as any).window = {
    location: { pathname: '/' },
    history: {
      pushState: () => {},
      replaceState: () => {},
      state: {},
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
    getComputedStyle: () => ({
      getPropertyValue: () => '',
    }),
    matchMedia: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }),
  };
  (global as any).document = {
    defaultView: (global as any).window,
    documentElement: { 
      style: {},
      getAttribute: () => null,
      setAttribute: () => {},
    },
    createElement: () => ({ 
      style: {},
      setAttribute: () => {},
      getAttribute: () => null,
    }),
    getElementsByTagName: () => [],
    head: { appendChild: () => {} },
    body: { appendChild: () => {} },
  };
  (global as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
  };
  Object.defineProperty(global, 'navigator', {
    value: { userAgent: '' },
    writable: true,
    configurable: true
  });
}

export async function prerender(data: any) {
  const url = typeof data === 'string' ? data : (data?.url || '/');

  // Clear any previous SEO info before rendering
  (global as any).__PRERENDER_SEO = undefined;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  queryClient.clear();

  // Dynamically import server-only crawling tool
  const { parseLinks } = await import('vite-prerender-plugin/parse');
  const links = parseLinks(html);

  // Setup head options based on SEO captured during render
  const headOpts: any = { lang: 'en' };
  const seoInfo = (global as any).__PRERENDER_SEO;
  if (seoInfo) {
    headOpts.title = seoInfo.title;
    headOpts.elements = new Set([
      { type: 'meta', props: { name: 'description', content: seoInfo.description } },
      { type: 'meta', props: { property: 'og:title', content: seoInfo.title } },
      { type: 'meta', props: { property: 'og:description', content: seoInfo.description } },
      { type: 'meta', props: { name: 'twitter:title', content: seoInfo.title } },
      { type: 'meta', props: { name: 'twitter:description', content: seoInfo.description } }
    ]);
  }

  return { 
    html,
    links: new Set(links),
    head: headOpts
  };
}
