const { merge } = require('webpack-merge')

const HtmlWebpackPlugin      = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const configDev = {
  mode      : 'development',
  output    : {
    publicPath: 'http://localhost:8082/'
  },
  devServer : {
    port               : 8082,
    // historyApiFallback: {
    //   index: '/index.html',
    // },
    historyApiFallback : true
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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(configCommon, configDev)

