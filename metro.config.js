// const {getDefaultConfig} = require('metro-config');

// module.exports = (async () => {
//   const config = await getDefaultConfig(__dirname);
//   const {transformer, resolver} = config;

//   config.transformer = {
//     ...transformer,
//     babelTransformerPath: require.resolve('react-native-sass-transformer'),
//   };

//   config.resolver = {
//     ...resolver,
//     assetExts: resolver.assetExts.filter(
//       ext => ext !== 'svg' && ext !== 'scss',
//     ),
//     sourceExts: [...resolver.sourceExts, 'svg', 'scss', 'sass'],
//   };

//   return config;
// })();

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'scss', 'sass'],
    },
  };
})();
