<?php get_header(); 

while(have_posts()) {
  the_post();
}
?>

<div class="card">
    
    <div class="card-header">
      <div class="card-title">
        <?php the_title(); ?>
      </div>
      <div class="card-tagline">
        <?php echo get_field('tagline'); ?>
      </div>
    </div>
    <div class="card-body">
      <div class="card-description"><?php the_content(); ?></div>
      
      <?php 
      $file = get_field('download');
      if($file) { ?>
      <div id="single-download">
        <a class="btn-secondary" href="<?php echo $file['url'] ?>"><?php echo $file['filename'] ?></a>
      </div>
      <?php }

      $btnLink = get_field('card_button_link');
      if($btnLink) { ?>
      <div id="single-btn">
        <a class="btn-<?php echo get_field('card_button_style') ?>" href="<?php echo get_field('card_button_link') ?>"><?php echo get_field('card_button_title') ?></a>
      </div>
      <?php } ?>
      
    </div>
  </div>

<?php get_footer(); ?>