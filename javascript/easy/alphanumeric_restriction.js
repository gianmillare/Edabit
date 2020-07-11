// Alphanumeric Restriction
// https://edabit.com/challenge/DEXocQFvKavLFqCLC

function alphanumericRestriction(str) {
    if (str.length == 0 || str.includes(' ')) {
        return false;
    } else {
        let isnum = /^\d+$/.test(str);
        let isalpha = /^[a-zA-Z]+$/.test(str);
        if (isnum) {
            return isnum;
        } else if (isalpha) {
            return isalpha;
        } else {
            return false;
        }
    }
}

console.log(alphanumericRestriction('ssad2wdw'))