// function sort(a,b) {
//     return a-b;
// }

function sortArray(array) {
    return array.sort(function(a,b){return a-b});
}


console.log(sortArray([1,10,7,3,5,13,2]));