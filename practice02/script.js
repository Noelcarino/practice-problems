function reverseArray(array) {
    var newArray = [];

    for (var i = array.length-1 ; i >-1 ; i--){
        newArray.push(array[i]);
    }

    return newArray;
}

var test = ["yo", "its me", 23, "im hungry"]

var ex1 = reverseArray(test);

console.log("ex1: ", ex1);