const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "iview.min.js",
    library: "iview",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            less: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "less-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          postLoaders: {
            html: "babel-loader?sourceMap",
          },
          sourceMap: true,
        },
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
        loaders: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=8192",
      },
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader",
      },
    ],
  },
};
