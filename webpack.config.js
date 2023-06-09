const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  //index.js 파일을 가져와서, dist/bundle.js 라는 파일에 결과물을 만든다.
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
};
