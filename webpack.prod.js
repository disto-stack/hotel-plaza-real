const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const common = require("./webpack.common")

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(c|sc|sa)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css",
		}),
	],
})
