// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameList: [1,2,3],
    fruitList: [
      {id: 1, name: '苹果', price: 66},
      {id: 2, name: '橘子', price: 67},
      {id: 3, name: '西瓜', price: 68},
    ],
    obj: {
      name: 'tom',
      age: 10
    },
    val: 1,
    isFlag: false
  },
  add1(){
    this.data.val +=1;
    this.setData({
      val: this.data.val
    })
  }
})