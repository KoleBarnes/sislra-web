//ADD One day to race date
var sislraRaceDates = {
  '1stRace': '06/07/2021',
  '2ndRace': '06/28/2021',
  '3rdRace': '07/05/2021',
  '4thRace': '07/26/2021',
  '5thRace': '08/09/2021',
  '6thRace': '08/30/2021',
  '7thRace': '09/12/2020'/*,
  '8thRace': '07/27/2020',
  '9thRace': '08/17/2020',
  '10thRace': '08/24/2020',
  '11thRace': '09/14/2020' ,
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