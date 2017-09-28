var oldArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var newArray = oldArray.filter(function(val){
    newArray = val <= 5;
    console.log(newArray);
    return newArray;
});
console.log(newArray);