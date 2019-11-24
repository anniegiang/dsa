function swap(array, index1, index2) {
	[array[index1], array[index2]] = [array[index2], array[index1]];
	return array;
}

function selectionSort(arr) {
	let sorted = false;

	while (!sorted) {
		sorted = true;
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				arr = swap(arr, i, i - 1);
				sorted = false;
			}
		}
	}

	return arr;
}

module.exports = {
	selectionSort,
	swap
};
