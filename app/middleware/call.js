
module.exports = (opts, app) => {
  return async (ctx, next) => {
    const { url } = ctx.request
    if (/^\/call\/([\w-./]+)/.test(url)) {
      const route = url.replace(/^\/call\//g, '')
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
