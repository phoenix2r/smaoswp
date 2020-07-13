<?php get_header(); 

while(have_posts()) {
  the_post();
}
?>

<div class="container">

  <div class="page-title"><?php the_title(); ?></div>

  <div class="page-body">
    <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus quibusdam, dolor, ea architecto placeat veritatis fuga quos amet rem unde distinctio veniam ducimus, quisquam praesentium temporibus labore possimus magni ipsum adipisci sint maxime debitis. Necessitatibus doloribus officia tenetur, eos molestiae nulla accusamus unde sequi nisi quidem delectus, cupiditate consequatur!</p> -->
    <?php the_content(); ?>
  </div>

</div>

<?php get_footer(); ?>