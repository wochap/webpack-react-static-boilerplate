const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard'
  ],
  'plugins': [
    'jsx-a11y',
    'react'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack/config.base.babel.js'
      }
    }
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  rules: {
    'no-console': DEBUG ? 0 : 2,
    'no-debugger': DEBUG ? 0 : 2
  }
}
