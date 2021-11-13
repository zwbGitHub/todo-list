const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let isProduction = process.env.NODE_ENV
module.exports = {
    configureWebpack: config => {
        // 生产环境相关配置
        if (isProduction == "production") {
        // 代码压缩
        config.plugins.push(
        new UglifyJsPlugin({
        uglifyOptions: {
        //生产环境自动删除 console
        warnings: false,
        compress: {
        // warnings: false, // 若打包错误，则注释这行
        drop_debugger: true,
        drop_console: true,
        pure_funcs: ['console.log']
        }
        },
        sourceMap: false,
        parallel: true
        })
        ) } }
}
