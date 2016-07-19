const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const projectFolder = process.cwd();

const config = {
    entry: {
        app: ['./src/client.js']
    },

    output: {
        filename: '[name].js',
        path: path.join(projectFolder, 'public/dist'),
    },

    module: {
        loaders: [
            { // Load js files but not node_modules
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            { //Load sass files
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', ["css", "sass"])
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            // Bootstrap 3
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss'],
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
        })
    ],
};

module.exports = config;
