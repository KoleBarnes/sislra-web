// From Here http://html-tuts.com/jquery-scroll-div-sidebar/
// scrollingBoxLeftSponsors
$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = $('.scrollingBoxLeftSponsors').outerHeight() - 46; 

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

// sidebarBoxLeftEvents
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

// sidebarBox
$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = $('.sidebarBox').outerHeight() + 248; 

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels) {
			$( ".scrollingBox" ).css({
				"position": "fixed",
				"top": "15px"
			});
		} else {
			$( ".scrollingBox" ).css({
			"position": "static"
			});
		}
	});
});

// sidebarBoxLeft
$(function() {
	// Set this variable with the height of your sidebar + header
	var offsetPixels = $('.sidebarBoxLeft').outerHeight() - 62; 

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