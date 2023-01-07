const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/server/index.ts",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};
