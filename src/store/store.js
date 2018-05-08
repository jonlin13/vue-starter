import Vue from 'vue'
import Vuex from 'vuex'

import module1 from './modules/module1'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    module1
  }
})
