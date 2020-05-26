// https://www.interviewcake.com/question/javascript/reverse-string-in-place

// time = O(n), space = O(1)

function reverse(arr) {
  if (!arr.length) return arr;

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    swap(arr, leftIdx, rightIdx);
    leftIdx++;
    rightIdx--;
  }

  return arr;
}

function swap(arr, i, j) {
  [arr[i], [arr[j]]] = [arr[j], [arr[i]]];
}

// Tests

let desc = "empty string";
let input = "".split("");
reverse(input);
let actual = input.join("");
let expected = "";
assertEqual(actual, expected, desc);

desc = "single character string";
input = "A".split("");
reverse(input);
actual = input.join("");
expected = "A";
assertEqual(actual, expected, desc);

desc = "longer string";
input = "ABCDE".split("");
reverse(input);
actual = input.join("");
expected = "EDCBA";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
