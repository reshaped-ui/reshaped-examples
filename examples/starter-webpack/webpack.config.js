/**
 * Comment out everything MiniCssExtractPlugin related for a prod css example
 */

const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[contenthash].js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader", 
            options: {
              modules: {
                // Let Webpack determine whether it's a CSS module based on filename convention.
                // *.module.css --> mode: local
                // *.css --> mode: global
                auto: true,
                // This block ensure css-loader < 7.x behaviour.
                // Default exports, no identifiers rewrite.
                namedExport: false,
                exportLocalsConvention: 'as-is',              
              },
            },
          },
          {
            loader: "postcss-loader"
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Reshaped Webpack Example",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    compress: true,
    port: 4000,
  },
};
