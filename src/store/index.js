import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations,
  modules: {
    'public/wxUsers': require('./modules/public/wxUsers').default,
    'wx/wxUsers': require('./modules/wx/wxUsers').default,
    'wx/points': require('./modules/wx/points').default
  }
})
