// https://www.interviewcake.com/question/javascript/highest-product-of-3

// const arrayOfInts = [1, 10, -5, 1, -100];

function highestProductOf3(nums) {
  if (nums.length < 3) throw new Error("Array needs at least 3 integers");

  let highest = Math.max(nums[0], nums[1]);
  let lowest = Math.min(nums[0], nums[1]);

  let highestProductOf2 = nums[0] * nums[1];
  let lowestProductOf2 = nums[0] * nums[1];

  let highestProductOf3 = nums[0] * nums[1] * nums[2];

  for (let i = 2; i < nums.length; i++) {
    const current = nums[i];
    const currentHighest = current * highest;
    const currentLowest = current * lowest;

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2 
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      currentHighest,
      currentLowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      currentHighest,
      currentLowest
    );

    highest = Math.max(current, highest);
    lowest = Math.min(current, lowest);
  }

  return highestProductOf3;
}

// highestProductOf3 = max(curent * highestProductOf2, curent * lowestProductOf2)
// highestProductOf2
// lowestProductOf2
// highest
// lowest

// Tests

let desc = "short array";
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = "longer array";
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = "array has one negative";
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = "array has two negatives";
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = "array is all negatives";
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = "error with empty array";
const emptyArray = () => highestProductOf3([]);
assertThrowsError(emptyArray, desc);

desc = "error with one number";
const oneNumber = () => highestProductOf3([1]);
assertThrowsError(oneNumber, desc);

desc = "error with two numbers";
const twoNumber = () => highestProductOf3([1, 1]);
assertThrowsError(twoNumber, desc);

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
