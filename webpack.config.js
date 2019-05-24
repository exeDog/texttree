'use strict';

let path = require('path');
let PROJECT_DIR = __dirname;

module.exports = {
    entry: path.join(PROJECT_DIR, 'src', 'index.js'),
    output: {
        path: path.join(PROJECT_DIR, 'resources', 'js'),
        filename: 'bundle.js',
        publicPath: '/resources/js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }

        ]
    },
    devServer: {
        open: true
    },
    devtool: '#source-map'
};
