function randomize_list(arr){
    let counter = arr.length;
    while (counter > 0) {

        // Pick random index from 0 - counter
        let index = Math.floor(Math.random() * counter);
        console.log(counter);

        // Decrement counter
        counter--;

        /*This is where the numbers are swapt*/

        //temp will hold on to this number  - takes
        let temp = arr[counter];

        // this value is replaced by number at respective index - replaces
        arr[counter] = arr[index];

        //arr[index] takes the value of temp number; - drops off temp
        arr[index] = temp;
    }
    return arr;
    // for ( i = 0; i < arr.length; i++) {

    //     let counter = array.length;
    // while (counter > 0) {
    //     let index = Math.floor(Math.random() * counter);
    //     counter--;
    //     let temp = array[counter];
    //     array[counter] = array[index];
    //     array[index] = temp;
    // }
    // return array;

    //     arr.pop(Math.random()*arr.length + 1)

    //     Math.random()*arr.length;   // gives up random number within this range
    //     .pop()                      // take number off of source array.
    //                                 // will directly affect the length of the array
    // }
    
    // newArray = [];
    // function randomize(){
    //     for (var i = 0; i < arr.length; i++){
    //         Math.



    //         // newArray[i] = arr[(Math.random()*(arr.length) + 1)];
    //         // for(var j = 0; j < newArray.length; j++) {
    //         //     if (j == i) {

    //         //     }
    //         // }
    //     }
    // }
    // return arr.sort(Math.random());
}

var test = ["1", "2", "3", "4", "5", "6"                                                                                                                                                                                                              ,];
randomize_list(test);

console.log(test);