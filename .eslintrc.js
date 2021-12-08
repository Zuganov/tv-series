module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 0,
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    'react-hooks/exhaustive-deps': 0,
  },
}
