// .eslintrc.js
module.exports = {
  root: true,
  env: { node: true, es6: true, 'jest/globals': true },
  parser: '@typescript-eslint/parser',

  // We want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: ['!.prettierrc.js'],

  plugins: ['jest'],

  // We extends eslint recommended rules
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],

  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}
