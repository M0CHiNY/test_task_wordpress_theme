<?php
get_header();

$post_id = get_the_ID(); // Get the ID of the current post
$quality_rating = calculate_average_rating($post_id, 'quality');
$quickness_rating = calculate_average_rating($post_id, 'quickness');
$price_rating = calculate_average_rating($post_id, 'price');
?>

<section class="company">
  <div class="container">
    <div class="company__inner">
      <div class="company__items">
        <div class="company__item">
          <div class="company__box logo">
            <?php
            // Check if company logo exists
            if ($company_logo_id = carbon_get_post_meta(get_the_ID(), 'crb_image')) {
              $company_logo_url = wp_get_attachment_url($company_logo_id); // Get URL for the image
              $company_logo_alt = get_post_meta($company_logo_id, '_wp_attachment_image_alt', true); // Get alt text
            }
            if (!empty($company_logo_id)): ?>
              <img src="<?php echo $company_logo_url ?>" alt="<?php echo $company_logo_alt; ?>" />
            <?php endif; ?>
            <h1>
              <?php the_title(); ?>
            </h1>
          </div>

          <!-- Start company content -->

          <div class="company__box contacts">
            <?php if (!empty($webSite = carbon_get_post_meta(get_the_ID(), 'crb_website'))): ?>
              <div class="contacts__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <!-- SVG path for website icon -->
                </svg>
                <a href="<?php echo $webSite?>" target="_blank">
                  <?php echo esc_html($webSite) ?>
                </a>
              </div>
            <?php endif; ?>
            <?php if (!empty($email = carbon_get_post_meta(get_the_ID(), 'crb_email'))): ?>
              <div class="contacts__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <!-- SVG path for email icon -->
                </svg>
                <a href="mailto:<?php echo esc_html($email) ?>">
                  <?php echo esc_html($email) ?>
                </a>
              </div>
            <?php endif; ?>
            <?php if (!empty($tel = carbon_get_post_meta(get_the_ID(), 'crb_tel'))): ?>
              <div class="contacts__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <!-- SVG path for phone icon -->
                </svg>
                <a href="tel:+<?php echo esc_html($tel) ?>">+
                  <?php echo esc_html($tel) ?>
                </a>
              </div>
            <?php endif; ?>
          </div>

          <!-- End company content -->

          <div class="company__box rating">
            <div class="reting_box">
              <?php totalValue($quality_rating, $quickness_rating, $price_rating); ?>
            </div>
            <p class="rating__total">
              На основі
              <?php echo get_comments_number(); ?> відгуків про
              <?php the_title(); ?>
            </p>
          </div>
        </div>
        <div class="company__item company__item--mod">

          <!-- Quality Rating -->
          <div class="company current__rating">
            <div class="current__rating">
              <p>Якість</p>
              <div class="current__rating-result quality">
                <?php for ($i = 1; $i <= 5; $i++): ?>
                  <?php if ($i <= round($quality_rating)): ?>
                    <span class="current__rating fill"></span>
                  <?php else: ?>
                    <span class="current__rating"></span>
                  <?php endif; ?>
                <?php endfor; ?>
              </div>
            </div>
          </div>
          
          <!-- Quickness Rating -->
          <div class="company current__rating">
            <div class="current__rating">
              <p>Швидкість</p>
              <div class="current__rating-result quickness">
                <?php for ($i = 1; $i <= 5; $i++): ?>
                  <?php if ($i <= round($quickness_rating)): ?>
                    <span class="current__rating fill"></span>
                  <?php else: ?>
                    <span class="current__rating"></span>
                  <?php endif; ?>
                <?php endfor; ?>
              </div>
            </div>
          </div>
          
          <!-- Price Rating -->
          <div class="company current__rating ">
            <div class="current__rating">
              <p>Ціна</p>
              <div class="current__rating-result price">
                <?php for ($i = 1; $i <= 5; $i++): ?>
                  <?php if ($i <= round($price_rating)): ?>
                    <span class="current__rating fill"></span>
                  <?php else: ?>
                    <span class="current__rating"></span>
                  <?php endif; ?>
                <?php endfor; ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Company Content Section -->
<div class="company-content">
  <div class="container">
    <div class="company-content__inner">
      <?php the_content(); ?>
    </div>
  </div>
</div>

<?php
// Check if comments are open or if there are comments
if (comments_open() || get_comments_number()) {
  comments_template();
}

// Get the footer
get_footer();
?>
