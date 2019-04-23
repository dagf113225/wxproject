// pages/data1/data1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  //页面初始的数据的键对应值
  name:"段金旺",
  btntext:"点击改变",
  ts:"tss",
  bs:"dss",
  /**swiperdatas:["1.南京明天是解放70周年",
  "2.今年是中国海军建军70周年","3.今年是中国建国70周年"]**/
    swiperdatas: [{ "url": "../v1/v1", "text": "1.南京明天是解放70周年"},
      { "url": "../v2/v2", "text": "2.今年是中国海军建军70周年" }, { "url": "../v3/v3", "text": "3.今年是中国建国70周年" }]
  },
  btnclick()
  {
     console.log("按钮被点击了");

     //当前页面的对象  this
     //改变页面data中的键对应的值
     //方法是固定的setData();

    //改变了文字，也就是数据
    this.setData({ name: "大理段氏"});
    this.setData({ btntext:"改变了"});

    //改变了样式，也就是效果
    this.setData({ ts:"changess"});

    this.setData({ bs:"bcss"});



  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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