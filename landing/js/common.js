const slider = $(".slider_header");
const shuffle = document.getElementById('shuffle');
function random(number) {
  return Math.floor(Math.random()*(number+1));
};
$('.slider').slick({
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'
});
$('.slider_header').slick({
	dots: true,
	arrows: false,
	infinite: false,
	dots: true,
	customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data('thumb');
		return '<span>'+(i+1)+'</span>'+'<h1>'+('price manager')+'</h1>'

	}, 
	appendDots:$('.left-side'),
	verticalSwiping: true,
	vertical: true,
	infinite: true
	
	
});	
slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));

for (var i=0; i<=8;i++){
	const block_i = document.getElementById('block_'+i);
};
shuffle.onclick = function() {
	block_2.style.order = random(8)	
	block_1.style.order = random(8)	
	block_3.style.order = random(8)
	block_4.style.order = random(8)
	block_5.style.order = random(8)	
	block_6.style.order = random(8)	
	block_7.style.order = random(8)
	block_8.style.order = random(8)

};
$(document).ready(function () {

        $('span').click(function() {
            $('.overlay').toggleClass('anim');
        });

        $('.animation').click(function(){
            $('.anim').toggleClass('reverse-animation');
        })
});
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll',function()
	{
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	})
});

