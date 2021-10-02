module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,png,html,js,json}'
	],
	// To create sw without src file 
	// runtimeCaching: [{
	// 	urlPattern: /https:\/\/randomuser\.me\/api\/portraits\/med\/(men|women)\/(.+)\.(?:jpeg|jpg)/,
	// 	handler: 'CacheFirst',
	// 	options: {
	// 		expiration: {maxEntries: 10},
	// 		cacheName: 'random-user'
	// 	}
	// }],
	swDest: 'public/serviceworker.js',
	swSrc: 'sw-wb.js'
};