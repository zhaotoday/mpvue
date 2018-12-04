import store from '../store'
import { mapActions } from 'vuex'

export default {
  beforeCreate () {
    store.dispatch('resetState', {})
  },
  methods: mapActions({
    resetState: 'resetState'
  })
}
