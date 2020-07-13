<?php get_header(); ?>

<div id="archive-container" class="container">

<?php

$archiveShows = new WP_Query(array(
  'posts_per_page' => -1,
  'post_type' => 'pastShow',
  'meta-key' => 'end_date',
  'orderby' => 'meta_value_num',
  'order' => 'DESC'
));

while($archiveShows->have_posts()) {
  $archiveShows->the_post();

?>

<div class="archive-item">
  <a class="archive-item-title" href="<?php the_permalink(); ?>"><?php echo get_field('headline'); ?></a>

  <div class="archive-item-body">
    <?php echo get_field('start_date') ?> - <?php echo get_field('end_date') ?>
  </div>
</div>
  

<?php } ?>

</div>

<?php get_footer(); ?>