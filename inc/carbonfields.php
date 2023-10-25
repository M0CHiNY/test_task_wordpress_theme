<?php

// Import necessary classes and functions
use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Hook the function to register theme options using Carbon Fields
add_action('carbon_fields_register_fields', 'crb_attach_theme_options');
function crb_attach_theme_options()
{
    // Create a meta box for post type 'company' and name it 'Company Data'
    Container::make('post_meta', esc_html__('Дані компанії', 'schlegelgruppe'))
        ->where('post_type', '=', 'company')
        ->add_tab(
            __('Profile'),
            array(
                Field::make('text', 'crb_email', __('Email:'))
                    ->set_attribute('type', 'email')
                    ->set_attribute('placeholder', 'Введіть Emeil')
                    ->set_width(33),
                Field::make('text', 'crb_tel', __('Телефон'))
                    ->set_attribute('type', 'number')
                    ->set_attribute('placeholder', '380XXXXXXXXX')
                    ->set_width(33),
                Field::make('text', 'crb_website', __('Адрес сайту'))
                    ->set_attribute('pattern', '^https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
                    ->set_attribute('placeholder', 'https://mywebsite.com')
                    ->set_width(33),
                Field::make('image', 'crb_image', __('Логотип компанії'))

            )
        );

}


