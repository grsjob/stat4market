import './sass/style.scss';



let navMain = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.nav__toggle');
let tagline = document.querySelector('.header__tagline');
let logo = document.querySelector('.header-logo');
let comeInButton = document.querySelector('.header__come-in-button');
let navItems = document.querySelectorAll('.main-nav__item');
navMain.classList.remove("active");


navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMain.classList.toggle('active');
    tagline.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    comeInButton.classList.toggle('hidden');

    for (let elem of navItems) {
        elem.classList.toggle('active');
    }
});