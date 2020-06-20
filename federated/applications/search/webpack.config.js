const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const DashboardPlugin = require("@module-federation/dashboard-plugin");

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
      shared: require("./package.json").dependencies,
    }),
    new DashboardPlugin({
      dashboardURL: "http://localhost:3000/api/update",
      metadata: {
        source: {
          url: "http://github.com",
        },
        remote: "http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
