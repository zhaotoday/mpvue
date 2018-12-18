const API_URL = 'http://localhost:3002/apis'
const API_VERSION = 'v1'
const LOGIN_PAGE = '/pages/login/index'

// 积分类型
const POINT_TYPES = [
  {
    label: '分享积分',
    value: '1'
  },
  {
    label: '成交积分',
    value: '2'
  }
]
export default {
  API_URL,
  API_VERSION,
  LOGIN_PAGE,
  POINT_TYPES
}
