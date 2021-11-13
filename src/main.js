import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import directive from './utils/mixin.js'
Vue.config.productionTip = false
Vue.mixin(directive)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
