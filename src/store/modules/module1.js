// import {getObject} from './../../api/faux_api'

const state = {
  state_item_one: 'Hello World'
}

const mutations = {
  mutation1 (state, payload) {
    console.log('mutation one ran')
  }
}

const actions = {
  action1 ({commit, state}, payload) {
    setTimeout(() => {
      console.log('action one ran')
    }, 500)
  }
}

const module = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module
