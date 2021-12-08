module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@types': './src/types',
        },
      },
    ],
  ],
}
