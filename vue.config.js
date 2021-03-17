/*
 * @Author: whr2349
 * @Date: 2021-03-08 14:49:27
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-08 14:50:22
 * @Description: file content
 * @FilePath: \webadmin\vue.config.js
 */
module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    // 要公用的scss的路径
                    resources: './src/whrscss.scss'
                })
                .end()
        })
    }
}
