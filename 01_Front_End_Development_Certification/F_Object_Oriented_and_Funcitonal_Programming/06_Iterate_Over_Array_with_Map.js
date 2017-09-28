var oldArray = [ 1, 2, 3, 4, 5 ];

var newArray = oldArray.map(function(numVal){
    var mapVal = numVal + 3;
    console.log(mapVal);
    return mapVal;
});