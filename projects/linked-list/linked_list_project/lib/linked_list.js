// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;
    let node = this.head;
    let prev = node;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let node = this.head;
    while (node) {
      if (node.value === target) return true;
      node = node.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    let count = 0;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.addToHead(val);
    if (index === this.length) return !!this.addToTail(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const oldNext = prev.next;

    prev.next = newNode;
    newNode.next = oldNext;

    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.removeHead(index);
    if (index === this.length) return this.removeTail(val);

    const prev = this.get(index - 1);
    const node = prev.next;
    prev.next = node.next;
    this.length--;
    return node;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
