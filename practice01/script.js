function biggerWords(str,arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > str.length) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

var ex1 = biggerWords('whales',myArray);

console.log("ex1: ", ex1);