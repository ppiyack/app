module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.jsx',
          '.js',
          '.tsx',
          '.ts',
          '.json',
        ],
        alias: {
          '@': './',
        },
      },
    ],
  ],
};
