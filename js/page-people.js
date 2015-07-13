(function($){ 
	$(function(){
		$("#copy-emails").click(function(){
			//alert($("#content .content .views-row .views-field-field-email .field-content").text());
		});
		$("#print-the-page").click(function(){
			//$("#main-wrapper #main #content").print();
			window.print();
		});
		
//		$("#sidebar ul li a").click(function(event){
//			//prevent the default action for the click event
//			event.preventDefault();
//			//get the full url - like mysitecom/index.htm#home
//			var full_url = this.href;
//			//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
//			var parts = full_url.split("#");
//			var trgt = $.trim(parts[1]);
//			//get the top offset of the target anchor
//			var target_offset = $("#"+trgt).offset();
//			var target_top = target_offset.top-100;
//			//goto that anchor by setting the body scroll top to anchor top
//			$('html, body').animate({scrollTop:target_top}, 800);
//		});
		
		$("#main #content .node-people .views-field-field-avatar img").removeAttr("height");
		
		// control the university css
		$("#main #content .view-grouping-content").addClass("clearfix");
		//$("#main #content .view-grouping-content .item-list:has(h3:contains(National))").addClass("item-list-left");
		//$("#main #content .view-grouping-content .item-list:has(h3:contains(Tsinghua))").addClass("item-list-right");
		
		$("#main #content .view-people-list .node-people").each(function() {
			var org = $(this).find(".views-field-field-organization").text();
			org = $.trim(org);
			if(org == "National University of Singapore" ){
				$(this).addClass("nus");
			}else if(org == "Tsinghua University" ){
				$(this).addClass("tsh");
			}else if(org ){
				$(this).addClass("other");
			}
		});
		$("#main #content .view-people-list .node-people").hover(function(){
			var description = $(this).find(".views-field-field-description");
			description.css({top:$(this).height()});
			description.toggle();
		});
		
		var total=0;
		$(".content .item-list").each(function(){
			var len = $(this).find("ul li").length;
			total +=len;
			var group_header = $(this).find(">h3");
			//var year=group_header.text();
			//list.append('<li><a href="#'+year+'">'+year+"<span>("+len+")</span>"+'</a></li>');
			group_header.append(" ("+len+")");
		});
		
		$("#page-title").append(" ("+total+")");
	});
})(jQuery);