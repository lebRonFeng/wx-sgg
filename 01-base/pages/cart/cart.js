// pages/cart/cart.js
Page({

  btnHandler(event) {
    // 先点蓝色区域(不点击按钮)
    // 通过事件对象获取的是view 身上绑定的数据

    // 先点击按钮(不点击蓝色区域)
    // 通过事件对象获取的是 触发事件的节点 以及 父节点身上所有的 mark 数据
    console.log(event)
  }
})