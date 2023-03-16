const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latestx/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        appMarketing: `appMarketing@${domain}/marketing/latest/remoteEntry.js`,
        appAuth: `appAuth@${domain}/auth/latest/remoteEntry.js`,
        appDashboard: `appDashboard@${domain}/auth/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
