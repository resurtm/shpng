const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    name: 'shpng',
    target: 'web',
    entry: path.join(__dirname, 'client', 'main.js'),
    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],
};
