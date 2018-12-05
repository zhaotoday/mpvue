import REST from 'jt-rest'
import consts from './consts'
import restHelpers from './helpers/rest-helpers'
import wxb from './wxb'

export default class extends REST {
  /**
   * 重写父类 request 方法，按业务场景定制功能
   * @override
   */
  request (method = 'GET', options = {}) {
    if (!options.query) {
      options.query = {}
    }

    // 转 options.query.where 对象为字符串
    if (options.query.where) {
      options.query.where = restHelpers.whereToStr(options.query.where)
    }

    if (method === 'GET') {
      options.query._ = new Date().getTime()
    }

    wxb.showLoading()

    return new Promise(resolve => {
      super.request(method, options)
        .then(res => {
          wxb.hideLoading()
          // 在这里可对 res 进行包装
          resolve(res.data)
        })
        .catch(res => {
          wxb.hideLoading()

          if (res.response.data.error.code === 'AUTHORIZATION/UNAUTHORIZED') {
            wxb.navigateTo({ url: consts.LOGIN_PAGE })
          } else {
            wxb.showToast({ title: res.response.data.error.message })
          }
        })
    })
  }
}
