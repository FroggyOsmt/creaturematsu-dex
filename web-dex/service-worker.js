const CACHE_PREFIX = "creaturematsu-dex-";
const CACHE_NAME = `${CACHE_PREFIX}v054-all-list-spacing`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./home-data/markdown.js?v=20260925-empty-paragraph",
  "./home-data/markdown.css?v=20260922-colores-orange-v2",
  "./link.js?v=20260921-protocol-extra-return",
  "./info-data/extra-data/extra-image/history-off.png",
  "./info-data/extra-data/extra-image/history-on.png"
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
