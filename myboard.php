 <?php
/*
Template Name: My Board
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

   
       <section id="content" style="padding:0px;">
       
       
<?php the_content(); ?>

    </section>
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>