const CACHE_NAME = 'flightcheck-v3';
const URLS_TO_CACHE = [
  './',
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
  // iOS WKWebView (standalone PWA) rejects redirect responses from service workers.
  // Cloudflare Pages redirects / → /index.html, which triggers the error.
  // Fix: intercept all navigation requests and serve index.html directly from
  // our specific cache — no redirect ever reaches the browser.
  // Fallback uses fetch('./index.html') (not the navigation request) to avoid
  // passing a navigate-mode request to fetch(), which can itself redirect.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME)
        .then((cache) => cache.match('./index.html'))
        .then((cached) => cached || fetch('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
