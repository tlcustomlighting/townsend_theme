<?php
/*
Template Name: Client Login
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





       <section id="content">

        <div class="block">
            <div class="inner width-2">
                <div class="box-login">
      
                 
                    <div class="box-form">

<form name="loginform" id="loginform" action="<?php bloginfo('wpurl'); ?>/wp-login.php" method="post">
                      
                            
                            <label for="user_login">Username<br>

                            
                            <input id="user_login" type="text" name="log"  class="text-input focus required"></label>
                            
                                
                            
                            
                 
                            
                                <label for="user_login">Password<br>                           
                            <input id="user_pass" type="password" name="pwd"  class="text-input focus required"></label>
                            
                            
                            
                            
                                                            
                                                            
<p class="login-remember"><label><input name="rememberme" type="checkbox" id="rememberme" value="forever"> Remember Me</label></p>
                                                        <p>				<input type="hidden" name="redirect_to" value="<?php bloginfo('wpurl'); ?>/">
<input type="submit" name="submit" value="LOGIN" class="button large bold"></p>
                      
                        </form>
                    </div>
            
                </div>
            </div>
        </div>

    </section>
	
	<?php endwhile; ?>
	<?php endif; ?>
	<script>
	
		$(document).ready(function(){
		
    $(".required").focus(function(){
$(this).removeClass('highlight');

});		
	});

	
	$("#loginform").submit(function(){
    var isFormValid = true;

    $(".required").each(function(){
        if ($.trim($(this).val()).length == 0){
            $(this).addClass("highlight");
            isFormValid = false;
        }
        else{
            $(this).removeClass("highlight");
        }
    });


    return isFormValid;
});

</script>
	

<?php get_footer(); ?>