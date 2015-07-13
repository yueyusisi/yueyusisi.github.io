(function($){ 
	$(function(){
		$("#content .intern-links ul li").hover(function(){
		var pan = $(this).find(".pan");
			var height = pan.outerHeight();
			pan.css({
				"position":"absolute"
			});
			pan.animate({
				top:-10
			},100);
		},function(){
			var pan = $(this).find(".pan");
			pan.animate({
				top:0
			},100,function(){
				pan.css({"position":""});
			});
		});
		
		$("#content .news-items ul li .news-image img").removeAttr("height");
		// image slider
		$("#banner .gallery p").nivoSlider({
			effect: "random",//'fade',
			boxCols: 8,
			boxRows: 4,
			animSpeed: 1000,
			pauseTime: 4000,
			controlNav: true,
			prevText: 'Prev',
			nextText: 'Next',
			pauseOnHover: false
		});
		// posts carousel
		//$("#content .front-content-list .recent-posts").
		//tinycarousel({ duration: 1000,interval:true,intervaltime: 5000 ,rewind:true });
		$("#content .front-content-list .recent-posts .news-items").jcarousel({
			wrap: 'circular',
			scroll: 1,
			auto: 5
		});
	});
})(jQuery);
