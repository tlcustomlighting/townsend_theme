 <div class="filter list-tags material_categories" style="">
        <div class="container">
        
                <div class="searchholder visible-lg">

        <form method="get" action="/search-websites">
                <input type="text" placeholder="Enter Search Keyword" name="text" class="text">
            </form>
</div>        
        

        <script>
$("form").bind("keypress", function (e) {
    if (e.keyCode == 13) {
        return false;
    }
});

</script>


        <div class="selectholder">
        <select class="basic">


  <option value="item">All Materials</option>
    <?php 
// no default values. using these as examples
$taxonomies = array( 
    'material_material');

$args = array(
    'orderby'       => 'name', 
    'order'         => 'ASC',
    'hide_empty'    => false, 
    'fields'        => 'all', 
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'pad_counts'    => false, 
    'cache_domain'  => 'core'
); 
?>

<?php $inspiration_categories = get_terms( $taxonomies, $args ); ?>

<?php foreach ($inspiration_categories as $inspiration_category) : ?>
  <option value="<?php echo $inspiration_category->slug; ?>-material"><?php echo $inspiration_category->name; ?></option>
<?php endforeach; ?>
</select>  

       </div> 
       

       
<div class="selectholder">
        <select class="basic">


  <option value="item">All Textures</option>
    <?php 
// no default values. using these as examples
$taxonomies = array( 
    'material_texture');

$args = array(
    'orderby'       => 'name', 
    'order'         => 'ASC',
    'hide_empty'    => false, 
    'fields'        => 'all', 
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'pad_counts'    => false, 
    'cache_domain'  => 'core'
); 
?>

<?php $inspiration_categories = get_terms( $taxonomies, $args ); ?>

<?php foreach ($inspiration_categories as $inspiration_category) : ?>
  <option value="<?php echo $inspiration_category->slug; ?>-texture"><?php echo $inspiration_category->name; ?></option>
<?php endforeach; ?>
</select>  

       </div> 
       
       


       
<div class="selectholder">
        <select class="basic">


  <option value="item">All Colors</option>
    <?php 
// no default values. using these as examples
$taxonomies = array( 
    'material_color');

$args = array(
    'orderby'       => 'name', 
    'order'         => 'ASC',
    'hide_empty'    => false, 
    'fields'        => 'all', 
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'pad_counts'    => false, 
    'cache_domain'  => 'core'
); 
?>

<?php $inspiration_categories = get_terms( $taxonomies, $args ); ?>

<?php foreach ($inspiration_categories as $inspiration_category) : ?>
  <option value="<?php echo $inspiration_category->slug; ?>-color"><?php echo $inspiration_category->name; ?></option>
<?php endforeach; ?>
</select>  

       </div> 
       
       
       


       
       <div class="selectholder colorfilters" style="display:none">
       <ul>




     <li class="active" data-filter= "item" style="background:url(<?php echo get_template_directory_uri(); ?>/images/allmatcolors.jpg)"><div class="tooltip">
                                            <span class="name">ALL</span>
                                                                                        
                                        </div></li>


       <li data-filter= "red-color" style="background:#c75858"><div class="tooltip">
                                            <span class="name">RED</span>
                                                                                        
                                        </div></li>

       <li data-filter= "purple-color" style="background:#a158c7"><div class="tooltip">
                                            <span class="name">PURPLE</span>
                                                                                        
                                        </div></li>

       <li data-filter= "blue-color" style="background:#5885c7"><div class="tooltip">
                                            <span class="name">BLUE</span>
                                                                                        
                                        </div></li>

       <li data-filter= "green-color" style="background:#58c77b"><div class="tooltip">
                                            <span class="name">GREEN</span>
                                                                                        
                                        </div></li>

       <li data-filter= "brown-color" style="background:#9e7454"><div class="tooltip">
                                            <span class="name">BROWN</span>
                                                                                        
                                        </div></li>
       <li data-filter= "grey-color" style="background:#a2a2a2"><div class="tooltip">
                                            <span class="name">GRAY</span>
                                                                                        
                                        </div></li>
       <li data-filter= "black-color" style="background:#000"><div class="tooltip">
                                            <span class="name">BLACK</span>
                                                                                        
                                        </div></li>

       </ul>
       
       </div>
       
       
              <div style="clear:both;"></div>

       
          
        </div></div>