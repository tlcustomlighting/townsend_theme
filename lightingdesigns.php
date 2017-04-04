 <?php
/*
Template Name: Lighting Designs
*/

?><?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>


<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<?php $associated_taxonomy = get_post_meta($post->ID, '_associated_taxonomy', TRUE); ?>
<?php $slug = get_the_slug(); ?>
<div id="mainContent" class="container">
<div class="row">

 <?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('lighting_design'), 'tax_query' => array(
		array(
			'taxonomy' => 'lighting_design_type',
			'field' => 'slug',
			'terms' => $slug
		)
	), 'posts_per_page' => 40,  'order' => 'DESC','orderby' => 'publish_date',  'depth' => 0 ) ); ?>
	<?php $design_counter = 0; ?>
	<?php $after_every = 4; ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>  
<?php $lighting_design_thumbnail = get_post_meta($post->ID, '_lighting_design_thumbnail', TRUE); ?>
<?php $design_counter++; ?>
<?php $lighting_design_thumbnail = wp_get_attachment_image_src($lighting_design_thumbnail, 'full'); ?>
 <div class="col-lg-3 lighting_design_box">
    <div class="thumbnail">
    <div  style="height:190px;overflow:hidden">
<img src="<?php echo $lighting_design_thumbnail[0]; ?>">
</div></div>
      <div class="caption">
        <h3><?php the_title(); ?></h3>
      <?php the_excerpt(); ?>
      </div>
 
 
 
 
  </div>
  
 <?php

    // Display ads
    $design_counter = $design_counter % $after_every;
    if( 0 == $design_counter ) {
      echo '</div><div class="row">';
    } ?> 

<?php endwhile; ?>


</div>
</div>


	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>