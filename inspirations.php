 <?php
/*
Template Name: Inspirations
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
               
               <div class="block" id="block-sot">

                             		
       <div class="inner full-width">
       
       <div class="container">
       <ul id="matcontainer" class="list-item materialbrowser submits grid">
<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('inspiration'), 'post_parent' => 0,  'posts_per_page' => 22222, 'order' => 'DESC','orderby' => 'publish_date',  'depth' => 0 ) ); ?>
<?php $attributeholder = array(); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>

<?php $material_number = get_post_meta($post->ID, '_material_number', true); ?>
<?php $attributeholder[] = get_post_meta($post->ID, '_material_material', true); ?>
<?php $attributeholder[] = get_post_meta($post->ID, '_material_color', true); ?>
<?php $attributeholder[] = get_post_meta($post->ID, '_material_texture', true); ?>
<?php $inspiration_post_name = $post->post_name; ?>
<?php $inspiration_post_name = str_replace('-', ' ', $inspiration_post_name); ?>
<?php $attributeholder[] = $material_post_name; ?>

<?php $inspiration_image = get_post_meta($post->ID, '_inspiration_image', true); ?>
<?php $inspiration_image = wp_get_attachment_image_src($inspiration_image, 'full'); ?>  
<?php $attributeholder = array_unique($attributeholder); ?>
<?php $inspiration_categories = get_the_terms($post->ID, 'inspiration_category'); ?>
<?php $inspiration_tags = get_the_terms($post->ID, 'inspiration_tag'); ?>



 
   <li class="<?php echo $inspiration_post_name; ?> <?php if ($inspiration_categories) : ?><?php foreach ($inspiration_categories as $inspiration_category) : ?><?php echo str_replace('-', ' ', $inspiration_category->slug); ?> <?php echo $inspiration_category->slug; ?> <?php endforeach; ?><?php endif; ?>  col n-2-5 item" style="margin-bottom:0px;">
   <?php if ($material_new_check) : ?>
   <span class="new">NEW</span>
   <?php endif; ?>
        <figure class="rollover site" style="margin:0px">
             <a class="fancybox" title="<?php the_title_attribute(); ?> | <?php echo $post->post_content; ?>" href="<?php echo $inspiration_image[0]; ?>"><div style="height:210px;overflow:hidden;">
                <img src="<?php echo $inspiration_image[0]; ?>" alt="<?php the_title_attribute(); ?>" /></div>
                            </a>
      <div class="info">
            <h3 class="bold" style="font-size:30px;text-transform:none;"><a class="fancybox" title="<?php the_title_attribute(); ?> | <?php echo $post->post_content; ?>" href="<?php echo $inspiration_image[0]; ?>"><?php the_title(); ?></a></h3><em><?php echo $material_number; ?></em><p><?php the_excerpt(); ?></p></div>
  
        </figure>
       

    </li>
    
    <?php $attributeholder = array(); ?>
    
    <?php endwhile; ?>      
                    </ul>
                    
                    
</div></div></div>
    </section>
	<?php endwhile; ?>
	<?php endif; ?>
	
	<script>
	$(document).ready(function() {


      var $container = $('#matcontainer');



$('.filters li.filteritem').on( 'click', function() {
  var filterValue = $(this).attr('data-filter');
$('.item').hide();
$('.item.' + filterValue).show();

});


$('.colorfilters li').on( 'click', function() {
    $('.basic').fancySelect();


$('.colorfilters li').removeClass('active');
$(this).addClass('active');
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: '.' + filterValue });
});


var typingTimer;                //timer identifier
var doneTypingInterval = 2000;  //time in ms, 5 second for example

//on keyup, start the countdown
$('.filters .text').keyup(function(event){
var searchtext = $('.filters').find('.text').val().toLowerCase();

var c= String.fromCharCode(event.keyCode);
        var isWordCharacter = c.match(/\w/);
        var isBackspaceOrDelete = (event.keyCode == 8 || event.keyCode == 46);

        // trigger only on word characters, backspace or delete and an entry size of at least 3 characters
        if(isWordCharacter || isBackspaceOrDelete)
        {
$('.colorfilters li').removeClass('active');

 $('#slideoverlay').delay('300').fadeIn();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
    
    }
    
});

//on keydown, clear the countdown 
$('.filters .text').keydown(function(){
    clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
var searchtext = $('.filters').find('.text').val().toLowerCase();
 $('#slideoverlay').fadeOut();

if(searchtext == '') {
$container.isotope({ filter: '.item' });

} else {
$container.isotope({ filter: '.' + searchtext });
}
}

	});
	</script>
	

<?php get_footer(); ?>