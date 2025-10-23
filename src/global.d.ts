declare global {
  interface HTMLElementTagNameMap {
    "table-of-contents": HTMLElement & {
      init?: () => void;
    };
  }

  interface Window {
    // Define swup type directly since @swup/astro doesn't export AstroIntegration
    swup?: any;
    live2dModelInitialized?: boolean;
    spineModelInitialized?: boolean;
    spinePlayerInstance?: any;
    semifullScrollHandler?: ((event: Event) => void) | null;
    initSemifullScrollDetection?: () => void;
    sakuraInitialized?: boolean;
    iconifyLoaded?: boolean;
    __iconifyLoaderInitialized?: boolean;
    pagefind?: {
      search: (query: string) => Promise<{
        results: Array<{
          data: () => Promise<SearchResult>;
        }>;
      }>;
      options?: (options?: Record<string, unknown>) => Promise<void> | void;
      [key: string]: unknown;
    };

    mobileTOCInit?: () => void;
    __iconifyLoader?: {
      load: (options?: { timeout?: number; retryCount?: number }) => Promise<unknown>;
      addToPreloadQueue?: (icons: string[] | string) => void;
      onLoad?: (callback: () => void) => void;
      isLoaded?: boolean;
      isLoading?: boolean;
    } | null;
    loadIconify?: () => Promise<unknown> | void;
    preloadIcons?: (icons: string[] | string) => void;
    onIconifyReady?: (callback: () => void) => void;
    closeAnnouncement?: () => void;
    floatingTOCBtn?: HTMLElement | null;
    floatingTOCPanel?: HTMLElement | null;
    tocItems?: HTMLElement[];
    activeHeadingId?: string;
    observer?: IntersectionObserver | null;
    minDepth?: number;
    maxLevel?: number;
    scrollTimeout?: ReturnType<typeof setTimeout> | null;
    toggleFloatingTOC?: () => void;
    tocInternalNavigation?: boolean;
    Turbo?: any;
    BackToTopManager?: new (...args: unknown[]) => unknown;
    mermaidInitialized?: boolean;
    mermaid?: any;
    spine?: any;
    animePageConfig?: {
      userId: string;
      apiBase: string;
      collectionTypes: string[];
      pageSize: number;
      pagination: {
        first: string;
        prev: string;
        next: string;
        last: string;
        page: string;
        of: string;
        total: string;
        records: string;
      };
    };
    loadlive2d?: (
      canvasId: string,
      modelPath: string,
      options?: Record<string, unknown>,
    ) => void;
    testSlideAnimation?: (...args: unknown[]) => void;
    simulatePageTransition?: (...args: unknown[]) => void;
  }
}

interface SearchResult {
  url: string;
  meta: {
    title: string;
  };
  excerpt: string;
  content?: string;
  word_count?: number;
  filters?: Record<string, unknown>;
  anchors?: Array<{
    element: string;
    id: string;
    text: string;
    location: number;
  }>;
  weighted_locations?: Array<{
    weight: number;
    balanced_score: number;
    location: number;
  }>;
  locations?: number[];
  raw_content?: string;
  raw_url?: string;
  sub_results?: SearchResult[];
}

export {};
