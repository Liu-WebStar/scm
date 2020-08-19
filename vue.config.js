module.exports = {
  publicPath: "/",
  devServer: {
    port: 8090,
    host: "localhost",
    https: false,
    open: true,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_SERVICE_URL,
        changeOrigin:true,
        pathRewrite:{}
      }
    }
  },
  lintOnSave: false,
  outputDir: "dist",
  assetsDir: "assets",
  indexPath: "index.html",
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
        performance: {
          hints: false
        }
    };
  }
};
