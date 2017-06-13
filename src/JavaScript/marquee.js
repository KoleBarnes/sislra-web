function marquee() {

  var now = new Date();
  
  var RaceFour     = new Date('06/12/2017');
  var RaceFive     = new Date('06/18/2017');
  var RaceSix      = new Date('06/19/2017');
  var RaceSeven    = new Date('07/10/2017');
  var RaceShootout = new Date('07/31/2017');
  var RaceNine     = new Date('08/21/2017');
  var RaceTen      = new Date('09/11/2017');
  var RaceEleven   = new Date('09/18/2017');
  
  var marquee = document.getElementsByClassName("marquee")[0];
  
  if ((RaceFour.getTime() < now.getTime()) && (now.getTime() < RaceFive.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE FIFTH RACE OF THE SEASON IS ON SATURDAY JUNE 17TH! GATES OPEN AT 8:00AM! DOUBLE HEADER WEEKEND!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE FIFTH RACE OF THE SEASON IS ON SATURDAY JUNE 17TH! GATES OPEN AT 8:00AM! DOUBLE HEADER WEEKEND!";
  }
  else if ((RaceFive.getTime() < now.getTime()) && (now.getTime() < RaceSix.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE SIXTH RACE OF THE SEASON IS ON SUNDAY JUNE 18TH! GATES OPEN AT 2:00PM! DOUBLE HEADER WEEKEND!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE SIXTH RACE OF THE SEASON IS ON SUNDAY JUNE 18TH! GATES OPEN AT 2:00PM! DOUBLE HEADER WEEKEND!";
  }
  else if ((RaceSix.getTime() < now.getTime()) && (now.getTime() < RaceSeven.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE SEVENTH RACE OF THE SEASON IS ON SUNDAY JULY 9TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE SEVENTH RACE OF THE SEASON IS ON SUNDAY JULY 9TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceSeven.getTime() < now.getTime()) && (now.getTime() < RaceShootout.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE STREET CAR SHOOTOUT IS ON SUNDAY JULY 30TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE STREET CAR SHOOTOUT IS ON SUNDAY JULY 30TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceShootout.getTime() < now.getTime()) && (now.getTime() < RaceNine.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE NINTH RACE OF THE SEASON IS ON SUNDAY AUGUST 20TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE NINTH RACE OF THE SEASON IS ON SUNDAY AUGUST 20TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceNine.getTime() < now.getTime()) && (now.getTime() < RaceTen.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE TENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 10TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE TENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 10TH! GATES OPEN AT 2:00PM!";
  }
  else if ((RaceTen.getTime() < now.getTime()) && (now.getTime() < RaceEleven.getTime()) ) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THE ELEVENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 17TH! GATES OPEN AT 2:00PM!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THE ELEVENTH RACE OF THE SEASON IS ON SUNDAY SEPTEMBER 17TH! GATES OPEN AT 2:00PM!";
  }
  else if (RaceEleven.getTime() < now.getTime()) {
    marquee.getElementsByClassName("marqueeInfo")[0].innerHTML  = "THANK YOU TO EVERYONE FOR ANOTHER GREAT YEAR!";
    marquee.getElementsByClassName("marqueeInfo2")[0].innerHTML = "THANK YOU TO EVERYONE FOR ANOTHER GREAT YEAR!";
  }
  
};

marquee();