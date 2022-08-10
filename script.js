'use strict';

/*УРОК 5*/
// let potato = 10;

// const peelPotato = function(num) {
//     return 'Картошка №' + num + ' почищена'
// }
// console.log(peelPotato(1));

/*const peelPotato = function(potatoIndex){
    if (potatoIndex >= -10) {
        console.log('Картошка №' + potatoIndex + ' почищена');
        potatoIndex--
        peelPotato(potatoIndex);
    }
}
peelPotato(potato)*/ //рекурсия


// for(let i = 10; i > 0; i--) {
//     console.log('Картошка №' + i + ' почищена');
// } //цикл for

// while (potato > 0){
//     console.log('Картошка №' + potato + 'почищена');
//     potato--
// }

// do{
//     console.log('Картошка №' + potato + 'почищена');
//     potato--
// } while (potato > 0)

/*for(let i = 10; i > 0; i--) {
    if (i === 5) continue
     console.log('Картошка №' + i + ' почищена');
} */



let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько бкдет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')

let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice

let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = +prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}
const getServicePercentPrice = function () {
    return fullprice - (fullPrice * (rollback / 100))
}
const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
}
const getRollbackMessage = function (price) {
    if (price >= 30000){
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000){
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000 ) {
        return "Скидка не предусмотрена"
    } else {
        return "Что-то пошло не так"
    }
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + "юани и стоимость разработки сайта " + fullPrice + "юани");