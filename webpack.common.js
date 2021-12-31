const path = require('path')

const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
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
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
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
        })
    ]
}