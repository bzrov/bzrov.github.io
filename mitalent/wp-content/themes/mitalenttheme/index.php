<?php get_header(); ?>
	<div class="preloader">
		<div class="load">
			<div class="load_line-1"></div>
			<div class="load_line-2"></div>
			<div class="load_line-3"></div>		
		</div>
		<div class="text_preloader">
			Welcome to MiTalent
		</div>
	</div>
	<section id="header">
		<div class="content">
			<div class="left-side">
				<ul class="social">
					<li><a href="https://www.facebook.com/mitalentagency/"><i class="fab fa-facebook"></i></a></li>
					<li><a href="https://instagram.com/mitiagency"><i class="fab fa-instagram"></i></a></li>
					<li><a href="https://youtube.com/mitiagency"><i class="fab fa-youtube"></i></a></li>
					<li><a href="https://twitter.com/mitiagency"><i class="fab fa-twitter"></i></a></li>
				</ul>
			</div>
			<div class="slider_header">
				<div class="slide_header" >
					<div class="flex-wrap">
						<div class="text" data-tilt>
							<p>
								Georgina<br>Alson
							</p>
							<span>
								young model 2020
							</span>
						</div>

					</div>
					<div class="slide_btn">
						<div class="btn">
							<p>view profile</p>
						</div>
						<div class="icon_play">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icon_play.png" alt="">						
						</div>
						<a href="/clients"></a>
					</div>			
				</div>
				<div class="slide_header">
					<div class="flex-wrap">
						<div class="text">
							<p>
								Elsa<br>Sonus
							</p>
							<span>
								young model 2020
							</span>
						</div>			
					</div>
					<div class="slide_btn">
						<div class="btn">
							<p>view profile</p>
						</div>
						<div class="icon_play">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icon_play.png" alt="">
						</div>
						<a href="/clients"></a>
					</div>
				</div>
				<div class="slide_header">
					<div class="flex-wrap">
						<div class="text">
							<p>
								Derek<br>Anderson
							</p>
							<span>
								young actor 2020
							</span>
						</div>

					</div>
					<div class="slide_btn">
						<div class="btn">
							<p>view profile</p>
						</div>
						<div class="icon_play">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icon_play.png" alt="">
						</div>
						<a href="/clients"></a>
					</div>
				</div>
				<div class="slide_header">
					<div class="flex-wrap">
						<div class="text">
							<p>
								Sarah<br>Warner
							</p>
							<span>
								young musican 2020
							</span>
						</div>
					</div>
					<div class="slide_btn">
						<div class="btn">
							<p>view profile</p>
						</div>
						<div class="icon_play">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icon_play.png" alt="">
						</div>
						<a href="/clients/"></a>			
					</div>
				</div>
			</div>		
		</div>
		<div class="header_bg-shape">
			
		</div>
	</section>
	<section id="middle-page">
		<section id="talents">
			<ul class="top_nav">
				<li id="actor-btn">actor</li>
				<li id="musician-btn">musician</li>
				<li id="comedian-btn">comedian</li>
				<li id="model-btn">model</li>
			</ul>
			<ul class="grid">
				<?php 

				$args = array(
					'numberposts' => 12,
					'post_type'   => 'profile',
					'suppress_filters' => true,
				);

				$posts = get_posts( $args );

				foreach($posts as $post){ setup_postdata($post);
					?>
						<li class="item <?php the_field('preview-profession'); ?>-block">
							<?php the_post_thumbnail(); ?>
							<a href="<?php the_permalink(); ?>"></a>
							<div class="text">
								<a href="<?php the_permalink(); ?>" class="view-more">
									<i class="fas fa-arrow-right"></i>
								</a>
								<p><?php  the_title(); ?></p>
								<span><?php the_field('preview-profession'); ?></span>
							</div>
						</li>
					<?php
				}

				wp_reset_postdata();
					?>			
			</ul>
			<button class="explore-more">explore more</button>
		</section>
		<section id="news_home" class="wrap">
				<div class="intro"><h1>Latest News</h1></div>
				<div class="small-news">
					<div class="block block_news">
						<div class="img"></div>
							<div class="text">
								<p>
									5 Reasons To Keep Your Beauty Salon Reservation
								</p>
							<span>8 March, 2020</span>						
						</div>
						<a href="/news"></a>
					</div>
					<div class="block block_news">
						<div class="img"></div>
							<div class="text">
								<p>
									5 Reasons To Keep Your Beauty Salon Reservation
								</p>
							<span>8 March, 2020</span>					
						</div>
						<a href="/news"></a>
					</div>
					<div class="block block_news">
						<div class="img"></div>
							<div class="text">
								<p>
									5 Reasons To Keep Your Beauty Salon Reservation
								</p>
							<span>8 March, 2020</span>						
						</div>
						<a href="/news"></a>
					</div>
				</div>
				<div class="grid">
					<div class="left-side">
						<div class="row">
							<div class="block_1 block_news">
								<div class="text">
									<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icon_play_white.png" alt="">
									<p>Use Your Reset Button To Change Your Vibration</p>
									<span>8 March, 2020</span>
								</div>
								<div class="img">
									<div class="btn">
										trending
									</div>
								</div>
								<a href="/news"></a>
							</div>
						</div>
						<div class="row">
							<div class="block_2 block_news">
								<div class="img">
									
								</div>
								<div class="text">
									<p>Dream Interpretation Common Symbols And Their Meanings</p>
									<span>8 March, 2020</span>
								</div>
								<a href="/news"></a>
							</div>
							<div class="block_3 block_news">
								<div class="slider-block_3">
									<div class="slide">
										
									</div>
									<div class="slide">
										
									</div>
									<div class="slide">
										
									</div>
									<div class="slide">
										
									</div>
								</div>
								<div class="text">
									<p>Dream Interpretation Common Symbols And Their Meanings</p>
									<span>8 March, 2020</span>
								</div>							
							</div>
						</div>
					</div>
					<div class="right-side block_news">
						<div class="block_slider_right-side">
							
						</div>
						<div class="text">
							<p>Motivation And Your Personal Vision AnUnbeatable Force</p>
							<span>8 March, 2020</span>
						</div>
						<a href="/news"></a>
					</div>
				</div>			
		</section>
	</section>
<?php get_footer(); ?>