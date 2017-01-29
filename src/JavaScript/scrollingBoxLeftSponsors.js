$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = $('.scrollingBoxLeftSponsors').outerHeight() - 53; 

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels) {
			$( ".scrollingBoxLeftSponsors" ).css({
				"position": "fixed",
				"top": "15px"
			});
		} else {
			$( ".scrollingBoxLeftSponsors" ).css({
			"position": "static"
			});
		}
	});
});
// From Here http://html-tuts.com/jquery-scroll-div-sidebar/