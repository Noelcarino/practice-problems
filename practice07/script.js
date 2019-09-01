function translate(string){
    var newArray = string.split(" ");
    for (var i = 0; i < newArray.length; i++) {
        let missingFirstLetter = newArray[i].substr(1);
        let firstLetter = newArray[i].slice(0,1);
        newArray[i] = (missingFirstLetter + firstLetter + "ay" );
    }
    return newArray.join(" ");
}
var test = "Pig Latin";
var ex1 = translate(test);
console.log("ex1: ", ex1);