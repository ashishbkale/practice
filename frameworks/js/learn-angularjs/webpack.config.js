const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path =require('path');

const  config = {
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
    },
    devtool: 'eval'
}

module.exports = config;