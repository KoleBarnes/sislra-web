startSlideShow();

function startSlideShow() {
  $(".slideshow > img:gt(0)").hide();
  setInterval(headerSlideShow, 6000);
  function headerSlideShow() {$('.slideshow > img:first').fadeOut(1500).next().fadeIn(1500).end().appendTo('.slideshow');}
}