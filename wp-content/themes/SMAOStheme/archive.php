<?php get_header(); 

while(have_posts()) {
  the_post();

?>

<div class="container">

  <div class="page-title"><?php the_title(); ?></div>

  <div class="page-body">
    <?php the_content(); ?>
  </div>

</div>

<?php } ?>

<?php get_footer(); ?>