//logs.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    dayList: [],
    list: [],
    sum: [{
      title: '今日番茄次数',
      sum: '0'
    }, {
      title: '累计番茄次数',
      sum: '0'
    }, {
      title: '今日专注时长',
      sum: '0分钟'
    }, {
      title: '累计专注时长',
      sum: '0分钟'
    }]
  },
  change(e) {
    // console.log(e);
    var that = this
    var logs = wx.getStorageSync('logs') || []
    var index = e.target.dataset.index
    if (index == 0) {
      that.setData({
        list: this.data.dayList
      })
    } else if (index == 1) {
      for(var i=0;i<logs.length;i++){
        var listt=logs[i].date
      }
      that.setData({
        list:listt
      })
    }
    this.setData({
      activeIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    var day = 0
    var total = 1
    var dayTime = 0
    var totalTime = 0
    var logs = wx.getStorageSync('logs') || []
    if (logs.length > 0) {
      for (var i = 0; i < logs.length; i++) {
        if (logs[i].date == util.formatTime(new Date)) {
          day = day + 1
          dayTime = dayTime + parseInt(logs[i].time)
        }
        totalTime = totalTime + parseInt(logs[i].time)
        dayList.push(logs[i])
        this.setData({
          dayList: dayList,
          list: dayList
        })
      }

      this.setData({
        "sum[0].sum": day,
        "sum[1].sum": total,
        "sum[2].sum": dayTime + "分钟",
        "sum[3].sum": totalTime + "分钟"
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})