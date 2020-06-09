const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
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
      name: "checkout",
      library: { type: "var", name: "checkout" },
      filename: "remoteEntry.js",
      remotes: {
        checkout: "checkout",
        search: "search",
        home: "home",
      },
      exposes: {
        "./Checkout": "./src/CheckoutContent",
        "./AddToCart": "./src/AddToCart",
        "./checkout": "./src/checkout",
        "./store": "./src/store",
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
        "redux-thunk",
      ],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
