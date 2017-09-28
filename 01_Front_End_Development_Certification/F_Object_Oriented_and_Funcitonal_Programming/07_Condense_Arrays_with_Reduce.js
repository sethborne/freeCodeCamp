var array = [ 4, 5, 6, 7, 8 ];
var singleVal = 0;

singleVal = array.reduce(function(numValSum, numValCurrent){
    var numValSum = numValSum + numValCurrent;
    return numValSum;
});
console.log(singleVal);