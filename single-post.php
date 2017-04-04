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

<div id="mobilePostNav" class="visible-sm visible-xs visible-md">
<div class="mobile_post_nav right">
<?php next_post_link( '%link' ); ?></div>

<div class="mobile_post_nav left">
<?php previous_post_link( '%link' ); ?></div>
</div>

</div>

<?php $author = get_the_author(); ?>
<?php $postterms = get_the_terms( $post->ID, 'post_tag'); ?> 
   	<?php  $post_thumbnail_id = get_post_thumbnail_id( $post->ID ); ?> 
	<?php $thumbnail = wp_get_attachment_image_src($post_thumbnail_id, 'full'); ?>
    <section id="content" class="articlelisting">

        <div class="block" id="block-last-sot">
            <div class="inner">
                <div class="grid one-row">
                
 
                
                    <div id="pageContent" class="col-lg-8 col-md-8 col-sm-12 col-xs-12"><div style="padding: 25px;">
                  <h1><?php the_title(); ?></h1>
                  <ul class="postmetadata clearfix">
                      <li class="tags"><?php if ($postterms) : ?><?php foreach ($postterms as $postterm) : ?><a href="#"><?php echo $postterm->name; ?></a><?php endforeach; ?><?php endif; ?></li>  
                        <li class="date"><?php the_time('F jS, Y'); ?></li>
<li class="author">By <a rel="author" class="post-author" href="#" ><?php echo $author; ?></a></li>
                    </ul>
                    
                    <img style="width: 100%;
margin-top: 25px;
height: auto;
border: 1px solid #222;
margin-bottom: 20px;" src="<?php echo $thumbnail[0]; ?>">
                    
                    

                  <?php the_content(); ?>
                  
                 <?php comments_template(); ?> 
                  
                    </div>      </div>


                    <div class="col-lg-4 col-md-4 visible-lg ">
         

<div id="wpsidebar">

	<div>

	

    
		<div class="sidebartabs">
      <div id="jobs" class="wg">
        <h3>Other Blog Posts</h3>
        <ul class="topiclist">


<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('post'), 'post_parent' => 0,  'posts_per_page' => 3, 'order' => 'ASC','orderby' => 'menu_order',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>

  <?php $postthumb = wp_get_attachment_image_src( get_post_thumbnail_id(), 'thumbnail' ); ?>

 <li>            
            <div class="thumbnail col-lg-4" style="margin-right:20px">
                <img src="<?php echo $postthumb[0]; ?>" alt="...">
            </div>
                    <h4><?php the_title(); ?></h4>
                    <a href="<?php the_permalink(); ?>" class="label label-default" >View Article</a></p>
                    <div style="clear:both"></div>
      </li>



<?php endwhile; ?>

          </ul>         

      </div><!-- /#jobs -->
    </div><!-- /.sidebartabs -->

	</div><!-- .col.ads -->

</div>
                                                                                                    
                    </div>
                </div>
            </div>
        </div>

    </section>
    

    <script>
$("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').fadeIn(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').fadeOut(250); //.fadeOut(205)
        }
    ); 
    </script>
    
    
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>