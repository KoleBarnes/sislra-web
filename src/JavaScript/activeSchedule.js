//Day One day to race date
var sislraRaceDates = {
  '1stRace': '04/06/2020',
  '2ndRace': '04/20/2020',
  '3rdRace': '05/04/2020',
  '4thRace': '05/11/2020',
  '5thRace': '06/08/2020',
  '6thRace': '06/29/2020',
  '7thRace': '07/06/2020',
  '8thRace': '07/27/2020',
  '9thRace': '08/17/2020',
  '10thRace': '08/24/2020',
  '11thRace': '09/14/2020'/* ,
  '12thRace': '10/06/2019' */
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