
module.exports = (opts, app) => {
  return async (ctx, next) => {
    const { path } = ctx.request
    const { prefix } = app.config.function
    const regxUrl = new RegExp('^\\/(' + prefix + ')\\/[\\w-./]+')
    const regxPrefix = new RegExp('^\\/(' + prefix + ')\\/')
    if (regxUrl.test(path)) {
      const route = path.replace(regxPrefix, '')
      if (route) {
        const fn = ctx.fn(route)
        if (fn && typeof fn === 'function') {
          return fn.call(ctx, ctx, app)
        } else {
          ctx.status = 404
          ctx.body = {
            code: 404,
            error: 'Oops, function not found.'
          }
        }
      } else {
        ctx.status = 404
        ctx.body = {
          code: 404,
          error: 'Eh, which function ?'
        }
      }
    } else {
      return next()
    }
  }
}
