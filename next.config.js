const envFile = process.env.NODE_ENV;
const path = require('path');
const hokkaido = require('@proprioo/hokkaido');
const Dotenv = require('dotenv-webpack');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withImages = require('next-images');
const git = require('git-rev-sync');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps')();

const { generateUrlPath } = hokkaido;

const configs = withImages({
  inlineImageLimit: 8192,
  exclude: path.resolve(__dirname, 'src/assets/icons/'),
  distDir: 'build',
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  assetPrefix: generateUrlPath(),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../explorer/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../explorer/client.html'
    }
  },
  generateBuildId: async () => git.long(),
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, `.env.${envFile}`),
        systemvars: true
      }),
      new MomentLocalesPlugin({
        localesToKeep: ['fr']
      })
    ];
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    return config;
  }
});

module.exports = withBundleAnalyzer(withSourceMaps({ ...configs }));
