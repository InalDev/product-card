// 1) Объект на основе данных пользователя

const userInfo = {
  name: "Иналь",
  age : 20,
  city : "Москва",
  job : "Обмен криптвалюты"
}

// 2) Объект на основе данных об автомобиле

const carInfo = {
  brand : "Mersedes",
  model : "S500 Long",
  year : 2006,
  color : "Синий",
  gearbox : "Автоматическая",
  maxSpeed : 250,
}

carInfo.owner = userInfo.name

console.log(carInfo)


// 3) Написать функцию которая аргументом будет принимать объект, описанный в прошлом задании

function maxSpeed (carInfo) {
  if (carInfo.maxSpeed) {
    return;
  } 
  else {
    carInfo.maxSpeed = 280
  }
}

maxSpeed (carInfo)

// 4) Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение

function getPropertyValue (object, property) {
  console.log(object[property])
}

getPropertyValue (carInfo, "year")
getPropertyValue (userInfo, "age")


// 5) Создать массив, содержащийназвания продуктов

const products = [ "Сыр", "Молоко", "Клубника", "Арбуз", "Минералка"]

console.log(products)


// 6) Создать массив, со списком фильмов и после добавить в конец еще один

const games = [
  { 
    title: "Watch Dogs", year: 2022, genre: "Экшен" 
  }, 
  { 
    title: "HALO 2", year: 2004, genre: "Шутер" 
  },
  { 
    title: "MINECRAFT", year: 2009, genre: "Песочница" 
  }
];


  games.push({ title: "GTA 5", year: 2013, genre: "Экшен" });

  console.log(games)


// 7) Объединение массивов

const freeForPlayGames = [
  { 
    title: "Fornite", year: 2018, genre: "Королевская битва" 
  }, 
  { 
    title: "CS2", year: 2023, genre: "Шутер" 
  },
  { 
    title: "Warface", year: 2009, genre: "Шутер"
  }
];


const popularGames = games.concat(freeForPlayGames)

console.log(popularGames)


// 8) Метод map

const shooterGames = popularGames.map((game) => {
  if (game.genre === "Шутер") {
    return game.title;
  } else {
    return null;
  }
})

console.log(shooterGames)