"use strict";

/*УРОК 6*/
const isNumber = function(n) {
  return !isNaN(parseFloat(n));
};

const countSum = function () {
  let randomNum = parseInt(Math.random() * 100);
  console.log(randomNum);

  return function countNun() {
    let userNum = prompt('Угадай число от 1 до 100');

    if (userNum === null) {
      alert('Игра окончена');
      return;
    }

    if (!isNumber(userNum)) {
      userNum = alert('Введи число!');
      countNun();
    }

    if (userNum > randomNum) {
      alert('Загаданное число меньше');
      countNun();
    } 
    if (userNum < randomNum) {
      alert('Загаданное число больше');
      countNun();
    } else { (userNum === randomNum)
  
      alert('Поздравляю, Вы угадали!!!');
      return;
    }
  };
}

const startGame = countSum();
startGame();
