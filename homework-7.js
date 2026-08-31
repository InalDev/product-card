// Функция, принимающая два параметра

function cityWeather (city, temperature) {
  console.log(`Сейчас в ${city} ${temperature} градусов`)
}

cityWeather (`Бостоне`, 20)



// Задание со скоростью света

const speedOfLight = 299792458;

let speedPlane = 900;

if (speedPlane > speedOfLight) {
  console.log('Сверхсветовая скорость')
} else if (speedPlane === speedOfLight) {
  console.log('Скорость света')
} else {
  console.log('Субсветовая скорость')
}



// Задание с товарами

let product = "Телефон"

let productPrice = 1000

let budget = 1000

let budgetDifference = productPrice - budget

if (productPrice <= budget) {
  console.log(`${product} приобретен. Спасибо за покупку !`)
}
else { productPrice > budget 
  console.log(`Вам не хватает ${budgetDifference} $, пополните баланс`)
}


// Создать 1 функцию и именовать её по своему усмотрению

function gratitude () {
  console.log (`Спасибо за проверку ДЗ !`)
}


// Создать 3 переменных и именовать их по своему усмотрению

//1) 

var eulerNumber = 2.71828
console.log(eulerNumber)

//2)

let iq = 120
console.log(iq)

//3)

let educationLevel = 'Закончил университет'
console.log(educationLevel)

