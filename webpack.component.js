const { VueloaderPlugin } = require("vue-loader");

const glob = require("glob");

const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
  console.log(list);
}

makeList("components/lib", list);

module.exports = {
  entry: list,
  output: {
    filename: "[name].umd.js",
    path: "dist",
    library: "mui",
    libraryTarget: "umd",
  },
  plugins: [new VueloaderPlugin()],
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
    ],
  },
};
