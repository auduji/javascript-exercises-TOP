const ftoc = function(tempF) {
  let degreesC;
  degreesC = (tempF-32)*5/9;
  return degreesC;

};

const ctof = function(tempC) {
  let degreesF;
  degreesF = (tempC*9/5)+32
  return degreesF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
