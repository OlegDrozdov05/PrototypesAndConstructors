//1
const Vehicle = {
    speed: 0,
    move() {
        console.log(`Транспортное средство движется со скоростью ${this.speed} км/ч`)
    }
}

const Car = Object.create(Vehicle)
Car.fuelLevel = 0
Car.refuel = function(fuel) {
    this.fuelLevel += fuel;
}

const myCar = Object.create(Car)
const myCar2 = Object.create(Car)
myCar.refuel(30)
myCar2.refuel(40)
myCar2.refuel(10)

console.log(myCar.fuelLevel)
console.log(myCar2.fuelLevel)

myCar.speed = 70;
myCar2.speed = 120;
myCar.move()
myCar2.move()

//2

function Pet(name, age) {
    this.name = name;
    this.age = age;

    this.describe = function() {
        return `Имя: ${this.name}, Возраст: ${this.age}`
    }

    this.isOld = function() {
        return this.age > 10
    }
}


function Dog(name,age, breed) {
    Pet.call(this, name,age)
    this.breed = breed;
}

Dog.prototype = Object.create(Pet.prototype)

Dog.prototype.describe = function() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Порода: ${this.breed}`
}
Dog.prototype.bark = function() {
    return `${this.name} лает!`
}

Dog.prototype.fetch = function(item) {
    return `${this.name} приносит ${item}`
}

function GuardDog(name,age,breed,trainingLevel) {
    Dog.call(this, name,age,breed)
    this.trainingLevel = trainingLevel
}

GuardDog.prototype = Object.create(Dog.prototype)

GuardDog.prototype.guard = function() {
    return `${this.name} охраняет территорию на уровне ${this.trainingLevel}`
}

GuardDog.prototype.bark = function() {
    if(this.trainingLevel > 5) return `${this.name} лает громко!`
    return `${this.name} лает!`
}


Pet.compareAges = function(pet1, pet2) {
    if(pet1.age > pet2.age) return `${pet1.name} старше`
    if(pet1.age < pet2.age) return `${pet2.name} старше`
    return `Они одинакового возраста`
}

const pet = new Pet("Питомец 1", 4);
console.log(pet.describe())
console.log(pet.isOld())

const dog = new Dog("Собака1", 12, "Мопс")
console.log(dog.describe())
console.log(dog.isOld())
console.log(dog.bark())
console.log(dog.fetch("Палка"))

console.log(Pet.compareAges(pet,dog))

const guardGod = new GuardDog("Охраняющая Собака", 6, "Овчарка", 6)

console.log(guardGod.describe())
console.log(guardGod.isOld())
console.log(guardGod.bark())
console.log(guardGod.guard())
console.log(guardGod.fetch("Дубинка"))

console.log(Pet.compareAges(guardGod,pet))
