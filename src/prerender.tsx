import { renderToString } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";

// Mock browser globals for Node.js environment during pre-rendering
if (typeof global !== 'undefined' && typeof window === 'undefined') {
  const noop = () => {};
  const noopObj = () => ({});

  (global as any).window = {
    location: { pathname: '/', href: '', origin: '', search: '', hash: '' },
    history: {
      pushState: noop,
      replaceState: noop,
      state: {},
    },
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: noop,
    getComputedStyle: () => ({
      getPropertyValue: () => '',
    }),
    matchMedia: () => ({
      matches: false,
      media: '',
      addListener: noop,
      removeListener: noop,
      addEventListener: noop,
      removeEventListener: noop,
      onchange: null,
      dispatchEvent: () => false,
    }),
    requestAnimationFrame: (cb: FrameRequestCallback) => setTimeout(cb, 0),
    cancelAnimationFrame: noop,
    scrollTo: noop,
    scroll: noop,
    innerWidth: 1024,
    innerHeight: 768,
    devicePixelRatio: 1,
    getSelection: () => null,
    setTimeout: globalThis.setTimeout,
    clearTimeout: globalThis.clearTimeout,
    setInterval: globalThis.setInterval,
    clearInterval: globalThis.clearInterval,
  };

  const mockElement = () => ({
    style: {},
    setAttribute: noop,
    getAttribute: () => null,
    addEventListener: noop,
    removeEventListener: noop,
    appendChild: noop,
    removeChild: noop,
    contains: () => false,
    querySelector: () => null,
    querySelectorAll: () => [],
    getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 0, toJSON: noop }),
    classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    childNodes: [],
    children: [],
    parentNode: null,
    parentElement: null,
    textContent: '',
    innerHTML: '',
    tagName: 'DIV',
    nodeName: 'DIV',
    nodeType: 1,
    ownerDocument: null,
    scrollWidth: 0,
    scrollHeight: 0,
    clientWidth: 0,
    clientHeight: 0,
    offsetWidth: 0,
    offsetHeight: 0,
  });

  (global as any).document = {
    defaultView: (global as any).window,
    documentElement: {
      style: {},
      getAttribute: () => null,
      setAttribute: noop,
      scrollTop: 0,
      scrollLeft: 0,
      clientWidth: 1024,
      clientHeight: 768,
    },
    createElement: () => mockElement(),
    createElementNS: () => mockElement(),
    createTextNode: () => ({ textContent: '' }),
    createDocumentFragment: () => ({ appendChild: noop, childNodes: [] }),
    getElementsByTagName: () => [],
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    head: { appendChild: noop, removeChild: noop },
    body: { appendChild: noop, removeChild: noop, contains: () => false },
    addEventListener: noop,
    removeEventListener: noop,
    createEvent: () => ({ initEvent: noop }),
    activeElement: null,
  };

  (global as any).localStorage = {
    getItem: () => null,
    setItem: noop,
    removeItem: noop,
    clear: noop,
    length: 0,
    key: () => null,
  };

  (global as any).sessionStorage = {
    getItem: () => null,
    setItem: noop,
    removeItem: noop,
    clear: noop,
    length: 0,
    key: () => null,
  };

  Object.defineProperty(global, 'navigator', {
    value: { userAgent: '', language: 'en-US', languages: ['en-US'] },
    writable: true,
    configurable: true,
  });

  // Mock IntersectionObserver (used by lazy loading, Radix UI)
  (global as any).IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  };

  // Mock ResizeObserver (used by Radix UI)
  (global as any).ResizeObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  // Mock MutationObserver
  (global as any).MutationObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    takeRecords() { return []; }
  };

  (global as any).requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0);
  (global as any).cancelAnimationFrame = noop;
  (global as any).fetch = () => Promise.resolve({ json: () => Promise.resolve({}), text: () => Promise.resolve(''), ok: true });
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
    head: {
      lang: 'en',
    }
  };
}
