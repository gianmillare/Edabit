// How Many Solutions Does This Quadratic Have
// https://edabit.com/challenge/x2DEtfqm4RhGcziw9

// b^2 - 4ac

function solutions(a, b, c) {
    d = (b**2) - (4*a*c);
    if (d > 0) {
        return 2;
    } else if (d == 0) {
        return 1;
    } else {
        return 0;
    }
}