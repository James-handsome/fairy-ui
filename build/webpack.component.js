const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const webpack = require('webpack');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main:'./packages/index.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name].min.js",
    library: "mui",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new SimpleProgressWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
    }
  })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:[
          {
            loader: "vue-loader",
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                sourceMap: true,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:5].[ext]'
        }
      }
    ]
  },
};
