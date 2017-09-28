var inputArray = [ 1, 12, 21, 2 ];

inputArray.sort(function(a, b){
    console.log(a - b);
    // inputArray = a - b;
    console.log(inputArray);
    return b - a;
});
console.log(inputArray);