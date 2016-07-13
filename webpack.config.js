var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.resolve('src/'),
    entry: ['babel-polyfill', './js/app'],
    devtools: "eval-source-map",
    output: {
        publicPath: "/public/assets/",
        path: path.resolve('builds/'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "public"
    },
    watch: process.env.NODE_ENV === "production" ? false : true,
    module: {
        loaders: [{
            test: /\.css$/,
            include: path.resolve( "src/"),
            loader: ExtractTextPlugin.extract(["css"])
        }, {
            test: /\.scss$/,
            include: path.resolve("src/"),
            loader: ExtractTextPlugin.extract(["css", "sass"])
        }, {
            test: /\.js$/,
            include: path.resolve(__dirname, "src/"),
            exclude: "/node_modules",
            loader: "babel-loader",
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]

}
