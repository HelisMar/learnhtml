const PurgecssPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            { 
                test: /\.txt$/,
                use: 'raw-loader' 
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.coffee$/,
                use: ['coffee-loader']
            },
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'

            
        }),
        new MiniCssExtractPlugin(),
        //new PurgecssPlugin({
          //  paths: glob.sync(`./src/**/*`,  { nodir: true }),
        //}),
        new VueLoaderPlugin()
    ],
};