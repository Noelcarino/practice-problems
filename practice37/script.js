function everyOther(string) {
    var newString = "";
    string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (i % 2 == 0) {
            newString += string[i];
        } else {
            newString +=  string[i].toUpperCase();
        }
    }

    return newString;
}

var ex1 = everyOther("amazing");

console.log("ex1: ", ex1);