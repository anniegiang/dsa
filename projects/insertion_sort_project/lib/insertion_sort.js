function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let curEl = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > curEl; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = curEl;
	}
	return arr;
}

module.exports = {
	insertionSort
};
