const { injectBabelPlugin } = require('react-app-rewired')
const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override (config, env) {
  config = injectBabelPlugin([
    'transform-decorators-legacy',
    'transform-class-properties'
  ], config)
  config = rewireEslint(config, env)
  return config
}
