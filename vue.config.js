
const path = require('path');

module.exports = {
  // alias: {
  //   'ab-vue': path.join(__dirname, 'src/lib-components'),
  // },
  // 选项
  configureWebpack: {
    plugins: [

    ],

  },

  chainWebpack: config => {
    config.resolve.alias
        .set('#', path.resolve(__dirname, 'src/lib-components'));
    // config.resolve.alias
    //   .set('#', path.resolve(__dirname, 'src/lib-components'));
  },
  css: {
    sourceMap: true,
  }
}
