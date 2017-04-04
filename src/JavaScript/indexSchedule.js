var sislraRaceDates = {
  '1stRace': '04/23/2017',
  '2ndRace': '04/30/2017',
  '3rdRace': '05/07/2017',
  '4thRace': '05/14/2017',
  '5thRace': '06/11/2017',
  '6thRace': '06/18/2017',
  '7thRace': '07/09/2017',
  '8thRace': '07/30/2017',
  '9thRace': '08/20/2017',
  '10thRace': '09/10/2017',
  '11thRace': '09/17/2017'
};

CountDownTimer(sislraRaceDates);

function CountDownTimer(raceDates) {
  
  timer = setInterval(ShowRemaining, 1000, raceDates);
}

function ShowRemaining(raceDates) {
  
  for (var id in raceDates) {
    var end = new Date(raceDates[id]);
    var now = new Date();
    var distance = end - now;

    if (distance < 0) {
      document.getElementById(id).className += " over";
    } else {
      document.getElementById(id).className = "current";
      return;
    }    
  }  
}