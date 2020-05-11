function radixSort(arr) {
  if (!Array.isArray(arr)) return null;

  let maxNumDigit = maxNumDigits(arr);

  for (let i = 0; i < maxNumDigit; i++) {
    let buckets = [];

    for (let i = 0; i < 10; i++) {
      buckets.push([]);
    }

    arr.forEach(num => {
      let digit = getDigitAtPlace(num, i);
      buckets[digit].push(num);
    });

    arr = [].concat(...buckets);
  }

  return arr;
}

function getDigitAtPlace(num, place) {
  let res;
  for (let i = 0; i <= place; i++) {
    res = num % 10;
    num = Math.floor(num / 10);
  }

  return res;
}

function maxNumDigits(arr) {
  let max = 0;
  arr.forEach(el => {
    let numDigits = countDigits(el);
    if (numDigits > max) max = numDigits;
  });

  return max;
}

function countDigits(num) {
  let count = 0;
  while (num) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

module.exports = {
  radixSort
};
