// Слайдер до и после
$('.results__slider').slick({
    dots: true,
    draggable: false,
    touchMove: false,
    swipe: false,
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
    const question = $($(this).parent())
    if(question.hasClass("questions__item_active")){
        question.addClass("questions__item_unactive");
        setTimeout(function(){
            question.removeClass("questions__item_active")
            question.removeClass("questions__item_unactive")
        }, 550)
    }
})
$(".question").click(function(){
    const question = $($(this).parent())
    question.addClass("questions__item_active")

})
//Медиа меню
//Открытие медиа-меню
$(".header__menu_open").click(function(){
    $(".header__menu_media").addClass("header__menu_media_active")
    $(".overlay").addClass("overlay_active")
})
//Закрытие медиа-меню по клику на оверлей
$(".overlay").click(function(){
    $(".overlay").addClass("overlay_unactive")
    $(".header__menu_media").addClass("header__menu_media_unactive")
    setTimeout(function(){
        $(".overlay").removeClass("overlay_active")
        $(".overlay").removeClass("overlay_unactive")
        $(".header__menu_media").removeClass("header__menu_media_active")
        $(".header__menu_media").removeClass("header__menu_media_unactive")
    }, 500)
})
//Закрытие медиа-меню по клику на иконку
$(".header__menu-icon_close").click(function(){
    $(".overlay").addClass("overlay_unactive")
    $(".header__menu_media").addClass("header__menu_media_unactive")
    setTimeout(function(){
        $(".overlay").removeClass("overlay_active")
        $(".overlay").removeClass("overlay_unactive")
        $(".header__menu_media").removeClass("header__menu_media_active")
        $(".header__menu_media").removeClass("header__menu_media_unactive")
    }, 500)
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
        center: [59.96420204699221,30.309987457672122],
        zoom: 17,
        controls: ["zoomControl"],

    });
    myMap.geoObjects
    .add(new ymaps.Placemark([59.96420204699221,30.309987457672122], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'Клиника "Улыбаться Модно!"'
    }))
    myMap.behaviors.disable('scrollZoom') 
}

//Якоря в навигации
$('a[data-target^="anchor"]').bind('click.smoothscroll',function()
	{
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $(".header-menu__item").each((idx,el)=>{
            $(el).removeClass("menu__item_active")
        })
        $(".footer-menu__item").each((idx,el)=>{
            $(el).removeClass("menu__item_active")
        })
        $(this).addClass("menu__item_active")
		$([document.documentElement, document.body]).animate({
            scrollTop: bl_top
        },1000);
        return false;
	})



