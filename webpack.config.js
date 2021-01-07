const path = require('path')

module.exports = {
	entry: './assets/js/app.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public/js'),
	},
}
