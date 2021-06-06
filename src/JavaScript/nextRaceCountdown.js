// Put exact dates.
// SISLRA Race Schedule
var sislraRaceSchedule = {
  '06/06/2021 12:00 AM': 'SISLRARace',
  '06/27/2021 12:00 AM': 'SISLRARace',
  '07/04/2021 12:00 AM': 'SISLRARace',
  '07/25/2021 12:00 AM': 'SISLRARace',
  '08/08/2021 12:00 AM': 'SISLRARace',
  '08/29/2021 12:00 AM': 'SISLRARace',
  '09/12/2021 12:00 AM': 'SISLRARace',
  // '07/26/2020 12:00 AM': 'SISLRARace',
  // '08/16/2020 12:00 AM': 'SISLRARace',
  // '08/23/2020 12:00 AM': 'SISLRARace',
  // '09/13/2020 12:00 AM': 'SISLRARace',
  //'09/17/2018 12:00 AM': 'SISLRARace'
};

// Port McNeill Race Schedule
var portMcNeillRaceSchedule = {
  '06/19/2020 12:00 AM': 'PortMcNeill', // {
  '06/20/2020 12:00 AM': 'PortMcNeill',
  '06/21/2020 12:00 AM': 'PortMcNeill', // }
  '07/17/2020 12:00 AM': 'PortMcNeill', // {
  '07/18/2020 12:00 AM': 'PortMcNeill',
  '07/19/2020 12:00 AM': 'PortMcNeill', // }
  '08/28/2020 12:00 AM': 'PortMcNeill', // {
  '08/29/2020 12:00 AM': 'PortMcNeill',
  '08/30/2020 12:00 AM': 'PortMcNeill'  // }
};

// Port Alberni Race Schedule
var portAlberniRaceSchedule = {
  '08/09/2018 12:00 AM': 'PortAlberni', // {
  '08/10/2018 12:00 AM': 'PortAlberni',
  '08/11/2018 12:00 AM': 'PortAlberni'  // }
};

CountDownTimer(sislraRaceSchedule);
CountDownTimer(portMcNeillRaceSchedule);
CountDownTimer(portAlberniRaceSchedule);

function CountDownTimer(raceSchedule) {
  
	timer = setInterval(showRemaining, 1000, raceSchedule);
}

function showRemaining(raceSchedule) {
  
  for (var date in raceSchedule) {
    
    var id = raceSchedule[date];
    var end = new Date(date);
    var now = new Date();
    var distance = end - now;
    var dateOfRace = new Date(date);
    var today = new Date();
    dateOfRace.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    
    if(dateOfRace.valueOf() > today.valueOf()) {
      // The date of the next race is in the future ...
      // Show count down timer ...
      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById(id).innerHTML = days + ' Days ';
      document.getElementById(id).innerHTML += hours + ' Hrs ';
      document.getElementById(id).innerHTML += minutes + ' Mins ';
      document.getElementById(id).innerHTML += seconds + ' Secs';
      return;
    } else if (dateOfRace.valueOf() === today.valueOf()) {
      // The date of the next race is today!
      if(id === 'SISLRARace') {
        document.getElementById(id).innerHTML = 'Today!';
      } else {
        document.getElementById(id).innerHTML = 'This weekend!';
      }
      return;
    }
    
    // Otherwise find the next race date ...
  }

  document.getElementById(id).innerHTML = 'TBD';

  // if (id === 'PortAlberni') {
  //   var str = "Revive Port Alberni. Sign the petition.";
  //   var result = str.link("https://wildpacific.co/savealbernidragracing/?fbclid=IwAR2YF4vJtpRc1Ecu-eJwdBPCkkFWah5xDKFp1xXIMHqF3y8m_xDdVNvGZgE");
  //   document.getElementById(id).innerHTML = result;
  // }

}