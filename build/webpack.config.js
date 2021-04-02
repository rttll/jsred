const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const version = require('../package.json').version;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `jsred.${version}.js`,
  },
  plugins: [new CleanWebpackPlugin()],
};
