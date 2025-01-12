Page({
  data: {
    num: 1,
    userInfo: {
      name: 'tom',
      age: 10,
      test: '111'
    },
    list: [1, 2, 3]
    // list: [{name:'tom',age: 10}]
  },
  // 更新 userInfo
  updateUserInfo() {
    // 新增单个 / 多个属性
    // this.setData({
    //   // 如果给对象新增属性,可以将 key 写成数据路径的方式 a.b.c
    //   'userInfo.name': 'tom',
    //   'userInfo.age': 10
    // })
    // 修改单个 / 多个属性
    // this.setData({
    //   // 如果修改对象属性,可以将 key 写成数据路径的方式 a.b.c
    //   'userInfo.name': 'jarry',
    //   'userInfo.age': 30
    // })

    // 如果修改的数据很多,每次都写数据路径,就太麻烦了
    // ①可以使用ES6提供的展开运算符 和 Object.assign()
    // const userInfo = {
    //   ...this.data.userInfo,
    //   name: 'jerry',
    //   age: 18
    // }

    // ②Object.assign() 将多个对象合并为一个对象
    // const userInfo = Object.assign(this.data.userInfo, {name: 'jerry'},{age: 18})
    // this.setData({
    //   userInfo
    // })

    // 删除单个属性
    // delete this.data.userInfo.age
    // console.log(this.data.userInfo)
    // this.setData({
    //   userInfo: this.data.userInfo
    // })

    // 删除多个属性
    const {
      age,
      test,
      ...rest
    } = this.data.userInfo
    this.setData({
      userInfo: rest
    })
  },


  updateNum() {
    // 通过复制的方式直接修改数据
    // 能够修改数据,但是不能改变页面上的数据
    // this.data.num += 1
    // console.log(this.data.num)

    this.setData({
      // key: 是需要更新的数据
      // value: 是最新的值
      num: this.data.num + 1
    })
  },
  // 更新数组方法
  updateList() {
    // 新增
    // 第一种：使用push
    // this.data.list.push(4)

    // 第二种：使用concat
    // const newList = this.data.list.concat(5)

    // 第三种：使用解构赋值
    // const newList = [...this.data.list, 6]
    // this.setData({
    //   list: newList
    // })

    // 更改
    // this.setData({
    //   'list[0].name': 'jerry'
    // })

    // 删除
    // 第一种删除splice
    // this.data.list.splice(1,1)
    // this.setData({
    //   list: this.data.list
    // })

    // 第二种删除filter
    const newList = this.data.list.filter(item => item !== 2)
    this.setData({
      list: newList
    })
  }
})