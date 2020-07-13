<?php 

function upcoming_shows_filter($items, $menu, $args) {
  $child_items = array();
  $menu_order = count($items);
  $parent_item_id = 0;

  foreach ($items as $item) {
    if(in_array('upcoming-shows-parent', $item->classes)) {
      $parent_item_id = $item->ID;
    }
  }

  if($parent_item_id > 0) {

    foreach (get_posts('post_type=show&numberposts=-1') as $post) {
      $post->menu_item_parent = $parent_item_id;
      $post->post_type = 'nav_menu_item';
      $post->object = 'custom';
      $post->type = 'custom';
      $post->menu_order = ++$menu_order;
      $post->title = $post->post_title;
      $post->url = get_permalink( $post->ID );
      if (array_search(!$post->title, $child_items)) {
          array_push($child_items, $post);
      }
    }

  }

  return array_merge($items, $child_items);

}

add_filter('wp_get_nav_menu_items', 'upcoming_shows_filter', 10, 3);

?>