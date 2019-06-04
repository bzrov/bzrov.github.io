<!DOCTYPE html>
<html lang="ru">
<head>

	<meta charset="utf-8">

	<title>Title</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta property="og:image" content="path/to/image.jpg">	
	<!-- Chrome, Firefox OS and Opera -->
	<meta name="theme-color" content="#000">
	<!-- Windows Phone -->
	<meta name="msapplication-navbutton-color" content="#000">
	<!-- iOS Safari -->
	<meta name="apple-mobile-web-app-status-bar-style" content="#000">

	<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800" rel="stylesheet">

	
	
	<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800" rel="stylesheet">
	
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">

	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">

	

	<?php wp_head(); ?>
</head>
<body>
	<div class="header_nav">
		<div class="media-menu">
			<div class="burger">
				<div class="burger__patty"></div>
				<div class="burger__patty"></div>
				<div class="burger__patty"></div>
			</div>
			<nav class="menu">
				<div class="menu__brand">
					<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt=""></a>
				</div>
				<ul class="menu__list">
					<li class="menu__item"><a href="news.html" class="menu__link">News</a></li>
					<li class="menu__item"><a href="about.html" class="menu__link">About</a></li>
					<li class="menu__item"><a href="news.html" class="menu__link">News</a></li>
					<li class="menu__item"><a href="news.html" class="menu__link">News</a></li>
					<li class="menu__item"><a href="news.html" class="menu__link">News</a></li>
					<li class="menu__item"><a href="https://www.facebook.com/mitalentagency/"><i class="fab fa-facebook"></i></a></li>
					<li class="menu__item"><a href="https://instagram.com/mitiagency"><i class="fab fa-instagram"></i></a></li>
					<li class="menu__item"><a href="https://youtube.com/mitiagency"><i class="fab fa-youtube"></i></a></li>
					<li class="menu__item"><a href="https://twitter.com/mitiagency"><i class="fab fa-twitter"></i></a></li>
			
				</ul>
			</nav>
		</div>	
				
		<div class="top_nav">


			<ul class="top_nav-menu">
				<?php wp_nav_menu(array(
					'theme_location' => 'top_menu',
					'container' => null	,	
					'menu_class' =>	'top_nav-menu',
					
					
					
				)); ?>	
				
			</ul>
			<div class="logo">
				<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt=""></a>
			</div>
			<button class="search">
				<i class="fas fa-search"></i>
			</button>
		</div>
	</div>