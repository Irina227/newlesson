"use strict";

/*УРОК 9*/
const elem = document.getElementById('title');
console.log(elem);


const title = document.getElementsByTagName('h1')[0];
console.log(title);


const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
console.log(startBtn);
console.log(resetBtn);


const listen = document.querySelector('.screen-btn');
console.log(listen);


const otherItemPersent = document.querySelectorAll('.other-items.percent');
console.log(otherItemPersent);


const otherItemNumber = document.querySelectorAll('.other-items.number');
console.log(otherItemNumber);


const one = document.querySelector('[class="main-controls__item rollback"]');
console.log(one);


const two = document.querySelector('div > span');
console.log(two);


const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(fullTotalCount);
console.log(totalCountRollback);


let screens = document.querySelectorAll('.screen');
console.log(screens);