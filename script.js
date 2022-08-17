"use strict";

/*УРОК 7*/
// let name = 'Alex'

// let person = { //объект
//   name: 'Alex',
//   age: 33,
//   job: {
//     position: 'middle-developer',
//     salary: '100000'
//   },
//   say: function (str) {
//     console.log(str);
//   }  //метод объекта- функция вложенная в объект
// }

// person.say('Hello world')
// console.log(person);

const books = [
  { id: 0, name: "Дорога домой", author: "Виталий Зыков", price: 1200 },
  { id: 1, name: "Война за выживание", author: "Виталий Зыков", price: 1500 },
  {
    id: 2,
    name: "Мир бесчисленных островов",
    author: "Виталий Зыков",
    price: 1300,
  },
];

const result = books.findIndex(function(item, index, array) {
  return item.id === 3;
});

books.splice(result, 1)

console.log(books);
