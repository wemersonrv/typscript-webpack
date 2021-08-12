const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // development
  entry: "./src/main.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.min.js",
  },
  plugins: [
    new CopyPlugin([
      { from: "public" },
    ])
  ],
  resolve: {
    extensions: [".ts", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
