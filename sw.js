const CACHE = 'network-or-cache';

// On Install, cache resources.
self.addEventListener('install', function(event) {
	console.log('SW is installing');
	// Ask SW to keep installing until returning promise resolves.
	event.waitUntil(precache());
});

// On Fetch, use cache but update with latest server contents
self.addEventListener('fetch', function(event) {
	console.log('SW is serving it up!');

	// If network fails, get from cache
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if (response) {
					console.log(`Found ${event.request} in cache`);
					return response;
				} else {
					console.log('Can\'t find anything...');
					return fetch(event.request)
						.then(function(response) {
							let responseClone = response.clone();
							caches.open(CACHE)
								.then(function(cache) {
									cache.put(event.request, responseClone);
								});
							return response;
						})
						.catch(function(error) {
							console.log(error);
						});
				}
			}));
});

// Open a cache and use addAll() with an array of assets to add all of them to the cache. Return a promise resolving when all the assets are added.
function precache() {
	return caches.open(CACHE)
		.then(function(cache) {
			return cache.addAll([
				'index.html',
				'restaurant.html'
			]);
		});
}
