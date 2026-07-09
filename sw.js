// // Minimal service worker to enable PWA "Add to Home Screen"
// const CACHE_NAME = 'bakery-recipes-v1';

// self.addEventListener('install', (event) => {
//     self.skipWaiting();
// });

// self.addEventListener('activate', (event) => {
//     event.waitUntil(clients.claim());
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(fetch(event.request));
// });

// Minimal service worker to enable PWA "Add to Home Screen"
const CACHE_NAME = 'bakery-recipes-v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only handle same-origin requests. Let cross-origin requests
    // (the Google Apps Script iframe, its resources, etc.) go
    // straight to the network WITHOUT respondWith, so the browser
    // handles the frame navigation normally.
    if (url.origin !== self.location.origin) {
        return; // do not call respondWith -> default browser behavior
    }

    event.respondWith(fetch(event.request));
});
