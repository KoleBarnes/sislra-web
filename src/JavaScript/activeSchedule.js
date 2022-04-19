//ADD One day to race date
// MM/DD/YYYY
var sislraRaceDates = {
  '1stRace': '04/19/2022',
  '2ndRace': '04/25/2022',
  '3rdRace': '05/16/2022',
  '4thRace': '06/06/2022',
  '5thRace': '06/27/2022',
  '6thRace': '07/25/2022',
  '7thRace': '08/08/2022',
  '8thRace': '08/29/2022',
  '9thRace': '09/12/2022'/*,
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