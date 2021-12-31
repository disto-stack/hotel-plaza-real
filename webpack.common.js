const path = require('path')
const handlebarsWebpackPlugin = require('handlebars-webpack-plugin');

module.exports = {
    entry: {
        index: './src/javascript/index.js',
        about: './src/javascript/about.js',
        gallery: './src/javascript/gallery.js',
        contact: './src/javascript/home.js'
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`
    },
    plugins: [
        new handlebarsWebpackPlugin({
            entry: path.join(process.cwd(), 'src', '*.hbs'),
            output: path.join(process.cwd(), 'dist', [path], '[name].html'),
            partials: [
                path.join(process.cwd(), 'src', 'pages', 'partials', '*.hbs')
            ]
        })
    ]
}