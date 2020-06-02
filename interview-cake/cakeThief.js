// https://www.interviewcake.com/question/javascript/cake-thief

function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // Calculate the maximum value we can carry
  let maxValuesAtWeight = new Array(weightCapacity + 1).fill(0);

  for (
    let currentWeight = 0;
    currentWeight <= weightCapacity;
    currentWeight++
  ) {
    let currentMaxValue = 0;
    for (let cake = 0; cake < cakeTypes.length; cake++) {
      const { weight, value } = cakeTypes[cake];

      if (weight <= currentWeight) {
        const maxValueUsingCake =
          value + maxValuesAtWeight[currentWeight - weight];

        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }
    maxValuesAtWeight[currentWeight] = currentMaxValue;
  }

  return maxValuesAtWeight[weightCapacity];
}

/*

const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

*/

// Tests

let desc = "one cake";
let actual = maxDuffelBagValue([{ weight: 2, value: 1 }], 9);
let expected = 4;
assertEqual(actual, expected, desc);

desc = "two cakes";
actual = maxDuffelBagValue(
  [
    { weight: 4, value: 4 },
    { weight: 5, value: 5 },
  ],
  9
);
expected = 9;
assertEqual(actual, expected, desc);

desc = "only take less valuable cake";
actual = maxDuffelBagValue(
  [
    { weight: 4, value: 4 },
    { weight: 5, value: 5 },
  ],
  12
);
expected = 12;
assertEqual(actual, expected, desc);

desc = "lots of cakes";
actual = maxDuffelBagValue(
  [
    { weight: 2, value: 3 },
    { weight: 3, value: 6 },
    { weight: 5, value: 1 },
    { weight: 6, value: 1 },
    { weight: 7, value: 1 },
    { weight: 8, value: 1 },
  ],
  7
);
expected = 12;
assertEqual(actual, expected, desc);

desc = "value to weight ratio is not optimal";
actual = maxDuffelBagValue(
  [
    { weight: 51, value: 52 },
    { weight: 50, value: 50 },
  ],
  100
);
expected = 100;
assertEqual(actual, expected, desc);

desc = "zero capacity";
actual = maxDuffelBagValue([{ weight: 1, value: 2 }], 0);
expected = 0;
assertEqual(actual, expected, desc);

desc = "cake with zero value and weight";
actual = maxDuffelBagValue(
  [
    { weight: 0, value: 0 },
    { weight: 2, value: 1 },
  ],
  7
);
expected = 3;
assertEqual(actual, expected, desc);

desc = "cake with non-zero value and zero weight";
actual = maxDuffelBagValue([{ weight: 0, value: 5 }], 5);
assertEqual(isFinite(actual), false, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
