
const { Service } = require('egg')

module.exports = class SLSService extends Service {
  constructor(ctx) {
    super(ctx)
    if (this.app.sls) {
      this.$client = this.app.sls.create(this.app.sls.options)
    }
  }

  async post(body) {
    try {
      const logGroup = this.$client.createLogGroup({ topic: body.topic, source: body.source })
      logGroup.setLog({
        time: Math.round(Date.now()/1000),
        contents: body
      })
      const { project, logstore } = this.config.sls
      await this.$client.postLogstoreLogs(project, logstore, logGroup)
    } catch (err) {
      console.error('sls.post ERROR', err)
    }
  }

}
