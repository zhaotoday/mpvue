import consts from '@/utils/consts'
import helpers from '@/utils/helpers'
import request from '@/utils/request'
import toast from '@/components/toast'
import globalMixin from '@/mixins/global'

export default {
  install (Vue) {
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$request = request
    Vue.prototype.$toast = toast

    Vue.mixin(globalMixin)
  }
}
