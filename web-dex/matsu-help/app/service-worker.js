const CACHE_NAME = "matsu-helper-v55";
const APP_SHELL = [
  "./matsu-app.html",
  "./preview-test.html",
  "./manifest.webmanifest",
  "./panels/herramientas.css?v=18",
  "./panels/herramientas.js?v=22",
  "./build.js?v=2",
  "./fonts/Inter-Regular.woff2",
  "./fonts/Inter-SemiBold.woff2",
  "./fonts/JetBrainsMono-Regular.woff2",
  "./fonts/JetBrainsMono-SemiBold.woff2",
  "../../fonts/hp_simplified_rg.ttf?v=1",
  "./icons/pwa-icon-192.png",
  "./icons/pwa-icon-512.png",
  "./icons/picture.png",
  "./icons/matsu.png",
  "./icons/bubble.png",
  "./icons/text.png",
  "./icons/font-size.png",
  "./icons/increase-text.png",
  "./icons/decrease-text.png",
  "./icons/text-color.png",
  "./icons/opacity.png",
  "./icons/bold.png",
  "./icons/italic.png",
  "./icons/underline.png",
  "./icons/bullet.png",
  "./icons/quote.png",
  "./icons/align-left.png",
  "./icons/align-center.png",
  "./icons/align-right.png",
  "./icons/emotion.png",
  "./icons/button.png",
  "./icons/effect.png",
  "./icons/mask.png",
  "./icons/cancel.png",
  "./icons/undo.png",
  "./icons/redo.png",
  "./icons/cut.png",
  "./icons/copy.png",
  "./icons/paste.png",
  "./icons/transform.png",
  "./icons/delete.png",
  "./icons/grid.png",
  "./icons/magnet.png",
  "./icons/group.png",
  "./icons/ungroup.png",
  "./icons/mirror.png",
  "./pc-test/home-test.png",
  "./pc-test/pillar-test.png",
  "./pc-test/pillar-info-test.png",
  "./pc-test/sidebar-test.png",
  "./pc-test/creature-test.png",
  "./matsu-image/test.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("matsu-helper") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  if (event.request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    const fallbackUrl = requestUrl.pathname.endsWith("/preview-test.html")
      ? "./preview-test.html"
      : "./matsu-app.html";

    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          return response;
        })
        .catch(() =>
          caches.match(event.request).then((cachedResponse) =>
            cachedResponse || caches.match(fallbackUrl)
          )
        )
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((cachedResponse) => cachedResponse || Response.error())
      )
  );
});
