// sw.js
const CACHE_NAME = 'playa-juan-v1.1';
const STATIC_CACHE = 'static-v1.1';
const DYNAMIC_CACHE = 'dynamic-v1.1';
const INMUTABLE_CACHE = 'inmutable-v1.1';

const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/hamacas/index.html',
  '/src/hamacas/script.js',
  '/src/hamacas/style.css',
  '/src/reservas/index.html',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

const APP_SHELL_INMUTABLE = [
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Instalación del SW
self.addEventListener('install', event => {
  const cacheStatic = caches.open(STATIC_CACHE).then(cache => cache.addAll(APP_SHELL));
  const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache => cache.addAll(APP_SHELL_INMUTABLE));

  event.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});

// Activación del SW
self.addEventListener('activate', event => {
  const cleanCaches = caches.keys().then(keys => {
    return Promise.all(
      keys.map(key => {
        if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE && key !== INMUTABLE_CACHE) {
          return caches.delete(key);
        }
      })
    );
  });

  event.waitUntil(cleanCaches);
});

// Estrategia de caché: Cache with Network Fallback
self.addEventListener('fetch', event => {
  // Si la petición es a la API, usar Network with Cache Fallback
  if (event.request.url.includes('/api/')) {
    event.respondWith(networkWithCacheFallback(event.request));
    return;
  }

  // Para el resto de recursos, usar Cache with Network Fallback
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Si está en caché, lo devolvemos pero actualizamos en segundo plano
          updateCache(event.request);
          return cachedResponse;
        }

        return fetch(event.request)
          .then(networkResponse => {
            // Si la respuesta es válida, la guardamos en caché
            if (networkResponse.ok) {
              updateCache(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            // Si falla la red y es una página HTML, devolver página offline
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            // Para otros recursos, mostrar mensaje de error
            return new Response('No hay conexión a Internet', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Función para actualizar caché
function updateCache(request, response) {
  if (!response) {
    return fetch(request)
      .then(newResponse => {
        return caches.open(DYNAMIC_CACHE)
          .then(cache => {
            cache.put(request, newResponse.clone());
            return newResponse;
          });
      });
  }

  return caches.open(DYNAMIC_CACHE)
    .then(cache => {
      cache.put(request, response);
      return response;
    });
}

// Network with Cache Fallback (para API)
function networkWithCacheFallback(request) {
  return fetch(request)
    .then(networkResponse => {
      if (networkResponse.ok) {
        caches.open(DYNAMIC_CACHE)
          .then(cache => cache.put(request, networkResponse.clone()));
      }
      return networkResponse.clone();
    })
    .catch(() => {
      return caches.match(request);
    });
}

// Sincronización en segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'sync-reservas') {
    event.waitUntil(syncData());
  }
});

// Manejo de notificaciones push
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver detalles'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification('Playa Juan', options)
    );
  }
}); 