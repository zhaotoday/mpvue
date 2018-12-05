import helpers from '../helpers/base'
import wxb from 'wx-bridge'
import auth from '../auth'

const navigateInterceptor = {
  req (options) {
    options.requiresLogin = false
  },
  async beforeCall (options) {
    if (options.requiresLogin && !auth.loggedIn()) {
      options.url = '/pages/login/index'
    }
  }
}

wxb.navigateTo = helpers.intercept(wxb.navigateTo, navigateInterceptor)

wxb.switchTab = helpers.intercept(wxb.switchTab, navigateInterceptor)

wxb.redirectTo = helpers.intercept(wxb.redirectTo, navigateInterceptor)

wxb.reLaunch = helpers.intercept(wxb.reLaunch, navigateInterceptor)

wxb.showToast = helpers.intercept(wxb.showToast, {
  req (options) {
    return !options.icon
      ? { ...options, icon: 'none' }
      : options
  }
})

export default wxb
