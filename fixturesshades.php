 <?php
/*
Template Name: Fixtures & Shades
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


<div id="fixturesshades" data-page="1">

<?php $fixturequery = new WP_Query( array( 'post_type' => 'page', 'post_parent' => '353', 'posts_per_page' => 12, 
  'orderby' => 'menu_order', 'order' => 'ASC' ) ); ?>

<?php while ($fixturequery->have_posts()) : $fixturequery->the_post(); ?>
	
<?php $page_description_short = get_post_meta($post->ID, '_page_description_short', true); ?>
<?php $fixture_cat_image = get_post_meta($post->ID, '_page_thumbnail', true); ?>
<?php $fixture_cat_image = wp_get_attachment_image_src($fixture_cat_image, 'full'); ?>
<article class="box grid">
			<a href="<?php the_permalink(); ?>" style="background-image:url(<?php echo $fixture_cat_image[0]; ?>);" title="<?php the_title_attribute(); ?>">
				<div class="content">
					<h2><strong><?php the_title(); ?></strong></h2>
					<p><?php echo $page_description_short; ?></p>

				</div>
								<div class="fade" style="background-color:#9b1f24;">					
		
				</div>
				<span></span>
							</a>
		</article>

<?php endwhile; ?>



	
</div>	

</section>
	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>