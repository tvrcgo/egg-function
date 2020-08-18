
const { resolve } = require('path')

class AppBootHook {
  constructor(app) {
    this.app = app
  }

  configDidLoad() {
    // 添加中间件
    this.app.config.coreMiddleware.push('call')
  }

  async didLoad() {
    // 加载函数
    const functions = resolve(this.app.config.baseDir, this.app.config.function.root)
    this.app.loader.loadToApp(functions, 'function')
  }

}

module.exports = AppBootHook
