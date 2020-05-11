function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();

  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let midIdx = Math.floor(arr.length / 2);
  let probe = arr.shift();

  let left = arr.filter(el => el < probe);
  let right = arr.filter(el => el >= probe);

  return [...quickSort(left), probe, ...quickSort(right)];
}

module.exports = {
  quickSort
};

// [2, -1, 4, 3, 7, 3]
