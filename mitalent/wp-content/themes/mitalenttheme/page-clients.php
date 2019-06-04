<?php get_header(); ?>
	<section id="header">
		<div class="content">
			<div class="social_clients">
				<ul class="social_list">
					<li><a href="https://www.facebook.com/mitalentagency/"><i class="fab fa-facebook"></i></a></li>
					<li><a href="https://instagram.com/mitiagency"><i class="fab fa-instagram"></i></a></li>
					<li><a href="https://youtube.com/mitiagency"><i class="fab fa-youtube"></i></a></li>
					<li><a href="https://twitter.com/mitiagency"><i class="fab fa-twitter"></i></a></li>
				</ul>
			</div>
			<div class="main_block">
				<div class="left-side_clients">
					<h1>Our Talent</h1>
					<p>leading industry names.</p>
					<a href="/about" class="btn">
						about us
					</a>					
				</div>
				<div class="right-side_clients">
					<div class="slider-img">						
						<div class="slide_img"></div>
						<div class="slide_img"></div>
						<div class="slide_img"></div>
						<div class="slide_img"></div>
					</div>
					<div class="slider-text">
						<div class="slide_text">
							<span>young model 2020</span>
							<h1>Georgina Alson</h1>
						</div>
						<div class="slide_text">
							<span>young model 2020</span>
							<h1>SOSO</h1>
						</div>
						<div class="slide_text">
							<span>young model 2020</span>
							<h1>USUS</h1>
						</div>
						<div class="slide_text">
							<span>young model 2020</span>
							<h1>SERE</h1>
						</div>
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
					'numberposts' => 40,
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
			<button class="explore-more">
				explore-more
			</button>		
		</section>
		<section id="social">
			<div class="content">
				<div class="img">
					<div class="text">
						<h1>Social<br>Connections</h1>
						<span>on twitter</span>
					</div>
					<div class="social_icons">
						<ul class="social_list">
							<li><a href="https://www.facebook.com/mitalentagency/"><i class="fab fa-facebook"></i></a></li>
							<li><a href="https://instagram.com/mitiagency"><i class="fab fa-instagram"></i></a></li>
							<li><a href="https://youtube.com/mitiagency"><i class="fab fa-youtube"></i></a></li>
							<li><a href="https://twitter.com/mitiagency"><i class="fab fa-twitter"></i></a></li>
						</ul>
					</div>
					<div class="small-img">
					
					</div>
				</div>
				<div class="text">
					<p>
						“ You can listen to <a href="">@wiggywalsh</a> and <a href="">@AdamBuxton</a> talking about Parenting on the iPlayer now! You're Doing It Wrong is available here: <span><a href="">bbc.in/2G3wrYS</a></span> ”
					</p>
					<div class="media">
						<div class="btn">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/img/triangle.png" alt="">
						</div>
						<p>
							Mass Impressions<br>
							<span><a href="https://twitter.com/mitiagency">on Twitter</a></span>
						</p>
					</div>
				</div>
				
			</div>
		</section>
		<section id="news" style="width: 100%">
			<div class="headline">
				<h1>Latest News</h1>
			</div>
			<div class="flex">
				<div class="small_news small_news-clients block_news">
					<div class="img">
				
					</div>
					<div class="text">
						<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
						<span>8 March, 2020</span>
					</div>	
					<a href="/news"></a>		
				</div>
				<div class="small_news small_news-clients block_news">
					<div class="img">
				
					</div>
					<div class="text">
						<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
						<span>8 March, 2020</span>
					</div>	
					<a href="/news"></a>		
				</div>
				<div class="small_news small_news-clients block_news">
					<div class="img">
				
					</div>
					<div class="text">
						<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
						<span>8 March, 2020</span>
					</div>
					<a href="/news"></a>			
				</div>
				<div class="small_news small_news-clients block_news">
					<div class="img">
				
					</div>
					<div class="text">
						<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
						<span>8 March, 2020</span>
					</div>
					<a href="/news"></a>			
				</div>
				<div class="small_news small_news-clients block_news">
					<div class="img">
				
					</div>
					<div class="text">
						<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
						<span>8 March, 2020</span>
					</div>
					<a href="/news"></a>		
				</div>
				<div class="small_news small_news-clients block_news">
					<div class="img">
				
					</div>
					<div class="text">
						<p>5 Reasons To Keep Your Beauty Salon Reservation</p>
						<span>8 March, 2020</span>
					</div>
					<a href="/news"></a>			
				</div>
			</div>
		</section>
	</section>
<?php get_footer(); ?>