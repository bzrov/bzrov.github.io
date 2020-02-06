// Слайдер до и после
$('.results__slider').slick({
    dots: true,
    draggable: false,
    touchMove: false,
    arrows: true,
    prevArrow: $('.results__arrow-prev'),
    nextArrow: $('.results__arrow-next'),
    customPaging : function() {
        return '<div class="slick-dot_custom"></div>';
    },
});

//Инициализация плагина для до и после
$(function(){
    $(".results__result").twentytwenty({
        default_offset_pct: 0.4,
    });
});

//Слайдер отзывов
$('.reviews__slider').slick({
    prevArrow: $('.review__arrow-prev'),
    nextArrow: $('.review__arrow-next'),
});

//Открытие вопросов
$(".question").click(function(){
    $($(this).parent()).find(".answer").show()
})
//Медиа меню
$(".header__menu_open").click(function(){
    $(".header__menu_media").addClass("header__menu_media_active")
    $(".overlay").addClass("overlay_active")
})
$(".overlay").click(function(){
    $(".overlay").removeClass("overlay_active")
    $(".header__menu_media").removeClass("header__menu_media_active")
})
$(".header__menu-icon_close").click(function(){
    $(".overlay").removeClass("overlay_active")
    $(".header__menu_media").removeClass("header__menu_media_active")
})
// Параллакс на элементах
var rellax = new Rellax('.rellax',
{
    breakpoints: [576, 768, 1201]
  }
)
// Яндекс карта
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: []
    });
    myMap.geoObjects
    .add(new ymaps.Placemark([55.790139, 37.814052], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'Клиника "Улыбаться Модно!"'
    }))
}
