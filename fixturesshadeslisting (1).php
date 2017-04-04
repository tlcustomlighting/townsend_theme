 <?php
/*
Template Name: Fixtures & Shades Listing
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
<?php $associated_taxonomy = get_post_meta($post->ID, '_associated_taxonomy_2', true); ?>


<div class="container" id="fixturesshades" data-page="1">
<h1 style="text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  margin-top: 40px;"><?php the_title(); ?></h1>


	<div class="grid">

<?php $fixturelistingquery = new WP_Query( array( 'post_type' => 'lighting_design', 'tax_query' => array(
    array(
      'taxonomy' => 'lighting_design_type',
      'field'    => 'ID',
      'terms'    => array($associated_taxonomy ),
    ),
  ),'posts_per_page' => 12, 'orderby' => 'menu_order', 'order' => 'DESC' ) ); ?>

<?php while ($fixturelistingquery->have_posts()) : $fixturelistingquery->the_post(); ?>
<?php $lighting_design_thumbnail = get_post_meta($post->ID, '_lighting_design_thumbnail', true); ?>
<?php $lighting_design_thumbnail = wp_get_attachment_image_src($lighting_design_thumbnail, 'full'); ?>

<div style="display:none" class="fixturelightboxwindow" id="fixture_div_<?php echo $post->ID; ?>">
  <div style="position: fixed;
left: 30px;
width: 240px;
background: rgba(20,20,20,0.7);
padding: 30px;
top: 140px;
border: 1px solid #333;
z-index: 9999999;color: #ddd;
font-size: 12px;"><h4><?php the_title(); ?></h4><?php the_content(); ?></div>
<img src="<?php echo $lighting_design_thumbnail[0]; ?>">
</div>

<?php endwhile; ?>


       <ul id="matcontainer" class="list-item materialbrowser submits ">
<?php $fixturelistingquery = new WP_Query( array( 'post_type' => 'lighting_design', 'tax_query' => array(
		array(
			'taxonomy' => 'lighting_design_type',
			'field'    => 'ID',
			'terms'    => array($associated_taxonomy ),
		),
	),'posts_per_page' => 12, 'orderby' => 'menu_order', 'order' => 'DESC' ) ); ?>

<?php while ($fixturelistingquery->have_posts()) : $fixturelistingquery->the_post(); ?>
<?php $lighting_design_thumbnail = get_post_meta($post->ID, '_lighting_design_thumbnail', true); ?>
<?php $lighting_design_thumbnail = wp_get_attachment_image_src($lighting_design_thumbnail, 'thumbnail'); ?>

<?php $lighting_design_pdf = get_post_meta($post->ID, '_lighting_design_pdf', true); ?>
<?php $lighting_design_pdf_url = wp_get_attachment_url($lighting_design_pdf); ?>


 
   <li class="col-lg-3 col-md-4 col-sm-6 col-xs-12 item">
<?php if ($lighting_design_pdf) : ?><span class="new"><a href="<?php echo $lighting_design_pdf_url; ?>" target="_blank" >Download pdf</a></span><?php else : ?><span class="new comingsoon"><em>pdf coming soon</em></span><?php endif; ?>


        <figure class="rollover site" style="margin:0px;">
            <a href="#fixture_div_<?php echo $post->ID; ?>" class="lightbox"><div style="overflow:hidden;">
                <img src="<?php echo $lighting_design_thumbnail[0];?>" alt="<?php the_title_attribute(); ?> Material" /></div>
                            </a>
          <div class="info">
            <h3><a href="#"><?php the_title(); ?></a></h3><em><?php echo $material_number; ?></em><p><?php the_content_rss('', TRUE, '', 12); ?></p></div>
  
        </figure>
       


    </li>

<?php endwhile; ?>

</ul>
</div>	
	
</div>	
	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>