<?php 

function smaos_post_types() {

  // Show Post Type - NB will appear in dashboard as What's On
  register_post_type('show', array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'rewrite' => array('slug' => 'shows'),
    'has_archive' => true,
    'public' => true,
    'labels' => array(
      'name' => "What's On",
      'add_new_item' => 'Add New Show',
      'edit_item' => 'Edit Show',
      'all_items' => 'All Shows',
      'singular_name' => 'Show'
    ),
    'menu_icon' => 'dashicons-store'
  ));

  // Past Show Post Type
  register_post_type('pastshow', array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'rewrite' => array('slug' => 'about/past-shows'),
    'has_archive' => true,
    'public' => true,
    'labels' => array(
      'name' => 'Past Shows',
      'add_new_item' => 'Add New Past Show',
      'edit_item' => 'Edit Past Show',
      'all_items' => 'All Past Shows',
      'singular_name' => 'pastShow'
    ),
    'menu_icon' => 'dashicons-store'
  ));

  // About Us Post Type
  register_post_type('about', array(
    'supports' => array('title', 'editor'),
    'rewrite' => array('slug' => 'about'),
    'has_archive' => true,
    'public' => true,
    'labels' => array(
      'name' => 'About Us',
      'add_new_item' => 'Add About Us Info',
      'edit_item' => 'Edit About Us Info',
      'all_items' => 'All About Us Info',
      'singular_name' => 'About Us Info'
    ),
    'menu_icon' => 'dashicons-universal-access-alt'
  ));

  //Front Page Card Post Type
  register_post_type('frontPageCard', array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'rewrite' => array('slug' => 'frontPageCards'),
    'public' => true,
    'labels' => array(
      'name' => 'Front Page Card',
      'add_new_item' => 'Add New Front Page Card',
      'edit_item' => 'Edit Front Page Card',
      'all_items' => 'All Front Page Cards',
      'singular_name' => 'FrontPageCard'
    ),
    'menu_icon' => 'dashicons-welcome-write-blog'
  ));

  //Partners Post Type
  register_post_type('partner', array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'rewrite' => array('slug' => 'partners'),
    'public' => true,
    'labels' => array(
      'name' => 'Partner',
      'add_new_item' => 'Add New Partner',
      'edit_item' => 'Edit Partner',
      'all_items' => 'All Partners',
      'singular_name' => 'Partner'
    ),
    'menu_icon' => 'dashicons-buddicons-buddypress-logo'
  ));

  //Members Type
  register_post_type('member', array(
    'supports' => array('title', 'editor', 'thumbnail'),
    'rewrite' => array('slug' => 'members'),
    'public' => true,
    'labels' => array(
      'name' => 'Members',
      'add_new_item' => 'Add New Info for Members',
      'edit_item' => 'Edit Info for Members',
      'all_items' => 'All Info for Members',
      'singular_name' => 'Member Info'
    ),
    'menu_icon' => 'dashicons-vault'
  ));

}

add_action('init', 'smaos_post_types');

?>