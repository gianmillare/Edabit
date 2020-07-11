// Find the Missing Number
// https://edabit.com/challenge/oMCNzA4DcgpsnXTRJ

function missingNum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var arr_sum = arr.reduce(reducer);
    return 55 - arr_sum;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));