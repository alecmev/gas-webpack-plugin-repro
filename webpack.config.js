const GasWebpackPlugin = require("gas-webpack-plugin");

module.exports = {
  entry: "./main.js",
  plugins: [new GasWebpackPlugin({ autoGlobalExportsFiles: ["main.js"] })],
};
