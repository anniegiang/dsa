function findRectangularOverlap(rect1, rect2) {
  const rect1X = { min1: rect1.leftX, max1: rect1.width + rect1.leftX };
  const rect2X = { min2: rect2.leftX, max2: rect2.width + rect2.leftX };

  const rect1Y = { min1: rect1.bottomY, max1: rect1.height + rect1.bottomY };
  const rect2Y = { min2: rect2.bottomY, max2: rect2.height + rect2.bottomY };

  const XOverlap = findOverlap(rect1X, rect2X);
  const YOverlap = findOverlap(rect1Y, rect2Y);

  return {
    leftX: XOverlap.min,
    bottomY: YOverlap.min,
    width: XOverlap.max - XOverlap.min,
    height: YOverlap.max - YOverlap.min,
  };
}

function findOverlap(coord1, coord2) {
  const { min1, max1 } = coord1;
  const { min2, max2 } = coord2;

  let min,
    max = null;

  if (min1 < min2 && max1 > min2) {
    min = min2;
    max = max1;
  } else if (min1 > min2 && max2 > max1) {
    min = min1;
    max = max1;
  } else if (max1 === min2) {
    min = min1;
    max = max2;
  }

  return { min, max };
}

// Tests

let desc = "overlap along both axes";
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = "one rectangle inside another";
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = "both rectangles the same";
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = "touch on horizontal edge";
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = "touch on vertical edge";
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = "touch at a corner";
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = "no overlap";
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a, Object.keys(a).sort());
  const objectB = JSON.stringify(b, Object.keys(b).sort());
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
