// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true
//   },
//   parserOptions: {
//   },
//   extends: [
//     '@nuxtjs/eslint-config-typescript',
//     'prettier',
//     'prettier/vue',
//     'plugin:prettier/recommended',
//     'plugin:nuxt/recommended'
//   ],
//   plugins: [
//     'prettier'
//   ],
//   // add your custom rules here
//   rules: {
//   }
// }
module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'quotes': ['error', 'single'],
    'space-before-function-paren': ['error', 'never'],
    'arrow-parens': 0,
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
}