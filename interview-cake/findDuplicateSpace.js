// https://www.interviewcake.com/question/javascript/find-duplicate-optimize-for-space

// O(1) space and O(nlgn) time (pigeonhole property, n distinct items with n + 1 items)

function findRepeat(numbers) {
  // Find a number that appears more than once

  let left = 1;
  let right = numbers.length - 1;

  while (left < right) {
    let midIdx = Math.floor(left + (right - left) / 2);

    // lower range
    let lowerLeftRange = left;
    let lowerRightRange = midIdx;

    // upper range
    let upperLeftRange = midIdx + 1;
    let upperRightRange = right;

    let distinctLowerNums = lowerRightRange - lowerLeftRange + 1;
    let lowerNumsCount = 0;
    numbers.forEach((num) => {
      if (num >= left && num <= lowerRightRange) lowerNumsCount++;
    });

    if (lowerNumsCount > distinctLowerNums) {
      left = lowerLeftRange;
      right = lowerRightRange;
    } else {
      left = upperLeftRange;
      right = upperRightRange;
    }
  }
  return left;
}

// Tests

let desc = "just the repeated number";
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = "short array";
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = "medium array";
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = "long array";
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
