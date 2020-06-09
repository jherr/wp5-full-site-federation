const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
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
      name: "search",
      library: { type: "var", name: "search" },
      filename: "remoteEntry.js",
      remotes: {
        search: "search",
        home: "home",
        checkout: "checkout",
      },
      exposes: {
        "./Search": "./src/SearchContent",
        "./products": "./src/products",
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
