self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('stoerer-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/icon-256.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
