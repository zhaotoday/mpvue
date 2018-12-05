import helpers from '../helpers/base'
import wxb from 'wx-bridge'

wxb.showLoading = helpers.intercept(wxb.showLoading, {
  before () {
    console.log(22)
  }
})

wxb.showToast = helpers.intercept(wxb.showToast, {
  req (options) {
    return !options.icon ? {...options, icon: 'none'} : options
  }
})

export default wxb
