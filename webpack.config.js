const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new DotenvWebpackPlugin(),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|webp)$/,
        loader: "url-loader",
        // options: { limit: false },
      },
    ],
  },
  devtool: "source-map",
  optimization: {
    concatenateModules: true,
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: true,
        changeOrigin: true,
      },
    },
    headers: {
      "X-Ratelimit-Limit": " 20000",
      "X-Ratelimit-Remaining": "19684",
      "X-Ratelimit-Reset": "1590529646",
      "Set-Cookie": "widget_session=abc123; SameSite=None; Secure",
    },
  },
};
