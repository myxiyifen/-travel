import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: {
  //   // ctx 上下文
  //   changeCity (ctx, city) {
  //     ctx.commit('updateCity', city)
  //   }
  // },
  mutations: mutations
})
