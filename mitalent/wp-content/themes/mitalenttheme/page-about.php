<?php get_header('about'); ?>
	<section id="header" class="header_about">
		<div class="content_about">
			<div class="left_block_about">
				<ul class="social">
					<li><a href="https://www.facebook.com/mitalentagency/"><i class="fab fa-facebook"></i></a></li>
					<li><a href="https://instagram.com/mitiagency"><i class="fab fa-instagram"></i></a></li>
					<li><a href="https://youtube.com/mitiagency"><i class="fab fa-youtube"></i></a></li>
					<li><a href="https://twitter.com/mitiagency"><i class="fab fa-twitter"></i></a></li>
				</ul>
				<div class="btn_contact">
					<div class="btn_about">
						<p>view profile</p>
					</div>
					<div class="icon_play_about">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icon_play.png" alt="">
					</div>
					<a href="/clients"></a>
				</div>
			</div>
			<div class="text_about">
				<div class="epilogue">
					<span>
						eveloping the best talent in the comedy <br>& entertainment business.
					</span>
				</div>
				<p>
					Our client list is drawn from the competitive world of stand-up comedy and our boutique, focused company works closely with them to develop talents learned on the circuit into the skills needed for a long-lasting career performing and writing for television, radio and film.		
				</p>
				<p>
					Our client list is drawn from the competitive world of stand-up comedy and our boutique, focused company works closely with them to develop talents. Learned on the circuit into the skills needed for a long-lasting career performing and writing for television, radio and film.
				</p>
				<div class="quote">
					<p>
						<span>Motivation </span>Is The First Step To <span>Success</span>
					</p>
				</div>
			</div>
		</div>
		<div class="header_bg-shape">
			
		</div>
	</section>
	<section id="middle-page">
		<section id="talents">
			<div class="talents_about talents_about-slider">
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