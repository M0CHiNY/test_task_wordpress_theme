<?php

// Check if a password is required to view the post; if yes, return early and do not display comments
if (post_password_required()) {
	return;
}
?>

<div id="comments" class="comments-area">
	<div class="container">

		<?php

		// Check if there are comments
		if (have_comments()):

			?>
			<!-- Display existing comments -->
			<div class="reviews">
				<div class="container">
					<ul class="reviews__items">
						<?php
						// List comments using WordPress comment template
						wp_list_comments(
							array(
								'style' => 'ul',
								'short_ping' => true,
								'callback' => 'testDev_list_comments', // Custom comment display function
								'reply_text' => __('Відповісти', 'devtest'), // Text for reply link
								'max_depth' => 2, // Maximum depth of threaded comments

							)
						);
						?>
					</ul>
				</div>
			</div>
			<?php

			// If comments are closed and there are comments, display a message indicating that comments are closed
			if (!comments_open()):
				?>
				<p class="no-comments">
					<?php esc_html_e('Коментарі закриті.', 'testdev'); ?>
				</p>
				<?php
			endif;

		endif; // End check for have_comments().

		// Section to leave a comment about the company
		?>
		<div class="about-company about-company--mod">
			<div class="container">
				<div class="about-company__inner">
					<h2><?php esc_html_e('Залишити відгук про компанію', 'testdev'); ?></h2>
				</div>
			</div>
		</div>

		<?php

		// Include the comment form template
		get_template_part('comments-parts/form-comment');

		?>
	</div>
</div>
