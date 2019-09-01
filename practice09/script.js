function fittingWords(string, array) {
    var newArray = [];
    var eachLetter;
    var eachArrayElement;
    count = 0;

    for (eachArrayElement of array) {  
        for (eachLetter of string) {
            if (eachArrayElement.includes(eachLetter)){
                count++;
            }
            if (count == string.length){
                newArray.push(eachArrayElement);
                count = 0;
            }
        }
    }
    return newArray;
}

var ex1 = fittingWords ("cat", ["caterpillar", "catherine", "caaaaaaan"]);
console.log(ex1);

