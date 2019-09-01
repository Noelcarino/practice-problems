var ex1 = random_range(2,15);
var ex2 = random_range(100,500);
var ex3 = random_range(1,1000);
debugger;
var ex4 = random_range(['a','b','c','d','e','f','g','h','i'])

function random_range(start_num, end_num) {

    if (end_num === undefined){
        var random_number_inArr = start_num[parseInt(Math.random()*(end_num-start_num))];
        return random_number_inArr;
    } else {
        var random_number = parseInt(Math.random()*(end_num-start_num) - 1);
        return random_number;
    }
    
}



console.log("ex1: ", ex1);
console.log("ex2: ", ex2);
console.log("ex3: ", ex3);
console.log("ex4: ", ex4);