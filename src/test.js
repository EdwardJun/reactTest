class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

class American extends Person{
  constructor (name, age) {
    super(name, age)
  }
}

class Chinese extends Person{
  constructor (name, age, IDNumber) {
    super(name, age)
    this.IDNumber = IDNumber
  }
}

let a = new American('Jack', 20)
console.log(a)

let c = new Chinese('张三', 22, '44088************')
console.log(c)