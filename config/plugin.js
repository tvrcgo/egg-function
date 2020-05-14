'use strict'

exports.static = false

exports.sls = {
  enable: false,
  package: 'egg-sls'
}

exports.oss = {
  enable: false,
  package: 'egg-oss'
}

exports.mysql = {
  enable: false,
  package: 'egg-mysql'
}

exports.redis = {
  enable: false,
  package: 'egg-redis'
}

exports.validate = {
  enable: true,
  package: 'egg-validate'
}
