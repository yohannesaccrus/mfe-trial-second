const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const configProduction = {
  mode      : 'production',
  output    : {
    filename   : '[name].[contenthash].js',
    publicPath : '/marketing/latest/'
  },
  plugins   : [
    new ModuleFederationPlugin({
      name     : 'appMarketing',
      filename : 'remoteEntry.js',
      exposes  : {
        './AppMarketing': './src/bootstrap'
      },
      shared   : packageJson.dependencies
    }),
  ]
}

module.exports = merge(configCommon, configProduction)