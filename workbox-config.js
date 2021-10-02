module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,png,html,js,json}'
	],
	swDest: 'public/serviceworker.js',
	swSrc: 'sw-wb.js'
};