const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    entry: ["babel-polyfill", path.resolve(__dirname, "src/server/index.js")],

    target: "node",
    externals: [nodeExternals()],

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/"
    },

    module: {
      rules: [
        {
          test: /\.(jsx|es6)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
];
