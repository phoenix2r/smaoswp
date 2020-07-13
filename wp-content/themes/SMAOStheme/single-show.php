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
      <div class="show-description">
        <?php the_content(); ?>
      </div>
      <div id="show-btns">
        <a class="btn-secondary" href="<?php echo get_field('ticket_link') ?>">Buy Tickets</a>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>