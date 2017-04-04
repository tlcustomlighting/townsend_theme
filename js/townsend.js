(function(window, $) {
    var AW = {
        initialize: function() {
        
        
        if ( !Modernizr.touch ) {
	
	}
        
        
jQuery( ".editable" ).wrapInner( "<div class='inner'></div>");
        
     var config = {};   
        function isIpad() {
  return !!navigator.userAgent.match(/iPad/i);
};

function isIphone () {
  return !!navigator.userAgent.match(/iPhone/i);
};

function isIpod() {
  return !!navigator.userAgent.match(/iPod/i);
};

function isAppleIos() {
  return (isIpad() || isIphone() || isIpod());
};

function isMobile () {
	if ( jQuery('body').hasClass('isMobile') ) {
		return true;
	}

	return false;
}


 // Play video
function resizeWindow() {

	config.wWidth = config.window.width();
	config.wHeight = config.window.height();
	

	// calculate width and height
	var w = jQuery(window).outerWidth(true);
	var h = jQuery(window).outerHeight(true) - 70;
	var h2 = jQuery(window).outerHeight(true) - 44;
	

	var w2 = jQuery(window).width();

	// set video clipping box size
	jQuery("#slideshow, #slideshow .rsContent, #slideshow .video_overlay, #slideshow .fallback, .about-overlay, #services-intro, .services-overlay, .slider-container, .fwh:not(.process .fwh), #about-intro").height(h).width(w);


	if (w2 >= 768) {
		jQuery("#main nav ul").show();
	}

	if ( w2 <= 1024 ) {

		if ( w2 < 1024 ) {
			jQuery("#slideshow, #slideshow .rsContent, #slideshow .video_overlay, #slideshow .fallback, .about-overlay, .fwh:not(.process .fwh), #about-intro").height(600);
			jQuery("#about-intro, .fwh").height(h).width(w);
			jQuery("#our-company-fifthy").height(500);
			jQuery(".caseslideshow #slideshow").height(600);
			jQuery('#scroll').remove();

		}

		if ( w2 < 769 ) {
			jQuery("#services-intro, .services-overlay").height(600);


		}

		if ( w2 < 768 ) {
			jQuery(".slider-container").height(h2);
			jQuery(".caseslideshow #slideshow").height(300);
			jQuery("#slideshow .rsContent").height(300);
			jQuery("#about-intro, .fwh").height('auto').width('auto');
			jQuery("#about-intro").height(500);
		}

		if ( jQuery('.sidenav').length ) {
			//openSidebar ();

			
		jQuery('.sidenav').css({right:"-43px"});
				
	
		}
	}

	if ( w2 > 1024 ) {
		jQuery("#about-intro, .fwh").height(h).width(w);

		jQuery(".sidenav").css({'right': '10%', 'cursor': 'default'});
		//jQuery(".stickybox").css({'right': 'auto'});
	}
		
	if ( jQuery('#fullscreen').hasClass('fullscreen') ) {
		jQuery("#showcase").height(h).width(w);
	} else {
		jQuery("#showcase").height('').width('');
	}




	setTimeout(function(){
		jQuery("#casestudies-work .rsOverflow").height(jQuery("#casestudies-work a article").outerHeight() + 20);

		jQuery("#services .rsOverflow").height(jQuery("#services a article").outerHeight() + 100);

		jQuery("#blog .rsOverflow").height(jQuery("#blog a article").outerHeight() + 20);

		jQuery("#news .rsOverflow").height(jQuery("#news a article").outerHeight() + 80); 
	}, 3000);

	// 100% sidebar on case
	if ( !isMobile () ) {
		jQuery(".content_info").height(jQuery("#case_content").outerHeight());
		jQuery(".content_info").height(jQuery(".content_ws").outerHeight());
	} else {
		jQuery(".content_info").height(400);
	}
	
	//console.log(jQuery(".content_ws").outerHeight());
	jQuery("#careers .sidenav").height(jQuery("#careers .content_ws").outerHeight());
	jQuery(".sidenav").height(jQuery(".content_ws").outerHeight());

	// Mobile
	if ( jQuery('body').hasClass('isMobile')) {
		if ( jQuery('.royalSlider').length ) {
			//jQuery(".royalSlider").height(275);
		}
	}
}



config.window = jQuery(window);
	config.document = jQuery(document);
	config.body = jQuery("body");
	config.mainHeader = jQuery("#main-header");

	// Resize
    jQuery(window).on("resize", function () {
        resizeWindow();
    }).trigger("resize");
	var $container = jQuery('#isotop, #isotop2, #isotop3');

	$container.imagesLoaded( function(){

		//jQuery(window).trigger("smartresize");

		if ( isMobile () ) {
			return;
		}
		
					if ( jQuery('body').hasClass('page-id-192') ) {
		jQuery('.material_categories').css("display", "block");
		jQuery('.material-library').addClass("active");
		jQuery('.filters').addClass("open").slideDown();


		
		}
		
		
		
		
		if ( jQuery('body').hasClass('page-id-16') ||  jQuery('body').hasClass('single-post')) {

		jQuery('.blog_tags').css("display", "block");
		jQuery('.new').addClass("active");
		jQuery('.filters').addClass("open").slideDown();

}
		
		
		
		
		
		
	if ( jQuery('body').hasClass('page-id-14') ||  jQuery('body').hasClass('single-inspiration')) {

		jQuery('.inspiration_tags').css("display", "block");
		jQuery('.image-library').addClass("active");
		jQuery('.filters').addClass("open").slideDown();

}
		
		
			if ( jQuery('body').hasClass('page-id-14') ) {

		$container.isotope({
			itemSelector : '.work-item',
			animationEngine: 'css',
			resizable: true,
			masonry: {
				columnWidth: $container.width() / 4
			}
		});
		
		}

		// jQuery(window).trigger("smartresize");

		// $container.isotope({
	 //  		layoutMode: 'perfectMasonry',
	 // 		perfectMasonry: {
	 // 			layout: 'vertical',
	 //            liquid: true,
	 //            columnWidth: Math.round(config.wWidth / 4),
	 //            rowHeight: Math.round(config.wWidth / 4)
	 //  		}
	 //  	});

	  	

		jQuery(window).trigger("smartresize");

		//jQuery(".aw-number").fitText(0.3, { minFontSize: '75px', maxFontSize: '120px' });

	});


        
        initIsotopeMasonry();
        
        function initIsotopeMasonry() {
	
	if ( isMobile () ) {
		console.log('initIsotopeMasonry');
		return;
	}



	// Isotop
	
}
        
        




            jQuery('#email-form .closeX').on('click', function(e) {
                
                             jQuery('body').removeClass('home-show');


            });
            // OPEN VIDEO CONFERENCE

            jQuery('.play-video').on('click', function(e) {
                
                var videoContainer = jQuery('.box-video');
                videoContainer.prepend('<iframe src="//player.vimeo.com/video/88883554?title=0&amp;byline=0&amp;portrait=0&amp;color=3c948b&amp;autoplay=1" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                videoContainer.fadeIn(300);
                e.preventDefault();

            });

            // CLOSE VIDEO CONFERENCE

            jQuery('.close-video').on('click', function(e) {

                jQuery('.box-video').fadeOut(400, function() {
                    jQuery("iframe", this).remove().fadeOut(300);
                });

            });

            /* BT SEARCH */

            jQuery('.bt-search').click(function() {
                if (jQuery(this).hasClass('active')) {
                    jQuery(this).removeClass('active');
                    hideFilters();
                } else {
                    jQuery(this).addClass('active');
                    jQuery('nav.search').addClass('open');
                    jQuery('nav .search-text input[type="text"]').focus();
                }
            });

            /* OPEN & CLOSE MAV FILTERS */
            
            
                        jQuery('.filters li.close').click(function() {
                    jQuery('nav.search .dropdown').removeClass('active');
jQuery('.filters').removeClass('open');
             jQuery('.filters').slideToggle('slow');
                    setTimeout(function() {
                        jQuery('.filters .filter').hide();
                    }, 500);
            });
            

            jQuery('nav.search .dropdown_ts').click(function() {

                var type = jQuery(this).data('filter');

                if (jQuery(this).hasClass('active')) {

                    jQuery(this).removeClass('active');
                    jQuery('.filters').removeClass('open');

                    jQuery('.filters').slideToggle('slow');
                    setTimeout(function() {
                        jQuery('.filters .filter').hide();
                    }, 500);

                } else {

                    jQuery('nav.search .dropdown_ts').removeClass('active');
                    jQuery(this).addClass('active');

                    if (jQuery('.filters').hasClass('open')) {

                        jQuery('.filters .filter').hide();
                        jQuery('.filters .filter.' + type).fadeIn();

                    } else {

                        jQuery('.filters').addClass('open');
                        jQuery('.filters .filter.' + type).fadeIn();
                        jQuery('.filters').slideToggle('slow');

                    }

                }

            });

            /* BOX SHARE (HOVER) */

            jQuery('.box-share').hover(function() {
                if (jQuery(this).hasClass('open')) {
                    jQuery(this).removeClass('open');
                    jQuery('.hover-bts').removeClass('open');
                } else {
                    jQuery(this).addClass('open');
                    jQuery('.hover-bts').addClass('open');
                }
            });

            /* POPUP SHARES */

            $('.popup').popupWindow();

            /* SCROLL */

       /*      jQuery(window).scroll(function() {

                var scrollTop = jQuery(window).scrollTop();

                if (scrollTop > 48) {
                    jQuery('nav.search').removeClass('open');
                    jQuery('.bt-search').removeClass('active');

if (!$('body').hasClass("home")) {

                    jQuery('body').addClass('header-fixed');
}
                    jQuery('.menu2 li .box-scroll').removeClass('open');
                    jQuery('.menu2 li span').removeClass('active');
                } else {
                    if (jQuery('nav.search').hasClass('visible')) {
                        jQuery('nav.search').addClass('open');
                        jQuery('.bt-search').addClass('active');
                    }
                    jQuery('body').removeClass('header-fixed');
                }

                if (scrollTop > 300) {
                    jQuery('.bt-pag.fixed').addClass('hide');
                } else {
                    jQuery('.bt-pag.fixed').removeClass('hide');
                }

            }); */

            /* CLICK VOTE HEART */

         

            /* MENU MOBILE */

            jQuery('body').prepend('<div class="visible-xs visible-sm" id="menu-mobile"><span class="bt-menu-close">Close</span><span class="bt-menu textual">Menu</span><span class="bt-menu lines">Menu</span><div class="wrapper-menu"></div></div>');
            jQuery('#header nav.main ul.menu').clone().appendTo('#menu-mobile .wrapper-menu');
            jQuery('#header nav.search .search-text').clone().appendTo('#menu-mobile .wrapper-menu');
            jQuery('#header nav.main .others').clone().appendTo('#menu-mobile .wrapper-menu');

jQuery("#menu-mobile .bt-menu").click(function() {
                if (jQuery("#menu-mobile").hasClass('open')) {
                    jQuery("#menu-mobile").removeClass('open');
                } else {
                    jQuery("#menu-mobile").addClass('open');
                }
            });


jQuery("#menu-mobile .bt-menu-close").click(function() {
                    jQuery("#menu-mobile").removeClass('open');
         
            });






            jQuery('#menu-mobile .dropdown_ts').on('click', function() {
                jQuery(this).find('a:first').removeAttr("href");
                jQuery(this).find('ul').slideToggle();
            });

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                jQuery('#menu-mobile').addClass('is-mobile');
            }

            /* NEWSLETTER */

         

            /* LOGIN */

            jQuery('.open_login').click(function(e) {
                e.preventDefault();
                var $this = jQuery(this);

                $.fancybox.showLoading();

                $.ajax({
                    type: 'get',
                    url: $this.data('url'),
                    success: function(data) {
                        $.fancybox(data, {
                            'minWidth': 650,
                            'height': 'autoSize',
                            'padding': 50
                        });
                    }
                });
            });

        },
        addFancyBox: function() {
            jQuery('.fancybox').fancybox();
        },
        submitFilterForm: function() {
            var searchItems = jQuery('.searchitems input:hidden');
            var whereItems = jQuery('.box_search .actions input');

            var $form = jQuery('#temp_form_search')
                .append(searchItems)
                .append(whereItems.clone());

            $form.submit();

            jQuery('.box_search .filter li').unbind('click');
            jQuery('nav.menu .searchitems').off('click', 'span', AW.removeTag);
            jQuery('.box_search .actions').off('change', 'input:checkbox', AW.submitFilterForm);
        },
        removeTag: function() {
            jQuery(this).remove();

            AW.submitFilterForm();
        },
        showHideTips: function() {
            // Show/Hidde tips
            jQuery('.form-submit').on('click', 'li', function() {
                jQuery(".form-submit .tip").hide();
                var $tip = jQuery(this).find('.tip');
                if ($tip.length) {
                    if ($tip.hasClass('error')) {
                        $tip.filter('.error').fadeIn('fast');
                    } else {
                        $tip.addClass('current').fadeIn('fast');
                    }
                }
            });
        },
        addDiscountLetter: function() {
            jQuery(".discount_letter").live('keydown', function() {
                var total = jQuery(this).attr('rel') - jQuery(this).val().length;
                if (total < 0 && e.keyCode != 46 && e.keyCode != 8) {
                    return false;
                }
                jQuery(this).parent().find(".tip").text(total + " characters remaining.");
            });
        },
        addItemForm: function(collectionHolder) {
            // Get the data-prototype we explained earlier
            var prototype = collectionHolder.attr('data-prototype');

            // Replace '__name__' in the prototype's HTML to
            // instead be a number based on the current collection's length.
            var id = collectionHolder.children().length;
            var newForm = prototype.replace(/\__name__/g, id);
            // Display the form in the page in an li, before the "Add a item" link li
            collectionHolder.append(newForm);

            return id;
        },
        addCountdownNominee: function() {
            jQuery('.countdown_nominee').each(function() {
                var $this = jQuery(this);
                var time = Number($this.data('time')) * 1000;
                var date = new Date(time);
                $this.countdown({
                    until: date,
                    format: 'DHMS'
                });
            });
        },
        addFollowAndUnfollow: function() {
            jQuery('.follow, .unfollow').live('click', function(e) {
                e.preventDefault();
                var $this = jQuery(this);
                if ($this.data('url') !== '') {
                    $.ajax({
                        type: "POST",
                        url: $this.data('url'),
                        success: function(data) {
                            $this.parent().html(data);
                        }
                    });
                }
            });
        }
    };

    jQuery(document).ready(function() {
        AW.initialize();
    });

    window.AW = window.AW || {};
    window.AW = AW;
})(window, window.jQuery);

/* Menu Mobile Scroll */

jQuery(document).ready(ScrollMenuMobile);
jQuery(window).resize(ScrollMenuMobile);


function ScrollMenuMobile() {
    jQuery('.wrapper-menu').css('height', jQuery(window).height() + 'px');
}

function checkAdBlock() {

    var retVal = false;
    if ($.isAdblockOn === undefined) {
        retVal = true;

    }

    return retVal;

}



/ * Hide Nav Filters * /

function hideFilters() {
    jQuery('nav.search .dropdown_ts').removeClass('active');
    jQuery('nav.search, .filters').removeClass('open');
    jQuery('.filters, .filters .filter').hide();
}