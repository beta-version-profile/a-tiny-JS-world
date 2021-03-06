class Parent {
  constructor(name, gender, legs, say) {
    this.name = name
    this.gender = gender
    this.kind = this.constructor.name
    this.legs = legs
    this.say = say
  }
  get toString() {
    return ['name', 'gender', 'kind', 'legs', 'say']
      .map(key => {
        return this[key]
      })
      .join('; ')
  }
}

class Dog extends Parent {
  constructor(name, gender) {
    super(name, gender, 4, `woof - woof`)
  }
}

class Cat extends Parent {
  constructor(name, gender) {
    super(name, gender, 4, `meow - meow`)
  }
}
class Human extends Parent {
  constructor(name, gender) {
    super(name, gender, 2, `Hello, I'm ${name}`)
    this.hands = 2
  }
  get toString() {
    return `${super.toString}; ${this.hands} hands`
  }
}

const specimens = [
  new Cat('Tom', 'male'),
  new Dog('Spot', 'male'),
  new Human('Adam', 'male'),
  new Human('Eva', 'female')
]

specimens.forEach(obj => {
  print(obj.toString)
})
