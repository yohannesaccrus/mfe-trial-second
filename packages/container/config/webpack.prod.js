const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const domain = process.env.DOMAIN_PRODUCTION

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
        appMarketing : `appMarketing@${domain}/marketing/remoteEntry.js`,
      },
      shared  : packageJson.dependencies
    })
  ]
}

module.exports = merge(configCommon, configProduction)