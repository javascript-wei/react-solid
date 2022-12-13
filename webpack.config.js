const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: 'bundle.[contenthash:10].js',
    // publicPath:"http://localhost:9000/weqwe",
  },
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx|.js$|.ts|.tsx/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react"]
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  mode: 'development',
  devServer: {
    compress: true,
    port: 9000,
    open: true,
  },
}