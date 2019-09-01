function group(array) {
    var groupedArray = [];
    var groupString = [];
    var groupBoolean = [];
    var groupNumbers = [];

    for (var i = 0; i < array.length; i++) {
        if ((typeof array[i]) === "string") {
            groupString.push(array[i]); 
        } else if ((typeof array[i]) === "boolean"){
            groupBoolean.push(array[i]);
        } else if ((typeof array[i]) === "number") {
            groupNumbers.push(array[i]);
        }
    }
    groupedArray.push(groupString, groupNumbers,groupBoolean);
    return groupedArray;
}

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
var ex1 = group(myArray);

console.log("ex1: ", ex1);
