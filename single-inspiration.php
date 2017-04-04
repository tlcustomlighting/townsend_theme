<?php
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
<?php $inspiration_image = get_post_meta($post->ID, '_inspiration_image', true); ?>
<?php $inspiration_image = wp_get_attachment_image_src($inspiration_image, 'full'); ?>  
<?php $author = get_the_author(); ?>
<?php $inspiration_tags = get_the_terms($post->ID, 'inspiration_tag'); ?>
<?php $postterms = get_the_terms( $post->ID, 'post_tag'); ?> 
   	<?php  $post_thumbnail_id = get_post_thumbnail_id( $post->ID ); ?> 
	<?php $thumbnail = wp_get_attachment_image_src($post_thumbnail_id, 'full'); ?>
    <section id="content" class="articlelisting">

        <div class="block" id="block-last-sot">
            <div class="inner">
                <div class="grid one-row">
                
        
                
                    <div id="pageContent" class="col-lg-8 col-md-8 col-sm-12 col-xs-12"><div class="inner_bg" style="padding: 1px;">
                    
                                        <img style="width:100%;height:auto;" src="<?php echo $inspiration_image[0]; ?>" />

                    

                  
                  
                    </div>      </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" id="inspiration_sidebar"><div class="inner_bg" style="padding: 25px;">
         <h3><?php the_title(); ?></h3>

                  <?php the_content(); ?>


<?php if ($inspiration_tags) : ?>
<div class="list-tags">
<ul>
<?php foreach ($inspiration_tags as $inspiration_tag) : ?>

            
            
                        


                                    <li class="filteritem"><strong><a href="#filter" data-count="<?php echo $inspiration_tag->count; ?>"><?php echo $inspiration_tag->name; ?></a></strong></li>
                               



<?php endforeach; ?>
                                             <div style="clear:both;"></div>

</ul>
</div>
<?php endif; ?>


</div></div>
                                                                                                    
                    </div>
                </div>
            </div>
        </div>

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