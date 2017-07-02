var HTMLWebpackPlugin = require('webpack-html-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		__dirname + '/app/index.js',
		__dirname + '/app/styles/core.scss',
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				exclude: '/node_modules/',
				loader: "babel-loader",
				test: /\.jsx?$/
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader',])
			}
		]
	},
	output: {
		filename: 'compiled.js',
		path: __dirname + '/build'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin({
			filename: 'core.css',
			allChunks: true,
		})
	]
};