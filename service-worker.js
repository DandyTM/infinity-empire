const CACHE_NAME = "infinity-cache-v1";

const assetsToCache = [
  "./",
  "./index.html",
  "./style.css"
];

// Кэширование при установке
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Работа офлайн
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
