//app.js
App({
  onLaunch: function () {
   console.log("执行一次");

      let  currentthis=this;
     //http://id8pb4.natappfree.cc/text/china_text.json

     wx.request({
       url: 'http://id8pb4.natappfree.cc/text/china_text.json',
       success:function(response)
       {
         console.log(response.data);

         currentthis.globalData.textdatas = response.data;
       }
     })


   

  },
  globalData: {
    userInfo: null,
    textdatas:{}
    
  }
})