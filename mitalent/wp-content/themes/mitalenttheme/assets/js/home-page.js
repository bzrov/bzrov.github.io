window.onload = function() {
		$('.slider_header').slick({
		dots: true,
		arrows: false,
		dots: true,
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');	 
			
			return '<span>'+'0'+(i+1)+'</span>' 
		},
		verticalSwiping: true,
		vertical: true,
		infinite: true,
		autoplay: true	
	});	

	var list_of_items = document.querySelector('.grid'); 	
	var btn_explore_more = document.querySelector(".explore-more");

	function selection(tag_name){
		(btn_explore_more).style.display ="block"	
		for (var i = 0; i<(list_of_items.children.length); i++){
			if ((list_of_items.children[i].className) != 'item ' + tag_name){
				list_of_items.children[i].style.display= 'none';
			} else {
				list_of_items.children[i].style.display= 'block';			
			}
		};
	};

	document.getElementById("actor-btn").addEventListener('click', function(){
		selection('actor-block');
	});

	document.getElementById("musician-btn").addEventListener('click', function(){
		selection('musician-block');
	});

	document.getElementById("comedian-btn").addEventListener('click', function(){
		selection('comedian-block');
	});

	document.getElementById("model-btn").addEventListener('click', function(){			
		selection('model-block');
	});

	document.querySelector(".explore-more").addEventListener('click', function(){
		for (var i = 0; i<(list_of_items.children.length); i++){	
			list_of_items.children[i].style.display= 'block';
			(btn_explore_more).style.display ="none"
		};
	});		
	//********************Talents-blocks-choose********************//


	/*************************SLIDER-BLOCK_3-HOME-PAGE****************************/
	$('.slider-block_3').slick({
		dots: true,
		arrows: false,
		verticalSwiping: true,
		vertical: true,
		infinite: true	
	});
	/*************************SLIDER-BLOCK_3-HOME-PAGE****************************/
	document.querySelector('.slider_header').style.transform = 'scale(1)';
}