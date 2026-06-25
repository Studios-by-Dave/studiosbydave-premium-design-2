import { renderToString } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";

interface PrerenderSEO {
  title: string;
  description: string;
}

interface MockWindow {
  location: { pathname: string };
  history: {
    pushState: () => void;
    replaceState: () => void;
    state: Record<string, unknown>;
  };
  addEventListener: () => void;
  removeEventListener: () => void;
  dispatchEvent: () => void;
  getComputedStyle: () => { getPropertyValue: () => string };
  matchMedia: () => {
    matches: boolean;
    addListener: () => void;
    removeListener: () => void;
  };
}

interface MockDocument {
  defaultView: MockWindow;
  documentElement: {
    style: Record<string, unknown>;
    getAttribute: () => null;
    setAttribute: () => void;
  };
  createElement: () => {
    style: Record<string, unknown>;
    setAttribute: () => void;
    getAttribute: () => null;
  };
  getElementsByTagName: () => unknown[];
  head: { appendChild: () => void };
  body: { appendChild: () => void };
}

interface MockLocalStorage {
  getItem: () => null;
  setItem: () => void;
  removeItem: () => void;
  clear: () => void;
}

type GlobalWithMocks = typeof globalThis & {
  window?: MockWindow;
  document?: MockDocument;
  localStorage?: MockLocalStorage;
  __PRERENDER_SEO?: PrerenderSEO;
};

const globalWithMocks = globalThis as GlobalWithMocks;

// Mock browser globals for Node.js environment during pre-rendering
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  const mockWindow: MockWindow = {
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

  globalWithMocks.window = mockWindow;
  globalWithMocks.document = {
    defaultView: mockWindow,
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
  globalWithMocks.localStorage = {
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

export async function prerender(data: string | { url?: string }) {
  const url = typeof data === 'string' ? data : (data?.url || '/');

  // Clear any previous SEO info before rendering
  globalWithMocks.__PRERENDER_SEO = undefined;

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
  const head: { lang: string; title?: string; elements?: Set<{ type: string; props: Record<string, string> }> } = { lang: 'en' };
  const seoInfo = globalWithMocks.__PRERENDER_SEO;
  if (seoInfo) {
    head.title = seoInfo.title;
    head.elements = new Set([
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
    head
  };
}
