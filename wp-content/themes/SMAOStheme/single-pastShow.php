<?php get_header(); 

while(have_posts()) {
  the_post();
}

?>

<div class="theatre-show">
  <!-- featured image -->
  <div class="card">
    <div> <?php the_post_thumbnail(); ?> </div>
    
    <div class="show-header">
      <div class="headline">
        <?php echo strtoupper(get_field('headline')); ?>
      </div>
      <div class="tagline">
        <?php echo get_field('tagline'); ?>
      </div>
    </div>
    <div class="show-body">
      <div class="show-review">
        <?php the_content(); ?>
      </div>
      <div id="pinterest-gallery">
        <p>View our Pinterest Gallery</p>
        <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="<?php echo get_field('pinterest_tag') ?>"></a>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>