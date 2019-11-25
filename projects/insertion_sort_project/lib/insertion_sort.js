function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let curEl = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > curEl) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = curEl;
	}
	return arr;
}

module.exports = {
	insertionSort
};
