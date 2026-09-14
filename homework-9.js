// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbersArray = arrayOfNumbers.filter(number => number >= 5);

console.log(newNumbersArray);

// Создать массив строк, относящихся к любой сущности 
// (название фильмов/книг, кухонные приборы, мебель и т.д.), 
// проверить, есть ли в массиве какая-то определенная сущность.

const arrayOfItems = ["стол", "стул", "шкаф", "кровать", "диван"];

const isItemInArray = arrayOfItems.filter(item => item === "кровать")

console.log(isItemInArray);

// Написать функцию, которая аргументом будет принимать 
// массив и изменять его порядок на противоположный ("переворачивать") . 
// Два вышеуказанных массива с помощью этой функции перевернуть

function arrayReverse (array) {
  return array.reverse();
}

arrayReverse(arrayOfNumbers);
arrayReverse(arrayOfItems);

console .log(arrayOfNumbers);
console .log(arrayOfItems);

// Импортировать данные из comment.js и вывести в консоль

import { commentatorID } from "./comment.js";

console.log(commentatorID);

// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const commentorMailInclCom = commentatorID.filter(comment => comment.email.includes(".com"));

console.log(commentorMailInclCom);

// Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const commentorPostId = commentatorID.map(comment => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
});

console.log(commentorPostId);

// Перебрать массив, что бы объекты состояли только из айди и имени

const commentatorIdAndName = commentatorID.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(commentatorIdAndName);

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const commentorIsInvalid = commentatorID.map(comment => {
  if (comment.body.length > 180) {
    comment.isInvalid = true; 
  } else {
    comment.isInvalid = false;
  }
  return comment;
});

console.log(commentorIsInvalid);