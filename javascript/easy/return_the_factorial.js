// Return the Factorial
// https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd

function factorial(int) {
	if (int == 1) {
        return 1;
    } else {
        return int*factorial(int-1);
    }
}