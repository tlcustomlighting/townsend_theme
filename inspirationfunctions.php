<?php /*-----------------------------------------------------------------------------------*/
/* Includes */
/*-----------------------------------------------------------------------------------*/

require_once( get_template_directory() . '/function-includes/theme-functions.php' );
require_once( get_template_directory() . '/function-includes/enqueues.php' );
require_once( get_template_directory() . '/function-includes/widgets.php' );
require_once( get_template_directory() . '/function-includes/custom-post-types.php' );
require_once( get_template_directory() . '/function-includes/portfolio-metaboxes.php' );
require_once( get_template_directory() . '/function-includes/theme-shortcodes/column-shortcodes.php' );
require_once( get_template_directory() . '/function-includes/theme-shortcodes/contact-form-shortcode/contact-form-shortcode.php' );
require_once( get_template_directory() . '/function-includes/theme-shortcodes/contact-info-shortcode.php' );
require_once( get_template_directory() . '/function-includes/theme-shortcodes/google-maps-shortcode.php' );


/*-----------------------------------------------------------------------------------*/
/*	Theme Support
/*-----------------------------------------------------------------------------------*/

add_theme_support( 'menus' ); // add custom menus support
add_theme_support('automatic-feed-links');
add_theme_support( 'post-thumbnails', array( 'post', 'my_portfolio', 'my_slider' ) );
set_post_thumbnail_size(9999, 9999); // Default post thumbnail size
add_image_size( 'single-post-thumbnail', 400, 9999 ); // Permalink thumbnail size
add_image_size( 'portfolio-thumbnail', 210, 9999 ); // Permalink thumbnail size
add_image_size( 'slider-image', 9999, 9999 ); // Slider thumbnail size
add_image_size( 'full-size', 9999, 9999 ); // Full size image ?>