const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  entry: "./packages/index.js",
  mode: "development",
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "mui",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "src"),
    },
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [new VueLoaderPlugin()],
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
      },
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader",
      },
    ],
  },
};
