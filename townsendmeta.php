<?php
/**
 * Registering meta boxes
 *
 * All the definitions of meta boxes are listed below with comments.
 * Please read them CAREFULLY.
 *
 * You also should read the changelog to know what has been changed before updating.
 *
 * For more information, please visit:
 * @link http://www.deluxeblogtips.com/meta-box/
 */


add_filter( 'rwmb_meta_boxes', 'YOUR_PREFIX_register_meta_boxes' );

/**
 * Register meta boxes
 *
 * @return void
 */
function YOUR_PREFIX_register_meta_boxes( $meta_boxes )
{

	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
$postobject = get_post($post_id);




	/**
	 * Prefix of meta keys (optional)
	 * Use underscore (_) at the beginning to make keys hidden
	 * Alt.: You also can make prefix empty to disable it
	 */
	// Better has an underscore as last sign
	$prefix = '_';

	// 1st meta box
	$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'page_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Page Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('page' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
					array(
				'name'  => __( 'Alternative Title', 'rwmb' ),
				'id'    => "{$prefix}alternative_title",
				'type'  => 'text'
			),


										array(
				'name'  => __( 'Page Description', 'rwmb' ),
				'id'    => "{$prefix}page_description",
				'type'  => 'textarea'
			),


																				array(
				'name'  => __( 'Page Description (Short)', 'rwmb' ),
				'id'    => "{$prefix}page_description_short",
				'type'  => 'textarea'
			),




																				array(
				'name'  => __( 'Page Banner', 'rwmb' ),
				'id'    => "{$prefix}page_banner",
				'type'  => 'image'
			),
			
			
			



											array(
				'name'  => __( 'Associated Taxonomy', 'rwmb' ),
				'id'    => "{$prefix}associated_taxonomy_2",
		'type'		=> 'radio',
			// Array of 'key' => 'value' pairs for radio options.
			// Note: the 'key' is stored in meta field, not the 'value'
			'options'	=> array(
				'5'			=> 'Chandeliers',
				'4'			=> 'Pendants',
				'2'			=> 'Table Lamps',
				'92'			=> 'Floor Lamps',
				'3'			=> 'Sconces',
				'76'			=> 'Lampshades',

			)
			),






					array(
				'name'  => __( 'Page Thumbnail', 'rwmb' ),
				'id'    => "{$prefix}page_thumbnail",
				'type'  => 'image'
			),
			

			
			
		),

	);



	$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'eblast_grid_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'eBlast Grid Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('eblast_grid' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
				

																				array(
				'name'  => __( 'eBlast Grid Image', 'rwmb' ),
				'id'    => "{$prefix}eblast_grid_image",
				'type'  => 'image',
																'desc'  => '640px x 638px',

			),
			
			
		

			
			
		),

	);
	

			if ($post_id == 429) {




$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'home_page_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Home Page Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('page' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(


				array(
				'name'  => __( 'Home Page Upper Right Image', 'rwmb' ),
				'id'    => "{$prefix}home_page_upper_right_image",
				'type'  => 'image'
			),
				array(
				'name'  => __( 'Home Page Lower Right Image', 'rwmb' ),
				'id'    => "{$prefix}home_page_lower_right_image",
				'type'  => 'image'
			),

								array(
				'name'  => __( 'Home Page Upper Right Message', 'rwmb' ),
				'id'    => "{$prefix}home_page_upper_right_message",
				'type'  => 'textarea'
			),


								array(
				'name'  => __( 'Home Page Lower Right Message', 'rwmb' ),
				'id'    => "{$prefix}home_page_lower_right_message",
				'type'  => 'textarea'
			),



			

		),

	);




}


		if ($post_id == 36) {


$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'about_page_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'About Page Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('page' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(


				array(
				'name'  => __( 'About Page Mission Statement', 'rwmb' ),
				'id'    => "{$prefix}about_page_mission_statement",
				'type'  => 'textarea'
			),



					array(
				'name'  => __( 'About Page Column 1', 'rwmb' ),
				'id'    => "{$prefix}about_page_column_1",
				'type'  => 'textarea'
			),


										array(
				'name'  => __( 'About Page Column 2', 'rwmb' ),
				'id'    => "{$prefix}about_page_column_2",
				'type'  => 'textarea'
			),


															array(
				'name'  => __( 'About Page Column 3', 'rwmb' ),
				'id'    => "{$prefix}about_page_column_3",
				'type'  => 'textarea'
			),


																														array(
				'name'  => __( 'About Page Conclusion Sentence', 'rwmb' ),
				'id'    => "{$prefix}about_page_conclusion_sentence",
				'type'  => 'textarea'
			),
			
			
			

		),

	);



}
	
	
	$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'pdf_item_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'PDF Item Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('pdf_item' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
					array(
				'name'  => __( 'pdf File', 'rwmb' ),
				'id'    => "{$prefix}pdf_file",
				'type'  => 'file'
			),
			
			
			

		),

	);



$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'client_gallery_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Client Gallery Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('client_gallery' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(

			
			
			

		),

	);	
	
	
	
	

$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'material_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Material Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('material' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
					array(
				'name'  => __( 'Material Swatch', 'rwmb' ),
				'id'    => "{$prefix}material_swatch",
				'type'  => 'image',
																'desc'  => '458px x 458px',

			),
			
			
								array(
				'name'  => __( 'Reference Number', 'rwmb' ),
				'id'    => "{$prefix}material_number",
				'type'  => 'text'
			),
			
			
			

			
											
						array(
				'name'  => __( 'New?', 'rwmb' ),
				'id'    => "{$prefix}material_new_check",
		'type'		=> 'checkbox',
	
			),
			
			
			

			

			
			

			
			
			
			

		),

	);	
	
	
	
	
	
$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'fixture_item_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Fixture Item Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('fixture_item' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
					array(
				'name'  => __( 'Fixture Item Image', 'rwmb' ),
				'id'    => "{$prefix}fixture_item_image",
				'type'  => 'image'
			),
			
			
		
			

		),

	);	
	
	
	
	
	
$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'inspiration_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Inspiration Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('inspiration' ),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
					array(
				'name'  => __( 'Inspiration Image', 'rwmb' ),
				'id'    => "{$prefix}inspiration_image",
				'type'  => 'image',
																'desc'  => 'Any dimensions. Wide formatted best',

			),
			
			
			
			
						array(
				'name'  => __( 'Pinterest Link', 'rwmb' ),
				'id'    => "{$prefix}inspiration_pinterest_link",
				'type'  => 'text'
			),
			
			array(
			'name'		=> 'Item Sizing',
			'id'		=> "{$prefix}inspiration_sizing",
			'type'		=> 'radio',
			// Array of 'key' => 'value' pairs for radio options.
			// Note: the 'key' is stored in meta field, not the 'value'
			'options'	=> array(
				'1x1'			=> '1x1',
				'1x2'			=> '1x2',
				'2x1'			=> '2x1',
				'2x2'			=> '2x2'

			),
			'std'		=> '1x1'		),
		
			

		),

	);	
	
	
		$meta_boxes[] = array(
		// Meta box id, UNIQUE per meta box. Optional since 4.1.5
		'id' => 'lighting_design_options',

		// Meta box title - Will appear at the drag and drop handle bar. Required.
		'title' => __( 'Lighting Design Options', 'rwmb' ),

		// Post types, accept custom post types as well - DEFAULT is array('post'). Optional.
		'pages' => array('lighting_design'),

		// Where the meta box appear: normal (default), advanced, side. Optional.
		'context' => 'normal',

		// Order of meta box: high (default), low. Optional.
		'priority' => 'high',

		// Auto save: true, false (default). Optional.
		'autosave' => true,

		// List of meta fields
		'fields' => array(
					array(
				'name'  => __( 'Lighting Design Thumbnail', 'rwmb' ),
				'id'    => "{$prefix}lighting_design_thumbnail",
				'type'  => 'image',
												'desc'  => 'Any dimensions',

			),

					array(
				'name'  => __( 'Lighting Design PDF', 'rwmb' ),
				'id'    => "{$prefix}lighting_design_pdf",
				'type'  => 'file',

			),


		),

	);



	return $meta_boxes;
}


