// Most Left Digit
// https://edabit.com/challenge/tPvx6pgPmerPrwqM8

function leftDigit(num) {
    const regex = /\d/g;
    var numbers =  num.match(regex);
    
    return parseInt(numbers[0]);
}

console.log(leftDigit("TrAdE2W1n95!"));