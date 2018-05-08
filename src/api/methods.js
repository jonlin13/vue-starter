const get = function (vm, endpoint, cbSucess, cbError) {
  vm.$http.get(`${endpoint}/`)
  .then(resp => {
    cbSucess(resp)
  }, err => {
    cbError(err)
  })
}

const post = function (vm, endpoint, data, cbSucess, cbError) {
  vm.$http.post(`${endpoint}/`, data, {
    headers: {
      'X-CSRFToken': window.csrf
    }
  })
  .then(resp => {
    cbSucess(resp)
  }, err => {
    cbError(err)
  })
}

const put = function (vm, endpoint, data, cbSucess, cbError) {
  vm.$http.put(`${endpoint}/`, data, {
    headers: {
      'X-CSRFToken': window.csrf
    }
  })
  .then(resp => {
    cbSucess(resp)
  }, err => {
    cbError(err)
  })
}

const patch = function (vm, endpoint, data, cbSucess, cbError) {
  vm.$http.patch(`${endpoint}/`, data, {
    headers: {
      'X-CSRFToken': window.csrf
    }
  })
  .then(resp => {
    cbSucess(resp)
  }, err => {
    cbError(err)
  })
}

const remove = function (vm, endpoint, cbSucess, cbError) {
  vm.$http.delete(`${endpoint}/`, {
    headers: {
      'X-CSRFToken': window.csrf
    }
  })
  .then(resp => {
    cbSucess(resp)
  }, err => {
    cbError(err)
  })
}

module.exports = {
  get,
  post,
  put,
  patch,
  remove
}
