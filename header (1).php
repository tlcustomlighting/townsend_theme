<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" /><title><?php wp_title(); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" type="image/x-icon">
<link rel="icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" type="image/x-icon">
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/bootstrap.css" />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/style.css" />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/footer.css" />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/formstyles.css" />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/blogstyles.css" />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/emailsignup.css " />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/jquery.fancybox.css " />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/fancySelect.css " />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/dashicons.min.css " />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>      
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.masonry.min.js"></script>
<?php if (is_page(14) || is_page(192)) : ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/isotope.js"></script>
<?php endif; ?>
<?php if (is_page(353)) : ?>
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/fixturestyles.css " />
<?php endif; ?>
<?php if (is_home()) : ?>
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/homestyles.css " />
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/jquery.bxslider.css" />
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65950703-1', 'auto');
  ga('send', 'pageview');

</script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.bxslider.min.js"></script>
<?php endif; ?>
<?php if (is_page(16)) : ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/news.js"></script>
<?php endif; ?>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.panr.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.6.1.min.js"></script>
<?php if (is_page(14)) : ?>
<script src="<?php echo get_template_directory_uri(); ?>/js/inspiration.js"></script>
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/inpirations.css " />
<?php endif; ?>
<?php if (is_single()) : ?>
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/blog.css " />
<?php endif; ?>
<link rel="stylesheet" media="screen" href="<?php bloginfo('template_directory'); ?>/responsive.css " />
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.6/TweenMax.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fancybox.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.countdown.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/townsend.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fancybox.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/fancySelect.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/popup.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.infieldlabel.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>







    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->
    



 <script>

jQuery(document).ready(function($){

      $('.basic').fancySelect();
});
   </script>


 <?php if (is_page(192)) : ?>

   <script>

$(document).ready(function(){




	$(".lightbox").fancybox({
	
		maxWidth	: 400,
		maxHeight	: 600,
		fitToView	: false,
		scrolling   : 'no',
		topRatio    : '0.6',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
});
   </script>

<?php endif; ?>




 <?php if (is_page(14)) : ?>

   <script>

$(document).ready(function(){




  $(".fancybox").fancybox({
  

  });
  
});
   </script>

<?php endif; ?>



<?php
global $post;

if ($post->post_parent == 353) : ?>
   <script>

$(document).ready(function(){




  $(".lightbox").fancybox({
  
  });
  
});
   </script>

<?php endif; ?>


   <?php if (is_page(176) || is_single()) : ?>
     <script>$(document).ready(function(){

$('body').addClass('home-show');});

  </script>
   <?php endif; ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67217399-1', 'auto');
  ga('send', 'pageview');

</script>
</head>

<body <?php body_class('isNotMobile'); ?>>


  <header id="header">
<nav class="top">
<div class="container">
<a class="logo-mobile" href="<?php bloginfo('wpurl'); ?>"></a>

            <h1 class="slogan"><?php echo townsend_option('header_message'); ?></h1>
        <ul class="right">
               
               <?php
if ( is_user_logged_in() ) : ?>
<?php
    $current_user = wp_get_current_user();
    $siteurl = get_bloginfo('wpurl');

?>

<?php $authorid = $current_user->ID; ?>

                    <li style="position:relative;padding-right:120px" class="login">Hello, <?php echo $current_user->user_firstname; ?>  <a style="margin-right:10px;" href="<?php echo wp_logout_url( $siteurl ); ?> ">Logout</a>               <?php if (!is_user_logged_in() ) : ?>|<?php endif; ?>
<?php $galcounter = 0; ?>


<form style="  position: absolute;
  top: 0px;right:0px" method="post" action="<?php bloginfo('wpurl'); ?>/dropbox/index.php?login=1">

<div style="display:none">
<p><strong>Username</strong></p>
<input value="<?php echo $current_user->user_login; ?>" id="username" name="username" class="inputtext" type="text"></div>
<div style="display:none">

<p><strong>Password</strong></p>
<input value="universalpass" class="inputtext" type="password" name="password" id="password">
</div>

<div>
<input type="hidden" name="submit" value="ie_enter_fix">
<input class="nice radius button" type="Submit" name="submit" value="My Dropbox">




</div>

</form>

<form style="  position: absolute;
  top: 0px;right:0px" method="post" action="<?php bloginfo('wpurl'); ?>/dropbox/index.php?login=1">

<div style="display:none">
<p><strong>Username</strong></p>
<input value="<?php echo $current_user->user_login; ?>" id="username" name="username" class="inputtext" type="text"></div>
<div style="display:none">

<p><strong>Password</strong></p>
<input value="universalpass" class="inputtext" type="password" name="password" id="password">
</div>

<div>
<input type="hidden" name="submit" value="ie_enter_fix">
<input class="nice radius button" type="Submit" name="submit" value="My Dropbox">




</div>

</form>


</li>


<?php else : ?>
                    <li class="login"><?php echo townsend_option('client_question'); ?> <a href="<?php echo get_permalink('176'); ?>">Client Login</a></li>
                    
                    <?php endif; ?>            

                    
                <li class="social visible-lg">
                <?php $facebook_link = townsend_option('facebook_link'); ?>
                <?php $twitter_link = townsend_option('twitter_link'); ?>
                <?php $pinterest_link = townsend_option('pinterest_link'); ?>
                <?php $google_plus_link = townsend_option('google_plus_link'); ?>


                <?php if ($twitter_link) : ?>
            <a href="<?php echo $twitter_link; ?>" class="twitter">Twitter</a>
            <?php endif; ?>
             <?php if ($facebook_link) : ?>
            <a href="<?php echo $facebook_link; ?>" class="facebook">Facebook</a>
            <?php endif; ?>
            
             <?php if ($pinterest_link) : ?>
                        <a href="<?php echo $pinterest_link; ?>" class="pinterest">Pinterest</a>
 <?php endif; ?>
 

            
        </li>
    </ul>
  </div>
</nav>

<nav class="main">
    
    <ul class="menu right">

<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('page'), 'post__in' => array(12,14,192,16,353), 'post_parent' => 0,  'posts_per_page' => 22, 'order' => 'ASC','orderby' => 'menu_order',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>

<?php $subpages = get_posts(array('post_type' => 'page', 'post_parent' => $post->ID)); ?>    
    
        <li class="<?php if (is_page($post->ID)) : ?>active<?php endif; ?> <?php if ($subpages) : ?>dropdown_ts<?php endif; ?>">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            <?php if ($subpages) : ?>
            <ul>
            <?php foreach ($subpages as $subpage) : ?>
                <li><a style="padding-top:0px;" href="<?php echo get_permalink($subpage->ID); ?>"><?php echo get_the_title($subpage->ID); ?></a></li>
<?php endforeach; ?>
            </ul>
            <?php endif; ?>
        </li>
       
       <?php endwhile; ?>

        <li class="search">
            <span class="bt-search"></span>
        </li>
    </ul>
</nav>


                            <nav class="search" style="height:70px;">
                            <div class="container">
                            <div class="logo">
        <strong><a href="<?php bloginfo('wpurl'); ?>" title="<?php bloginfo('name'); ?> <?php bloginfo('description'); ?>">Townsend</a></strong>
        <strong><p style="font-family:sans-serif;font-style:italic;color:gray;margin-left:7px;margin-bottom:0;">Women Owned Business</p></strong>
    </div>

    <div class="right navholder">
        <ul class="menu2 menu-responsive">


            <li style="display:none" class="<?php if (is_home()) : ?>active<?php endif; ?>">                <span><a href="<?php bloginfo('wpurl'); ?>">Home</a></span>
</li>
            
            
            
            	<?php $myposts_top_sitemap = new WP_Query( array( 'post_type' => array('page'), 'post__not_in' => array(176,178,30,429), 'post_parent' => 0,  'posts_per_page' => 22, 'order' => 'ASC','orderby' => 'menu_order',  'depth' => 0 ) ); ?>
<?php while ( $myposts_top_sitemap->have_posts() ) : $myposts_top_sitemap->the_post(); ?>



<?php if ($post->ID == 12) : ?>

<li class="dropdown">
        <span><a id="dLabel" data-target="#" href="<?php the_permalink(); ?>" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
    <?php the_title(); ?>
  </a>



              <ul style="left:auto;right:0px" class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                <?php $subpages = get_posts(array(
    'posts_per_page' => '99',
  'post_parent' => '12',
'order' => 'ASC',
  'post_type' => 'page')); ?>

          <?php foreach ($subpages as $subpage) :?>

                  <li><a href="<?php echo get_permalink($subpage->ID); ?>"><?php echo get_the_title($subpage->ID); ?></a></li>
<?php endforeach; ?>
              </ul>



            </li>



<?php else : ?>

                        <li class="<?php if (is_page($post->ID)) : ?>active<?php endif; ?> <?php if ($post->ID == 192 || $post->ID == 14) : ?><?php endif; ?> <?php echo $post->post_name; ?>" data-filter="<?php if ($post->ID == 192) : ?>material_categories<?php endif; ?>">
                <span><a href="<?php if ($post->ID == 12) : ?><?php echo get_permalink(36); ?><?php else : ?><?php the_permalink(); ?><?php endif; ?>"><?php the_title(); ?></a></span>
            </li>


          <?php endif; ?>
            
                     <?php endwhile; ?>
            <div style="clear:both"></div>
      
        </ul>
        <div class="search-text">
                        <span>SEARCH</span>
            <form method="get" action="/search-websites">
                <input type="text" placeholder="Search..." name="text" class="text" />
                <input type="submit" name="submit" value="OK" class="bt-search" />
            </form>
        </div>
    </div> </div>
</nav>

<nav class="filters " style="">
    <div class="inner">

    
<?php if (is_page(192)) : ?>
<?php include (TEMPLATEPATH . '/snippet_filters_materials.php'); ?>
<?php endif; ?>
<?php if (is_page(14)) : ?>
<?php include (TEMPLATEPATH . '/snippet_filters_inspiration.php'); ?>
<?php endif; ?>
        
        
     
        <div class="info">Click <strong>here</strong> to view all</strong>.</div>
    </div>
</nav>



            </header>