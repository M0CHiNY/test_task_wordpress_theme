<?php
// Function to register a custom post type called 'company'
function testDev_post_type()
{
    // Labels for the 'company' post type
    $labels = array(
        'name' => _x('Компанії', 'plural'),
        'singular_name' => _x('Компанія', 'singular'),
        'menu_name' => _x('Компанії', 'admin menu'),
        'name_admin_bar' => _x('Компанія', 'admin bar'),
        'add_new' => _x('Додати нову компанію', 'add new'),
        'add_new_item' => __('Додати нову компанію'),
        'new_item' => __('Нова компанія'),
        'edit_item' => __('Редагувати компанію'),
        'view_item' => __('Переглянути компанію'),
        'all_items' => __('Усі компанії'),
        'search_items' => __('Пошук компаній'),
        'not_found' => __('Компаній не знайдено.'),
    );

    // Register the 'company' post type with specified options
    register_post_type(
        'company',
        array(
            'labels' => $labels,
            'public' => true,
            'supports' => array('title','editor', 'thumbnail', 'comments'),
            'menu_position' => 5,
            'menu_icon' => 'dashicons-bank',
            'hierarchical' => true,
        )
    );
}

add_action('init', 'testDev_post_type');