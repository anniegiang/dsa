// function merge(array1, array2) {
// 	let merged = [];

// 	while (array1.length && array2.length) {
// 		if (array1[0] <= array2[0]) {
// 			merged.push(array1.shift());
// 		} else {
// 			merged.push(array2.shift());
// 		}
// 	}

// 	return merged.concat(...array1, ...array2);
// }

// function mergeSort(array) {
// 	if (array.length <= 1) return array;

// 	let midIdx = Math.floor(array.length / 2);
// 	let left = array.slice(0, midIdx);
// 	let right = array.slice(midIdx);

// 	return merge(mergeSort(left), mergeSort(right));
// }

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let midIdx = Math.floor(arr.length / 2);

  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  return sorted.concat(...arr1).concat(...arr2);
}

module.exports = {
  merge,
  mergeSort
};
