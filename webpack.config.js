const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    name: 'shpng',
    target: 'web',
    entry: [
        'bootstrap-loader',
        path.join(__dirname, 'client', 'sass', 'main.scss'),
        path.join(__dirname, 'client', 'main.js')
    ],
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
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)(.*)$/,
                loader: 'url-loader?limit=10000',
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],
};
