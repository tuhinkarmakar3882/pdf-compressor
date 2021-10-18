module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'standard',
    'prettier',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', 'nuxt'],
  rules: {},
}
