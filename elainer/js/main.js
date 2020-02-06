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
        center: [59.96420204699221,30.309987457672122],
        zoom: 17,
        controls: []
    });
    myMap.geoObjects
    .add(new ymaps.Placemark([59.96420204699221,30.309987457672122], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'Клиника "Улыбаться Модно!"'
    }))
}

//Якоря в навигации
$('a[data-target^="anchor"]').bind('click.smoothscroll',function()
	{
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $(".header-menu__item").each((idx,el)=>{
            $(el).removeClass("header-menu__item_active")
        })
        $(this).addClass("header-menu__item_active")
		$([document.documentElement, document.body]).animate({
            scrollTop: bl_top
        },2000);
        return false;
	})
