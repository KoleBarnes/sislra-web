$(".slideshow > img:gt(0)").hide();

setInterval(function() {
  $('.slideshow > img:first')
  .fadeOut(1500)
  .next()
  .fadeIn(1500)
  .end()
  .appendTo('.slideshow');
  }, 8000);