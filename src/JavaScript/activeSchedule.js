var sislraRaceDates = {
  '1stRace': '04/08/2019',
  '2ndRace': '04/29/2019',
  '3rdRace': '05/06/2019',
  '4thRace': '05/13/2019',
  '5thRace': '06/03/2019',
  '6thRace': '06/10/2019',
  '7thRace': '07/15/2019',
  '8thRace': '07/29/2019',
  '9thRace': '08/19/2019',
  '10thRace': '09/09/2019',
  '11thRace': '09/23/2019',
  '12thRace': '10/06/2019'
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