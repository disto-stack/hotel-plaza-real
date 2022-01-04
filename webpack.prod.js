const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ]
})