$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = $('.sidebarBoxLeft').outerHeight() - 39; 

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels) {
			$( ".scrollingBoxLeft" ).css({
				"position": "fixed",
				"top": "15px"
			});
		} else {
			$( ".scrollingBoxLeft" ).css({
			"position": "static"
			});
		}
	});
});
// From Here http://html-tuts.com/jquery-scroll-div-sidebar/