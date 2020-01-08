
module.exports = {
  fn(name) {
    return name
      .replace(/(^\/+|\/+$)/g, '')
      .split('/')
      .reduce((f, k) => f = f[k] || {}, this.app.function)
  },

  async call(name, body = {}) {
    Object.assign(this.request, {
      body
    })
    return new Promise(async resolve => {
      // ctx.body response
      Object.defineProperty(this, 'body', {
        set: (val) => {
          return resolve(val)
        }
      })
      return this.fn(name).call(this, this, this.app)
    })
  }
}
