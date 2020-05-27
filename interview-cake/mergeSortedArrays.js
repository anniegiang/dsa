// https://www.interviewcake.com/question/javascript/merge-sorted-arrays

// O(n) time and O(n) additional space, where n is the number of items in the merged array.

function mergeArrays(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  if (!arr1.length && arr2.length > 0) return arr2;
  if (!arr2.length && arr1.length > 0) return arr1;

  let merged = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      merged.push(arr1[p1]);
      p1++;
    } else {
      merged.push(arr2[p2]);
      p2++;
    }
  }

  if (p1 !== arr1.length) merged.push(...arr1.slice(p1));
  if (p2 !== arr2.length) merged.push(...arr2.slice(p2));

  return merged;
}

// Tests

let desc = "both arrays are empty";
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = "first array is empty";
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = "second array is empty";
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "both arrays have some numbers";
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = "arrays are different lengths";
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
