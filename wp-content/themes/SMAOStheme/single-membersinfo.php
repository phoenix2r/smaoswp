<?php get_header(); 

while(have_posts()) {
  the_post(); 
?>

<section id="single-main-content">
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
      <!-- <div class="btn-secondary">
        <?php 
        $file = get_field('download');
        if($file) { ?>
        <a href="<?php echo $file['url'] ?>"><?php echo $file['filename'] ?></a>
        <?php }
        ?>
      </div> -->
    </div>
  </div>
</section>

<?php } 

get_footer(); ?>