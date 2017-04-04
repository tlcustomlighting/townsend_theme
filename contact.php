 <?php
/*
Template Name: Contact
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


               <div id="slideoverlay" class="loading" style="background-color: white; position: fixed; z-index: 999; top: 0; width: 100%; height: 100%;visibility:hidden;opacity:0.7"></div>


<?php $company_address = townsend_option('company_address'); ?>
<?php $company_address_europe = townsend_option('company_address_europe'); ?>
<?php $company_phone = townsend_option('company_phone'); ?>
<?php $company_phone_europe = townsend_option('company_phone'); ?>
<?php $company_fax = townsend_option('company_fax'); ?>
<?php $company_email = townsend_option('company_email'); ?>
<?php $company_email_europe = townsend_option('company_email_europe'); ?>


<div class="container" style="margin-top:30px;padding-bottom:50px;margin-bottom:20px">



                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
<ul class="tabs" style="position:relative;z-index:99;border-right: 1px solid #ccc;
padding-right: 10px;">
   <li class="interactive"><span>USA Office</span><div class="address_display"><p><?php echo nl2br($company_address); ?></p><p>Phone: <?php echo $company_phone; ?></p><p>Fax: <?php echo $company_fax; ?></p><p>info@tlcustomlighting.com</p></div></li>
  <li class="interactive"><span>Europe Office</span><div class="address_display"><p><?php echo nl2br($company_address_europe); ?></p><p>Phone: <?php echo $company_phone_europe; ?></p><p>info@tlcustomlighting.com</p></div></li>



</ul>
       
                </div>
                
                
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" style="">
                    <h1 style="  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  margin-top: 20px;">Contact</h1>
  <h3>Our contact form is currently undergoing maintenance. We apologize for the inconvenience and offer all aternative means of contact until further notice.</h3>
 
  <?php endwhile; ?>
	<?php endif; ?>
  <label for="phone">Phone</label><p name="phone">1+(310)-622-7313</p>
  <label for="fax">Fax</label><p name="fax">1+(310)-300-4484</p>
  <label for="email">Email Address</label><p name="email">info@tlcustomlighting.com</p>

<!-- <script>
$(document).ready(function() {

	var use_ajax=true;
isFormValid = true;

	$("#contactForm").submit(function(e){

		 $(".required ").each(function(){
        if ($.trim($(this).find('.text-input').val()).length == 0){
            $(this).addClass("highlight");
            isFormValid = false;
        }
        else{
            $(this).removeClass("highlight");
                        isFormValid = true;

        }
    });
			
			if(use_ajax && isFormValid)
			{
				$('#slideoverlay').css('visibility','visible');
				$.post('/mailersubmit.php',$(this).serialize()+'&ajax=1',
				
					function(data){
						if(parseInt(data)==-1)
							$.validationEngine.buildPrompt("#captcha","* Wrong verification number!","error");
							
						else
						{



$('.container').prepend('<div id="sent_message"><h1>Message Sent. Thank you.</h1></div>');
	$("#sent_message").slideDown('slow');
						}
						
						$('#slideoverlay').css('visibility','hidden');
					}
				
				);
			}
			e.preventDefault();
	})




$('input, textarea').focus(function() {

$('input, textarea').each(function() {
if ($(this).val() === '') {
$(this).parent().find('label').fadeIn('slow');

}
});


$('form p').removeClass('active');

$(this).parent().addClass('active');
});


   $('input, textarea').on('keypress', function() {
       $(this).parent().find('label').fadeOut('slow');
       $(this).parent().removeClass('highlight');

       
       
    });



    //hiding tab content except first one
    $(".tabContent").not(":first").css({"opacity": 0, "z-index": 1}); 
    // adding Active class to first selected tab and show 
    $("ul.tabs li:first").addClass("active").show();  
 
    // Click event on tab
    $("ul.tabs li").click(function() {
        // Removing class of Active tab
        $("ul.tabs li.active").removeClass("active"); 
        // Adding Active class to Clicked tab
        $(this).addClass("active"); 
        if($(this).hasClass("interactive")) { 
        
        $(".tabContent").css({"opacity": 0, 'z-index': 1});        
        // showing the clicked tab's content using fading effect
        $($('a',this).attr("href")).animate({
    opacity: 1}).css({'z-index': 2}); 
 }
        return false;
    });
 
});
</script> -->
<?php get_footer(); ?>