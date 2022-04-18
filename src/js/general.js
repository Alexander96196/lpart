//Инициализация бургер меню
$(document).ready(function () {
    $('.menu__button').click(function (event) {
        $('.menu__button').toggleClass('active');
        $('.menu__wrapper').slideToggle(300);
    });
}); 

//Инициализация слик слайдера
$(function () {
    $('.promo__list').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
})