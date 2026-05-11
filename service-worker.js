const CACHE_NAME = 'flightcheck-v2';
const URLS_TO_CACHE = [
  './index.html',
  './style.css',
  './app.js',
  './data/cessna172p.js',
  './manifest.json',
  './icons/icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // iOS WKWebView (home screen PWA) rejects service worker responses that are
  // redirects. Cloudflare Pages can issue a redirect on the initial navigation
  // (e.g. / → /index.html). Fix: for any page navigation, serve index.html
  // directly from cache so no redirect ever reaches the browser.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then((cached) => cached || fetch(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
