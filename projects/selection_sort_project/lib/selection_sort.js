function swap(array, index1, index2) {
	[array[index1], array[index2]] = [array[index2], array[index1]];
	return array;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}
		swap(arr, i, minIdx);
	}
	return arr;
}

module.exports = {
	selectionSort,
	swap
};
