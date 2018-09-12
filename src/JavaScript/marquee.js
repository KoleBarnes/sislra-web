function marquee() {

  var now = new Date();
  
  var BurnOff          = new Date('04/10/2018');
  var RaceOne          = new Date('04/23/2018');
  var RaceTwo          = new Date('04/30/2018');
  var RaceThree        = new Date('05/07/2018');
  var RaceFour         = new Date('05/14/2018');
  var RaceFive         = new Date('06/04/2018');
  var RaceSix          = new Date('06/11/2018');
  var RaceSeven        = new Date('07/09/2018');
  var RaceShootout     = new Date('07/30/2018');
  var RaceNine         = new Date('08/20/2018');
  var RaceTen          = new Date('09/10/2018');
  var RaceEleven       = new Date('09/24/2018');
  var RaceChampionship = new Date('10/01/2018');
  
  var marquee = document.getElementsByClassName("marquee")[0];
  
  if (now.getTime() < BurnOff.getTime() ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "TRACK BURN OFF MONDAY APRIL 9TH AT 5:30PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "TRACK BURN OFF MONDAY APRIL 9TH AT 5:30PM!";
  }
  else if ((BurnOff.getTime() < now.getTime()) && (now.getTime() < RaceOne.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE FIRST RACE OF THE SEASON IS ON SUNDAY APRIL 22ND! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE FIRST RACE OF THE SEASON IS ON SUNDAY APRIL 22ND! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceOne.getTime() < now.getTime()) && (now.getTime() < RaceTwo.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE SECOND RACE OF THE SEASON IS ON SUNDAY APRIL 29TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE SECOND RACE OF THE SEASON IS ON SUNDAY APRIL 29TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceTwo.getTime() < now.getTime()) && (now.getTime() < RaceThree.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE THIRD RACE OF THE SEASON IS ON SUNDAY MAY 6TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE THIRD RACE OF THE SEASON IS ON SUNDAY MAY 6TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceThree.getTime() < now.getTime()) && (now.getTime() < RaceFour.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE FOURTH RACE OF THE SEASON IS ON SUNDAY MAY 13TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE FOURTH RACE OF THE SEASON IS ON SUNDAY MAY 13TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceFour.getTime() < now.getTime()) && (now.getTime() < RaceFive.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE FIFTH RACE OF THE SEASON IS ON SUNDAY JUNE 3RD! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE FIFTH RACE OF THE SEASON IS ON SUNDAY JUNE 3RD! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceFive.getTime() < now.getTime()) && (now.getTime() < RaceSix.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE SIXTH RACE OF THE SEASON IS ON SUNDAY JUNE 10TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE SIXTH RACE OF THE SEASON IS ON SUNDAY JUNE 10TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceSix.getTime() < now.getTime()) && (now.getTime() < RaceSeven.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE SEVENTH RACE OF THE SEASON IS ON SUNDAY JULY 8TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE SEVENTH RACE OF THE SEASON IS ON SUNDAY JULY 8TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceSeven.getTime() < now.getTime()) && (now.getTime() < RaceShootout.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE STREET CAR SHOOTOUT IS ON SUNDAY JULY 29TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE STREET CAR SHOOTOUT IS ON SUNDAY JULY 29TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceShootout.getTime() < now.getTime()) && (now.getTime() < RaceNine.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE NINTH RACE OF THE SEASON IS ON SUNDAY AUGUST 19TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE NINTH RACE OF THE SEASON IS ON SUNDAY AUGUST 19TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceNine.getTime() < now.getTime()) && (now.getTime() < RaceTen.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE TENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 9TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE TENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 9TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceTen.getTime() < now.getTime()) && (now.getTime() < RaceChampionship.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE ELEVENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 23RD! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE ELEVENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 23RD! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceEleven.getTime() < now.getTime()) && (now.getTime() < RaceChampionship.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE CHAMPIONSHIP RACE IS ON SUNDAY SEPTEMBER 30TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE CHAMPIONSHIP RACE IS ON SUNDAY SEPTEMBER 30TH! GATES OPEN AT 2:00PM!";
  }
  else if (RaceChampionship.getTime() < now.getTime()) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THANK YOU TO EVERYONE FOR ANOTHER GREAT YEAR!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THANK YOU TO EVERYONE FOR ANOTHER GREAT YEAR!";
  }
  
};

marquee();