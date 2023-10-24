"use strict";

const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.nav__items');

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('open');
})
