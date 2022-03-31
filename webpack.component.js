const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./packages/index.js",
  mode: "development",
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "mui",
    libraryTarget: "umd",
  },
  plugins: [
    new VueLoaderPlugin(),
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
        use: [
          {
            loader: "vue-loader",
          },
        ],
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
        loader: "url-loader?limit=8192",
      },
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader",
      },
    ],
  },
};
