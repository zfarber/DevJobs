const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlTemplate = require('html-webpack-template');
const { webpack_build: build } = require('./package');

const entryPoint = path.resolve(__dirname, build.entry);

const OUTPUT_DIR = path.resolve(__dirname, build.output);


const htmlConfig = {
  title:      build.title,
  appMountId: build.react_mount_root,
};

/** ************ */

const fontLoaderConfig = {
  name:  'fonts/[name].[ext]',
  limit: 100,
};


if (!('NODE_ENV' in process.env)) require('dotenv').config();

module.exports = {
  mode:  process.env.NODE_ENV,
  entry: {
    main: [
      entryPoint,
    ],

  },
  output: {
    path:       OUTPUT_DIR,
    filename:   'js/[name].js',
    publicPath: '/',
  },
  cache:   true,
  devtool: 'inline-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...htmlConfig,
      xhtml:    true,
      inject:   false,
      favicon:  'favicon.ico',
      template: htmlTemplate,
    }),
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use:  [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader:  'postcss-loader', // Run post css actions
          options: {
            plugins() { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer'),
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.jsx?$/,
        use:  [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader',
        }),
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.ico$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/font-woff',
          },
        }],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/octet-stream',
          },
        }],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'file-loader',
          options: fontLoaderConfig,
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'mimetype=image/svg+xml',
          },
        }],
      },
    ],
  },
};
