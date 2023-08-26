module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@interfaces':'./src/global/interfaces',
          '@themes':'./src/global/themes',
          '@screens': './src/screens',
          '@appScreens': './src/screens/app',
          '@authScreens': './src/screens/auth',
          '@routes': './src/routes',

        }
      }],
    ],
  };
};
