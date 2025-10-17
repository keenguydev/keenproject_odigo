(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        }
        else {
            header.classList.remove('header__active');
        }
    }
}());

(function () {
    const burgerBtn = document.querySelector('.burger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('.menu');
    burgerBtn.addEventListener('click', () => {
        menu.classList.add('menu__active');
    });
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('menu__active');
    });
}());