$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = $('.sidebarBoxLeftEvents').outerHeight() + 175; 

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels) {
			$( ".scrollingBoxLeftEvents" ).css({
				"position": "fixed",
				"top": "15px"
			});
		} else {
			$( ".scrollingBoxLeftEvents" ).css({
			"position": "static"
			});
		}
	});
});
// From Here http://html-tuts.com/jquery-scroll-div-sidebar/