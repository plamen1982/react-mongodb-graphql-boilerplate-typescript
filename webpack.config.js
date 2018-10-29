// Imports: Dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

// Webpack Configuration
const config = {
  // Entry
  entry: './client/src/index.tsx',
  // Output
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules: [
      // TypeScript/TSX Files
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
      // JavaScript Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'source-map-loader',
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Image Files
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
  ],
  // What Does This Do (COMEBACK)
  // externals: {
  //   react: 'React',
  //   react-dom: 'ReactDOM',
  // },
  // Reload On File Change
  watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
};

// Exports
module.exports = config;
