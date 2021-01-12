
/*const path = require('path')

module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public/js'),
	},
}*/

/*const webpack = require('webpack');
const path = require('path')

module.exports = {
	entry: './app/main.js',
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
}*/

/*const webpack = require('webpack');
const path = require('path')

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/script.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { url: false },
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/,
		}),
	],
}*/


const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/script.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
		}),
	],
}
