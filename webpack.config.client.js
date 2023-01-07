const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/client/index.ts',
  target: "web",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist", "public"),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: path.resolve(__dirname, "dist", "public", "index.html"),
    }),
  ],
};
