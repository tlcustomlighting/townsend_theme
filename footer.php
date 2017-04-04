<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>

<?php wp_footer(); ?>

                <?php $company_phone = townsend_option('company_phone'); ?>
                <?php $company_fax = townsend_option('company_fax'); ?>
                <?php $company_email_2 = townsend_option('company_email_2'); ?>


<footer class="v76_footer v76_grid_pane v76_1_width">

  <div class="v76_footer_top v76_grid_pane v76_1_width">
    <div class="v76_contact">
      <h3>P: <?php echo $company_phone; ?></h3>
    </div>
    <div class="v76_follow visible-lg">
    <div class="v76_contact">
      <h3>F: <?php echo $company_fax; ?></h3>
    </div>
    </div>
    <div class="v76_signup visible-lg">
    <div class="v76_contact">
      <h3><?php echo $company_email_2; ?></h3>
    </div>
    </div>
  </div>

  <div class="v76_footer_bottom">
    <div class="clearfix">
      <div>
        <div>
      </div>
      </div>
    </div>

    <div class="clearfix">
      <div>
        <div>
          <span class="border"><?php bloginfo('name'); ?> info@tlcustomlighting.com • +1.310.622.7313 © 2015.  All Rights Reserved</span>
        </div>
      </div>
    </div>
  </div>
</footer>


<?php wp_reset_query(); ?>
<script>
jQuery(document).ready(function($){



        if ( Modernizr.touch ) {

$('#content').prepend('<h1 class="tl_page_title"><?php the_title(); ?></h1>');

        }


var resizeit = function() {
var resizewidth = Number($(window).width() - 40);

  $('.container').width(resizewidth);

}

resizeit();

window.onresize = function() {
resizeit();
}


});





</script>


</body>
</html>