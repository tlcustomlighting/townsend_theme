        <div class="filter list-tags tags inspiration_tags">

            <div class="container">
        
  <div class=" searchholder">

        <form method="get" action="/search-websites">
                <input type="text" placeholder="Enter Search Keyword" name="text" class="text">
            </form>
</div>        
        
        <div class="selectholder" style="display:none">
        <select class="basic">


  <option value="item">All Themes</option>
    <?php 
// no default values. using these as examples
$taxonomies = array( 
    'inspiration_category');

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
  <option value="<?php echo $inspiration_category->slug; ?>"><?php echo $inspiration_category->name; ?></option>
<?php endforeach; ?>
</select>  

       </div> 

<div class="dropdown selectholder filtertree" style="position:relative;height: 38px;">
    <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">All Themes</a>
    <ul class="dropdown-menu">

       <li class="filteritem" data-filter="item"><a href="#">All Themes</a></li>

 <?php 
// no default values. using these as examples
$taxonomies = array( 
    'inspiration_category');

$args = array(
    'orderby'       => 'name', 
    'order'         => 'ASC',
    'hide_empty'    => false, 
    'fields'        => 'all', 
    'parent'        => 0, 
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'pad_counts'    => false, 
    'cache_domain'  => 'core'
); 
?>

<?php $inspiration_categories = get_terms( $taxonomies, $args ); ?>

<?php foreach ($inspiration_categories as $inspiration_category) : ?>

<?php if (has_Children ($inspiration_category->term_id)) : ?>


        <li class="parent_item">            <a class="trigger right-caret"><?php echo $inspiration_category->name; ?></a>


<ul class="dropdown-menu sub-menu">
       <li class="filteritem" data-filter="item"><a href="#">All Themes</a></li>

 <?php 
// no default values. using these as examples
$taxonomies_sub = array( 
    'inspiration_category');

$args_sub = array(
    'orderby'       => 'name', 
    'order'         => 'ASC',
    'hide_empty'    => false, 
    'fields'        => 'all', 
    'parent'        => $inspiration_category->term_id, 
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'pad_counts'    => false, 
    'cache_domain'  => 'core'
); 
?>
<?php $inspiration_categories_sub = get_terms( $taxonomies_sub, $args_sub ); ?>


<?php foreach ($inspiration_categories_sub as $inspiration_categories_sub_item) : ?>

<li class="filteritem" data-filter="<?php echo $inspiration_categories_sub_item->slug; ?>"><a href="#"><?php echo $inspiration_categories_sub_item->name; ?></a></li>
<?php endforeach; ?>


</ul>
        </li>


    <?php else : ?>

       <li class="filteritem" data-filter="<?php echo $inspiration_category->slug; ?>"><a href="#"><?php echo $inspiration_category->name; ?></a></li>

<?php endif; ?>

<?php endforeach; ?>





    </ul>
</div>
       


               <script>
$("form").bind("keypress", function (e) {
    if (e.keyCode == 13) {
        return false;
    }
});

</script>


<script>


        if ( !Modernizr.touch ) {




$( ".filtertree .parent_item" ).hover(
  function() {





if( $(this).find('ul').length )         // use this if you are using id to check
{

    $( '.filtertree .parent_item' ).removeClass('active_item');
    $( this ).addClass('active_item');


}


  }, function() {

    $( '.filtertree .parent_item' ).removeClass('active_item');



  }
);




    
    } else {
        



$(function(){
    $(".dropdown-menu > li > a.trigger").on("click",function(e){
        var current=$(this).next();
        var grandparent=$(this).parent().parent();
        if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".sub-menu:visible").not(current).hide();
        current.toggle();
        e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
        var root=$(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
    });
});

}



  $(".dropdown-menu li:not(.parent_item) a").on("click",function(){
        var selected_title=$(this).html();
$('.filtertree a.dropdown-toggle').html(selected_title);

    });


</script>







            <ul class="filtertags_holder">
            
            
                        <?php 
// no default values. using these as examples
$taxonomies = array( 
    'inspiration_tag');

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

                                    <li class="filteritem" data-filter="<?php echo $inspiration_category->slug; ?>"><strong><a  href="#filter" data-count="<?php echo $inspiration_category->count; ?>"><?php echo $inspiration_category->name; ?></a></strong></li>
                               <?php endforeach; ?>              <div style="clear:both;"></div>

                            </ul>
                            
                   
        <div class="selectholder" style="display:none">
        <select class="basic">


  <option value="item">All Styles</option>
    <?php 
// no default values. using these as examples
$taxonomies = array( 
    'inspiration_tag');

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
  <option value="<?php echo $inspiration_category->slug; ?>"><?php echo $inspiration_category->name; ?></option>
<?php endforeach; ?>
</select>  

       </div> 
                    
                            
                            
                              <div style="clear:both;"></div>

       
                            
                            
        </div>        </div>
        
        