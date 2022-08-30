"use strict";

/*УРОК 9*/
const title = document.getElementById('title');
console.log(title);


const listItems = document.getElementsByTagName('h1');
console.log(listItems[0]);


const links = document.getElementsByClassName('handler_btn');
console.log(links[0]);
console.log(links[1]);


const title1 = document.querySelector('.screen-btn');
console.log(title1);


const titleone = document.querySelectorAll('.other-items.percent');
console.log(titleone);


const titletwo = document.querySelectorAll('.other-items.number');
console.log(titletwo);


const one = document.querySelector('[class="main-controls__item rollback"]');
console.log(one);


const two = document.querySelector('div > span');
console.log(two);


const onetwo = document.getElementsByClassName('total-input');
console.log(onetwo[0]);
console.log(onetwo[1]);
console.log(onetwo[2]);
console.log(onetwo[3]);
console.log(onetwo[4]);


let call = document.querySelectorAll('.screen');
console.log(call);