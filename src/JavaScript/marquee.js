// Add One Day After Date
function displayMarquee(displayText) {
  
  var marquee = document.getElementsByClassName("marquee")[0];
  
  marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = displayText;
  marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = displayText;

};

function marquee() {

  var now = new Date();
  
  var BurnOff              = new Date('04/09/2018');
  var BurnOffText          = "TRACK BURN OFF MONDAY APRIL 9TH AT 5:30PM!"

  var RaceOne              = new Date('04/06/2020');
  var RaceOneText          = "THE FIRST RACE OF THE SEASON IS ON SUNDAY APRIL 5TH! GATES OPEN AT 2:00PM!"

  var RaceTwo              = new Date('04/20/2020');
  var RaceTwoText          = "THE SECOND RACE OF THE SEASON IS ON SUNDAY APRIL 19TH! GATES OPEN AT 2:00PM!"

  var RaceThree            = new Date('05/04/2020');
  var RaceThreeText        = "THE THIRD RACE OF THE SEASON IS ON SUNDAY MAY 3TH! GATES OPEN AT 2:00PM!"

  var RaceFour             = new Date('05/11/2020');
  var RaceFourText         = "THE FOURTH RACE OF THE SEASON IS ON SUNDAY MAY 10TH! GATES OPEN AT 2:00PM!"

  var RaceFive             = new Date('06/08/2020');
  var RaceFiveText         = "THE FIFTH RACE OF THE SEASON IS ON SUNDAY JUNE 7TH! GATES OPEN AT 2:00PM!"

  var RaceSix              = new Date('06/29/2020');
  var RaceSixText          = "THE SIXTH RACE OF THE SEASON IS ON SUNDAY JUNE 28TH! GATES OPEN AT 2:00PM!"

  var RaceSeven            = new Date('07/06/2020');
  var RaceSevenText        = "THE SEVENTH RACE OF THE SEASON IS ON SUNDAY JULY 5TH! GATES OPEN AT 2:00PM!"

  var RaceShootout         = new Date('07/27/2020');
  var RaceShootoutText     = "THE STREET CAR SHOOTOUT IS ON SUNDAY JULY 26TH! GATES OPEN AT 2:00PM!"

  var RaceNine             = new Date('08/17/2020');
  var RaceNineText         = "THE NINTH RACE OF THE SEASON IS ON SUNDAY AUGUST 16TH! GATES OPEN AT 2:00PM!"

  var RaceTen              = new Date('08/24/2020');
  var RaceTenText          = "THE TENTH RACE OF THE SEASON IS ON SUNDAY AUGUST 23TH! GATES OPEN AT 2:00PM!"

  var RaceChampionship     = new Date('09/14/2020');
  var RaceChampionshipText = "A RAIN DATE HAS BEEN SET FOR SATURDAY SEPTEMBER 13TH! GATES OPEN AT 8:00AM!"

  var RaceChampionship     = new Date('12/08/2020');
  var RaceChampionshipText = "Our Silent Auction will be held on December 7th, 2019 at 7pm at Ma Miller's Pub"

  var ThanksText           = "THANK YOU TO EVERYONE FOR ANOTHER GREAT YEAR!" 

  //var SilentAuction        = "Our Silent Auction will be held on December 7th, 2019 at 7pm at Ma Miller's Pub"

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