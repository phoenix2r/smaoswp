<!DOCTYPE html>
<html lang="en">
<head>
  <?php wp_head(); ?>
</head>

  <!-- Navbar -->
  <header id="main-header">

  <!-- Top part of heacder including logo and tagline -->
  <div class="grid-container">
      <!-- Logo -->
    <div id="header-logo"><img src="<?php echo get_theme_file_uri('/imgs/SMAOSlogo-black.png') ?>" alt="The SMAOS logo with a bee"></div>
    
    <!-- seperator -->
    <div></div>

    <!-- Tagline and buttons -->
    <div id="tagline">
      <div id="tagline-btns">
        <a class="btn-main" href="/sign-up">SUBSCRIBE</a>
        <a class="btn-main" href="https://donate.giveasyoulive.com/donate?cid=39261">DONATE</a>
      </div>
      <p class="tagline-text">THEATRE. MADE IN MANCHESTER</p>
      <p class="tagline-text est">EST: 1955</p>
    </div>
  </div>

  <!-- Navbar -->
  <div id="navbar">
    <?php
    
    wp_nav_menu(array(
      'theme_location' => 'mainMenu'
    )); ?>
  </div>

  </header>  


