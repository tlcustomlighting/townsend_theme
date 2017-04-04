<?php
/*
Template Name: Client List
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
<?php $page_banner = get_post_meta($post->ID, '_page_banner', true); ?>
<?php $page_banner = wp_get_attachment_image_src($page_banner, 'full'); ?>
       <?php $about_page_content = $post->post_content; ?>
       <?php $about_page_mission_statement = get_post_meta($post->ID, '_about_page_mission_statement', true); ?>
       <?php $page_description = get_post_meta($post->ID, '_page_description', true); ?>
       <?php $about_page_column_1 = get_post_meta($post->ID, '_about_page_column_1', true); ?>
       <?php $about_page_column_2 = get_post_meta($post->ID, '_about_page_column_2', true); ?>
       <?php $about_page_column_3 = get_post_meta($post->ID, '_about_page_column_3', true); ?>
       <?php $about_page_conclusion_sentence = get_post_meta($post->ID, '_about_page_conclusion_sentence', true); ?>

<?php $postcontent = $post->post_content;
$postcontent = explode("\n", $postcontent);
$postcontent_count = count($postcontent);
$postcontent_count_3 = $postcontent_count / 3;
$postcontent_count_3 = explode(".", $postcontent_count_3);
$after_every = $postcontent_count_3[0];

?>

       <section id="content" style="padding:0px;">

 <section class="page style2 transparent" id="page-01" style="background:url(<?php echo $page_banner[0]; ?>) no-repeat top center">
        <div class="container">
            <div class="box-titles">
                <h2 class="bold" style="  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  margin-top: 20px;
  width: 80%;"><?php echo $page_description; ?></h2>
            </div>
        </div>
    </section>


 <div class="container">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               
              
<ul class="clientlist">
    <?php $itemcounter = 0; ?>
<?php foreach ($postcontent as $postcontent_item) : ?>
    <?php $itemcounter ++; ?>
<li><?php echo $postcontent_item; ?></li>


<?php

    // Display ads
    $itemcounter = $itemcounter % $after_every;
    if( 0 == $itemcounter )  : ?>
 </ul></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><ul class="clientlist">

    <?php endif; ?>


<?php endforeach; ?>
</ul>

</div>
</section>

	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>