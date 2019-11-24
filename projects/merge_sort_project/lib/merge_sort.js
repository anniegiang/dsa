function merge(array1, array2) {
	let merged = [];

	while (array1.length && array2.length) {
		if (array1[0] <= array2[0]) {
			merged.push(array1.shift());
		} else {
			merged.push(array2.shift());
		}
	}

	return merged.concat(...array1, ...array2);
}

function mergeSort(array) {
	if (array.length <= 1) return array;

	let midIdx = Math.floor(array.length / 2);
	let left = array.slice(0, midIdx);
	let right = array.slice(midIdx);

	return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
	merge,
	mergeSort
};
