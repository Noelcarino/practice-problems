function do_math(num1, num2, operator){
    var result = null;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid Format";
            break;
    }

    return result;
}

var ex1 = do_math(5,5, "+");
var ex2 = do_math(5,5,"-");
var ex3 = do_math(5,5,"*");
var ex4 = do_math(5,5, "/");

console.log("ex1: ", ex1);
console.log("ex2: ", ex2);
console.log("ex3: ", ex3);
console.log("ex4: ", ex4);