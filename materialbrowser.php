 <?php
/*
Template Name: Material Browser
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

   
       <section id="content" style="">
       
               <div id="slideoverlay" class="loading" style="background-color: white; position: fixed; z-index: 999; top: 0; width: 100%; height: 100%;display:none;opacity:0.7"></div>

                             			<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('material'), 'post_parent' => 0,  'posts_per_page' => 22222, 'order' => 'ASC','orderby' => 'title',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>

<?php $material_number = get_post_meta($post->ID, '_material_number', true); ?>

<?php $material_swatch = get_post_meta($post->ID, '_material_swatch', true); ?>
<?php $material_swatch = wp_get_attachment_image_src($material_swatch, 'full'); ?>

 <?php $material_category = get_the_terms( $post->ID, 'material_category' ); ?> 
  <?php $material_tags = get_the_terms( $post->ID, 'material_tag' ); ?> 

  <div id="mat_container_<?php echo $post->ID; ?>" class="mat_div">
  <div class="mat_container_img_holder">
   <img style="width:400px;height:auto" src="<?php echo $material_swatch[0]; ?>" alt="<?php the_title_attribute(); ?> Material" />
   </div>
   
   

     <div class="mat_container_info_holder">
<h2><?php the_title(); ?></h2>
<span class="refnumbr"><?php echo $material_number; ?></span>
<?php the_content(); ?>
</div>
   
  </div>
<?php endwhile; ?>
       
       <ul id="matcontainer" class="grid list-item materialbrowser submits col-5">
       
       







                      			<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('material'), 'post_parent' => 0,  'posts_per_page' => 22222, 'order' => 'ASC','orderby' => 'title',  'depth' => 0 ) ); ?>
<?php $attributeholder = array(); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>




<?php $material_number = get_post_meta($post->ID, '_material_number', true); ?>
<?php $attributeholder[] = get_post_meta($post->ID, '_material_material', true); ?>
<?php $attributeholder[] = get_post_meta($post->ID, '_material_color', true); ?>
<?php $attributeholder[] = get_post_meta($post->ID, '_material_texture', true); ?>
<?php $material_post_name = $post->post_name; ?>
<?php $material_post_name = str_replace('-', ' ', $material_post_name); ?>
<?php $attributeholder[] = $material_post_name; ?>

<?php $attributeholder = array_unique($attributeholder); ?>


       <?php $material_new_check = get_post_meta($post->ID, '_material_new_check', true); ?>

       <?php $material_swatch = get_post_meta($post->ID, '_material_swatch', true); ?>
<?php $material_swatch = wp_get_attachment_image_src($material_swatch, 'full'); ?>

 <?php $material_category = get_the_terms( $post->ID, 'material_category' ); ?> 
  <?php $material_tags = get_the_terms( $post->ID, 'material_tag' ); ?> 

  <?php $material_materials = get_the_terms( $post->ID, 'material_material' ); ?> 
  <?php $material_colors = get_the_terms( $post->ID, 'material_color' ); ?> 
  <?php $material_textures = get_the_terms( $post->ID, 'material_texture' ); ?> 



 
   <li class="col n-2-5 item <?php echo $material_post_name; ?> <?php if ($material_materials) : ?><?php foreach ($material_materials as $material_material) : ?><?php echo $material_material->slug; ?>-material<?php endforeach; ?><?php endif; ?> <?php if ($material_textures) : ?><?php foreach ($material_textures as $material_texture) : ?><?php echo $material_texture->slug; ?>-texture<?php endforeach; ?><?php endif; ?> <?php if ($material_colors) : ?><?php foreach ($material_colors as $material_color) : ?><?php echo $material_color->slug; ?>-color<?php endforeach; ?><?php endif; ?>" style="padding: 0 0 0px 12px;">
   <?php if ($material_new_check) : ?>
   <span class="new">NEW</span>
   <?php endif; ?>
        <figure class="rollover site" style="margin:0px">
             <a href="#mat_container_<?php echo $post->ID; ?>" class="lightbox"><div style="height:110px;overflow:hidden;">
                <img width="459" height="287" src="<?php echo $material_swatch[0]; ?>" alt="<?php the_title_attribute(); ?> Material" /></div>
                            </a>
            <a href="#mat_container_<?php echo $post->ID; ?>" class="bt-url lightbox" > </a> <div class="info">
            <h3 class="bold"><a href="#"><?php the_title(); ?></a></h3><em><?php echo $material_number; ?></em></div>
  
        </figure>
       


    </li>
    
    <?php $attributeholder = array(); ?>
    
    <?php endwhile; ?>      
                    </ul>
                    
                    

    </section>
	<?php endwhile; ?>
	<?php endif; ?>
	
	<script>
	$(document).ready(function() {
	var $container = $('#matcontainer');
// init
$container.isotope({
  // options
  itemSelector: '.item',
   masonry: {
    columnWidth: '.grid-sizer'
  },
  layoutMode: 'fitRows'
});

$('.filters li.filteritem').on( 'click', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: '.' + filterValue });
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