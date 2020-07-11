// Xs and Os, Nobody Knows
// https://edabit.com/challenge/RG5NJWDa7pZGFkhTA

function XO(str) {
    var x = 0;
    var y = 0;
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'x' || str[i] == 'X') {
            x++;
        } else if (str[i] == 'o' || str[i] == 'O') {
            y++;
        }
    }
    return x == y;
}

console.log(XO("ooxx"));