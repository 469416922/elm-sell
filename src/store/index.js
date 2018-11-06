import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    increment (state, obj) {
      state.count += obj.a
    },
    // increment: (state, num) => state.count ++,
    decrement: state => state.count--
  }
})

export default store
