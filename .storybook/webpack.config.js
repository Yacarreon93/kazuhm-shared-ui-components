const fs = require('fs');
const path = require('path');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    minimize: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
  },
};

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.module\.scss$/,
            include: resolveApp('src'),
            loaders: [
              require.resolve('style-loader'),
              CSSModuleLoader,
              require.resolve('sass-loader'),
            ],
          },
          {
            test: /\.scss$/,
            include: resolveApp('src'),
            loaders: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('sass-loader'),
            ],
          },
          {
            test: /\.(jpg|png|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10 * 1024,
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    enabled: false,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
};