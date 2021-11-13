const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        ...[
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/i,
            threshold: 2048,
            minRatio: 0.8,
          }),
        ]
      )
    }
  },
}
