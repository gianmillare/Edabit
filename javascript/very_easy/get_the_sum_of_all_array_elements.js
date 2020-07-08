// Get the Sum of All Array Elements
// https://edabit.com/challenge/y6dMjvNaPXXNKeBRQ

function getSumOfItems(arr) {
	var sum = arr.reduce(function(a, b){return a + b;}, 0);
  return sum;
}

getSumOfItems([2, 7, 4])