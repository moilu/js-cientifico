const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
        publicPath: 'auto', 
        library: {
            type: "umd",
            name: "MyLibrary", 
        }
    },
    module:{
        rules:[{
            test: /\.js?$/,
            include: [
                path.resolve(__dirname, "dist")
              ],
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ["es2015"]
              },
        }]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
        })
    ]

}
