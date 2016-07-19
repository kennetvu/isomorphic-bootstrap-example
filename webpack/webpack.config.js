const path = require('path');
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
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss'],
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
};

module.exports = config;
