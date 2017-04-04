 <?php
/*
Template Name: Sandbox
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
       
               <div id="slideoverlay" class="loading" style="background-color: white; position: fixed; z-index: 999; top: 0; width: 100%; height: 100%;display:none;opacity:0.7"></div>
<?php $namearray = array(); ?>
<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('material'), 'post_parent' => 0,  'posts_per_page' => 22222, 'order' => 'ASC','orderby' => 'title',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>
<?php $posttitle = $post->post_name; ?>
<?php $posttitle = explode("-", $posttitle); ?>

<?php foreach ($posttitle as $title) : ?>
<?php $namearray[] = $title; ?>
<?php endforeach; ?>


<?php endwhile; ?>

<?php $namearray = array_unique($namearray); ?>

<?php foreach ($namearray as $name) : ?>
<?php echo $name; ?>, 
<?php endforeach; ?>
       


    </section>
	
	<?php endwhile; ?>
	<?php endif; ?>

	

<?php get_footer(); ?>