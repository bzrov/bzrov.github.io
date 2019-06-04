<?php 
/*
	Template Name: profiles
	Template Post Type: profile
*/
 ?>

<?php get_header(); ?>	

	<section id="header">
		<div class="content">
			<div class="left-side left-side_profile">
				<ul class="social">
					<li><i class="fab fa-facebook"></i></li>
					<li><i class="fab fa-instagram"></i></li>
					<li><i class="fab fa-youtube"></i></li>
					<li><i class="fab fa-twitter"></i></li>
				</ul>
			</div>
			
			<div class="slider_header_profile">				
				<div class="slide_header" >
					<img src="<?php the_field('preview-image-1'); ?>" alt="">
					<div class="flex-wrap">
						<div class="text" data-tilt>
							<p style="color: #000">
								<?php the_field('preview-name'); ?><br><?php the_field('preview-surname'); ?>
							</p>
							<span style="color: #000">
								british <?php the_field('preview-profession'); ?>
							</span>
						</div>
					</div>
								
				</div>
				<div class="slide_header" >
					<img src="<?php the_field('preview-image-2'); ?>" alt="">
					<div class="flex-wrap">
						<div class="text" data-tilt>
							<p style="color: #000">
								<?php the_field('preview-name'); ?><br><?php the_field('preview-surname'); ?>
							</p>
							<span style="color: #000">
								british <?php the_field('preview-profession'); ?>
							</span>
						</div>
					</div>
								
				</div>
				<div class="slide_header" >
					<img src="<?php the_field('preview-image-3'); ?>" alt="">
					<div class="flex-wrap">
						<div class="text" data-tilt>
							<p style="color: #000">
								<?php the_field('preview-name'); ?><br><?php the_field('preview-surname'); ?>
							</p>
							<span style="color: #000">
								british <?php the_field('preview-profession'); ?>
							</span>
						</div>
					</div>
								
				</div>
				<div class="slide_header" >
					<img src="<?php the_field('preview-image-4'); ?>" alt="">
					<div class="flex-wrap">
						<div class="text" data-tilt>
							<p style="color: #000">
								<?php the_field('preview-name'); ?><br><?php the_field('preview-surname'); ?>
							</p>
							<span style="color: #000">
								british <?php the_field('preview-profession'); ?>
							</span>
						</div>
					</div>
								
				</div>

			</div>		
		</div>
		<div class="header_bg-shape">
			
		</div>
	</section>
	<section id="middle-page">
		<section id="info">
			<div class="slider_info_profile">
				<div class="slide">
					<img src="<?php the_field('info-image-slide-1'); ?>" alt="">
				</div>
				<div class="slide">
					<img src="<?php the_field('info-image-slide-2'); ?>" alt="">
				</div>
				<div class="slide">
					<img src="<?php the_field('info-image-slide-3'); ?>" alt="">
				</div>
				<div class="slide">
					<img src="<?php the_field('info-image-slide-4'); ?>" alt="">
				</div>
			</div>
			<div class="content_info_profile">
				<ul class="tabs-header top_nav">
					<li class="tab-h" data-tab="0">profile</li>
					<li class="tab-h" data-tab="1">press</li>
					<li class="tab-h" data-tab="2">awards</li>
					<li class="tab-h" data-tab="3">creadits</li>
				</ul>
				<div class="tabs-body">
					<div class="tab-b text" style="display: block">
						<h1>Profile</h1>
						<span>	<?php the_field('preview-name'); ?>
								<?php the_field('preview-surname'); ?> is a leading actor, comedian and writer.</span>
						<div class="award">
							<i class="far fa-star"></i>
							British Award 2020
						</div>
						<p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 	 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 	commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
						</p>
					</div>
					<div class="tab-b text">
						<h1>Press</h1>
						<span>	<?php the_field('preview-name'); ?>
								<?php the_field('preview-surname'); ?> is a leading actor, comedian and writer.</span>
						<div class="award">
							<i class="far fa-star"></i>
							British Award 2020
						</div>
						<p>Ut labore et dolore magna aliqua. Ut enim ad minim 		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 	commodo consequat.
						</p>
						<p>
							 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
						</p>
					</div>
					<div class="tab-b text">
						<h1>Awards</h1>
						<span>	<?php the_field('preview-name'); ?>
								<?php the_field('preview-surname'); ?> is a leading actor, comedian and writer.</span>
						<div class="award">
							<i class="far fa-star"></i>
							British Award 2020
						</div>
						<p>	Veniam consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 	, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
						</p>
						<p>
							Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam. Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
						</p>
					</div>
					<div class="tab-b text">
						<h1>Creadits</h1>
						<span>	<?php the_field('preview-name'); ?>
								<?php the_field('preview-surname'); ?> is a leading actor, comedian and writer.</span>
						<div class="award">
							<i class="far fa-star"></i>
							British Award 2020
						</div>
						<p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 	commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section id="news" style="width: 100%; padding: 0">
			<div class="wrap_profile">
				<div class="left-side left-side-profile">
					<h1>	<?php the_field('preview-name'); ?>
							<?php the_field('preview-surname'); ?> on Press</h1>
					<div class="small_news small_news-profile">
						<div class="img img-1">
							<img src="<?php the_field('press-small-image-1'); ?>" alt="">
						</div>
						<div class="text">
							<p>29 Motivational Quotes For Business And Other Work Environments</p>
							<span>8 March, 2020</span>
						</div>
					</div>
					<div class="small_news small_news-profile">
						<div class="img img-2">
							<img src="<?php the_field('press-small-image-2'); ?>" alt="">
						</div>
						<div class="text">
							<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
							<span>8 March, 2020</span>
						</div>			
					</div>
					<a href="/news" class="btn">
						explore more
						<i class="fas fa-arrow-right"></i>
					</a>
				</div>
				<div class="right-side-profile" style="margin: 0">
					<img src="<?php the_field('press-image'); ?>" alt="">
				</div>
			</div>
		</section>
		<section id="talents">
			<div class="slider_clients">
				<?php 

				$args = array(
					'numberposts' => 40,
					'post_type'   => 'profile',
					'suppress_filters' => true,
				);

				$posts = get_posts( $args );

				foreach($posts as $post){ setup_postdata($post);
					?>
						<div class="item <?php the_field('preview-profession'); ?>-block">
							<?php the_post_thumbnail(); ?>
							<a href="<?php the_permalink(); ?>"></a>
							<div class="text">
								<a href="<?php the_permalink(); ?>" class="view-more">
									<i class="fas fa-arrow-right"></i>
								</a>
								<p><?php  the_title(); ?></p>
								<span><?php the_field('preview-profession'); ?></span>
							</div>
						</div>
					<?php
				}

				wp_reset_postdata();
					?>
			</div>
		</section>
	</section>
<?php get_footer(); ?>