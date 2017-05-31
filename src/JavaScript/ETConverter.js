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