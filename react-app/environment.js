const express = require('express');
const logger = require('morgan');

const stack = [];

module.exports = (env) => {
  switch (env) {
    case 'development':
      const webpack = require('webpack');
      const middleware = require('webpack-dev-middleware');
      const hotMiddleware = require('webpack-hot-middleware');
      const webpackConfig = require('./webpack.config.development');

      const compiler = webpack(webpackConfig);


      stack.push(middleware(compiler, {
        noInfo:     true,
        publicPath: webpackConfig.output.publicPath,
      }));

      stack.push(hotMiddleware(compiler));

      stack.push(logger('dev'));
      return stack;

    default:
      stack.push(express.static('dist'));


      stack.push(logger('common'));
      return stack;
  }
};
