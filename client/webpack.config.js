const webpack = require("webpack");
module.exports = {
	entry: [
		"react-hot-loader/patch",
		"./src/index.tsx"
	],

	output: {
		path: __dirname + '/public/dist/',
		filename: "main.js",
		publicPath: '/dist'
	},

	devtool: 'inline-source-map',

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
				test: /\.(t|j)sx?$/,
				use: [
					"react-hot-loader/webpack",
					'awesome-typescript-loader',
				],
				exclude: /node_modules/,
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
				exclude: [/node_modules/, /dist/, /__test__/],
			}
		]
	},
	devServer: {
		hot: true
	}
};
