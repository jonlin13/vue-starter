var Config = require('./../../config')
var apiConfig = (vm) => {
  vm.api = {
    dev: Config.dev.env.API_ROOT,
    staging: Config.staging.env.API_ROOT,
    prod: Config.build.env.API_ROOT
  }

  var API_BASE_URL

  if (process.env.NODE_ENV === 'development') {
    API_BASE_URL = vm.api.dev
  }

  if (process.env.NODE_ENV === 'staging') {
    API_BASE_URL = vm.api.staging
  }

  if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = vm.api.prod
  }

  var cleanApiUrl = API_BASE_URL.split('"')
  return cleanApiUrl[1]
}

module.exports = {
  apiConfig
}
