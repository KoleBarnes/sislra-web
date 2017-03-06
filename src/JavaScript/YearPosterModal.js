// Get the modal
var modal = document.getElementById('myModal');
var KEYCODE_ESC = 27;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('YearPoster');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	modalImg.alt = this.alt;
	captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	modal.style.display = "none";
}

$(document).keyup(function(e) {
  if (e.keyCode == KEYCODE_ESC);
    modal.style.display = "none";
});