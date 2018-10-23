function displayMarquee(displayText) {
  
  var marquee = document.getElementsByClassName("marquee")[0];
  
  marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = displayText;
  marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = displayText;

};

function marquee() {

  var now = new Date();
  
  var BurnOff              = new Date('04/09/2018');
  var BurnOffText          = "TRACK BURN OFF MONDAY APRIL 9TH AT 5:30PM!"

  var RaceOne              = new Date('04/23/2018');
  var RaceOneText          = "THE FIRST RACE OF THE SEASON IS ON SUNDAY APRIL 22ND! GATES OPEN AT 2:00PM!"

  var RaceTwo              = new Date('04/30/2018');
  var RaceTwoText          = "THE SECOND RACE OF THE SEASON IS ON SUNDAY APRIL 29TH! GATES OPEN AT 2:00PM!"

  var RaceThree            = new Date('05/07/2018');
  var RaceThreeText        = "THE THIRD RACE OF THE SEASON IS ON SUNDAY MAY 6TH! GATES OPEN AT 2:00PM!"

  var RaceFour             = new Date('05/14/2018');
  var RaceFourText         = "THE FOURTH RACE OF THE SEASON IS ON SUNDAY MAY 13TH! GATES OPEN AT 2:00PM!"

  var RaceFive             = new Date('06/04/2018');
  var RaceFiveText         = "THE FIFTH RACE OF THE SEASON IS ON SUNDAY JUNE 3RD! GATES OPEN AT 2:00PM!"

  var RaceSix              = new Date('06/11/2018');
  var RaceSixText          = "THE SIXTH RACE OF THE SEASON IS ON SUNDAY JUNE 10TH! GATES OPEN AT 2:00PM!"

  var RaceSeven            = new Date('07/09/2018');
  var RaceSevenText        = "THE SEVENTH RACE OF THE SEASON IS ON SUNDAY JULY 8TH! GATES OPEN AT 2:00PM!"

  var RaceShootout         = new Date('07/30/2018');
  var RaceShootoutText     = "THE STREET CAR SHOOTOUT IS ON SUNDAY JULY 29TH! GATES OPEN AT 2:00PM!"

  var RaceNine             = new Date('08/20/2018');
  var RaceNineText         = "THE NINTH RACE OF THE SEASON IS ON SUNDAY AUGUST 19TH! GATES OPEN AT 2:00PM!"

  var RaceTen              = new Date('09/10/2018');
  var RaceTenText          = "THE TENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 9TH! GATES OPEN AT 2:00PM!"

  var RaceChampionship     = new Date('09/24/2018');
  var RaceChampionshipText = "THE CHAMPIONSHIP RACE IS ON SUNDAY SEPTEMBER 23RD! GATES OPEN AT 2:00PM!"

  var ThanksText           = "THANK YOU TO EVERYONE FOR ANOTHER GREAT YEAR!" 

  if (now.getTime() <= BurnOff.getTime() ) {
    displayMarquee(BurnOffText);
  }
  else if ((BurnOff.getTime() < now.getTime()) && (now.getTime() < RaceOne.getTime()) ) {
    displayMarquee(RaceOneText);
  }
  else if ((RaceOne.getTime() <= now.getTime()) && (now.getTime() < RaceTwo.getTime()) ) {
    displayMarquee(RaceTwoText);
  }
  else if ((RaceTwo.getTime() <= now.getTime()) && (now.getTime() < RaceThree.getTime()) ) {
    displayMarquee(RaceThreeText);
  }
  else if ((RaceThree.getTime() <= now.getTime()) && (now.getTime() < RaceFour.getTime()) ) {
    displayMarquee(RaceFourText);
  }
  else if ((RaceFour.getTime() <= now.getTime()) && (now.getTime() < RaceFive.getTime()) ) {
    displayMarquee(RaceFiveText);
  }
  else if ((RaceFive.getTime() <= now.getTime()) && (now.getTime() < RaceSix.getTime()) ) {
    displayMarquee(RaceSixText);
  }
  else if ((RaceSix.getTime() <= now.getTime()) && (now.getTime() < RaceSeven.getTime()) ) {
    displayMarquee(RaceSevenText);
  }
  else if ((RaceSeven.getTime() <= now.getTime()) && (now.getTime() < RaceShootout.getTime()) ) {
    displayMarquee(RaceShootoutText);
  }
  else if ((RaceShootout.getTime() <= now.getTime()) && (now.getTime() < RaceNine.getTime()) ) {
    displayMarquee(RaceNineText);
  }
  else if ((RaceNine.getTime() <= now.getTime()) && (now.getTime() < RaceTen.getTime()) ) {
    displayMarquee(RaceTenText);
  }
  else if ((RaceTen.getTime() <= now.getTime()) && (now.getTime() < RaceChampionship.getTime()) ) {
    displayMarquee(RaceChampionshipText);
  }
  else if (RaceChampionship.getTime() <= now.getTime() ) {
    displayMarquee(ThanksText);
  }
  
};

marquee();