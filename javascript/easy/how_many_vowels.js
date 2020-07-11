// How Many Vowels
// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

function countVowels(str) {
    var count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}