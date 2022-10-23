const { merge } = require('webpack-merge')

const HtmlWebpackPlugin      = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const configDev = {
  mode      : 'development',
  output    : {
    publicPath: 'http://localhost:8081/'
  },
  devServer : {
    port               : 8081,
    historyApiFallback : true
    // historyApiFallback: {
    //   index: '/index.html',
    // },
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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(configCommon, configDev)

