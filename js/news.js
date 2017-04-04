$(function(){
	$('#news ol').masonry();



	$("#body-news #office li").click(function(event){
		if(!$(this).hasClass("active")){
			target = $(this).attr("id").replace("office_","");
			$.ajax({url:"/set/location/"+target});
			$("#office li").removeClass("active");
			$(this).addClass("active");
			setfilter();
			setnews("0");
		}
		 event.preventDefault();
	});
	$("#body-news #discipline li").click(function(event){
		$(".discipline-filter li").removeClass("active");
		if(!$(this).hasClass("active")){
			$("#discipline li").removeClass("active");
			$(this).addClass("active");
			
		}
		setfilter();
		setnews("0");
		 event.preventDefault();
	});
	$("#body-news #category li").click(function(event){
		$(".discipline-filter li").removeClass("active");
		if(!$(this).hasClass("active")){
			$("#category li").removeClass("active");
			$(this).addClass("active");
			$("#discipline li").removeClass("active");
			$("#discipline li:eq(1)").addClass("active");	
			setfilter();
			setnews("0");
		}
		 event.preventDefault();
	});
	$("#body-news .discipline-filter li").click(function(event){
		if(!$(this).hasClass("active")){
			discipline = $(this).parent().parent().attr("id");
			$("#discipline li").removeClass("active");
			$("#discipline_"+discipline).addClass("active");
			$(".discipline-filter li").removeClass("active");
			$(this).addClass("active");
			setfilter();
			setnews("0");
		}
		 event.preventDefault();
	});
	$("#load-more-news").click(function(){
		var page = parseInt($("#news").attr("data-page")) + 1;
		setnews((page-1)*18);
	});
	$("#headline-view").click(function(){
		$(this).hide();
		$("#blog-view").fadeIn();
		$.ajax({url:"/set/newsview/headline"});
		setnews("0","18","headline");
	});
	$("#blog-view").click(function(){
		$(this).hide();
		$("#headline-view").fadeIn();
		$.ajax({url:"/set/newsview/blog"});
		setnews("0","18","blog");
	});	
	$("#news img").bind("load", function () {
	    $(this).fadeTo(400,1);
	});

	$("#pagination").hide();
	if($("#news").attr("data-page") != 1){
		$("#news ol").empty();
		var count = $("#news").attr("data-page") * 18; 
		setnews("0", count);
	}
	

	
});
$(window).load(function(){
    $("img").trigger("load");
    $("#news ol").masonry( 'reload' );
});
$(window).scroll(function(){
	if (navigator.userAgent.indexOf("Mobile") < 0){
		scrolltop = $('body').scrollTop() + 115;
		docspace = $(window).height()-115;
		$("#blog li").each(function(){
			offset = $(this).offset().top;
			height = $(this).height();
			innerheight = $(this).children(".news-post").height();
			pospoint = offset+height-innerheight;
			imageheight = $(this).children(".news-images").height();
			if(innerheight < imageheight){
				if(scrolltop > offset && docspace > innerheight && imageheight > innerheight){
					if(pospoint-30 > scrolltop){
						$(this).children(".news-post").css("top","115px").css("bottom","").css("position","fixed");
					} else {
						$(this).children(".news-post").css("top","").css("bottom","0px").css("position","absolute");
					}
				} else {
					$(this).children(".news-post").css("top","0px").css("bottom","").css("position","absolute");
				}
			}
		});
	}
});
function setnews(offset, count, view){	
	hideloadmore = false;
	if(count == undefined){
		count = 18;
	}
	if(view == undefined){
		view = $("#news ol").attr("id");
	}
	if(offset == undefined || offset == '0'){
		offset = '';
	}
	var office = clean($("#office .active").text());
	var discipline = clean($("#discipline .active").text());
	var category = clean($("#category .active").text());
	var artist = clean($(".discipline-filter .active").text());
	if(discipline == 'all'){ discipline = ''; }
	if(category == 'all'){ category = ''; }
	$.post("/news/load/", {offset: offset, office: office, discipline: discipline, category:category, artist: artist, view: view, count: count}, function(data){
		$("#news ol").attr("id", view);
		var results = $.parseJSON(data);
			if(offset == ""){
				$("#news ol").empty();
			}
			$.each(results, function(i, item){
				var thisassets = 
					$("<div class='news-images' />");
				var dom = 
					$("<li/>")
					.addClass("editable")
					.attr("data-id",item.id);
				var post = 
					$("<div/>")	
					.addClass("news-post");
				var title = 
					$("<a/>")
					.attr("href","/post/"+item.artisturl+"/"+item.url+"/")
					.html("<h3>"+item.title+"</h3>")
					.appendTo(post);
				var linksgroup =
					$("<div/>")
					.addClass("news-links");
				var links =
					$("<strong/>");
				if(view == 'headline'){	
					var viewpost = 
						$("<a/>")
						.attr("href","/post/"+item.artisturl+"/"+item.url+"/")
						.text("View Post")
						.appendTo(links);
				} 
				$.each(item.artisturls, function(i, url){
					var viewartist = 
						$("<a/>")
						.attr("href","/artist/"+url.url+"/")
						.text(url.title)
						.appendTo(links);
				});
				var published = 
					$("<a/>")
					.text(item.published)
					.appendTo(links);
				linksgroup.append(links);		
				
				if(view == 'blog'){	
					var links =
					$("<strong/>");
					var viewpost = 
						$("<a/>")
						.attr("href","/post/"+item.artisturl+"/"+item.url+"/")
						.text("Permalink")
						.appendTo(links);
					var shareclosed = 
						$("<a/>")
						.addClass("news-shareclosed")
						.text("Share this post")
						.appendTo(links);	
					var permalink = encodeURIComponent("http://www.mapltd.com/post/"+item.artisturl+"/"+item.url+"/");
					var shorttitle = encodeURIComponent(item.title.replace(/(<([^>]+)>)/ig,""));
					var facebook = 
						$("<a/>")
						.addClass("news-shareopen")
						.attr("href","http://www.facebook.com/sharer.php?u="+permalink+"&t="+shorttitle+"&src=sp")
						.text("Facebook")
						.appendTo(links);
					var twitter = 
						$("<a/>")
						.addClass("news-shareopen")
						.attr("href","https://twitter.com/share?original_referer="+permalink+"&related=&source=tweetbutton&text="+shorttitle+"&url="+permalink)
						.text("Twitter")
						.appendTo(links);		
					linksgroup.append(links);	
				}	
				post.append(linksgroup);
				if(item.text != ''){
					var text = 
						$("<div/>")
						.addClass("news-text")
						.html(item.text)
						.appendTo(post);	
				}
				if(item.credits != '' && view == 'blog'){
					var credits = 
						$("<div/>")
						.addClass("news-credits")
						.html(item.credits)
						.appendTo(post);		
				}
				dom.append(post);	
				if(item.assets.length > 0){
					if(view == 'blog'){
						$.each(item.assets, function(ii, asset){
							var ratios = 0;
							$.each(asset, function(iii, assetpart){
								ratios = ratios + (assetpart.asset_width/assetpart.asset_height);
							});
							var totalwidth = 840 - (asset.length * 32);
							var height = totalwidth/ratios;	
							if(height > 650){
								height = 650;
								totalwidth = height*ratios;
							}
							$.each(asset, function(iii, assetpart){	
								var ratio = assetpart.asset_width/assetpart.asset_height;
								var width = Math.round(totalwidth * (ratio/ratios));
								if(assetpart.asset_type == 'video'){
									var thisassetdata = 
										$("<div/>")
										.addClass("video-container");
									var thisvideo = 
										$("<video/>")
										.attr("width",width)
										.attr("height",height)
										.attr("controls","controls")
										.attr("poster","http://assets.okdk.co.uk/imagecache/map-"+assetpart.asset_id+"-w"+width+".jpg")
										.attr("preload","none");
									var thisvideomp4 =
										$("<source/>")
										.attr("type","video/mp4")
										.attr("src","http://yesassets.s3.amazonaws.com/map/video/map_"+assetpart.asset_id+".mp4");
									thisvideo.append(thisvideomp4);
									var thisvideowebm =
										$("<source/>")
										.attr("type","video/webm")
										.attr("src","http://yesassets.s3.amazonaws.com/map/video/map_"+assetpart.asset_id+".webm");
									thisvideo.append(thisvideowebm);
									var thisvideoogg =
										$("<source/>")
										.attr("type","video/ogg")
										.attr("src","http://yesassets.s3.amazonaws.com/map/video/map_"+assetpart.asset_id+".ogg");
									thisvideo.append(thisvideoogg);
									thisassetdata.append(thisvideo);
									thisassets.append(thisassetdata);
								} else {
									var src = "http://yesassets.s3.amazonaws.com/map/cache/map-"+assetpart.asset_id+"-w"+width+".jpg";
									var thisassetdata = 
										$("<img/>")
										.addClass("invisible")
										.attr("src",src)
										.attr("width",width)
										.attr("height",height)
										.one("error",function(){
											src = $(this).attr("src").replace("http://yesassets.s3.amazonaws.com/map/cache/","http://assets.okdk.co.uk/imagecache/");
											$(this).attr("src",src);
										});
									thisassets.append(thisassetdata);
								}
									
							});
						});			
					} else {
						var ratio = item.assets[0][0].asset_width/item.assets[0][0].asset_height;
						var width = 390;
						var height = 390 / ratio;
						var src = "http://yesassets.s3.amazonaws.com/map/cache/map-"+item.assets[0][0].asset_id+"-w"+width+".jpg";
						var thisasset = 
							$("<a/>")
							.attr("href","/post/"+item.artisturl+"/"+item.url);	
						var thisassetdata = 
							$("<img/>")
							.addClass("invisible")
							.attr("src",src)
							.attr("width",width)
							.attr("height",height)
							.one("error",function(){
								src = $(this).attr("src").replace("http://yesassets.s3.amazonaws.com/map/cache/","http://assets.okdk.co.uk/imagecache/");
								$(this).attr("src",src);
							});
						thisasset.append(thisassetdata);
						if(item.assets[0][0].asset_type == 'video'){
							var videolink = 	
								$("<div/>")
								.addClass("video-link")
								.css("width",width+"px")
								.css("height",height+"px");
							var videolinkbutton =
								$("<div/>")
								.addClass("mejs-overlay-button");
							videolink.append(videolinkbutton);	
							thisasset.append(videolink);	
						}	
						thisassets.append(thisasset);
					}
				}
				dom.append(thisassets);
				$("#news ol").append(dom).masonry('reload', loadnewsimages);		
			});

			var count = $("#news li").length;
			page = Math.ceil(count/18);
			$("#news").attr("data-page", page);
			setfilter();	
		if(results.length == 0 || count < page*18){	
			$("#load-more-news").fadeOut();
		} else {
			$("#load-more-news").fadeIn();
		}		
	});	
}
function loadnewsimages() {
	$("#news img").bind("load", function () { $(this).fadeTo(400,1); });
}
function fadeinnews() {
	$("#news li").fadeIn();
}