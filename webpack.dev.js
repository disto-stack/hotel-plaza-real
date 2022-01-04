const { merge } = require("webpack-merge")
const path = require("path")
const common = require("./webpack.common")

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	target: "web",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 8080,
		open: true,
		hot: true,
		watchFiles: [
			"src/**/*.handlebars",
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
})
