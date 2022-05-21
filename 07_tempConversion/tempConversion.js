const ftoc = function(tempF) {
  let degreesC;
  degreesC = (tempF-32)*5/9;
  return Number(degreesC.toFixed(1));

};

const ctof = function(tempC) {
  let degreesF;
  degreesF = (tempC*9/5)+32
  return Number(degreesF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
