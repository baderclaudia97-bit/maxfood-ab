import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // Required for Netlify deployment
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.netlify.app",
      },
      {
        protocol: "https",
        hostname: "cdn.maxfood.se",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Build optimization
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  
  // Experimental features
  experimental: {
    instrumentationHook: true,
    optimizePackageImports: ["@radix-ui/react-icons"],
    isrMemoryCacheSize: 52 * 1024 * 1024, // 52 MB
  },

  // Turbopack for faster builds
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },

  // Internationalization
  i18n: {
    locales: ["es", "sv", "en", "fr", "de", "ar", "zh", "ja"],
    defaultLocale: "en",
  },

  // Security headers
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "geolocation=(), microphone=(), camera=()",
        },
      ],
    },
  ],

  // Redirects
  redirects: async () => [
    {
      source: "/",
      destination: "/en",
      permanent: false,
    },
    {
      source: "/admin",
      destination: "/admin/index.html",
      permanent: false,
    },
  ],

  // Rewrites
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ],
  }),

  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: "single",
      };
    }
    return config;
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://maxfood.se",
  },

  // Internationalization plugin
  ...withNextIntl,
};

export default nextConfig;
