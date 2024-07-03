const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  filenameHashing: false,
  configureWebpack: {

    plugins: [
      require('unplugin-auto-import/webpack').default({
        imports: ["vue", "vue-router", "vuex"],
        dts: "src/auto-imports.js"
      }),
    ],
  }
})
