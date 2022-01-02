const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/javascript/index.js',
        about: './src/javascript/about.js',
        gallery: './src/javascript/gallery.js',
        contact: './src/javascript/contact.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/dist/javascript`,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    "css-loader", 
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HandlebarsWebpackPlugin({
            entry: path.join(process.cwd(), 'src', '**', '*.hbs'),
            output: path.join(process.cwd(), 'dist', '[path]','[name].html'),
            partials: [
                path.join(process.cwd(), 'src', 'pages', 'partials', '*.hbs')
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '../main.css'
        })
    ]
}