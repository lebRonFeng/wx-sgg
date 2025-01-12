// index.js
Page({
  parentHandler () {
    console.log('父触发的事件')
  },
  btnHandler () {
    console.log('子触发的事件')
  },
  // 事件处理函数需要写到page() 方法中才可以
  handler(event){
    console.log('点击触发了---',event)
  },
  getInputVal(event){
    console.log(event.detail.value)
  }
})
