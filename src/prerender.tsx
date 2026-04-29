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

export async function prerender(url: string) {
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

  // Dynamically import server-only crawling tool
  const { parseLinks } = await import('vite-prerender-plugin/parse');
  const links = parseLinks(html);

  return { 
    html,
    links: new Set(links),
    // We can expand this later to return specific titles/meta per URL
    head: {
      lang: 'en',
    }
  };
}
