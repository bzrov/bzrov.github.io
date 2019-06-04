window.onload = function() {
	function fTabs(event){
				console.log(event);
				if (event.target.className == 'tab-h'){
					var dataTab = event.target.getAttribute('data-tab');
					var tabBody = document.getElementsByClassName('tab-b');
					for (var i=0; i < tabBody.length; i++) {
						if (dataTab==i) {
							tabBody[i].style.display = 'block';
							document.getElementsByClassName('tab-h')
						} else {
							tabBody[i].style.display = 'none';
						}
					}
				}
			};
	$('.slider_header_profile').slick({
		arrows: false,
		dots: true,
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');	 
			
			return '<span>'+'0'+(i+1)+'</span>' 
		},
		verticalSwiping: true,
		vertical: true,
		infinite: true		
	});


	$('.slider_info_profile').slick({
		arrows: false,
		dots: true,
		infinite: false	
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


	document.querySelector('.tabs-header').addEventListener('click', fTabs);
}
	