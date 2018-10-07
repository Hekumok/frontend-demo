module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['errors', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': ['error', { 'allow': ['state', 'getters'] }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
