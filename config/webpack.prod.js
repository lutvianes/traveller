var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: path.join(__dirname, "../public", "dist"),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    htmlLoader: {
        minimize: false
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
