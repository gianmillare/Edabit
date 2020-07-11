// Repeating Letters
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
    const str_list = str.split('');
    const mapped = str_list.map(x => x.repeat(2));
    return mapped.join('');
}

console.log(doubleChar("String"));