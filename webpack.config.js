const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production'


module.exports = {
  mode: isProduction ? "production" : 'development',  
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].[hash:7].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: isProduction ? "inline-source-map" : false,
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
        title: 'webpack-ts-demo',
        file: "./dist/index.html",
        template: "index.html"
    })
  ],
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    stats: "errors-only",
    host: 'localhost',
    compress: false,
  },
};