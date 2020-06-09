const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      library: { type: "var", name: "home" },
      filename: "remoteEntry.js",
      remotes: {
        home: "home",
        search: "search",
        checkout: "checkout",
      },
      exposes: {
        "./Home": "./src/HomeContent",
        "./Frame": "./src/Frame",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-bootstrap",
        "react-bootstrap-icons",
        "react-query",
        "react-redux",
        "redux",
      ],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
