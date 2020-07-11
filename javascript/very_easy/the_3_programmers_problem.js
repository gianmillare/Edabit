// The 3 Programmers Problem
// https://edabit.com/challenge/BYZW3yNmG99eLpSdR

function programmers(one, two, three) {
    var pay = [one, two, three];
    return Math.max(...pay) - Math.min(...pay);
}