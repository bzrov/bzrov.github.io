window.onload=function(){
//********************ANIMATION***************************//
	document.getElementById('fixed_block').style.transform = 'scale(1)';
	//********************ANIMATION***************************//			
	$('.left_slider_news').slick({
		arrows: false,
		autoplay: true,
		infinite: false,
		vertical: true,
		verticalSwiping: true
	});
	$('.slider_left-side').slick({
		arrows: false,
		autoplay: true,
		dots: true
	});
	$('.slider_clients').slick({
		arrows: false,		
		dots: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1174,
				settings: {
					slidesToShow: 3
				}
			},
			{	
				breakpoint: 820,
				settings: {
					slidesToShow: 2
				}
			},
			{	
				breakpoint: 675,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$(window).on('load scroll', function () {
		var scrollTop = $(this).scrollTop(),
		h = $(this).height(),
		offset = $('#footer').offset().top;
		if (offset - scrollTop > h) {
		//двигаем что нужно
			document.querySelector('.wrap_news').style.position = 'fixed';
			document.querySelector('.wrap_news').style.width = '40%';
		}
		else {
			document.querySelector('.wrap_news').style.position = 'absolute';
			document.querySelector('.wrap_news').style.bottom = '0';
			document.querySelector('.wrap_news').style.width = '100%';

		}
	});
};
	