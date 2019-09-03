module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/kong-lao/'
  : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/global-styles/colors.scss";
                    @import "@/global-styles/typography.scss";
                    `
      }
    }
  }
};
