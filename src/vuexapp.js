import Vue from 'vue'
import vuexapp from '@/Vuexapp.vue'
import store from './store/index'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#vuexapp',
  store,
  render: h => h(vuexapp)
})
