function speedConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputQuarterMile = document.getElementById("inputQuarterMile");
  var inputEighthMile = document.getElementById("inputEighthMile");
  var input384Feet = document.getElementById("input384Feet");
  if (source=="inputQuarterMile") {
    inputEighthMile.value=(valNum/1.56).toFixed(3);
    input384Feet.value=(valNum/2.25).toFixed(3);
  }
  if (source=="inputEighthMile") {
    inputQuarterMile.value=(valNum*1.56).toFixed(3);
    input384Feet.value=(valNum*1.56/2.25).toFixed(3);
  }
  if (source=="input384Feet") {
    inputQuarterMile.value=(valNum*2.25).toFixed(3);
    inputEighthMile.value=(valNum/1.56*2.25).toFixed(3);
  }
}

function winCalculator(source,valNum) {
  // valNum = parseFloat(valNum);
  
  var DialIna = document.getElementById("DialIna");
  var DialInb = document.getElementById("DialInb");
  
  var RTa = document.getElementById("RTa");
  var RTb = document.getElementById("RTb");
  
  var ETa = document.getElementById("ETa");
  var ETb = document.getElementById("ETb");
 
  RtaPlusEta.value = (+RTa.value + +ETa.value).toFixed(3);
  RtbPlusEtb.value = (+RTb.value + +ETb.value).toFixed(3);
  
  var diff = Math.abs(+DialIna.value - +DialInb.value).toFixed(3);
  
  RtaPlusEtaPlusDiff.value = +RtaPlusEta.value;
  RtbPlusEtbPlusDiff.value = +RtbPlusEtb.value;
  
  if (+DialIna.value >= +DialInb.value) {
    RtbPlusEtbPlusDiff.value = (+RtbPlusEtbPlusDiff.value + +diff).toFixed(3);
    diffb.value = diff;
  } else  {
    RtaPlusEtaPlusDiff.value = (+RtaPlusEtaPlusDiff.value + +diff).toFixed(3);
    diffa.value = diff;
  }
  
  var MOV = Math.abs(+RtaPlusEtaPlusDiff.value - +RtbPlusEtbPlusDiff.value).toFixed(3);
  
  if (+RtaPlusEtaPlusDiff.value <= +RtbPlusEtbPlusDiff.value) {
    wina.value = "Win!";
    MOVa.value = MOV;
  } else {
    winb.value = "Win!";
    MOVb.value = MOV;
  }
  
}

function showWinCalculatorAnswer() {
  document.getElementById('winCalculatorAnswer').style.display = "table";
  winCalculator();
}

function winCalculatorReset() {
  if (confirm("Are you sure you want to reset?") == true) {
    document.getElementById('winCalculatorAnswer').style.display = "none";
    document.getElementById("winCalculator").reset();
  }
}