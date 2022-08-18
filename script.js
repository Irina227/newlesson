"use strict";

/*УРОК 6*/
let number = prompt("Угадай число от 1 до 100");

const countSum = function () {
  if (number > 100) {
    console.log("Загаданное число больше");
    number = prompt("Введи новый вариант");
    console.log("Новый вариант " + number);
  }

  if (number < 1) {
    console.log("Загаданное число меньше");
    number = prompt("Введи новый вариант");
    console.log("Новый вариант " + number);
  }

  if (isNaN(number)) {
    alert("Введи число");
    number = prompt("Введи новый вариант");
  }
  if (number === null) {
    console.log("Игра окончена");
  }

  if (number = 100) {
    console.log("Поздравляю, Вы угадали!!!");
  }
};
countSum(number);
