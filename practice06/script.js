function fibSequence(parameter){
    var fibString = "0 1";
    var fibArray = [0, 1]
    for (var i = 2; i <= parameter; i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
        fibArray.push(fibArray[i]);
        fibString += (" " + fibArray[i]);    }
    return fibString;
}

var ex1 = fibSequence(11);

console.log("ex1: ", ex1);

    // var fibString = [0,];
    // for (var i = 0; i < parameter.length; i++) {
    //     if (fibString[i] <0){
    //         fibString[i] = (fibString[i-1] + fibString[i-2]) * -1;
    //     } else {
    //         fibString[i] = (fibString[i-1] + fibString[i-2]);
    //     }

    // }
    // return fibString;
    // var fibString = "0 1";
    // var fibArray = [0, 1]
    // for (var i = 2; i <= parameter; i++){
    //     fibArray[i] = fibArray[i-1] + fibArray[i-2];
    //     fibArray.push(fibArray[i]);
    //     fibString += (" " + fibArray[i]);
    //     console.log(fibArray[i]);
    // }
    // return fibString;