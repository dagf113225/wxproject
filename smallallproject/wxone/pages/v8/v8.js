// pages/v8/v8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
   //请求远程服务器(聚合，图灵，自己的构建服务)
   wx.request({
     url: 'http://v.juhe.cn/toutiao/index?type=yule&key=1dcd29ec6f8f4',//请求的链接
     header:{"content-type":"json"},//头是json数据
     //服务器成功返回数据
     success:function(r)
     {
        console.log(r.data);
     },
     fail:function(e)
     {
       console.log(e);
     }
   })
  



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