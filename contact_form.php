 <?php
/*
Template Name: Contact (Form)
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


<?php $company_address = townsend_option('company_address'); ?>
<?php $company_address_europe = townsend_option('company_address_europe'); ?>
<?php $company_phone = townsend_option('company_phone'); ?>
<?php $company_phone_europe = townsend_option('company_phone'); ?>
<?php $company_fax = townsend_option('company_fax'); ?>
<?php $company_email = townsend_option('company_email'); ?>
<?php $company_email_europe = townsend_option('company_email_europe'); ?>

<form id="contactForm">

<input id="user_login" type="text" name="log" placeholder="Your Name" class="text-input focus">

<input id="user_login" type="text" name="log" placeholder="Company" class="text-input ">

<input id="user_login" type="text" name="log" placeholder="E-mail Address" class="text-input ">

<input id="user_login" type="text" name="log" placeholder="Phone Number" class="text-input ">

<input id="user_login" type="text" name="log" placeholder="Location" class="text-input ">


<textarea id="user_login" name="log" placeholder="Message" class="text-input "></textarea>


	
	</form>
	
	<?php endwhile; ?>
	<?php endif; ?>
	

<?php get_footer(); ?>