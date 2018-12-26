class Parent {
  constructor(name, gender, kind, hands, legs, say) {
    this.name = name
    this.gender = gender
    this.kind = kind
    this.hands = hands
    this.legs = legs
    this.say = say
  }
  printAll() {
    return Object.keys(this)
      .map(key => {
        return this[key] ? this[key] : 'no'
      })
      .join('; ')
  }
}

class Dog extends Parent {
  constructor(name, gender) {
    super(name, gender, 'dog', 0, 4, `woof - woof`)
  }
}

class Cat extends Parent {
  constructor(name, gender) {
    super(name, gender, 'cat', 0, 4, `meow - meow`)
  }
}
class Human extends Parent {
  constructor(name, gender) {
    super(name, gender, 'human', 2, 2, `Hello, I'm ${name}`)
  }
}

const specimens = [
  new Cat('Tom', 'male'),
  new Dog('Spot', 'male'),
  new Human('Adam', 'male'),
  new Human('Eva', 'female')
]

specimens.forEach(obj => {
  print(obj.printAll())
})
