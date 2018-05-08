// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {store} from './store/store'
import BootstrapVue from 'bootstrap-vue'
import {apiConfig} from './api/config'

// GLOBAL CSS IMPORTS:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/sass/screen.scss'

const API_BASE_URL = apiConfig(Vue)
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = API_BASE_URL
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
