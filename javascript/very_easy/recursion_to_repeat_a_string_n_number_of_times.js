// Recursion to Repeat a String n Number of Times
// https://edabit.com/challenge/MjqneMZ7aZa8AxXZG

function repetition(txt, n) {
  return (n == 1) ? txt : (txt + repetition(txt, n - 1));
}

console.log(repetition("abc", 3))