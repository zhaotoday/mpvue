import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import wxUsers from './modules/wxUsers'
import points from './modules/points'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations,
  modules: {
    wxUsers,
    points
  }
})
