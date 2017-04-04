 <?php
/*
Template Name: Client Gallery
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
<?php $currentuser = wp_get_current_user(); ?>
<?php $authorid = $currentuser->ID; ?>
  <?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('client_gallery'), 'author' =>  $authorid, 'posts_per_page' => 200, 'order' => 'ASC','orderby' => 'menu_order',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>	
<?php $client_gallery = get_post_meta($post->ID, '_client_gallery'); ?>

<h3><?php the_title(); ?></h3>

<?php if ($client_gallery) : ?>
<?php foreach ($client_gallery as $client_gal) : ?>
<?php $client_gal_thumb = wp_get_attachment_image_src( $client_gal, 'thumbnail' ); ?> 
<img src="<?php echo $client_gal_thumb[0]; ?>" />
<?php endforeach; ?>
<?php endif; ?>

<?php endwhile; ?>


<div class="container">



</div>

	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>