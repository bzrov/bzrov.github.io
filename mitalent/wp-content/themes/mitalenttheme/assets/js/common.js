window.onload = function() {
	

	//********************FOOTER-EMAIL_BAR****************************//
	document.querySelector(".btn-email").addEventListener('click', function(){
		document.querySelector(".un_active-form").style.width = '100%'
		document.querySelector(".un_active-form").style.opacity = '0.4'	
		document.querySelector(".btn_success").style.opacity = '1'	
	});
	//********************FOOTER-EMAIL_BAR****************************//


	//********************ANIMATION***********************************//
	document.querySelector('.header_bg-shape').style.transform = 'translateX(0) scale(1)';	
	//********************ANIMATION***********************************//


	//********************TABS-SCRIPT*********************************//
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
	//********************TABS-SCRIPT***********************************//


	//********************ADAPTIVE-MEDIA-MENU***************************//
	(function() {
  
		var Menu = (function() {
			var burger = document.querySelector('.burger');
			var menu = document.querySelector('.menu');
			var menuList = document.querySelector('.menu__list');
			var brand = document.querySelector('.menu__brand');
			var menuItems = document.querySelectorAll('.menu__item');

			var active = false;

			var toggleMenu = function() {
				if (!active) {
					menu.classList.add('menu--active');
					menuList.classList.add('menu__list--active');
					brand.classList.add('menu__brand--active');
					burger.classList.add('burger--close');
					for (var i = 0, ii = menuItems.length; i < ii; i++) {
						menuItems[i].classList.add('menu__item--active');
					}

					active = true;
					} else {
						menu.classList.remove('menu--active');
						menuList.classList.remove('menu__list--active');
						brand.classList.remove('menu__brand--active');
						burger.classList.remove('burger--close');
						for (var i = 0, ii = menuItems.length; i < ii; i++) {
							menuItems[i].classList.remove('menu__item--active');
						}
					active = false;
				}
			};
			var bindActions = function() {
				burger.addEventListener('click', toggleMenu, false);
			};
			var init = function() {
				bindActions();
			};
			return {
				init: init
			};
		}());
		Menu.init();
	}());
	//********************ADAPTIVE-MEDIA-MENU***************************//
};
