<?php 

function theme_files() {
  wp_enqueue_style('font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
  wp_enqueue_style('main_css', get_stylesheet_directory_uri().'/CSS/style.css');
}

add_action('wp_enqueue_scripts', 'theme_files');

function theme_features() {
  register_nav_menu('mainMenu', 'Main Menu');
  register_nav_menu('footerMenu', 'Footer Menu');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('woocommerce');
  add_image_size('cardLandscape', 400, 240, true);
}

add_action('after_setup_theme', 'theme_features');

// WooCommerce actions
// WooCommerce items to remove
remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);

// archive

// product
remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);

remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);

// WooCommerce Items to reorder


// WooCommerce Items to add



function js_files() {
  wp_register_script('pinterestJS', 'https://assets.pinterest.com/js/pinit.js');
  wp_enqueue_script('pinterestJS');
  wp_enqueue_script('sliderjs', get_theme_file_uri('/js/slider.js'), array(), false, true);
  wp_enqueue_script('dropdownjs', get_theme_file_uri('/js/dropdown.js'), array(), false, true);
  wp_enqueue_script('wcjs', get_theme_file_uri('/js/wc.js'), array(), false, true);
}

add_action('wp_enqueue_scripts', 'js_files');

?>