'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  // module: {
  //   rules: utils.styleLoaders({
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true,
  //     usePostCSS: true
  //   })
  // },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    publicPath: config.dev.assetsPublicPath,
    filename: utils.assetsPath('js/[name].[chunkhash].bundle.js'),
    //自定义chunk名字
    // chunkFilename: utils.assetsPath('js/[id].[chunkhash].bundle.js')
  },
  // 设置 可以关闭 编译警告提醒
  performance: { hints: false },
  plugins: [
    /* *
    * 注意，因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。
    通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。
    * */
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // 用正确的资源哈希值生成dist.html用于缓存。你可以通过编辑/index.html自定义输出
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // chunksSortMode: 'dependency'
    }),
    // keep module.id stable when vendor modules does not change
    // new webpack.HashedModuleIdsPlugin(),

    // 每次打包文件先清除旧文件
    new CleanWebpackPlugin(),

  ],
  optimization: {  //配置优化
    minimize: true,
    minimizer: [
      // new UglifyJsPlugin() // 压缩js文件
      // 压缩javascript
      new TerserWebpackPlugin({
        parallel: true, //使用多进程并发运行以提高构建速度。 并发运行的默认数量： os.cpus().length - 1 
      })
    ],
    splitChunks: {
      // 这表明将选择哪些 chunk 进行优化。当提供一个字符串，有效值为 all，async 和 initial。
      // 设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
      chunks: 'all',
      minSize: 20000, //生成 chunk 的最小体积（以 bytes 为单位
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1, //拆分前必须共享模块的最小 chunks 数。
      maxAsyncRequests: 30, //按需加载时的最大并行请求数。
      maxInitialRequests: 30, //入口点的最大并行请求数。
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // commons: {
        //   name: 'commons',
        //   chunks: 'initial',
        //   minChunks: 2,
        // },
        // commons: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'vendors',
        //   chunks: 'all',
        // },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // }
      }
    }
  }
})

// 对打包文件进行压缩
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}
// 在打包结束之后能将各个包的内容、信息、占比以图形化界面表现出来，界面中还有其他的交互和过滤器
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
