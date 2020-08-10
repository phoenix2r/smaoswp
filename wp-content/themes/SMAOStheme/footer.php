    <footer id="footer">

      <!-- sponsor strip -->
      <div class="grid-container">

        <!-- associated -->
        <div id="assoc-grid">
          <div class="footer-heading">ASSOCIATED WITH</div>

          <div class="partners">
          <?php 
          $associatePartners = new WP_Query(array(
            'post_type' => 'partner',
            'meta_query' => array(
              array(
                'key' => 'partner_type',
                'value' => 'associate'
              )
            )
          ));

          while ($associatePartners -> have_posts()) {
            $associatePartners -> the_post() ?>

          <div class="footer-img"><?php the_post_thumbnail(); ?></div>

          <?php } wp_reset_postdata(); ?>
          </div>
        </div>
          
          
      
        <!-- Divider -->
        <div class="divider"></div>
        
        <!-- sponsored -->
        <div id="sponsor-grid">
          <div class="footer-heading">SPONSORED BY</div>
          
          <div class="partners">
          <?php 
          $sponsorPartners = new WP_Query(array(
            'post_type' => 'partner',
            'meta_query' => array(
              array(
                'key' => 'partner_type',
                'value' => 'sponsor'
              )
            )
          ));

          while ($sponsorPartners -> have_posts()) {
            $sponsorPartners -> the_post() ?>

          <div class="footer-img"><?php the_post_thumbnail(); ?></div>

          <?php } wp_reset_postdata(); ?>
          </div>
        </div>
      
      </div>

      <!-- Bottom footer -->
      <div class="black-strip">
        <div class="footer-menu">
          <?php wp_nav_menu(array(
            'theme_location' => 'footerMenu'
          )); 
          ?> 
        </div>
        
        <div id="footer-logo">
          <div class="charity">
            <p>Copyright 2020 | South Manchester AOS</p>
            <P>Registered Charity in England & Wales |  1162025</P>
          </div>
          <img src="<?php echo get_theme_file_uri('/imgs/SMAOSlogo-white.png') ?>" alt="">
        </div>

      </div>
    </footer>
  <?php wp_footer(); ?>
  </body>
</html>