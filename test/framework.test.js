const mock = require('egg-mock')

describe('test/framework.test.js', () => {
  let app

  before(() => {
    app = mock.app({
      baseDir: 'function',
      framework: true,
    })
    return app.ready()
  })

  after(() => app && app.close())

  afterEach(mock.restore)

  it('GET /f/home/status', async () => {
    return app.httpRequest()
      .get('/f/home/status')
      .expect('egg-function')
      .expect(200)
  })
})
