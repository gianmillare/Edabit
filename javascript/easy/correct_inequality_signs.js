// Correct Inequality Signs
// https://edabit.com/challenge/Y2H2aDQhfeE9bHg6m

function correctSigns(str) {
	var a = str.split(/\s+/);
	for (var i = 0; i < a.length-1; i+=2) {
		console.log(a[i]+a[i+1]+a[i+2]);
		if (!eval(a[i]+a[i+1]+a[i+2])) return false;
	}
	return true;
}