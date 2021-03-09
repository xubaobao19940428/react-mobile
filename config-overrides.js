const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addLessLoader, 
  addPostcssPlugins
} = require('customize-cra');
const path = require('path')
const addCustomize = () => config => {
  // 关闭sourceMap
  config.devtool = false;
  // 配置打包后的文件位置
  // config.output.path = __dirname + '/dist';
  config.output.publicPath = './';
  return config;
}

const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api': {
          target: 'https://testm.youbomsa.com/api/v4',
          changeOrigin: true,
          pathRewrite: {
              '^/api': '/'
          }
      },
      '/liveApi': {
          target: 'https://testlive.youbomsa.com',
          changeOrigin: true,
          pathRewrite: {
              '^/liveApi': '/'
          }
      }
  },
  };
};
module.exports = {
  webpack: override(
    addLessLoader(),
    // 配置px转rem
    addPostcssPlugins(
      [require('postcss-pxtorem')({ 
          rootValue: 37.5, 
          propList: ['*'],
          minPixelValue: 2, 
          selectorBlackList: ['am-'] 
    })]),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src"),
    }),
    addCustomize()
  ),
  devServer: overrideDevServer(
    devServerConfig(),
    // watchAll()
  )
}
