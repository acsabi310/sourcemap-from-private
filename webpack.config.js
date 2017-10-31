const path = require('path');
var webpack = require('webpack');
// const extractor = require('extract-text-webpack-plugin');
// const eFrame = new extractor({filename})

module.exports = {
	entry: {
		'common': './src/a.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader']
			/* exclude: [
				path.resolve(__dirname, './src/b2.js')
			]*/
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	output: {
		path: path.resolve(__dirname, './dist/common'),
		filename: '[name].bundle.js',		// [name] entry-ből a kulcs, itt 'common/common'
		publicPath: '/static/sfkb'
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: './[hash]/[name].bundle.js.map',
			append: '\n//# sourceMappingURL=https://github.com/animercsaba/sourcemap-from-private/blob/master/dist/common/[url]'
		})
	],
};
