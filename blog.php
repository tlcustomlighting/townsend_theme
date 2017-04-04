 <?php
/*
Template Name: Blog
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


<div id="news" data-page="1" class="container">
<ul class=" post row">
                                                                               
                             
	
		<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('post'), 'post_parent' => 0,  'posts_per_page' => 22, 'order' => 'DESC','orderby' => 'publish_date',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>

	<?php  $post_thumbnail_id = get_post_thumbnail_id( $post->ID ); ?> 
	<?php $thumbnail = wp_get_attachment_image_src($post_thumbnail_id, 'full'); ?>
 <li class="col-lg-4 col-md-6 col-sm-12 col-xs-12 news-post">
                                                                                
                    <div class="info">
            <h3 class=""><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <div class="dateinfo">
               <?php the_time('l, F jS, Y'); ?>
            </div>
          
        </div>                                                             
                                                                                
        <figure class="rollover site" style="height:295px;overflow:hidden;">
            <a href="<?php the_permalink(); ?>"><img src="<?php echo $thumbnail[0]; ?>" alt="<?php the_title_attribute(); ?>"></a>
        </figure>
       
    </li>

		<?php endwhile; ?>
		</ul>
	
</div>	

</section>
	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>