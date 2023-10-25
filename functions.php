<?php

// Enqueue styles
function testDev_styles()
{
    wp_enqueue_style('testDevCss', get_template_directory_uri() . '/assets/css/app.css', array(), '1', 'all');
    wp_enqueue_style('testDevCustom', get_template_directory_uri() . '/assets/css/custom.css', array(), '1', 'all');
}

function fonts_testDev() {
    wp_enqueue_style('Nunito', 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,500;0,6..12,800;0,6..12,900;1,6..12,400;1,6..12,600&display=swap" rel="stylesheet');
}

// Enable threaded comments in WordPress
function enable_threaded_comments()
{
    if (is_singular() && comments_open() && (get_option('thread_comments') == 1)) {
        wp_enqueue_script('comment-reply');
    }
}

// Include necessary files
$cf = get_template_directory() . '/inc/carbonfields.php';
if (file_exists($cf)) {
    require_once $cf;
}

$customPostType = get_template_directory() . '/inc/cpt.php';
if (file_exists($customPostType)) {
    require_once $customPostType;
}




// Filter comment form fields order
function testDev_comment_fields($fields)
{
    // Reorder comment form fields

    $new_fields = array();

    $myorder = array('quality_rating', 'quickness_rating', 'price_rating', 'author', 'email', 'comment'); // нужный порядок

    foreach ($myorder as $key) {
        $new_fields[$key] = $fields[$key];
        unset($fields[$key]);
    }

    if ($fields)
        foreach ($fields as $key => $val)
            $new_fields[$key] = $val;

    return $new_fields;
}

// Save custom comment meta data when a comment is posted
function save_custom_comment_meta_data($comment_id)
{
    if (isset($_POST['quality'])) {
        update_comment_meta($comment_id, 'quality', sanitize_text_field($_POST['quality']));
    }
    if (isset($_POST['quickness'])) {
        update_comment_meta($comment_id, 'quickness', sanitize_text_field($_POST['quickness']));
    }
    if (isset($_POST['price'])) {
        update_comment_meta($comment_id, 'price', sanitize_text_field($_POST['price']));
    }
}




// Calculate average rating
function calculate_average_rating($post_id, $aspect)
{
    $comments = get_comments(
        array(
            'post_id' => $post_id,
            'status' => 'approve',
        )
    );

    $total_rating = 0;
    $count = 0;

    foreach ($comments as $comment) {
        $rating = get_comment_meta($comment->comment_ID, $aspect, true);
        if (!empty($rating)) {
            $total_rating += intval($rating);
            $count++;
        }
    }

    if ($count > 0) {
        return $total_rating / $count;
    } else {
        return 0;
    }
}


// Render individual rating stars
function totalValue($item1, $item2, $item3)
{

    $total = (($item1 + $item2 + $item3) / 3);
    for ($i = 1; $i <= 5; $i++) {
        if ($i <= round($total)) {
            echo ' <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none"> <path d="M12.9109 5.80718L13.0764 6.13212L13.4375 6.18273L18.8945 6.9475C19.2847 7.00792 19.4429 7.46302 19.1449 7.75602L15.2204 11.507L14.9495 11.766L15.0148 12.135L15.9485 17.4116C15.9737 17.5835 15.8988 17.7497 15.7369 17.8633C15.5724 17.9787 15.372 18 15.2002 17.9135C15.1996 17.9132 15.199 17.9129 15.1984 17.9126L10.3403 15.4001L10.0199 15.2345L9.69909 15.3991L4.80159 17.9126C4.80126 17.9127 4.80093 17.9129 4.8006 17.9131C4.62863 18 4.42781 17.9788 4.26311 17.8633C4.10123 17.7497 4.02628 17.5835 4.0515 17.4116L4.98521 12.135L5.05052 11.766L4.77958 11.507L0.855075 7.756C0.557142 7.46307 0.715285 7.00813 1.10525 6.94754L6.59925 6.18282L6.96354 6.13211L7.12845 5.80334L9.55794 0.959739C9.64721 0.787821 9.81409 0.697972 10.0065 0.700033C10.2055 0.702163 10.3641 0.801117 10.4376 0.950846L10.4376 0.95088L10.4422 0.960088L12.9109 5.80718Z" fill="#FFE03E" stroke="#FFE03E" stroke-width="1.4" /></svg>';
        } else {
            echo '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9109 5.80718L13.0764 6.13212L13.4375 6.18273L18.8945 6.9475C19.2847 7.00792 19.4429 7.46302 19.1449 7.75602L15.2204 11.507L14.9495 11.766L15.0148 12.135L15.9485 17.4116C15.9737 17.5835 15.8988 17.7497 15.7369 17.8633C15.5724 17.9787 15.372 18 15.2002 17.9135C15.1996 17.9132 15.199 17.9129 15.1984 17.9126L10.3403 15.4001L10.0199 15.2345L9.69909 15.3991L4.80159 17.9126C4.80126 17.9127 4.80093 17.9129 4.8006 17.9131C4.62863 18 4.42781 17.9788 4.26311 17.8633C4.10123 17.7497 4.02628 17.5835 4.0515 17.4116L4.98521 12.135L5.05052 11.766L4.77958 11.507L0.855075 7.756C0.557142 7.46307 0.715285 7.00813 1.10525 6.94754L6.59925 6.18282L6.96354 6.13211L7.12845 5.80334L9.55794 0.959739C9.64721 0.787821 9.81409 0.697972 10.0065 0.700033C10.2055 0.702163 10.3641 0.801117 10.4376 0.950846L10.4376 0.95088L10.4422 0.960088L12.9109 5.80718Z" stroke="#FFE03E" stroke-width="1.4"/></svg>';
        }

    }
}

// Custom comment list formatting
function testDev_list_comments($comment, $args, $depth)
{
    // ваш код для генерації розмітки коментаря, наприклад:
    ?>
    <li class="reviews__item">
        <div class="box">
            <div class="box-info">
                <div class="box-info__wrapper">
                    <p class="box-info__name">
                        <?php echo get_comment_author(); ?>
                    </p>
                    <span class="box-info__date">
                        <?php echo get_comment_date(); ?>
                    </span>
                </div>
            </div>
            <div class="box__total total_commects">
                <?php getRatingCommentsTotal('quality', 'quickness', 'price') ?>
            </div>
        </div>
        <div class="box-content">
            <?php comment_text(); ?>
        </div>
        <div class="box-result">
            <div class="current__rating">
                <div class="current__rating-result quality">
                    <?php getRatingComments('quality') ?>
                </div>
            </div>
            <div class="current__rating">
                <div class="current__rating">
                    <p>швидкість</p>
                    <div class="current__rating-result quickness">
                        <?php getRatingComments('quickness') ?>
                    </div>
                </div>
            </div>
            <div class="current__rating ">
                <div class="current__rating">
                    <p>ціна</p>
                    <div class="current__rating-result price">
                        <?php getRatingComments('price') ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-reply">
            <?php comment_reply_link(
                array_merge(
                    $args,
                    array(
                        'depth' => $depth,
                        'max_depth' => $args['max_depth'],
                    )
                )
            ); ?>
        </div>
    </li>
    <?php
}

// Get individual rating stars
function getRatingComments($nameRating)
{
    $result = get_comment_meta(get_comment_ID(), $nameRating, true);
    for ($i = 1; $i <= 5; $i++):
        if ($i <= intval($result)):
            ?>
            <span class="current__rating fill"></span>
        <?php else: ?>
            <span class="current__rating"></span>
        <?php endif; endfor;
}

// Get total rating stars
function getRatingCommentsTotal($item1, $item2, $item3)
{
    $item1 = get_comment_meta(get_comment_ID(), $item1, true);
    $item2 = get_comment_meta(get_comment_ID(), $item2, true);
    $item3 = get_comment_meta(get_comment_ID(), $item3, true);

    $arr = [$item1, $item2, $item3];
    $result = 0; // Ініціалізуйте змінну $result перед використанням

    foreach ($arr as $item) {
        $result += intval($item);
    }

    $result = $result / 3;
    getSvgResult($result);
}

function getSvgResult($num)
{
    for ($i = 1; $i <= 5; $i++):
        if ($i <= round($num)):
            ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                    d="M11.5574 5.85833L11.7229 6.18326L12.084 6.23387L16.9948 6.9221C17.2879 6.96785 17.4088 7.30656 17.1817 7.53028L13.65 10.9058L13.3791 11.1648L13.4444 11.5338L14.2845 16.2817C14.3025 16.4064 14.2498 16.5308 14.123 16.6198C13.9936 16.7106 13.8407 16.7246 13.7118 16.6598C13.7113 16.6595 13.7108 16.6593 13.7103 16.659L9.33838 14.398L9.01806 14.2324L8.69722 14.397L4.28971 16.659C4.28947 16.6591 4.28923 16.6593 4.28898 16.6594C4.15996 16.7246 4.0067 16.7108 3.877 16.6198C3.7502 16.5308 3.69754 16.4064 3.71547 16.2817L4.55562 11.5338L4.62092 11.1648L4.34999 10.9058L0.818306 7.53025C0.591304 7.30659 0.712074 6.96804 1.00495 6.92214L5.94898 6.23396L6.31327 6.18326L6.47817 5.85449L8.66449 1.49571C8.73129 1.36743 8.85522 1.29852 9.00513 1.30012C9.16157 1.3018 9.2781 1.37889 9.33103 1.4867L9.33096 1.48674L9.33565 1.49595L11.5574 5.85833Z"
                    fill="#2EAA50" stroke="#2EAA50" stroke-width="1.4" />
            </svg>
        <?php else: ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                    d="M11.5574 5.85833L11.7229 6.18326L12.084 6.23387L16.9948 6.9221C17.2879 6.96785 17.4088 7.30656 17.1817 7.53028L13.65 10.9058L13.3791 11.1648L13.4444 11.5338L14.2845 16.2817C14.3025 16.4064 14.2498 16.5308 14.123 16.6198C13.9936 16.7106 13.8407 16.7246 13.7118 16.6598C13.7113 16.6595 13.7108 16.6593 13.7103 16.659L9.33838 14.398L9.01806 14.2324L8.69722 14.397L4.28971 16.659C4.28947 16.6591 4.28923 16.6593 4.28898 16.6594C4.15996 16.7246 4.0067 16.7108 3.877 16.6198C3.7502 16.5308 3.69754 16.4064 3.71547 16.2817L4.55562 11.5338L4.62092 11.1648L4.34999 10.9058L0.818306 7.53025C0.591304 7.30659 0.712074 6.96804 1.00495 6.92214L5.94898 6.23396L6.31327 6.18326L6.47817 5.85449L8.66449 1.49571C8.73129 1.36743 8.85522 1.29852 9.00513 1.30012C9.16157 1.3018 9.2781 1.37889 9.33103 1.4867L9.33096 1.48674L9.33565 1.49595L11.5574 5.85833Z"
                    fill="#FFF" stroke="#2EAA50" stroke-width="1.4" />
            </svg>
        <?php endif; endfor;
}

// Save and display rating metabox in admin
function add_rating_metabox()
{
    add_meta_box('comment_rating_metabox', 'Рейтинг коментаря', 'display_rating_metabox', 'comment', 'normal', 'high');
}

function display_rating_metabox($comment)
{

    $quality = get_comment_meta($comment->comment_ID, 'quality', true);
    $quickness = get_comment_meta($comment->comment_ID, 'quickness', true);
    $price = get_comment_meta($comment->comment_ID, 'price', true);
    ?>
    <div class="reting-comments_items">
        <div class="reting-comments_item">
            <label for="quality">Якість:</label>
            <input type="number" id="quality" name="quality" min="1" max="5"
                value="<?php echo esc_attr($quality); ?>" /><br />
        </div>
        <div class="reting-comments_item">
            <label for="quickness">Швидкість:</label>
            <input type="number" id="quickness" name="quickness" min="1" max="5"
                value="<?php echo esc_attr($quickness); ?>" /><br />
        </div>
        <div class="reting-comments_item">
            <label for="price">Ціна:</label>
            <input type="number" id="price" name="price" min="1" max="5" value="<?php echo esc_attr($price); ?>" /><br />
        </div>
    </div>
    <?php
}

// Save rating data when comment is updated
function save_comment_rating($comment_id)
{
    if (isset($_POST['quality'])) {
        update_comment_meta($comment_id, 'quality', sanitize_text_field($_POST['quality']));
    }
    if (isset($_POST['quickness'])) {
        update_comment_meta($comment_id, 'quickness', sanitize_text_field($_POST['quickness']));
    }
    if (isset($_POST['price'])) {
        update_comment_meta($comment_id, 'price', sanitize_text_field($_POST['price']));
    }
}

//  Hook functions to appropriate WordPress actions
add_action('get_header', 'enable_threaded_comments');
add_action('wp_enqueue_scripts', 'testDev_styles');
add_action('wp_head', 'fonts_testDev');
add_action('add_meta_boxes_comment', 'add_rating_metabox');
add_action('edit_comment', 'save_comment_rating');
add_action('comment_post', 'save_custom_comment_meta_data');
add_filter('comment_form_fields', 'testDev_comment_fields');
