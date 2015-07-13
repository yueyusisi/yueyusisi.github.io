(function($){ 
	$(function(){
		if($("#main-wrapper #main #sidebar-left:has(.content)").length>0){
			$("#main-wrapper #main #content").addClass("right");
		}
		
		var sidebar = $("#sidebar");
		if($("#content").height()<500){
			$("#content").height(500);
		}
		
		/**--back to top plugin implement-**/
		 jQuery.toTop = function(options) {
            options = $.extend( {}, jQuery.toTop.defaults, options );
            options.css = $.extend( {}, jQuery.toTop.defaults.css, options.css );
            $anchor = $( '<a/>', {
           	 id: options.anchorName,
           	 name: options.anchorName
            }).prependTo( 'body' );

            var $divTag = $( '<div/>', {
                    css: options.css,
                    id: options.id
            }).appendTo( options.appentTo ).css({
           	 right:$(options.appentTo).offset().left-70
            });

            $toTopLink = $( '<a />', {
                 href: '#' + options.anchorName
            })
		     .html(options.topLinkText )
		     .click ( function( event ) {
		         event.preventDefault();
		         $( 'html, body').animate({
		            scrollTop : 0},options.scrollSpeed);
		      })
		     .appendTo($divTag);
	         $( window ).scroll( function() {
	                 if ( $( document ).scrollTop() == 0 ) {
	                         $divTag.slideUp();
	                 } else {
	                         $divTag.slideDown();
	                 }
	         });
	    };
	    jQuery.toTop.defaults = {
	             anchorName: 'top',
	             appentTo: '#main',
	             css: {
                    border: 'none',
                    bottom: '10px',
                    display: 'none',
                    position: 'fixed',
                    zIndex: 999
	             },
	             id: 'toTop',
	             scrollSpeed: 200,
	             topLinkText: ''
	     };
	     jQuery.toTop();
	});
})(jQuery);