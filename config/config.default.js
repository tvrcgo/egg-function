
module.exports = appInfo => {

  const config = {}

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false
    },
    methodnoallow: {
      enable: false
    }
  }

  // 系统日志
  config.logger = {
    consoleLevel: 'DEBUG',
    dir: 'logs/egg-function'
  }

  // 日志切分（小时）
  config.logrotator = {
    filesRotateByHour: [
      'logs/egg-function/common-error.log'
    ]
  }

  return config
}
