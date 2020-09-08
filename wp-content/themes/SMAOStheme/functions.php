<?php 

// theme style function
function theme_files() {
  wp_enqueue_style('font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
  wp_enqueue_style('main_css', get_stylesheet_directory_uri().'/CSS/style.css');
}

add_action('wp_enqueue_scripts', 'theme_files');


// Theme feature functions
function theme_features() {
  register_nav_menu('mainMenu', 'Main Menu');
  register_nav_menu('footerMenu', 'Footer Menu');
  register_nav_menu('shopMenu', 'Shop Menu');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('woocommerce');
  add_image_size('cardLandscape', 400, 240, true);
}

add_action('after_setup_theme', 'theme_features');

function theme_header_metadata() {
  ?>
  <!-- list meta tags here -->
  <meta content="width=device-width, initial-scale=1" name="viewport" />

  <?php
}

add_action('wp_head', 'theme_header_metadata');

// WooCommerce actions
// WooCommerce items to remove
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);

// WooCommerce Items to add

add_action('woocommerce_before_main_content', 'smaos_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'smaos_theme_wrapper_end', 10);
add_action('woocommerce_sidebar', 'smaos_shop_menu', 10);

function smaos_theme_wrapper_start() {
  echo '<section id="single-main-content">';
}

function smaos_theme_wrapper_end() {
  echo '</section>';
}

function smaos_shop_menu() {
  wp_nav_menu(array(
    'theme_location' => 'shopMenu'
  )); 
}


function js_files() {
  wp_register_script('pinterestJS', 'https://assets.pinterest.com/js/pinit.js');
  wp_enqueue_script('pinterestJS');
  wp_enqueue_script('sliderjs', get_theme_file_uri('/js/slider.js'), array(), false, true);
  wp_enqueue_script('dropdownjs', get_theme_file_uri('/js/dropdown.js'), array(), false, true);
  wp_enqueue_script('wcjs', get_theme_file_uri('/js/wc.js'), array(), false, true);
}

add_action('wp_enqueue_scripts', 'js_files');

?>