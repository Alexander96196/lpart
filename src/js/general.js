import NativejsSelect from 'nativejs-select';
import $ from "jquery";
global.jQuery = $;

new NativejsSelect({
  selector: '.select__input'
});

//Инициализация бургер меню
$(document).ready(function () {
    $('.menu__button--open').click(function (event) {
        $('.menu__wrapper').toggleClass('active');
        $('.menu__wrapper').slideToggle(300);
    });
    $('.menu__button--close').click(function (event) {
        $('.menu__wrapper').toggleClass('none');
        $('.menu__wrapper').slideToggle(300);
    });
});

//Инициализация Swiper слайдера
new Swiper('.swiper-container', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        slidesPerGroup: 3,
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Управление клавиатурой
    keyboard: {
        // Включить/выключить
        enable: true,
        // Включить/выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInVieport: true,
        // Включить/выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },

    // Количество слайдов для показа
    slidesPerView: 1,

    // Отступ между слайдами 
    spaceBetween: 2330,

    // Бесконечный слайдер 
    loop: true,

    // Скорость 
    speed: 900,

    // Эффекты переключения слайдов.
    // Смена прозрачности
    effect: 'fade',

    // Дополнение к fade 
    fadeEffect: {
        // Параллельная 
        // смена прозрачности
        crossFade: true
    },
});

const languageArrow = document.querySelector(`.language__arrow`);

languageArrow.addEventListener(`click`, () => {
    languageArrow.parentNode.classList.toggle(`language__wrapper--active`);
})