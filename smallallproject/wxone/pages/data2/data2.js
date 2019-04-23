// pages/data2/data2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagetextdatas:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //http://3mncwu.natappfree.cc
    //wx.request({});

    let currentPage=this;

    wx.request({
    url:'http://3mncwu.natappfree.cc/text/china_text.json',
    header:{"content-type":"json"},
    success:function(response)
    {
      console.log(response.data.data2);
     // this.setData({ pagetextdatas: response.data.data2 });
      currentPage.setData({pagetextdatas: response.data.data2});

    }
    });


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