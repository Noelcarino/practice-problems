function find_middle_letters(string) {

    var arr = string.split('');
    console.log(arr);
    var middle_letter;
    var two_middle_letters;

    if (arr.length % 2 == 0) {
        middle_letter = arr[(arr.length/2)-1];
        two_middle_letters = arr[arr.length/2]
        return middle_letter.toString() + two_middle_letters.toString();
    } else {
        middle_letter = arr[Math.floor(arr.length/2)];
        return middle_letter.toString();
    }

}

var seven =    find_middle_letters('dish');

console.log(seven);