const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const fs = require('fs');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  configs: path.join(__dirname, '../configs'),
  pages: path.join(__dirname, '../src/pug/pages'),
  static: path.join(__dirname, '../src/static'),
};

const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => { return fileName.endsWith('.pug'); });

module.exports = {
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: 'assets/js/[name].[hash].js',
    path: PATHS.dist,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: '/node_modules/',
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: `${PATHS.configs}/postcss.config.js`,
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            importer: globImporter(),
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.pug$/,
      use: [
        {
          loader: 'pug-loader',
          options: {
            self: true,
            globals: true,
            pretty: true,
            compileDebug: true,
          },
        },
        {
          loader: 'pug-bem-plain-loader',
          options: {
            b: 'BEM_',
          },
        },
      ],
    },
    ],
  },
  resolve: {
    alias: {
      lib: 'static/lib/js',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash].css',
    }),
    new CopyWebpackPlugin([{
      from: `${PATHS.static}/images`,
      to: 'assets/images',
    },
    {
      from: `${PATHS.static}/fonts`,
      to: 'assets/fonts',
    },
    {
      from: `${PATHS.static}/video`,
      to: 'assets/video',
    },
    ]),

    ...PAGES.map((page) => {
      return new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/, '.html')}`,
      });
    }),
  ],
};
