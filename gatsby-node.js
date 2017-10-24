// const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
// const { cssModulesConfig } = require(`gatsby-1-config-css-modules`);

// exports.modifyWebpackConfig = ({ config, stage }, options) => {
//   // Pass in plugins regardless of stage.
//   // If none specified, fallback to Gatsby default postcss plugins.
//   if (options.postCssPlugins) {
//     config.merge(current => {
//       current.postcss = options.postCssPlugins;
//       return current;
//     });
//   }

//   const sassFiles = /\.css$/;
//   const sassModulesFiles = /\.module\.css$/;

//   switch (stage) {
//     case `develop`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loaders: [`style`, `postcss`]
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loaders: [`style`, cssModulesConfig(stage), `postcss`]
//       });
//       return config;
//     }
//     case `build-css`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loader: ExtractTextPlugin.extract([`css?minimize`, `postcss`])
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loader: ExtractTextPlugin.extract(`style`, [
//           cssModulesConfig(stage),
//           `postcss`
//         ])
//       });
//       return config;
//     }
//     case `develop-html`:
//     case `build-html`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loader: `null`
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loader: ExtractTextPlugin.extract(`style`, [
//           cssModulesConfig(stage),
//           `postcss`
//         ])
//       });
//       return config;
//     }
//     case `build-javascript`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loader: `null`
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loader: ExtractTextPlugin.extract(`style`, [cssModulesConfig(stage)])
//       });
//       return config;
//     }
//     default: {
//       return config;
//     }
//   }
// };
