$('.results__slider').slick({
    dots: true,
    draggable: false,
    touchMove: false,
    prevArrow: $('.results__arrow-prev'),
    nextArrow: $('.results__arrow-next'),
    customPaging : function() {
        return '<div class="slick-dot_custom"></div>';
    },
});
$('.reviews__slider').slick({

    prevArrow: $('.review__arrow-prev'),
    nextArrow: $('.review__arrow-next'),

});

$(function(){
    $(".results__result").twentytwenty({
        default_offset_pct: 0.4,
    });
});

$(".question").click(function(){
    $($(this).parent()).find(".answer").show()
})
var rellax = new Rellax('.rellax',
{
    breakpoints: [576, 768, 1201]
  }
)