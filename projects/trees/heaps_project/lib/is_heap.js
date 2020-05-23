// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
  if (array[idx] === undefined) return true;
  let leftIdx = 2 * idx;
  let rightIdx = 2 * idx + 1;
  let val = array[idx];
  let leftVal = !array[leftIdx] ? -Infinity : array[leftIdx];
  let rightVal = !array[rightIdx] ? -Infinity : array[rightIdx];
  return (
    val > leftVal &&
    val > rightVal &&
    isMaxHeap(array, leftIdx) &&
    isMaxHeap(array, rightIdx)
  );
}

module.exports = {
  isMaxHeap,
};
