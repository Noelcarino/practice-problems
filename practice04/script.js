function sort(arr) {
    return arr.sort();
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] < arr[i+1]){
    //         current = arr[i].shift();
    //         arr.push(current);
    //     }
    //     return arr;
    // }

    // for (var i = 1; i < arr.length; i++ ){
    //     if (newArray.length == 0) {
    //         newArray[0] = arr[i];
    //     }
    //     if (newArray.length == 1) {
    //         if (arr[i][0]<newArray[0]){
    //             newArray.unshift(arr[i]);
    //         } else {
    //             newArray.push(arr[i]);
    //         }
    //     }
    //     if (arr[i] < newArr[i]){
    //         newArr[i]
    //     }

    // }
}

var myArray = ['mouse', 'cat', 'dog', 'human'];
var test = sort(myArray);

console.log(test);