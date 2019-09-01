


// lets break the string first, find a string method for that
function getPath(string){

    //Version 2 - The power of split method xD

    return string.split('/');

    //version 1 - what the fuck is this long ass code >_>

    // for (var i = 0; i < string.length; i++) {
    //     if (string[i] =='/') {
    //         string[i] = ' '
    //         newArray.push(' ');
    //     } else {
    //         newArray.push(string[i]);
    //     }
    // }
    // newArray.toString();
    // return newArray.join(); 

}

function getPathParts(string){
    var newObject = {
        protocol: ' ',
        host: ' ',
        port: ' ',
        path: ' ',
        file: ' ',
    }
    var protocol = string.split('://')
    console.log(protocol[0]);
    newObject.protocol = protocol[0];

    var host = protocol[1].split('.');
    console.log(host);
    newObject.host = host[0];


    
    console.log(newObject);


    newObject.port = string.split('/',3).toString();
    newObject.path = string.split('.').toString();

    return newObject;
    
}

function getCapitalCount(array){
    // var capTotal = 0;
    // for (var i = 0; i < array.length; i++) {
    //     if (hasUpperCase(array[i][i][0])){
    //         capTotal++;
    //     }
    // }
    // return capTotal;

}
// Call the function, pass an array of objects 
// loop through the array and check object vals
// find result of num1(operator) num2
// compare result to object.result
// if result = object.result, object into new array
function correctCalcChecker(array){
    var newArray = [];
    for (i = 0; i < array.length; i++) {



    }
}

function doMath(){

}
