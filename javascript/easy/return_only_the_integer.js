// Return Only the Integer
// https://edabit.com/challenge/3xqP79TrHiwnwGizj

function returnOnlyInteger(arr) {
	const result = arr.filter(x => Number.isInteger(x))
	return result;
}