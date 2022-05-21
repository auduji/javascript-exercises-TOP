const leapYears = function(year) {
    let result;
    if (year % 4 === 0 ) {
        return true;
    } else {
        return false;
    }
}

// if year % 4 === 0 && (!(year===100))

// Do not edit below this line
module.exports = leapYears;
