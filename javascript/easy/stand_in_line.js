// Stand in Line
// https://edabit.com/challenge/ebm9Yo3nxxniskr64

function nextInLine(arr, num) {
    if (arr) {
        arr.push(num);
        arr.shift();
        return arr;
    } else {
        return "No array has been selected";
    }
}