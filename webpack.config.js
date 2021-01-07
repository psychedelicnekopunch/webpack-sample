
const webpack = require('webpack');
const path = require('path')

/*module.exports = {
	entry: './assets/js/app.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public/js'),
	},
}*/

module.exports = {
	entry: './assets/js/app.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public/js'),
	},
	// https://webpack.js.org/plugins/ignore-plugin/
	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/
		}),
	],
}
