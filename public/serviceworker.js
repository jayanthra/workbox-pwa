importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { registerRoute } = workbox.routing;
const {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst,
} = workbox.strategies;

const { precacheAndRoute } = workbox.precaching

// Used for filtering matches based on status code, header, or both
const { CacheableResponsePlugin } = workbox.cacheableResponse;
// Used to limit entries in cache, remove entries after a certain period of time
const { ExpirationPlugin } = workbox.expiration;

registerRoute(
  /https:\/\/randomuser\.me\/api\/portraits\/med\/(men|women)\/(.+)\.(?:jpeg|jpg)/,
  new CacheFirst({
    cacheName: 'users-images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
    ],
  })
);

registerRoute(
  /https:\/\/randomuser\.me\/api\/\?results=(.+)/,
  new CacheFirst({
    cacheName: 'users-api',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
    ],
  })
);



registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

// // Cache page navigations (html) with a Network First strategy
// registerRoute(
//   // Check to see if the request is a navigation to a new page
//   ({ request }) => request.mode === 'navigate',
//   // Use a Network First caching strategy
//   new NetworkFirst({
//     // Put all cached files in a cache named 'pages'
//     cacheName: 'pages',
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   }),
// );

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => request.destination === 'image',
  // Use a Cache First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'images'
    cacheName: 'images',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

precacheAndRoute([{"revision":"31f6a6d665111e33e96c3a83174b2c14","url":"css/style.css"},{"revision":"2b90dee4f4248f64a55318e7ba5b1cb4","url":"images/apple-icon-180.png"},{"revision":"354ba6b3eee294d1decef679100adcbb","url":"images/logo.png"},{"revision":"a4c7c2dfb53f4538503fdb8d6442b7fb","url":"images/manifest-icon-192.png"},{"revision":"41df444f70b6363c3e92b7c1c8425473","url":"images/manifest-icon-512.png"},{"revision":"931a898c2ad390203099f1399fcbb424","url":"index.html"},{"revision":"4d7d93c39ef3b16103a488e9f53e5145","url":"js/app.js"},{"revision":"fc798f095da596628131db67f9573d1d","url":"manifest.json"}]);

