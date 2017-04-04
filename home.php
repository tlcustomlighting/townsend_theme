<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

<?php $home_page_upper_right_image = get_post_meta('429', '_home_page_upper_right_image', true); ?>
<?php $home_page_upper_right_image = wp_get_attachment_image_src($home_page_upper_right_image, 'full'); ?>  
<?php $home_page_lower_right_image = get_post_meta('429', '_home_page_lower_right_image', true); ?>
<?php $home_page_lower_right_image = wp_get_attachment_image_src($home_page_lower_right_image, 'full'); ?>  
<?php $home_page_upper_right_message = get_post_meta('429', '_home_page_upper_right_message', true); ?>
<?php $home_page_lower_right_message = get_post_meta('429', '_home_page_lower_right_message', true); ?>


<article class="v76_homepage" style="overflow:hidden;clear:both">
<section class="v76_grid_pane v76_1_height v76_1_2_width v76_hp_main v76_cycle">

<div id="grid_message">
<h2>Shades <br>&<br> Fixtures</h2>
</div>


<div class="v76_hp_cta_container">
<div class="v76_hp_cta_container_inner"><a href="<?php echo get_permalink(353); ?>">Explore</a></div>
</div>
  
<ul class="grid_slider">


<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('eblast_grid'), 'post_parent' => 0,  'posts_per_page' => 22222, 'order' => 'ASC','orderby' => 'publish_date',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>
<?php $eblast_grid_image = get_post_meta($post->ID, '_eblast_grid_image', true); ?>
<?php $eblast_grid_image = wp_get_attachment_image_src($eblast_grid_image, 'full'); ?>  
  <li><img style="width:100%;height:auto;" src="<?php echo $eblast_grid_image[0]; ?>" /></li>
<?php endwhile; ?>

</ul>		

</section>

<section class="v76_1_2_width v76_hp_content_scroll">
<div class="v76_hp_content_container v76_1_width">
<div class="v76_hp_masthead v76_1_width">

<div id="upper_right_message">
<h3><?php echo $home_page_upper_right_message; ?></h3>

</div>

<a href="<?php echo get_permalink(14); ?>">
<img class="v76_stretch v76-stretch-fade v76-smooth-scale" src="<?php echo $home_page_upper_right_image[0]; ?>" alt="" style="width: 100%; height: auto; left: 0px; top: -28px; position: relative; opacity: 1;">
</a>


  </div>
</div>


<div class="v76_image_with_text"><a href="<?php echo get_permalink(192); ?>"><img src="<?php echo $home_page_lower_right_image[0]; ?>"/></a>

<div id="lower_right_message">
<h3><?php echo $home_page_lower_right_message; ?></h3>
<a class="homemoduleanchor" href="<?php echo get_permalink(192); ?>">Explore Now</a>
</div>

</div>


</section>
		
    </article>
	
  <script>
jQuery(document).ready(function($){

var headerheight = $('#header').height();
var windowheight = $(window).height();
var windowwidth = $(window).width();
var resizenow = $(window).trigger('resize');

if (windowwidth > 768) {
}


  $('.grid_slider').bxSlider({
controls:false,
auto:true,
pager:false,
onSliderLoad:function(){$('.v76_homepage').height($('.v76_hp_main').height());
}

  });
});

  </script>
<?php get_footer(); ?>