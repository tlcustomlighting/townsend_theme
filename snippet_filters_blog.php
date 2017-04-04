
        
         <div class="filter list-tags tags blog_tags">
        
  <div class=" searchholder">

        <form method="get" action="/search-websites">
                <input type="text" placeholder="Enter Search Keyword" name="text" class="text">
            </form>
</div>        


        <div class="selectholder">
        <select class="basic">

  <option value="item">All Topics</option>

    <?php 
// no default values. using these as examples
$taxonomies = array( 
    'post_tag');

$args = array(
    'orderby'       => 'count', 
    'order'         => 'DESC',
    'hide_empty'    => false, 
    'fields'        => 'all', 
    'hierarchical'  => true, 
    'child_of'      => 0, 
    'pad_counts'    => false, 
    'cache_domain'  => 'core',
    'number'        => '10', 

); 
?>

<?php $post_categories = get_terms( $taxonomies, $args ); ?>

<?php foreach ($post_categories as $post_category) : ?>

  <option value="<?php echo $post_category->slug; ?>"><?php echo $post_category->name; ?></option>



<?php endforeach; ?>
</select>
</div>


        <div class="selectholder">
        
        
    <select class="basic ">
  <option value="2014">All 2014</option>

<?php
global $wpdb;
$limit = 0;
$year_prev = null;
$months = $wpdb->get_results("SELECT DISTINCT MONTH( post_date ) AS month , YEAR( post_date ) AS year, COUNT( id ) as post_count FROM $wpdb->posts WHERE post_status = 'publish' and post_date <= now( ) and post_type = 'post' GROUP BY month , year ORDER BY post_date DESC"); ?>


<?php
foreach($months as $month) :
  $year_current = $month->year;
   ?>
      <option value="<?php echo $month->year; ?>"><?php echo date_i18n("F", mktime(0, 0, 0, $month->month, 1, $month->year)) ?> 2014</option>

  
<?php $year_prev = $year_current;

if(++$limit >= 18) { break; }

endforeach; ?>
</select>

       </div> 
       

       
<div class="selectholder">
       <div class="fancy-select disabled">
<div class="trigger"><div class="trigger-inner">Jan 2015</div></div></div>

       </div> 
           
                            
                            
                            
                              <div style="clear:both;"></div>

       
                            
                            
        </div>
        