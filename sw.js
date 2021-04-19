var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    './index.html',
    './css/font.css',
    './css/style.css',
    './js/main.js',
    './fonts/open-sans-v18-latin-regular.woff2',
    './images/background.png',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
    e.waitUntil(
        (async () => {
            try {
                const cache = await caches.open(cacheName);
                return cache.addAll(filesToCache);
            } catch (error) {
                console.error(error);
            }
        })()
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
    e.respondWith(
        (async () => {
            try {
                const response = await caches.match(e.request);
                return response || fetch(e.request);
            } catch (error) {
                console.error(error);
            }
        })()
    );
});