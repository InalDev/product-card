// Функция, принимающая два параметра

function cityWeather (city, temperature) {
  console.log(`Сейчас в ${city} ${temperature} градусов`)
}

cityWeather (`Бостоне`, 20)



// Задание со скоростью света

const speedOfLight = 299792458;

function checkSpeed (speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость')
  } else if (speed === speedOfLight) {
    console.log('Скорость света')
  } else {
    console.log('Субсветовая скорость')
  }
}

checkSpeed (309792458)



// Задание с товарами

let price = 1000;
let productName = 'Телефон';


function productBudget (budget) {
  if (price <= budget) {
    console.log('Спасибо за покупку')
  } else {
    console.log(`Вам не хватает ${price - budget} $, пополните баланс`)
  }
}

productBudget (900)

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

