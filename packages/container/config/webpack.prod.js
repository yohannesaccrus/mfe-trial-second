const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const configProduction = {
  mode      : 'production',
  output    : {
    filename   : '[name].[contenthash].js',
    publicPath : '/container/latest/' 
  },
  plugins   : [
    new ModuleFederationPlugin({
      name    : 'container',
      remotes : {
        appMarketing : `appMarketing@${domain}/marketing/latest/remoteEntry.js`,
        appAuth : `appAuth@${domain}/auth/latest/remoteEntry.js`,
      },
      shared  : packageJson.dependencies
    })
  ]
}

module.exports = merge(configCommon, configProduction)