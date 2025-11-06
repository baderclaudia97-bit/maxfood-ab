// MaxFood AB Service Worker
// Cache-first strategy for static assets
// Network-first strategy for dynamic content

const CACHE_NAME = "maxfood-v1";
const STATIC_ASSETS = [
  "/",
  "/offline.html",
  "/favicon.ico",
  "/icon-192x192.png",
  "/icon-512x512.png",
];

const API_CACHE_NAME = "maxfood-api-v1";
const STALE_WHILE_REVALIDATE_URLS = ["/api/sitemap", "/api/robots"];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Caching static assets");
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== API_CACHE_NAME)
          .map((name) => {
            console.log("🗑️ Deleting old cache:", name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - routing strategy
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // API requests - Network first, fallback to cache
  if (url.pathname.startsWith("/api")) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  // Static assets - Cache first, fallback to network
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirstStrategy(request));
    return;
  }

  // Pages - Network first, fallback to cache
  event.respondWith(networkFirstStrategy(request));
});

// Cache-first strategy
async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error("Fetch failed:", error);
    return cache.match("/offline.html") || new Response("Offline");
  }
}

// Network-first strategy
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(API_CACHE_NAME);

    if (response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.error("Network request failed:", error);
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    return new Response("Offline", { status: 503 });
  }
}

// Check if URL is a static asset
function isStaticAsset(pathname) {
  return (
    pathname.endsWith(".js") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".gif") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".woff") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".ttf")
  );
}

// Background sync for form submissions (future feature)
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-contact-form") {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // TODO: Implement background sync for contact form
  console.log("📤 Syncing contact form...");
}
