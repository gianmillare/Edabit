// Characters in Shapes
// https://edabit.com/challenge/nkp5xkZwbBH5Ape8b

function countCharacters(arr) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            count++;
        }
    }

    return count;
}

console.log(countCharacters([
    "###",
    "###",
    "###"
  ]))