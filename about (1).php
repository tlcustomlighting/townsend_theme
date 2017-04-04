 <?php
/*
Template Name: About
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


<?php $page_banner = get_post_meta($post->ID, '_page_banner', true); ?>
<?php $page_banner = wp_get_attachment_image_src($page_banner, 'full'); ?>
       <?php $about_page_content = $post->post_content; ?>
       <?php $about_page_mission_statement = get_post_meta($post->ID, '_about_page_mission_statement', true); ?>
       <?php $about_page_column_1 = get_post_meta($post->ID, '_about_page_column_1', true); ?>
       <?php $about_page_column_2 = get_post_meta($post->ID, '_about_page_column_2', true); ?>
       <?php $about_page_column_3 = get_post_meta($post->ID, '_about_page_column_3', true); ?>
       <?php $about_page_conclusion_sentence = get_post_meta($post->ID, '_about_page_conclusion_sentence', true); ?>



 <section class="page style2 transparent" id="page-01" style="background:url(<?php echo $page_banner[0]; ?>) no-repeat top center">
        <div class="container">
            <div class="col-lg-10">
                <h2 class="bold" style="  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  margin-top: 20px;
  width: 80%;"><?php echo nl2br($about_page_mission_statement); ?></h2>
            </div>
        </div>
    </section>

    <section class="page" id="page-02">
        <div class="container">
            <div class="col-lg-12">
                <div class="row">
                <h2 class="heading-title col-lg-3">Illumination made possible by imagination</h2>
            </div>
            <div class="row">
                <h3 class="col-lg-12"><?php echo nl2br($about_page_content); ?></h3>
            </div>
            </div>
  
                        <div class="content visible-lg visible-md">
                <div class="">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p><?php echo nl2br($about_page_column_1); ?></p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p><?php echo nl2br($about_page_column_2); ?></p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p><?php echo nl2br($about_page_column_3); ?></p>
                    </div>
                </div>
            </div>
                    <div id="page-03" class="col-lg-12 visible-lg visible-md"><p><?php echo $about_page_conclusion_sentence; ?></p></div>

        </div>
    </section>

  </section>

	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>