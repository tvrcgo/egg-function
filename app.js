
const { resolve } = require('path')

class AppBootHook {
  constructor(app) {
    this.app = app
  }

  configWillLoad() {
    // 添加中间件
    this.app.config.coreMiddleware.unshift('call')
  }

  async didLoad() {
    // 加载函数
    const functions = resolve(this.app.config.baseDir, 'app/function')
    this.app.loader.loadToApp(functions, 'function')
  }

  async willReady() {

  }

  async didReady() {

  }

  async serverDidReady() {

  }
}

module.exports = AppBootHook
