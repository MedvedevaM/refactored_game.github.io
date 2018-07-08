const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'modal-dialog.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-3'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./../../modal-dialog/img/[name].[ext]",
          },
        },
      },
      {
        test: /\.(cur)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./../../../../css/cursor/[name].[ext]",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "./../../../../css/fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  devtool: 'source-map',
};
