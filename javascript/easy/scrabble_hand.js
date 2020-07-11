// Scrabble Hand
// https://edabit.com/challenge/i6YqzHcSiPiEQKjeX

function maximumScore(tileHand) {
    var max_score = 0;
    
    for (var i = 0; i < tileHand.length; i++) {
        max_score += tileHand[i].score;
    }

    return max_score;
}