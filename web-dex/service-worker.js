const CACHE_PREFIX = "creaturematsu-dex-";
const CACHE_NAME = `${CACHE_PREFIX}v012-install-1`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./pwa.js",
  "./images/pwa/favicon.png",
  "./images/pwa/apple-touch-icon.png",
  "./images/pwa/pwa-icon-192.png",
  "./images/pwa/pwa-icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith((async () => {
    try {
      const response = await fetch(request);

      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }

      return response;
    } catch (error) {
      const cachedResponse = await caches.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      if (request.mode === "navigate") {
        return caches.match("./index.html");
      }

      throw error;
    }
  })());
});
