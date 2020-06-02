// https://www.interviewcake.com/question/javascript/coin

// O(n∗m) time and O(n) additional space, where n is the amount of money and m is the number of potential denominations.

function changePossibilities(amount, denominations) {
  // Calculate the number of ways to make change
  const table = new Array(amount + 1).fill(0);
  table[0] = 1;

  denominations.forEach((coin) => {
    for (let newAmt = coin; newAmt <= amount; newAmt++) {
      const remainder = newAmt - coin;
      table[newAmt] += table[remainder];
    }
  });

  return table[amount];
}

// Tests

let desc = "sample input";
let actual = changePossibilities(4, [1, 2, 3]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = "one way to make zero cents";
actual = changePossibilities(0, [1, 2]);
expected = 1;
assertEqual(actual, expected, desc);

desc = "no ways if no coins";
actual = changePossibilities(1, []);
expected = 0;
assertEqual(actual, expected, desc);

desc = "big coin value";
actual = changePossibilities(5, [25, 50]);
expected = 0;
assertEqual(actual, expected, desc);

desc = "big target amount";
actual = changePossibilities(50, [5, 10]);
expected = 6;
assertEqual(actual, expected, desc);

desc = "change for one dollar";
actual = changePossibilities(100, [1, 5, 10, 25, 50]);
expected = 292;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
