function countdown() {
    var i = document.getElementById('count');
    if (parseInt(i.innerHTML)<=1) {
        location.href = 'index.html';
    }
    i.innerHTML = parseInt(i.innerHTML)-1;
}
setInterval(function(){ countdown(); },1000);

// var counter = 10;
// setInterval(function() {
    // counter--;
    // if(counter <= 0) {
      // //window.location = 'index.html';
      // location.href = 'index.html';
    // } else {
      // document.getElementById("count").innerHTML = counter;
    // }
// }, 1000);​