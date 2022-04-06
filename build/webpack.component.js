const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const webpack = require('webpack');

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
  plugins: [
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(woff|eot|ttf)\??.*$/,
        loader: "file-loader",
      }
    ],
  },
};
