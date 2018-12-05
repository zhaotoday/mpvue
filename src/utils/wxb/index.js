import helpers from '../helpers/base'
import wxb from 'wx-bridge'

wxb.showToast = helpers.intercept(wxb.showToast, {
  req (options) {
    return !options.icon
      ? { ...options, icon: 'none' }
      : options
  }
})

export default wxb
