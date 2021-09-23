const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");


const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
  mode : 'development',
  entry : ['babel-polyfill',path.resolve(__dirname, './src/index.js')],
  output : {
      filename : 'bundle.[hash].js',
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
     template: "public/index.html"
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};