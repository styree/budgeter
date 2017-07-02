var HTMLWebpackPlugin = require('webpack-html-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
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
		]
	},
	output: {
		filename: 'compiled.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};