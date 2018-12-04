export default {
  async mounted () {
    const locationHref = encodeURIComponent(window.location.href)
    const url = 'http://o2o.eolive.cn/channel/activity/helloneo'
    const requestRes = await this.$request({
      url: `http://o2o.eolive.cn/oauth/wechat/jssdkinit?url=${locationHref}`
    })
    const { appId, timestamp, nonceStr, signature, jsApiList } = requestRes.data

    wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList
    })

    wx.ready(() => {
      const shareData = {
        title: '哈啰，我的EO元气早晨',
        desc: 'Get元气早晨，做元气城市人',
        link: url,
        imgUrl: 'http://o2o.eolive.cn/upload/201812/0001.jpg'
      }

      wx.onMenuShareAppMessage(shareData)
      wx.onMenuShareTimeline(shareData)

      wx.error(res => {
        console.log(res)
      })
    })
  }
}
