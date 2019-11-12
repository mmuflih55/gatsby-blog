const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.onCreateWebpackConfig = function (_ref4, _ref5) {
  var store = _ref4.store,
      stage = _ref4.stage,
      getConfig = _ref4.getConfig,
      plugins = _ref4.plugins,
      pathPrefix = _ref4.pathPrefix,
      loaders = _ref4.loaders,
      rules = _ref4.rules;
  var modulePath = _ref5.modulePath,
      customizeWebpackConfig = _ref5.customizeWebpackConfig,
      _ref5$publicPath = _ref5.publicPath,
      publicPath = _ref5$publicPath === void 0 ? "adminlogin" : _ref5$publicPath,
      _ref5$enableIdentityW = _ref5.enableIdentityWidget,
      enableIdentityWidget = _ref5$enableIdentityW === void 0 ? true : _ref5$enableIdentityW,
      _ref5$htmlTitle = _ref5.htmlTitle,
      htmlTitle = _ref5$htmlTitle === void 0 ? "Content Manager" : _ref5$htmlTitle,
      _ref5$htmlFavicon = _ref5.htmlFavicon,
      htmlFavicon = _ref5$htmlFavicon === void 0 ? "" : _ref5$htmlFavicon,
      _ref5$manualInit = _ref5.manualInit,
      manualInit = _ref5$manualInit === void 0 ? false : _ref5$manualInit,
      _ref5$includeRobots = _ref5.includeRobots,
      includeRobots = _ref5$includeRobots === void 0 ? false : _ref5$includeRobots;

  if (!["develop", "build-javascript"].includes(stage)) {
    return Promise.resolve();
  }

  var gatsbyConfig = getConfig();

  var _store$getState2 = store.getState(),
      program = _store$getState2.program;

  var publicPathClean = (0, _lodash.trim)(publicPath, "/");
  var config = (0, _extends2["default"])({}, gatsbyConfig, {
    entry: {
      cms: [manualInit && __dirname + "/cms-manual-init.js", __dirname + "/cms.js", enableIdentityWidget && __dirname + "/cms-identity.js"].concat(modulePath).filter(function (p) {
        return p;
      })
    },
    output: {
      path: _path["default"].join(program.directory, "public", publicPathClean)
    },
    module: {
      rules: deepMap(gatsbyConfig.module.rules, replaceRule).filter(Boolean)
    },
    plugins: [].concat(gatsbyConfig.plugins.filter(function (plugin) {
      return !["MiniCssExtractPlugin", "GatsbyWebpackStatsExtractor"].find(function (pluginName) {
        return plugin.constructor && plugin.constructor.name === pluginName;
      });
    }), [
    /**
     * Provide a custom message for Netlify CMS compilation success.
     */
    stage === "develop" && new _friendlyErrorsWebpackPlugin["default"]({
      clearConsole: false,
      compilationSuccessInfo: {
        messages: ["Netlify CMS is running at " + (program.ssl ? "https" : "http") + "://" + program.host + ":" + program.port + "/" + publicPathClean + "/"]
      }
    }), // Use a simple filename with no hash so we can access from source by
    // path.
    new _miniCssExtractPlugin["default"]({
      filename: "[name].css"
    }), // Auto generate CMS index.html page.
    new _htmlWebpackPlugin["default"]({
      title: htmlTitle,
      favicon: htmlFavicon,
      chunks: ["cms"],
      excludeAssets: [/cms.css/],
      meta: {
        robots: includeRobots ? "all" : "none" // Control whether search engines index this page

      }
    }), // Exclude CSS from index.html, as any imported styles are assumed to be
    // targeting the editor preview pane. Uses `excludeAssets` option from
    // `HtmlWebpackPlugin` config.
    new _htmlWebpackExcludeAssetsPlugin["default"](), // Pass in needed Gatsby config values.
    new _webpack["default"].DefinePlugin({
      __PATH__PREFIX__: pathPrefix,
      CMS_PUBLIC_PATH: JSON.stringify(publicPath)
    })]).filter(function (p) {
      return p;
    }),
    // Remove common chunks style optimizations from Gatsby's default
    // config, they cause issues for our pre-bundled code.
    mode: stage === "develop" ? "development" : "production",
    optimization: {
      // Without this, node can get out of memory errors when building for
      // production.
      minimizer: stage === "develop" ? [] : gatsbyConfig.optimization.minimizer
    },
    devtool: stage === "develop" ? "cheap-module-source-map" : "source-map"
  });

  if (customizeWebpackConfig) {
    customizeWebpackConfig(config, {
      store: store,
      stage: stage,
      pathPrefix: pathPrefix,
      getConfig: getConfig,
      rules: rules,
      loaders: loaders,
      plugins: plugins
    });
  }

  return new Promise(function (resolve, reject) {
    if (stage === "develop") {
      (0, _webpack["default"])(config).watch({}, function () {});
      return resolve();
    }

    return (0, _webpack["default"])(config).run(function (err, stats) {
      if (err) return reject(err);
      var errors = stats.compilation.errors || [];
      if (errors.length > 0) return reject(stats.compilation.errors);
      return resolve();
    });
  });
};