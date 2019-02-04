const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.base');


webpackConfig.entry.main.push('webpack-hot-middleware/client');
webpackConfig.devServer = {
  ...webpackConfig.devServer,
  contentBase: path.join(__dirname, 'dist'),
};

webpackConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    debug: true,
  }),
  new webpack.HotModuleReplacementPlugin(),
);

module.exports = webpackConfig;
