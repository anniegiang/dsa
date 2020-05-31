// https://www.interviewcake.com/question/javascript/find-rotation-point

// time = O(logn), space = O(1)

function findRotationPoint(words) {
  // Find the rotation point in the vector
  let floor = 0;
  let ceiling = words.length - 1;

  let firstWord = words[0];

  while (floor < ceiling) {
    let midIdx = Math.floor(floor + (ceiling - floor) / 2);
    let word = words[midIdx];

    if (word >= firstWord) {
      floor = midIdx;
    } else {
      ceiling = midIdx;
    }
    if (floor + 1 === ceiling) break;
  }

  return ceiling;
}

// Tests

let desc = "small array";
let actual = findRotationPoint(["cape", "cake"]);
let expected = 1;
assertEquals(actual, expected, desc);

desc = "medium array";
actual = findRotationPoint(["grape", "orange", "plum", "radish", "apple"]);
expected = 4;
assertEquals(actual, expected, desc);

desc = "large array";
actual = findRotationPoint([
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
]);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
