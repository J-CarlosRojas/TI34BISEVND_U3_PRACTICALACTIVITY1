//basic variables #1

let firstName = "Carlos";
let lastName = "Rojas";
let country_boolean = "Mexico";
let city = "Playa del Carmen";
let age_boolean = 38;
let isMarried = true
let year_boolean = 2023;

//exercise #2
console.log(parseInt(10)==10)

//exercise #3
console.log(parseInt(9.8)==10)

//exercise #4
let true_1 = "hello"
let true_2 = 42
let true_3 = true

let false_1 = ""
let false_2 = 0
let false_3 = false

function comprobar(variable){
    if(variable){
        console.log("It's true")
    } else{
        console.log("It's false")
    }
}

comprobar(true_1)
comprobar(true_2)
comprobar(true_3)

comprobar(false_1)
comprobar(false_2)
comprobar(false_3)

// exercise #5

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Exercise 6

const today = new Date();

console.log(today.getFullYear())
console.log(today.getMonth() + 1)
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getTime() / 1000)

// Exercise 7

let base = prompt("Ingrese la base del triángulo:")
let height = prompt("Ingrese la altura del triángulo:")

let area = 0.5 * base * height
console.log("El área del triángulo es: " + area)

let sideA = prompt("Ingrese el lado A del triángulo:")
let sideB = prompt("Ingrese el lado B del triángulo:")
let sideC = prompt("Ingrese el lado C del triángulo:")

let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)
console.log("El perímetro del triángulo es: " + perimeter)

