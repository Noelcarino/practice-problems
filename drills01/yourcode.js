
function sumArray(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++ ) {
        sum += array[i];
    }
    return sum;
}

/* 
    fitWithinVal: given an array and a number, sum the array until you reach the number. 
    keep adding any values that would total below the given value return an array of 
    every number you could add For example:
    input: [1,100,2,4,5,6], 7)
    return [1,2,4]
*/
        /*
            This last conditional was fucking with your problem - Cody
            BUT WHYYY??
            EXPLAIN BELOW:
        
        */
        //  else if  (total != num && total < num ) {
        //     total += array[i];
        //     newArray.push(array[i]);

        // } else {
        //     for (i = 0; i < newArray.length; i++) {
        //         testTotal += newArray[i];
        //         console.log("test total = ", testTotal);
        //     }
        //     return total;


function fitWithinVal(array, num){
    
    // Initialize the sum to 0
    var newArray = [];
    var total = 0;
    var testTotal = 0;
    for (var i = 0; i < array.length; i++) {
        if (total == num) {
            return newArray;
        } else if  (total + array[i] < num) {
            total += array[i];
            newArray.push(array[i]);
        }           
    }

    for (i = 0; i < newArray.length; i++) {
        testTotal += newArray[i];
        console.log("total = ", testTotal);
    }
    return newArray ;
}

function getAllNamesShorterThan(array, num){
    var newArray = [];
    for (var k = 0; k < array.length; k++){
        if (array[k].length < num) {
            newArray.push(array[k]);
        }
    }
    return newArray;
}

function makeLabel(person){
    return person["greeting"] + " " + person["givenName"] + " " + person["familyName"] + "\n"
        + person["home address"]["streetNumber"] + " " + person["home address"]["streetName"] + "\n"
        + person["home address"]["city"] + ", " + person["home address"]["state"] + " " + person["home address"]["zip"];
}
