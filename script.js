"use strict";

/*УРОК 6*/
let number = prompt("Угадай число от 1 до 100");

const countSum = function () {
  if (number > 100) {
    console.log("Загаданное число больше");
    number = prompt("Введи новый вариант");
    console.log(number);
  } else if (number < 100 && number > 1) {
    console.log("Загаданное число меньше");
    number = prompt("Введи новый вариант");
    console.log(number);
  } else if (isNaN(number) || number === null) {
    alert("Введи число");
    number = prompt("Введи новый вариант");
    console.log("Игра окончена");
  } else if (number = 100) {
    console.log("Поздравляю, Вы угадали!!!");
  }
};
countSum();
