

function countOccurences(array,string){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == string) {
            newArray.push(array[i]);
        }
    }

    return newArray.length;
}

function wordLengths(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        newArray.push(array[i].length);
    }

    return newArray;
}

function getMinMaxMean(array){
    var total = 0;
    var newObject = {};
    newObject.min = Math.min(...array);
    newObject.max = Math.max(...array);

    // Find the Mean
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }

    
    newObject.mean = total/array.length;

    return newObject;

}

function findMode(array){
    return Math.mode(...array);
}
