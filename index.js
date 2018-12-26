class Parent {
  constructor(name, gender, kind, legs, say) {
    this.name = name
    this.gender = gender
    this.kind = kind
    this.legs = legs
    this.say = say
  }
  toString() {
    return ['name', 'gender', 'kind', 'legs', 'hands', 'say']
      .map(key => {
        return this[key] ? this[key] : 'no'
      })
      .join('; ')
  }
}

class Dog extends Parent {
  constructor(name, gender) {
    super(name, gender, 'dog', 4, `woof - woof`)
  }
}

class Cat extends Parent {
  constructor(name, gender) {
    super(name, gender, 'cat', 4, `meow - meow`)
  }
}
class Human extends Parent {
  constructor(name, gender) {
    super(name, gender, 'human', 2, `Hello, I'm ${name}`)
    this.hands = 2
  }
}

const specimens = [
  new Cat('Tom', 'male'),
  new Dog('Spot', 'male'),
  new Human('Adam', 'male'),
  new Human('Eva', 'female')
]

specimens.forEach(obj => {
  print(obj.toString())
})
