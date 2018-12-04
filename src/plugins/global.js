import consts from '@/utils/consts'
import helpers from '@/utils/helpers/base'

export default {
  install (Vue) {
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
  }
}
