class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  swap(i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);

    if (this.array[idx] > this.array[parentIdx]) {
      this.swap(idx, parentIdx);
      this.siftUp(parentIdx);
    }
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);

    let val = this.array[idx];
    let leftVal = this.array[leftIdx];
    let rightVal = this.array[rightIdx];

    if (!leftVal) leftVal = -Infinity;
    if (!rightVal) rightVal = -Infinity;

    if (val > leftVal && val > rightVal) return;

    let swapIdx = leftVal < rightVal ? rightIdx : leftIdx;

    this.swap(idx, swapIdx);
    this.siftDown(swapIdx);
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    let oldRoot = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return oldRoot;
  }
}

module.exports = {
  MaxHeap,
};
