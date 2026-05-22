const CACHE_NAME = 'loop-arcade-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// インストール時にキャッシュ
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// オフライン時はキャッシュから読み込み
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});