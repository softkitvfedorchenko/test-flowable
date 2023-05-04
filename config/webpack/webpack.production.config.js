const { rules, modules } = require("./configOptions");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function override(config, env) {
  config.output.publicPath = "/sp/";

  // "postcss" loader applies autoprefixer to our CSS.
  // "css" loader resolves paths in CSS and adds assets as dependencies.
  // "style" loader turns CSS into JS modules that inject <style> tags.
  // MiniCssExtractPlugin.loader extracts CSS to a file
  const postcss = {
    test: /\.css$/,
    exclude: [
      /\.(min|global).css$/,
      /node_modules\/(?!(react-datepicker|@bit)\/).*/
    ],
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {}
      },
      {
        loader: require.resolve("css-loader"),
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: "[path][name]___[local]"
          }
        },
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: "postcss",
          plugins: () => rules.postCssPlugins,
        },
      },
    ],
  };

  config.resolve.modules = modules;

  config.module.rules = [
    { parser: { requireEnsure: false } },
    {
      // "oneOf" will traverse all following loaders until one will
      // match the requirements. When no loader matches it will fall
      // back to the "file" loader at the end of the loader list.
      oneOf: [
        // "url" loader works like "file" loader except that it embeds assets
        // smaller than specified limit in bytes as data URLs to avoid requests.
        // A missing `test` is equivalent to a match.
        rules.staticImages,
        rules.babelifyScripts,
        rules.babelifyScriptsExcludeRuntime,
        rules.componentifySvgs,
        postcss,
        rules.globalCss,
        rules.fileLoaderRawJs,
        rules.fileLoaderCatchall
      ],
    },
    // ** STOP ** Are you adding a new loader?
    // Make sure to add the new loader(s) before the "file" loader.
  ];

  return config;
};
