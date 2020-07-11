// Add the Index
// https://edabit.com/challenge/izss6QT59oH72uky3

function addIndexes(arr) {
    ans = [];

    for (var i = 0; i < arr.length; i++) {
        ans.push(arr[i] + i);
    }

    return ans;
}

console.log(addIndexes([5, 4, 3, 2, 1]));