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
  pages: path.join(__dirname, '../src/pages'),
  static: path.join(__dirname, '../static'),
  assets: 'assets/',
};

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.pug`),
    });
  });
}

const htmlPlugins = generateHtmlPlugins('../src/pages');

module.exports = {
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}/js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/',
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
            pretty: true,
          },
        },
        {
          loader: 'pug-bem-plain-loader',
          options: {
            b: 'b_',
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
      filename: `${PATHS.assets}/css/[name].[hash].css`,
    }),
    new CopyWebpackPlugin([{
      from: `${PATHS.static}/images`,
      to: `${PATHS.assets}/images`,
    },
    {
      from: `${PATHS.static}/fonts`,
      to: `${PATHS.assets}/fonts`,
    },
    {
      from: `${PATHS.static}/video`,
      to: `${PATHS.assets}/video`,
    },
    ]),
  ].concat(htmlPlugins),
};
