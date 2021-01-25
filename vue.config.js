// var path = require("path");
const webpack = require("webpack");

module.exports = {
  outputDir: "dist",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        "window.Quill": "quill/dist/quill.js",
        Quill: "quill/dist/quill.js"
      })
    ]
  }
};
