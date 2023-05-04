const { paths, resolveApp } = require("./utils");

const eslint = {
  test: /\.(js|jsx|mjs|ts|tsx)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        formatter: require('react-dev-utils/eslintFormatter'),
        eslintPath: require.resolve('eslint'),
        baseConfig: {
          extends: [
            require.resolve('eslint-config-react-app'),
          ]
        },
        ignore: false,
        useEslintrc: false
      },
      loader: require.resolve('eslint-loader'),
    },
  ],
  include: paths.appSrc,
};

// "url" loader works like "file" loader except that it embeds assets
// smaller than specified limit in bytes as data URLs to avoid requests.
// A missing `test` is equivalent to a match.
const staticImages = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: require.resolve('url-loader'),
  options: {
    limit: 10000,
    name: 'static/media/[name].[hash:8].[ext]',
  },
};

const babelifyScripts = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: [
      resolveApp("src"),
      /* if any node modules need to run through babel, add them here */
  ],
  exclude: [/^.*\.raw\.js$/],
  loader: require.resolve('babel-loader'),
  options: {
    customize: require.resolve('babel-preset-react-app/webpack-overrides.js'),
    babelrc: false,
    configFile: false,
    presets: [require.resolve('babel-preset-react-app')],
    plugins: [
      require.resolve("babel-plugin-styled-components"),
      require.resolve("@babel/plugin-proposal-optional-chaining"),
      require.resolve("@babel/plugin-transform-arrow-functions"),
      [
        require.resolve('babel-plugin-named-asset-import'),
        { loaderMap: { svg: { ReactComponent: '@svgr/webpack?-svgo,+ref![path]' } } }
      ]
    ],
    cacheDirectory: true,
    cacheCompression: false,
    compact: false
  }
};

const babelifyScriptsExcludeRuntime = {
  test: /\.(js|jsx|mjs)$/,
  exclude: [/@babel(?:\/|\\{1,2})runtime/, /^.*\.raw\.js$/],
  loader: require.resolve('babel-loader'),
  options:
    {
      babelrc: false,
      configFile: false,
      compact: false,
      presets: [
        [
          require.resolve("babel-preset-react-app/dependencies.js"),
          { helpers: true }
        ]
      ],
      cacheCompression: false,
      sourceMaps: true,
      inputSourceMap: true,
      cacheDirectory: true,
    }
};

const componentifySvgs = {
  test: /\.svg$/,
  use: [
    require.resolve("desvg-loader/react"),
    require.resolve("svg-loader"),
  ]
};

const fileLoaderRawJs = {
  test: /^.*\.raw\.js$/,
  loader: require.resolve('file-loader'),
  options: {
    name: 'static/media/[name].[hash:8].[ext]'
  }
};

const fileLoaderCatchall = {
  loader: require.resolve('file-loader'),
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
  options: {
    name: 'static/media/[name].[hash:8].[ext]'
  }
};

const postCssPlugins = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-custom-media')({
    importFrom: [
      'src/globals/css/variables/media-queries.css'
    ]
  }),
  require('postcss-flexbugs-fixes'),
  require('postcss-preset-env')({
    importFrom: [],
    autoprefixer: {
      grid: true,
      flexbox: 'no-2009'
    },
    stage: 0
  }),
];

const globalCss = {
  test: [
    /node_modules\/.*\/dist\/.*.css/,
    /\.(min|global).css$/
  ],
  use: [
      {
        loader: 'style-loader',
        options: { injectType: "linkTag" }
      },
      {
        loader: 'file-loader',
        options: { outputPath: 'static/css' }
      }
  ]
};

const modules = [
  paths.appSrc,
  resolveApp('node_modules')
];

module.exports = {
  modules,
  rules: {
    eslint,
    staticImages,
    babelifyScripts,
    babelifyScriptsExcludeRuntime,
    componentifySvgs,
    postCssPlugins,
    globalCss,
    fileLoaderRawJs,
    fileLoaderCatchall,
  }
};