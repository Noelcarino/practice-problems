function find_vowels(string) {
    var vowelBank = ['a', 'e', 'i', 'o','u']
    var vowels ="";
    
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < vowelBank.length; j++) {
            if (string.charAt(i) == vowelBank[j]){
                vowels += string.charAt(i);
            }
        }
    }
    return vowels;
}

var ex1 = find_vowels("four score and seven years ago");


console.log("ex1: ", ex1);


