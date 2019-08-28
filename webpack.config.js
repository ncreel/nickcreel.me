const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './assets/scripts')
  },
  module: {
    rules: [
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {test: /\.(scss)$/,
       use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }

        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/',
                    useRelativePath: true,
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  optipng: {
                    enabled: true,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75
                  }
                }
            }
        ]
    }
    ]
  }
};
