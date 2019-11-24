function merge(array1, array2) {
	let merged = [];

	while (array1.length || array2.length) {
		let ele1 = array1.length ? array1[0] : Infinity;
		let ele2 = array2.length ? array2[0] : Infinity;

		if (ele1 < ele2) {
			merged.push(array1.shift());
		} else {
			merged.push(array2.shift());
		}
	}

	return merged.concat(array1, array2);
}

function mergeSort(array) {
	if (array.length < 2) return array;

	let midIdx = Math.floor(array.length / 2);

	let left = array.slice(0, midIdx);
	let right = array.slice(midIdx);

	return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
	merge,
	mergeSort
};
