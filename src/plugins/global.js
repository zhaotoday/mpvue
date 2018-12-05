import consts from '@/utils/consts'
import helpers from '@/utils/helpers/base'
import wxb from '@/utils/wxb'
import globalMixin from '@/mixins/global'

export default {
  install (Vue) {
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$wx = wxb

    Vue.mixin(globalMixin)
  }
}
