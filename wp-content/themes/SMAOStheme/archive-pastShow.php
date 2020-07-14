<?php get_header(); ?>

<div id="past-shows">
  <div class="card">
    <div class="card-header">
      <div class="card-title">OUR PAST SHOWS</div>
    </div>
    <div class="card-body">
    <?php

    $archiveShows = new WP_Query(array(
      'posts_per_page' => -1,
      'post_type' => 'pastShow',
      'meta_key' => 'end_date',
      'orderby' => 'meta_value_num',
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
  </div>
</div>

<?php get_footer(); ?>