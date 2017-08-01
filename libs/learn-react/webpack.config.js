const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports ={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ 
                    fallback: "style-loader",
                    use: "css-loader" 
                })
            }
        ]
    },
     plugins: [
        new CleanWebpackPlugin('dist'),
        new ExtractTextPlugin("styles.css"),
    ],
    devtool:"source-map"
}