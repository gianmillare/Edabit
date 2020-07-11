// Factorial of a Positive Integer
// https://edabit.com/challenge/Ju7AK9rAGjz86hjxo

function factorial(int) {
	if (int == 1 || int == 0) {
        return 1;
    } else {
        return int*factorial(int-1);
    }
}