window.onload = function() {
	$('.slider-img').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button id="arrow-next_clients" type="button"><i class="fas fa-arrow-down"></i>',
		prevArrow: '<button id="arrow-prev_clients" type="button"><i class="fas fa-arrow-up"></i>',
		vertical: true 		
	});
	$('.slider-text').slick({
		arrows: false,
		dots: false,
		infinite: false,
		vertical: true		
	});
	$('#arrow-prev_clients').click(function(){ 
		$('.slider-text').slick('slickPrev'); 
	}); 
		//Кнопка вперед
	$('#arrow-next_clients').click(function(){ 
		$('.slider-text').slick('slickNext'); 
	});
	document.querySelector('.main_block').style.transform = 'scale(1)';

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
};
