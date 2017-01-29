CountDownTimer('08/4/2016 12:00 AM', 'PortAlberni');

function CountDownTimer(dt, id)
{
var end = new Date(dt);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {
		clearInterval(timer);
		document.getElementById(id).innerHTML = 'TBD';
		return;
	}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById(id).innerHTML = days + ' Days ';
		document.getElementById(id).innerHTML += hours + ' Hrs ';
		document.getElementById(id).innerHTML += minutes + ' Mins ';
		document.getElementById(id).innerHTML += seconds + ' Secs';
	}

	timer = setInterval(showRemaining, 1000);
}
// From Here http://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date