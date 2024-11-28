//1

const Vehicle = {
    type: "транспорт",
    move() {
        console.log(`${this.type} движется.`)
    }
}

const Car = Object.create(Vehicle);
Car.type = "машина"
Car.move = function() {
    console.log(`${this.type} едет.`)
}

Car.move()


//2

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`)
}

const Alice = new Person("Alice", 25);
const Bob = new Person("Bob", 30);
Alice.greet()
Bob.greet()


//3

function MathHelper() {}

MathHelper.add = function(a,b) {
    return a + b
}

MathHelper.substract = function(a,b) {
    return a - b
}

MathHelper.multiply = function(a,b) {
    return a * b
}

console.log(MathHelper.add(3,5))
console.log(MathHelper.substract(7,3))
console.log(MathHelper.multiply(2,6))
