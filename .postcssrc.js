module.exports = {
  // plugins就是用来配置postcss插件
  plugins: {
    // autoprefixer用来给css代码添加私有前缀，在vue-cli内部已经集成了autoprefixer,再次配置，存在冲突
    // 'autoprefixer': {
    //     browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {

      rootValue({ file }) {
        console.log(file)
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
