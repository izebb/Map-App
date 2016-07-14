var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('src/'),
    entry: ['babel-polyfill', './index'],
    devtools: "eval-source-map",
    output: {
        publicPath: "/public/assets/",
        path: path.resolve('builds/'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "public"
    },
    watch: process.env.NODE_ENV  === "production" ? false : true,
    module: {
        loaders: [{
            test: /\.css$/,
            exclude: /node_modules/,
            include: path.resolve("src/"),
            loader: ExtractTextPlugin.extract(["css"])
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract(["css", "sass"])
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

}
