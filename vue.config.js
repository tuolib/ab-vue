
const path = require('path');

module.exports = {
  // alias: {
  //   '@vant-use': path.join(__dirname, 'vant-use')
  // },
  // 选项
  configureWebpack: {
    plugins: [

    ],

  },

  chainWebpack: config => {
    config.resolve.alias
        .set('#', path.resolve(__dirname, 'src/lib-components'));
  },
  css: {
    sourceMap: true,
  }
}
