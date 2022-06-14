const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@containers': path.resolve(__dirname, 'src/containers/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      }
  },
  module: {
    rules: [ {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
        }
      ]
    },
    {
      test: /\.(css|scss)$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      type: 'asset'
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}