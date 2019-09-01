function math_sequence(a,b){
    debugger;
    console.log("hello");
    var resultArray = [];
    for (var i = 0; i < 4; i++){
        if (i == 0) {resultArray[i] = (a+" "+" + " +b+ "=" +(a+b))}
        if (i == 1) {resultArray[i] = (a+" "+" - " +b+ "=" +(a-b))}
        if (i == 2) resultArray[i] = a+ " "+" *" +b+ "=" +(a*b);
        if (i == 3) resultArray[i] = a+ " "+ "/" +b+ "=" + (a/b)
        console.log(i);
    }
    return resultArray;
}

console.log(math_sequence(2,5));