function skippy_numbers(n){
    var newArray = [n];
    var skippyN = 1;
    var sum = n;
    for (var i = 1; i < 8; i++) {
        if (skippyN == 1) {
            sum += skippyN;
            skippyN = 2;
        } else {
            sum+=skippyN;
            skippyN = 1;
        }
        newArray.push(sum);
    }
    return newArray;
}

console.log(skippy_numbers(2));