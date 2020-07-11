// Transform into an Array with No Duplicates
// https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

function set(arr) {
	const unique = new Set(arr);
	return [...unique];
}