var sislraRaceDates = {
  '1stRace': '04/23/2018',
  '2ndRace': '04/30/2018',
  '3rdRace': '05/07/2018',
  '4thRace': '05/14/2018',
  '5thRace': '06/04/2018',
  '6thRace': '06/11/2018',
  '7thRace': '07/09/2018',
  '8thRace': '07/30/2018',
  '9thRace': '08/20/2018',
  '10thRace': '09/10/2018',
  '11thRace': '09/24/2018',
  // '12thRace': '09/18/2017'
};

CountDownTimer(sislraRaceDates);

function CountDownTimer(raceDates) {
  setInterval(ShowRemaining, 1000, raceDates);
}

function ShowRemaining(raceDates) {
  
  for (var id in raceDates) {
    var end = new Date(raceDates[id]);
    var now = new Date();
    var distance = end - now;

    if (distance < 0) {
      if (!hasClass(document.getElementById(id), 'over')) {
        document.getElementById(id).className += " over";
      }
    } else {
      document.getElementById(id).className = "current";
      return;
    }    
  }  
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}