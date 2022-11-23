const { defineConfig } = require('@vue/cli-service')
const pxtorem = require('postcss-pxtorem');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions:{
        plugins: [
          pxtorem({
            rootValue: 37.5,//根元素的大小 根据设计师给的稿的大小除10
            propList: ['*']
          })
        ]
      }
    }
    }
  }
})
