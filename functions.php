<?php
 
 function has_Children($cat_id)
{
    $children = get_terms(
        'inspiration_category',
        array( 'parent' => $cat_id, 'hide_empty' => false )
    );
    if ($children){
        return true;
    }
    return false;
}; require_once( TEMPLATEPATH . '/class.my-theme-options.php' );
 include (TEMPLATEPATH . '/townsendmeta.php'); function my_function_admin_bar(){ return false; }
add_filter( 'show_admin_bar' , 'my_function_admin_bar');add_theme_support( 'post-thumbnails' ); include (TEMPLATEPATH . '/Tax-meta-class/Tax-meta-class.php');include (TEMPLATEPATH . '/taxonomymeta.php'); add_action( 'init', 'create_lighting_design_type' );function create_lighting_design_type() {
    register_post_type( 'lighting_design',
        array(
            'labels' => array(
                'name' => __( 'Lighting Designs' ),
                'singular_name' => __( 'Lighting Design' ),
                'add_new' => __( 'Add New Lighting Design' ),
                'add_new_item' => __( 'Add New Lighting Design' ),
                'edit' => __( 'Edit Lighting Design' ),
                'edit_item' => __( 'Edit Lighting Design' ),
                'new_item' => __( 'Add New Lighting Design' ),
                'view' => __( 'View Lighting Design' ),
                'view_item' => __( 'View Lighting Design' ),
                'search_items' => __( 'Search Lighting Designs' ),
                'not_found' => __( 'No Lighting Designs Found' ),
                'not_found_in_trash' => __( 'No Lighting Designs found in Trash' ),
            ),
            'description' => __('Lighting Designs to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}/**add_action( 'init', 'create_fixture_item_type' );function create_fixture_item_type() {
    register_post_type( 'fixture_item',
        array(
            'labels' => array(
                'name' => __( 'Fixture Items' ),
                'singular_name' => __( 'Fixture Item' ),
                'add_new' => __( 'Add New Fixture Item' ),
                'add_new_item' => __( 'Add New Fixture Item' ),
                'edit' => __( 'Edit Fixture Item' ),
                'edit_item' => __( 'Edit Fixture Item' ),
                'new_item' => __( 'Add New Fixture Item' ),
                'view' => __( 'View Fixture Item' ),
                'view_item' => __( 'View Fixture Item' ),
                'search_items' => __( 'Search Fixture Items' ),
                'not_found' => __( 'No Fixture Items Found' ),
                'not_found_in_trash' => __( 'No Fixture Items found in Trash' ),
            ),
            'description' => __('Fixture Items to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}*/ add_action( 'init', 'create_inspiration_type' );function create_inspiration_type() {
    register_post_type( 'inspiration',
        array(
            'labels' => array(
                'name' => __( 'Inspirations' ),
                'singular_name' => __( 'Inspiration' ),
                'add_new' => __( 'Add New Inspiration' ),
                'add_new_item' => __( 'Add New Inspiration' ),
                'edit' => __( 'Edit Inspiration' ),
                'edit_item' => __( 'Edit Inspiration' ),
                'new_item' => __( 'Add New Inspiration' ),
                'view' => __( 'View Inspiration' ),
                'view_item' => __( 'View Inspiration' ),
                'search_items' => __( 'Search Inspirations' ),
                'not_found' => __( 'No Inspirations Found' ),
                'not_found_in_trash' => __( 'No Inspirations found in Trash' ),
            ),
            'description' => __('Inspirations to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}add_action( 'init', 'create_eblast_grid_type' );function create_eblast_grid_type() {
    register_post_type( 'eblast_grid',
        array(
            'labels' => array(
                'name' => __( 'Homepage Slides' ),
                'singular_name' => __( 'Homepage Slide' ),
                'add_new' => __( 'Add New Homepage Slide' ),
                'add_new_item' => __( 'Add New Homepage Slide' ),
                'edit' => __( 'Edit Homepage Slide' ),
                'edit_item' => __( 'Edit Homepage Slide' ),
                'new_item' => __( 'Add New Homepage Slide' ),
                'view' => __( 'View Homepage Slide' ),
                'view_item' => __( 'View Homepage Slide' ),
                'search_items' => __( 'Search Homepage Slides' ),
                'not_found' => __( 'No Homepage Slides Found' ),
                'not_found_in_trash' => __( 'No Homepage Slides found in Trash' ),
            ),
            'description' => __('Homepage Slides to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}add_action( 'init', 'register_my_taxonomies', 0 );

function register_my_taxonomies() {

register_taxonomy(
		'lighting_design_type',
		array( 'lighting_design' ),
		array(
			'public' => true,
			'hierarchical' => true,

			'labels' => array(
				'name' => __( 'Design Types' ),
				'singular_name' => __( 'Design Type' )
			)
		)
	
	);


register_taxonomy(
        'material_material',
        array( 'material' ),
        array(
            'public' => true,
            'hierarchical' => true,

            'labels' => array(
                'name' => __( 'Material Materials' ),
                'singular_name' => __( 'Material' )
            )
        )
    
    );
	

    register_taxonomy(
        'material_texture',
        array( 'material' ),
        array(
            'public' => true,
            'hierarchical' => true,

            'labels' => array(
                'name' => __( 'Material Textures' ),
                'singular_name' => __( 'Texture' )
            )
        )
    
    );
	

	
	register_taxonomy(
		'pdf_archive_category',
		array( 'pdf_item' ),
		array(
			'public' => true,
			'hierarchical' => true,

			'labels' => array(
				'name' => __( 'Archive Categories' ),
				'singular_name' => __( 'Archive Category' )
			)
		)
	
	);

	
		
		register_taxonomy(
		'material_color',
		array( 'material' ),
		array(
			'public' => true,
			'hierarchical' => true,

			'labels' => array(
				'name' => __( 'Material Colors' ),
				'singular_name' => __( 'Material Color' )
			)
		)
	
	);
	
	
	

	
	
	
			register_taxonomy(
		'inspiration_category',
		array( 'inspiration' ),
		array(
			'public' => true,
			'hierarchical' => true,

			'labels' => array(
				'name' => __( 'Inspiration Categories' ),
				'singular_name' => __( 'Inspiration Category' )
			)
		));
		
		
		
			register_taxonomy(
		'inspiration_tag',
		array( 'inspiration' ),
		array(
			'public' => true,
			'hierarchical' => false,

			'labels' => array(
				'name' => __( 'Inspiration Tags' ),
				'singular_name' => __( 'Inspiration Tag' )
			)
		)
		
		
	
	);
	

}function get_the_slug() {

global $post;

if ( is_single() || is_page() ) {
return $post->post_name;
}
else {
return "";
}

}/** add_action( 'init', 'create_chandelier_type' );function create_chandelier_type() {
    register_post_type( 'chandelier',
        array(
            'labels' => array(
                'name' => __( 'Chandeliers' ),
                'singular_name' => __( 'Chandelier' ),
                'add_new' => __( 'Add New Chandelier' ),
                'add_new_item' => __( 'Add New Chandelier' ),
                'edit' => __( 'Edit Chandelier' ),
                'edit_item' => __( 'Edit Chandelier' ),
                'new_item' => __( 'Add New Chandelier' ),
                'view' => __( 'View Chandelier' ),
                'view_item' => __( 'View Chandelier' ),
                'search_items' => __( 'Search Chandeliers' ),
                'not_found' => __( 'No Chandeliers Found' ),
                'not_found_in_trash' => __( 'No Chandeliers found in Trash' ),
            ),
            'description' => __('Chandeliers to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
} add_action( 'init', 'create_portable_lamp_type' );function create_portable_lamp_type() {
    register_post_type( 'portable_lamp',
        array(
            'labels' => array(
                'name' => __( 'Portable Lamps' ),
                'singular_name' => __( 'Portable Lamp' ),
                'add_new' => __( 'Add New Portable Lamp' ),
                'add_new_item' => __( 'Add New Portable Lamp' ),
                'edit' => __( 'Edit Portable Lamp' ),
                'edit_item' => __( 'Edit Portable Lamp' ),
                'new_item' => __( 'Add New Portable Lamp' ),
                'view' => __( 'View Portable Lamp' ),
                'view_item' => __( 'View Portable Lamp' ),
                'search_items' => __( 'Search Portable Lamps' ),
                'not_found' => __( 'No Portable Lamps Found' ),
                'not_found_in_trash' => __( 'No Portable Lamps found in Trash' ),
            ),
            'description' => __('Portable Lamps to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
} add_action( 'init', 'create_sconce_type' );function create_sconce_type() {
    register_post_type( 'sconce',
        array(
            'labels' => array(
                'name' => __( 'Sconces' ),
                'singular_name' => __( 'Sconce' ),
                'add_new' => __( 'Add New Sconce' ),
                'add_new_item' => __( 'Add New Sconce' ),
                'edit' => __( 'Edit Sconce' ),
                'edit_item' => __( 'Edit Sconce' ),
                'new_item' => __( 'Add New Sconce' ),
                'view' => __( 'View Sconce' ),
                'view_item' => __( 'View Sconce' ),
                'search_items' => __( 'Search Sconces' ),
                'not_found' => __( 'No Sconces Found' ),
                'not_found_in_trash' => __( 'No Sconces found in Trash' ),
            ),
            'description' => __('Sconces to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}add_action( 'init', 'create_pendant_type' );function create_pendant_type() {
    register_post_type( 'pendant',
        array(
            'labels' => array(
                'name' => __( 'Pendants' ),
                'singular_name' => __( 'Pendant' ),
                'add_new' => __( 'Add New Pendant' ),
                'add_new_item' => __( 'Add New Pendant' ),
                'edit' => __( 'Edit Pendant' ),
                'edit_item' => __( 'Edit Pendant' ),
                'new_item' => __( 'Add New Pendant' ),
                'view' => __( 'View Pendant' ),
                'view_item' => __( 'View Pendant' ),
                'search_items' => __( 'Search Pendants' ),
                'not_found' => __( 'No Pendants Found' ),
                'not_found_in_trash' => __( 'No Pendants found in Trash' ),
            ),
            'description' => __('Pendants to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes', 'editor', 'excerpt' ),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
} */add_action( 'init', 'create_client_gallery_type' );function create_client_gallery_type() {
    register_post_type( 'client_gallery',
        array(
            'labels' => array(
                'name' => __( 'Client Galleries' ),
                'singular_name' => __( 'Client Gallery' ),
                'add_new' => __( 'Add New Client Gallery' ),
                'add_new_item' => __( 'Add New Client Gallery' ),
                'edit' => __( 'Edit Client Gallery' ),
                'edit_item' => __( 'Edit Client Gallery' ),
                'new_item' => __( 'Add New Client Gallery' ),
                'view' => __( 'View Client Gallery' ),
                'view_item' => __( 'View Client Gallery' ),
                'search_items' => __( 'Search Client Galleries' ),
                'not_found' => __( 'No Client Galleries Found' ),
                'not_found_in_trash' => __( 'No Client Galleries found in Trash' ),
            ),
            'description' => __('Client Galleries to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'author', 'editor'),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}add_action( 'init', 'create_pdf_item_type' );function create_pdf_item_type() {
    register_post_type( 'pdf_item',
        array(
            'labels' => array(
                'name' => __( 'PDF Items' ),
                'singular_name' => __( 'PDF Item' ),
                'add_new' => __( 'Add New PDF Item' ),
                'add_new_item' => __( 'Add New PDF Item' ),
                'edit' => __( 'Edit PDF Item' ),
                'edit_item' => __( 'Edit PDF Item' ),
                'new_item' => __( 'Add New PDF Item' ),
                'view' => __( 'View PDF Item' ),
                'view_item' => __( 'View PDF Item' ),
                'search_items' => __( 'Search PDF Items' ),
                'not_found' => __( 'No PDF Items Found' ),
                'not_found_in_trash' => __( 'No PDF Items found in Trash' ),
            ),
            'description' => __('PDF Items to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes'),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}add_action( 'init', 'create_material_type' );function create_material_type() {
    register_post_type( 'material',
        array(
            'labels' => array(
                'name' => __( 'Materials' ),
                'singular_name' => __( 'Material' ),
                'add_new' => __( 'Add New Material' ),
                'add_new_item' => __( 'Add New Material' ),
                'edit' => __( 'Edit Material' ),
                'edit_item' => __( 'Edit Material' ),
                'new_item' => __( 'Add New Material' ),
                'view' => __( 'View Material' ),
                'view_item' => __( 'View Material' ),
                'search_items' => __( 'Search Materials' ),
                'not_found' => __( 'No Materials Found' ),
                'not_found_in_trash' => __( 'No Materials found in Trash' ),
            ),
            'description' => __('Materials to be shown in the site.'),
            'public' => true,
            'show_ui' => true,


            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_position' => 20,
            'supports' => array( 'title', 'page-attributes', 'editor'),
            'can_export' => true,
'hierarchichal' => false,
'capability_type' => 'post'
        )
    );
}


function townsend_option( $option ) {
	$options = get_option( 'mytheme_options' );
	if ( isset( $options[$option] ) )
		return $options[$option];
	else
		return false;
} ?>