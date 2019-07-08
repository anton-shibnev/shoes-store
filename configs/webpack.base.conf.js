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
    main: PATHS.src,
  },
  output: {
    filename: 'assets/js/[name].js',
    path: PATHS.dist,
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
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name][hash].[ext]',
        },
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
            b: 'bem_',
          },
        },
      ],
    },
    ],
  },
  resolve: {
    alias: {
      lib: 'src/lib/js',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
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
  ].concat(htmlPlugins),
};
