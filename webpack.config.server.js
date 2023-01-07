const path = require("path");

module.exports = {
  target: "node",
  entry: "./dist/server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist-js"),
  },
};
