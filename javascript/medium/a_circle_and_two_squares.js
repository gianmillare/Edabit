// A Circle and Two Square
// https://edabit.com/challenge/ApTfL3DXJtyAmiajv

// side of big square = radius * 2
// hypotenuse of small circle = radius * 2
// a2 + b2 = radius * 2
// a = b = csqrt2

function squareAreasDifference(r) {
    var sqrt_2 = Math.sqrt(2);
    var diameter = 2 * r;
    var small_side = diameter / sqrt_2;

    var big_square = diameter * diameter;
    var small_square = small_side * small_side;

    return Math.round(big_square - small_square);
}