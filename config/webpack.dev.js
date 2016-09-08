var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.join(__dirname, "../public", "dist"),
        publicPath: 'http://localhost:3004/dist/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        hot: true,
        inline: true,
        host: 'localhost',
        port: 3004,
        proxy: {
        	'*': 'http://localhost:' + (process.env.PORT || 3000)
        },
        historyApiFallback: true,
        stats: 'minimal',
    }
});
