"use strict";

/*УРОК 7*/

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    //метод объекта
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    if (typeof appData.title === "string" || val instanceof String);
    for (let i = 0; i < 2; i++) {
      let name = prompt("Какие типы экранов нужно разработать?");
      if (typeof name === "string" || val instanceof String);
      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
        if (isNaN(price)) {
          return (isNaN(price))
        };
      } while (!appData.isNumber(price));
      

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");
      if (typeof name === "string" || val instanceof String);
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
        if (isNaN(price)) {
          return (isNaN(price))
        };
      } while (appData.isNumber(price));

      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  logger: function () {
    console.log(appData.servicePercentPrice);
    console.log(appData.fullPrice);
    console.log(appData.screens);
    console.log("Как называется ваш проект?" + " " + typeof appData.title );
    console.log("Какие типы экранов нужно разработать?" + " " + typeof name);
    console.log("Сколько будет стоить данная работа?" + " " + typeof price);
    console.log("Какой дополнительный тип услуги нужен будет?" + " " + typeof name);
    console.log("Сколько это будет стоить?" + " " + typeof price);
  },
};
appData.start();
// appData.logger();
// for (const logger in appData) {
//   console.log("Ключ: " + logger + "Значение: " + appData[logger]);
// }
