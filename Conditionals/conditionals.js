//Exercise 1

let userAge = prompt("Ingresa tu edad:");

if (userAge >= 18) {
  console.log("Eres lo suficientemente mayor para conducir.");
} else {
  let yearsToWait = 18 - userAge;
  console.log("Te faltan " + yearsToWait + " años para poder conducir.");
}

//Exercise 2

let myAge = 30;
let yourAge = prompt("Ingresa tu edad:");

if (yourAge > myAge) {
  console.log("Eres " + (yourAge - myAge) + " años mayor que yo.");
} else if (yourAge < myAge) {
  console.log("Eres " + (myAge - yourAge) + " años menor que yo.");
} else {
  console.log("Tenemos la misma edad.");
}

// Exercise 3

let a = 10;
let b = 5;

if (a > b) {
  console.log("a es mayor que b.");
} else {
  console.log("a es menor o igual que b.");
}

let result_cond = (a > b) ? "a es mayor que b." : "a es menor o igual que b.";
console.log(result_cond);

// Exercise 4

let month = prompt("Ingresa el mes (por ejemplo, enero, febrero, marzo, etc.):");

switch (month.toLowerCase()) {
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("La estación es Otoño.");
    break;
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("La estación es Invierno.");
    break;
  case "marzo":
  case "abril":
  case "mayo":
    console.log("La estación es Primavera.");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("La estación es Verano.");
    break;
  default:
    console.log("No es un mes válido.");
}


//Exercise 5

let score = prompt("Ingresa tu puntaje:");

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score < 80) {
  console.log("B");
} else if (score >= 60 && score < 70) {
  console.log("C");
} else if (score >= 50 && score < 60) {
  console.log("D");
} else if (score >= 0 && score < 50) {
  console.log("F");
} else {
  console.log("Puntaje no válido.");
}

