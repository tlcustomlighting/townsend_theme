 <?php
/*
Template Name: PDF Archive
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

<?php 
// no default values. using these as examples
$taxonomies = array( 
    'pdf_archive_category'

);

$args = array(
    'orderby'       => 'name', 
    'order'         => 'ASC',
    'hide_empty'    => true, 
    'exclude'       => array(), 
    'exclude_tree'  => array(), 
    'include'       => array(4,2),
    'number'        => '', 
    'fields'        => 'all', 
    'slug'          => '', 
    'parent'         => '',
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'get'           => '', 
    'name__like'    => '',
    'pad_counts'    => false, 
    'offset'        => '', 
    'search'        => '', 
    'cache_domain'  => 'core'
); 

 $pdfarchives = get_terms ($taxonomies, $args);
?>




<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<?php $associated_taxonomy = get_post_meta($post->ID, '_associated_taxonomy', TRUE); ?>
<?php $slug = get_the_slug(); ?>
<div class="container">


<?php foreach ($pdfarchives as $pdfarchive) : ?>
<div class="row">
<h3><?php echo $pdfarchive->name; ?></h3>
<?php 
// no default values. using these as examples
$taxonomies = array( 
    'pdf_archive_category'

);

$childrenargs = array(

    'parent'         => $pdfarchive->term_id,
 
); 

 $pdfarchiveschildren = get_terms ($taxonomies, $childrenargs);
?>

<?php if ($pdfarchiveschildren) : ?>
<ul>
<?php foreach ($pdfarchiveschildren as $pdfarchiveschild) : ?>
<?php $pdffiles = get_posts(array('post_type' => 'pdf_item', 'pdf_archive_category' => $pdfarchiveschild->slug)); ?>
<li style="clear:both;">
<strong><?php echo $pdfarchiveschild->name; ?></strong>

<?php if ($pdffiles) : ?>
<ul>
<?php foreach ($pdffiles as $pdffile) : ?>
<?php $pdf_file = get_post_meta($pdffile->ID, '_pdf_file', TRUE); ?>
<?php $pdf_file =  wp_get_attachment_url( $pdf_file ); ?> 
<li class="pdf_item col-lg-2"><div class="inner"><img src="<?php bloginfo('wpurl'); ?>/wp-includes/images/crystal/document.png">
<a style="display:block;" href="<?php echo $pdf_file; ?>"><?php echo get_the_title($pdffile); ?></a></div>
</li>
<?php endforeach; ?>
</ul>
<?php endif; ?>
</li>
<?php endforeach; ?>
</ul>

<?php endif; ?>


</div>
<?php endforeach; ?>


</div>


	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>