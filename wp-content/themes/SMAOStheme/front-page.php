<?php get_header(); ?>

 <!-- Hero showcase -->
 <section id="hero-showcase">

 <!-- The actual slider -->
    <div id="hero-slider" class="container">
      <div class="slide-wrap">
        <?php 
          
          $today = date('d/m/Y');
          $homepageEvents = new WP_Query(array(
            'post_type' => 'show',
            'meta_key' => 'end_date',
            'orderby' => 'meta_value_num',
            'order' => 'ASC',
            'meta_query' => array(
              array(
                'key' => 'end_date',
                'compare' => '>=',
                'value' => $today,
                'type' => 'numeric'
              ),
              array(
                'key' => 'on_sale',
                'value' => true
              )
            )
          ));

          while($homepageEvents -> have_posts()) {
            $homepageEvents -> the_post(); ?>

            <!-- Individual slides -->
            <div class="slide">
              <!-- Hero image as slider -->
              <div>
                <img class="hero-img" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="Up and coming show">
              </div>
              

              <!-- Hero showcase footer -->
              <div id="hero-footer">
                <a class="btn-secondary" href="<?php the_permalink(); ?>">Buy Tickets</a>
              </div>

            </div>

          <?php } wp_reset_postdata(); ?>
      </div>
      <div class="arrows">
        <div><i id="arrow-left" class="fas fa-arrow-left" href="#"></i></div>
        <div><i id="arrow-right" class="fas fa-arrow-right" href="#"></i></div>
      </div>
      
    </div>
  </section>


  <!-- Main-content -->
  <section id="main-content">
    <div class="grid-container">

      <!-- Social Feed -->
      <div class="card card-social-feed">
        <div class="title">SOCIAL FEED</div>
        
        <div class="card-image"><?php echo do_shortcode('[fts_facebook type=page id=1617287108492220 access_token=EAAP9hArvboQBAAWHnDFOb9bTDMvdVx3TjsGEotrRznQ2fX2Ucbg566LlAKov41gRuK4GQH7b77rZBXFPyieC7rhhPZAwgqjkuH3JR3jNAY7uzGLSEo6vZAQYR8KwMHbYA7EEqR5sOmz3E64FfyZBKcZAfYiElpn8bZCDH1SgCb4QZDZD posts=6 description=yes posts_displayed=page_only]'); ?></div>
        
        <div class="card-icons">
          <div class="icon"><a href="#"><i class="fab fa-facebook fa-4x"></i></a></div>
          <div class="icon"><a href="#"><i class="fab fa-twitter fa-4x"></i></a></div>
          <div class="icon"><a href="#"><i class="fab fa-pinterest fa-4x"></i></a></div>
        </div>
      </div>


      <?php 
      $frontPageCards = new WP_Query(array(
        'posts_per_page' => 2,
        'post_type' => 'frontPageCard'
      ));

      while ($frontPageCards -> have_posts()) {
        $frontPageCards -> the_post() ?>

      <!-- Play your part -->
      <div class="card card-front-page">
        <div class="title"><?php the_title(); ?></div>
        <!-- <div class="card-body"> -->
          <div class="card-image"><?php the_post_thumbnail('cardLandscape'); ?></div>
          <div class="card-text">
            <div class="info"><?php the_content(); ?></div>
            <a class="btn-<?php echo get_field('card_button_style') ?>" href="<?php echo get_field('card_button_link') ?>" target="_blank"><?php echo get_field('card_button_title') ?></a>
          </div>
        <!-- </div> -->
      </div>

      <?php } wp_reset_postdata(); ?>

    </div>
  </section>


<?php get_footer(); ?>