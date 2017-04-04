//		The Mill JS
// 		Author TWB, BL, e3 2009-2010


/* Javascript stylesheet */
document.write("<link rel=\"StyleSheet\" href=\"/theMillAssets/css/theMillJS.css\" type=\"text/css\" media=\"screen\" />");

var mobile;
$(document).ready(function() {

	var mobile = fnDetectMobile();// check mobile
	
	// txt boxes
	fnInputTxtSwitch();
	
	oldWidth = $('body').width();
	oldHeight = parseInt((typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight));
	
	// when the window is resized
	$(window).resize(function() {
		// check if it's wide enough to be the wide layout
		fnWidthChange();		
		// TO DO adjust slider to nearest whole video thumbnail
		fnNewsList();
		fnShowreelsList();
	});
			
	
	// Preload all images with 'roll' class
	$('.roll').each(function() {
		$(this).preloadImg();
	});
	
	// Apply hover to image with class 'roll' via their parent anchor.
	$('a').each(function() {
		oFirstChild = $(this).children(':first');
		if (oFirstChild.is('img')) {
		  if (oFirstChild.attr('class') == 'hov') {
		    $(this).hover(
		      function () {
		        $(this).children(':first').swapImg();
		      }, 
		      function () {
		        $(this).children(':first').swapImg();
		      }
		    );
		  }
		}
	});
	
	//Apply hover to image without wrapping anchors (e.g. form input image)
	$('input.hov').hover(
		function () {		
		  $(this).swapImg();
		}, 
		function () {
		  $(this).swapImg();
		}
	); 
	
	fnWidthCheck();
	fnLoadToolsDivs();
	fnResize();
	fnTabs();
	fnFooterClocks();
	fnWrkCats();
	fnHomeSlide();
	fnSectShowHide(true);
	fnPeopleList();
	fnNewsList();
	fnShowreelsList();
	fnEmailForm();
	fnVideoPlayer();
	fnSubNav();
	fnShowReels();  
	fnColourists();  
	mobileColourists();
	fnWhoWeAre();
	fnBindPlaylistEvents();
	fnPlaylistSave(); // saving playlist - deals with dummy cookie too
	fnPlaylistSend(); // Sending playlist
	fnPlaylistEmpty(); //empty playlist
	
	fnFormDefaultText(); // init form placeholder text swapouts
	fnGallery();
	
    fnPagerSlider();

}); // end onload/ready

// mobile checkinitially looking for iphone/ipod touch and iPad

var bIphone,bIpod,bIpad;
function fnDetectMobile(){	
	var mobCheck;	
	var agent=navigator.userAgent.toLowerCase();
	bIphone = ((agent.indexOf('iphone')!=-1));
	bIpod = ((agent.indexOf('ipod')!=-1));
	bIpad = ((agent.indexOf('ipad')!=-1));
	if (bIphone || bIpod || bIpad) {
		mobCheck = true;
	}
	else{		
		mobCheck = false;	
	}	
	return mobCheck;	
}

// Global Variables
var wide,enhanced;

var oldWidth,oldHeight;

var fsclerkLight = {src: "/theMillAssets/flash/fsclerkenwell-light.swf"};
var fsclerk = {src: "/theMillAssets/flash/fsclerkenwell.swf"};

var screenWidth = 1263;
var screenHeight = 860;

// Find width of body, if it's big enough, serve the wider layout
function fnWidthCheck(){
	
	h = (typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight);
	w =	$('body').width();
	
	
	if(w > screenWidth /*&& h>screenHeight*/){
		$('body').addClass('wide');
		wide=true;		
		fnImageSwap();
		fnFlashSwap();
		fnPlaylistSlider();	
		$.cookie('theMillWidth', 'wide', { path: '/' }); // remember that we're wide - server writes class of wide on body
		
		
	}else{
		$('body').removeClass('wide');
		wide=false;	
		fnImageSwap();
		fnFlashSwap();
		fnPlaylistSlider();
		$.cookie('theMillWidth', '', { path: '/' }); // wipe the wide cookie
		
	}
}

function fnWidthChange(){
	
	newWidth = $('body').width();

	if((newWidth > screenWidth /*&& newHeight>screenHeight*/) &&  (oldWidth<= screenWidth /*|| oldHeight<=screenHeight*/)){	
		
		$('body').addClass('wide');
		wide=true;		
		fnImageSwap();
		fnFlashSwap();
		fnPlaylistSlider();
		launchVidInPage();
		fnHomeSlideStop();
		//fnHomeSlide();
		oldWidth = $('body').width();
		//oldHeight = parseInt((typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight));		
		
		$.cookie('theMillWidth', 'wide', { path: '/' }); // remember that we're wide - server writes class of wide on body
		
	} else if((newWidth<=screenWidth && oldWidth>screenWidth) /*|| (newHeight<=screenHeight && oldHeight>screenHeight)*/){
		
		$('body').removeClass('wide');
		wide=false;		
		fnImageSwap();
		fnFlashSwap();
		fnPlaylistSlider();
		launchVidInPage();
		fnHomeSlideStop();
		//fnHomeSlide();
		oldWidth = $('body').width();
		//oldHeight = parseInt((typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight));
		
		$.cookie('theMillWidth', '', { path: '/' }); // wipe the wide cookie
		
	}
}

function fnLoadToolsDivs() {
	// dont ajax in on the non-js pages - redundant logic?
	if($('#eCont').length>0 || $('#ePlay').length>0 || $('#eFollow').length>0 ){		
		fnPlaylistSlider();
		return false;		
	}
	else{	
		// add a loading div - delete it later & a feedback div used by add to playlist functionality
		$('#e').append('<div id="loader" class="hide"></div>');		
		
		// load the contact page in to the loader div
		if ($('#tContact').length>0) {
      $('#loader').load($('#tContact').attr('href').replace('#',' #'), function(){
        //add it to the expanding content div
        $('#e').append($('#eCont'));
        fnContacts();
      });
		}
		
		// load the contact page in
    if ($('#tFollowUs').length>0) {
      $('#loader').load($('#tFollowUs').attr('href').replace('#',' #'), function(){
        $('#e').append($('#eFollow').hide());
      });
		}
		
		// load the contact page in
    if ($('#tPlaylist').length>0) {	
    	
			// caching issue - add a random number to the querystring - unix timestamp as an integer will do.
			var time = Math.round(new Date().getTime() / 1000); 		
			pUrl = $('#tPlaylist').attr('href').replace('#','?ajax=true&refresh='+time+' #'); // url with unix timestamp attached
			
			$('#loader').load(pUrl, function(){
        $('#e').append($('#ePlay'));
        fnImageSwap($('#ePlay'));
        fnPlaylistSlider(); // must go before fnPrepToolsDivs()
        fnPrepToolsDivs();
      });		
		}
		
		// add stuff to handle feedback messages
		$('#e').append('<div id="feedBack" class="panel cfx"><div class="inr"><p><a href="#" class="showPL"></a></p></div></div>');
		$('#tools').append('<a id="tFeedback" href="#feedBack" class="hide"></a>');
		//$('#feedBack').hide();
		
	}	
}

function fnPrepToolsDivs() {		
	
	// declare the variables
	var $targ,$wrap;
	$wrap = $('#eW');
	
	// hide the panels
	$('#eW .panel').hide();
	fnTabs(); // apply the tabs in the ajaxed 
	// bind the event functionality
	$('#tools a').live('click', function() {
		
		$('#ePlay:hidden').find('div.panel').hide(); // try to fix bug where panels arent all hidden
		
		// set target panel
		$targ = $($(this)[0].hash);	
	
		// if the expanding nav wrapper is currently being animated 
		if($('#eW,#eW div').is(':animated')){			
			return false; // prevent halting mid-animation
		}		
		// if not animating
		else{
			
			// there's only one div now						
			$wrap.addClass('open');
			// the panel we want is already open - close it
			if($targ.hasClass('open')){ 
				$targ.slideUp(600,"easeInOutQuad",function(){
					$wrap.removeClass('open');
				}).removeClass('open');				
				$(this).removeClass('selected');
			}
			
			// the panel we want is not open			
			// - slideUp current panel
			// - slideDown target panel			
			
			else if($('#e div.open').length>0){				
				//$wrap.addClass('open');
				$('#e div.open').slideUp(600,"easeInOutQuad").removeClass('open');	
				//$targ.delay(600).slideDown(600, "easeInOutQuad").addClass('open');		
				$targ.delay(600).slideDown( {
					duration:600,
					easing:"easeInOutQuad",
					complete:function(){
						fnOpened($(this));						
					}					
				}).addClass('open');		
				$('#tools a').removeClass('selected');
				$(this).addClass('selected');
			}
			
			// OR
			// all panels are closed
			// - open the target one			
			else{				
				$wrap.addClass('open');
				//$targ.slideDown(600,"easeInOutQuad").addClass('open');	
				$targ.slideDown({
					duration:600,
					easing:"easeInOutQuad",
					complete:function(){
						fnOpened($(this));						
					}					
				}).addClass('open');				
				$('#tools a').removeClass('selected');			
				$(this).addClass('selected');
			}		
			return false;
		}							
		return false;
		
	});
	$('#eW .panel').hide();
}

function fnOpened($obj) {	
	
	// this is for playlist opening animation only
	if($('#vid').length>0){		
		$('#vid')[0].respond('pause'); // pause the video in the page if there is one				
	}
	
	if($('#plScroll ul li').length>0){
		$('#plScroll ul li:first a.vid').click(); // click the first playlist thumbnail if it's there, to add the flash to the  - should it autoplay?			
	}
	
	setTimeout(function() {
		if($('#ePlay.open').length>0){			
			if($('#ePlayVidHolder').length>0){			
				$('#ePlayVidHolder')[0].respond('pause'); // pause the video in the page if there is one	
			}		
		}		
		if($('#vid').length>0){		
			$('#vid')[0].respond('pause'); // pause the video in the page if there is one				
		}				
	}, 500);	
			
}

// hide the expanding nav wrapper, but allow the children to have layout
function fnHideEW() {
	$('#eW').css({display: 'block', height: 0, oveflow: 'hidden',padding:0});	
}
// show the expanding nav wrapper
function fnShowEW() {
	$('#eW').css({height: 'auto', oveflow: 'visible',padding: '0 0 20px 0'});	
}

// swap flash from med to lrg or vice versa
function fnFlashSwap($obj) {
	if($obj){
		// set to the passed in object
		//$target = $obj.find("img");
	}
	// find the flash on the page and swap it
	
	// find sifr and re-draw?	
}

// swap images from med to lrg or vice versa
function fnImageSwap($obj) {
	var $target;
	if($obj){
		$target = $obj.find("img");
	}
	else{
		$target = $("img");
	}
	$target
		.each(function() {
			
			//for flat build			
			/*
			if(wide){
				$(this).attr("src",$(this).attr("src").replace("_med","_lrg"));									
	        }else{
				$(this).attr("src",$(this).attr("src").replace("_lrg","_med"));				
			}					
			*/
			
			// for live	- uses rel not _med/_lrg			
			// Umbraco CMS resizable images have the widths in a rel tag (like rel="resize=281,233") and in the image src (like width=288&)
			if($(this).attr("rel") && $(this).attr("rel").indexOf("resize=")==0){					
				var largeWidth = $(this).attr("rel").substr(7).split(',')[0]; // strip the resize= and split by , to get large and small
        var smallWidth = $(this).attr("rel").substr(7).split(',')[1];
      }
	        
			if(wide){
        // going from small to large, or large on load			
        $(this).attr("src",getResizedVideoImageURL($(this).attr("src"), largeWidth ,"_lrg"));
			}
			else{				
        // going from large to small, or small on load
        $(this).attr("src",getResizedVideoImageURL($(this).attr("src"), smallWidth ,"_med"));
			}
			
		});	
}

function fnPlaylistSave() {
	// save playlist only when clicked - so store temp copy of playlist as per when loaded
	
	// bind
    $('#plSaveBtn input.btn').live('click', function() {
        var confirmSave = '<div id="emailForm" class="confirmSave"><h2 class="irt"><span style="background: url(/umbraco/TigerLive.aspx?tid=2&amp;text=Save+Playlist) no-repeat scroll 0 0 #fff;"></span>Save Playlist</h2><div id="confirmSaveMessage"><p>Are you sure you want to save this Playlist?</p><p>Any previous Playlists will be lost.</p><p><a href="#" id="confirmSave">Yes</a><a href="#" id="cancelSave">No</a></p></div></div>';
        var close = '<a href="#" title="Close" class="close">Close</a>';        
        $.blockUI({ css: {
            'background': 'none',
            'border': '0',
            'top': '30%',
            'width': '570px',
            'left': '50%',
            'margin-left': '-275px',
            'cursor': 'default'
        }, overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.9
        }, message: confirmSave + close
        });
        function unBlock() {
            $.unblockUI();
            //$('#vidHolder').html('<div id="vid"></div>');
            $('body').removeAttr('style');
            launchVidInPage();
        }
        $('.blockOverlay, .close').click(function() {
            unBlock();
            return false;
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                unBlock();
            }
        });
        $('#confirmSave').live('click', function() {
                  	
        		// when a user has just created a playlist and wants to name it
        		// just save the playlist title - leave the playlist cookie alone, its handled by adding the videos
        		// when a user has reordered, deleted or changed name
        	
            
            var plName = $('#playlist_name').val();
            var emailAdd = $('#your_email').val();            
            
            // submit the form via ajax with the cookie value (cookie should be passed automatically)
            $.get('/my-playlist.aspx?txtSavePlaylistName='+escape(plName)+'&txtSavePlaylistEmail='+escape(emailAdd)+'&sendsavedplaylist=true', {}, function(res, status) {
                // ASPX returns OK if it sent OK.
                if ((status == "success" || status == "notmodified") && res == 'OK') {
                	
                		// set the playlist name on the screen
				            $('#ePlayShare h2 strong').text(plName);
				            $('#ePlayShare h2 span').css('background', '#fff url(/umbraco/TigerLive.aspx?tid=2&text=' + escape(plName) + ') 0 0 no-repeat');
										// save playlist title as 
				            $.cookie('theMillPlaylist-title', plName, { expires: 10000, path: '/' }); 
				            $.cookie('theMillPlaylist', getPlaylistValues(), { expires: 10000, path: '/' }); 
										
				            // return success message
                    $('#confirmSaveMessage').html('<p>Your playlist has been saved and sent to your email address.</p>');                    
                } else {
                    $('#confirmSaveMessage').html('<p>Sorry, there was a problem sending your playlist: ' + res + '. Please try again.</p>');
                }
            });
            return false;
        });
        $('#cancelSave').live('click', function() {           
            $('a.close').click(); // submit the form
        });
        return false;
    });	
	
	// if there's a cookie, copy it to temp version - session cookie
	if($.cookie('theMillPlaylist') != null){	
		var curCookie = $.cookie('theMillPlaylist'); 
	}
	
}

// loop 
function getPlaylistValues() {
	// loop playlist LI As and pull out the wId
	var newCookieValue = 'delete';
	$('#plScroll li a.vid').each(function() {
		var plVidJSON = getVidObjectsFromURL($(this).attr('href'));		// get JSON object from URL 
		newCookieValue += ','+plVidJSON.wId;		
	});
	newCookieValue = newCookieValue.replace('delete,','');	
	return newCookieValue;		
}

function fnPlaylistSend() {
	// save playlist only when clicked - so store temp copy of playlist as per when loaded	
	// bind
    $('#plSendBtn input.btn').live('click', function() {
        var confirmSave = '<div id="emailForm" class="confirmSend"><h2 class="irt"><span style="background: url(/umbraco/TigerLive.aspx?tid=2&amp;text=Send+Playlist) no-repeat scroll 0 0 #fff;"></span>Send Playlist</h2><div id="confirmSendMessage"><p>Sending...</p></div></div>';
        var close = '<a href="#" title="Close" class="close">Close</a>';
        // comeback
        $.blockUI({ css: {
            'background': 'none',
            'border': '0',
            'top': '30%',
            'width': '570px',
            'left': '50%',
            'margin-left': '-275px',
            'cursor': 'default'
        }, overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.9
        }, message: confirmSave + close
        });
        
        // dont need to confirm this time
        
        // Get form values.
        var txtPlaylistName = $('#txtPlaylistName').val();
        var txtRecipientEmail = $('#txtRecipientEmail').val();
        var txtYourName = $('#txtYourName').val();
        var txtYourEmail = $('#txtYourEmail').val();
        
        // submit the form via ajax with the cookie value (cookie should be passed automatically)
        $.get('/my-playlist.aspx?txtPlaylistName='+escape(txtPlaylistName)+'&txtRecipientEmail='+escape(txtRecipientEmail)+'&txtYourName='+escape(txtYourName)+'&txtYourEmail='+escape(txtYourEmail)+'&sendplaylist=true', {}, function(res, status) {
            // ASPX returns OK if it sent OK.
            if ((status == "success" || status == "notmodified") && res == 'OK') {
                $('#confirmSendMessage').html('<p>Your playlist has been sent to the recipients entered.</p>');
            } else {
                $('#confirmSendMessage').html('<p>Sorry, there was a problem sending your playlist: ' + res + '. Please try again.</p>');
            }
        });

        function unBlock() {
            $.unblockUI();
            $('#vidHolder').html('<div id="vid"></div>');
            $('body').removeAttr('style');
                    
            launchVidInPage();
        }
        $('.blockOverlay, .close').click(function() {
            unBlock();
            return false;
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                unBlock();
            }
        });

        return false;
    });	
	
}

function fnAdjustScrollDiv() {
	var $scrollDiv = $("#plScroll");
	var vids = $('#ePlayList ul li').length;
	var x = wide ? 14 : 34; // gutter between thumbnails - logic for wide layout or not	
	var w = 208; // width of thumbnail	
	var thumbW = w + x; // width of thumbnail	
	$("ul:first",$scrollDiv).width((thumbW*vids));		
	fnPlaylistSlider();
	//fnUpdateSlider(); // adjust slider
}
function fnPlaylistSlider() {	
	
	if($("#cW #ePlay").length > 0){ // if we're on the standalone playlist page		
		if($("#plScroll li a").length > 0){
			$("#plScroll li:first a.vid").click(); // click the first thumb so it puts the flash in the page (and plays)
		}
	}
		
	// if browser is resized, then re-write the video 
	if($("#plScroll li.nowPlaying").length > 0){
		$("#plScroll li.nowPlaying a.vid").click()
			.parent().addClass('nowPlaying');//default click will toggle off the nowplaying class
	}
	
	//hide the scrollbar
	$('#plScroll').css('overflow','hidden');
	$('#ePlayList input,#ePlayList label').remove();
	$('#ePlayVid').wrapInner('<div id="ePlayVidHolder" />');
	
	// wide is set in fnWidthCheck()
	var x = wide ? 14 : 34; // gutter between thumbnails - logic for wide layout or not	
	var w = 208; // width of thumbnail	
	var thumbW = w + x; // width of thumbnail	
	var vids = $('#ePlayList ul li').length;
	
	// scrolling div
	var $scrollDiv = $("#plScroll");
	var handleWidth = 99;
	
	// $.slider vars
	//var myMax = wide ? 984: 822;
	var trackW = $('#track').width();
	var perPage = wide ? 5 : 4;	
	var slideStep = Math.floor(trackW/(vids-perPage+1));
	var pages = Math.ceil(vids / perPage);
	var scrollStep = thumbW;	
	var targPoint=0;
	
	// adjust scrolling div	
	$scrollDiv.find("ul:first").width((thumbW*vids));
	//fnAdjustScrollDiv();
	
	
	//var ul = $scrollDiv.find("ul:first");
	
	// track the slider's value
	var stopped=false;
	var coeff = trackW / vids; // this is the value you need to figure out "how many videos" the handle slider moved	
	var curVid = 0;	
	var minVids = wide ? 5 : 4;
	
	if(vids > minVids){			
		//$('#trW').attr('style','');		
		$("#track").css('pointer','default');				
		$('#plScroll').scrollLeft(0);
		$("#track").slider({
			value:0,
			min: 0,
			max: trackW-handleWidth,
			step: slideStep, // number of steps = number of videos - videos shown in 1 page
			animate: true,			
			slide: function(event, ui) {						
				x = wide ? 14 : 34; // recalc in case resized window to wide/narrow
				thumbW = w + x; // recalc if resized
				var xx =  Math.round(ui.value/coeff);						
				//calc which vid you're on and use vid number to move along scrolling div
				if(xx!=curVid){$('#plScroll').stop().animate({"scrollLeft": getTargetPoint(ui,thumbW,coeff)}, 400, 'easeInOutQuad');}							
				curVid = xx;
			}				
		});	
	}else{		
		$('#plScroll').scrollLeft('0'); // reset scrolling div
		//$('#trW').css('background','none'); // remove bg of track
		$("#track").slider("destroy");		
		$("#track").css('cursor','default');		
	}

	if(vids > 1){
		var $playAllBtn = '<a href="#" class="all hov" id="plPlayAll">Play all</a>';	
		$('#ePlayShare div.dots').append($playAllBtn);
	}
		
	// show-hide the move and delete btns
	$("#plScroll ul li").hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	})
	.find("a").focus(function() {
		$(this).parents("li:first").addClass('hover');		
	})
	.blur(function() {
		$(this).parents("li:first").removeClass('hover');
	});	

	// click to play first video - find thumbnail with 
	// same vid id in href and click it - functionality already done (a.vid)
	$("#ePlayVid a").live('click',function(){
		var toFind = $(this).attr('href').split('/file/')[1].split('/')[0];
		$('#plScroll a:first[href*="'+ toFind +'"]').click();		
		return false;
	});
	
	$("#plScroll a.vid").click(function() {		
	
			$(this).parents("ul").find("li.nowPlaying").removeClass("nowPlaying");
			$(this).parents("li:first").addClass("nowPlaying");
			fnPlayVideo($(this));
			return false;
	
	});
	
	// sort functionality
	$("#plScroll a.right").click(function() {		
		$(this).parents('li:first').removeClass("hover").moveLeft();
		return false;
	});
	// sort functionality
	$("#plScroll a.left").click(function() {
		$(this).parents('li:first').removeClass("hover").moveRight();
		return false;
	});
	
	// Delete functionality
	$("#plScroll a.del").click(function() {	
				
		var $parLI = $(this).parents('li:first');
		
		var vidJSON = getVidObjectsFromURL($('a.vid',$parLI).attr('href'));		// get wId 
		fnRemoveFromPlaylist(vidJSON.wId);// remove from cookie
		
		//
		var iPos = $("#plScroll ul li").index($parLI); // zero index 
		iPos++; // increase to match length calcs later
						
		$parLI
			.css({width: thumbW, padding: 0})
			.animate({"opacity":"0"}, 300,
				function() {
					// remove items - allows smoother width animation					
					$(this)
						.animate({"width":"0"},400,
							function() {
								$(this).remove();
								vids = $('#ePlayList ul li').length;
								$scrollDiv.find("ul:first").width((thumbW*vids));								
							});
			});			
						
							
		fnUpdateSlider();
		fnUpdateSliderPages(); // required? There is no concept of pagination as the slider moves 1-by-1		
		//fnReplaceCurrentVideo(iPos);		
		//fnUpdatePlaylistTitle(sTitleReplace);		
		return false;
	});
			
	
	$("#plPlayAll") .live('click', function(){		
		// play first 
		$('#plScroll li:first a.vid').click();
		return false;
	});
	
	
}

function fnPlaylistEmpty() {
	// save playlist only when clicked - so store temp copy of playlist as per when loaded
	
	// bind
    $('a#emptyList').live('click', function() {
        var confirmEmpty = '<div id="emailForm" class="confirmEmpty"><h2 class="irt"><span style="background: url(/umbraco/TigerLive.aspx?tid=2&amp;text=Empty+Playlist) no-repeat scroll 0 0 #fff;"></span>Empty Playlist</h2><div id="confirmEmptyMessage"><p>Are you sure you want to empty this Playlist?</p><p><a href="#" id="confirmEmpty">Yes</a><a href="#" id="cancelEmpty">No</a></p></div></div>';
        var close = '<a href="#" title="Close" class="close">Close</a>';        
        $.blockUI({ css: {
            'background': 'none',
            'border': '0',
            'top': '30%',
            'width': '570px',
            'left': '50%',
            'margin-left': '-275px',
            'cursor': 'default'
        }, overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.9
        }, message: confirmEmpty + close
        });
        
        if (fnDetectMobile())
            $('video#playlistVid').hide();
        
        function unBlock() {
            $.unblockUI();
            //$('#vidHolder').html('<div id="vid"></div>');
            $('body').removeAttr('style');
            launchVidInPage();
            
            if (fnDetectMobile())
                $('video#playlistVid').show();
        }
        $('.blockOverlay, .close').unbind().click(function() {
            unBlock();
            return false;
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                unBlock();
            }
        });
        $('#confirmEmpty').live('click', function() {
            
        	//empty playlist message        	
        	var emptyMsg ='<div class="cfx" id="plEmpty"><h4>Your playlist is currently empty</h4><p>To make a playlist simply select a piece of work and click the "add to playlist" button. <em>You can then save for later viewing or share with a friend.</em></p></div>';
        	
        	//wipe the cookies.
			$.cookie('theMillPlaylist',null, {path: '/'});
			
        	//set the message to the empty message and close the playlist
        	$('#ePlay .inr:first').html(emptyMsg);
        	$('a.close').click();
        	$('a#tPlaylist').click();
        	//replace the added button with add button.
        	fnReplaceWithAdd();
        	return false;

        });
        $('#cancelEmpty').live('click', function() {
            $('a.close').click(); // close the form
            return false;
        });
        return false;
    });	
	
}

function fnReplaceCurrentVideo(i) {
	/* @param i: integer denoting array position in list of LI thumbnails */
	var $aLis = $("#plScroll li");
	if($aLis.length == i){
		// deleting the last one		
		i--;		
		$aLis.eq(i);
	}else{
		// deleting any but the last one
		// use the i as it will be replaced by the next one
		// dont need to do anything		
	}
	// either get the flash video player to display the video for li>a at position i
	// or display an image placeholder for the video	
	sTitleReplace = $aLis.eq(i).find('a.vid').attr('href');
	return sTitleReplace;
}

// unused?
function fnPauseVideo(oObj) {
	// pause flash video player	
	//document.getElementById(mymovie).PausePlay(); 	
	oObj.PausePlay();	
	
}

function fnPlayVideo($a) {
	var vidInfo = getVidObjectsFromURL($a.attr('href')); // for testing	

	if(fnDetectMobile() == false)
	{
		launchPlaylistInPage(vidInfo);							
	}
	else if(bIpad == true)
	{		
		// function for ipad specifically atm
		fnHTML5Video(vidInfo);		
	}// other devices could go after this, or do a switch
	
	// Update now playing text
	var sTitle = $("strong",$a).text();	
	fnUpdatePlaylistTitle(sTitle);
	
	// Update find out more link
	$("#ePlayShare a.arr").attr('href', vidInfo.wUrl);	
}

function fnUpdatePlaylistTitle(sText){	
	$("#ePlayShare p.now strong").text(sText);	
}

function fnUpdateSliderPages() {
	var sVids = $('#ePlayList ul li').length;	
	$('#items').text(sVids-1);
}

function fnUpdateSlider() {
	var uVids = $('#ePlayList ul li').length;
	var uTrackW = $('#track').width();
	var uPerPage = wide ? 5 : 4;	
	var uSlideStep = Math.floor(uTrackW/(uVids-uPerPage));		
	$("#track").slider('option', 'step', uSlideStep);		
}



// return calculated targetPoint - x axis value the scrolling div needs to go to
function getTargetPoint(ui,thumbW,coeff) {		
	// place to scroll to = width of video thumb incl gutter * number of steps(videos) we've moved - slider handle position / step value;
	var targetPoint = thumbW * ui.value/($('#track').slider( 'option' , 'step' ));
	
	return targetPoint;
}

// add move left/right to jquery - extend
$.fn.moveRight = function() {
    before = $(this).prev();
    $(this).insertBefore(before);
};	
$.fn.moveLeft = function() {
    after = $(this).next();
    $(this).insertAfter(after);
};

/*
Cookie control for playlist
*/

function fnBindPlaylistEvents() {	
	$('a.addToPL').live('click',function(){	
		$('#eW div.panel').not('.open').hide();
		fnAddToPlaylist($(this).attr('href').split('wid=')[1]);
		fnReplaceWithAdded();
		return false;
	});

	$('#wrkLst a.add').live('click',function(){
		$('#eW div.panel').not('.open').hide();
		fnAddToPlaylist($(this).attr('href').split('wid=')[1]);
		fnReplaceWithAddedWork($(this));
		return false;
	});	
	
	$('#wrkLst .box').live('mouseenter',function(){
			$(this).find('a.add').show();
		}).live('mouseleave',function(){
			$(this).find('a.add').hide();
		});
	
	$('a.addedToPL').live('click',function(){
		$('#tPlaylist').click();
		return false;
	});
}

function fnReplaceWithAdded() {
	href = $('a.addToPL').attr('href');	
	$('a.addToPL').replaceWith('<a class="addedToPL" href="'+href+'">Added to My Playlist</a>');
}

function fnReplaceWithAddedWork(obj) {
	obj.replaceWith('<span class="added">Added to My Playlist</span>');
}

function fnReplaceWithAdd() {
	href = $('a.addedToPL').attr('href');
	$('a.addedToPL').replaceWith('<a class="addToPL hov" href="'+href+'" rel="nofollow">Add to my playlist</a>');
}

// for development only
function createDummyCookie(){
	$('#ePlay').append('<a href="#" id="cookieTest">ADD DUMMY COOKIE</a>');	
	$('#cookieTest') .click(function() {
		$.cookie('theMillPlaylist','1111,2222,3333,4444,5555,6666,7777,8888,9999,0000', { path: '/' });		
		return false;
	});
}

function fnPlaylistTitle() {
	var playlistTitle = ''; // get value of "title" input box from save form
	$.cookie('theMillPlaylist-title', title, {expires: 10000, path: '/'}); // create or set cookie
}

var toHide = null;
function fnAddToPlaylist(wId) {	
	// get value of playlist cookie, split string and get wIds (videos)
	var curCookieVal = $.cookie('theMillPlaylist');				
	if(curCookieVal == null){curCookieVal = '';};
	var wIds = curCookieVal.split(',');	
	var msg = '';		
	if(curCookieVal == ''){		
		$.cookie('theMillPlaylist', wId, {expires: 10000, path: '/'}); // create and set cookie
		msg = 'Content added. You currently have <strong>1</strong> item in your playlist.';
		updatePlaylistDivContent();
		fnFeedbackSlide(msg);
	} 
	else{				
		if(wIds.length >= 20){
			msg = 'You have reached the maximum number of playlist clips allowed. To add new content, please remove one from your playlist.';			
		}		
		else if($.inArray(wId, wIds) != -1){
			// feedback "already added"
			msg = 'Content is already added to your playlist. You currently have <strong>'+(wIds.length)+'</strong> items in your playlist.';			
		}
		else{			
			// add it to end
			$.cookie('theMillPlaylist',curCookieVal+","+wId, {expires: 10000, path: '/'});
			// feedback "added"
			msg = 'Content is added to your playlist. You currently have <strong>'+(wIds.length+1)+'</strong> items in your playlist.';			
		}		
				
		// reload the playlist div with new set of videos based on new cookie value
		updatePlaylistDivContent();
		fnFeedbackSlide(msg);
	}
	
	// wrap this in a timeout, so it doesn’t keep showing/hiding if you add lots of assets in sequence
	clearTimeout(toHide);
	setTimeout(function()
	{
	    $('#feedBack').slideUp(600, 'easeInOutQuad').removeClass('open');
	}, 2500);
}
function updatePlaylistDivContent() {
	
	// close the div, then clear out the content, then load it in
	if($('#ePlay.open').length > 0){
		$('#tPlaylist').click(); // close the div
	}
	
	// caching issue - add a random number to the querystring - unix timestamp as an integer will do.
	var time = Math.round(new Date().getTime() / 1000); 	
	
	url = $('#tPlaylist').attr('href').replace('#','?'+time+' #')+' > *'; // url with unix timestamp attached
	
	$('#ePlay').load(url, function(){	    
	  $('#ePlay').show(); // need to show it for the playlist slider to work correctly on ajax load (the wrapping div hides it)
		fnImageSwap($('#ePlay'));
	  fnPlaylistSlider();	
		fnTabs();		
		$('#ePlay').hide(); // hide it again
	});	
}

function fnRemoveFromPlaylist(wId) {
	var newCookieVal = $.cookie('theMillPlaylist').replace(wId,'.').replace(',.','').replace('.,','');	
	$.cookie('theMillPlaylist',newCookieVal, {path: '/'});
}

function fnFeedbackSlide(msg) {
	
	$('a.showPL').live('click',function(){
		$('#tPlaylist').click();
		return false;
	});
	
	//$('#feedBack a:first').html(msg);
	$('#feedBack p:first').html(msg);
	$('#tFeedback').click();
	
}

// configure sifr flash replacement
	// sifr 3
	sIFR.useStyleCheck = true;
	sIFR.activate();
	sIFR.replace(fsclerkLight, {selector: '.smlBlack', css: [ '.sIFR-root {leading: 6;}' ], wmode: "opaque"});	
	sIFR.replace(fsclerkLight, {selector: '#f h3', css: [ '.sIFR-root {color: #cecdcc;}'], wmode: "transparent" });	
	sIFR.replace(fsclerkLight, {selector: '#homeStrap,#strap', css:['.sIFR-root {color: #454544;leading:5;kerning:-2;font-weight:normal;}','.sIFR-root a{kerning:-2;color: #22AADC;text-decoration: none;}','.sIFR-root a:hover{ color: #22AADC; text-decoration: underline; kerning:-2; }'], wmode: "transparent" });	



/*Preload images*/
$.fn.preloadImg = function() {
  var sExt = '.'+getExt($(this).attr('src'));
  var sCurSrc = $(this).attr('src');
  var img = new Image();
  img.src = sCurSrc.replace(sExt,'_hover'+sExt);
};
/* Swap image src attributes to add or remove '_hov' */
$.fn.swapImg = function() {
  var sExt = '.'+getExt($(this).attr('src'));
  var sCurSrc = $(this).attr('src');
  var sNewSrc;
  if (sCurSrc.indexOf('_hover'+sExt) != -1) {
    sNewSrc = sCurSrc.replace('_hover'+sExt,sExt);
  } else {
    sNewSrc = sCurSrc.replace(sExt,'_hover'+sExt);
  }
  $(this).attr('src',sNewSrc);
};
/*Find the extension of the supplied filename*/
function getExt(f) {
  var ext;
  var aF = f.split('.');
  if (aF.length > 1) {
    ext = aF[aF.length-1]; 
  }
  return ext;
}

/** jqEM to detect font size changes **/
//set the text size that the default body computes to
var fontSize = 13;

$.jqem.bind(function(a,b,c) {		
	fnResize();
});
function fnResize(){	
	if( $.jqem.current() == fontSize) {					
		$('body').addClass('enh').removeClass('def');
		enh=true;
	}else if($.jqem.current() != fontSize){		
		$('body').removeClass('enh').addClass('def');		
		enh=false;
	};
};


function fnTabs() {
	if($('.tabs')){
		$('div.tabs').tabs({
			show: function(event, ui) {
				// get rid of the dots bg on the selected tab's previous sibling - for visual effect						
				var $par = $(ui.tab).parents('.ui-tabs-nav');
				$('a',$par).removeAttr('style');
				$('li',$par).eq(ui.index-1).find('a').css('background','none');	
				
				if($('div.sectList').length > 0){ // there's an accordion
					if($('div.open',ui.panel).length != 1 && !$(ui.panel).hasClass('jobApplicationForm')){
						$('div.sect:first h2:first a:first',ui.panel).delay('500').click();
					}
				}
			}
		});
		$('div.tabs ul:first li:last,div.tabs ul:first li:last a').addClass('last');
	}
}
	
function fnFooterClocks() {
	
  fnFooterClock("ft1Clock");
  fnFooterClock("ft2Clock");
  fnFooterClock("ft3Clock");
  fnFooterClock("ft4Clock");

}

function fnFooterClock(imageId) {

  var params = {wmode:"transparent"};
	var flashvars = {};
	var attributes = {};
	
	// get time from alt attr like "20:30:00"
	var time = $('#'+imageId).attr('alt');
	if (time != null) {
    var hours = parseInt(time.split(':')[0]);
    var minutes = parseInt(time.split(':')[1]);
    var seconds = parseInt(time.split(':')[2]);
    
    // Ensure hours are above zero (we might just subtract X to make it easy)
    if (hours < 0) hours += 12;

    swfobject.embedSWF("/theMillAssets/flash/clock.swf?hours=" + hours + "&minutes=" + minutes + "&seconds=" + seconds, imageId, "59", "59", "9.0.0",null,{id:imageId},params,attributes);
  }
}

function fnWrkCats(){
	if($('#filCat').length>0){
		$catW = $('#wrkCatW');
		$cat = $('#wrkCat #tabs div');
		$catB = $('#filCat #bCat');
		$title = $('#wrkT h2');
		//hide the category section
		$catW.hide();
		//set up the button to show it;
		$catB.click(function(){
			$catW.slideToggle();
			$catB.toggleClass('sel');
			return false;
		});
		
		$links = $('a',$cat);
	
		var delBtn = ' <a href="#" class="del" title="Remove this filter">Remove this filter</a>';
		
		$links.click(function(){
			//if it is disabled don't do anything;
			if($(this).hasClass('dis') || $(this).hasClass('sel')){
				return false;
			}			
			var txt = $(this).text();			
			//remove the del button
			$links.removeClass('sel').next('.del').remove();			
			//add the button and the class
			$(this).addClass('sel').after(delBtn);			
			// add loader gif to link - user feedback
			$(this).append('<img src="/theMillAssets/images/loader.gif" alt="loading" width="20px" style="position:absolute; left:-30px" id="loaderGif" />').parents('li').css("position","relative");			
			fnUpdateCatResults($(this).attr('href'),true);			// update and scroll to results
			return false;
		});
		
		// remove filter
		$('a.del',$cat).live('click',function(){
			
			$('input:radio',$cat).removeAttr('checked');
			$arr = $(this).prev('a.arr');
			
			// add loader gif to link - user feedback			
			$arr.append('<img src="/theMillAssets/images/loader.gif" alt="loading" width="20px" style="position:absolute; left:-30px" id="loaderGif" />').parents('li').css("position","relative");
			
			$arr.removeClass('sel');
			$(this).remove();
			
			//var newURL = $arr.attr('href').split('&cat=')[0]; // assumes URL has 						
			var newURL = $arr.attr('href').split('show=')[0]; // assumes URL has 						
			fnUpdateCatResults(newURL,false); // update and scroll to results
			
			return false;
		});
		
		// A-Z Links
		$('#az a').live('click',function(){
			$('#az a').removeClass('selected');			
			$(this).addClass('selected');
			return !fnUpdateCatResults($(this).attr('href'),true);
		});
		
		
	}
}

function fnUpdateCatResults(url,scroll)
{
	var scrollTo = (scroll == null) ? true : scroll;
	
	// get container
    var oScroller = $('#wrkLst');
    if (oScroller.data('theMillPagerSlider') == null)
        return false;
    
    // call it
    var sUri = (url.indexOf('page=') != -1) ? url : url+'&page=1';
    return oScroller.data('theMillPagerSlider').loadPage(sUri, { removeExisting: true, callback: function(data)
    {
        // callback function to update pager
        $('#az').html($('#az').html(), data);
//        if (scrollTo)
//            $('#az').scrollToTarg({ duration: 700 });
        fnImageSwap();
    }});		
}


function fnHomeFlash() {
	
	// this is mostly for the rawhtml, will change once we get a proper flash movie in
	
	if($('#home #hero #imgHolder').length){
	
		var w,h; // width and height
		if(wide) {
			w = "1104";
			h = "429";	
			swfSize = 	"_lrg";
		}
		else{
			w = "942";
			h = "342";		
			swfSize = 	"";
		}
		var params = {wmode:"opaque"};
		var flashvars = {};
		var attributes = {};
		swfobject.embedSWF("/theMillAssets/flash/homeHero"+swfSize+".swf", "imgHolder", w, h, "9.0.0",null,flashvars,params,attributes);		
	}
	
}

function fnSectShowHide(init){
	
	var toggleAll = false;
	
	var delay = 1000; //miliseconds
	
	var $first = $('div.sectList .sect:first');
	
	$('div.sectList').each(function(){
		if($(this).children('.sect').length>1){
			$('.sect', $(this)).each(
				function(){
					
					$(this).addClass('closed');
					$(this).find('.cont').hide();
					$(this).find('h2:first').wrapInner('<a href="#"></a>');
					
					$(this).find('h2:first a').click(
						function(){
							
							$first.find('.cont').clearQueue();
									
							$(this).parent().next('.cont').slideToggle('normal');
							if(toggleAll){
							$('.sect.open').not($(this).parents('.sect')).toggleClass('closed open')
								.find('.cont').slideToggle('normal');
								}
							$(this).parents('.sect').toggleClass('closed open');
							
							return false;
						});
				});
		}
		
	});
	
	
	
	function showFirst(){
		$first.addClass('first');
			if(!$first.parents('.jobApplicationForm').length){
				$first.find('.cont').delay(delay).slideDown('slow', function(){
				$(this).parents('.sect').toggleClass('closed open');
			});
		}
		
	}
		
	if($('#contacts').length<1){
		if(init){
			$(window).load(function(){
				showFirst();
			});
		}else{
			showFirst();
		}
	}
		
	
	
}


function fnNewsList(){
	if($('.newsList').length > 0){
		var x = 3;
		if($('body').hasClass('wide')){
			x = 4;
		}
		
		$('.newsList .sect ul li').removeClass('first');
		
		$('.newsList .sect ul li:nth-child('+x+'n+1)').addClass('first');

		
	}
}

function fnShowreelsList(){
	if($('.srList').length > 0){
		var x = 4;
		if($('body').hasClass('wide')){
			x = 5;
		}
		$('.srList .sect ul li').removeClass('first last');
		$('.srList .sect ul li:nth-child('+x+'n+1)').addClass('first');
		$('.srList .sect ul li:nth-child('+x+'n)').addClass('last');
		
	}
}

(function($)
{
    function TheMillPagerSlider(oEl)
    {
        this.init = function()
        {
            // work out num of pages and where we are
            this.iPages = parseInt(this.oContainer.find('.pager .left em').text());
            this.iCurrPage = parseInt(this.oContainer.find('.pager .left strong').text());
                        
            // grab page
            this.aoPage['p'+this.iCurrPage]  = this.oContainer.find('.panel').addClass('panel-id-'+this.iCurrPage);
            this.aoPager['p'+this.iCurrPage] = this.oContainer.find('.pager');
                            
            // create screen element
            this.oScreen = $('<div class="screen"></div>');
            this.oContainer.append(this.oScreen).height(this.oContainer.height()).addClass('scroller-js');
            
            // eventage
            var oRef  = this;
            var sId = this.oContainer.parent().attr('id');
            $('#'+sId+' a.next').live('click', function()
            {
                return !oRef.go(+1, $(this));
                return false;
            });
            $('#'+sId+' a.prev').live('click', function()
            {
                return !oRef.go(-1, $(this));
            });
            
            // don’t ask…
            $(window).resize(function()
            {
                oRef.handleResize();
            })

            // fix this—the height isn’t always calculated right on load
            setTimeout(function()
            {
                oRef.setHeight();
            }, 200);

            this.oContainer.data('theMillPagerSlider', this);
        }
        
        this.go = function(iDir)
        {
            // work out whether to reset when done
            var bResetOnComplete = ((arguments.length == 2) && arguments[1]);
            
            // work out where we are and where we want to be...
            var iCurr = this.iCurrPage;
            var iNext = this.iCurrPage + iDir;
            
            // if the next is out of range
            if ((iNext == 0) || (iNext > this.iPages))
                return true;
            
            // if we need to load the next page
            if ((typeof(this.aoPage['p'+iNext]) == 'undefined') && (arguments.length == 2))
                return this.loadPage(arguments[1].attr('href'));
            
            // work out scroll target (do actual scrolling on complete)
            var oTarg = null;
            if($('#azW').length >0)
                oTarg = $('#azW #az');			
			if(($('#searchWrk').length>0) && (this.oContainer.attr('id') == 'wrkLst'))
                oTarg = $('#searchWrk');
            if (($('#searchOther').length>0) && 
                ((this.oContainer.attr('id') == 'tNews') || (this.oContainer.attr('id') == 'tOther')))
                oTarg = $('#searchOther');
            
            // move everything about
            var oRef = this;
            var iDelta = this.oContainer.width() * iDir;
            var fCb = function()
            {
                oTarg.scrollToTarg({ duration: oRef.iScrSpeed });
                if (bResetOnComplete)
                    oRef.reset();
            }
            
            // move stuff
            if (iDelta != 0)
            {
                this.aoPage['p'+iCurr].css({ left: 0 }).animate({ left: '-='+iDelta+'px' }, this.iAnimSpeed, 'easeInOutQuint');
                this.aoPage['p'+iNext].css({ left: iDelta+'px' }).animate({ left: '-='+iDelta+'px' }, this.iAnimSpeed, 'easeInOutQuint', fCb);
            }
            else
                fCb();
                
            // upate the pagination
            this.oContainer.find('.pager').replaceWith(this.aoPager['p'+iNext]);
            this.oContainer.parent().find('.pagerSml .btns').replaceWith(this.aoPager['p'+iNext].find('.btns').clone());
            
            // ... and title
            if (this.oContainer.parent().attr('id') == 'searchWrk')
            {
                var sText = $('#searchWrk .count .right').text().replace('showing', 'Showing');
                var sBg   = '<span style="background: #FFF url(\'/umbraco/TigerLive.aspx?tid=10&amp;text='+escape(sText+' Results')+'\') top left no-repeat;"></span>';
                $('#searchWrk h2').html(sBg+'Work. '+sText+' Results');
            }
                        
            // set the height
            var oRef = this;
            setTimeout(function()
            {
                oRef.setHeight();
            }, 200);
                
            // update the pointer
            this.iCurrPage += iDir;
            return true;
        }

        this.loadPage = function (sUri)
        {            
            // 0. options
            var opt = $.extend({
                removeExisting: false,
                callback: null
            },
            (arguments.length == 2) ? arguments[1] : {});
                        
            // 1. find the page number, or drop out if none exists
            if ((aM = sUri.match(/page=(\d+)/)) == false)
                return false;
            var iPage = parseInt(aM[1]);
            
            // 2. work out the location
            var iDelta = (iPage == this.iCurrPage) ? 0 : this.oContainer.width();
            iDelta *= (iPage > this.iCurrPage) ? 1 : -1;
            var iPOff = iPage - this.iCurrPage;
            
            // 3. handle element containers
            var sKey = 'p'+iPage;
            if (typeof(this.aoPage[sKey]) == 'undefined')
                this.aoPage[sKey] = $('<div class="panel panel-id-'+iPage+'"></div>').css({ left: iDelta+'px' }).appendTo(this.oContainer);
                        
            // 4. load the content
            var oRef = this;
            this.screen(true, function()
            {
                oRef.aoPage[sKey].load(sUri+' #'+oRef.oContainer.attr('id')+' .panel>*', function(data)
                {
                    // update pager
                    oRef.aoPager[sKey] = $(data).find('#'+oRef.oContainer.attr('id')+' .pager');
                    
                    // handle screening and sliding
                    oRef.screen(false, function()
                    {
                        oRef.go(iPOff, opt.removeExisting);
                    });
                                        
                    // callback
                    if (typeof(opt.callback) == 'function')
                        opt.callback(data);
                });
            });

            return true;
        }
        
        this.reset = function()
        {
            // 1. grab a hold of the current page
            var sKey = 'p'+this.iCurrPage;
            var oRetain = this.aoPage[sKey];
            
            // 2. empty and reinstate the current pager array
            this.aoPage = {};
            this.aoPage[sKey] = oRetain;
            
            // 3. remove siblings of the current page
            oRetain.siblings('.panel').remove();
            
            // 4. empty pager
            oRetain = this.aoPager[sKey];
            this.aoPager = {};
            this.aoPager[sKey] = oRetain;
            
            return true;
        }
        
        this.screen = function (bShow, fCallback)
        {
            if (bShow)
                this.oScreen.fadeTo(this.iFadeSpeed, 0.9, fCallback);
            else
                this.oScreen.fadeOut(this.iFadeSpeed, fCallback);
        }

        this.handleResize = function()
        {
            // grab a width
            var aM, iW = this.oContainer.width(), iP;
            
            // if it’s the same, then don’t bother
            if (iW == this._iW)
                return true;
            this._iW = iW;
            
            // it’s different, so redraw
            for (idx in this.aoPage)
            {
                aM = idx.match(/p(\d+)/);
                iP = (aM[1] < this.iCurrPage) ? 0-iW : (aM[1] > this.iCurrPage ? iW : 0);
                this.aoPage[idx].css('left', iP+'px');
            }
            
            this.setHeight();
            
            return true;
        }
        
        this.setHeight = function()
        {
            this.oContainer.animate({
                height: this.aoPage['p'+this.iCurrPage].outerHeight(true) + this.aoPager['p'+this.iCurrPage].outerHeight(true)
            }, this.iAnimSpeed/2);
            return true;
        }
                
        this.iAnimSpeed = 800;
        this.iFadeSpeed = 600;
        this.iScrSpeed  = 500;
        
        this.oScreen    = null;
        this.iPages     = 0;
        this.iCurrPage  = -1;
        this.aoPage     = {};
        this.aoPager    = {};   // this is absurd
        this.oContainer = oEl;
        this._iW        = -1;
        this.init();
    }
    
    $.fn.millPagerSlider = function()
    {
        return this.each(function()
        {
            new TheMillPagerSlider($(this));
        });
    }
        
})(jQuery);

function fnPagerSlider()
{
    // need to do this after everything is loaded… *sigh*
    $(window).load(function()
    {
        $('div.scroller').millPagerSlider(); 
    });
}

function fnEmailForm(){
	var button = '<li><a href="#" class="email hov">Email</a></li>';
	var close = '<a href="#" title="Close" class="close">Close</a>';
	
	$('.shareLinks ul').append(button);
	
	$('#emailForm').hide();
	
	$('.shareLinks a.email').click(function(){
		$.blockUI({css: {
		'background':'none',
		'border':'0',
		'top': '30%',
		'width': '570px',
		'left': '50%',
		'margin-left':'-275px',
		'cursor': 'default'
		}, overlayCSS:  { 
        backgroundColor: '#000', 
        opacity: 0.9 
    	},message:$('#emailForm') });
		
		$('.blockMsg').prepend(close);
		
		// Move the block message div into the .NET form so submission will work.
		if ($('#aspnetForm').length > 0) {
      $('#aspnetForm').append($('.blockMsg')); 
		}
		
		$('.blockOverlay, .close').click(function(){
      
      // Move the block message back to where it usually is (under <body>) so blockUI works when hiding it.
      if ($('#aspnetForm').length > 0) {
        $('body').append($('.blockMsg')); 
      }

    	$.unblockUI();
    	return false;
    });
        
        //todo submit form ajax?
       	
        return false;
	});
}

//global variables for the video player
var $smlLnk,$medLnk,$hdLnk,vidPath,imagePath,sml,med,hd;
function fnVideoPlayer(){
	var $holder = $('#vidHolder');
	
	if($holder.length >0){			
		//butons		
		$smlLnk = $('#vidSmlLnk');
		$medLnk = $('#vidMedLnk');
		$hdLnk  = $('#vidHDLnk');	
		
		if(fnDetectMobile() == true){		
			//remove the buttons
			
			$smlLnk.remove();
			$medLnk.remove();
			$hdLnk.remove();
			//add play button overlay
			
			$playBtn = '<span class="play"></span>';
			$('#vid a').append($playBtn);
			$('#vid a span.play').click(function() {
				$(this).parents('a').click();
			});
			
			return false; // stop here, nothing else is required
		}else{
			
					
			//small
			sml = getWidthAndHeightFromURL($smlLnk.attr('href'));
			//medium
			med = getWidthAndHeightFromURL($medLnk.attr('href'));
			//hidef
			hd  = getWidthAndHeightFromURL($hdLnk.attr('href'));
			
			vidPath = $smlLnk.attr('href');
			imagePath = $('#vidHolder img:first').attr('src');
			if (imagePath == null) imagePath = '';  // work around JS error if no image		
			launchVidInPage();
			
			$hdLnk.click(function(){			
				// just to fullscreen - fFullScreen() on flash
				var vid = $(this).attr('href');			
				var img = escape(getResizedVideoImageURL(imagePath, hd.w ,"_hd", hd.h));
				//launchVidOverlay(hd.w,hd.h,vid,img,"true"); // pass in fullscreen parameter "true" to trigger fullscreen button in flash (still requires user interaction - Sandbox security)
				launchVidInPage($('#vidHolder'),vid,"false","true"); // pass in fullscreen parameter "true" to trigger fullscreen button in flash (still requires user interaction - Sandbox security)
				
				return false;
				/*
					
				if($(window).width()< 1255){
					return true;
				}else{
					var vid = $(this).attr('href');
					var img = getResizedVideoImageURL(imagePath, hd.w ,"_hd");
					launchVidOverlay(hd.w,hd.h,vid,img);
					return false;
				}			
				*/
			});
			
			if(wide){
				
				$('#smlMedHiDef a').removeClass('selected').filter('#vidMedLnk').addClass('selected').css({cursor:"default"});
				
				$smlLnk.click(function(){
					var vid = $(this).attr('href');
					var img = escape(getResizedVideoImageURL(imagePath, sml.w ,"_med", sml.h));
					launchVidOverlay(sml.w,sml.h,vid,img);
					return false;
				});
				
				$medLnk.click(function(){
					//should be in page?
					return false;
				});
			}else{
				
				$('#smlMedHiDef a').removeClass('selected').filter('#vidSmlLnk').addClass('selected').css({cursor:"default"});
				
				$smlLnk.click(function(){
					//should be in page?
					return false;
				});
				
				$medLnk.click(function(){
					var vid = $(this).attr('href');
					var img = escape(getResizedVideoImageURL(imagePath, med.w ,"_lrg", med.h));
					launchVidOverlay(med.w,med.h,vid,img);
					return false;
				});
			}
		}// else not mobile	
	}
}

function getWidthAndHeightFromURL(url) {
  if (url != null) {
    // Fallback values.
    var w = 480;
    var h = 270;
    var img = '';
    var vid = '';
    var mp4 = '';
    var link = url.split('?')[0];		
    // Extract width and height querystring from the URL.
    if (url != null) {
      var querystring = url.substr(url.indexOf('?') + 1);
      var params = querystring.split('&');
      for (i in params) {
        var name = params[i].split('=')[0];
        var value = params[i].split('=')[1];        
        if (name == 'width') w = value;
        if (name == 'height') h = value;
        if (name == 'image') img = value;
        if (name == 'vid') mp4 = value;
        if (name == 'url') url = value;
      }
    }	
    return {"h":h, "w":w, "img":img, "mp4":mp4, "vid":vid, "link":link, "url":url};	
	}
}


function launchVidInPage($targ,video,autoplay,fullScreen){
	
	var $holder = $targ != null ? $targ : $('#vidHolder');
	
	if($holder.length >0){	
	
    var fW = 0;
    var fH = 0;
    
    if(fullScreen){
			goFullScreen = fullScreen;
		}else{
			goFullScreen = "false";
		}
		
		if(autoplay){
			autoplay = autoplay;
		}else{
			autoplay = "true";
		}
    
    if (!wide && sml) {
      fW = sml.w;
      fH = sml.h;
      vidPath = $smlLnk.attr('href');
      imagePath = getResizedVideoImageURL(imagePath, fW ,"_med", fH); // include height to ensure image fills whole of flash
		}
		
		if(wide && med){
			fW = med.w;
			fH = med.h;
			vidPath = $medLnk.attr('href');
			imagePath = getResizedVideoImageURL(imagePath, fW ,"_lrg", fH);
		}
		if(video){
			vidPath = video;
		}
		if (fW > 0 && fH > 0) {
      var params = {wmode:"opaque", allowFullScreen: true, bgcolor:"000000"};  
      
    	var flashvars = {flv:escape(vidPath), nWidth:fW, nHeight:fH, image:escape(imagePath), autoplay:autoplay, goFullScreen:goFullScreen };
      var attributes = {};      
      //in-page player
      swfobject.embedSWF("/theMillAssets/flash/player.swf", "vid", fW, fH, "9.0.0", null,flashvars,params,attributes);
		}
	}
}

// Returns the URL to the correctly sized video player static image
// HEIGHT MIGHT BE UNDEFINED , if so then do not include in the image url
function getResizedVideoImageURL(imageURL, width, flatVer, height) {

  if (typeof(imageURL) != 'undefined') 
  {
  
    // If height specified (and its a resized image - has width param), add to image url
    if (typeof(height) != 'undefined' && imageURL.indexOf("width=") > 0) 
    {
      if(imageURL.indexOf("height=") > 0) 
      {								        
        // This is an image resized by Umbraco specifying width in the querystring. Replace that height with new one. 
        imageURL = imageURL.replace(/height=[0-9]+/, "height=" + height);		        
      }
      else 
      {
        // Add height to URL.
        imageURL += "&height=" + height;
      }
    }
  
    if(typeof(width) != 'undefined' && imageURL.indexOf("width=") > 0) 
    {								        
      // This is an image resized by Umbraco specifying width in the querystring. Replace that width with new one.
      imageURL = imageURL.replace(/width=[0-9]+/, "width=" + width);		        
    }
    else // flat build only
    {
      imageURL = imageURL.replace(/_lrg|_med/i, flatVer);
    }
  }

  return imageURL;

}

function launchVidOverlay(w,h,flv,img,fullScreen,autoplay){	
	
	//goFullScreen = fullScreen ? "true" : "false";
	
	if(fullScreen){
		goFullScreen = fullScreen;
	}else{
		goFullScreen = "false";
	}
	
	if(autoplay){
		autoplay = autoplay;
	}else{
		autoplay = "true";
	}
	
	var close = '<a href="#" title="Close" class="close">Close</a>';
	var params = {wmode:"opaque", allowFullScreen: "true", bgcolor:"000000"};
	var flashvars = {};
	var attributes = {};		
	flashvars.flv = flv;
	flashvars.nWidth = w;
	flashvars.nHeight = h;
	flashvars.image = img;	
	flashvars.autoplay = autoplay;	
	flashvars.goFullScreen = goFullScreen;	
	$.blockUI({
		css: {
			'background':'none',
			'border':'0',
			'top': '50%',
			'margin-top':'-'+(h/2)+'px',
			'width': w+'px',
			'height': h +'px',
			'left': '50%',
			'margin-left':'-'+(w/2)+'px',
			'cursor': 'default'
			},
		overlayCSS: { 
			backgroundColor: '#000',
			opacity: 1
			},
		message: close + '<div id="overlayVid">Video should be here?</div>'
	});	
	//$('body').css({'overflow':'hidden'});
	$('#vidHolder').html('');	
	swfobject.embedSWF("/theMillAssets/flash/player.swf", "overlayVid", w, h, "9.0.0",null,flashvars,params,attributes);
	
	function unBlock(){
		$.unblockUI();
		$('#vidHolder').html('<div id="vid"></div>');
		$('body').removeAttr('style');		
		launchVidInPage();		
	}	
	$('.blockOverlay, .close').click(function(){
		unBlock();
		return false;
	});	
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) { 
	  		unBlock();
	  	 }  
	});
}



function fnSubNav(){
	if($('#subNav').length >0){		
		//hijack the links
		$('#subNav a').click(function(){			
			var $link = $(this);
			var content = $(this).attr('href'); 
			//content += ' #content';
			var h = $('.rightCol').height();			
			$('rightCol').html('').css('height',h).addClass('loading');			
			/* */
			//use the get method of returning content
			$.get(content,{},function(res, status){
				if ( status == "success" || status == "notmodified" ){
					//strip javascript and conditional comments
					var data =  $("<div/>").append(res.replace(/<script(.|\s)*?\/script>/g, "").replace("/<!--\[if.*?(?=-->)-->/g","")).find('.rightCol').html();					
					$('.rightCol').html(data);					
					$('.rightCol').removeClass('loading').removeAttr("style");					
					//TODO: any js functions that need to run again here one function or multiples?
					fnImageSwap();
					fnTabs();
					fnSectShowHide();
					fnNewsList();
					fnWhoWeAre();
					fnPagerSlider();
					fnPeopleList();
					//					
					// make the link selected
					$('#subNav a').removeClass('sel');
					$link.addClass('sel');					
				}
			});
			/* */ 				
			/* 
			$('.rightCol').load(content, function() {
				$('#content').removeClass('loading').removeAttr("style");
				//make the tabs function				
				$('#subNav a').removeClass('sel');
				$link.addClass('sel');				
			});
			 */			
			return false;
		});
	}
}



function fnInputTxtSwitch() {
	var txt;
	$('#ePlayShare input.txt')
		.focus(function() {						
			if($(this).val() != $(this).attr('value')){
				txt = $(this).val();
			}			
			if($(this).val()){
				$(this).val("");
			}			
		})
		.blur(function() {
			if((txt == $(this).val()) || ($(this).val()=='')){
				$(this).val(txt);				
			}
		});
}

var $slides, $controls, slideC, slideW, interval, count = 1;

function fnResetSlides(){
	$('#slides').scrollLeft(0);
}

function fnHomeSlide(){
	
	count = 1;
	
	playPause = '<div class="playPause"><a href="#" class="pause">Pause</a></div>';
	
	if ($('#slideCont .playPause').length == 0){
		$('#slideCont .inr ul').after(playPause);
		
		$('#slideCont a.pause').live('click', function() {
			fnHomeSlidePause();
			return false;
		});
		
		$('#slideCont a.play').live('click', function() {
			fnHomeSlidePlay();
			return false;
		});
		
	}
	
	$slides = $('#slides .slide');
	$controls = $('#slideCont .inr');
	slideC = $slides.length;
	slideW = $slides.width();
	
	
	//$('h4', $controls).html($('#slide-1 h4').html());
	$('ul li a', $controls).removeClass('sel').filter(':first').addClass('sel');
	
	//reset the slides position (again?)
	fnResetSlides();
	
	$('#slides').addClass('car').find('.slideWrap').width(slideC*slideW+"px");
	$('#slides .slide').removeClass('hide');
	
	
	$('#slideCont ul li a').unbind('click').click(function(obj){
		
		var num = $(this).text();
		var amt = (num-1) * slideW;
		var txt = $('#slide-'+num+' h4').html();
		count = num-1;
		
		//if the slideshow is playing and this is an original click (not a simulated one)
		if($('#slideCont a.pause').length>0 && obj.originalEvent){
			$('#slideCont a.pause').click();
		}
		
		$('ul li a',$controls).removeClass('sel').filter($(this)).addClass('sel');
		//$('h4', $controls).html(txt);
		
				
		$('#slides').animate({scrollLeft: amt}, 800,"easeInOutQuint");
		
		return false;
	});
	
	
	$(window).load(function(){
		fnHomeSlidePlay();
	});
	
}

function fnClickSlide(){
	
	$list = $('#slideCont .inr ul');
	
	$list.find('li:eq('+count+') a').click();
	
	if(count>=($list.find('li').length -1)){
		count = 0;
	}else{
		count++;
	}
}

function fnHomeSlidePlay(){
	
	var seconds = 5;
	
	window.clearInterval(interval);
	$('.playPause a').removeClass('play').addClass('pause').text('Pause');
	interval = window.setInterval( "fnClickSlide()", seconds*1000 );
	
}

function fnHomeSlidePause(){
	$('#slides').stop(true, true);
	window.clearInterval(interval);
	$('.playPause a').removeClass('pause').addClass('play').text('Play');
	
}



function fnHomeSlideStop(){

	window.clearInterval(interval);
	$('#slides').stop(true, true);
	//do this again in half a second as it sometimes goes to the wrong position.
	setTimeout('fnResetSlides()', 500);
	fnResetSlides();
	$('.playPause a').removeClass('pause').addClass('play').text('Play');
	fnHomeSlide();
}




function fnShowReels() {
	var $sHolder = $('#showreels');
	var $cHolder = $('#colourists');
	//var $smlMedLrgLinks = $('#smlMedHiDef');
	
	if($sHolder.length >0 && $cHolder.length != 1 ){
		// For normal showreels
		$showreel = $("a:not('.colourist')",$sHolder);
		$showreel.click(function() {	
			if(fnDetectMobile() == false){										
				video = urlToJSON($(this).attr('href'));			// returns json object with height, width, vid url and first frame img extracted from url			
				img = video.img;  																	// first frame
				if (img == null) img = '';  										// work around JS error if no image		
				launchVidOverlay(video.w,video.h,video.url,img);				// lauch video in overlay
				return false;
			} else{
				return true;
			}			
		});
		
		//
		$colourists = $("a.colourist",$sHolder);
		$colourists.click(function() {		
			
			if(fnDetectMobile() == false){ // the iphone users should follow the URL
				//** play the video in medium size only
				//1. grab the url and title from $(this)
				var vid = urlToJSON($(this).attr('href'));			// returns json object with height, width, vid url and first frame img extracted from url						
				
				img = vid.img;														// first frame
				if (img == null) img = '';  										// work around JS error if no image					
				//title = $(this).attr('title');
				theTitle = '';
				link = $(this).attr('href').split('?')[0];
				
				//. play the video
				launchShowreelOverlay(vid.w,vid.h,vid.mp4,img,link,theTitle);				// lauch video in overlay
				return false;				
			}else{				
				return true;
			}
				
			
		});
		
		
	}
	

}

function urlToJSON(url) {
	return getWidthAndHeightFromURL(url); // returns json object with named key:value pairs
}

var cArray ={};
var cJson;

function launchShowreelOverlay(w,h,mp4,img,href,title){
	
	var close = '<a href="#" title="Close" class="close">Close</a>';
	var params = {wmode:"opaque", allowFullScreen: true, bgcolor:"000000"};
	var flashvars = {};
	var attributes = {};
	var data;
	
	// flashvars.flv = mp4;	
	 	flashvars.nWidth = w;
	 	flashvars.nHeight = h;
	// 	flashvars.image = img;
	$.get(href,{},function(res, status){
		if ( status == "success" || status == "notmodified" ){
			//strip javascript and conditional comments			
			var data = $('<div/>').append(res.replace(/<script(.|\s)*?\/script>/g, "").replace("/<!--\[if.*?(?=-->)-->/g","")).find('#colourists').html();
			
			$.blockUI({		
				css: {
					'background':'none',
					'border':'0',
					'top': '50%',
					'margin-top':'-'+(h/2)-60+'px',
					'width': '926px',
					'height': '530px',
					'left': '50%',
					'margin-left':'-463px',
					'cursor': 'default'
					},
				overlayCSS: { 
					backgroundColor: '#000',
					opacity: 1
					},
				message: '<div id="colourists" class="overlay cfx">'+close + data+'</div>'
			});
			
			var $cHolder = $('#colourists');
	
				if($cHolder.length >0){
					$cThumbs = $("#thumbScroller li a");
					
					//get the info from the thumbnails
					var myvar,href,items = '';
					$cThumbs.each(function(i, object){
						href =  $(object).attr('href');
						items = getVidObjectsFromURL(href);
						myvar += items.med.mp4 + ",";
						myvar += items.med.img + ",";
						
					});		
								
					flashvars.list = myvar.substr(0,myvar.length-1);
					
					//alert(flashvars.list);
					
					//flashvars.startIndex = '1' ;
					//cJson = $.toJSON(cArray);
					/*
					flashvars.list = "http://www.beamtv.com/archive/file/DsNNnPPpQQ/sd,"
					flashvars.list += "http://themillacc.e3hosting.net/umbraco/ImageGen.ashx%3Fwidth=720%26image%3D/media/182990/hd.jpg,"
					flashvars.list += "http://www.beamtv.com/archive/file/QmYxyYZzbb/sd,"   
					flashvars.list += "http://themillacc.e3hosting.net/umbraco/ImageGen.ashx%3Fwidth=720%26image%3D/media/182990/hd.jpg,"
   					flashvars.list += "http://www.beamtv.com/file/stream/PfDXKdNHbn/sd,"
   					flashvars.list += "http://themillacc.e3hosting.net/umbraco/ImageGen.ashx%3Fwidth=720%26image%3D/media/179336/hd.jpg"
   					*/ 					
				}
				
			//$('body').css({'overflow':'hidden'});
		
			$('#vidHolder').html('');
			
			swfobject.embedSWF("/theMillAssets/flash/playerColourists.swf", "vid", w, h, "9.0.0",null,flashvars,params,attributes);
			
			fnColourists();
			
			// set "now playing"
			//$('#nowPlaying em').text(title);
			
			function unBlock(){
				$.unblockUI();
				$('#vidHolder').html('<div id="vid"></div>');
				$('body').removeAttr('style');		
				launchVidInPage();		
			}
			
			$('div.blockOverlay, a.close').click(function(){
				unBlock();
				return false;
			});
			
			$(document).keyup(function(e) {
			  if (e.keyCode == 27) { 
			  		unBlock();
			  	 }  
			});		
							
		}
	});
	
}

function colouristStartFrom(index) {
	
	// find all thumbnails
	var $colThumbs = $('#colourists');	
	var myNewVar = '';
	$colThumbs.each(function(i, obj){
		href =  $(obj).attr('href');
		items = getVidObjectsFromURL(href);
		myNewVar += items.med.mp4 + ",";
		myNewVar += items.med.img + ",";		
	});		
	flashvars.list = myNewVar.substr(0,myNewVar.length-1);
	
	// if it needs to start from a specific video spot (clicked a thumbnail)
	if(index){
		flashvars.startIndex = index;	
	}
	
	// rewrite the flash
	$('#vidHolder').html('');			
	swfobject.embedSWF("/theMillAssets/flash/playerColourists.swf", "vid", w, h, "9.0.0",null,flashvars,params,attributes);
	
	// update now playing info
	updateNowPlaying(index);
}

function updateNowPlaying(index) {
	var title = $('#colourists #thumbScroller li a').eq(index).attr('title');
	var director = $('#colourists #thumbScroller li a').eq(index).attr('title');
}


// on mobile, colourists links to the actual URL, not in overlay. Hide some stuff for this
function mobileColourists() { 
	var $cHolder = $('#colourists');
	if($cHolder.length >0){		
		if(fnDetectMobile() == true){			
			$('#smlMedHiDef').remove();
			
			$playBtn = '<span class="play"></span>';
			$('#vid a').append($playBtn);
			$('#vid a span.play').click(function() {
				$(this).parents('a').click();
			});
			
		}		
	}
}

function fnColourists() {	
	
	var $cHolder = $('#colourists');
	
	if($cHolder.length >0){
		
		// Find and bind thumb links - run linked video in player
		$cThumbs = $("#thumbScroller li a");		
		$cThumbs.unbind('click'); // think these are being targetted by showreels function		
		
		// vars
		var $sLnk,$mLnk,$lLnk; // set them later on click, so they are the correct values		
		
		$cThumbs.click(function() {
			
			if(fnDetectMobile() == false){
				 
				// find all thumbnails
				var myNewVar='',href,items;
				$cThumbs.each(function(i, obj){
					href =  $(obj).attr('href');
					items = getVidObjectsFromURL(href);
					myNewVar += items.med.mp4 + ",";
					myNewVar += items.med.img + ",";		
				});	
				
				theList = myNewVar.substr(0,myNewVar.length-1);
				
				/*
				// rewrite the flash
				$('#vidHolder').html('');			
				swfobject.embedSWF("/theMillAssets/flash/playerColourists.swf", "vid", w, h, "9.0.0",null,flashvars,params,attributes);
				
				// update now playing info
				$('#nowPlaying em').text($(this).attr('title'));
				$('a.findOutMore').attr('href', vid.wUrl);
				$('#showreelItemDirector').text(decodeURIComponent(vid.wDirector));
				*/
				
				
				var img = '';  										// work around JS error if no image					
				//vid = urlToJSON($(this).attr('href'));					// returns json object with height, width, vid url and first frame img extracted from url						
				var vid = getVidObjectsFromURL($(this).attr('href'));			// returns json object with height, width, vid url and first frame img extracted from url	

		        img = vid.med.img;														// first frame
	
		        
		        $par = $(this).parents('ul');											//parent ul
		        index = $('li',$par).index($(this).parent()); 							//index, which chapter
		        		        
		        //var flashvars = {flv:vid.med.mp4, nWidth:vid.med.w, nHeight:vid.med.h, image:vid.med.img, chapter:index, json:cJson};		
		        var flashvars = {nWidth:vid.med.w, nHeight:vid.med.h, image:vid.med.img, startIndex:index, list:theList};		
		        var params = {wmode:"opaque", allowFullScreen: true, bgcolor:"000000"};			
		        var attributes = {};			
		        swfobject.embedSWF("/theMillAssets/flash/playerColourists.swf", "vid", vid.med.w, vid.med.h, "9.0.0", null,flashvars,params,attributes);
      
				$('#nowPlaying em').text($(this).attr('title'));
				if (vid.wUrl){
					$('a.findOutMore').show().attr('href', vid.wUrl);
				}else{
					$('a.findOutMore').hide();
				}
				$('#showreelItemDirector').text(decodeURIComponent(vid.wDirector));
				
				
				// set here to obtain target values for the selected video
				$sLnk = $('#vidSmlLnk');
				$mLnk = $('#vidMedLnk');
				$lLnk = $('#vidHDLnk');
				
				// update links for the clicked video
		        $sLnk.attr('href', vid.sml.mp4 + '?width=' + vid.sml.w + '&height=' + vid.sml.h + '&image=' + vid.sml.img);
		        $mLnk.attr('href', vid.med.mp4 + '?width=' + vid.med.w + '&height=' + vid.med.h + '&image=' + vid.med.img);
		        if (vid.lrg) {
		          $lLnk.attr('href', vid.lrg.mp4 + '?width=' + vid.lrg.w + '&height=' + vid.lrg.h + '&image=' + vid.lrg.img); 
		        }
				
				// Set medium as the selected link
				$sLnk.removeClass('selected');
				$lLnk.removeClass('selected');
				$mLnk.addClass('selected');
				
				return false;
			}else{
				return true;
			}
				
		}); // $cThumbs.click
		
		$cThumbs.eq('0').click();// start it off - play first video
		
		$('#smlMedHiDef a').click(function() {
			var vidPath = this.href.split('?')[0];			
			var size = getWidthAndHeightFromURL(this.href);			
			var fW = size.w;
      		var fH = size.h;
      
	      if(fW > 720) {
	      	fW = '720';
	      	fH = '400';
	      }
	      
	      imagePath = size.img;
	            
	      var params = {wmode:"opaque", allowFullScreen: true, bgcolor:"000000"};
	      var flashvars = {flv:escape(vidPath), nWidth:fW, nHeight:fH, image:imagePath, autoplay:"true"};
	      var attributes = {};
	      
	      //in-page player
	      swfobject.embedSWF("/theMillAssets/flash/player.swf", "vid", fW, fH, "9.0.0", null,flashvars,params,attributes);
	      
	      if(fW <= 720){
	      	$('#vidWrap').css('width',fW+'px'); // resize it for the shadow, but not for the large videos
	      }
	      
	      // Set this one as selected
	      $('#smlMedHiDef a').removeClass('selected');
	      $(this).addClass('selected');
      
			return false;
		});
		
		
		// Thumbnail slider/scroller
		$scrollBox = $("#thumbScroller");
		$scrollBox.css('overflow','hidden');		
		$slider = $("#sliderTrack");			
		
		// Handlers for sliding the thumbnails		
		// slider/scroller control		
		var maxScroll = $scrollBox.attr("scrollHeight") - $scrollBox.height();
		
		if(fnDetectMobile() == false){
		
			$("#sliderTrack").slider({
				animate: true,			
				value: 100,
				orientation: "vertical",
				change: function(event, ui) {
			  	$scrollBox.animate({ scrollTop: maxScroll - (ui.value * (maxScroll / 100)) }, 1000);
				},
				slide: function(event, ui) {								
			  	$scrollBox.attr({scrollTop: maxScroll - (ui.value * (maxScroll / 100)) });
				}
			});
			
		}else{
			$scrollBox.css('overflow', 'scroll'); // allow user to scroll the thumbnails
		}
	
	}
	

}


function fnContacts(){

	var close = '<a href="#" title="Close" class="close">Close</a>';
	var defH = $('#mainContacts').height();
	
	$('#eCont .sect').each(function(i){
		//store the height of the section in its data for use later.
		$(this).data('h', $(this).height());
	});
	
	//add the close buttons then hide all;
	$('#eCont .sect').prepend(close).hide();
	
	$('#mainContacts a').click(function(){
		//get the id to show
		var targ = $(this).attr('href');
		//set the height of the div other wise it will animate from 0.
		$('#eCont > .inr').height(defH);
		
		//fade out the main div, then animate the height to fit the contacts list, then fade that in.
		$('#mainContacts').fadeOut('normal',
			function(){
				$('#eCont > .inr').animate({height : $(targ).data('h')}, 'normal',
				function(){
      				$(targ).fadeIn('normal');
      			});
			});
			
		return false;
	});
	
	$('#eCont .sect a.close').click(function(){
		
		//fade out the parent section, animate the height to the main contacts list, then fade that in.
		$(this).parents('.sect').fadeOut('normal',
			function(){
				$('#eCont > .inr').animate({height : defH}, 'normal',
				function(){
      			$('#mainContacts').fadeIn('normal');
      			});
			});
		
		return false;
	});
}

function fnWhoWeAre() {		
	var $wrap = $('#wwa');	
	if($wrap.length >0){		
		vidLaunchLinks(); // assign video launching links to launch overlay player
		
		// open the job application form in an overlay (flat build version uses ahah)
		$('#ldn a.arr,#la a.arr,#ny a.arr').click(function() {
			// ajax in the href target
			$.get($(this).attr('href'),{},function(res, status){
				if ( status == "success" || status == "notmodified" ){
					//strip javascript and conditional comments	from ajaxed-in page and get content slice we want
					var data = $('<div/>').append(res.replace(/<script(.|\s)*?\/script>/g, "").replace("/<!--\[if.*?(?=-->)-->/g","")).find('#wwa').html();
					var close = '<a href="#" title="Close" class="close">Close</a>';
					$.blockUI({		
						css: {
							'background':'none',
							'border':'0',
							'top': '50%',
							'margin-top':'-265px',
							'width': '816px',
							'height': '530px',
							'left': '50%',
							'margin-left':'-408px',
							'cursor': 'default',
							'position':'absolute'
							},
						overlayCSS: { 
							backgroundColor: '#000',
							opacity: 0.9
							},
						message: '<div id="wwa" class="overlay cfx">'+close + data+'</div>'
					});
					
					$('div.blockOverlay, a.close').click(function(){
						$.unblockUI();
						return false;
					});
					$(document).keyup(function(e) {
					  if(e.keyCode == 27) { 
					  	$.unblockUI();
				  	}  
					});
				}
			});
						
			return false;
		});

		// open the job application form in an overlay (live version uses an iframe so .NET form can submit within it)
		$('.jobApplicationForm a.arr').click(function() {
            var data = '<iframe id="jobAppFormFrame" src="' + $(this).attr('href') + '?ajax=true" width="100%" height="1128" frameborder="0" scrolling="no"></iframe>';
            var close = '<a href="#" title="Close" class="close">Close</a>';
            $.blockUI({
                css: {
                    'background': 'none',
                    'border': '0',
                    'top': '50%',
                    'margin-top': '-265px',
                    'width': '816px',
                    'height': '530px',
                    'left': '50%',
                    'margin-left': '-408px',
                    'cursor': 'default',
                    'position': 'absolute'
                },
                overlayCSS: {
                    backgroundColor: '#000',
                    opacity: 0.9
                },
                message: '<div id="wwa" class="overlay cfx">' + close + data + '</div>'
            });

            $('div.blockOverlay, a.close').click(function() {
                $.unblockUI();
                return false;
            });
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    $.unblockUI();
                }
            });

		    return false;
		});
	}
	
}

function vidLaunchLinks() {	
	if($('a.vidLaunch').length > 0) {		
		
		$('a.vidLaunch').append('<span class="play">')
			.click(function() {			
			var v = urlToJSON($(this).attr('href'));
				launchVidOverlay(v.w,v.h,v.link,v.img);				
				return false;
			})			
			.hover(function() {
				$(this).addClass('hov');
			}, function() {
				$(this).removeClass('hov');
			});			
	}
}

// playlist inpage player
function launchPlaylistInPage(json,autoplay,fullScreen){
	var $holder = $('#ePlayVid');
	if($holder.length >0){
		
		if(fullScreen){
			goFullScreen = fullScreen;
		}else{
			goFullScreen = "false";
		}
		
		if(autoplay){
			autoplay = autoplay;
		}else{
			autoplay = "true";
		}
	
		var wid,hei,vidPath,imagePath;		
		if(wide){
			wid = json.med.w;
			hei = json.med.h;
			vidPath = json.med.mp4;
			imagePath = json.med.img;
		}else{
			wid = json.sml.w;
			hei = json.sml.h;
			vidPath = json.sml.mp4;
			imagePath = json.sml.img;
		}		
				
		var params = {wmode:"opaque", allowFullScreen: true, bgcolor:"000000"};
		var flashvars = {};
		flashvars.flv = vidPath;
		flashvars.nWidth = wid;
		flashvars.nHeight = hei;
		flashvars.image = imagePath;				
		flashvars.autoplay = autoplay;	
		flashvars.goFullScreen = goFullScreen;
		var attributes = {};				
		
		$('#ePlayVid').attr("style",'height:'+ hei +'px;'); // adjust for big videos	
		swfobject.embedSWF("/theMillAssets/flash/player.swf", "ePlayVidHolder", wid, hei, "9.0.0", null,flashvars,params,attributes);	
		//swfobject.embedSWF("/theMillAssets/flash/playerColourists.swf", "ePlayVidHolder", wid, hei, "9.0.0", null,flashvars,params,attributes);	
		
	}
}

// playlist html5 in-page player (ipad)
function fnHTML5Video(vidjson){
	var $holder = $('#ePlayVid');
	if($holder.length >0){
		// get video element
		var $vidElem = $('#ePlayVid video:first');
		
		// write the new asset info into HTML5 video tag
		var wid = vidjson.sml.w;
		var hei = vidjson.sml.h;
		var vidPath = vidjson.med.mp4;
		var imagePath = unescape(vidjson.sml.img);				
		
		// build HTML to insert
		var HTMLToInsert = '<video id="playlistVid" src="'+vidPath+'" width="'+wid+'" height="'+hei+'" preload="auto" autobuffer="autobuffer" autoplay="autoplay" controls="controls" poster="'+imagePath+'"></video>';
		$vidElem.replaceWith(HTMLToInsert);//inject HTML		
		
		//$('#ePlayVid video:first')[0].play();// re-select the video and play
		
	}
}

// return JSON object by parsing string from URL querystring
function getVidObjectsFromURL(url) {

	// Fallback values.
  var wId,wDirector,wUrl,smlH,smlW,smlImg,sMP4,medH,medW,medImg,mMP4,lrgH,lrgW,lrgImg,lrgMP4 = '';
  
  var sMP4 = url.split('?')[0];	
  // Extract width and height querystring from the URL.
  if (url != null) {
    var querystring = url.substr(url.indexOf('?') + 1);
    var params = querystring.split('&');
    for (i in params) {
      var name = params[i].split('=')[0];
      var value = params[i].split('=')[1];
      
      if (name == 'sH') smlH = value;
      if (name == 'sW') smlW = value;
      if (name == 'sImg') smlImg = value;
      if (name == 'sMP4') sMP4 = value;
      if (name == 'mH') medH = value;
      if (name == 'mW') medW = value;
      if (name == 'mImg') medImg = value;      
      if (name == 'mMP4') mMP4 = value;    
      if (name == 'lH') lrgH = value;
      if (name == 'lW') lrgW = value;      
      if (name == 'lImg') lrgImg = value;      
      if (name == 'lMP4') lrgMP4 = value;      
      if (name == 'wId') wId = value;    
      if (name == 'wDirector') wDirector = value;
      if (name == 'wUrl') wUrl = value;  
    }
  }	
  
  if(lrgW != ''){
  	return {  		
			"sml":{"w": smlW, "h": smlH, "img": smlImg, "mp4":sMP4},
			"med":{"w": medW, "h": medH, "img": medImg, "mp4":mMP4},
			"lrg":{"w": lrgW, "h": lrgH, "img": lrgImg, "mp4":lrgMP4},
			"wId": wId, "wDirector":wDirector, "wUrl":wUrl
		};
  }else{
  	return {  		
			"sml":{"w": smlW, "h": smlH, "img": smlImg, "mp4":sMP4},
			"med":{"w": medW, "h": medH, "img": medImg, "mp4":mMP4},
			"wId": wId, "wDirector":wDirector, "wUrl":wUrl
		};
  }
  
}


function fReady(action) {	
	// video player fires this when it's loaded video
	/*
	if(action){
		
		if(action == 'pause'){
			if($('#ePlayVidHolder').length>0){			
				$('#ePlayVidHolder:first')[0].respond('pause'); // pause the video in the page if there is one	
			}						
		}
		
	}	
	*/ 
}

function fVideoFinished() {	
	// video player fires this when it's loaded finished - for play all in playlist
	if($('#plScroll').length > 0){	
		$('#plScroll li.nowPlaying').next().find('a.vid:first').click();		// fails silently when it gets to the last one
	}
}



//++SUPERCEDED BY THE PLUGIN DEFINITION BELOW
function fnScrollTo($obj) {
	
	//Get the target
	var target = strTarg;
	//perform animated scrolling
	$('html,body').animate({
		//get top-position of target-element and set it as scroll target
		scrollTop: $(target).offset().top
		//scrolldelay: 2 seconds
		},1000,"easeInOutQuad",function(){
			//attach the hash (#jumptarget) to the pageurl
			//location.hash = target;
		});
}
//++SUPERCEDED BY THE PLUGIN DEFINITION BELOW


// create closure
(function($) {  
  // plugin definition  
  $.fn.scrollToTarg = function(options) {
 
 	// build main options before element iteration
 	var opts = $.extend($.fn.scrollToTarg.defaults, options);
 	 	
 	// iterate and reformat each matched element
 	return this.each(function() {
 		$this = $(this);
 		// build element specific options
 		var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
 		
		//perform animated scrolling
		$('html,body').animate({			
			scrollTop: ($this.offset().top) + $.fn.scrollToTarg.defaults.adjust
			},$.fn.scrollToTarg.defaults.duration, $.fn.scrollToTarg.defaults.easing);	 		
 		});
  };
  
  // plugin defaults
  $.fn.scrollToTarg.defaults = {
		duration: 800,
		easing: "easeInOutQuad",
		adjust: -20
  };
  
})(jQuery);// end of closure

/* JSON PLUGIN */
(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);
/* end plugin */


function fnCloseOverlay() {
	$('div.blockUI a.close').click();
}


/**
 * Assign simple hide and show default value for inputs like search box
 */
/**
 * Assign simple hide and show default value for inputs like search box
 */
function fnFormDefaultText() {
	
	$("input.defaultText, #sendShare input.txt").each(function(){
		var $label = $(this).prev('label');
		var txt = $label.text();
		if($label.has('em').length>0){
			txt = $('em',$label).text();
		}
		 if ($(this).val() == "" || $(this).val() == txt) {
			$(this)[0].defaultValue = txt;
        	$(this).val($(this)[0].defaultValue);
     	}
		
	});
	
	$("input.defaultText, #sendShare input.txt").unbind("focus,blur").live('focus', function() {
		if ($(this).val() == $(this)[0].defaultValue) {
        	$(this).val("");
        }
	 }).live('blur', function() {
        if ($(this).val() == "") {
        	$(this).val($(this)[0].defaultValue);
     	}
	 });
}

function fnGallery(){

	$("a.gallery").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'overlayOpacity':  '0.7',
		'overlayColor'  :  '#000',
		'showNavArrows' : true,
		'padding'       : 0,
		'cyclic'		: true,
		'autoScale'		: false,
		'titleShow'		: false,
		'onStart'	: function fncheckGal(){
			if($('a[rel="gallery"]').length ==1){
				$('#fancybox-outer').addClass('single');
			}else{
				$('#fancybox-outer').removeClass('single');
			}
		}
	});
	
	

}

function fnPeopleList(){
	
	var toggleAll = false;
	
	var delay = 1000; //miliseconds
	
	var $first = $('div.peopleList .sect:first');
	
	var btn = '<a class="btn" href="#">Show Biography</a>';
	
	$('div.peopleList').each(function(){
			$('.sect', $(this)).each(
				function(){
					
					$(this).addClass('closed');
					$(this).find('.cont').hide().before(btn);
					
					$(this).find('a.btn').click(
						function(){
							
							$first.find('.cont').clearQueue();
									
							$(this).parents('.sect').find('.cont').slideToggle('normal');
							
							$(this).parents('.sect').toggleClass('closed open');
							
							return false;
						});
				});

	});
	
	
}
