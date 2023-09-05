
module.exports = {
  fn(name) {
    return name
      .replace(/(^\/+|\/+$)/g, '')
      .split('/')
      .reduce((f, k) => {
        const camelKey = k.replace(/_(\w)/g, (match, letter) => letter.toUpperCase())
        f = f[k] || f[camelKey] || {}
        return f
      }, this.app.function)
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
