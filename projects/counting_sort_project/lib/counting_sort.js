function countingSort(arr, max) {
	const result = [];
	const countArr = new Array(max + 1).fill(0);

	for (let i = 0; i < arr.length; i++) {
		countArr[arr[i]]++;
	}

	for (let i = 0; i < countArr.length; i++) {
		while (countArr[i] > 0) {
			result.push(i);
			countArr[i]--;
		}
	}

	return result;
}

module.exports = {
	countingSort
};
