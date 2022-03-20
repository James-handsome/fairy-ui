module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, //允许链式调用的换行
      },
    },
  },
};
