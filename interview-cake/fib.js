// https://www.interviewcake.com/question/javascript/nth-fibonacci

// time = O(2^n) (memoized = O(n)), space = O(2^n) (memoized = O(n)) (Top Down)

function fib(n, memo = {}) {
  // Compute the nth Fibonacci number
  if (n < 0) throw new Error("n cannot be negative");
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  return memo[n];
}

// O(n) time and O(1)O(1) space (Bottoms Up)

function fib(n) {
  if (n < 0) throw new Error("n cannot be negative");
  if (n <= 1) return n;

  let twoAwaySum = 0;
  let oneAwaySum = 1;
  let curr;

  for (let i = 2; i <= n; i++) {
    curr = twoAwaySum + oneAwaySum;
    twoAwaySum = oneAwaySum;
    oneAwaySum = curr;
  }

  return curr;
}

// Tests

let desc = "zeroth fibonacci";
let actual = fib(0);
let expected = 0;
assertEqual(actual, expected, desc);

desc = "first fibonacci";
actual = fib(1);
expected = 1;
assertEqual(actual, expected, desc);

desc = "second fibonacci";
actual = fib(2);
expected = 1;
assertEqual(actual, expected, desc);

desc = "third fibonacci";
actual = fib(3);
expected = 2;
assertEqual(actual, expected, desc);

desc = "fifth fibonacci";
actual = fib(5);
expected = 5;
assertEqual(actual, expected, desc);

desc = "tenth fibonacci";
actual = fib(10);
expected = 55;
assertEqual(actual, expected, desc);

desc = "negative fibonacci";
const negativeFib = () => fib(-1);
assertThrowsError(negativeFib, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
