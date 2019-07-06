addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('jeanpaul1304').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.js',
                '/canvas.js',
                '/main.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});