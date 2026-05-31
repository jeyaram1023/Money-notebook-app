// A basic Service Worker to satisfy PWA install requirements
const CACHE_NAME = 'money-pro-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Chrome requires a fetch handler to show the install prompt
self.addEventListener('fetch', (event) => {
    // We aren't doing complex offline caching here, 
    // just passing the request through to satisfy the browser.
    event.respondWith(fetch(event.request));
});
