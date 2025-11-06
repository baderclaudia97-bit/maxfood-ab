/**
 * Performance Configuration for MaxFood AB
 * Lighthouse targets: 90+ across all metrics
 */

// Core Web Vitals targets
export const webVitalsTargets = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100, // First Input Delay (ms)
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 600, // Time To First Byte (ms)
};

// Bundle size budget
export const bundleSizeBudget = {
  js: 250, // KB
  css: 50, // KB
  images: 200, // KB per image
  total: 500, // KB
};

// Performance monitoring config
export const performanceConfig = {
  // Enable performance monitoring
  enableMonitoring: true,

  // Sample rate for analytics (0-1)
  sampleRate: 0.1,

  // Metrics to track
  metrics: [
    "LCP", // Largest Contentful Paint
    "FID", // First Input Delay
    "CLS", // Cumulative Layout Shift
    "FCP", // First Contentful Paint
    "TTFB", // Time To First Byte
    "FCP", // First Contentful Paint
  ],

  // Thresholds for warnings
  thresholds: {
    LCP: 4000,
    FID: 300,
    CLS: 0.25,
  },
};

// Next.js optimization config
export const nextJsOptimization = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Script optimization
  scripts: {
    beforeInteractive: [], // Critical scripts
    afterInteractive: ["google-analytics"], // Non-critical scripts
    lazyOnload: ["drift", "intercom"], // Low-priority scripts
  },

  // Font optimization
  fonts: {
    display: "swap", // Show fallback while loading
    preload: true,
  },

  // Compression
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
};

// Caching strategies
export const cacheConfig = {
  // Static pages (1 year)
  static: {
    "public, max-age": 31536000,
    "s-maxage": 31536000,
    "stale-while-revalidate": 86400,
  },

  // Dynamic pages (1 day)
  dynamic: {
    "public, max-age": 86400,
    "s-maxage": 3600,
    "stale-while-revalidate": 86400,
  },

  // API responses (1 hour)
  api: {
    "public, max-age": 3600,
    "s-maxage": 1800,
    "stale-while-revalidate": 3600,
  },

  // Images (30 days)
  images: {
    "public, max-age": 2592000,
    "s-maxage": 2592000,
    "stale-while-revalidate": 86400,
  },

  // No cache for sensitive pages
  noCache: {
    "no-cache, no-store, must-revalidate": true,
    "private": true,
  },
};

// CDN configuration
export const cdnConfig = {
  enabled: true,
  provider: "cloudflare", // or custom
  zones: [
    "/images/**",
    "/static/**",
    "/_next/static/**",
    "/fonts/**",
  ],

  // Purge cache on deployment
  purgeOnDeploy: true,

  // Enable compression
  brotli: true,
  gzip: true,
};

// Code splitting configuration
export const codeSplittingConfig = {
  // Dynamic imports for heavy components
  dynamicImports: {
    BlogCard: "blog",
    ProductCard: "products",
    ContactForm: "contact",
    GlobalSearch: "search",
  },

  // Chunk size limits
  chunks: {
    default: 200, // KB
    vendor: 300, // KB
  },
};

// Lazy loading configuration
export const lazyLoadingConfig = {
  // Images
  images: {
    threshold: 0.1,
    rootMargin: "50px",
    enabled: true,
  },

  // Components
  components: {
    threshold: 0.1,
    rootMargin: "100px",
    enabled: true,
  },

  // Scripts
  scripts: {
    delay: 3000, // ms
    enabled: true,
  },
};

// Monitoring and reporting
export const reportingConfig = {
  // Send metrics to analytics
  sendToAnalytics: true,

  // Endpoints
  endpoints: {
    webVitals: "/api/metrics/web-vitals",
    performance: "/api/metrics/performance",
    errors: "/api/metrics/errors",
  },

  // Thresholds for alerts
  alerts: {
    LCP: 4000,
    FID: 300,
    CLS: 0.25,
    errorRate: 0.01, // 1%
  },
};
