// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

const navMain = document.querySelector('.main-header__wrapper');
const navToggle = document.querySelector('.main-header__toggle');

// Убирает класс main-header__nav--nojs

navMain.classList.remove('main-header__nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-header__nav--closed');
  navMain.classList.toggle('main-header__nav--opened');
});
