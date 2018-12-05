import wxb from 'wx-bridge'
import auth from './auth'

export default fn => {
  return ({ url, requiresLogin = false }) => {
    return requiresLogin && !auth.loggedIn()
      ? wxb[fn]({ url: 'pages/login/index' })
      : wxb[fn]({ url })
  }
}
