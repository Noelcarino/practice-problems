function evenodd(array) {
    var oddArray = [];
    var evenArray = [];
    var arrHolder = {};
    for (number of array) {
        if (typeof number == "number") {
            if (number % 2 == 0 ) {
                if (!evenArray.includes(number)){evenArray.push(number)};
            } else {
                if (!oddArray.includes(number)){oddArray.push(number)};
            }
        }
    }
    arrHolder.odd = oddArray;
    arrHolder.even = evenArray;
    return arrHolder;

}

var ex1 = evenodd([2,5,1,6,8,2,20,'cat',13,3]);

console.log(ex1);