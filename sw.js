// FlipIQ Service Worker — v1
const CACHE_NAME = 'flipiq-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/analyze.html',
  '/fix-and-flip-calculator.html',
  '/70-rule-calculator.html',
  '/house-flipping-profit-calculator.html',
  '/favicon.svg',
  '/manifest.json'
];

// Install: cache core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: delete old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: network-first for HTML, cache-first for static assets
self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);

  // Skip non-GET and cross-origin requests
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;

  // HTML pages: network first, fall back to cache
  if (e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request)
        .then(function(res) {
          var clone = res.clone();
          caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
          return res;
        })
        .catch(function() {
          return caches.match(e.request).then(function(cached) {
            return cached || caches.match('/analyze.html');
          });
        })
    );
    return;
  }

  // Other assets: cache first, fall back to network
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(res) {
        var clone = res.clone();
        caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
        return res;
      });
    })
  );
});
