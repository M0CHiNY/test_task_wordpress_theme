<footer class="footer">
	<div class="container">
		<a href="#" class="logo">Logo</a>
		<ul class="items">
			<?php
			// Query to retrieve companies
			$company_query = new WP_Query(
				array(
					'post_type' => 'company',
					// Custom post type name
					'posts_per_page' => -1,
					// -1 displays all posts
				)
			);

			// Check if there are posts
			if ($company_query->have_posts()): ?>
				<!-- Display companies -->
				<?php while ($company_query->have_posts()):
					$company_query->the_post(); ?>
					<li class="item">
						<a href="<?php the_permalink(); ?>" class="item__link">
							<?php the_title(); ?>
						</a>
					</li>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php else: ?>
				<li class="item">
					Немає добавлених компаній
				</li>
			<?php endif; ?>
		</ul>
	</div>
</footer>

<?php wp_footer(); ?>

</body>

</html>