window.onload=function(){
			
	$('.talents_about-slider').slick({
		slidesToShow: 4,
		autoplay: true,
			autoplaySpeed: 2500,
			pauseOnHover: false,
			nextArrow: '<i class="fas fa-arrow-right"></i>',
			prevArrow: '<i class="fas fa-arrow-left"></i>',
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
	
	//********************ANIMATION***************************//
	document.querySelector('.left_block_about').style.transform = 'translateX(0) scale(1)';	
	//********************ANIMATION***************************//
};