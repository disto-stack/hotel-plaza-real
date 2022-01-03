const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'javascript', 'index.js'),
        about: path.join(__dirname, 'src', 'javascript', 'about.js'),
        gallery: path.join(__dirname, 'src', 'javascript', 'gallery.js'),
        contact: path.join(__dirname, 'src', 'javascript', 'contact.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/dist`,
        clean: true
    },
    module: {
        rules: [
            { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader",
                options: {
                    partialDirs: [
                        path.join(__dirname, 'src', 'pages', 'partials')
                    ]
                }
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.handlebars'),
            filename: path.join(__dirname, 'dist', 'index.html'),
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'pages', 'about.handlebars'),
            filename: path.join(__dirname, 'dist', 'pages', 'about.html'),
            chunks: ['index', 'about']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'pages', 'gallery.handlebars'),
            filename: path.join(__dirname, 'dist', 'pages', 'gallery.html'),
            chunks: ['index', 'gallery']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'pages', 'contact.handlebars'),
            filename: path.join(__dirname, 'dist', 'pages', 'contact.html'),
            chunks: ['index', 'contact']
        })
    ]
}