function winCalculator(source,valNum) {
  valNum = parseFloat(valNum);
  
  var DialIn1 = document.getElementById("DialIn1");
  var DialIn2 = document.getElementById("DialIn2");
  
  var RT1 = document.getElementById("RT1");
  var RT2 = document.getElementById("RT2");
  
  var ET1 = document.getElementById("ET1");
  var ET2 = document.getElementById("ET2");
  
  var RT1plusET1 = document.getElementById("RT1plusET1");
  var RT2plusET2 = document.getElementById("RT2plusET2");
  
  if ((source=="RT1")|(source=="ET1")) {
    RT1plusET1.value=(+RT1.value + +ET1.value).toFixed(3);
  }
  if ((source=="RT2")|(source=="ET2")) {
    RT2plusET2.value=(+RT2.value + +ET2.value).toFixed(3);
  }
  if ((source==DialIn1)|(source==DialIn2)) {
    var Difference = math.abs(+DialIn1 - +DialIn2);
  }
}