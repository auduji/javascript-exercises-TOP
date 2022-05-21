const sumAll = function(start, end) {
    if (start < 0|| end < 0) {
        return "ERROR";
    } else if (isNaN(start) || isNaN(end))  {
        return "ERROR";
    } else if (typeof start === "string" || typeof end === "string") {
        return "ERROR";
    }
    let i = Math.max(start,end);
    let sum=0;
    while(i>0) {
        sum = i + sum;
        i--;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
