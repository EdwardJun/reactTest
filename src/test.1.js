function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say = function () {
  console.log('这是一个挂在在person 原型上的方法')
}

let p1 = new Person('巴里', 35)
console.log(p1)

class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  static info = "eee"

  jiao () {
    console.log('这是一个挂在在animal 原型上的方法')
  }
}

let a1 = new Animal('狗', 3)
console.log(a1)
console.log(Animal.info) // info 是 Animal的静态属性