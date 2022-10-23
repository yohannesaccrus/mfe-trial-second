const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const configProduction = {
  mode      : 'production',
  output    : {
    filename   : '[name].[contenthash].js',
    publicPath : '/auth/latest/'
  },
  plugins   : [
    new ModuleFederationPlugin({
      name     : 'appAuth',
      filename : 'remoteEntry.js',
      exposes  : {
        './AppAuth': './src/bootstrap'
      },
      shared   : packageJson.dependencies
    }),
  ]
}

module.exports = merge(configCommon, configProduction)