jQuery(function($) {
    /* //////////////////////////// Sub-navigation menu */
    
    // Show sub-menu if it is hide
    $('#menu-designs, #menu-company').mouseenter(function() {
        var $selector = $('.subnav[data-parent-id="' + $(this).attr('id') + '"]');
        $('#subnav-container').show(0);
        if ($selector.hasClass('hideit')) {
            $selector.stop(true, false).animate({top: 0}, 400);
        }
    })
    .mouseleave(function() {
        var $selector = $('.subnav[data-parent-id="' + $(this).attr('id') + '"]');
        if ($selector.hasClass('hideit')) {
            $selector.stop(true, false).animate({top: '-62px'}, 600, function(){
                if($('#subnav-container .show').length == 0){
                    $('#subnav-container').hide(0);
                }
            });
        }
    });

    $('.subnav').mouseenter(function() {
        if ($(this).hasClass('hideit')) {
            $('#' + $(this).attr('data-parent-id')).addClass('active');
            $(this).addClass('show');

            $('.subnav:not([data-parent-id="' + $(this).attr('data-parent-id') + '"])').hide();
        }
    }).mouseleave(function() {
        if ($(this).hasClass('hideit')) {
            $('#' + $(this).attr('data-parent-id')).removeClass('active');
            $(this).css('top', 0).removeClass('show');
            $(this).stop(true, false).animate({top: '-62px'}, 600, function(){
                if($('#subnav-container .show').length == 0){
                    $('#subnav-container').hide(0);
                }
            });

            $('.subnav:not([data-parent-id="' + $(this).attr('data-parent-id') + '"])').show();
        }
    });

    /* //////////////////////////// Main Scrollbar initialization */
    
 
});