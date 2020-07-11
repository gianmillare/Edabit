// Filter Strings from Array
// https://edabit.com/challenge/XKX5NHT92okxXCKW7

function filterArray(arr) {
    var numbers = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            numbers.push(arr[i]);
        }
    }

    return numbers;
}