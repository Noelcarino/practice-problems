function invert_negatives(number){
    if (typeof(number) == 'string') {
        return false;
    } else if (number > 0 ) {
        return number * -1;
    } else{
        return number;
    } 
}

var ex1 = invert_negatives(-5);
var ex2 = invert_negatives(-4000);
var ex3 = invert_negatives('puppies');
var ex4 = invert_negatives(0);

console.log("ex1: ", ex1);
console.log("ex2: ", ex2);
console.log("ex3: ", ex3);
console.log("ex4: ", ex4);

