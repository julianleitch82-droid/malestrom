/**
 * ===================================================================
 * SERVICE WORKER - OFFLINE SUPPORT
 * ===================================================================
 * 
 * Handles:
 * - Caching assets on first load
 * - Serving cached assets when offline
 * - Background sync (future enhancement)
 * 
 * Basic implementation for Phase 1:
 * - Cache-first strategy for static assets
 * - Network-first for dynamic content
 * 
 */

const CACHE_NAME = 'workout-tracker-v3';
const urlsToCache = [
    './',
    './index.html',
    './workout.html',
    './info.html',
    './style.css',
    './app.js',
    './manifest.json',
    './videos/demo.mp4'
];

/**
 * Install event - cache assets on first load
 */
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching assets');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // Activate immediately
            .catch((error) => {
                console.error('[Service Worker] Installation failed:', error);
            })
    );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => self.clients.claim()) // Take control of all clients
    );
});

/**
 * Fetch event - serve from cache, fallback to network
 * 
 * Strategy: Cache-first for static assets, network-first for dynamic content
 */
self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // For HTML pages: network-first (always try fresh, fall back to cache)
    if (event.request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache successful responses
                    if (response && response.status === 200) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // Fall back to cache if network fails
                    return caches.match(event.request)
                        .then((response) => {
                            return response || new Response(
                                '<h1>Offline</h1><p>This page is not available offline.</p>',
                                { headers: { 'Content-Type': 'text/html' } }
                            );
                        });
                })
        );
        return;
    }

    // For assets (CSS, JS, etc): cache-first
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version if available
                if (response) {
                    return response;
                }

                // Otherwise, try network
                return fetch(event.request).then((response) => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }

                    // Cache successful responses
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                });
            })
            .catch(() => {
                console.warn('[Service Worker] Failed to fetch:', event.request.url);
                return new Response(
                    'Network error',
                    { status: 503, statusText: 'Service Unavailable' }
                );
            })
    );
});

/**
 * Message event - handle messages from clients
 * This allows the app to communicate with the service worker
 * Example: telling service worker to clear cache
 */
self.addEventListener('message', (event) => {
    console.log('[Service Worker] Message received:', event.data);

    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            console.log('[Service Worker] Cache cleared');
        });
    }
});

console.log('[Service Worker] Service Worker script loaded');
