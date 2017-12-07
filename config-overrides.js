const { injectBabelPlugin } = require('react-app-rewired')
const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override (config, env) {
  config = injectBabelPlugin([
    'transform-class-properties',
    'transform-decorators-legacy',
    ['import', {
      libraryName: 'antd',
      style: 'less'
    }]
  ], config)
  config = rewireEslint(config, env)
  return config
}
