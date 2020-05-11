function binarySearch(array, target) {
  if (array.length === 0) return false;

  let midIdx = Math.floor(array.length / 2);
  let probe = array[midIdx];

  if (target === probe) {
    return true;
  } else if (target < probe) {
    return binarySearch(array.slice(0, midIdx), target);
  } else if (target > probe) {
    let res = binarySearch(array.slice(midIdx + 1), target);
    return res === false ? false : res;
  }
}

function binarySearchIndex(array, target) {
  if (array.length === 0) return -1;

  let midIdx = Math.floor(array.length / 2);
  let probe = array[midIdx];

  if (target === probe) {
    return midIdx;
  } else if (target < probe) {
    return binarySearchIndex(array.slice(0, midIdx), target);
  } else if (target > probe) {
    let res = binarySearchIndex(array.slice(midIdx + 1), target);
    return res === -1 ? -1 : res + midIdx + 1;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex
};
