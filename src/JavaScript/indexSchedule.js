var sislraRaceDates = {
  '1stRace': '04/23/2017',
  '2ndRace': '05/01/2017',
  '3rdRace': '05/08/2017',
  '4thRace': '05/15/2017',
  '5thRace': '06/12/2017',
  '6thRace': '06/18/2017',
  '7thRace': '06/19/2017',
  '8thRace': '07/10/2017',
  '9thRace': '07/31/2017',
  '10thRace': '08/21/2017',
  '11thRace': '09/11/2017',
  '12thRace': '09/18/2017'
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